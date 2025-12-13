import {getRequestConfig} from "next-intl/server";
import {notFound} from "next/navigation";

export const locales = ["en", "ja"] as const;
export type Locale = (typeof locales)[number];

export default getRequestConfig(async ({requestLocale}) => {
  // requestLocale は undefined の可能性があるので、必ず fallback する
  const maybeLocale = await requestLocale;
  const locale: Locale = locales.includes(maybeLocale as Locale)
    ? (maybeLocale as Locale)
    : "en"; // ← デフォルト言語（必要なら "ja" にしてOK）

  // もし "en/ja 以外は 404" にしたいならこれを有効化（今は安全に en にフォールバック）
  // if (!locales.includes(maybeLocale as Locale)) notFound();

  let messages;
  try {
    messages = (await import(`./messages/${locale}.json`)).default;
  } catch {
    notFound();
  }

  return {
    locale,
    messages,
  };
});
