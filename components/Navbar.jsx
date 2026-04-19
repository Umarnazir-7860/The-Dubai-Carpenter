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

            // Card expand
            gsap.fromTo(
                cardRef.current,
                { clipPath: "circle(0% at 95% 5%)", opacity: 0 },
                {
                    clipPath: "circle(150% at 95% 5%)",
                    opacity: 1,
                    duration: 0.8,
                    ease: "power3.inOut"
                }
            );

            // Main links animation
            gsap.fromTo(
                linksRef.current,
                { y: 40, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    stagger: 0.08,
                    duration: 0.6,
                    ease: "power4.out",
                    delay: 0.35
                }
            );

            // Info section animation
            gsap.fromTo(
                ".info-anim",
                { opacity: 0, y: 10 },
                {
                    opacity: 1,
                    y: 0,
                    stagger: 0.08,
                    duration: 0.5,
                    ease: "power2.out",
                    delay: 0.55
                }
            );
        } else {
            gsap.to(cardRef.current, {
                clipPath: "circle(0% at 95% 5%)",
                opacity: 0,
                duration: 0.6,
                ease: "power3.inOut",
                onComplete: () => {
                    gsap.set(menuRef.current, { visibility: "hidden" });
                    setServicesOpen(false);
                }
            });
        }
    }, [isOpen]);

    useEffect(() => {
        if (!servicesMenuRef.current || !servicesToggleRef.current) return;

        if (servicesOpen) {
            gsap.set(servicesMenuRef.current, { display: "block" });
            gsap.fromTo(
                servicesMenuRef.current,
                { height: 0, opacity: 0 },
                {
                    height: "auto",
                    opacity: 1,
                    duration: 0.35,
                    ease: "power2.out"
                }
            );

            gsap.to(servicesToggleRef.current, {
                rotate: 180,
                duration: 0.3,
                ease: "power2.out"
            });
        } else {
            gsap.to(servicesMenuRef.current, {
                height: 0,
                opacity: 0,
                duration: 0.28,
                ease: "power2.inOut",
                onComplete: () => {
                    if (servicesMenuRef.current) {
                        gsap.set(servicesMenuRef.current, { display: "none" });
                    }
                }
            });

            gsap.to(servicesToggleRef.current, {
                rotate: 0,
                duration: 0.3,
                ease: "power2.out"
            });
        }
    }, [servicesOpen]);

    const closeMenu = () => {
        setIsOpen(false);
        setServicesOpen(false);
    };

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
            <header className="fixed top-0 left-0 w-full h-20 z-[110] px-2 md:px-7 flex justify-between items-center pointer-events-none backdrop-blur-md bg-black/10">
                <div className="pointer-events-auto">
                    <Link href="/">
                        <div className="relative w-25 h-25 md:w-30 md:h-30 cursor-pointer hover:scale-105 transition-transform duration-300">
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
                    className="pointer-events-auto flex items-center gap-4 group backdrop-blur-xl p-2.5 px-6 rounded-full border border-[#CCAC34]/40 hover:border-[#CCAC34] transition-all duration-500 bg-black/20 shadow-2xl"
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
                <div
                    className="absolute inset-0 bg-black/40 backdrop-blur-sm"
                    onClick={closeMenu}
                ></div>

                <div
                    ref={cardRef}
                    className="w-full max-w-[900px] h-fit md:min-h-[460px] bg-[#0d0d0d] border border-[#CCAC34]/20 rounded-3xl relative overflow-hidden shadow-2xl flex flex-col md:flex-row p-8 md:p-12"
                >
                    {/* Left info panel */}
                    <div className="hidden md:flex flex-1 flex-col justify-between border-r border-[#CCAC34]/10 pr-10">
                        <div className="info-anim">
                            <div className="relative -ml-6 w-30 h-30">
                                <Image
                                    src="/logo.png"
                                    alt="The Dubai Carpenter"
                                    fill
                                    className="object-contain"
                                />
                            </div>

                            <div className="text-[#CCAC34] font-bold text-2xl tracking-tighter mb-2 italic underline underline-offset-8 uppercase">
                                The Dubai Carpenter
                            </div>

                            <p className="text-gray-500 text-sm leading-relaxed mt-4">
                                Premium Bespoke Carpentry & <br /> Furniture Solutions in Dubai.
                            </p>
                        </div>

                        <div className="space-y-4">
                            <div className="info-anim text-xs tracking-widest text-[#CCAC34]/50 uppercase font-semibold">
                                Contact & Support
                            </div>
                            <p className="info-anim text-white text-sm">
                                contact@thedubaicarpenter.ae
                            </p>

                            <div className="flex gap-4 info-anim">
                                <span className="w-8 h-8 rounded bg-[#CCAC34]/10 text-[#CCAC34] flex items-center justify-center text-xs border border-[#CCAC34]/20 cursor-pointer hover:bg-[#CCAC34] hover:text-black transition-colors">
                                    IG
                                </span>
                                <span className="w-8 h-8 rounded bg-[#CCAC34]/10 text-[#CCAC34] flex items-center justify-center text-xs border border-[#CCAC34]/20 cursor-pointer hover:bg-[#CCAC34] hover:text-black transition-colors">
                                    WA
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Right nav */}
                    <nav className="flex-1 flex flex-col justify-center md:pl-16 space-y-3 py-6 md:py-0">
                        {mainLinks.slice(0, 2).map((item, i) => (
                            <Link
                                key={item.label}
                                href={item.href}
                                onClick={closeMenu}
                                ref={(el) => (linksRef.current[i] = el)}
                                className="text-xl md:text-2xl font-bold text-white hover:text-[#CCAC34] transition-colors tracking-tighter inline-block"
                            >
                                {item.label}
                            </Link>
                        ))}

                        {/* SERVICES with working main link + submenu toggle */}
                        <div
                            ref={(el) => (linksRef.current[2] = el)}
                            className="flex flex-col"
                        >
                            <div className="flex items-center justify-between gap-4">
                                <Link
                                    href="/services"
                                    onClick={closeMenu}
                                    className="text-xl md:text-2xl font-bold text-white hover:text-[#CCAC34] transition-colors tracking-tighter inline-block"
                                >
                                    SERVICES
                                </Link>

                                <button
                                    type="button"
                                    onClick={() => setServicesOpen((prev) => !prev)}
                                    className="w-10 h-10 rounded-full border border-[#CCAC34]/20 text-[#CCAC34] hover:bg-[#CCAC34] hover:text-black transition-colors flex items-center justify-center shrink-0"
                                    aria-label="Toggle services submenu"
                                >
                                    <span ref={servicesToggleRef} className="inline-block text-sm">
                                        ▼
                                    </span>
                                </button>
                            </div>

                            <div
                                ref={servicesMenuRef}
                                className="hidden overflow-hidden pl-4 md:pl-6 pt-3"
                            >
                                <div className="flex flex-col gap-3 border-l border-[#CCAC34]/15 pl-4">
                                    {serviceLinks.map((item) => (
                                        <Link
                                            key={item.label}
                                            href={item.href}
                                            onClick={closeMenu}
                                            className="text-sm md:text-base text-white/65 hover:text-[#CCAC34] transition-colors tracking-wide uppercase"
                                        >
                                            {item.label}
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {mainLinks.slice(2).map((item, i) => (
                            <Link
                                key={item.label}
                                href={item.href}
                                onClick={closeMenu}
                                ref={(el) => (linksRef.current[i + 3] = el)}
                                className="text-xl md:text-2xl font-bold text-white hover:text-[#CCAC34] transition-colors tracking-tighter inline-block"
                            >
                                {item.label}
                            </Link>
                        ))}
                    </nav>
                </div>
            </div>
        </>
    );
}