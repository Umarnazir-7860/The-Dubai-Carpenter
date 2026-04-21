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

const signFaqs = [
  {
    q: "Do you design custom sign boards?",
    a: "Yes, we create fully customized sign boards based on your brand and location.",
  },
  {
    q: "Do you provide LED sign boards?",
    a: "Yes, we specialize in LED, backlit, and illuminated signage.",
  },
  {
    q: "Do you install across Dubai?",
    a: "Yes, we provide installation services across all areas in Dubai.",
  },
];

const features = [
  "LED Illumination",
  "Weather Resistant",
  "Custom Sizes",
  "Premium Finishing",
  "Strong Visibility",
  "Durable Build",
];

const signTypes = [
  {
    title: "LED Sign Boards",
    desc: "High-visibility illuminated signage designed for maximum impact.",
    img: "/sign-led.jpg",
  },
  {
    title: "3D Letter Signs",
    desc: "Modern raised lettering for a bold and premium brand presence.",
    img: "/sign-3d.jpg",
  },
  {
    title: "Shop Sign Boards",
    desc: "Professional storefront signage tailored for businesses.",
    img: "/sign-shop.jpg",
  },
];

const processSteps = [
  {
    step: "01",
    title: "Consultation",
    desc: "We understand your brand and signage requirements.",
  },
  {
    step: "02",
    title: "Measurement",
    desc: "We take accurate dimensions of your installation space.",
  },
  {
    step: "03",
    title: "Design",
    desc: "We create layout, lighting, and structure design.",
  },
  {
    step: "04",
    title: "Production",
    desc: "Your sign board is fabricated using premium materials.",
  },
  {
    step: "05",
    title: "Installation",
    desc: "We install with precision and clean finishing.",
  },
];

export default function SignBoardsPage() {
  return (
    <main className="w-full bg-[#F9F9F7] text-[#1A1A1A] selection:bg-[#CCAC34] selection:text-white">
      {/* HERO */}
      <section className="relative h-[85vh] md:h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/sign-hero.jpg" fill className="object-cover" alt="" />
          <div className="absolute inset-0 bg-black/50" />
        </div>

        <div className="relative z-20 max-w-7xl px-6">
          <FadeIn>
            <span className="text-[#CCAC34] tracking-[0.5em] text-[10px] uppercase font-bold mb-6 block">
              Custom Sign Board Solutions
            </span>

            <h1 className="text-5xl md:text-6xl font-black uppercase text-white leading-[0.9] mb-6">
              Premium <span className="text-[#CCAC34]">Sign Boards.</span>
            </h1>

            <p className="text-white/80 max-w-2xl mb-10">
              Custom sign boards in Dubai designed to improve visibility,
              enhance branding, and create a strong first impression.
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
                Built for Visibility
              </span>

              <h2 className="text-4xl md:text-6xl font-black uppercase leading-[0.9] mb-8">
                Sign Boards That
                <span className="text-[#CCAC34]">Stand Out.</span>
              </h2>

              <p className="text-gray-600">
                We design and install high-quality sign boards that enhance your
                brand visibility and attract attention.
              </p>
            </div>
          </FadeIn>

          <FadeIn direction="right">
            <div className="relative h-[400px] rounded-[3rem] overflow-hidden">
              <Image
                src="/sign-detail.jpg"
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
            <h2 className="text-4xl md:text-6xl font-black text-center mb-16">
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
      {/* Types */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn>
            <h2 className="text-4xl md:text-6xl text-center font-black mb-16">
              Sign Board <span className="text-[#CCAC34]">Types</span>
            </h2>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-8">
            {signTypes.map((item, i) => (
              <FadeIn key={i} direction="up" delay={i * 0.1}>
                {/* CARD */}
                <div className="group relative h-[380px] rounded-[2.5rem] overflow-hidden">
                  {/* IMAGE */}
                  <Image
                    src={item.img}
                    fill
                    className="object-cover transition-all duration-700 group-hover:scale-110"
                    alt={item.title}
                  />

                  {/* DARK OVERLAY */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                  {/* CONTENT */}
                  <div className="absolute bottom-0 p-8">
                    <h3 className="text-2xl font-black uppercase text-white mb-3 tracking-tight">
                      {item.title}
                    </h3>

                    <p className="text-white/70 text-sm leading-relaxed max-w-xs">
                      {item.desc}
                    </p>
                  </div>

                  {/* HOVER GLOW BORDER */}
                  <div className="absolute inset-0 rounded-[2.5rem] border border-white/10 group-hover:border-[#CCAC34]/40 transition-all duration-500" />
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

     
      {/* WHY CHOOSE US */}
      <section className="py-24 bg-[#1A1A1A] text-white">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-[#CCAC34] font-bold tracking-[0.4em] text-[10px] uppercase mb-4 block">
                Why Choose Us
              </span>
              <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none">
                Built With <span className="text-[#CCAC34]">Precision.</span>
              </h2>
              <p className="text-white/60 text-sm md:text-base leading-relaxed mt-6">
                From concept to installation, every sign board is handled with
                careful planning, premium materials, and a finish that
                strengthens your brand presence.
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
            {[
              {
                icon: <Ruler className="text-[#CCAC34]" size={30} />,
                title: "Accurate Measurement",
                desc: "Precise site measurements for a clean fit, balanced proportions, and installation accuracy.",
              },
              {
                icon: <PenTool className="text-[#CCAC34]" size={30} />,
                title: "Custom Design",
                desc: "Every sign board is tailored to your branding, layout, visibility needs, and location.",
              },
              {
                icon: <Hammer className="text-[#CCAC34]" size={30} />,
                title: "Quality Production",
                desc: "Fabricated with durable materials, refined detailing, and strict attention to finish quality.",
              },
              {
                icon: <ShieldCheck className="text-[#CCAC34]" size={30} />,
                title: "Professional Installation",
                desc: "Installed with care, alignment precision, and dependable after-installation support.",
              },
            ].map((item, i) => (
              <FadeIn key={i} direction="up" delay={i * 0.08}>
                <div className="h-full flex">
                  <div className="w-full rounded-[2rem] border border-white/10 bg-black/10 p-8 flex flex-col transition-all duration-500 hover:-translate-y-2 hover:border-[#CCAC34]/30">
                    <div className="mb-6">{item.icon}</div>

                    <h3 className="text-xl font-black uppercase tracking-tighter mb-4">
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
      <FAQ items={signFaqs} title="Sign Boards" highlight="FAQs." />

      {/* CTA SAME PARALLAX */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="relative overflow-hidden rounded-[4rem] p-20 text-center">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: "url('/sign-cta.jpg')",
                backgroundAttachment: "fixed",
              }}
            >
              <div className="absolute inset-0 bg-black/70" />
            </div>

            <div className="relative z-10">
              <h2 className="text-5xl md:text-7xl font-black text-white">
                Need a <span className="text-[#CCAC34]">Sign Board?</span>
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
