import { afterEach, describe, expect, it, vi } from "vitest";
import { checkRateLimit, pruneRateLimits } from "./rateLimit";

afterEach(() => {
  vi.useRealTimers();
});

describe("checkRateLimit", () => {
  it("allows up to the limit and blocks the next request", () => {
    const key = "ip-allow-block";
    for (let i = 0; i < 5; i++) {
      expect(checkRateLimit(key, { max: 5 }).allowed).toBe(true);
    }
    expect(checkRateLimit(key, { max: 5 }).allowed).toBe(false);
  });

  it("reports a positive retry-after once blocked", () => {
    const key = "ip-retry-after";
    for (let i = 0; i < 3; i++) checkRateLimit(key, { max: 2 });
    const result = checkRateLimit(key, { max: 2 });
    expect(result.allowed).toBe(false);
    expect(result.retryAfterSeconds).toBeGreaterThan(0);
  });

  it("counts each key independently", () => {
    checkRateLimit("ip-a", { max: 1 });
    expect(checkRateLimit("ip-a", { max: 1 }).allowed).toBe(false);
    expect(checkRateLimit("ip-b", { max: 1 }).allowed).toBe(true);
  });

  it("decrements the remaining allowance", () => {
    const key = "ip-remaining";
    expect(checkRateLimit(key, { max: 3 }).remaining).toBe(2);
    expect(checkRateLimit(key, { max: 3 }).remaining).toBe(1);
  });

  it("resets once the window elapses", () => {
    vi.useFakeTimers();
    const key = "ip-window";
    checkRateLimit(key, { max: 1, windowMs: 1000 });
    expect(checkRateLimit(key, { max: 1, windowMs: 1000 }).allowed).toBe(false);

    vi.advanceTimersByTime(1001);
    expect(checkRateLimit(key, { max: 1, windowMs: 1000 }).allowed).toBe(true);
  });
});

describe("pruneRateLimits", () => {
  it("drops expired buckets without affecting live ones", () => {
    vi.useFakeTimers();
    checkRateLimit("ip-expired", { max: 1, windowMs: 1000 });
    checkRateLimit("ip-live", { max: 1, windowMs: 60_000 });

    vi.advanceTimersByTime(1001);
    pruneRateLimits();

    // Pruned: a fresh window, so allowed again.
    expect(
      checkRateLimit("ip-expired", { max: 1, windowMs: 1000 }).allowed
    ).toBe(true);
    // Untouched: still inside its window and already spent.
    expect(
      checkRateLimit("ip-live", { max: 1, windowMs: 60_000 }).allowed
    ).toBe(false);
  });
});
