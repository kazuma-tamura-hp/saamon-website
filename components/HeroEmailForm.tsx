"use client";

import { useState } from "react";
import { useLocale } from "next-intl";

export default function HeroEmailForm() {
  const locale = useLocale();
  const isJa = locale === "ja";

  const [email, setEmail] = useState("");
  const [status, setStatus] =
    useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const res = await fetch("https://formspree.io/f/mgvjpeyj", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    });

    if (res.ok) {
      setStatus("success");
      setEmail("");
    } else {
      setStatus("error");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <input
          type="email"
          value={email}
          required
          onChange={(e) => setEmail(e.target.value)}
          placeholder={
            isJa ? "メールアドレスを入力" : "you@example.com"
          }
          className="
            flex-1
            rounded-full
            border-2 border-[#fa8072]
            bg-white
            px-5 py-3
            text-sm text-[#111827]
            placeholder:text-[#9ca3af]
            outline-none
            transition
            focus:ring-4 focus:ring-[#fa8072]/20
          "
        />

        <button
          type="submit"
          className="
            inline-flex items-center justify-center whitespace-nowrap
            rounded-full bg-[#fa8072]
            w-[40%]
            px-4 py-3 text-sm font-medium text-white shadow-md
            transition hover:bg-[#e87065]

            sm:w-auto sm:px-8 sm:text-sm
          "
        >
          {isJa ? "送信" : "Contact us"}
        </button>
      </div>

      {status === "success" && (
        <p className="mt-3 text-sm text-green-600">
          {isJa
            ? "送信しました。追ってご連絡します。"
            : "Thanks! We will get back to you soon."}
        </p>
      )}

      {status === "error" && (
        <p className="mt-3 text-sm text-red-600">
          {isJa
            ? "送信に失敗しました。もう一度お試しください。"
            : "Something went wrong. Please try again."}
        </p>
      )}
    </form>
  );
}
