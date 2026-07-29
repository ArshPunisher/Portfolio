import { describe, expect, it } from "vitest";
import { contactSchema } from "./contactSchema";

const valid = {
  name: "Arsh",
  email: "someone@example.com",
  subject: "Hello",
  message: "This message is definitely long enough.",
};

describe("contactSchema", () => {
  it("accepts a well-formed submission", () => {
    expect(contactSchema.safeParse(valid).success).toBe(true);
  });

  it("treats subject as optional", () => {
    const { subject: _subject, ...withoutSubject } = valid;
    expect(contactSchema.safeParse(withoutSubject).success).toBe(true);
    expect(contactSchema.safeParse({ ...valid, subject: "" }).success).toBe(
      true
    );
  });

  it.each([
    ["name too short", { ...valid, name: "A" }],
    ["invalid email", { ...valid, email: "not-an-email" }],
    ["message too short", { ...valid, message: "hi" }],
    ["subject too long", { ...valid, subject: "x".repeat(201) }],
    ["missing everything", {}],
  ])("rejects %s", (_label, input) => {
    expect(contactSchema.safeParse(input).success).toBe(false);
  });

  it("surfaces a human-readable message for the first issue", () => {
    const result = contactSchema.safeParse({ ...valid, name: "A" });
    expect(result.success).toBe(false);
    if (!result.success) {
      expect(result.error.issues[0]?.message).toBe(
        "Name must be at least 2 characters"
      );
    }
  });
});
