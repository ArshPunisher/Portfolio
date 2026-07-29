import { describe, expect, it } from "vitest";
import { escapeHtml, sanitizeHeader } from "./escapeHtml";

describe("escapeHtml", () => {
  it.each([
    [
      '<img src=x onerror="alert(1)">',
      "&lt;img src=x onerror=&quot;alert(1)&quot;&gt;",
    ],
    ["<script>alert(1)</script>", "&lt;script&gt;alert(1)&lt;/script&gt;"],
    ["Tom & Jerry", "Tom &amp; Jerry"],
    ["it's", "it&#39;s"],
  ])("escapes %s", (input, expected) => {
    expect(escapeHtml(input)).toBe(expected);
  });

  it("leaves no executable markup in a phishing payload", () => {
    const payload = '<a href="https://evil.example">Verify your account</a>';
    expect(escapeHtml(payload)).not.toMatch(/<[a-zA-Z/]/);
  });

  it("escapes ampersands before entities so output is not double-decoded", () => {
    // If & were escaped last, "&lt;" would round-trip back into "<".
    expect(escapeHtml("&lt;")).toBe("&amp;lt;");
  });

  it("is a no-op for ordinary text", () => {
    expect(escapeHtml("Hello there, this is a normal message.")).toBe(
      "Hello there, this is a normal message."
    );
  });
});

describe("sanitizeHeader", () => {
  it("strips CRLF so extra mail headers cannot be injected", () => {
    expect(sanitizeHeader("Subject\r\nBcc: victim@example.com")).toBe(
      "Subject Bcc: victim@example.com"
    );
  });

  it("collapses bare newlines and trims", () => {
    expect(sanitizeHeader("  hello\nworld  ")).toBe("hello world");
  });
});
