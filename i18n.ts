import { getRequestConfig } from "next-intl/server";
import { notFound } from "next/navigation";

export const locales = ["en", "ja"] as const;
export type Locale = (typeof locales)[number];

function isLocale(value: unknown): value is Locale {
  return typeof value === "string" && (locales as readonly string[]).includes(value);
}

export default getRequestConfig(async ({ requestLocale }) => {
  const maybeLocale = await requestLocale;

  // ✅ ここで必ず string に確定させる（VercelのTSエラー対策）
  const locale: Locale = isLocale(maybeLocale) ? maybeLocale : "en";

  let messages: Record<string, any>;
  try {
    messages = (await import(`./messages/${locale}.json`)).default;
  } catch {
    notFound();
  }

  return { locale, messages };
});
