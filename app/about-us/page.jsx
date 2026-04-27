import Image from "next/image";
import FadeIn from "@/components/FadeIn";
import Link from "next/link";

export default function About() {
  return (
    <main className="w-full h-full bg-[#F9F9F7] text-[#1A1A1A] selection:bg-[#CCAC34] selection:text-white">
      {/* 🔹 SECTION 1: HERO */}
      <section className="relative w-full h-[85vh] md:h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-10 pointer-events-none opacity-20">
          <div className="absolute top-0 left-[10%] w-[1px] h-full bg-black/10" />
          <div className="absolute top-0 right-[10%] w-[1px] h-full bg-black/10" />
          <div className="absolute top-[20%] left-0 w-full h-[1px] bg-black/10" />
        </div>

        <div className="absolute inset-0 z-0">
          <Image
            src="/about-hero.jpg"
            fill
            alt="The Dubai Carpenter Workshop"
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>

        <div className="relative z-20 text-center px-6">
          <FadeIn direction="up">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="w-12 h-[1px] bg-[#CCAC34]" />
              <span className="text-[#CCAC34] tracking-[0.6em] text-[10px] uppercase font-bold">
                Est. 2010
              </span>
              <div className="w-12 h-[1px] bg-[#CCAC34]" />
            </div>

            <h1 className="text-6xl text-white md:text-9xl font-black italic tracking-tighter uppercase leading-[0.85] mb-8">
              Soul in <br />
              <span className="text-[#CCAC34]">The Craft.</span>
            </h1>

            <div className="inline-block backdrop-blur-sm bg-transparent border border-[#CCAC34] p-4 rounded-xl mt-4 shadow-sm">
              <p className="text-[10px] uppercase tracking-widest font-semibold text-white">
                Dubai Master Joinery & Fit-out
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 🔹 NEW SECTION: THE ARCHITECTURAL EDGE (Transformation & Impact) */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            {/* 📸 LEFT: THE VISUAL (Cinematic Stack) */}
            <div className="relative h-[600px] group">
              {/* Main Large Image */}
              <div className="absolute top-0 left-0 w-[85%] h-[90%] rounded-[3rem] overflow-hidden shadow-2xl z-20">
                <Image
                  src="/transformation-main.jpg"
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-110"
                  alt="Luxury Interior Transformation"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              </div>

              {/* Decorative Floating Frame */}
              <div className="absolute bottom-0 right-0 w-[50%] h-[50%] rounded-[2.5rem] overflow-hidden border-[12px] border-white shadow-2xl z-30 transition-transform duration-700 group-hover:-translate-y-8 group-hover:-translate-x-4">
                <Image
                  src="/transformation-detail.jpg"
                  fill
                  className="object-cover"
                  alt="Detail Crafting"
                />
              </div>

              {/* Vertical Text Watermark */}
              <div className="absolute -left-12 top-1/2 -rotate-90 origin-center opacity-10 pointer-events-none hidden md:block">
                <span className="text-8xl font-black uppercase tracking-tighter">
                  Bespoke
                </span>
              </div>
            </div>

            {/* ✍️ RIGHT: THE STORY (Why we matter) */}
            <div className="relative">
              <FadeIn direction="left">
                <div className="flex items-center gap-4 mb-6">
                  <span className="h-[2px] w-12 bg-[#CCAC34]" />
                  <span className="text-[#CCAC34] font-bold tracking-[0.4em] text-[10px] uppercase">
                    The Transformation
                  </span>
                </div>

                <h2 className="text-5xl md:text-7xl font-black tracking-tighter uppercase leading-[0.9] mb-10 italic">
                  Space <br />
                  <span className="text-[#CCAC34]">Reimagined.</span>
                </h2>

                <div className="space-y-12">
                  <div className="relative pl-8 border-l-2 border-[#CCAC34]/30">
                    <h4 className="text-lg font-black uppercase mb-3">
                      Tailored Ergonomics
                    </h4>
                    <p className="text-gray-500 text-sm leading-relaxed">
                      We don't just fill a room; we optimize it. Every inch is
                      calculated to align with your lifestyle, ensuring that
                      luxury never compromises utility.
                    </p>
                  </div>

                  <div className="relative pl-8 border-l-2 border-[#CCAC34]/30">
                    <h4 className="text-lg font-black uppercase mb-3">
                      Acoustic Warmth
                    </h4>
                    <p className="text-gray-500 text-sm leading-relaxed">
                      Natural wood provides an acoustic depth that cold
                      materials can't match. We engineer our fit-outs to absorb
                      sound, creating serene, quiet environments.
                    </p>
                  </div>

                  <div className="relative pl-8 border-l-2 border-[#CCAC34]/30">
                    <h4 className="text-lg font-black uppercase mb-3">
                      Investment in Value
                    </h4>
                    <p className="text-gray-500 text-sm leading-relaxed">
                      High-end joinery is an asset. Our master-grade finishes
                      increase the valuation of luxury properties across Dubai,
                      from Palm Jumeirah to Emirates Hills.
                    </p>
                  </div>
                </div>

                <div className="mt-12">
                  <Link href="/services">
                    <button className="group flex items-center gap-4 text-[10px] font-black uppercase tracking-[0.3em] hover:text-[#CCAC34] transition-colors">
                      Our Services
                      <span className="w-10 h-[1px] bg-black group-hover:bg-[#CCAC34] group-hover:w-16 transition-all" />
                    </button>
                  </Link>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* 🔹 SECTION 2: THE VISION */}
      <section className="py-24 relative overflow-hidden bg-white">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <FadeIn direction="right" className="relative">
            <div className="absolute -top-10 -left-10 w-32 h-32 bg-[#CCAC34]/10 rounded-full blur-3xl" />
            <h2 className="text-4xl md:text-6xl font-extrabold tracking-tighter uppercase leading-none mb-8 text-[#1A1A1A]">
              Merging <br />{" "}
              <span className="text-[#CCAC34]">Tech & Timber.</span>
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-10">
              At The Dubai Carpenter, we don't just shape wood; we breathe life
              into architectural visions. By combining modern CNC precision with
              the timeless heritage of master joinery, we have established
              ourselves as the premier choice for luxury woodwork in the UAE.
            </p>

            {/* 🔹 Added CTA Button */}
            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact-us"
                className="relative group overflow-hidden border border-[#CCAC34] px-10 py-4 font-black rounded-full text-[10px] tracking-[0.3em] uppercase transition-all inline-block"
              >
                <span className="relative z-10 text-black group-hover:text-white transition-colors duration-500">
                  Start Your Projects
                </span>
                <div className="absolute inset-0 bg-[#CCAC34] -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out" />
              </Link>
            </div>
          </FadeIn>

          <FadeIn direction="left" className="relative group">
            <div className="absolute -inset-4 border border-[#CCAC34]/20 rounded-[3rem] transition-transform group-hover:scale-105" />
            <div className="relative h-[450px] rounded-[2.5rem] overflow-hidden shadow-2xl">
              <Image
                src="/founder-work.jpg"
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-110"
                alt="Bespoke Joinery Dubai"
              />
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 🔹 SECTION 3: THE PROCESS */}
      <section className="py-24 bg-zinc-50 border-y border-black/5">
        <div className="max-w-7xl mx-auto px-10">
          <div className="text-center mb-16">
            <h3 className="text-[#CCAC34] font-bold tracking-[0.4em] text-[10px] uppercase mb-4">
              Our Methodology
            </h3>
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase">
              From Sketch to{" "}
              <span className="italic text-[#CCAC34] ">Structure.</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                t: "01. Consultation",
                d: "Deep diving into your spatial requirements, wood preferences, and lifestyle needs to create a unique blueprint.",
              },
              {
                t: "02. Material Selection",
                d: "Sourcing premium, sustainable hardwoods from globally certified forests to ensure longevity in the Middle Eastern climate.",
              },
              {
                t: "03. Master Crafting",
                d: "Your project undergoes rigorous carving, staining, and finishing by ustad craftsmen in our 12,000 sq.ft workshop.",
              },
            ].map((step, i) => (
              <FadeIn key={i} direction="up" delay={i * 0.1}>
                <div className="p-10 bg-white rounded-[2rem] border border-black/5 shadow-sm hover:shadow-xl transition-all">
                  <h4 className="text-xl font-black uppercase mb-4 italic">
                    {step.t}
                  </h4>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {step.d}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* 🔹 SECTION 4: LUXURY STANDARDS */}
      <section className="py-32 px-6 lg:px-20 bg-white relative overflow-hidden">
        x
        <div className="absolute top-0 right-90 pointer-events-none select-none opacity-[0.03] translate-x-1/4">
          <h3 className="text-[20vw] font-black uppercase italic leading-none">
            Quality
          </h3>
        </div>
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">
            <div className="w-full lg:w-1/2 relative">
              <FadeIn direction="right">
                <div className="relative group">
                  <div className="absolute -top-4 -left-4 w-full h-full border border-zinc-100 rounded-[3rem] hidden md:block" />
                  <div className="relative mt-10 aspect-[4/5] rounded-[2.5rem] md:rounded-[3.5rem] overflow-hidden shadow-2xl border border-black/5">
                    <Image
                      src="/quality.jpg"
                      fill
                      className="object-cover"
                      alt="Quality"
                      priority
                    />
                  </div>
                  <div className="absolute bottom-6 -right-4 md:right-8 bg-[#CCAC34] text-white p-6 md:p-8 rounded-2xl shadow-xl z-30">
                    <p className="text-3xl md:text-5xl font-black italic tracking-tighter leading-none">
                      100%
                    </p>
                    <p className="text-[9px] uppercase tracking-widest font-bold mt-1">
                      Certified Precision
                    </p>
                  </div>
                </div>
              </FadeIn>
            </div>

            <div className="w-full lg:w-1/2">
              <FadeIn direction="left">
                <div className="space-y-10">
                  <div>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-8 h-[1px] bg-[#CCAC34]" />
                      <span className="text-[#CCAC34] font-bold tracking-[0.4em] text-[10px] uppercase">
                        Industry Excellence
                      </span>
                    </div>
                    <h2 className="text-5xl md:text-7xl font-black tracking-tighter uppercase italic leading-[0.9] mb-8">
                      Uncompromising <br />
                      <span className="text-[#CCAC34]">Quality.</span>
                    </h2>
                    <p className="text-gray-600 text-lg leading-relaxed">
                      We deliver flawless bespoke joinery through a rigorous
                      multi-stage protocol. Our finishes are engineered for
                      absolute precision and durability.
                    </p>
                  </div>
                  <div className="space-y-6">
                    {[
                      "Material Integrity",
                      "Precision Engineering",
                      "Sustainable Finishing",
                    ].map((item, i) => (
                      <div
                        key={i}
                        className="flex gap-6 p-6 rounded-2xl bg-zinc-50 border border-transparent hover:border-zinc-200 transition-all"
                      >
                        <span className="text-2xl font-black italic text-[#CCAC34]/30">
                          0{i + 1}
                        </span>
                        <h4 className="font-bold uppercase tracking-widest text-sm self-center">
                          {item}
                        </h4>
                      </div>
                    ))}
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* 🔹 NEW SECTION: THE CRAFTSMEN (Human Element) */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <FadeIn direction="right" className="order-2 lg:order-1">
              <div className="relative aspect-video lg:aspect-square rounded-[3rem] overflow-hidden shadow-2xl">
                <Image
                  src="/craftsmen.jpg"
                  fill
                  className="object-cover"
                  alt="Master Craftsmen at work"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/80 via-transparent to-transparent" />
                <div className="absolute bottom-10 left-10 text-white">
                  <p className="text-[#CCAC34] font-bold tracking-widest text-xs uppercase mb-2">
                    Our Backbone
                  </p>
                  <h4 className="text-3xl font-black uppercase italic">
                    The Ustad Collective
                  </h4>
                </div>
              </div>
            </FadeIn>
            <FadeIn direction="left" className="order-1 lg:order-2">
              <h2 className="text-5xl md:text-7xl font-black tracking-tighter uppercase leading-[0.9] mb-8">
                Hands that <br />
                <span className="text-[#CCAC34]">Understand</span> Wood.
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                Machinery can cut, but only a human hand can feel the soul of
                the timber. Our team consists of master joiners with over 20
                years of experience in traditional Arabian and European
                woodworking techniques.
              </p>
              <div className="p-8 border-t border-b border-zinc-100 flex items-center gap-6">
                <div className="w-16 h-16 rounded-full bg-[#CCAC34]/10 flex items-center justify-center">
                  <svg
                    className="w-8 h-8 text-[#CCAC34]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <p className="text-sm font-bold uppercase tracking-widest italic text-zinc-400">
                  Combining Old-World Soul with New-World Speed.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* 🔹 SECTION 5: STATS RECAP */}
      <section className="py-20 bg-[#1A1A1A] text-white">
        <div className="max-w-7xl mx-auto px-10 grid grid-cols-2 lg:grid-cols-4 gap-12 text-center">
          {[
            { n: "15+", l: "Years of Excellence" },
            { n: "500+", l: "Villas & Offices" },
            { n: "12k", l: "Sq. Ft. Workshop" },
            { n: "24/7", l: "Client Support" },
          ].map((stat, i) => (
            <FadeIn key={i} direction="up" delay={i * 0.1}>
              <h4 className="text-5xl font-black italic tracking-tighter text-[#CCAC34]">
                {stat.n}
              </h4>
              <p className="text-gray-400 uppercase text-[10px] font-bold tracking-widest mt-2">
                {stat.l}
              </p>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* 🔹 SECTION 6: DESIGN PHILOSOPHY */}
      <section className="py-40 px-6 relative overflow-hidden bg-[#F9F9F7]">
        <div className="absolute inset-0 flex items-center justify-center opacity-[0.02] pointer-events-none">
          <span className="text-[30vw] font-black italic">"</span>
        </div>
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <FadeIn direction="up">
            <div className="flex justify-center mb-10">
              <div className="w-16 h-[1px] bg-[#CCAC34]/40" />
            </div>
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase leading-[1.1] mb-12 text-[#1A1A1A]">
              "A well-crafted space has the{" "}
              <span className="text-[#CCAC34] italic">power</span> to inspire{" "}
              <br className="hidden md:block" /> human productivity and
              serenity."
            </h2>
            <div className="flex flex-col items-center gap-4">
              <p className="text-[#1A1A1A] font-bold uppercase tracking-[0.5em] text-[10px]">
                The Dubai Carpenter Philosophy
              </p>
              <div className="flex items-center gap-3">
                <span className="text-gray-400 text-[9px] uppercase tracking-widest italic">
                  Defined by Precision
                </span>
                <div className="w-1 h-1 rounded-full bg-[#CCAC34]" />
                <span className="text-gray-400 text-[9px] uppercase tracking-widest italic">
                  Driven by Heritage
                </span>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 🔹 SECTION 7: REFINED CTA (Guaranteed CSS Parallax) */}
      <section className="py-24 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="relative overflow-hidden rounded-[4rem] bg-[#0A0A0A]/70 border border-white/10 shadow-2xl p-12 md:p-32 text-center group">
            {/* 🖼️ PARALLAX FIX: Using pseudo-element with fixed attachment */}
            <div
              className="absolute inset-0 z-0"
              style={{
                backgroundImage: "url('/about-cta.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundAttachment: "fixed",
              }}
            />

            <div className="absolute inset-0 bg-black/60 z-10" />
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#CCAC34] to-transparent z-20 opacity-50" />

            <div className="relative z-30">
              <h2 className="text-5xl md:text-8xl font-black italic tracking-tighter leading-[0.9] uppercase mb-12 text-white">
                Have a <span className="text-[#CCAC34]">Vision?</span> <br />{" "}
                Let's Build It.
              </h2>

              <div className="flex flex-col md:flex-row justify-center gap-6 items-center">
                <Link href="/contact-us">
                  <button className="relative group/btn overflow-hidden px-12 py-6 rounded-2xl font-black uppercase tracking-[0.2em] text-xs transition-colors duration-500">
                    {/* 1. Text Layer: Isko relative aur z-10 rakho taake ye overlay ke upar rahe */}
                    <span className="relative z-10 text-black group-hover/btn:text-white transition-colors duration-500">
                      Start Consultation
                    </span>

                    {/* 2. Base Background: White background jo overlay ke niche rahega */}
                    <div className="absolute inset-0 bg-white z-0" />

                    {/* 3. Overlay Layer: Ye z-5 par hai (Base se upar, Text se niche) */}
                    <div className="absolute inset-0 bg-[#CCAC34] z-5 -translate-x-full transition-transform duration-500 group-hover/btn:translate-x-0" />
                  </button>
                </Link>
                <a
                  href="https://wa.me/971554852036"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 text-white font-bold uppercase tracking-[0.2em] text-[10px] hover:text-[#CCAC34] transition-colors"
                >
                  Contact via WhatsApp{" "}
                  <span className="group-hover:translate-x-2 transition-transform">
                    →
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
