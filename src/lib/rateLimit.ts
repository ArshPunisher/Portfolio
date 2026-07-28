/**
 * Minimal fixed-window rate limiter.
 *
 * NOTE: state is per-process and in-memory. On serverless (Vercel) each cold
 * instance gets its own counter, so this raises the cost of spamming without
 * being a hard guarantee. If the form ever gets seriously abused, swap the
 * Map for Upstash Redis — the `check` signature can stay the same.
 */
type Entry = { count: number; resetAt: number };

const buckets = new Map<string, Entry>();

const WINDOW_MS = 60 * 60 * 1000; // 1 hour
const MAX_REQUESTS = 5;

export type RateLimitResult = {
  allowed: boolean;
  remaining: number;
  retryAfterSeconds: number;
};

export function checkRateLimit(
  key: string,
  { windowMs = WINDOW_MS, max = MAX_REQUESTS } = {}
): RateLimitResult {
  const now = Date.now();
  const entry = buckets.get(key);

  if (!entry || now >= entry.resetAt) {
    buckets.set(key, { count: 1, resetAt: now + windowMs });
    return { allowed: true, remaining: max - 1, retryAfterSeconds: 0 };
  }

  entry.count += 1;
  const retryAfterSeconds = Math.ceil((entry.resetAt - now) / 1000);

  if (entry.count > max) {
    return { allowed: false, remaining: 0, retryAfterSeconds };
  }

  return { allowed: true, remaining: max - entry.count, retryAfterSeconds };
}

/** Opportunistic cleanup so the Map can't grow without bound. */
export function pruneRateLimits() {
  const now = Date.now();
  for (const [key, entry] of buckets) {
    if (now >= entry.resetAt) buckets.delete(key);
  }
}
