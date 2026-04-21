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

const glassFaqs = [
  {
    q: "What type of glass do you use for custom projects?",
    a: "We use high-quality tempered, laminated, frosted, and clear glass depending on the application, safety requirements, and design preference.",
  },
  {
    q: "Do you provide custom-sized glass partitions and doors?",
    a: "Yes, all our glass work is custom measured and fabricated to fit your exact space, whether for homes, offices, or commercial interiors.",
  },
  {
    q: "Can you install shower glass and bathroom enclosures?",
    a: "Absolutely. We design and install elegant shower enclosures, bathroom partitions, and custom glass panels with premium fittings.",
  },
  {
    q: "Do you work for villas, apartments, and offices in Dubai?",
    a: "Yes, we provide bespoke glass work solutions for villas, apartments, penthouses, offices, and retail spaces across Dubai.",
  },
  {
    q: "Do your glass installations come with warranty?",
    a: "Yes, our workmanship and installation quality are backed by warranty for peace of mind and long-term performance.",
  },
];

const features = [
  "Tempered Safety Glass",
  "Premium Metal Fittings",
  "Custom Sizes",
  "Clean Finishing",
  "Luxury Design",
  "Professional Installation",
];

const glassTypes = [
  {
    title: "Glass Partitions",
    desc: "Elegant glass partition systems for offices, villas, and interior space division with a modern premium finish.",
    img: "/glass-partitions.jpg",
  },
  {
    title: "Shower Enclosures",
    desc: "Custom shower glass solutions designed for durability, privacy, and refined bathroom aesthetics.",
    img: "/glass-shower.jpg",
  },
  {
    title: "Glass Doors & Mirrors",
    desc: "Bespoke glass doors, mirror wall panels, and decorative installations tailored to luxury interiors.",
    img: "/glass-doors.jpg",
  },
];

const processSteps = [
  {
    step: "01",
    title: "Consultation",
    desc: "We understand your space, functional needs, design taste, and glass application requirements.",
  },
  {
    step: "02",
    title: "Site Measurement",
    desc: "Our team performs precise on-site measurements for a perfect and safe installation.",
  },
  {
    step: "03",
    title: "Design Planning",
    desc: "We finalize the glass style, thickness, fittings, finish, and overall visual direction.",
  },
  {
    step: "04",
    title: "Fabrication",
    desc: "Your glass is professionally processed and prepared with premium materials and hardware.",
  },
  {
    step: "05",
    title: "Installation",
    desc: "We install with care, alignment precision, and detailed finishing for a flawless result.",
  },
];

export default function GlassWorkPage() {
  return (
    <main className="w-full bg-[#F9F9F7] text-[#1A1A1A] selection:bg-[#CCAC34] selection:text-white">
      {/* HERO */}
      <section className="relative h-[85vh] md:h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/glass-hero.jpg"
            fill
            priority
            alt="Custom Glass Work Services in Dubai"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/45" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/35 to-transparent" />
        </div>

        <div className="relative z-20 max-w-7xl mx-auto px-6 w-full">
          <div className="max-w-3xl">
            <FadeIn direction="up">
              <span className="text-[#CCAC34] ml-1 pt-10 tracking-[0.5em] text-[10px] uppercase font-bold mb-6 block">
                Bespoke Glass Solutions
              </span>

              <h1 className="text-5xl md:text-6xl font-black tracking-tighter uppercase leading-[0.9] text-white mb-6">
                Custom
                <span className="text-[#CCAC34] ml-3">Glass Work.</span>
              </h1>

              <p className="text-white/80 text-sm md:text-lg leading-relaxed max-w-2xl mb-10">
                Premium custom glass work in Dubai for villas, apartments,
                offices, and luxury interiors — crafted with tempered glass,
                elegant fittings, precise measurements, and expert installation.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact-us">
                  <button className="bg-[#CCAC34] text-white px-8 py-5 rounded-2xl font-black uppercase tracking-[0.2em] text-xs hover:scale-105 transition-all">
                    Get Free Quote
                  </button>
                </Link>

                <Link href="/contact-us">
                  <button className="border border-white/20 text-white px-8 py-5 rounded-2xl font-black uppercase tracking-[0.2em] text-xs hover:bg-white hover:text-black transition-all">
                    View Portfolio
                  </button>
                </Link>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <FadeIn direction="left">
              <div>
                <span className="text-[#CCAC34] font-bold tracking-[0.4em] text-[10px] uppercase mb-4 block">
                  Built for Modern Interiors
                </span>
                <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-[0.9] mb-8">
                  Glass Work That <br />
                  Elevates <span className="text-[#CCAC34]">The Space.</span>
                </h2>

                <div className="space-y-6 text-gray-600 leading-relaxed">
                  <p className="text-lg font-medium text-[#1A1A1A]">
                    Our custom glass work solutions combine visual elegance,
                    durability, and modern functionality.
                  </p>
                  <p>
                    From shower enclosures and office partitions to glass doors,
                    mirrors, and decorative panels, every project is tailored to
                    your interior and lifestyle needs.
                  </p>
                  <p>
                    We use premium-quality glass, refined fittings, and expert
                    workmanship to deliver installations that look exceptional
                    and perform beautifully for years.
                  </p>
                </div>
              </div>
            </FadeIn>

            <FadeIn direction="right">
              <div className="relative h-[400px] rounded-[3rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.15)]">
                <Image
                  src="/glass-detail.jpg"
                  fill
                  alt="Premium glass craftsmanship"
                  className="object-cover"
                />
                <div className="absolute bottom-8 left-8 bg-[#CCAC34] rounded-[2rem] p-6 md:p-8 shadow-2xl">
                  <span className="text-white text-4xl md:text-5xl font-black italic block leading-none">
                    100%
                  </span>
                  <span className="text-white text-[10px] uppercase tracking-[0.25em] font-bold block mt-2">
                    Custom Fabrication
                  </span>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-24 bg-[#F9F9F7]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <FadeIn direction="up">
              <span className="text-[#CCAC34] font-bold tracking-[0.4em] text-[10px] uppercase mb-4 block">
                Core Features
              </span>
              <h2 className="text-4xl md:text-6xl font-black italic uppercase tracking-tighter leading-none mb-6">
                Premium <span className="text-[#CCAC34]">Advantages.</span>
              </h2>
              <p className="text-gray-500 leading-relaxed">
                Every glass installation is designed for elegance, strength,
                safety, and long-term performance.
              </p>
            </FadeIn>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((item, i) => (
              <FadeIn key={i} direction="up" delay={i * 0.08}>
                <div className="bg-white rounded-[2rem] p-8 border border-black/5 hover:border-[#CCAC34]/30 transition-all duration-500 hover:-translate-y-2">
                  <div className="w-14 h-14 rounded-2xl bg-[#F9F9F7] flex items-center justify-center mb-6">
                    <CheckCircle2 className="text-[#CCAC34]" size={26} />
                  </div>
                  <h3 className="text-xl font-black italic uppercase tracking-tighter mb-2">
                    {item}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    Carefully selected to improve appearance, safety, and
                    premium finish in modern Dubai interiors.
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* GLASS TYPES */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <FadeIn direction="up">
              <span className="text-[#CCAC34] font-bold tracking-[0.4em] text-[10px] uppercase mb-4 block">
                Glass Solutions
              </span>
              <h2 className="text-4xl md:text-6xl font-black italic uppercase tracking-tighter leading-none mb-6">
                Glass Work <span className="text-[#CCAC34]">Types.</span>
              </h2>
            </FadeIn>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {glassTypes.map((item, i) => (
              <FadeIn key={i} direction="up" delay={i * 0.1}>
                <div className="group overflow-hidden rounded-[2.5rem] bg-[#1A1A1A]">
                  <div className="relative h-[380px]">
                    <Image
                      src={item.img}
                      fill
                      alt={item.title}
                      className="object-cover opacity-80 group-hover:scale-110 transition-all duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    <div className="absolute bottom-0 p-8">
                      <h3 className="text-3xl font-black italic uppercase tracking-tighter text-white mb-3">
                        {item.title}
                      </h3>
                      <p className="text-white/70 text-sm leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-24 bg-[#1A1A1A] text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <FadeIn direction="up">
              <span className="text-[#CCAC34] font-bold tracking-[0.4em] text-[10px] uppercase mb-4 block">
                Why Choose Us
              </span>
              <h2 className="text-4xl md:text-6xl font-black italic uppercase tracking-tighter leading-none">
                Installed With{" "}
                <span className="text-[#CCAC34]">Precision.</span>
              </h2>
            </FadeIn>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Ruler className="text-[#CCAC34]" size={30} />,
                title: "Exact Measurement",
                desc: "Every glass installation is custom measured for a seamless and safe final fit.",
              },
              {
                icon: <PenTool className="text-[#CCAC34]" size={30} />,
                title: "Tailored Design",
                desc: "We match the glass style, fittings, and layout to your interior vision and function.",
              },
              {
                icon: <Hammer className="text-[#CCAC34]" size={30} />,
                title: "Expert Fabrication",
                desc: "Crafted and prepared using premium materials, high standards, and quality control.",
              },
              {
                icon: <ShieldCheck className="text-[#CCAC34]" size={30} />,
                title: "Reliable Finish",
                desc: "Clean alignment, durable fittings, and dependable after-installation support.",
              },
            ].map((item, i) => (
              <FadeIn key={i} direction="up" delay={i * 0.08}>
                {/* ✅ IMPORTANT CHANGES HERE */}
                <div className="h-full flex">
                  <div className="flex flex-col justify-between w-full rounded-[2rem] border border-white/10 bg-black/10 p-8">
                    <div>
                      <div className="mb-6">{item.icon}</div>

                      <h3 className="text-xl font-black italic uppercase tracking-tighter mb-3">
                        {item.title}
                      </h3>

                      <p className="text-white/65 text-sm leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16 text-center">
            <FadeIn direction="up">
              <span className="text-[#CCAC34] font-bold tracking-[0.4em] text-[10px] uppercase mb-4 block">
                Our Process
              </span>
              <h2 className="text-4xl md:text-6xl font-black italic uppercase tracking-tighter leading-none">
                From Idea to{" "}
                <span className="text-[#CCAC34]">Installation.</span>
              </h2>
            </FadeIn>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {processSteps.map((item, i) => (
              <FadeIn key={i} direction="up" delay={i * 0.08}>
                <div className="border-l border-[#CCAC34]/30 pl-6">
                  <span className="text-4xl font-black italic text-[#CCAC34] block mb-4">
                    {item.step}
                  </span>
                  <h3 className="text-xl font-black uppercase tracking-tighter mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-[#F9F9F7]">
        <FAQ items={glassFaqs} title="Glass Work" highlight="FAQs." />
      </section>

      {/* CTA */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="relative overflow-hidden rounded-[4rem] p-12 md:p-24 text-center">
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-500"
              style={{
                backgroundImage: "url('/glass-cta.jpg')",
                backgroundAttachment: "fixed",
              }}
            >
              <div className="absolute inset-0 bg-black/60" />
            </div>

            <div className="relative z-10 max-w-4xl mx-auto">
              <span className="text-[#CCAC34] font-bold tracking-[0.4em] text-[10px] uppercase mb-4 block">
                Let’s Build With Glass
              </span>

              <h2 className="text-4xl md:text-7xl font-black italic tracking-tighter uppercase leading-[0.9] mb-8 text-white">
                Ready for Premium{" "}
                <span className="text-[#CCAC34]">Glass Work?</span>
              </h2>

              <p className="text-white/75 max-w-2xl mx-auto leading-relaxed mb-10">
                Speak with our team for custom glass work consultation, design
                advice, and a tailored quotation for your Dubai project.
              </p>

              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link href="/contact-us">
                  <button className="bg-white text-black px-10 py-5 rounded-2xl font-black uppercase tracking-[0.2em] text-xs hover:bg-[#CCAC34] hover:text-white transition-all">
                    Request a Quote
                  </button>
                </Link>

                <Link href="/contact-us">
                  <button className="text-[#CCAC34] px-10 py-5 rounded-2xl border border-[#CCAC34]/30 font-black uppercase tracking-[0.2em] text-xs hover:bg-[#CCAC34] hover:text-white transition-all inline-flex items-center gap-3">
                    WhatsApp Inquiry <ArrowRight size={16} />
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
