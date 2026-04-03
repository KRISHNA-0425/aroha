import { Link } from "react-router-dom";
import ScrollReveal from "../components/ScrollReveal";
import zenBalance from "@/assets/zen-balance.jpg";

const offerings = [
  "Inner dissatisfaction or emotional fatigue",
  "Life transitions such as separation, divorce, or career changes",
  "Loss of clarity, confidence, or self-trust",
  'A sense of "something missing" despite effort and responsibility',
];

const formats = [
  { text: "One-to-one sessions", color: "bg-[#9E8EB3]" },
  { text: "Online / in-person", color: "bg-[#3D3B63]" },
  { text: "Short-term or ongoing support, depending on need", color: "bg-[#D9D9D9] border border-[#9E8EB3]/40" },
];

const Services = () => (
  <div className="min-h-screen bg-[#E8E3F7] pt-32">
    <section className="section-padding relative overflow-hidden">
      <div className="absolute top-20 left-0 w-72 h-72 rounded-full bg-[#D9D9D9]/50 blur-3xl" />
      <div className="absolute bottom-0 right-10 w-56 h-56 rounded-full bg-[#9E8EB3]/20 blur-3xl" />

      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-start relative z-10">
        <div>
          <ScrollReveal>
            <p className="text-base font-sans font-bold uppercase tracking-[0.2em] text-[#3D3B63] mb-6">Services</p>
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-[#070546] mb-8">
              Individual Counselling Sessions
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <p className="text-lg font-sans font-medium text-[#3D3B63] leading-relaxed mb-8">
              These sessions are designed for individuals who are experiencing:
            </p>
          </ScrollReveal>

          <div className="space-y-3 mb-12">
            {offerings.map((item, i) => {
              const colors = ["bg-[#9E8EB3]", "bg-[#3D3B63]", "bg-[#9E8EB3]", "bg-[#D9D9D9] border border-[#9E8EB3]/50"];
              return (
                <ScrollReveal key={i} delay={0.15 + i * 0.08}>
                  <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-[#D9D9D9]/40 transition-colors duration-300">
                    <div className={`w-2.5 h-2.5 rounded-full ${colors[i]} mt-2 shrink-0`} />
                    <p className="text-lg font-sans font-medium text-[#070546]/90 leading-relaxed">{item}</p>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>

          <ScrollReveal delay={0.4}>
            <p className="text-xl font-quote font-semibold text-[#3D3B63] italic">
              Sessions offer a calm space to reflect, process emotions, and rebuild inner steadiness.
            </p>
          </ScrollReveal>
        </div>

        <ScrollReveal delay={0.2}>
          <div className="relative mt-12 md:mt-24">
            <div className="absolute -inset-4 bg-gradient-to-br from-[#9E8EB3]/30 via-[#D9D9D9]/20 to-[#3D3B63]/20 rounded-3xl blur-xl" />
            <img
              src={zenBalance}
              alt="Zen stones representing balance"
              className="relative rounded-2xl shadow-lg w-full"
              loading="lazy"
              width={800}
              height={600}
            />
            <div className="absolute -top-2 -left-2 w-6 h-6 rounded-full bg-[#3D3B63]/60" />
            <div className="absolute -bottom-3 -right-3 w-8 h-8 rounded-full bg-[#D9D9D9]/80 border border-[#9E8EB3]/40" />
          </div>
        </ScrollReveal>
      </div>
    </section>

    <div className="max-w-24 mx-auto h-1 rounded-full bg-gradient-to-r from-[#9E8EB3]/50 via-[#3D3B63]/50 to-[#D9D9D9]/50" />

    {/* Format */}
    <section className="section-padding">
      <div className="max-w-3xl mx-auto">
        <ScrollReveal>
          <h2 className="text-4xl font-serif font-bold text-[#070546] mb-8">Session Format</h2>
        </ScrollReveal>
        <div className="glass-card p-8 md:p-10 mb-8 border-2 border-[#9E8EB3]/30 bg-[#E8E3F7]/70">
          {formats.map((item, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <div className="flex items-center gap-4 py-3 border-b border-[#9E8EB3]/20 last:border-0">
                <div className={`w-2 h-2 rounded-full ${item.color} shrink-0`} />
                <p className="text-lg font-sans font-medium text-[#070546]/90">{item.text}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
        <ScrollReveal delay={0.3}>
          <p className="text-base font-sans font-medium text-[#3D3B63] mb-8">
            Pricing and booking details can be shared on request or via contact.
          </p>
          <Link
            to="/contact"
            className="inline-block btn-ripple bg-[#070546] text-[#E8E3F7] font-sans font-bold text-base px-10 py-4 rounded-full hover:bg-[#3D3B63] hover:scale-105 transition-all duration-500 shadow-[0_0_20px_rgba(7,5,70,0.3)]"
          >
            Reach Out
          </Link>
        </ScrollReveal>
      </div>
    </section>
  </div>
);

export default Services;
