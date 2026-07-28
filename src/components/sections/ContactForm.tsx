"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import toast from "react-hot-toast";
import { contactSchema, type ContactInput } from "@/utils/contactSchema";
import styles from "./ContactForm.module.css";

export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactInput>({
    resolver: zodResolver(contactSchema),
    defaultValues: { name: "", email: "", subject: "", message: "" },
  });

  const onSubmit = async (data: ContactInput) => {
    setLoading(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        // The API always returns a user-safe `error` string; fall back only if
        // the response wasn't JSON at all (proxy error, network interception).
        const payload = await res.json().catch(() => null);
        toast.error(
          payload?.error ?? "Couldn't reach the server. Please try again."
        );
        return;
      }

      toast.success("Message sent! I'll get back to you soon.");
      reset();
    } catch {
      toast.error("Couldn't reach the server. Please check your connection.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="mx-auto flex w-full max-w-2xl flex-col justify-center gap-4 rounded-2xl bg-white/10 px-6 backdrop-blur-md"
      noValidate
    >
      <div>
        <label htmlFor="name" className={styles.label}>
          Name<span className={styles.required}>*</span>
        </label>
        <input
          id="name"
          type="text"
          autoComplete="name"
          className={styles.input}
          placeholder="Your name"
          aria-invalid={Boolean(errors.name)}
          aria-describedby={errors.name ? "name-error" : undefined}
          {...register("name")}
        />
        {errors.name && (
          <p id="name-error" role="alert" className={styles.error}>
            {errors.name.message}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="email" className={styles.label}>
          Email<span className={styles.required}>*</span>
        </label>
        <input
          id="email"
          type="email"
          autoComplete="email"
          className={styles.input}
          placeholder="example@email.com"
          aria-invalid={Boolean(errors.email)}
          aria-describedby={errors.email ? "email-error" : undefined}
          {...register("email")}
        />
        {errors.email && (
          <p id="email-error" role="alert" className={styles.error}>
            {errors.email.message}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="subject" className={styles.label}>
          Subject <span className={styles.optional}>(optional)</span>
        </label>
        <input
          id="subject"
          type="text"
          className={styles.input}
          placeholder="Subject (optional)"
          aria-invalid={Boolean(errors.subject)}
          aria-describedby={errors.subject ? "subject-error" : undefined}
          {...register("subject")}
        />
        {errors.subject && (
          <p id="subject-error" role="alert" className={styles.error}>
            {errors.subject.message}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="message" className={styles.label}>
          Message<span className={styles.required}>*</span>
        </label>
        <textarea
          id="message"
          rows={6}
          className={styles.input}
          placeholder="Write your message here..."
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "message-error" : undefined}
          {...register("message")}
        />
        {errors.message && (
          <p id="message-error" role="alert" className={styles.error}>
            {errors.message.message}
          </p>
        )}
      </div>

      <button type="submit" disabled={loading} className={styles.button}>
        {loading ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}
