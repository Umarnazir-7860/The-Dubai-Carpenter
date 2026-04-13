// app/page.js
import Hero from "@/components/Hero";
import FadeIn from "@/components/FadeIn";
import Image from "next/image";

export default function Home() {
  return (
    // Main ko white/off-white rakha hai aur text ko charcoal black (#1A1A1A)
    <main className="bg-[#F9F9F7] text-[#1A1A1A] selection:bg-[#CCAC34] selection:text-white antialiased">

      {/* 1. HERO SECTION */}
      <Hero />

      {/* 2. STATS SECTION - Ab isay dark rakhte hain contrast ke liye */}
      <section className="relative z-20 py-16 bg-[#CCAC34] -mt-12 mx-6 lg:mx-20 bg- rounded-[2.5rem] shadow-xl">
        <div className="max-w-7xl mx-auto px-8 grid grid-cols-2 md:grid-cols-4 gap-12">
          {[
            { label: "Years Experience", value: "15+" },
            { label: "Projects Completed", value: "500+" },
            { label: "Luxury Villas", value: "120+" },
            { label: "Master Craftsmen", value: "25" }
          ].map((stat, i) => (
            <FadeIn key={i} direction="up" delay={i * 0.1}>
              <div className="group text-center">
                <h3 className="text-white text-4xl font-black  tracking-tighter mb-1">
                  {stat.value}
                </h3>
                <p className="text-white text-[10px] uppercase tracking-[0.3em] font-semibold">{stat.label}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* 3. ABOUT SECTION - Pure Light BG */}
      <section className="py-22 px-6 md:px-10 overflow-x-hidden"> {/* Horizontal scroll rokne ke liye overflow-x-hidden zaroori hai */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          <div className="lg:sticky  h-fit z-10">
            <FadeIn direction="right">
              <span className="text-[#CCAC34] font-bold tracking-[0.5em] text-[10px] uppercase block mb-6">
                Established in UAE
              </span>
              <h2 className="text-5xl md:text-7xl font-extrabold tracking-tighter uppercase leading-[0.9] mb-8 text-[#1A1A1A]">
                Legacy in <br /> <span className="text-[#CCAC34]">Every Grain.</span>
              </h2>
              <p className="text-gray-600 text-lg md:text-xl leading-relaxed max-w-md mb-10">
                Woodwork that transcends time, crafted for the modern Dubai lifestyle.
              </p>
              <button className="flex items-center gap-6 group cursor-pointer">
                <span className="text-[#CCAC34] font-bold uppercase tracking-[0.3em] text-[10px] transition-transform group-hover:translate-x-2">Learn Our Story</span>
                <div className="w-16 md:w-20 h-[1px] bg-[#CCAC34]" />
              </button>
            </FadeIn>
          </div>

          {/* Image Container - Yahan fixes hain */}
          <div className="relative py-12 px-4 md:px-8">
            <FadeIn direction="left">
              <div className="relative group max-w-[500px] mx-auto">
                {/* Background Decorative Box - Isay thoda chota rakha hai taake asli border visible ho */}
                <div className="absolute inset-0 bg-zinc-100 rounded-[3rem] -rotate-3 transition-transform duration-700 group-hover:rotate-0 scale-[1.02]" />

                {/* Main Image Wrapper */}
                <div className="relative h-[400px] w-full rounded-[3rem] overflow-hidden shadow-2xl rotate-3 group-hover:rotate-0 transition-all duration-700 ease-out border-4 border-white">
                  <Image
                    src="/blueprint-work.jpg"
                    fill
                    alt="Blueprint"
                    className="object-cover transform group-hover:scale-105 transition-transform duration-1000"
                    sizes="(max-w-768px) 100vw, 50vw"
                    priority
                  />
                </div>
              </div>
            </FadeIn>
          </div>

        </div>
      </section>

      {/* 4. SERVICES - Subtle Warm Grey BG */}
      <section className="py-22 bg-[#F2F2EF] border-y border-black/5">
        <div className="max-w-7xl mx-auto px-10">
          <div className="mb-20">
            <h2 className="text-7xl text-center font-black  tracking-tighter uppercase text-[#1A1A1A]">
              Specialized <br /> <span className="text-[#CCAC34]">Carpentry.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { t: "Custom Kitchens", d: "High-gloss, solid wood, and smart hardware." },
              { t: "Luxury Wardrobes", d: "Walk-in closets for high-end fashion storage." },
              { t: "Wooden Pergolas", d: "Architectural outdoor structures for the sun." },
              { t: "Wall Paneling", d: "Acoustic and decorative panels for grand entries." },
              { t: "Bespoke Doors", d: "Solid oak and mahogany with master carvings." },
              { t: "Office Fit-outs", d: "Executive desks and library shelving." }
            ].map((s, i) => (
              <FadeIn key={i} direction="up" delay={i * 0.05}>
                <div className="group bg-white p-10 rounded-[2.5rem] shadow-sm hover:shadow-xl transition-all duration-500 border border-black/[0.03]">
                  <span className="text-[#CCAC34] font-black italic text-4xl opacity-20 group-hover:opacity-100 transition-opacity">0{i + 1}</span>
                  <h3 className="text-xl font-bold mt-6 mb-4 uppercase italic tracking-tighter">{s.t}</h3>
                  <p className="text-gray-500 text-sm">{s.d}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* 🔹 5. CTA SECTION (Premium Parallax Workshop) */}
      <section className="py-22 bg-[#F9F9F7]"> {/* Light background ke upar dark card */}
        <div className="max-w-7xl mx-auto px-6">
          <div className="relative group overflow-hidden rounded-[3.5rem] p-12 md:p-32 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] flex flex-col items-center text-center">

            {/* 🖼️ WORKSHOP PARALLAX BACKGROUND */}
            <div className="absolute inset-0 z-0">
              <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat md:bg-fixed "
                style={{ backgroundImage: "url('/workshop-bg.jpg')" }} // Yahan apni carpentry workshop ki image lagayein
              />
              {/* Overlay Layers for Depth */}
              <div className="absolute inset-0 bg-black/60 z-10" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent z-20" />
            </div>

            <div className="relative z-30 w-full max-w-4xl">
              
                <span className="inline-block text-[#CCAC34] font-bold uppercase tracking-[0.5em] text-[10px] bg-white/5 backdrop-blur-md px-8 py-3 rounded-full border border-white/10 mb-12">
                  Dubai's Master Craftsmen
                </span>

                <h2 className="text-6xl text-8xl font-black italic  uppercase mb-16 text-white">
                  Build <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-b from-[#CCAC34] to-[#997819] inline-block">
                    Excellence.
                  </span>
                </h2>

                <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                  <button className="relative group/btn overflow-hidden w-full sm:w-72 bg-[#CCAC34] text-white px-10 py-6 rounded-2xl font-black uppercase tracking-[0.2em] text-xs transition-all duration-500 shadow-2xl">
                    <span className="relative z-40 group-hover/btn:text-[#CCAC34] transition-colors duration-500">
                      Start Your Project
                    </span>
                    {/* Fill Animation */}
                    <div className="absolute inset-0 bg-white translate-y-full group-hover/btn:translate-y-0 transition-transform duration-500 ease-out z-30" />
                  </button>

                  <button className="group flex items-center gap-4 text-white font-bold uppercase tracking-[0.2em] text-[10px] hover:text-[#CCAC34] transition-colors">
                    Request a Catalog <span className="group-hover:translate-x-2 transition-transform">→</span>
                  </button>
                </div>
              
            </div>

            {/* Subtle Floating Light Effect */}
            <div className="absolute -top-24 -left-24 w-96 h-96 bg-[#CCAC34]/10 blur-[120px] rounded-full" />
          </div>
        </div>
      </section>
    </main>
  );
}