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
import ContactForm from "@/components/ContactForm";
import HeroEmailForm from "@/components/HeroEmailForm";

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
  const contactSectionRef = useRef<HTMLDivElement | null>(null);

  const scrollToContact = () => {
    if (!contactSectionRef.current) return;
    contactSectionRef.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const featureCards: FeatureCardConfig[] = [
    {
      title: "Cost Efficiency",
      copy: (
        <>
          Lower cost per delivery. No incentives, no shift management, and no
          onboarding.{" "}
          <span className="font-semibold text-[#002f6c]">
            Achieve economies of scale through software.
          </span>
        </>
      ),
      icon: () => (
        <Icon icon="mdi:hand-coin-outline" width={32} height={32} />
      ),
      accent:
        "bg-[radial-gradient(circle_at_top,_rgba(0,47,108,0.15),_transparent_65%)]",
    },
    {
      title: "Stable Supply",
      copy: (
        <>
          No pre-scheduling needed.{" "}
          <span className="font-semibold text-[#002f6c]">
            Reliable performance during peak hours for high-volume operators.
          </span>
        </>
      ),
      icon: () => <Icon icon="mdi:checkerboard" width={32} height={32} />,
      accent:
        "bg-[radial-gradient(circle_at_center,_rgba(0,47,108,0.15),_transparent_60%)]",
    },
    {
      title: "Carbon Reduction Responsibility",
      copy: (
        <>
          Zero-emission electric mobility.{" "}
          <span className="font-semibold text-[#002f6c]">
            Supports your ESG and sustainability goals.
          </span>
        </>
      ),
      icon: () => <Icon icon="mdi:leaf" width={32} height={32} />,
      accent:
        "bg-[radial-gradient(circle_at_bottom,_rgba(250,128,114,0.18),_transparent_55%)]",
    },
  ];

  const targets: TargetConfig[] = [
    {
      title: "Grocery Retailers",
      description:
        "Deliver groceries quickly and sustainably within nearby neighborhoods.",
      icon: () => <Icon icon="mdi:cart-outline" width={32} height={32} />,
    },
    {
      title: "Delivery Apps",
      description:
        "Integrate smoothly with your current operations and lower customer acquisition costs.",
      icon: () => <Icon icon="mdi:delivery-dining" width={32} height={32} />,
    },
    {
      title: "Restaurants",
      description:
        "Handle high-volume orders, even during peak hours. Our robots promote your brand presence and increase local awareness.",
      icon: () => <Icon icon="mdi:shop" width={32} height={32} />,
    },
  ];

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#f2f2f2] text-[#111827]">
      {/* 背景 */}
      <div className="pointer-events-none absolute inset-0 bg-hero-gradient opacity-40" />
      <div className="pointer-events-none absolute inset-0 bg-grid-overlay bg-grid-overlay opacity-20" />

      <motion.main
        initial="hidden"
        animate="visible"
        className="relative mx-auto flex min-h-screen max-w-6xl flex-col gap-16 px-4 pb-16 pt-6 sm:gap-24 sm:px-6 sm:pb-24 sm:pt-10 lg:px-10"
      >
        {/* Header */}
        <motion.header
          variants={fadeIn}
          className="sticky top-3 z-10 flex items-center justify-between rounded-2xl border border-[#e5e7eb] bg-[#ffffffd9] px-4 py-3 text-xs shadow-md backdrop-blur-xl sm:top-6 sm:px-6 sm:text-sm"
        >
          {/* ロゴ */}
          <div className="flex items-center">
            <Image
              src="/saamon_logo_colour-P.png"
              alt="Saamon logo"
              width={120}
              height={40}
              className="h-8 w-auto object-contain mt-[3px] sm:h-9"
              priority
            />
          </div>

          <button
            onClick={scrollToContact}
            className="
              rounded-full bg-[#fa8072] px-5 py-2
              text-xs font-medium text-white shadow-md whitespace-nowrap
              transition hover:bg-[#e87065]
              sm:px-6 sm:py-3 sm:text-sm
            "
          >
            Contact us
          </button>
        </motion.header>

        {/* Hero */}
        <section className="relative">
          <motion.div
            variants={fadeIn}
            className="relative flex min-h-[360px] sm:min-h-[480px] flex-col justify-center gap-6 overflow-hidden rounded-[28px] border border-[#e5e7eb] p-6 shadow-[0_18px_50px_rgba(15,23,42,0.45)] sm:gap-8 sm:rounded-[32px] sm:p-10 sm:shadow-[0_30px_80px_rgba(15,23,42,0.30)]"
          >
            {/* 背景画像 */}
            <Image
              src="/saamon-robot.png"
              alt="3D model of Saamon’s autonomous delivery robot designed for self-driving last-mile delivery in urban environments."
              fill
              priority
              className="absolute inset-0 h-full w-full object-cover"
            />

            {/* オーバーレイ */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/45 to-transparent" />

            {/* テキストコンテンツ */}
            <div className="relative z-10 max-w-xl space-y-4 pr-4 sm:space-y-6 sm:pr-12">
              <p className="text-[0.7rem] uppercase tracking-[0.35em] text-white/60 sm:text-xs">
                Autonomous Delivery Robotics
              </p>
              <h1 className="text-2xl font-semibold leading-snug text-white sm:text-3xl lg:text-4xl">
                Autonomous delivery robots for the next local delivery
              </h1>
              <p className="text-sm text-white/85 sm:text-base lg:text-lg">
                Saamon enables low-cost, self-driving delivery for enterprise
                retailers and delivery apps.
              </p>

              <HeroEmailForm />
            </div>
          </motion.div>
        </section>

        {/* Features */}
        <motion.section
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          className="space-y-6 rounded-[28px] border border-[#e5e7eb] bg-[#ffffff] p-6 shadow-card sm:rounded-[32px] sm:p-8"
        >
          <div className="space-y-3">
            <p className="text-xs uppercase tracking-[0.35em] text-[#6b7280] sm:text-sm">
              The Solution
            </p>
            <h2 className="text-2xl font-semibold text-[#002f6c] sm:text-3xl">
              Stable delivery. Reliable autonomy. Lower cost per drop.
            </h2>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {featureCards.map((card) => (
              <FeatureCard key={card.title} card={card} />
            ))}
          </div>
        </motion.section>

        {/* Use Cases */}
        <motion.section
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          className="rounded-[28px] border border-[#e5e7eb] bg-[#ffffff] p-6 shadow-card sm:rounded-[32px] sm:p-8"
        >
          <div className="mb-6 sm:mb-8">
            <p className="text-xs uppercase tracking-[0.35em] text-[#6b7280] sm:text-sm">
              Use Cases
            </p>
            <h2 className="mt-3 text-2xl font-semibold text-[#002f6c] sm:text-3xl">
              Built for high-density operators
            </h2>
            <p className="mt-3 max-w-xl text-sm text-[#4b5563] sm:mt-4 sm:text-base">
              We partner with retailers, delivery platforms, and restaurants to
              enable reliable autonomous delivery for local operations.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {targets.map((target) => (
              <div
                key={target.title}
                className="flex h-full flex-col gap-3 rounded-3xl border border-[#e5e7eb] bg-[#f9fafb] p-5 shadow-card transition hover:shadow-cardHover sm:gap-4 sm:p-6"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[#e5e7eb] bg-white">
                  {target.icon()}
                </div>
                <h3 className="text-lg font-semibold text-[#002f6c] sm:text-xl">
                  {target.title}
                </h3>
                <p className="text-sm text-[#4b5563] sm:text-base">
                  {target.description}
                </p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Contact */}
        <motion.section
          ref={contactSectionRef}
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          className="rounded-[28px] border border-[#e5e7eb] bg-white p-6 shadow-card sm:rounded-[32px] sm:p-8"
        >
          <p className="text-xs uppercase tracking-[0.35em] text-[#6b7280] sm:text-sm">
            Contact
          </p>
          <h2 className="mt-2 text-2xl font-semibold text-[#002f6c] sm:text-3xl">
            Request a Pilot
          </h2>
          <p className="mt-3 max-w-xl text-sm text-[#4b5563] sm:text-base">
            We partner with retailers, delivery platforms, and municipalities to
            deploy autonomous deliveries.
          </p>

          <div className="mt-6">
            <ContactForm />
          </div>
        </motion.section>

        {/* Footer */}
        <motion.footer
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          className="mx-auto mt-8 w-full max-w-6xl border-t border-[#e5e7eb] pt-5 text-[#6b7280] sm:mt-10 sm:pt-6"
        >
          <div className="flex flex-col items-center justify-between gap-2 text-center text-xs sm:flex-row sm:items-center sm:gap-3 sm:text-sm">
            <span>
              © {new Date().getFullYear()} Saamon. All rights reserved.
            </span>
            <span className="text-[0.7rem] sm:text-xs">
              Built for the next generation of local delivery.
            </span>
          </div>
        </motion.footer>
      </motion.main>
    </div>
  );
}

function FeatureCard({ card }: { card: FeatureCardConfig }) {
  const cardRef = useRef<HTMLDivElement | null>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [8, -8]), {
    stiffness: 120,
    damping: 20,
  });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-8, 8]), {
    stiffness: 120,
    damping: 20,
  });
  const glowX = useTransform(mouseX, [-0.5, 0.5], [25, -25]);
  const glowY = useTransform(mouseY, [-0.5, 0.5], [25, 25]);

  const handleMouseMove = (event: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const relativeX = (event.clientX - rect.left) / rect.width - 0.5;
    const relativeY = (event.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(Math.max(Math.min(relativeX, 0.5), -0.5));
    mouseY.set(Math.max(Math.min(relativeY, 0.5), -0.5));
  };

  const resetTilt = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <div style={{ perspective: 1200 }}>
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={resetTilt}
        variants={fadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="group relative h-full rounded-3xl bg-gradient-to-br from-[#ffffff] via-[#f3f4f6] to-[#e5e7eb] p-[1.5px] shadow-[0_20px_40px_rgba(15,23,42,0.15)]"
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      >
        <div className="relative flex h-full flex-col overflow-hidden rounded-[28px] border border-white/70 bg-white p-5 sm:p-6">
          <motion.div
            aria-hidden
            className={`pointer-events-none absolute inset-0 opacity-0 transition group-hover:opacity-80 ${card.accent}`}
            style={{ x: glowX, y: glowY }}
          />
          <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-[#e5e7eb] bg-[#f3f4f6] text-[#002f6c] sm:mb-6">
            {card.icon()}
          </div>
          <h3 className="mb-2 text-lg font-semibold text-[#002f6c] sm:mb-3 sm:text-xl">
            {card.title}
          </h3>
          <p className="text-sm text-[#4b5563] sm:text-base">{card.copy}</p>
        </div>
      </motion.div>
    </div>
  );
}
