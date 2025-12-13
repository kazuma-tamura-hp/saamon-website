"use client";

import { FormEvent, useState } from "react";
import { useLocale } from "next-intl";

export default function ContactForm() {
  const locale = useLocale();
  const isJa = locale === "ja";

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
    } catch {
      setStatus("error");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <div className="grid gap-6 md:grid-cols-2">
        {/* Name */}
        <div className="space-y-2">
          <label className="text-sm font-medium text-[#111827]">
            {isJa ? "氏名" : "Name"}
          </label>
          <input
            type="text"
            name="name"
            required
            placeholder={isJa ? "山田 サーモン" : "Kazuma Tamura"}
            className="w-full rounded-xl border border-[#e5e7eb] bg-[#f9fafb]
              px-4 py-2 text-sm text-[#111827] placeholder-[#9ca3af]
              focus:border-[#002f6c] focus:outline-none"
          />
        </div>

        {/* Company */}
        <div className="space-y-2">
          <label className="text-sm font-medium text-[#111827]">
            {isJa ? "会社または組織名" : "Company"}
          </label>
          <input
            type="text"
            name="company"
            placeholder={isJa ? "Saamon株式会社" : "Saamon"}
            className="w-full rounded-xl border border-[#e5e7eb] bg-[#f9fafb]
              px-4 py-2 text-sm text-[#111827] placeholder-[#9ca3af]
              focus:border-[#002f6c] focus:outline-none"
          />
        </div>
      </div>

      {/* Email */}
      <div className="space-y-2">
        <label className="text-sm font-medium text-[#111827]">
          {isJa ? "メールアドレス" : "Email"}
        </label>
        <input
          type="email"
          name="email"
          required
          placeholder={
            isJa ? "example@company.com" : "kazuma.tamura@saamon.com"
          }
          className="w-full rounded-xl border border-[#e5e7eb] bg-[#f9fafb]
            px-4 py-2 text-sm text-[#111827] placeholder-[#9ca3af]
            focus:border-[#002f6c] focus:outline-none"
        />
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={status === "sending"}
        className="
          inline-flex items-center justify-center
          rounded-full bg-[#fa8072]
          px-10 py-3            /* ← 横を少し広めに */
          text-sm font-medium text-white shadow-md
          transition hover:bg-[#e87065]
          disabled:opacity-70
        "
      >
        {status === "sending"
          ? isJa
            ? "送信中..."
            : "Sending..."
          : isJa
          ? "送信"
          : "Contact us"}
      </button>

      {/* Status messages */}
      {status === "success" && (
        <p className="text-sm text-green-600">
          {isJa
            ? "送信ありがとうございました。後ほどご連絡いたします。"
            : "Thank you! We will get back to you soon."}
        </p>
      )}

      {status === "error" && (
        <p className="text-sm text-red-600">
          {isJa
            ? "送信に失敗しました。時間をおいて再度お試しください。"
            : "Something went wrong. Please try again."}
        </p>
      )}
    </form>
  );
}
