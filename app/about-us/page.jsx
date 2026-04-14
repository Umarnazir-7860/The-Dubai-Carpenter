import Image from "next/image";
import FadeIn from "@/components/FadeIn";

export default function About() {
    return (
        <main className="w-full h-full bg-[#F9F9F7] text-[#1A1A1A] selection:bg-[#CCAC34] selection:text-white">

            {/* 🔹 SECTION 1: HERO (Your existing design preserved) */}
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
                            <span className="text-[#CCAC34] tracking-[0.6em] text-[10px] uppercase font-bold">Est. 2010</span>
                            <div className="w-12 h-[1px] bg-[#CCAC34]" />
                        </div>

                        <h1 className="text-6xl text-white md:text-9xl font-black italic tracking-tighter uppercase leading-[0.85] mb-8">
                            Soul in <br />
                            <span className="text-transparent border-t-black/20 bg-clip-text bg-[#CCAC34]">The Craft.</span>
                        </h1>

                        <div className="inline-block backdrop-blur-sm bg-transparent border border-[#CCAC34] p-4 rounded-xl mt-4 shadow-sm">
                            <p className="text-[10px] uppercase tracking-widest font-semibold text-white">Dubai Master Joinery & Fit-out</p>
                        </div>
                    </FadeIn>
                </div>
            </section>

            {/* 🔹 SECTION 2: THE VISION (Enhanced Content for SEO) */}
            <section className="py-24 relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-6  grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                    <FadeIn direction="right" className="relative">
                        <div className="absolute -top-10 -left-10 w-32 h-32 bg-[#CCAC34]/10 rounded-full blur-3xl" />
                        <h2 className="text-4xl md:text-6xl font-extrabold tracking-tighter uppercase leading-none mb-8 text-[#1A1A1A]">
                            Merging <br /> <span className="text-[#CCAC34]">Tech & Timber.</span>
                        </h2>
                        <p className="text-gray-600 text-lg leading-relaxed mb-6">
                            At The Dubai Carpenter, we don't just shape wood; we breathe life into architectural visions. By combining modern CNC precision with the timeless heritage of master joinery, we have established ourselves as the premier choice for luxury woodwork in the UAE.
                        </p>
                        <p className="text-gray-500 text-base leading-relaxed">
                            Our journey began with a single lathe and a passion for perfection. Today, we handle full-scale commercial fit-outs and bespoke residential projects, ensuring that every grain tells a story of elegance and durability.
                        </p>
                    </FadeIn>

                    <FadeIn direction="left" className="relative group">
                        <div className="absolute -inset-4 border border-[#CCAC34]/20 rounded-[3rem] transition-transform group-hover:scale-105" />
                        <div className="relative h-[450px] rounded-[2.5rem] overflow-hidden shadow-2xl">
                            <Image src="/founder-work.jpg" fill className="object-cover transition-transform duration-1000 group-hover:scale-110" alt="Bespoke Joinery Dubai" />
                        </div>
                    </FadeIn>
                </div>
            </section>

            {/* 🔹 SECTION 3: THE PROCESS (New Detailed Section) */}
            <section className="py-24 bg-zinc-50 border-y border-black/5">
                <div className="max-w-7xl mx-auto px-10">
                    <div className="text-center mb-16">
                        <h3 className="text-[#CCAC34] font-bold tracking-[0.4em] text-[10px] uppercase mb-4">Our Methodology</h3>
                        <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase">From Sketch to <span className="italic text-[#CCAC34] ">Structure.</span></h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        {[
                            { t: "01. Consultation", d: "Deep diving into your spatial requirements, wood preferences, and lifestyle needs to create a unique blueprint." },
                            { t: "02. Material Selection", d: "Sourcing premium, sustainable hardwoods from globally certified forests to ensure longevity in the Middle Eastern climate." },
                            { t: "03. Master Crafting", d: "Your project undergoes rigorous carving, staining, and finishing by ustad craftsmen in our 12,000 sq.ft workshop." }
                        ].map((step, i) => (
                            <FadeIn key={i} direction="up" delay={i * 0.1}>
                                <div className="p-10 bg-white rounded-[2rem] border border-black/5 shadow-sm hover:shadow-xl transition-all">
                                    <h4 className="text-xl font-black uppercase mb-4 italic">{step.t}</h4>
                                    <p className="text-gray-500 text-sm leading-relaxed">{step.d}</p>
                                </div>
                            </FadeIn>
                        ))}
                    </div>
                </div>
            </section>

            {/* 🔹 SECTION 4: LUXURY STANDARDS (Refined & Fixed) */}
            <section className="py-32 px-6 lg:px-20 bg-white relative overflow-hidden selection:bg-[#CCAC34] selection:text-white">

                {/* Background Typography - Positioned strictly to avoid horizontal scroll */}
                <div className="absolute top-0 right-0 pointer-events-none select-none opacity-[0.03] translate-x-1/4">
                    <h3 className="text-[20vw] font-black uppercase italic leading-none">
                        Quality
                    </h3>
                </div>

                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">

                        {/* 🖼️ LEFT: IMAGE SIDE (Now with strict width) */}
                        <div className="w-full lg:w-1/2 relative">
                            <FadeIn direction="right">
                                <div className="relative group">
                                    {/* Architectural Border - Subtle background element */}
                                    <div className="absolute -top-4 -left-4 w-full h-full border border-zinc-100 rounded-[3rem] hidden md:block" />

                                    <div className="relative mt-10 aspect-[4/5] rounded-[2.5rem] md:rounded-[3.5rem] overflow-hidden shadow-2xl border border-black/5">
                                        <Image
                                            src="/quality-check.jpg"
                                            fill
                                            className="object-cover transition-transform duration-1000 group-hover:scale-110"
                                            alt="Dubai Luxury Woodwork Quality Inspection"
                                            sizes="(max-w-768px) 100vw, 50vw"
                                            priority
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                                    </div>

                                    {/* Floating Badge - Smaller for better responsiveness */}
                                    <div className="absolute bottom-6 -right-4 md:right-8 bg-[#CCAC34] text-white p-6 md:p-8 rounded-2xl shadow-xl z-30">
                                        <p className="text-3xl md:text-5xl font-black italic tracking-tighter leading-none">100%</p>
                                        <p className="text-[9px] uppercase tracking-widest font-bold mt-1">Certified Precision</p>
                                    </div>
                                </div>
                            </FadeIn>
                        </div>

                        {/* ✍️ RIGHT: CONTENT SIDE (Expanded for SEO) */}
                        <div className="w-full lg:w-1/2">
                            <FadeIn direction="left">
                                <div className="space-y-10">
                                    <div>
                                        <div className="flex items-center gap-4 mb-4">
                                            <div className="w-8 h-[1px] bg-[#CCAC34]" />
                                            <span className="text-[#CCAC34] font-bold tracking-[0.4em] text-[10px] uppercase">Industry Excellence</span>
                                        </div>
                                        <h2 className="text-5xl md:text-7xl font-black tracking-tighter uppercase italic leading-[0.9] mb-8 text-[#1A1A1A]">
                                            Uncompromising <br />
                                            <span className="text-[#CCAC34]">Quality.</span>
                                        </h2>
                                        <p className="text-gray-600 text-lg leading-relaxed">
                                            We deliver flawless bespoke joinery through a rigorous multi-stage protocol. Our premium finishes are engineered for absolute precision and durability within the UAE’s unique climate.
                                        </p>
                                    </div>

                                    {/* Feature Blocks */}
                                    <div className="space-y-6">
                                        {[
                                            { t: "Material Integrity", d: "Sourcing kiln-dried, A-grade timber to prevent warping and ensure long-term structural stability." },
                                            { t: "Precision Engineering", d: "Utilizing advanced CNC detailing for sub-millimeter accuracy in every joint and carving." },
                                            { t: "Sustainable Finishing", d: "Applying eco-friendly, UV-resistant PU coatings that maintain their luster for decades." }
                                        ].map((item, i) => (
                                            <div key={i} className="flex gap-6 p-6 rounded-2xl bg-zinc-50 border border-transparent hover:border-zinc-200 transition-all group">
                                                <span className="text-2xl font-black italic text-[#CCAC34]/30 group-hover:text-[#CCAC34] transition-colors">0{i + 1}</span>
                                                <div>
                                                    <h4 className="font-bold uppercase tracking-widest text-sm mb-1">{item.t}</h4>
                                                    <p className="text-gray-500 text-sm leading-relaxed">{item.d}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </FadeIn>
                        </div>

                    </div>
                </div>
            </section>

            {/* 🔹 SECTION 5: STATS RECAP (For Trust Building) */}
            <section className="py-20 bg-[#1A1A1A] text-white">
                <div className="max-w-7xl mx-auto px-10 grid grid-cols-2 lg:grid-cols-4 gap-12 text-center">
                    {[
                        { n: "15+", l: "Years of Excellence" },
                        { n: "500+", l: "Villas & Offices" },
                        { n: "12k", l: "Sq. Ft. Workshop" },
                        { n: "24/7", l: "Client Support" }
                    ].map((stat, i) => (
                        <FadeIn key={i} direction="up" delay={i * 0.1}>
                            <h4 className="text-5xl font-black italic tracking-tighter text-[#CCAC34]">{stat.n}</h4>
                            <p className="text-gray-400 uppercase text-[10px] font-bold tracking-widest mt-2">{stat.l}</p>
                        </FadeIn>
                    ))}
                </div>
            </section>

            {/* 🔹 SECTION 6: DESIGN PHILOSOPHY (Refined for Premium Feel) */}
            <section className="py-40 px-6 relative overflow-hidden bg-[#F9F9F7]">

                {/* Subtle Background Icon or Watermark */}
                <div className="absolute inset-0 flex items-center justify-center opacity-[0.02] pointer-events-none">
                    <span className="text-[30vw] font-black italic">"</span>
                </div>

                <div className="max-w-5xl mx-auto text-center relative z-10">
                    <FadeIn direction="up">
                        <div className="flex justify-center mb-10">
                            <div className="w-16 h-[1px] bg-[#CCAC34]/40" />
                        </div>

                        <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase leading-[1.1] mb-12 text-[#1A1A1A]">
                            "A well-crafted space has the <span className="text-[#CCAC34] italic">power</span> to inspire <br className="hidden md:block" /> human productivity and serenity."
                        </h2>

                        <div className="flex flex-col items-center gap-4">
                            <p className="text-[#1A1A1A] font-bold uppercase tracking-[0.5em] text-[10px]">
                                The Dubai Carpenter Philosophy
                            </p>
                            <div className="flex items-center gap-3">
                                <span className="text-gray-400 text-[9px] uppercase tracking-widest italic">Defined by Precision</span>
                                <div className="w-1 h-1 rounded-full bg-[#CCAC34]" />
                                <span className="text-gray-400 text-[9px] uppercase tracking-widest italic">Driven by Heritage</span>
                            </div>
                        </div>
                    </FadeIn>
                </div>
            </section>

            {/* 🔹 SECTION 7: REFINED CTA (With CSS Parallax) */}
            <section className="py-24 px-6 relative">
                <div className="max-w-7xl mx-auto">
                    <div className="relative overflow-hidden rounded-[3.5rem] bg-black/40 border border-white/10 shadow-2xl p-12 md:p-32 text-center group">

                        {/* 🖼️ PARALLAX BACKGROUND LAYER */}
                        <div
                            className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat bg-fixed opacity-40  transition-transform duration-700 "
                            style={{ backgroundImage: "url('/about-cta.jpg')" }} // Yahan apni wood ya workshop ki image lagao
                        />

                        {/* Dark Overlay for Readability */}
                        <div className="absolute inset-0 bg-black/60 z-10" />

                        {/* Decorative Lines */}
                        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#CCAC34] to-transparent z-20 opacity-50" />

                        {/* CONTENT (No Outer FadeIn/Scale as requested) */}
                        <div className="relative z-30">
                            <h2 className="text-5xl md:text-8xl font-black italic tracking-tighter leading-[0.9] uppercase mb-12 text-white">
                                Have a <span className="text-[#CCAC34]">Vision?</span> <br />
                                Let's Build It.
                            </h2>

                            <div className="flex flex-col md:flex-row justify-center gap-6 items-center">
                                <button className="bg-white text-black px-12 py-6 rounded-2xl font-black uppercase tracking-[0.2em] text-xs hover:bg-[#CCAC34] hover:text-white transition-all duration-500 shadow-xl">
                                    Start Consultation
                                </button>

                                <div className="h-[1px] w-12 bg-[#CCAC34] hidden md:block" />

                                <button className="text-[#CCAC34] font-bold uppercase tracking-[0.2em] text-[10px] hover:translate-x-2 transition-transform flex items-center gap-2">
                                    Contact via WhatsApp <span>→</span>
                                </button>
                            </div>
                        </div>

                        {/* Subtle Bottom Glow */}
                        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-[#CCAC34]/10 rounded-full blur-[100px] z-20" />
                    </div>
                </div>
            </section>
        </main>
    );
}