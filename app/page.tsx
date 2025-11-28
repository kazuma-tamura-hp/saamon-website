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
  MoveUpRight,
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
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Home() {
  const featureCards: FeatureCardConfig[] = [
    {
      title: "Cost Efficiency",
      copy: (
        <>
          <span className="font-semibold">Lower marginal cost.</span> No demand
          incentive, onboarding, or shift management.{" "}
          <span className="font-semibold">Scales with software.</span>
        </>
      ),
      icon: DollarSign,
      accent:
        "bg-[radial-gradient(circle_at_top,_rgba(0,47,108,0.55),_transparent_65%)]",
    },
    {
      title: "Stable Supply",
      copy: (
        <>
          Robots don&apos;t get sick, quit, or face labor shortages.{" "}
          <span className="font-semibold">Zero pre-scheduling required.</span>
        </>
      ),
      icon: Shield,
      accent:
        "bg-[radial-gradient(circle_at_center,_rgba(0,47,108,0.5),_transparent_60%)]",
    },
    {
      title: "Operational Fit",
      copy: (
        <>
          Seamlessly integrates with your existing Order Management Systems
          (OMS) via <span className="font-semibold">robust API.</span>
        </>
      ),
      icon: Settings2,
      accent:
        "bg-[radial-gradient(circle_at_bottom,_rgba(255,255,255,0.12),_transparent_55%)]",
    },
  ];

  const targets = [
    {
      title: "Grocery Retailers",
      description:
        "Deliver peak-hour orders without clogging store parking lots. Seamless POS integrations keep substitutions in sync.",
      icon: ShoppingCart,
    },
    {
      title: "Delivery Apps",
      description:
        "Stabilize margins with predictable fleet utilization. Live ETA sharing keeps diners in the loop down to the second.",
      icon: Utensils,
    },
    {
      title: "Restaurants",
      description:
        "Efficiently handle high-volume orders and complex meal assembly, ensuring hot and fresh delivery.",
      icon: Store,
    },
  ];

  return (
    <div className="relative min-h-screen overflow-hidden bg-primary text-surface">
      <div className="pointer-events-none absolute inset-0 bg-hero-gradient opacity-80" />
      <div className="pointer-events-none absolute inset-0 bg-grid-overlay bg-grid-overlay opacity-50" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-primary/40 to-brand-blue/40" />

      <motion.main
        initial="hidden"
        animate="visible"
        className="relative mx-auto flex max-w-6xl flex-col gap-24 px-6 pb-24 pt-10 lg:px-10"
      >
        {/* Header */}
        <motion.header
          variants={fadeIn}
          className="sticky top-6 z-10 flex items-center justify-between rounded-2xl border border-white/10 bg-primary/60 px-6 py-4 backdrop-blur-xl"
        >
          <div className="font-semibold tracking-[0.2em] text-surface">
            SAAMON
          </div>
          <button className="group inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/5 px-5 py-2 text-sm font-medium text-surface transition hover:border-accent/60 hover:text-surface">
            Contact us
            <MoveUpRight className="h-4 w-4 text-accent transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>
        </motion.header>

        {/* Hero */}
        <section className="relative">
          <motion.div
            variants={fadeIn}
            className="relative flex min-h-[550px] flex-col justify-center gap-8 overflow-hidden rounded-[32px] border border-white/10 bg-[url('/saamon-robot.png')] bg-cover bg-center p-10 shadow-glow"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
            <div className="relative z-10 max-w-3xl space-y-6 pr-6">
              <p className="text-sm uppercase tracking-[0.35em] text-surface/60">
                Autonomous Delivery Robotics
              </p>
              <h1 className="text-4xl font-semibold leading-tight text-surface sm:text-5xl lg:text-6xl">
                Autonomous Delivery for the Next Billion Local Deliveries.
              </h1>
              <p className="text-lg text-surface/80">
                Saamon is the self-driving platform that makes sustainable,
                ultra-low-cost delivery a reality for enterprise retailers.
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
          className="space-y-6 rounded-[32px] border border-white/10 bg-white/[0.02] p-8"
        >
          <div className="space-y-3">
            <p className="text-sm uppercase tracking-[0.35em] text-surface/60">
              System Architecture
            </p>
            <h2 className="text-3xl font-semibold text-surface">
              The Saamon Solution: Accelerated Order Fulfillment and Resilient
              Autonomy.
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {featureCards.map((card) => (
              <FeatureCard key={card.title} card={card} />
            ))}
          </div>
        </motion.section>

        {/* Target */}
        <motion.section
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          className="grid gap-8 rounded-[32px] border border-white/10 bg-primary/40 p-8 lg:grid-cols-2"
        >
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-surface/60">
              User Cases
            </p>
            <h2 className="mt-3 text-3xl font-semibold">
              Precision built for dense, urban operators
            </h2>
            <p className="mt-4 text-surface/70">
              We deploy in structured campuses first, then expand block-by-block
              with pre-negotiated municipality data sharing agreements to keep
              the fleets street-legal from day one.
            </p>
          </div>
          <div className="space-y-6">
            {targets.map((target) => (
              <motion.div
                key={target.title}
                variants={fadeIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                className="flex flex-col gap-4 rounded-3xl border border-white/10 bg-white/[0.02] p-6 md:flex-row md:items-start"
              >
                <div className="rounded-2xl border border-white/10 bg-white/5 p-3">
                  <target.icon className="h-6 w-6 text-brand-blue" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-surface">
                    {target.title}
                  </h3>
                  <p className="mt-2 text-surface/70">{target.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Contact */}
        <motion.section
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          className="rounded-[32px] border border-white/10 bg-gradient-to-b from-brand-blue/60 via-primary to-primary/80 p-8"
        >
          <div className="space-y-4">
            <p className="text-sm uppercase tracking-[0.35em] text-surface/60">
              Contact
            </p>
            <h2 className="text-3xl font-semibold">
              Request a pilot
            </h2>
            <p className="text-surface/70">
              We&apos;re looking for a partner with pilot!
            </p>
          </div>
          <ContactForm />
        </motion.section>
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
        className="group relative h-full rounded-3xl bg-gradient-to-br from-[#002F6C]/70 via-[#24272B] to-[#002F6C]/30 p-[1.5px] shadow-[0_35px_80px_rgba(0,0,0,0.55)]"
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      >
        <div className="relative flex h-full flex-col overflow-hidden rounded-[28px] border border-white/5 bg-white/[0.02] p-6">
          <motion.div
            aria-hidden
            className={`pointer-events-none absolute inset-0 opacity-0 transition group-hover:opacity-80 ${card.accent}`}
            style={{ x: glowX, y: glowY }}
          />
          <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-surface">
            <card.icon className="h-6 w-6 text-accent" />
          </div>
          <h3 className="mb-3 text-xl font-semibold">{card.title}</h3>
          <p className="text-surface/70">{card.copy}</p>
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
        </div>
      </motion.div>
    </div>
  );
}
