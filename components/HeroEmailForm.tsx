"use client";

import { useState } from "react";

export default function HeroEmailForm() {
  const [email, setEmail] = useState("");

  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className="flex w-full max-w-md items-center gap-3"
    >
      {/* Email Input */}
      <input
        type="email"
        placeholder="your@email.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="
          w-full rounded-full border border-white/30 bg-white/10 px-5 py-3
          text-white placeholder-white/60 focus:outline-none
        "
      />

      {/* Button (Updated Style) */}
      <button
        type="submit"
        className="
          rounded-full bg-[#fa8072] px-5 py-2
          text-xs font-medium text-white shadow-lg
          transition hover:bg-[#e87065]
          min-w-[110px] text-center
        "
      >
        Contact us
      </button>
    </form>
  );
}

