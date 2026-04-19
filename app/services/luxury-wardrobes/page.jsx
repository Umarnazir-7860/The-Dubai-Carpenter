import Image from "next/image";
import Link from "next/link";
import FadeIn from "@/components/FadeIn";
import FAQ from "@/components/FAQ";
import { ArrowRight, CheckCircle2, Ruler, PenTool, Hammer, ShieldCheck } from "lucide-react";

const wardrobeFaqs = [
  {
    q: "How long does a custom wardrobe project usually take?",
    a: "Most luxury wardrobe projects take around 2 to 4 weeks depending on the layout, finishes, lighting requirements, and installation complexity."
  },
  {
    q: "Can you create walk-in wardrobes and dressing rooms?",
    a: "Yes, we design and build bespoke walk-in wardrobes, dressing rooms, sliding wardrobes, and fully customized storage systems for villas and apartments."
  },
  {
    q: "Do you include internal lighting and accessories?",
    a: "Yes, we can integrate sensor LED lighting, soft-close drawers, hanging systems, shoe storage, jewelry trays, and other premium wardrobe accessories."
  },
  {
    q: "What materials and finishes do you use?",
    a: "We use premium board materials, veneers, laminates, glass elements, and luxury finish options selected for durability, appearance, and long-term usability."
  },
  {
    q: "Do your wardrobes come with warranty?",
    a: "Yes, our wardrobe installations are backed by workmanship and structural quality assurance for long-term confidence."
  }
];

const features = [
  "Walk-in Design",
  "Soft-Close Hardware",
  "Sensor LED Lighting",
  "Luxury Finishes",
  "Smart Storage Layout",
  "Custom Internal Accessories"
];

const wardrobeTypes = [
  {
    title: "Walk-in Wardrobes",
    desc: "Luxury dressing spaces designed with elegant storage zoning, display shelving, and integrated lighting.",
    img: "/wardrobe-walkin.jpg"
  },
  {
    title: "Sliding Wardrobes",
    desc: "Space-efficient wardrobe systems with clean modern lines and smooth sliding functionality.",
    img: "/wardrobe-sliding.jpg"
  },
  {
    title: "Built-in Wardrobes",
    desc: "Tailored storage solutions crafted to fit perfectly into bedrooms, apartments, and villa interiors.",
    img: "/wardrobe-built-in.jpg"
  }
];

const processSteps = [
  {
    step: "01",
    title: "Consultation",
    desc: "We understand your wardrobe needs, storage habits, and preferred visual style."
  },
  {
    step: "02",
    title: "Measurement",
    desc: "Our team takes precise site measurements to ensure a perfect fit and clean finish."
  },
  {
    step: "03",
    title: "Design & Layout",
    desc: "We plan the internal configuration, finishes, lighting, and accessory details."
  },
  {
    step: "04",
    title: "Production",
    desc: "Your wardrobe is manufactured with premium materials and precision joinery."
  },
  {
    step: "05",
    title: "Installation",
    desc: "We complete the wardrobe installation with careful detailing and quality checks."
  }
];

export default function LuxuryWardrobesPage() {
  return (
    <main className="w-full bg-[#F9F9F7] text-[#1A1A1A] selection:bg-[#CCAC34] selection:text-white">
      
      {/* HERO */}
      <section className="relative h-[85vh] md:h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/wardrobe-hero.jpg"
            fill
            priority
            alt="Luxury Wardrobes in Dubai"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/45" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/35 to-transparent" />
        </div>

        <div className="relative z-20 max-w-7xl mx-auto px-6 w-full">
          <div className="max-w-3xl">
            <FadeIn direction="up">
              <span className="text-[#CCAC34] tracking-[0.5em] text-[10px] uppercase font-bold mb-6 block">
                Bespoke Storage Solutions
              </span>

              <h1 className="text-5xl md:text-8xl font-black italic tracking-tighter uppercase leading-[0.9] text-white mb-6">
                Luxury <br />
                <span className="text-[#CCAC34]">Wardrobes.</span>
              </h1>

              <p className="text-white/80 text-sm md:text-lg leading-relaxed max-w-2xl mb-10">
                Premium custom wardrobes in Dubai with elegant finishes, intelligent storage layouts,
                integrated lighting, and precision-crafted cabinetry for villas, apartments, and dressing spaces.
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
                  Refined Storage Design
                </span>
                <h2 className="text-4xl md:text-6xl font-black italic uppercase tracking-tighter leading-[0.9] mb-8">
                  Wardrobes That <br />
                  Organize in <span className="text-[#CCAC34]">Style.</span>
                </h2>

                <div className="space-y-6 text-gray-600 leading-relaxed">
                  <p className="text-lg font-medium text-[#1A1A1A]">
                    Our luxury wardrobes are designed to combine storage efficiency with elegant presentation.
                  </p>
                  <p>
                    From walk-in wardrobes to space-saving sliding systems, every wardrobe is tailored to your room,
                    routine, and visual preferences.
                  </p>
                  <p>
                    We focus on premium finishes, practical internal organization, and refined detailing so your wardrobe
                    feels seamless, functional, and built for everyday luxury.
                  </p>
                </div>
              </div>
            </FadeIn>

            <FadeIn direction="right">
              <div className="relative h-[500px] rounded-[3rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.15)]">
                <Image
                  src="/wardrobe-detail.jpg"
                  fill
                  alt="Luxury wardrobe craftsmanship"
                  className="object-cover"
                />
                <div className="absolute bottom-8 left-8 bg-[#CCAC34] rounded-[2rem] p-6 md:p-8 shadow-2xl">
                  <span className="text-white text-4xl md:text-5xl font-black italic block leading-none">
                    100%
                  </span>
                  <span className="text-white text-[10px] uppercase tracking-[0.25em] font-bold block mt-2">
                    Custom Built
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
                Every wardrobe is crafted for elegant aesthetics, durable use, and intelligent organization.
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
                    Carefully designed to improve daily use, internal organization, and luxury presentation.
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* WARDROBE TYPES */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <FadeIn direction="up">
              <span className="text-[#CCAC34] font-bold tracking-[0.4em] text-[10px] uppercase mb-4 block">
                Design Styles
              </span>
              <h2 className="text-4xl md:text-6xl font-black italic uppercase tracking-tighter leading-none mb-6">
                Wardrobe <span className="text-[#CCAC34]">Types.</span>
              </h2>
            </FadeIn>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {wardrobeTypes.map((item, i) => (
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
                title: "Accurate Planning",
                desc: "Every wardrobe is tailored precisely to the room dimensions and storage needs."
              },
              {
                icon: <PenTool className="text-[#CCAC34]" size={30} />,
                title: "Custom Layout",
                desc: "We design each internal arrangement around your lifestyle and usage habits."
              },
              {
                icon: <Hammer className="text-[#CCAC34]" size={30} />,
                title: "Expert Production",
                desc: "Built in our workshop with premium materials and clean finishing standards."
              },
              {
                icon: <ShieldCheck className="text-[#CCAC34]" size={30} />,
                title: "Luxury Finish",
                desc: "Durable finishes, refined detailing, and dependable long-term performance."
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
      <section className="py-14 bg-white">
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
      <section className="bg-[#F9F9F7]">
        <FAQ items={wardrobeFaqs} title="Luxury Wardrobe" highlight="FAQs." />
      </section>

      {/* CTA */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="relative overflow-hidden rounded-[4rem] p-12 md:p-24 text-center">
            <div className="absolute inset-0">
              <Image
                src="/wardrobe-cta.jpg"
                fill
                alt="Luxury wardrobe consultation"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/60" />
            </div>

            <div className="relative z-10 max-w-4xl mx-auto">
              <span className="text-[#CCAC34] font-bold tracking-[0.4em] text-[10px] uppercase mb-4 block">
                Let’s Design Your Wardrobe
              </span>

              <h2 className="text-4xl md:text-7xl font-black italic tracking-tighter uppercase leading-[0.9] mb-8 text-white">
                Ready for a <span className="text-[#CCAC34]">Luxury Wardrobe?</span>
              </h2>

              <p className="text-white/75 max-w-2xl mx-auto leading-relaxed mb-10">
                Speak with our team for wardrobe planning, design guidance,
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