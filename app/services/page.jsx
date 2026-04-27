import Image from "next/image";
import FadeIn from "@/components/FadeIn";
import {
  ArrowRight,
  ShieldCheck,
  Zap,
  PenTool,
  Globe,
  ChevronDown,
} from "lucide-react";
import FAQ from "@/components/FAQ";
import Link from "next/link";

const servicesFaqs = [
  {
    q: "What is the typical project lead time?",
    a: "Our standard lead time for bespoke joinery projects ranges from 2 to 4 weeks. This includes the technical design phase, material procurement, precision manufacturing in our Dubai workshop, and final on-site installation.",
  },
  {
    q: "Does your work come with a structural warranty?",
    a: "Yes, all our installations are backed by a comprehensive 2-year structural warranty. We also provide official maintenance guidelines to ensure the longevity of premium wood finishes and German hardware.",
  },
  {
    q: "Can you execute designs provided by external architects?",
    a: "Absolutely. We specialize in technical execution. Our team reviews your architect's 2D drawings or 3D models to ensure structural feasibility before proceeding with high-precision CNC production.",
  },
  {
    q: "Do you provide turnkey solutions including electrical and glass?",
    a: "Yes, we offer full-scope fit-out services. This includes integrated LED lighting systems, tempered glass partitions, and specialized mirror work, allowing you to manage the entire project through a single point of contact.",
  },
  {
    q: "What materials and hardware do you use?",
    a: "We prioritize durability and luxury. We exclusively use premium hardwoods, exotic veneers, and high-end German hardware from brands like Blum and Hettich to ensure seamless, lifelong operation.",
  },
];
const services = [
  {
    title: "Custom Kitchens",
    desc: "High-gloss finishes and solid wood structures designed for durability. We integrate smart German hardware for a seamless culinary experience.",
    img: "/kitchen.jpg",
    link: "/services/custom-kitchens",
    features: ["German Hardware", "Anti-Scratch", "Solid Wood"],
  },
  {
    title: "Luxury Wardrobes",
    desc: "Bespoke walk-in closets and organizers for high-end fashion storage. Tailored to maximize space with premium internal lighting.",
    img: "/wardrobe.jpg",
    link: "/services/luxury-wardrobes",
    features: ["Sensor LED", "Walk-in Design", "Soft-close"],
  },
  {
    title: "Glass Work",
    desc: "Premium mirrors and glass partitions that define modern luxury. Specialized in custom shower enclosures and back-painted glass.",
    img: "/glass.jpg",
    link: "/services/glass-work",
    features: ["Tempered Glass", "Frameless", "Custom Mirrors"],
  },
  {
    title: "Electricians",
    desc: "Professional wiring and smart home lighting automation. We handle full electrical fit-outs for residential and commercial projects.",
    img: "/electric.jpg",
    link: "/services/electricians",
    features: ["Smart Automation", "LED Fit-outs", "Load Balancing"],
  },
  {
    title: "Sign Boards",
    desc: "3D Acrylic, neon, and high-impact signage. Create a bold brand presence with our electriciansal signage solutions.",
    img: "/sign.jpg",
    link: "/services/sign-boards",
    features: ["3D Acrylic", "Backlit Neon", "Metal Letters"],
  },
  {
    title: "Gypsum & Ceiling",
    desc: "Luxury false ceilings and decorative wall features. We create architectural depth using fire-rated gypsum and ambient cove lighting.",
    img: "/gypsum.jpg",
    link: "/services/gypsum-ceiling",
    features: ["Cove Lighting", "False Ceiling", "Decorative Wall"],
  },
  {
    title: "Wood Paint & Polish",
    desc: "Specialized wood staining and high-end PU coatings. We restore and protect your timber surfaces with premium finishes.",
    img: "/services/paint.jpg",
    link: "/wood-paint-polish",
    features: ["PU Coating", "Wood Staining", "Matte/Gloss"],
  },
  {
    title: "Commercial Fit-out",
    desc: "Full turnkey renovations for boutiques and retail stores. We manage everything from flooring to the final lighting touches.",
    img: "/services/shop.jpg",
    link: "/commercial-fit-out",
    features: ["Turnkey", "Retail Design", "Space Planning"],
  },
  {
    title: "Office Fit-outs",
    desc: "Professional workspace design including executive desks and library shelving. Functional environments for maximum productivity.",
    img: "/office.jpg",
    link: "/services/office-fit-outs",
    features: ["Ergonomic", "Custom Desks", "Acoustics"],
  },
];

export default function Services() {
  return (
    <main className="w-full h-full bg-[#F9F9F7] text-[#1A1A1A] selection:bg-[#CCAC34] selection:text-white">
      {/* 🔹 SECTION 1: HERO (Already Perfect) */}
      <section className="relative w-full h-[85vh] md:h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-10 pointer-events-none opacity-20">
          <div className="absolute top-0 left-[10%] w-[1px] h-full bg-black/10" />
          <div className="absolute top-0 right-[10%] w-[1px] h-full bg-black/10" />
        </div>
        <div className="absolute inset-0 z-0">
          <Image
            src="/crafting.jpg"
            fill
            alt="Joinery Dubai"
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="relative z-20 text-center px-6 max-w-4xl">
          <FadeIn direction="up">
            <span className="text-[#CCAC34] tracking-[0.6em] text-[10px] uppercase font-bold mb-6 block">
              Premium Craftsmanship
            </span>
            <h1 className="text-6xl text-white md:text-9xl font-black italic tracking-tighter uppercase leading-[0.85] mb-8">
              Premium <br /> <span className="text-[#CCAC34]">Joinery.</span>
            </h1>
          </FadeIn>
        </div>
      </section>

      {/* 🔹 NEW SECTION: TRUST BAR (Locations & Partners) */}
      <section className="py-10 bg-[#1A1A1A] border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap justify-between items-center gap-8 opacity-90 transition-all">
            {[
              "Palm Jumeirah",
              "Emirates Hills",
              "Dubai Mall",
              "Business Bay",
              "Downtown Dubai",
            ].map((loc) => (
              <span
                key={loc}
                className="text-white font-black text-[10px] uppercase tracking-[0.3em] italic"
              >
                {loc}
              </span>
            ))}
          </div>
        </div>
      </section>
      {/* 🔹 SECTION 2: WHY US (The Dubai Carpenter Edition) */}
      <section className="relative py-32 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
            {/* Left Column: Rich Text Content */}
            <div className="relative z-10">
              <FadeIn direction="left">
                <span className="text-[#CCAC34] font-bold tracking-[0.4em] text-[10px] uppercase mb-4 block">
                  Unmatched Standards
                </span>
                <h2 className="text-4xl md:text-6xl font-black italic uppercase tracking-tighter leading-[0.9] mb-10">
                  Why Architects <br /> Trust Our{" "}
                  <span className="text-[#CCAC34]">Work.</span>
                </h2>

                <div className="space-y-6 text-gray-600 leading-relaxed max-w-xl">
                  <p className="text-lg font-medium text-[#1A1A1A]">
                    At The Dubai Carpenter, we don't just build furniture; we
                    engineer architectural elements that define the soul of a
                    space.
                  </p>
                  <p>
                    With over a decade of deep-rooted experience in the{" "}
                    <strong>UAE’s luxury fit-out sector</strong>, we’ve mastered
                    the art of balancing aesthetic ambition with structural
                    integrity. Our joinery workshop in Dubai is equipped with
                    high-precision machinery, but it’s our master craftsmen who
                    ensure every joint is seamless.
                  </p>
                  <p>
                    We specialize in working with premium materials—from{" "}
                    <strong>exotic veneers</strong> and{" "}
                    <strong>solid hardwoods</strong> to integrated{" "}
                    <strong>smart lighting systems</strong>. This
                    multi-disciplinary approach is why leading interior
                    designers and consultants choose us for their most
                    challenging residential and commercial projects.
                  </p>
                </div>

                {/* Mini Stats Row */}
                <div className="grid grid-cols-2 gap-8 mt-12 pt-10 border-t border-gray-100">
                  <div>
                    <span className="text-3xl font-black italic text-[#1A1A1A] block">
                      500+
                    </span>
                    <span className="text-[10px] uppercase tracking-widest font-bold text-[#CCAC34]">
                      Projects Delivered
                    </span>
                  </div>
                  <div>
                    <span className="text-3xl font-black italic text-[#1A1A1A] block">
                      100%
                    </span>
                    <span className="text-[10px] uppercase tracking-widest font-bold text-[#CCAC34]">
                      Bespoke Designs
                    </span>
                  </div>
                </div>
              </FadeIn>
            </div>

            {/* Right Column: Image with Badge */}
            <div className="relative">
              <FadeIn direction="right">
                <div className="relative aspect-square md:aspect-[4/5] rounded-[3rem] md:rounded-[5rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.15)] group">
                  <Image
                    src="/workshop-shot.jpg"
                    fill
                    alt="The Dubai Carpenter - Premium Joinery Workshop"
                    className="object-cover transition-transform duration-1000 group-hover:-rotate-3"
                  />

                  {/* Signature Badge */}
                  <div className="absolute w-44 bottom-8 left-8 bg-[#CCAC34] p-8 rounded-[2.5rem] shadow-2xl z-20 transform -rotate-3 hover:rotate-0 transition-transform duration-500">
                    <span className="text-5xl font-black italic text-white block leading-none">
                      10+
                    </span>
                    <span className="text-white text-[10px] uppercase tracking-widest font-bold mt-2 block">
                      Years of <br /> UAE Excellence
                    </span>
                  </div>

                  {/* Aesthetic Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* 🔹 NEW SECTION: BESPOKE VALUES (Iconic Grid with Heading) */}
      <section className="py-24 bg-[#F9F9F7]">
        <div className="max-w-7xl mx-auto px-6">
          {/* Section Header */}
          <div className="mb-16">
            <FadeIn direction="up">
              <span className="text-[#CCAC34] text-center font-bold tracking-[0.4em] text-[10px] uppercase mb-4 block">
                The Bizgrow Standard
              </span>
              <h2 className="text-5xl text-center md:text-6xl font-black italic uppercase tracking-tighter leading-none">
                Committed to <br />{" "}
                <span className="text-[#CCAC34]">Superior Quality.</span>
              </h2>
            </FadeIn>
          </div>

          <div className="grid grid-cols-1  md:grid-cols-3 gap-8">
            {[
              {
                icon: (
                  <ShieldCheck
                    className="text-[#CCAC34] "
                    size={32}
                    strokeWidth={1.5}
                  />
                ),
                t: "2-Year Warranty",
                d: "Every installation is backed by a full structural warranty for long-term peace of mind.",
              },
              {
                icon: (
                  <Zap className="text-[#CCAC34]" size={32} strokeWidth={1.5} />
                ),
                t: "German Hardware",
                d: "We exclusively use Blum and Hettich fittings for lifelong smooth and silent operation.",
              },
              {
                icon: (
                  <PenTool
                    className="text-[#CCAC34]"
                    size={32}
                    strokeWidth={1.5}
                  />
                ),
                t: "Custom 3D Renders",
                d: "Visualize your space with precision 3D modeling before we cut the first piece of wood.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="group p-12  bg-white rounded-[2.5rem] border border-black/5 hover:border-[#CCAC34]/30 transition-all duration-500 hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.05)]"
              >
                <div className="mb-8 p-4 w-fit rounded-2xl bg-[#F9F9F7] group-hover:rotate-[360deg] group-hover:bg-[#CCAC34]/10 transition-transform duration-500">
                  {item.icon}
                </div>
                <h4 className="text-xl font-black uppercase italic mb-4 tracking-tighter">
                  {item.t}
                </h4>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {item.d}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 🔹 SECTION 3: Services GRID (With Centered Heading) */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          {/* --- Center Aligned Heading --- */}
          <div className="text-center max-w-3xl mx-auto mb-20">
            <FadeIn direction="up">
              <span className="text-[#CCAC34] font-bold tracking-[0.6em] text-[10px] uppercase mb-4 block">
                Our Expertise
              </span>
              <h2 className="text-4xl md:text-6xl font-black italic uppercase tracking-tighter leading-none mb-6">
                Bespoke <span className="text-[#CCAC34]">Solutions.</span>
              </h2>
              <p className="text-gray-500 text-sm md:text-base leading-relaxed">
                From residential sanctuaries to high-impact commercial
                environments, we deliver precision-engineered joinery and
                fit-out services.
              </p>
            </FadeIn>
          </div>

          {/* --- Services Grid --- */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {services.map((service, i) => (
              <FadeIn key={i} direction="up" delay={i * 0.1}>
                <div className="group relative h-[450px] rounded-[3.5rem] overflow-hidden bg-[#1A1A1A] transition-all duration-700 hover:-translate-y-4 hover:shadow-[0_50px_100px_-20px_rgba(204,172,52,0.2)]">
                  {/* 1. Background Image */}
                  <div
                    className="absolute inset-0 z-0 bg-cover bg-center transition-all duration-[2s] ease-in-out group-hover:scale-125 opacity-40 group-hover:opacity-20"
                    style={{ backgroundImage: `url(${service.img})` }}
                  />

                  {/* 2. Abstract Watermark */}
                  <div className="absolute top-10 left-10 pointer-events-none z-10 overflow-hidden">
                    <h4 className="text-[5rem] font-black text-white/[0.03] uppercase leading-none tracking-tighter transition-all duration-1000 group-hover:text-[#CCAC34]/10 group-hover:-translate-y-4">
                      {service.title.split(" ")[0]}
                    </h4>
                  </div>

                  {/* 3. Gradient Overlay */}
                  <div className="absolute inset-0 z-20 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/40 to-transparent" />

                  {/* 4. Content */}
                  <div className="relative z-30 h-full p-12 flex flex-col justify-end">
                    {/* Service Number/Icon Ring */}
                    <div className="absolute top-12 right-12">
                      <div className="relative flex items-center justify-center w-20 h-20 rounded-full border border-white/5 bg-white/5 backdrop-blur-2xl transition-all duration-500 group-hover:border-[#CCAC34]/40 group-hover:bg-[#CCAC34]/10">
                        <div className="absolute inset-0 rounded-full border-t-2 border-r-2 border-[#CCAC34] animate-[spin_6s_linear_infinite] opacity-30 group-hover:opacity-100 group-hover:animate-[spin_2s_linear_infinite] transition-all duration-500" />
                        <span className="relative z-10 text-[#CCAC34] font-black italic text-sm">
                          0{i + 1}
                        </span>
                      </div>
                    </div>

                    <div className="transition-transform duration-700 group-hover:-translate-y-6">
                      <span className="text-[#CCAC34] font-black text-[8px] tracking-[0.6em] uppercase mb-4 block opacity-0 group-hover:opacity-100 transition-all duration-700 translate-y-4 group-hover:translate-y-0">
                        Masterpiece Edition
                      </span>
                      <h3 className="text-3xl md:text-4xl font-black text-white mb-4 tracking-tighter uppercase leading-[0.85] italic">
                        {service.title}
                      </h3>
                      <p className="text-gray-400 font-medium leading-relaxed text-xs line-clamp-2 group-hover:text-gray-200 transition-all duration-500 max-w-[240px]">
                        {service.desc}
                      </p>
                    </div>

                    <div className="mt-8 pt-8 border-t border-white/5 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-all duration-700 translate-y-10 group-hover:translate-y-0">
                      <Link href={service.link}>
                        <button className="flex items-center gap-4 text-white font-black text-[9px] uppercase tracking-[0.4em] group/btn">
                          <span className="group-hover/btn:text-[#CCAC34] transition-colors">
                            Request Catalog
                          </span>
                          <div className="w-10 h-[1px] bg-[#CCAC34] group-hover/btn:w-16 transition-all duration-700" />
                        </button>
                      </Link>
                      <div className="w-10 h-10 rounded-xl bg-[#CCAC34] text-black flex items-center justify-center -rotate-12 group-hover:rotate-0 transition-all duration-500 shadow-[0_10px_30px_rgba(204,172,52,0.4)]">
                        <ArrowRight size={18} strokeWidth={3} />
                      </div>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* 🔹 SECTION 4: THE PROCESS (Existing) */}
      <section className="py-24 bg-black text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            {[
              {
                step: "01",
                t: "Consultation",
                d: "Site visit & technical measurement.",
              },
              {
                step: "02",
                t: "3D Modeling",
                d: "Visualizing the joinery design.",
              },
              {
                step: "03",
                t: "Production",
                d: "Crafting in our Dubai workshop.",
              },
              {
                step: "04",
                t: "Installation",
                d: "Final fitting with 2-year warranty.",
              },
            ].map((item, i) => (
              <div key={i} className="border-l border-[#CCAC34]/30 pl-8">
                <span className="text-4xl font-black italic text-[#CCAC34] block mb-4">
                  {item.step}
                </span>
                <h4 className="text-xl font-bold uppercase tracking-tighter mb-2">
                  {item.t}
                </h4>
                <p className="text-gray-500 text-xs leading-relaxed">
                  {item.d}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 🔹 NEW SECTION: FAQs (Technical & Trust) */}
      <section className="py-24 bg-white">
        <FAQ items={servicesFaqs} title="Service" highlight="FAQs." />
      </section>

      {/* 🔹 SECTION 5: PARALLAX CTA (Existing) */}
      <section className="py-24 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="relative overflow-hidden rounded-[4rem] bg-[#0A0A0A]/40 border border-white/10 shadow-2xl p-12 md:p-32 text-center group">
            <div
              className="absolute inset-0 z-0 bg-no-repeat bg-cover bg-center"
              style={{
                backgroundImage: "url('/services-cta.jpg')",
                backgroundAttachment: "fixed",
              }}
            />
            <div className="absolute inset-0 bg-black/60 z-10" />
            <div className="relative z-30">
              <h2 className="text-5xl md:text-8xl font-black italic tracking-tighter leading-[0.9] uppercase mb-12 text-white">
                Ready for <span className="text-[#CCAC34]">Precision?</span>
              </h2>
              <div className="flex flex-col md:flex-row justify-center gap-6 items-center">
                <Link href="/contact-us">
                  <button
                    className="bg-white relative overflow-hidden group/btn  text-black px-12 py-6 rounded-2xl
                                 font-black uppercase tracking-[0.2em] text-xs
                                    transition-all"
                  >
                    <span className="relative z-10 group-hover/btn:text-white">
                      Start Your Project
                    </span>
                    <div className="absolute inset-0 bg-[#CCAC34] z-5 -translate-x-full group-hover/btn:translate-x-0 transition-transform duration-300"></div>
                  </button>
                </Link>
                <a
                  href="https://wa.me/971554852036"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 text-white font-bold uppercase tracking-[0.2em] text-[10px] hover:text-[#CCAC34] transition-colors"
                >
                  Contact via Whatsapp{" "}
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
