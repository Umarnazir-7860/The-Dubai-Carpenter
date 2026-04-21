import Image from "next/image";
import Link from "next/link";
import FadeIn from "@/components/FadeIn";
import FAQ from "@/components/FAQ";
import {
  ArrowRight,
  CheckCircle2,
  Ruler,
  PenTool,
  Hammer,
  ShieldCheck,
} from "lucide-react";

const gypsumFaqs = [
  {
    q: "Do you design custom gypsum ceilings?",
    a: "Yes, we create fully customized ceiling designs based on your interior style and layout.",
  },
  {
    q: "Do you provide lighting integration?",
    a: "Yes, we integrate LED strips, spotlights, and modern lighting into gypsum ceilings.",
  },
  {
    q: "How long does gypsum ceiling installation take?",
    a: "Most projects are completed within a few days depending on design complexity.",
  },
];

const features = [
  "Custom Designs",
  "LED Lighting Integration",
  "Smooth Finishing",
  "Crack Resistant",
  "Modern Styles",
  "Durable Structure",
];

const ceilingTypes = [
  {
    title: "False Ceilings",
    desc: "Modern suspended ceilings for clean and elegant interiors.",
    img: "/gypsum-false.jpg",
  },
  {
    title: "Tray Ceilings",
    desc: "Layered ceiling designs with lighting for premium look.",
    img: "/gypsum-tray.jpg",
  },
  {
    title: "Cove Lighting",
    desc: "Hidden lighting for soft ambient glow and luxury feel.",
    img: "/gypsum-light.jpg",
  },
];

const processSteps = [
  {
    step: "01",
    title: "Consultation",
    desc: "We understand your space and ceiling design needs.",
  },
  {
    step: "02",
    title: "Measurement",
    desc: "Accurate measurements for perfect ceiling alignment.",
  },
  {
    step: "03",
    title: "Design",
    desc: "We create layout and lighting design.",
  },
  {
    step: "04",
    title: "Installation",
    desc: "Clean and precise installation with finishing.",
  },
];

export default function GypsumPage() {
  return (
    <main className="w-full bg-[#F9F9F7] text-[#1A1A1A] selection:bg-[#CCAC34] selection:text-white">
      {/* HERO */}
      <section className="relative h-[85vh] md:h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/gypsum-hero.jpg" fill className="object-cover" alt="" />
          <div className="absolute inset-0 bg-black/50" />
        </div>

        <div className="relative z-20 max-w-7xl  px-6">
          <FadeIn>
            <span className="text-[#CCAC34] tracking-[0.5em] text-[10px] uppercase font-bold mb-6 block">
              Custom Ceiling Solutions
            </span>

            <h1 className="text-5xl md:text-6xl font-black uppercase text-white leading-[0.9] mb-6">
              Gypsum <span className="text-[#CCAC34]">Ceilings.</span>
            </h1>

            <p className="text-white/80 max-w-2xl mb-10">
              Modern gypsum ceiling designs in Dubai with clean finishing,
              integrated lighting, and premium craftsmanship.
            </p>

            <div className="flex gap-4">
              <button className="bg-[#CCAC34] px-8 py-5 rounded-2xl text-white text-xs font-black uppercase">
                Get Free Quote
              </button>

              <button className="border border-white/20 px-8 py-5 rounded-2xl text-white text-xs uppercase">
                View Portfolio
              </button>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* INTRO */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <FadeIn>
            <div>
              <span className="text-[#CCAC34] tracking-[0.4em] text-[10px] uppercase mb-4 block">
                Built for Interiors
              </span>

              <h2 className="text-4xl md:text-6xl font-black uppercase leading-[0.9] mb-8">
                Ceilings That <br />
                <span className="text-[#CCAC34]">Define Space.</span>
              </h2>

              <p className="text-gray-600">
                Our gypsum ceilings combine modern aesthetics with practical
                design, creating depth, lighting effects, and a refined finish.
              </p>
            </div>
          </FadeIn>

          <FadeIn direction="right">
            <div className="relative h-[400px] rounded-[3rem] overflow-hidden">
              <Image
                src="/gypsum-det.jpg"
                fill
                className="object-cover"
                alt=""
              />
            </div>
          </FadeIn>
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-24 bg-[#F9F9F7]">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn>
            <h2 className="text-4xl md:text-6xl text-center font-black mb-16">
              Key <span className="text-[#CCAC34]">Features</span>
            </h2>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((item, i) => (
              <div className="bg-white p-8 rounded-[2rem] border border-black/5">
                <CheckCircle2 className="text-[#CCAC34] mb-4" />
                <h3 className="font-black uppercase">{item}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TYPES (UPDATED PREMIUM STYLE) */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn>
            <h2 className="text-4xl md:text-6xl text-center font-black mb-16">
              Ceiling <span className="text-[#CCAC34]">Types</span>
            </h2>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-8">
            {ceilingTypes.map((item, i) => (
              <div className="group relative h-[360px] rounded-[2.5rem] overflow-hidden">
                <Image
                  src={item.img}
                  fill
                  className="object-cover group-hover:scale-110 transition-all duration-700"
                  alt=""
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />

                <div className="absolute bottom-0 p-8">
                  <h3 className="text-white text-2xl font-black mb-2">
                    {item.title}
                  </h3>
                  <p className="text-white/70 text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-24 bg-[#1A1A1A] text-white">
        <div className="max-w-7xl mx-auto px-6">
          {/* HEADING */}
          <FadeIn>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-[#CCAC34] tracking-[0.4em] text-[10px] uppercase font-bold mb-4 block">
                Why Choose Us
              </span>

              <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none">
                Built With <span className="text-[#CCAC34]">Precision.</span>
              </h2>

              <p className="text-white/60 text-sm md:text-base mt-6 leading-relaxed">
                Every project is executed with attention to detail, premium
                materials, and a finish that enhances your space.
              </p>
            </div>
          </FadeIn>

          {/* CARDS */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
            {[
              {
                icon: <Ruler className="text-[#CCAC34]" size={28} />,
                title: "Accurate Measurement",
                desc: "Precise measurements ensure perfect fit, alignment, and clean finishing.",
              },
              {
                icon: <PenTool className="text-[#CCAC34]" size={28} />,
                title: "Custom Design",
                desc: "Designs tailored to your space, layout, and interior style.",
              },
              {
                icon: <Hammer className="text-[#CCAC34]" size={28} />,
                title: "Expert Installation",
                desc: "Professional installation with proper structure and durability.",
              },
              {
                icon: <ShieldCheck className="text-[#CCAC34]" size={28} />,
                title: "Clean Finishing",
                desc: "Smooth edges, detailed finishing, and long-lasting results.",
              },
            ].map((item, i) => (
              <FadeIn key={i} direction="up" delay={i * 0.08}>
                {/* CARD */}
                <div className="h-full flex">
                  <div className="w-full rounded-[2rem] bg-black/10 border border-white/10 p-8 flex flex-col transition-all duration-500 hover:-translate-y-2 hover:border-[#CCAC34]/30">
                    <div className="mb-6">{item.icon}</div>

                    <h3 className="text-lg font-black uppercase tracking-tight mb-3">
                      {item.title}
                    </h3>

                    <p className="text-white/65 text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQ items={gypsumFaqs} title="Gypsum Ceiling" highlight="FAQs." />

      {/* CTA (PARALLAX END) */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="relative overflow-hidden rounded-[4rem] p-20 text-center">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: "url('/gypsum-cta.jpg')",
                backgroundAttachment: "fixed",
              }}
            >
              <div className="absolute inset-0 bg-black/70" />
            </div>

            <div className="relative z-10">
              <h2 className="text-5xl md:text-7xl font-black text-white">
                Need a <span className="text-[#CCAC34]">Gypsum Ceiling?</span>
              </h2>

              <div className="mt-8 flex justify-center gap-4">
                <button className="bg-white px-10 py-4 rounded-2xl text-black text-xs uppercase">
                  Request Quote
                </button>
                <button className="border border-white/20 px-10 py-4 rounded-2xl text-white text-xs uppercase">
                  WhatsApp
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
