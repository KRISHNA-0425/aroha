import { Suspense } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import ScrollReveal from "../components/ScrollReveal";
import ZenStoneScene from "../components/ZenStoneScene";
import meditationHero from "@/assets/meditation-hero.jpg";
import zenBalance from "@/assets/zen-balance.jpg";
import pastelAbstract from "@/assets/pastel-abstract.jpg";

const services = [
  {
    title: "Clarity",
    description: "Making sense of emotions, confusion, and inner noise—without judgement or labels.",
    color: "bg-[#9E8EB3]/10 border-[#9E8EB3]/30",
  },
  {
    title: "Balance",
    description: "Finding emotional steadiness and grounding during times of uncertainty or change.",
    color: "bg-[#D9D9D9]/40 border-[#D9D9D9]/60",
  },
  {
    title: "A Calm Way Forward",
    description: "Supporting thoughtful, grounded decisions so life can move ahead with confidence and composure.",
    color: "bg-[#3D3B63]/10 border-[#3D3B63]/30",
  },
];

const forYouItems = [
  "Feel emotionally unsettled or unfulfilled despite managing life well",
  "Are navigating a major life transition or emotional turning point",
  "Feel unsure about your direction or next steps",
  "Want calm, reflective support rather than quick fixes",
  "Value depth, self-awareness, and inner growth",
];

const pastelDots = [
  { color: "bg-[#070546]", size: "w-3 h-3", top: "top-[15%]", left: "left-[8%]" },
  { color: "bg-[#3D3B63]", size: "w-4 h-4", top: "top-[25%]", left: "right-[12%]" },
  { color: "bg-[#9E8EB3]", size: "w-2 h-2", top: "top-[60%]", left: "left-[5%]" },
  { color: "bg-[#D9D9D9]", size: "w-3 h-3", top: "top-[70%]", left: "right-[8%]" },
  { color: "bg-[#3D3B63]", size: "w-2.5 h-2.5", top: "top-[45%]", left: "left-[92%]" },
];

const Index = () => (
  <div className="min-h-screen bg-[#E8E3F7]">
    {/* Hero */}
    <section className="min-h-screen flex flex-col items-center justify-center section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#D9D9D9]/40 via-[#E8E3F7] to-[#E8E3F7]" />
      
      {/* Pastel floating elements */}
      {pastelDots.map((dot, i) => (
        <motion.div
          key={i}
          className={`absolute ${dot.size} rounded-full ${dot.color}/40 ${dot.top} ${dot.left}`}
          animate={{ y: [0, -15, 0], opacity: [0.4, 0.7, 0.4] }}
          transition={{ duration: 4 + i, repeat: Infinity, ease: "easeInOut", delay: i * 0.5 }}
        />
      ))}

      {/* Pastel gradient orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 rounded-full bg-[#9E8EB3]/30 blur-3xl" />
      <div className="absolute top-40 right-20 w-96 h-96 rounded-full bg-[#3D3B63]/15 blur-3xl" />
      <div className="absolute bottom-20 left-1/3 w-80 h-80 rounded-full bg-[#070546]/10 blur-3xl" />

      <div className="relative z-10 text-center max-w-4xl mx-auto">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-sm font-sans uppercase tracking-[0.3em] text-[#3D3B63] mb-8"
        >
          Inner Balance & Life Transitions
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, filter: "blur(20px)" }}
          animate={{ opacity: 1, filter: "blur(0px)" }}
          transition={{ duration: 1.4, delay: 0.4, ease: "easeOut" }}
          className="text-4xl md:text-6xl lg:text-7xl font-serif font-light text-[#070546] leading-[1.15] mb-6"
        >
          Mindshift for Life{" "}
          <span className="bg-gradient-to-r from-[#070546] via-[#3D3B63] to-[#9E8EB3] bg-clip-text text-transparent">Transformation</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="text-lg md:text-xl font-sans font-light text-[#3D3B63] max-w-2xl mx-auto leading-relaxed"
        >
          Supporting individuals through inner dissatisfaction and major life changes with clarity, calm, and care.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.3 }}
          className="text-sm font-sans text-[#3D3B63]/80 mt-4 italic"
        >
          A gentle space to pause, reflect, and find your way forward.
        </motion.p>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, delay: 0.6 }}
        className="relative z-10 mt-8 w-full max-w-lg mx-auto"
      >
        <Suspense
          fallback={
            <div className="w-full h-[400px] flex items-center justify-center">
              <div className="w-16 h-16 rounded-full bg-[#9E8EB3]/30 animate-breathe" />
            </div>
          }
        >
          <ZenStoneScene />
        </Suspense>
      </motion.div>
    </section>

    {/* Intro with meditation image */}
    <section className="section-padding relative overflow-hidden text-[#070546]">
      {/* Pastel wave divider */}
      <div className="absolute top-0 left-0 right-0 h-32 overflow-hidden">
        <img src={pastelAbstract} alt="" className="w-full h-full object-cover opacity-20 mix-blend-multiply" />
      </div>

      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center pt-16">
        <div>
          <ScrollReveal>
            <p className="text-xl md:text-2xl font-serif font-light text-[#070546] leading-relaxed mb-8">
              Life doesn't always fall apart loudly.
              <br />
              <span className="text-[#3D3B63]">
                Sometimes, everything looks fine on the outside, yet something feels unsettled within.
              </span>
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="text-base font-sans font-light text-[#3D3B63] leading-relaxed mb-4">
              At Aroha, we support individuals who are navigating inner dissatisfaction or major life transitions—such as separation, divorce, career shifts, or prolonged emotional strain—to reconnect with clarity, balance, and a sense of fulfilment.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.3}>
            <p className="text-base font-sans font-light text-[#3D3B63] leading-relaxed">
              This is a space for quiet reflection, emotional grounding, and steady inner realignment.
            </p>
          </ScrollReveal>
        </div>
        <ScrollReveal delay={0.2}>
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-br from-[#9E8EB3]/40 via-[#D9D9D9]/30 to-[#3D3B63]/20 rounded-3xl blur-xl" />
            <img
              src={meditationHero}
              alt="Peaceful meditation"
              className="relative rounded-2xl shadow-lg w-full"
              loading="lazy"
              width={1280}
              height={720}
            />
          </div>
        </ScrollReveal>
      </div>
    </section>

    {/* How I Work - Cards with pastel accents */}
    <section className="section-padding bg-[#D9D9D9]/40 relative overflow-hidden">
      <div className="absolute top-10 right-10 w-40 h-40 rounded-full bg-[#9E8EB3]/30 blur-2xl" />
      <div className="absolute bottom-10 left-10 w-56 h-56 rounded-full bg-[#3D3B63]/15 blur-2xl" />

      <div className="max-w-5xl mx-auto relative z-10">
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl font-serif font-light text-center text-[#070546] mb-16">
            How I Work
          </h2>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <ScrollReveal key={service.title} delay={i * 0.15}>
              <div className={`glass-card-hover p-8 md:p-10 h-full flex flex-col border ${service.color} rounded-2xl bg-[#E8E3F7]/60`}>
                <span className="text-xs font-sans uppercase tracking-[0.2em] text-[#3D3B63] mb-4">
                  0{i + 1}
                </span>
                <h3 className="text-2xl font-serif font-medium text-[#070546] mb-4">
                  {service.title}
                </h3>
                <p className="text-sm font-sans font-light text-[#3D3B63] leading-relaxed flex-1">
                  {service.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>

    {/* Zen image divider */}
    <section className="relative h-64 md:h-80 overflow-hidden bg-[#070546]">
      <img
        src={zenBalance}
        alt="Zen stones and lotus"
        className="w-full h-full object-cover opacity-60 mix-blend-overlay"
        loading="lazy"
        width={800}
        height={600}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#E8E3F7] via-transparent to-[#E8E3F7]" />
    </section>

    {/* Who This Is For */}
    <section className="section-padding relative overflow-hidden bg-[#E8E3F7]">
      <div className="absolute top-1/2 left-0 w-64 h-64 rounded-full bg-[#9E8EB3]/30 blur-3xl -translate-y-1/2" />

      <div className="max-w-3xl mx-auto relative z-10">
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl font-serif font-light text-center text-[#070546] mb-4">
            Who This Is For
          </h2>
          <p className="text-center text-[#3D3B63] font-sans text-base mb-12">
            This work may be right for you if you:
          </p>
        </ScrollReveal>

        <div className="space-y-4">
          {forYouItems.map((item, i) => {
            const dotColors = ["bg-[#070546]", "bg-[#3D3B63]", "bg-[#9E8EB3]", "bg-[#D9D9D9]", "bg-[#9E8EB3]"];
            return (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-[#D9D9D9]/50 transition-colors duration-300">
                  <div className={`w-2.5 h-2.5 rounded-full ${dotColors[i]} mt-2 shrink-0`} />
                  <p className="text-base font-sans font-light text-[#070546]/80 leading-relaxed">
                    {item}
                  </p>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="section-padding bg-gradient-to-b from-[#E8E3F7] to-[#D9D9D9]/50 relative overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-[500px] h-[500px] rounded-full bg-gradient-to-br from-[#9E8EB3]/30 via-[#3D3B63]/15 to-[#D9D9D9]/40 blur-3xl" />
      </div>

      <div className="max-w-2xl mx-auto text-center relative z-10">
        <ScrollReveal>
          <p className="text-xl md:text-2xl font-serif font-light text-[#070546] leading-relaxed mb-8">
            If this resonates with you,
            <br />
            you're welcome to explore further or reach out when it feels right.
          </p>
        </ScrollReveal>
        <ScrollReveal delay={0.2}>
          <Link
            to="/contact"
            className="inline-block relative overflow-hidden transition-all duration-500 ease-out bg-[#070546] text-[#E8E3F7] font-sans text-sm px-8 py-3.5 rounded-full hover:bg-[#3D3B63] hover:scale-105 shadow-[0_0_20px_rgba(7,5,70,0.3)]"
          >
            Begin a Conversation
          </Link>
        </ScrollReveal>
      </div>
    </section>
  </div>
);

export default Index;
