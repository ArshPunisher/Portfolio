/**
 * Escapes text for safe interpolation into an HTML email body.
 * Without this, a submitted `<img src=x onerror=...>` or a disguised phishing
 * anchor renders live in the recipient's mail client.
 */
export function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

/** Strips CR/LF so user input can't inject extra mail headers via the subject. */
export function sanitizeHeader(value: string): string {
  return value.replace(/[\r\n]+/g, " ").trim();
}
