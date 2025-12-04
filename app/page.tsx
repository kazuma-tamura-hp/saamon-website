"use client";

import { useRef } from "react";
import type { ReactNode, MouseEvent } from "react";
import {
  motion,
  type Variants,
  useMotionValue,
  useTransform,
  useSpring,
} from "framer-motion";
import {
  DollarSign,
  Shield,
  Settings2,
  ShoppingCart,
  Utensils,
  Store,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import HeroEmailForm from "@/components/HeroEmailForm";

type FeatureCardConfig = {
  title: string;
  copy: ReactNode;
  icon: LucideIcon;
  accent: string;
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
  // ↓ Contact セクションへのスクロール用
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
      icon: DollarSign,
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
      icon: Shield,
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
      icon: Settings2,
      accent:
        "bg-[radial-gradient(circle_at_bottom,_rgba(250,128,114,0.18),_transparent_55%)]",
    },
  ];

  const targets = [
    {
      title: "Grocery Retailers",
      description:
        "Deliver groceries quickly and sustainably within nearby neighborhoods.",
      icon: ShoppingCart,
    },
    {
      title: "Delivery Apps",
      description:
        "Integrate smoothly with your current operations and lower customer acquisition costs.",
      icon: Utensils,
    },
    {
      title: "Restaurants",
      description:
        "Handle high-volume orders, even during peak hours. Our robots promote your brand presence and increase local awareness.",
      icon: Store,
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
        className="relative mx-auto flex max-w-6xl flex-col gap-24 px-6 pb-24 pt-10 lg:px-10"
      >
        {/* Header */}
        <motion.header
          variants={fadeIn}
          className="sticky top-6 z-10 flex items-center justify-between rounded-2xl border border-[#e5e7eb] bg-[#ffffffcc] px-6 py-4 shadow-md backdrop-blur-xl"
        >
          <div className="font-semibold tracking-[0.2em] text-[#002f6c]">
            SAAMON
          </div>
          <button
            onClick={scrollToContact}
            className="
              rounded-full bg-[#fa8072] px-6 py-3
              text-sm font-medium text-white shadow-md
              transition hover:bg-[#e87065]
            "
          >
            Contact us
          </button>
        </motion.header>

        {/* Hero */}
        <section className="relative">
          <motion.div
            variants={fadeIn}
            className="relative flex min-h-[550px] flex-col justify-center gap-8 overflow-hidden rounded-[32px] border border-[#e5e7eb] bg-[url('/saamon-robot.png')] bg-cover bg-center p-10 shadow-[0_30px_80px_rgba(15,23,42,0.30)]"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
            <div className="relative z-10 max-w-lg space-y-6 pr-12">
              <p className="text-sm uppercase tracking-[0.35em] text-white/60">
                Autonomous Delivery Robotics
              </p>
              <h1 className="text-3xl font-semibold leading-snug text-white sm:text-4xl lg:text-4xl">
                Autonomous delivery robots for the next local delivery
              </h1>
              <p className="text-lg text-white/85">
                Saamon enables low-cost, self-driving delivery for enterprise
                retailers and delivery apps
              </p>

              {/* メールアドレス1項目だけの Formspree フォーム */}
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
          className="space-y-6 rounded-[32px] border border-[#e5e7eb] bg-[#ffffff] p-8 shadow-card"
        >
          <div className="space-y-3">
            <p className="text-sm uppercase tracking-[0.35em] text-[#6b7280]">
              The Solution
            </p>
            <h2 className="text-3xl font-semibold text-[#002f6c]">
              Stable delivery. Reliable autonomy. Lower cost per drop.
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
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
          className="rounded-[32px] border border-[#e5e7eb] bg-[#ffffff] p-8 shadow-card"
        >
          <div className="mb-8">
            <p className="text-sm uppercase tracking-[0.35em] text-[#6b7280]">
              Use Cases
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-[#002f6c]">
              Built for high-density operators
            </h2>
            <p className="mt-4 max-w-xl text-[#4b5563]">
              We partner with retailers, delivery platforms, and restaurants to
              enable reliable autonomous delivery for local operations.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {targets.map((target) => (
              <div
                key={target.title}
                className="flex flex-col gap-4 rounded-3xl border border-[#e5e7eb] bg-[#f9fafb] p-6 shadow-card transition hover:shadow-cardHover"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[#e5e7eb] bg-white">
                  <target.icon className="h-6 w-6 text-[#002f6c]" />
                </div>
                <h3 className="text-xl font-semibold text-[#002f6c]">
                  {target.title}
                </h3>
                <p className="text-[#4b5563]">{target.description}</p>
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
          className="rounded-[32px] border border-[#e5e7eb] bg-white p-8 shadow-card"
        >
          <p className="text-sm uppercase tracking-[0.35em] text-[#6b7280]">
            Contact
          </p>
          <h2 className="mt-2 text-3xl font-semibold text-[#002f6c]">
            Request a Pilot
          </h2>
          <p className="mt-3 max-w-xl text-[#4b5563]">
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
          className="mx-auto mt-10 w-full max-w-6xl border-t border-[#e5e7eb] pt-6 text-[#6b7280]"
        >
          <div className="flex flex-col items-start justify-between gap-3 md:flex-row md:items-center">
            <span className="text-sm">
              © {new Date().getFullYear()} Saamon. All rights reserved.
            </span>
            <span className="text-xs">
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

  const rotateX = useSpring(
    useTransform(mouseY, [-0.5, 0.5], [8, -8]),
    { stiffness: 120, damping: 20 }
  );
  const rotateY = useSpring(
    useTransform(mouseX, [-0.5, 0.5], [-8, 8]),
    { stiffness: 120, damping: 20 }
  );
  const glowX = useTransform(mouseX, [-0.5, 0.5], [25, -25]);
  const glowY = useTransform(mouseY, [-0.5, 0.5], [25, -25]);

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
        <div className="relative flex h-full flex-col overflow-hidden rounded-[28px] border border-white/70 bg-white p-6">
          <motion.div
            aria-hidden
            className={`pointer-events-none absolute inset-0 opacity-0 transition group-hover:opacity-80 ${card.accent}`}
            style={{ x: glowX, y: glowY }}
          />
          <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-[#e5e7eb] bg-[#f3f4f6] text-[#002f6c]">
            <card.icon className="h-6 w-6 text-[#002f6c]" />
          </div>
          <h3 className="mb-3 text-xl font-semibold text-[#002f6c]">
            {card.title}
          </h3>
          <p className="text-[#4b5563]">{card.copy}</p>
        </div>
      </motion.div>
    </div>
  );
}
