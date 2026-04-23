import Image from "next/image";
import Link from "next/link";
import FadeIn from "@/components/FadeIn";
import FAQ from "@/components/FAQ";
import { ArrowRight, CheckCircle2, Ruler, PenTool, Hammer, ShieldCheck } from "lucide-react";

const fitoutFaqs = [
  {
    q: "What is included in your commercial fit-out service?",
    a: "Our commercial fit-out service includes interior planning, partitions, ceilings, joinery, flooring, electrical coordination, finishes, and complete execution for retail and business spaces."
  },
  {
    q: "Do you handle shop and showroom fit-outs in Dubai?",
    a: "Yes, we provide commercial fit-out solutions for shops, showrooms, boutiques, offices, and other business spaces across Dubai."
  },
  {
    q: "Can you customize the fit-out according to brand identity?",
    a: "Yes, every commercial fit-out is tailored to match your brand style, functional requirements, and customer experience goals."
  },
  {
    q: "How long does a commercial fit-out take?",
    a: "The timeline depends on project size and complexity, but most commercial fit-out projects are planned and delivered in phased timelines with clear execution stages."
  },
  {
    q: "Do you manage both design and execution?",
    a: "Yes, we can support layout planning, design direction, material selection, and complete on-site execution."
  }
];

const features = [
  "Retail Fit-Out",
  "Showroom Finishes",
  "Space Planning",
  "Joinery & Partitions",
  "Brand-Led Design",
  "Turnkey Execution"
];

const fitoutTypes = [
  {
    title: "Retail Stores",
    desc: "Functional and attractive store fit-outs designed to improve customer flow, display, and overall shopping experience.",
    img: "/fitout-retail.jpg"
  },
  {
    title: "Showrooms",
    desc: "Premium commercial spaces that combine presentation, layout clarity, and a strong brand impression.",
    img: "/fitout-showroom.jpg"
  },
  {
    title: "Business Interiors",
    desc: "Efficient commercial interiors tailored for practical workflow, durability, and professional appearance.",
    img: "/fitout-business.webp"
  }
];

const processSteps = [
  {
    step: "01",
    title: "Consultation",
    desc: "We understand your business goals, space requirements, and commercial expectations."
  },
  {
    step: "02",
    title: "Planning",
    desc: "We prepare layout direction, material choices, and execution strategy for the project."
  },
  {
    step: "03",
    title: "Design Alignment",
    desc: "The fit-out direction is refined to match brand identity, customer flow, and functionality."
  },
  {
    step: "04",
    title: "Execution",
    desc: "Our team carries out site work with attention to detail, coordination, and finish quality."
  },
  {
    step: "05",
    title: "Handover",
    desc: "The completed space is finalized, inspected, and prepared for business operation."
  }
];

export default function CommercialFitOutPage() {
  return (
    <main className="w-full bg-[#F9F9F7] text-[#1A1A1A] selection:bg-[#CCAC34] selection:text-white">
      
      {/* HERO */}
      <section className="relative h-[85vh] md:h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/commercial-fitout-hero.jpg"
            fill
            priority
            alt="Commercial Fit-Out in Dubai"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/45" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/35 to-transparent" />
        </div>

        <div className="relative z-20 max-w-7xl mx-auto px-6 w-full">
          <div className="max-w-3xl">
            <FadeIn direction="up">
              <span className="text-[#CCAC34] tracking-[0.5em] text-[10px] uppercase font-bold mb-6 block">
                Commercial Interior Execution
              </span>

              <h1 className="text-5xl md:text-8xl font-black italic tracking-tighter uppercase leading-[0.9] text-white mb-6">
                Commercial <br />
                <span className="text-[#CCAC34]">Fit-Out.</span>
              </h1>

              <p className="text-white/80 text-sm md:text-lg leading-relaxed max-w-2xl mb-10">
                Professional commercial fit-out solutions in Dubai for shops, showrooms, and business interiors — built to enhance functionality, presentation, and brand impact.
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
                  Business Space Transformation
                </span>
                <h2 className="text-4xl md:text-6xl font-black italic uppercase tracking-tighter leading-[0.9] mb-8">
                  Spaces designed to <br />
                  perform & <span className="text-[#CCAC34]">sell.</span>
                </h2>

                <div className="space-y-6 text-gray-600 leading-relaxed">
                  <p className="text-lg font-medium text-[#1A1A1A]">
                    A commercial fit-out should do more than look good — it should support your business goals.
                  </p>
                  <p>
                    We create business spaces that combine strong layout planning, quality finishes, and practical execution for long-term use.
                  </p>
                  <p>
                    From retail environments to showroom interiors, every fit-out is tailored to improve presentation, customer flow, and operational efficiency.
                  </p>
                </div>
              </div>
            </FadeIn>

            <FadeIn direction="right">
              <div className="relative h-[500px] rounded-[3rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.15)]">
                <Image
                  src="/commercial-fitout-detail.jpg"
                  fill
                  alt="Commercial fit-out craftsmanship"
                  className="object-cover"
                />
                <div className="absolute bottom-8 left-8 bg-[#CCAC34] rounded-[2rem] p-6 md:p-8 shadow-2xl">
                  <span className="text-white text-4xl md:text-5xl font-black italic block leading-none">
                    100%
                  </span>
                  <span className="text-white text-[10px] uppercase tracking-[0.25em] font-bold block mt-2">
                    Tailored Execution
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
                Commercial <span className="text-[#CCAC34]">Advantages.</span>
              </h2>
              <p className="text-gray-500 leading-relaxed">
                Every fit-out is planned to balance visual impact, practical usage, and strong business presentation.
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
                    Planned and delivered to improve space efficiency, finish quality, and overall business impression.
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* FIT-OUT TYPES */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <FadeIn direction="up">
              <span className="text-[#CCAC34] font-bold tracking-[0.4em] text-[10px] uppercase mb-4 block">
                Business Environments
              </span>
              <h2 className="text-4xl md:text-6xl font-black italic uppercase tracking-tighter leading-none mb-6">
                Fit-Out <span className="text-[#CCAC34]">Applications.</span>
              </h2>
            </FadeIn>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {fitoutTypes.map((item, i) => (
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
                Executed With <span className="text-[#CCAC34]">Precision.</span>
              </h2>
            </FadeIn>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Ruler className="text-[#CCAC34]" size={30} />,
                title: "Planned Layouts",
                desc: "Every commercial space is arranged to support function, flow, and presentation."
              },
              {
                icon: <PenTool className="text-[#CCAC34]" size={30} />,
                title: "Brand Alignment",
                desc: "We shape the fit-out direction to match the identity and visual goals of your business."
              },
              {
                icon: <Hammer className="text-[#CCAC34]" size={30} />,
                title: "Quality Execution",
                desc: "Our team handles site work with care, detailing, and attention to finish quality."
              },
              {
                icon: <ShieldCheck className="text-[#CCAC34]" size={30} />,
                title: "Business Ready",
                desc: "The final space is prepared for practical use, visual impact, and long-term durability."
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
                From Planning to <span className="text-[#CCAC34]">Completion.</span>
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
      <section className=" bg-[#F9F9F7]">
        <FAQ items={fitoutFaqs} title="Commercial Fit-Out" highlight="FAQs." />
      </section>

      {/* CTA */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="relative overflow-hidden rounded-[4rem] p-12 md:p-24 text-center">
            <div className="absolute inset-0">
              <Image
                src="/commercial-cta.jpg"
                fill
                alt="Commercial fit-out consultation"
                className="object-cover "
              />
              <div className="absolute inset-0 bg-black/60" />
            </div>

            <div className="relative z-10 max-w-4xl mx-auto">
              <span className="text-[#CCAC34] font-bold tracking-[0.4em] text-[10px] uppercase mb-4 block">
                Let’s Build Your Business Space
              </span>

              <h2 className="text-4xl md:text-7xl font-black italic tracking-tighter uppercase leading-[0.9] mb-8 text-white">
                Ready for a <span className="text-[#CCAC34]">Commercial Fit-Out?</span>
              </h2>

              <p className="text-white/75 max-w-2xl mx-auto leading-relaxed mb-10">
                Speak with our team for planning, execution strategy,
                and a tailored quotation for your Dubai commercial fit-out project.
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