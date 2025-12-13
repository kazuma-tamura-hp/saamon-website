"use client";

import { useEffect, useRef, useState } from "react";
import { Icon } from "@iconify/react";
import { useLocale } from "next-intl";
import { usePathname, useRouter } from "next/navigation";

export default function LanguageMenu() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const onDown = (e: MouseEvent) => {
      if (!rootRef.current) return;
      if (!rootRef.current.contains(e.target as Node)) setOpen(false);
    };
    window.addEventListener("mousedown", onDown);
    return () => window.removeEventListener("mousedown", onDown);
  }, []);

  const switchTo = (nextLocale: "en" | "ja") => {
    setOpen(false);
    const nextPath = pathname.replace(/^\/(en|ja)/, `/${nextLocale}`);
    router.push(nextPath);
  };

  return (
    <div ref={rootRef} className="relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="inline-flex items-center justify-center rounded-full border border-[#e5e7eb] bg-white/70 px-3 py-2 shadow-sm backdrop-blur transition hover:bg-white"
        aria-label="Language"
      >
        <Icon icon="mdi:earth" width={18} height={18} />
      </button>

      {open && (
        <div className="absolute right-0 mt-2 w-40 overflow-hidden rounded-2xl border border-[#e5e7eb] bg-white shadow-lg">
          <button
            type="button"
            onClick={() => switchTo("en")}
            className={`w-full px-4 py-3 text-left text-sm hover:bg-[#f3f4f6] ${
              locale === "en" ? "font-semibold text-[#002f6c]" : "text-[#111827]"
            }`}
          >
            English
          </button>
          <button
            type="button"
            onClick={() => switchTo("ja")}
            className={`w-full px-4 py-3 text-left text-sm hover:bg-[#f3f4f6] ${
              locale === "ja" ? "font-semibold text-[#002f6c]" : "text-[#111827]"
            }`}
          >
            日本語
          </button>
        </div>
      )}
    </div>
  );
}
