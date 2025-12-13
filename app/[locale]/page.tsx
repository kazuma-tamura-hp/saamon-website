"use client";

import { useRef } from "react";
import type { ReactNode, MouseEvent, JSX } from "react";
import { Icon } from "@iconify/react";
import {
  motion,
  type Variants,
  useMotionValue,
  useTransform,
  useSpring,
} from "framer-motion";
import Image from "next/image";
import { useTranslations, useLocale } from "next-intl";

import ContactForm from "@/components/ContactForm";
import HeroEmailForm from "@/components/HeroEmailForm";
import LanguageMenu from "@/components/LanguageMenu";

type FeatureCardConfig = {
  title: string;
  copy: ReactNode;
  icon: () => JSX.Element;
  accent: string;
};

type TargetConfig = {
  title: string;
  description: string;
  icon: () => JSX.Element;
};

const fadeIn: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function Home() {
  const t = useTranslations();
  const locale = useLocale();
  const isJa = locale === "ja";

  const contactSectionRef = useRef<HTMLDivElement | null>(null);

  const scrollToContact = () => {
    contactSectionRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const featureCards: FeatureCardConfig[] = [
    {
      title: t("solution.cards.cost.title"),
      copy: (
        <>
          {t("solution.cards.cost.a")}{" "}
          <span className="font-semibold text-[#002f6c]">
            {t("solution.cards.cost.b")}
          </span>
        </>
      ),
      icon: () => (
        <Icon icon="mdi:hand-coin-outline" width={28} height={28} />
      ),
      accent:
        "bg-[radial-gradient(circle_at_top,_rgba(0,47,108,0.15),_transparent_65%)]",
    },
    {
      title: t("solution.cards.supply.title"),
      copy: (
        <>
          {t("solution.cards.supply.a")}{" "}
          <span className="font-semibold text-[#002f6c]">
            {t("solution.cards.supply.b")}
          </span>
        </>
      ),
      icon: () => <Icon icon="mdi:checkerboard" width={28} height={28} />,
      accent:
        "bg-[radial-gradient(circle_at_center,_rgba(0,47,108,0.15),_transparent_60%)]",
    },
    {
      title: t("solution.cards.esg.title"),
      copy: (
        <>
          {t("solution.cards.esg.a")}{" "}
          <span className="font-semibold text-[#002f6c]">
            {t("solution.cards.esg.b")}
          </span>
        </>
      ),
      icon: () => <Icon icon="mdi:leaf" width={28} height={28} />,
      accent:
        "bg-[radial-gradient(circle_at_bottom,_rgba(250,128,114,0.18),_transparent_55%)]",
    },
  ];

  const targets: TargetConfig[] = [
    {
      title: t("useCases.cards.grocery.title"),
      description: t("useCases.cards.grocery.desc"),
      icon: () => <Icon icon="mdi:cart-outline" width={28} height={28} />,
    },
    {
      title: t("useCases.cards.apps.title"),
      description: t("useCases.cards.apps.desc"),
      icon: () => <Icon icon="mdi:delivery-dining" width={28} height={28} />,
    },
    {
      title: t("useCases.cards.restaurants.title"),
      description: t("useCases.cards.restaurants.desc"),
      icon: () => <Icon icon="mdi:shop-outline" width={28} height={28} />,
    },
  ];

  const year = new Date().getFullYear();

  return (
    <div className="relative min-h-screen bg-[#f2f2f2] text-[#111827]">
      <motion.main className="mx-auto max-w-6xl px-4 py-10">
        {/* Header */}
        <header className="flex items-center justify-between rounded-2xl bg-white px-6 py-4 shadow">
          <Image
            src="/saamon_logo_colour-P.png"
            alt="Saamon logo"
            width={120}
            height={40}
          />
          <div className="flex items-center gap-3">
            <LanguageMenu />
            <button
              onClick={scrollToContact}
              className="rounded-full bg-[#fa8072] px-6 py-2 text-white"
            >
              {t("header.cta")}
            </button>
          </div>
        </header>

        {/* Hero (Stores-like) */}
        <section className="mt-10">
          <div className="grid gap-8 rounded-[28px] border border-[#e5e7eb] bg-white p-6 shadow-card sm:p-10 lg:grid-cols-2 lg:items-center">
            {/* Left */}
            <div className="space-y-5">
              <p className="text-xs font-medium uppercase tracking-[0.35em] text-[#6b7280]">
                {t("hero.kicker")}
              </p>

              <h1 className="text-3xl font-semibold leading-snug sm:text-4xl">
                {t("hero.title")}
              </h1>

              <p className="max-w-xl text-sm leading-relaxed text-[#4b5563] sm:text-base">
                {t("hero.subtitle")}
              </p>

              <div className="max-w-xl">
                <HeroEmailForm />
              </div>
            </div>

            {/* Right */}
            <div className="relative overflow-hidden rounded-3xl border border-[#e5e7eb] bg-[#f3f4f6]">
              <div className="relative aspect-[16/10] w-full">
                <Image
                  src="/saamon-autonomous-robot-city.png"
                  alt="Saamon autonomous delivery robot in a city environment"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="mt-16">
          <h2 className="text-2xl font-semibold">{t("solution.title")}</h2>

          <div className="mt-6 grid gap-6 md:grid-cols-3">
            {featureCards.map((card) => (
              <div
                key={card.title}
                className="rounded-xl bg-white p-6 shadow border border-[#e5e7eb]"
              >
                {/* Icon Plate */}
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-[#e5e7eb] bg-[#f3f4f6] text-[#002f6c]">
                  {card.icon()}
                </div>

                <h3
                  className={
                    isJa
                      ? "font-medium text-[#002f6c]"
                      : "font-semibold text-[#002f6c]"
                  }
                >
                  {card.title}
                </h3>

                <p className="mt-2 text-sm text-gray-600">{card.copy}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Use Cases */}
        <section className="mt-16">
          <h2 className="text-2xl font-semibold">{t("useCases.title")}</h2>
          <p className="mt-2 text-gray-600 whitespace-pre-line">
            {t("useCases.subtitle")}
          </p>

          <div className="mt-6 grid gap-6 md:grid-cols-3">
            {targets.map((tgt) => (
              <div
                key={tgt.title}
                className="rounded-3xl bg-white p-6 shadow border border-[#e5e7eb]"
              >
                {/* Icon Plate (same style as Features) */}
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-[#e5e7eb] bg-[#f3f4f6] text-[#002f6c]">
                  {tgt.icon()}
                </div>

                <h3
                  className={
                    isJa
                      ? "font-medium text-[#002f6c]"
                      : "font-semibold text-[#002f6c]"
                  }
                >
                  {tgt.title}
                </h3>

                <p className="mt-2 text-sm text-gray-600 whitespace-pre-line">
                  {tgt.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section ref={contactSectionRef} className="mt-20">
          <h2 className="text-2xl font-semibold">{t("contact.title")}</h2>
          <p className="mt-2 text-gray-600">{t("contact.subtitle")}</p>
          <div className="mt-6">
            <ContactForm />
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-20 border-t pt-6 text-sm text-gray-500">
          <div className="flex justify-between">
            <span>{t("footer.line1", { year })}</span>
            <span>{t("footer.line2")}</span>
          </div>
        </footer>
      </motion.main>
    </div>
  );
}
