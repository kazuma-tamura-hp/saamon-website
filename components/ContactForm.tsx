"use client";

import { useState, FormEvent } from "react";
import { MoveUpRight } from "lucide-react";

export default function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch(form.action, {
        method: form.method,
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setIsSubmitted(true);
        form.reset();
      } else {
        const data = await response.json();
        if (data.errors) {
          console.error(data.errors);
        }
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  if (isSubmitted) {
    return (
      <div className="mt-8 rounded-2xl border border-accent/60 bg-accent/10 p-8 text-center">
        <p className="text-lg font-semibold text-surface">
          送信完了しました
        </p>
      </div>
    );
  }

  return (
    <>
      <form
        method="POST"
        action="https://formspree.io/f/mgvjpeyj"
        onSubmit={handleSubmit}
        className="mt-8 grid gap-6 md:grid-cols-2"
      >
        <input type="hidden" name="_subject" value="Saamon Website Demo Request" />
        <label className="space-y-2">
          <span className="text-sm text-surface/70">Name</span>
          <input
            type="text"
            name="name"
            placeholder="Yuki Saamon"
            className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-surface outline-none transition focus:border-accent/60"
            required
          />
        </label>
        <label className="space-y-2">
          <span className="text-sm text-surface/70">Company</span>
          <input
            type="text"
            name="company"
            placeholder="MetroFresh"
            className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-surface outline-none transition focus:border-accent/60"
            required
          />
        </label>
        <label className="space-y-2 md:col-span-2">
          <span className="text-sm text-surface/70">Email</span>
          <input
            type="email"
            name="email"
            placeholder="team@metrofresh.com"
            className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-surface outline-none transition focus:border-accent/60"
            required
          />
        </label>
        <div className="md:col-span-2">
          <button
            type="submit"
            className="inline-flex w-full items-center justify-center gap-3 rounded-2xl bg-accent px-6 py-4 text-lg font-semibold text-primary transition hover:shadow-lg hover:shadow-accent/40"
          >
            Contact us
            <MoveUpRight className="h-5 w-5 text-primary" />
          </button>
        </div>
      </form>
    </>
  );
}

