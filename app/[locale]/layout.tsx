import { NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";
import type { Locale } from "@/i18n";

/**
 * 静的に生成する locale を明示
 * → Vercel の prerender / export エラー回避
 */
export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "ja" }];
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  // 型安全性のため、locale を検証
  if (locale !== "en" && locale !== "ja") {
    notFound();
  }

  let messages;
  try {
    messages = (await import(`../../messages/${locale}.json`)).default;
  } catch {
    notFound();
  }

  return (
    <div className={locale === "ja" ? "font-roboto" : undefined}>
      <NextIntlClientProvider locale={locale as Locale} messages={messages}>
        {children}
      </NextIntlClientProvider>
    </div>
  );
}
