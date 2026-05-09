import Image from "next/image";
import FadeIn from "@/components/FadeIn";
import Link from "next/link";
import ReviewsCarousel from "@/components/ReviewsCarousel";

export const metadata = {
  title: "Client Testimonials | Luxury Woodwork Dubai | The Dubai Carpenter",
  description: "Read what our elite clients say about our bespoke joinery and premium fit-out services in Dubai.",
};

export default function Testimonials() {
  return (
    <main className="w-full h-full bg-[#F9F9F7] text-[#1A1A1A] selection:bg-[#CCAC34] selection:text-white">
      
      {/* 🔹 SECTION 1: CINEMATIC HERO */}
      <section className="relative h-[80vh] md:h-screen w-full flex items-center justify-center overflow-hidden bg-black">
        {/* Background Image with sophisticated overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/testimonial-hero.jpg" // Use a cinematic image of a finished luxury project
            alt="Luxury Interior Dubai"
            fill
            priority
            className="object-cover opacity-50 scale-110" 
          />
          {/* Subtle gradient to make text pop and transition to the next section */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-[#CCAC34]" />
        </div>

        <div className="relative z-10 text-center px-6">
          <FadeIn direction="up">
            <span className="text-[#CCAC34] tracking-[0.8em] text-[10px] sm:text-[12px] uppercase font-black mb-6 block">
              The Gold Standard
            </span>
            <h1 className="text-6xl sm:text-7xl md:text-[9rem] font-black italic tracking-tighter uppercase leading-[0.8] text-white">
              Voices of <br /> <span className="text-[#CCAC34]">Trust.</span>
            </h1>
          </FadeIn>
        </div>

        {/* Scroll Hint */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 opacity-40">
           <div className="w-[1px] h-16 bg-gradient-to-b from-[#CCAC34] to-transparent" />
        </div>
      </section>

      {/* 🔹 SECTION 2: THE REVIEWS (Compact & Modern) */}
      <section className="relative z-20"> 
        {/* -mt-20 pulls the carousel slightly over the hero gradient for a modern layered look */}
        <ReviewsCarousel /> 
      </section>

      {/* 🔹 SECTION 3: BIG STATS */}
      <section className="py-32 bg-[#1A1A1A] text-white overflow-hidden relative">
        {/* Background decorative text for texture */}
        <span className="absolute top-0 left-0 text-[15rem] font-black italic opacity-[0.02] pointer-events-none uppercase -translate-x-20">
          Quality
        </span>
        
        <div className="max-w-7xl mx-auto px-10 relative z-10">
           <div className="flex flex-col md:flex-row justify-between items-center gap-16">
              <div className="text-left max-w-md">
                <h2 className="text-5xl font-black uppercase italic leading-[0.9] mb-6">
                  Why Clients <br /> <span className="text-[#CCAC34]">Choose Us</span>
                </h2>
                <p className="text-zinc-500 text-sm leading-relaxed">
                  From Royal palaces to modern Business Bay offices, our reputation is built on timber and trust. We deliver what others only promise.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-12 border-l border-white/5 pl-0 md:pl-16">
                  <div className="space-y-2">
                    <h3 className="text-6xl font-black text-[#CCAC34] italic tracking-tighter">98%</h3>
                    <p className="text-[10px] uppercase tracking-[0.3em] font-bold text-zinc-400">Referral Rate</p>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-6xl font-black text-[#CCAC34] italic tracking-tighter">150+</h3>
                    <p className="text-[10px] uppercase tracking-[0.3em] font-bold text-zinc-400">5-Star Reviews</p>
                  </div>
              </div>
           </div>
        </div>
      </section>

      {/* 🔹 SECTION 4: CALL TO ACTION */}
      <section className="py-40 px-6 text-center bg-white">
         <FadeIn direction="up">
            <span className="text-[#CCAC34] tracking-[0.5em] text-[10px] uppercase font-black mb-8 block">Next Steps</span>
            <h2 className="text-5xl md:text-8xl font-black uppercase italic tracking-tighter leading-[0.8] mb-12">
               Ready to be our next <br /> <span className="text-[#CCAC34]">Success Story?</span>
            </h2>
            <Link href="/contact-us">
                <button className="group relative bg-[#1A1A1A] text-white px-14 py-8 rounded-full font-black uppercase tracking-[0.3em] text-[11px] overflow-hidden transition-all duration-500 hover:shadow-[0_20px_50px_rgba(204,172,52,0.3)]">
                    <span className="relative z-10 group-hover:text-white transition-colors">Start Your Project</span>
                    <div className="absolute inset-0 bg-[#CCAC34] translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                </button>
            </Link>
         </FadeIn>
      </section>

    </main>
  );
}