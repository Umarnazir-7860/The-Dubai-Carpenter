import Image from "next/image";
import Link from "next/link";
import FadeIn from "@/components/FadeIn";
import FAQ from "@/components/FAQ";
import { ArrowRight, CheckCircle2, Ruler, PenTool, Hammer, ShieldCheck } from "lucide-react";

const kitchenFaqs = [
  {
    q: "How long does a custom kitchen project usually take?",
    a: "Most custom kitchen projects take around 2 to 4 weeks depending on the design complexity, material selection, site conditions, and installation scope."
  },
  {
    q: "Do you use premium hardware in kitchen cabinets?",
    a: "Yes, we use trusted premium hardware such as Blum and Hettich to ensure smooth, durable, and silent operation for drawers, shutters, and fittings."
  },
  {
    q: "Can you design kitchens for villas and apartments?",
    a: "Absolutely. We create bespoke kitchen solutions for villas, apartments, penthouses, and luxury residences across Dubai."
  },
  {
    q: "Do you provide 3D kitchen design before production?",
    a: "Yes, we provide design planning and visualization so you can review the layout, finishes, and storage before manufacturing begins."
  },
  {
    q: "Do your kitchens come with warranty?",
    a: "Yes, our kitchen installations are backed by a workmanship and structural warranty, giving you peace of mind and long-term value."
  }
];

const features = [
  "German Hardware",
  "Anti-Scratch Finishes",
  "Solid Wood Structure",
  "Soft-Close Drawers",
  "Space Optimization",
  "Luxury Finishing"
];

const kitchenTypes = [
  {
    title: "Modern Kitchens",
    desc: "Clean lines, sleek finishes, and functional layouts designed for contemporary Dubai interiors.",
    img: "/kitchen-modern.jpg"
  },
  {
    title: "Classic Kitchens",
    desc: "Timeless cabinetry, elegant detailing, and warm materials for a refined luxury feel.",
    img: "/kitchen-classic.jpg"
  },
  {
    title: "Villa Kitchens",
    desc: "Large-format kitchen solutions with island counters, smart storage, and premium finishes.",
    img: "/kitchen-villa.jpg"
  }
];

const processSteps = [
  {
    step: "01",
    title: "Consultation",
    desc: "We understand your lifestyle, layout, preferences, and storage requirements."
  },
  {
    step: "02",
    title: "Measurement",
    desc: "Our team performs accurate site measurements for a flawless kitchen fit."
  },
  {
    step: "03",
    title: "Design & 3D",
    desc: "We develop the kitchen layout, material palette, and design direction."
  },
  {
    step: "04",
    title: "Production",
    desc: "Your kitchen is crafted in our workshop using premium materials and hardware."
  },
  {
    step: "05",
    title: "Installation",
    desc: "We complete on-site installation with precision finishing and quality checks."
  }
];

export default function CustomKitchensPage() {
  return (
    <main className="w-full bg-[#F9F9F7] text-[#1A1A1A] selection:bg-[#CCAC34] selection:text-white">
      
      {/* HERO */}
      <section className="relative h-[85vh] md:h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/kitchen-hero.jpg"
            fill
            priority
            alt="Luxury Custom Kitchens in Dubai"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/45" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/35 to-transparent" />
        </div>

        <div className="relative z-20 max-w-7xl mx-auto px-6 w-full">
          <div className="max-w-3xl">
            <FadeIn direction="up">
              <span className="text-[#CCAC34] tracking-[0.5em] text-[10px] uppercase font-bold mb-6 block">
                Bespoke Kitchen Solutions
              </span>

              <h1 className="text-5xl md:text-8xl font-black italic tracking-tighter uppercase leading-[0.9] text-white mb-6">
                Custom <br />
                <span className="text-[#CCAC34]">Kitchens.</span>
              </h1>

              <p className="text-white/80 text-sm md:text-lg leading-relaxed max-w-2xl mb-10">
                Luxury custom kitchens in Dubai crafted with premium materials, German hardware,
                intelligent storage, and expert installation for villas, apartments, and modern interiors.
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
                  Built for Luxury Living
                </span>
                <h2 className="text-4xl md:text-6xl font-black italic uppercase tracking-tighter leading-[0.9] mb-8">
                  Kitchens That <br />
                  Define <span className="text-[#CCAC34]">The Space.</span>
                </h2>

                <div className="space-y-6 text-gray-600 leading-relaxed">
                  <p className="text-lg font-medium text-[#1A1A1A]">
                    Our custom kitchens are designed to combine elegance, durability, and practical everyday function.
                  </p>
                  <p>
                    From compact modern layouts to expansive villa kitchens, we tailor every cabinet,
                    finish, and storage solution around your space and lifestyle.
                  </p>
                  <p>
                    We use premium materials, refined detailing, and trusted German hardware to deliver
                    a kitchen that not only looks exceptional but performs beautifully for years.
                  </p>
                </div>
              </div>
            </FadeIn>

            <FadeIn direction="right">
              <div className="relative aspect-[4/5] rounded-[3rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.15)]">
                <Image
                  src="/kitchen-detail.jpg"
                  fill
                  alt="Premium kitchen craftsmanship"
                  className="object-cover"
                />
                <div className="absolute bottom-8 left-8 bg-[#CCAC34] rounded-[2rem] p-6 md:p-8 shadow-2xl">
                  <span className="text-white text-4xl md:text-5xl font-black italic block leading-none">
                    100%
                  </span>
                  <span className="text-white text-[10px] uppercase tracking-[0.25em] font-bold block mt-2">
                    Bespoke Design
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
                Every kitchen is engineered for appearance, durability, and smooth daily use.
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
                    Carefully selected to enhance usability, elegance, and long-term performance.
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* KITCHEN TYPES */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <FadeIn direction="up">
              <span className="text-[#CCAC34] font-bold tracking-[0.4em] text-[10px] uppercase mb-4 block">
                Design Styles
              </span>
              <h2 className="text-4xl md:text-6xl font-black italic uppercase tracking-tighter leading-none mb-6">
                Kitchen <span className="text-[#CCAC34]">Types.</span>
              </h2>
            </FadeIn>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {kitchenTypes.map((item, i) => (
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
                Crafted With <span className="text-[#CCAC34]">Precision.</span>
              </h2>
            </FadeIn>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Ruler className="text-[#CCAC34]" size={30} />,
                title: "Accurate Measurement",
                desc: "Every kitchen is tailored precisely to the dimensions of your space."
              },
              {
                icon: <PenTool className="text-[#CCAC34]" size={30} />,
                title: "Custom Design",
                desc: "We create layouts and finishes based on your style and requirements."
              },
              {
                icon: <Hammer className="text-[#CCAC34]" size={30} />,
                title: "Expert Production",
                desc: "Built in our workshop using premium joinery practices and quality checks."
              },
              {
                icon: <ShieldCheck className="text-[#CCAC34]" size={30} />,
                title: "Reliable Finish",
                desc: "Durable materials, smooth hardware, and dependable post-installation support."
              }
            ].map((item, i) => (
              <FadeIn key={i} direction="up" delay={i * 0.08}>
                <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8">
                  <div className="mb-6">{item.icon}</div>
                  <h3 className="text-xl font-black italic uppercase tracking-tighter mb-3">
                    {item.title}
                  </h3>
                  <p className="text-white/65 text-sm leading-relaxed">
                    {item.desc}
                  </p>
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
                From Concept to <span className="text-[#CCAC34]">Completion.</span>
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
      <section className="py-24 bg-[#F9F9F7]">
        <FAQ items={kitchenFaqs} title="Custom Kitchen" highlight="FAQs." />
      </section>

      {/* CTA */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="relative overflow-hidden rounded-[4rem] bg-[#0A0A0A] p-12 md:p-24 text-center">
            <div className="absolute inset-0">
              <Image
                src="/services-cta.jpg"
                fill
                alt="Custom kitchen consultation"
                className="object-cover opacity-25"
              />
              <div className="absolute inset-0 bg-black/60" />
            </div>

            <div className="relative z-10 max-w-4xl mx-auto">
              <span className="text-[#CCAC34] font-bold tracking-[0.4em] text-[10px] uppercase mb-4 block">
                Let’s Build Your Kitchen
              </span>

              <h2 className="text-4xl md:text-7xl font-black italic tracking-tighter uppercase leading-[0.9] mb-8 text-white">
                Ready for a <span className="text-[#CCAC34]">Luxury Kitchen?</span>
              </h2>

              <p className="text-white/75 max-w-2xl mx-auto leading-relaxed mb-10">
                Speak with our team for a custom kitchen consultation, design guidance,
                and a tailored quotation for your Dubai project.
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