"use client";

import { FormEvent } from "react";

export default function ContactForm() {
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // 送信処理を後で追加する場合はここに
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <div className="grid gap-6 md:grid-cols-2">
        <div className="space-y-2">
          <label className="text-sm font-medium text-[#111827]">Name</label>
          <input
            type="text"
            name="name"
            className="w-full rounded-xl border border-[#e5e7eb] bg-[#f9fafb] px-4 py-2 text-sm text-[#111827] placeholder-[#9ca3af] focus:border-[#002f6c] focus:outline-none"
            placeholder="Yuki Saamon"
            required
          />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium text-[#111827]">Company</label>
          <input
            type="text"
            name="company"
            className="w-full rounded-xl border border-[#e5e7eb] bg-[#f9fafb] px-4 py-2 text-sm text-[#111827] placeholder-[#9ca3af] focus:border-[#002f6c] focus:outline-none"
            placeholder="MetroFresh"
          />
        </div>
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium text-[#111827]">Email</label>
        <input
          type="email"
          name="email"
          className="w-full rounded-xl border border-[#e5e7eb] bg-[#f9fafb] px-4 py-2 text-sm text-[#111827] placeholder-[#9ca3af] focus:border-[#002f6c] focus:outline-none"
          placeholder="team@metrofresh.com"
          required
        />
      </div>

      {/* ここだけが唯一の Contact us ボタン */}
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
    </form>
  );
}
