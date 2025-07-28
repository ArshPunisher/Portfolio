"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactSchema, type ContactInput } from "@/utils/contactSchema";
import toast from "react-hot-toast";
import './Contact-form.css'; // Assuming you have a CSS file for styles

export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactInput>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
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
        const payload = await res.json().catch(() => ({}));
        throw new Error(payload.error || "Failed to send message");
      }
      toast.success("Message sent! I’ll get back to you soon.");
      reset();
    } catch (e: any) {
      toast.error(e.message ?? "Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full max-w-2xl mx-auto bg-white/10 rounded-2xl px-6 gap-4 flex flex-col justify-center backdrop-blur-md"
      noValidate
    >
      <div>
        <label htmlFor="name" className="contact-label">Name<span>*</span></label>
        <input
          id="name"
          type="text"
          {...register("name")}
          className="contact-input"
          placeholder="Your name"
        />
        {errors.name && <p className="error">{errors.name.message}</p>}
      </div>
      <div>
        <label htmlFor="email" className="contact-label">Email<span>*</span></label>
        <input
          id="email"
          type="email"
          {...register("email")}
          className="contact-input"
          placeholder="example@email.com"
        />
        {errors.email && <p className="error">{errors.email.message}</p>}
      </div>
      <div>
        <label htmlFor="subject" className="contact-label">Subject <span style={{ fontSize: '0.9rem', color: '#ccc' }}>(optional)</span></label>
        <input
          id="subject"
          type="text"
          {...register("subject")}
          className="contact-input"
          placeholder="Subject (optional)"
        />
        {errors.subject && <p className="error">{errors.subject.message}</p>}
      </div>
      <div>
        <label htmlFor="message" className="contact-label">Message<span>*</span></label>
        <textarea
          id="message"
          rows={6}
          {...register("message")}
          className="contact-input"
          placeholder="Write your message here..."
        />
        {errors.message && <p className="error">{errors.message.message}</p>}
      </div>
      <button
        type="submit"
        disabled={loading}
        className="contact-btn"
      >
        {loading ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}
