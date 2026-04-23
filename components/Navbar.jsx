"use client";
import { useState, useRef, useEffect } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [servicesOpen, setServicesOpen] = useState(false);

    const menuRef = useRef(null);
    const cardRef = useRef(null);
    const linksRef = useRef([]);
    const servicesMenuRef = useRef(null);
    const servicesToggleRef = useRef(null);

    useGSAP(() => {
        if (isOpen) {
            gsap.set(menuRef.current, { visibility: "visible" });
            gsap.fromTo(cardRef.current,
                { clipPath: "circle(0% at 95% 5%)", opacity: 0 },
                { clipPath: "circle(150% at 95% 5%)", opacity: 1, duration: 0.8, ease: "power3.inOut" }
            );
            gsap.fromTo(linksRef.current,
                { y: 40, opacity: 0 },
                { y: 0, opacity: 1, stagger: 0.08, duration: 0.6, ease: "power4.out", delay: 0.35 }
            );
        } else {
            gsap.to(cardRef.current, {
                clipPath: "circle(0% at 95% 5%)", opacity: 0, duration: 0.6, ease: "power3.inOut",
                onComplete: () => {
                    gsap.set(menuRef.current, { visibility: "hidden" });
                    setServicesOpen(false);
                }
            });
        }
    }, [isOpen]);

    useEffect(() => {
        if (!servicesMenuRef.current) return;
        if (servicesOpen) {
            gsap.set(servicesMenuRef.current, { display: "block" });
            gsap.fromTo(servicesMenuRef.current,
                { height: 0, opacity: 0 },
                { height: "auto", opacity: 1, duration: 0.4, ease: "power2.out" }
            );
            gsap.to(servicesToggleRef.current, { rotate: 180, duration: 0.3 });
        } else {
            gsap.to(servicesMenuRef.current, {
                height: 0, opacity: 0, duration: 0.3, ease: "power2.inOut",
                onComplete: () => { if (servicesMenuRef.current) gsap.set(servicesMenuRef.current, { display: "none" }); }
            });
            gsap.to(servicesToggleRef.current, { rotate: 0, duration: 0.3 });
        }
    }, [servicesOpen]);

    const closeMenu = () => { setIsOpen(false); setServicesOpen(false); };

    const mainLinks = [
        { label: "HOME", href: "/" },
        { label: "ABOUT-US", href: "/about-us" },
        { label: "MATERIALS", href: "/materials" },
        { label: "REVIEWS", href: "/reviews" },
        { label: "CONTACT", href: "/contact-us" }
    ];

    const serviceLinks = [
        { label: "CUSTOM KITCHENS", href: "/services/custom-kitchens" },
        { label: "LUXURY WARDROBES", href: "/services/luxury-wardrobes" },
        { label: "GLASS WORK", href: "/services/glass-work" },
        { label: "ELECTRICIANS", href: "/services/electricians" },
        { label: "SIGN BOARDS", href: "/services/sign-boards" },
        { label: "GYPSUM & CEILING", href: "/services/gypsum-ceiling" },
        { label: "WOOD PAINT & POLISH", href: "/services/wood-paint-polish" },
        { label: "COMMERCIAL FIT-OUT", href: "/services/commercial-fit-out" },
        { label: "OFFICE FIT-OUTS", href: "/services/office-fit-outs" }
    ];

    return (
        <>
            <style jsx global>{`
                .no-scrollbar::-webkit-scrollbar { display: none; }
                .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
            `}</style>
            
            <header className="fixed top-0 left-0 w-full h-20 z-[110] px-4 md:px-7 flex justify-between items-center pointer-events-none">
                <div className="pointer-events-auto">
                    <Link href="/"><div className="relative w-20 h-20 cursor-pointer"><Image src="/logo.png" alt="Logo" fill className="object-contain" priority /></div></Link>
                </div>
                <button onClick={() => setIsOpen(!isOpen)} className="pointer-events-auto flex items-center gap-4 p-2.5 px-6 rounded-full border border-[#CCAC34]/40 bg-black/20 backdrop-blur-xl">
                    <span className="text-white text-[11px] font-bold tracking-widest uppercase">{isOpen ? "CLOSE" : "MENU"}</span>
                    <div className="relative flex flex-col gap-1 w-5">
                        <span className={`h-[2px] w-full bg-[#CCAC34] transition-all ${isOpen ? "rotate-45 translate-y-1.5" : ""}`}></span>
                        <span className={`h-[2px] w-full bg-[#CCAC34] transition-all ${isOpen ? "opacity-0" : ""}`}></span>
                        <span className={`h-[2px] w-full bg-[#CCAC34] transition-all ${isOpen ? "-rotate-45 -translate-y-1.5" : ""}`}></span>
                    </div>
                </button>
            </header>

            <div ref={menuRef} className="fixed inset-0 z-[100] invisible flex justify-end p-4 md:p-8 pt-24 items-start">
                <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={closeMenu}></div>
                
                <div ref={cardRef} className="w-full max-w-[850px] bg-[#0d0d0d] border border-[#CCAC34]/20 rounded-3xl relative shadow-2xl flex flex-col md:flex-row p-8 md:p-12 max-h-[82vh] overflow-y-auto no-scrollbar">
                    <div className="hidden md:flex flex-1 flex-col justify-between border-r border-[#CCAC34]/10 pr-10">
                        <div>
                            <div className="relative -ml-6 w-24 h-24"><Image src="/logo.png" alt="Logo" fill className="object-contain" /></div>
                            <div className="text-[#CCAC34] font-bold text-2xl tracking-tighter italic underline underline-offset-8 uppercase">The Dubai Carpenter</div>
                            <p className="text-gray-500 text-sm mt-4">Premium Bespoke Carpentry & Furniture Solutions.</p>
                        </div>
                        <p className="text-white text-sm">contact@thedubaicarpenter.ae</p>
                    </div>

                    <nav className="flex-1 flex flex-col md:pl-16 space-y-4 py-2">
                        {mainLinks.slice(0, 2).map((item, i) => (
                            <Link key={item.label} href={item.href} onClick={closeMenu} ref={(el) => (linksRef.current[i] = el)} className="text-2xl font-bold text-white hover:text-[#CCAC34] uppercase">{item.label}</Link>
                        ))}
                        <div ref={(el) => (linksRef.current[2] = el)} className="flex flex-col">
                            <div className="flex items-center justify-between">
                                <Link href="/services" onClick={closeMenu} className="text-2xl font-bold text-white uppercase">Services</Link>
                                <button onClick={(e) => { e.preventDefault(); setServicesOpen(!servicesOpen); }} className="w-10 h-10 rounded-full border border-[#CCAC34]/30 text-[#CCAC34] flex items-center justify-center bg-white/5 shadow-inner">
                                    <span ref={servicesToggleRef} className="text-[12px]">▼</span>
                                </button>
                            </div>
                            <div ref={servicesMenuRef} className="hidden pl-4 pt-4 border-l border-[#CCAC34]/20 ml-2 mt-2">
                                <div className="flex flex-col gap-4 pb-4">
                                    {serviceLinks.map((item) => (
                                        <Link key={item.label} href={item.href} onClick={closeMenu} className="text-sm text-white/70 hover:text-[#CCAC34] uppercase tracking-wider">{item.label}</Link>
                                    ))}
                                </div>
                            </div>
                        </div>
                        {mainLinks.slice(2).map((item, i) => (
                            <Link key={item.label} href={item.href} onClick={closeMenu} ref={(el) => (linksRef.current[i + 3] = el)} className="text-2xl font-bold text-white hover:text-[#CCAC34] uppercase">{item.label}</Link>
                        ))}
                    </nav>
                </div>
            </div>
        </>
    );
}