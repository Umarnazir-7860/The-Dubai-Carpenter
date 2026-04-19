import Image from "next/image";
import Link from "next/link";
import FadeIn from "@/components/FadeIn";
import FAQ from "@/components/FAQ";
import { ArrowRight, CheckCircle2, Zap, Lightbulb, ShieldCheck, Wrench } from "lucide-react";

const electricianFaqs = [
    {
        q: "What type of electrical services do you provide?",
        a: "We handle complete wiring, lighting systems, smart home setup, panel upgrades, and electrical fit-outs for residential and commercial projects."
    },
    {
        q: "Do you work on villas and apartments?",
        a: "Yes, we provide electrical services for villas, apartments, offices, and retail spaces across Dubai."
    },
    {
        q: "Can you install smart lighting systems?",
        a: "Yes, we install modern smart lighting, automation systems, and energy-efficient solutions."
    },
    {
        q: "Is your electrical work safe and certified?",
        a: "Yes, all work follows safety standards and proper electrical practices for long-term reliability."
    },
    {
        q: "How long does an electrical project take?",
        a: "Timelines depend on project size, but most residential installations are completed within a few days to 2 weeks."
    }
];

const features = [
    "Complete Wiring",
    "Smart Lighting",
    "Power Distribution",
    "Safety Systems",
    "Energy Efficient",
    "Modern Installations"
];

const services = [
    {
        title: "Complete Wiring",
        desc: "Full electrical wiring for new builds and renovation projects with safety-first execution.",
        img: "/electric-wiring.jpg"
    },
    {
        title: "Lighting Systems",
        desc: "Modern indoor and outdoor lighting solutions designed for functionality and aesthetics.",
        img: "/electric-lights.jpg"
    },
    {
        title: "Smart Home Setup",
        desc: "Smart switches, automation systems, and intelligent control for modern living spaces.",
        img: "/electric-smart.jpg"
    }
];

const processSteps = [
    {
        step: "01",
        title: "Consultation",
        desc: "We understand your electrical requirements, layout, and usage needs."
    },
    {
        step: "02",
        title: "Planning",
        desc: "We design wiring layouts, load distribution, and system structure."
    },
    {
        step: "03",
        title: "Installation",
        desc: "Professional installation with safety compliance and clean execution."
    },
    {
        step: "04",
        title: "Testing",
        desc: "We test all systems to ensure reliability and safe performance."
    },
    {
        step: "05",
        title: "Completion",
        desc: "Final handover with full functionality and support guidance."
    }
];

export default function ElectriciansPage() {
    return (
        <main className="w-full bg-[#F9F9F7] text-[#1A1A1A] selection:bg-[#CCAC34] selection:text-white">

            {/* HERO */}
            <section className="relative h-[85vh] md:h-screen flex items-center overflow-hidden">
                <div className="absolute inset-0">
                    <Image src="/elc.jpg" fill priority alt="Electricians Dubai" className="object-cover" />
                    <div className="absolute inset-0 bg-black/50" />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent" />
                </div>

                <div className="relative z-20 max-w-7xl px-6">
                    <FadeIn>
                        <span className="text-[#CCAC34] tracking-[0.5em] text-[10px] uppercase font-bold mb-6 block">
                            Electrical Services
                        </span>

                        <h1 className="text-5xl md:text-8xl font-black italic text-white uppercase leading-[0.9] mb-6">
                            Electricians <br />
                            <span className="text-[#CCAC34]">Services.</span>
                        </h1>

                        <p className="text-white/80 max-w-2xl mb-8">
                            Professional electrical solutions for homes and businesses in Dubai, from wiring to smart automation systems.
                        </p>

                        <Link href="/contact-us">
                            <button className="bg-[#CCAC34] px-8 py-5 text-white rounded-2xl uppercase text-xs font-bold">
                                Get Quote
                            </button>
                        </Link>
                    </FadeIn>
                </div>
            </section>

            {/* FEATURES */}
            <section className="py-28 bg-[#F9F9F7]">
                <div className="max-w-7xl mx-auto px-6">

                    {/* HEADING */}
                    <div className="mb-16 text-center ">
                        <FadeIn>
                            <span className="text-[#CCAC34] tracking-[0.4em] text-[10px] uppercase font-bold mb-4 block">
                                Core Capabilities
                            </span>

                            <h2 className="text-4xl md:text-6xl font-black italic tracking-tighter leading-[0.95] mb-6">
                                Electrical <br />
                                <span className="text-[#CCAC34]">Solutions Built Right.</span>
                            </h2>

                            <p className="text-gray-500 max-w-3xl mx-auto text-lg leading-relaxed">
                                From wiring to smart systems, we deliver reliable, efficient,
                                and modern electrical solutions tailored for your space.
                            </p>
                        </FadeIn>
                    </div>

                    {/* CARDS */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {features.map((item, i) => (
                            <FadeIn key={i} delay={i * 0.08}>
                                <div className="group relative p-8 rounded-[2rem] bg-white border border-black/5 overflow-hidden transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_20px_60px_rgba(0,0,0,0.08)]">

                                    {/* glow */}
                                    <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-[#CCAC34]/10 blur-[60px] rounded-full opacity-0 group-hover:opacity-100 transition duration-700"></div>

                                    {/* icon */}
                                    <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-[#F9F9F7] mb-6 border border-black/5">
                                        <CheckCircle2 className="text-[#CCAC34]" size={24} />
                                    </div>

                                    {/* title */}
                                    <h3 className="text-xl font-black tracking-tight mb-3">
                                        {item}
                                    </h3>

                                    {/* desc */}
                                    <p className="text-sm text-gray-500 leading-relaxed">
                                        Professionally executed with precision, safety,
                                        and long-term performance in mind.
                                    </p>

                                    {/* bottom accent line */}
                                    <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#CCAC34] transition-all duration-500 group-hover:w-full"></div>

                                </div>
                            </FadeIn>
                        ))}
                    </div>

                </div>
            </section>

            {/* SERVICES */}
            <section className="py-24 bg-[#F9F9F7]">
                <div className="max-w-7xl mx-auto px-6">

                    {/* HEADING */}
                    <div className="mb-16 text-center">
                        <FadeIn>
                            <span className="text-[#CCAC34] tracking-[0.4em] text-[10px] uppercase font-bold mb-4 block">
                                Service Coverage
                            </span>

                            <h2 className="text-4xl md:text-7xl font-black italic tracking-tighter leading-[0.95] mb-6">
                                What We <br />
                                <span className="text-[#CCAC34]">Handle.</span>
                            </h2>

                            <p className="text-gray-500 max-w-3xl mx-auto text-lg leading-relaxed">
                                A complete range of electrical services designed for modern living,
                                safety, and long-term performance.
                            </p>
                        </FadeIn>
                    </div>

                    {/* CARDS */}
                    <div className="grid md:grid-cols-3 gap-8">
                        {services.map((s, i) => (
                            <FadeIn key={i}>

                                <div className="group h-full flex flex-col rounded-[2rem] overflow-hidden bg-white border border-black/5 transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_20px_60px_rgba(0,0,0,0.08)]">

                                    {/* IMAGE */}
                                    <div className="relative h-[300px] overflow-hidden">
                                        <Image
                                            src={s.img}
                                            fill
                                            className="object-cover group-hover:scale-110 transition duration-700"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                                    </div>

                                    {/* CONTENT */}
                                    <div className="p-6 flex flex-col flex-grow">

                                        <h3 className="text-xl font-black tracking-tight mb-3 text-[#1A1A1A]">
                                            {s.title}
                                        </h3>

                                        <p className="text-gray-500 text-sm leading-relaxed flex-grow">
                                            {s.desc}
                                        </p>

                                        {/* optional bottom accent */}
                                        <div className="mt-6 h-[2px] w-10 bg-[#CCAC34] group-hover:w-full transition-all duration-500"></div>

                                    </div>

                                </div>

                            </FadeIn>
                        ))}
                    </div>

                </div>
            </section>

            {/* WHY */}
            <section className="py-24 bg-[#F2F2EF] border-y border-black/5">
                <div className="max-w-7xl mx-auto px-6">

                    {/* HEADING */}
                    <div className="mb-16 text-center max-w-3xl mx-auto">
                        <FadeIn>
                            <span className="text-[#CCAC34] tracking-[0.4em] text-[10px] uppercase font-bold mb-4 block">
                                Why Choose Us
                            </span>

                            <h2 className="text-4xl md:text-6xl font-black italic tracking-tighter leading-[0.95] mb-6 text-[#1A1A1A]">
                                Trusted Electrical <br />
                                <span className="text-[#CCAC34]">Execution.</span>
                            </h2>

                            <p className="text-gray-500 text-lg leading-relaxed">
                                We combine safety, efficiency, and clean workmanship to deliver dependable electrical solutions for modern spaces.
                            </p>
                        </FadeIn>
                    </div>

                    {/* CARDS */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            {
                                icon: Zap,
                                title: "Fast Execution",
                                desc: "Efficient project handling with clean installation and timely delivery."
                            },
                            {
                                icon: Lightbulb,
                                title: "Smart Solutions",
                                desc: "Modern lighting and automation systems designed for convenience and efficiency."
                            },
                            {
                                icon: ShieldCheck,
                                title: "Safe Standards",
                                desc: "All work is completed with proper safety practices and reliable performance in mind."
                            },
                            {
                                icon: Wrench,
                                title: "Skilled Team",
                                desc: "Experienced electricians delivering precise workmanship for homes and businesses."
                            }
                        ].map((item, i) => {
                            const Icon = item.icon;
                            return (
                                <FadeIn key={i} delay={i * 0.08}>
                                    <div className="group h-full bg-white rounded-[2rem] border border-black/5 p-8 hover:-translate-y-2 hover:border-[#CCAC34]/20 hover:shadow-[0_20px_60px_rgba(0,0,0,0.08)] transition-all duration-500">

                                        <div className="w-14 h-14 rounded-2xl bg-[#F9F9F7] flex items-center justify-center mb-6 border border-black/5">
                                            <Icon className="text-[#CCAC34]" size={24} />
                                        </div>

                                        <h3 className="text-xl font-black tracking-tight mb-3 text-[#1A1A1A]">
                                            {item.title}
                                        </h3>

                                        <p className="text-sm text-gray-500 leading-relaxed">
                                            {item.desc}
                                        </p>

                                        <div className="mt-6 h-[2px] w-10 bg-[#CCAC34] group-hover:w-full transition-all duration-500"></div>
                                    </div>
                                </FadeIn>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* PROCESS */}
            <section className="py-24 bg-white border-t border-black/5">
                <div className="max-w-7xl mx-auto px-6">

                    {/* HEADING */}
                    <div className="mb-16 max-w-3xl">
                        <FadeIn>
                            <span className="text-[#CCAC34] tracking-[0.4em] text-[10px] uppercase font-bold mb-4 block">
                                Our Process
                            </span>

                            <h2 className="text-4xl md:text-6xl font-black italic tracking-tighter leading-[0.95] mb-6 text-[#1A1A1A]">
                                From Planning to <br />
                                <span className="text-[#CCAC34]">Perfect Execution.</span>
                            </h2>

                            <p className="text-gray-500 text-lg leading-relaxed">
                                A clear and professional workflow that ensures every electrical project
                                is completed with precision, safety, and efficiency.
                            </p>
                        </FadeIn>
                    </div>

                    {/* STEPS */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
                        {processSteps.map((s, i) => (
                            <FadeIn key={i} delay={i * 0.08}>
                                <div className="group h-full bg-[#F9F9F7] rounded-[2rem] border border-black/5 p-8 hover:-translate-y-2 hover:border-[#CCAC34]/20 hover:shadow-[0_20px_60px_rgba(0,0,0,0.06)] transition-all duration-500">

                                    {/* Step Number */}
                                    <div className="mb-6">
                                        <span className="text-[#CCAC34] text-4xl font-black italic tracking-tight">
                                            {s.step}
                                        </span>
                                    </div>

                                    {/* Title */}
                                    <h4 className="text-xl font-black tracking-tight text-[#1A1A1A] mb-3">
                                        {s.title}
                                    </h4>

                                    {/* Description */}
                                    <p className="text-sm text-gray-500 leading-relaxed">
                                        {s.desc}
                                    </p>

                                    {/* Accent Line */}
                                    <div className="mt-6 h-[2px] w-10 bg-[#CCAC34] group-hover:w-full transition-all duration-500"></div>
                                </div>
                            </FadeIn>
                        ))}
                    </div>

                </div>
            </section>

            {/* FAQ */}
            <section className="bg-[#F9F9F7]">
                <FAQ items={electricianFaqs} title="Electricians" highlight="FAQs" />
            </section>

        {/* CTA */}
<section className="py-24 px-6 bg-white">
  <div className="max-w-7xl mx-auto">
    <div className="relative overflow-hidden rounded-[4rem] bg-[#0A0A0A] p-12 md:p-24 text-center">
      
      {/* Parallax Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat md:bg-fixed"
        style={{ backgroundImage: "url('/services-cta.jpg')" }}
      />
      <div className="absolute inset-0 bg-black/60" />

      <div className="relative z-10 max-w-4xl mx-auto">
        <span className="text-[#CCAC34] font-bold tracking-[0.4em] text-[10px] uppercase mb-4 block">
          Let’s Power Your Project
        </span>

        <h2 className="text-4xl md:text-7xl font-black italic tracking-tighter uppercase leading-[0.9] mb-8 text-white">
          Need <span className="text-[#CCAC34]">Electrical Work?</span>
        </h2>

        <p className="text-white/75 max-w-2xl mx-auto leading-relaxed mb-10">
          Speak with our team for professional electrical planning, installation,
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