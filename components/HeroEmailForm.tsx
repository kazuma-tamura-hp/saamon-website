"use client";

import { useState } from "react";

export default function HeroEmailForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

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
      {/* メール入力 + ボタン */}
      <div className="flex items-center gap-3">
        <input
          type="email"
          value={email}
          required
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@example.com"
          className="
            flex-1 rounded-full border border-white/40 bg-white/10 px-4 py-3
            text-white placeholder-white/60 backdrop-blur-md
            focus:outline-none focus:ring-2 focus:ring-[#fa8072]
          "
        />
        <button
          type="submit"
          className="
            rounded-full bg-[#fa8072] px-6 py-3
            text-sm font-medium text-white shadow-md
            transition hover:bg-[#e87065]
          "
        >
          Contact us
        </button>
      </div>

      {/* 成功メッセージをここに表示（メールボックスの下） */}
      {status === "success" && (
        <p className="mt-3 text-sm text-green-300">
          Thanks! We will get back to you soon.
        </p>
      )}

      {status === "error" && (
        <p className="mt-3 text-sm text-red-300">
          Something went wrong. Please try again.
        </p>
      )}
    </form>
  );
}
