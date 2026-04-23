import Image from "next/image";
import Link from "next/link";
import FadeIn from "@/components/FadeIn";
import FAQ from "@/components/FAQ";
import { ArrowRight, CheckCircle2, Ruler, PenTool, Hammer, ShieldCheck } from "lucide-react";

const officeFaqs = [
  {
    q: "What is included in your office fit-out service?",
    a: "Our office fit-out service includes space planning, partitions, ceilings, custom joinery, workstation design, reception areas, meeting rooms, storage systems, and complete execution."
  },
  {
    q: "Do you work on small offices as well as larger corporate spaces?",
    a: "Yes, we handle office fit-outs for compact workspaces, growing businesses, and larger professional environments in Dubai."
  },
  {
    q: "Can you customize the office according to brand identity?",
    a: "Yes, we tailor the office layout, finishes, and overall visual language to align with your business image and practical needs."
  },
  {
    q: "Do you provide custom office furniture and joinery?",
    a: "Yes, we design and build custom desks, meeting tables, shelving, storage units, and executive office joinery."
  },
  {
    q: "How long does an office fit-out project usually take?",
    a: "Project duration depends on size and complexity, but office fit-outs are planned in stages to ensure efficient execution and timely delivery."
  }
];

const features = [
  "Workspace Planning",
  "Custom Joinery",
  "Reception Areas",
  "Meeting Rooms",
  "Storage Solutions",
  "Turnkey Execution"
];

const officeTypes = [
  {
    title: "Executive Offices",
    desc: "Premium office environments with refined finishes, built-in storage, and professional presentation.",
    img: "/office-executive.jpg"
  },
  {
    title: "Collaborative Workspaces",
    desc: "Office layouts designed to improve productivity, movement, and communication across teams.",
    img: "/office-collaborative.webp"
  },
  {
    title: "Reception & Client Areas",
    desc: "Front-facing business spaces crafted to create a strong and polished first impression.",
    img: "/office-reception.jpg"
  }
];

const processSteps = [
  {
    step: "01",
    title: "Consultation",
    desc: "We understand your office needs, workflow goals, and brand direction."
  },
  {
    step: "02",
    title: "Planning",
    desc: "We define layout structure, zoning, material direction, and execution priorities."
  },
  {
    step: "03",
    title: "Design Alignment",
    desc: "The office fit-out is shaped around productivity, visual consistency, and practical use."
  },
  {
    step: "04",
    title: "Execution",
    desc: "Our team carries out the site work, joinery, and finishing with close attention to detail."
  },
  {
    step: "05",
    title: "Handover",
    desc: "The completed workspace is finalized, inspected, and prepared for daily business use."
  }
];

export default function OfficeFitOutsPage() {
  return (
    <main className="w-full bg-[#F9F9F7] text-[#1A1A1A] selection:bg-[#CCAC34] selection:text-white">
      
      {/* HERO */}
      <section className="relative h-[85vh] md:h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/office-fitouts-hero.jpg"
            fill
            priority
            alt="Office Fit-Outs in Dubai"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/45" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/35 to-transparent" />
        </div>

        <div className="relative z-20 max-w-7xl mx-auto px-6 w-full">
          <div className="max-w-3xl">
            <FadeIn direction="up">
              <span className="text-[#CCAC34] tracking-[0.5em] text-[10px] uppercase font-bold mb-6 block">
                Office Interior Execution
              </span>

              <h1 className="text-5xl md:text-8xl font-black italic tracking-tighter uppercase leading-[0.9] text-white mb-6">
                Office <br />
                <span className="text-[#CCAC34]">Fit-Outs.</span>
              </h1>

              <p className="text-white/80 text-sm md:text-lg leading-relaxed max-w-2xl mb-10">
                Professional office fit-out solutions in Dubai for productive, refined, and brand-aligned workspaces — designed for function, comfort, and business growth.
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
                  Workspaces That Perform
                </span>
                <h2 className="text-4xl md:text-6xl font-black italic uppercase tracking-tighter leading-[0.9] mb-8">
                  Offices designed for <br />
                  focus & <span className="text-[#CCAC34]">impact.</span>
                </h2>

                <div className="space-y-6 text-gray-600 leading-relaxed">
                  <p className="text-lg font-medium text-[#1A1A1A]">
                    A well-designed office supports both productivity and professional presence.
                  </p>
                  <p>
                    We create office fit-outs that combine practical planning, clean material choices, and refined detailing to improve how teams work and how brands are perceived.
                  </p>
                  <p>
                    From executive spaces to collaborative layouts and reception zones, every office is tailored for efficiency, comfort, and long-term business use.
                  </p>
                </div>
              </div>
            </FadeIn>

            <FadeIn direction="right">
              <div className="relative h-[500px] rounded-[3rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.15)]">
                <Image
                  src="/office-fitouts-detail.webp"
                  fill
                  alt="Office fit-out craftsmanship"
                  className="object-cover"
                />
                <div className="absolute bottom-8 left-8 bg-[#CCAC34] rounded-[2rem] p-6 md:p-8 shadow-2xl">
                  <span className="text-white text-4xl md:text-5xl font-black italic block leading-none">
                    100%
                  </span>
                  <span className="text-white text-[10px] uppercase tracking-[0.25em] font-bold block mt-2">
                    Business Ready
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
                Office <span className="text-[#CCAC34]">Advantages.</span>
              </h2>
              <p className="text-gray-500 leading-relaxed">
                Every office fit-out is designed to balance efficiency, comfort, professional presentation, and long-term usability.
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
                    Planned and executed to improve workflow, employee experience, and the overall quality of your business environment.
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* OFFICE TYPES */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <FadeIn direction="up">
              <span className="text-[#CCAC34] font-bold tracking-[0.4em] text-[10px] uppercase mb-4 block">
                Workspace Environments
              </span>
              <h2 className="text-4xl md:text-6xl font-black italic uppercase tracking-tighter leading-none mb-6">
                Office <span className="text-[#CCAC34]">Applications.</span>
              </h2>
            </FadeIn>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {officeTypes.map((item, i) => (
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
                Built With <span className="text-[#CCAC34]">Precision.</span>
              </h2>
            </FadeIn>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Ruler className="text-[#CCAC34]" size={30} />,
                title: "Planned Layouts",
                desc: "Each office layout is structured to support movement, focus, and daily operational needs."
              },
              {
                icon: <PenTool className="text-[#CCAC34]" size={30} />,
                title: "Brand Alignment",
                desc: "The workspace direction is tailored to reflect the professionalism and identity of your business."
              },
              {
                icon: <Hammer className="text-[#CCAC34]" size={30} />,
                title: "Quality Execution",
                desc: "Our team delivers custom joinery, finishes, and site work with close attention to detail."
              },
              {
                icon: <ShieldCheck className="text-[#CCAC34]" size={30} />,
                title: "Long-Term Use",
                desc: "Every office is completed for durability, daily performance, and a polished final presentation."
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
      <section className="bg-[#F9F9F7]">
        <FAQ items={officeFaqs} title="Office Fit-Outs" highlight="FAQs." />
      </section>

      {/* CTA */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="relative overflow-hidden rounded-[4rem] bg-[#0A0A0A]/30 p-12 md:p-24 text-center">
            <div className="absolute inset-0">
              <Image
                src="/office-cta.jpg"
                fill
                alt="Office fit-out consultation"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/60" />
            </div>

            <div className="relative z-10 max-w-4xl mx-auto">
              <span className="text-[#CCAC34] font-bold tracking-[0.4em] text-[10px] uppercase mb-4 block">
                Let’s Build Your Workspace
              </span>

              <h2 className="text-4xl md:text-7xl font-black italic tracking-tighter uppercase leading-[0.9] mb-8 text-white">
                Ready for <span className="text-[#CCAC34]">Office Fit-Outs?</span>
              </h2>

              <p className="text-white/75 max-w-2xl mx-auto leading-relaxed mb-10">
                Speak with our team for office planning, execution strategy,
                and a tailored quotation for your Dubai workspace project.
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