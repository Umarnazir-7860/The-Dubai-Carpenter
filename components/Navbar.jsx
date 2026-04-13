"use client";
import { useState, useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef(null);
    const cardRef = useRef(null);
    const linksRef = useRef([]);

    useGSAP(() => {
        if (isOpen) {
            gsap.set(menuRef.current, { visibility: "visible" });

            // 1. Card Expand
            gsap.fromTo(cardRef.current,
                { clipPath: "circle(0% at 95% 5%)", opacity: 0 },
                {
                    clipPath: "circle(150% at 95% 5%)",
                    opacity: 1,
                    duration: 0.8,
                    ease: "power3.inOut"
                }
            );

            // 2. Links Animation
            gsap.fromTo(linksRef.current,
                { y: 40, opacity: 0, rotateX: 0, skewY: 0 },
                {
                    y: 0,
                    opacity: 1,
                    stagger: 0.1,
                    duration: 0.6,
                    ease: "power4.out",
                    delay: 0.4
                }
            );

            // 3. Info Section (Left side)
            gsap.fromTo(".info-anim",
                { opacity: 0, y: 10 },
                {
                    opacity: 1,
                    y: 0,
                    stagger: 0.1,
                    duration: 0.5,
                    ease: "power2.out",
                    delay: 0.6
                }
            );

        } else {
            gsap.to(cardRef.current, {
                clipPath: "circle(0% at 95% 5%)",
                opacity: 0,
                duration: 0.6,
                ease: "power3.inOut",
                onComplete: () => gsap.set(menuRef.current, { visibility: "hidden" })
            });
        }
    }, [isOpen]);

    return (
        <>
            {/* Styling wahi hai, sirf backdrop-blur aur bg-black/10 add kiya hai */}
            <header className="fixed top-0 left-0 w-full h-20 z-[110] px-7 flex justify-between items-center pointer-events-none backdrop-blur-md bg-black/10">
                <div className="pointer-events-auto">
                    <Link href="/">
                        <div className="relative w-12 h-12 md:w-30 md:h-30 cursor-pointer hover:scale-105 transition-transform duration-300">
                            <Image
                                src="/logo.png" 
                                alt="The Dubai Carpenter Logo"
                                fill
                                className="object-contain"
                                priority 
                            />
                        </div>
                    </Link>
                </div>

                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="pointer-events-auto flex items-center gap-4 group backdrop-blur-xl p-2.5 px-6 rounded-full border border-[#CCAC34]/40 hover:border-[#CCAC34] transition-all duration-500 bg-[#CCAC34]]shadow-2xl"
                >
                    <span className="text-white text-[11px] md:text-xs tracking-[0.25em] font-bold uppercase select-none">
                        {isOpen ? "CLOSE" : "MENU"}
                    </span>

                    <div className="relative flex items-center justify-center w-6 h-4">
                        <span className={`absolute h-[2px] w-full bg-[#CCAC34] rounded-full transition-all duration-300 ease-in-out ${isOpen ? "rotate-45 translate-y-0" : "-translate-y-1.5"}`}></span>
                        <span className={`absolute h-[2px] w-full bg-[#CCAC34] rounded-full transition-all duration-200 ${isOpen ? "opacity-0 scale-x-0" : "opacity-100"}`}></span>
                        <span className={`absolute h-[2px] w-full bg-[#CCAC34] rounded-full transition-all duration-300 ease-in-out ${isOpen ? "-rotate-45 translate-y-0" : "translate-y-1.5"}`}></span>
                    </div>
                </button>
            </header>

            <div
                ref={menuRef}
                className="fixed inset-0 z-[100] invisible flex justify-end p-4 md:p-8 pt-24 md:pt-32"
            >
                <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={() => setIsOpen(false)}></div>

                <div
                    ref={cardRef}
                    className="w-full max-w-[850px] h-fit md:h-[420px] bg-[#0d0d0d] border border-gold/20 rounded-3xl relative overflow-hidden shadow-2xl flex flex-col md:flex-row p-8 md:p-12"
                >
                    <div className="hidden md:flex flex-1 flex-col justify-between border-r border-gold/10 pr-10">
                        <div className="info-anim">
                            <div className="relative -ml-6 w-30 h-30 ">
                                <Image 
                                    src="/logo.png" 
                                    alt="The Dubai Carpenter" 
                                    fill 
                                    className="object-contain"
                                />
                            </div>
                            <div className="text-[#CCAC34] font-bold text-2xl tracking-tighter mb-2 italic underline underline-offset-8 uppercase">The Dubai Carpenter</div>
                            <p className="text-gray-500 text-sm leading-relaxed mt-4">
                                Premium Bespoke Carpentry & <br /> Furniture Solutions in Dubai.
                            </p>
                        </div>

                        <div className="space-y-4">
                            <div className="info-anim text-xs tracking-widest text-gold/50 uppercase font-semibold">Contact & Support</div>
                            <p className="info-anim text-white text-sm">contact@thedubaicarpenter.ae</p>
                            <div className="flex gap-4 info-anim">
                                <span className="w-8 h-8 rounded bg-gold/10 text-gold flex items-center justify-center text-xs border border-gold/20 cursor-pointer hover:bg-gold hover:text-black transition-colors">IG</span>
                                <span className="w-8 h-8 rounded bg-gold/10 text-gold flex items-center justify-center text-xs border border-gold/20 cursor-pointer hover:bg-gold hover:text-black transition-colors">WA</span>
                            </div>
                        </div>
                    </div>

                    <nav className="flex-1 flex flex-col justify-center md:pl-16 space-y-4 py-10 md:py-0">
                        {['HOME', 'SERVICES', 'OUR PROJECTS', 'MATERIALS', 'REVIEWS', 'CONTACT'].map((item, i) => (
                            <Link
                                key={item}
                                href={`/${item.toLowerCase().replace(" ", "-")}`}
                                onClick={() => setIsOpen(false)}
                                ref={el => linksRef.current[i] = el}
                                className="text-xl font-bold text-white hover:text-gold transition-colors tracking-tighter inline-block"
                            >
                                {item}
                            </Link>
                        ))}
                    </nav>
                </div>
            </div>
        </>
    );
}