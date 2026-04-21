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

const paintFaqs = [
  {
    q: "Do you provide custom wood paint finishes?",
    a: "Yes, we offer custom finishes including matte, gloss, PU polish, duco paint, and wood stain.",
  },
  {
    q: "Can you repaint old furniture?",
    a: "Yes, we restore and repaint old furniture, doors, cabinets, and wooden elements.",
  },
  {
    q: "Do you provide on-site polishing?",
    a: "Yes, our team works on-site for polishing and finishing depending on the project.",
  },
];

const features = [
  "PU & Duco Finish",
  "Scratch Resistant",
  "Smooth Texture",
  "Long Lasting",
  "Color Customization",
  "Premium Materials",
];

const finishTypes = [
  {
    title: "PU Polish",
    desc: "High-end smooth finish with durability and luxury feel.",
    img: "/wood-pu.jpg",
  },
  {
    title: "Duco Paint",
    desc: "Modern glossy finish for contemporary interiors.",
    img: "/wood-duco.jpg",
  },
  {
    title: "Wood Stain",
    desc: "Natural wood look with rich grain visibility.",
    img: "/wood-stain.jpg",
  },
];

const processSteps = [
  {
    step: "01",
    title: "Surface Prep",
    desc: "We clean, sand, and prepare wood surfaces.",
  },
  {
    step: "02",
    title: "Base Coating",
    desc: "Primer and base layers are applied.",
  },
  {
    step: "03",
    title: "Finishing",
    desc: "Final polish, paint, or coating is applied.",
  },
  {
    step: "04",
    title: "Inspection",
    desc: "We ensure smooth, clean, and flawless finish.",
  },
];

export default function WoodPaintPage() {
  return (
    <main className="w-full bg-[#F9F9F7] text-[#1A1A1A] selection:bg-[#CCAC34] selection:text-white">

      {/* HERO */}
      <section className="relative h-[85vh] md:h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/wood-hero.jpg" fill className="object-cover" alt="" />
          <div className="absolute inset-0 bg-black/50" />
        </div>

        <div className="relative z-20 max-w-7xl  px-6">
          <FadeIn>
            <span className="text-[#CCAC34] tracking-[0.5em] text-[10px] uppercase font-bold mb-6 block">
              Wood Finishing Solutions
            </span>

            <h1 className="text-5xl md:text-6xl font-black uppercase text-white leading-[0.9] mb-6">
              Wood Paint & <span className="text-[#CCAC34]">Polish.</span>
            </h1>

            <p className="text-white/80 max-w-2xl mb-10">
              Premium wood painting and polishing services in Dubai with smooth finishing, durable coating, and elegant results.
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
                Crafted Finishing
              </span>

              <h2 className="text-4xl md:text-6xl font-black uppercase leading-[0.9] mb-8">
                Finishes That <br />
                <span className="text-[#CCAC34]">Elevate Wood.</span>
              </h2>

              <p className="text-gray-600">
                Our wood paint and polish services enhance durability, appearance, and elegance, transforming surfaces into premium finishes.
              </p>
            </div>
          </FadeIn>

          <FadeIn direction="right">
            <div className="relative h-[400px] rounded-[3rem] overflow-hidden">
              <Image src="/wood-detail.jpg" fill className="object-cover" alt="" />
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

      {/* TYPES (PREMIUM STYLE) */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">

          <FadeIn>
            <h2 className="text-4xl md:text-6xl text-center font-black mb-16">
              Finish <span className="text-[#CCAC34]">Types</span>
            </h2>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-8">
            {finishTypes.map((item, i) => (
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
                  <p className="text-white/70 text-sm">
                    {item.desc}
                  </p>
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>

      {/* WHY CHOOSE US (REFINED) */}
      <section className="py-24 bg-[#1A1A1A] text-white">
        <div className="max-w-7xl mx-auto px-6">

          <FadeIn>
            <h2 className="text-4xl md:text-6xl text-center font-black mb-16">
              Why <span className="text-[#CCAC34]">Choose Us</span>
            </h2>
          </FadeIn>

          <div className="grid md:grid-cols-4 gap-8">
            {["Surface Prep", "Precision Coating", "Quality Materials", "Clean Finish"].map(
              (item) => (
                <div className="bg-black/10 p-8 rounded-[2rem] h-full flex items-center justify-center text-center">
                  {item}
                </div>
              ),
            )}
          </div>

        </div>
      </section>

      {/* FAQ */}
      <FAQ items={paintFaqs} title="Wood Paint & Polish" highlight="FAQs." />

      {/* CTA */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="relative overflow-hidden rounded-[4rem] p-20 text-center">

            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: "url('/wood-cta.jpg')",
                backgroundAttachment: "fixed",
              }}
            >
              <div className="absolute inset-0 bg-black/70" />
            </div>

            <div className="relative z-10">
              <h2 className="text-5xl md:text-7xl font-black text-white">
                Need Wood <span className="text-[#CCAC34]">Finishing?</span>
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