"use client";

import { FormEvent, useState } from "react";

export default function HeroEmailForm() {
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const res = await fetch("https://formspree.io/f/mgvjpeyj", {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: formData,
      });

      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch (err) {
      setStatus("error");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center"
    >
      <input
        type="email"
        name="email"
        required
        placeholder="you@example.com"
        className="flex-1 rounded-full border border-white/40 bg-black/30 px-4 py-3 text-sm text-white placeholder-white/60 focus:border-[#fa8072] focus:outline-none"
      />
      <button
        type="submit"
        disabled={status === "sending"}
        className="
          rounded-full bg-[#fa8072] px-6 py-3
          text-sm font-medium text-white shadow-md
          transition hover:bg-[#e87065] disabled:opacity-70
        "
      >
        {status === "sending" ? "Sending..." : "Contact us"}
      </button>

      {status === "success" && (
        <p className="text-xs text-green-200">
          Thanks! We will get back to you soon.
        </p>
      )}
      {status === "error" && (
        <p className="text-xs text-red-200">
          Something went wrong. Please try again.
        </p>
      )}
    </form>
  );
}
