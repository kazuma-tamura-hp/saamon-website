"use client";

import { useState, FormEvent } from "react";
import { MoveUpRight } from "lucide-react";

export default function HeroEmailForm() {
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
      <div className="rounded-full border border-accent/60 bg-accent/10 px-6 py-3 text-center">
        <p className="text-sm font-medium text-surface">
          送信完了しました
        </p>
      </div>
    );
  }

  return (
    <form
      method="POST"
      action="https://formspree.io/f/mgvjpeyj"
      onSubmit={handleSubmit}
      className="flex flex-col gap-3 sm:flex-row"
    >
      <input type="hidden" name="_subject" value="Saamon Website Demo Request" />
      <input
        type="email"
        name="email"
        placeholder="your@email.com"
        required
        className="flex-1 rounded-full border border-white/20 bg-white/5 px-6 py-3 text-surface outline-none transition focus:border-accent/60 sm:min-w-[280px]"
      />
      <button
        type="submit"
        className="inline-flex items-center justify-center gap-3 rounded-full bg-accent px-6 py-3 text-primary shadow-lg shadow-accent/40 transition hover:shadow-xl"
      >
        Contact us
        <MoveUpRight className="h-4 w-4 text-primary" />
      </button>
    </form>
  );
}


