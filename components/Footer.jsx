import Image from "next/image";
import Link from "next/link";

export default function Footer() {
    const quickLinks = [
        { label: "Home", href: "/" },
        { label: "About", href: "/about-us" },
        { label: "Services", href: "/services" },
        { label: "Contact", href: "/contact-us" },
        { label: "Blog", href: "/blog" },
    ];

    const serviceLinks = [
        { label: "Custom Kitchens", href: "/services/custom-kitchens" },
        { label: "Luxury Wardrobes", href: "/services/luxury-wardrobes" },
        { label: "Glass Work", href: "/services/glass-work" },
        { label: "Electricians", href: "/services/electricians" },
        { label: "Sign Boards", href: "/services/sign-boards" },
        { label: "Gypsum & Ceiling", href: "/services/gypsum-ceiling" },
        { label: "Wood Paint & Polish", href: "/services/wood-paint-polish" },
        { label: "Commercial Fit-out", href: "/services/commercial-fit-out" },
        { label: "Office Fit-outs", href: "/services/office-fit-outs" }
    ];

    return (
        <footer className="bg-[#0d0d0d] text-white pt-24 pb-12 border-t border-[#CCAC34]/10">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">

                    {/* COLUMN 1: BRAND LOGO & BIO */}
                    <div className="lg:col-span-1 flex flex-col items-start">
                        <div className="relative w-36 h-36 -ml-4 -mt-10 mb-2 overflow-hidden cursor-pointer group">
                            <Image
                                src="/logo.png"
                                fill
                                className="object-contain scale-[1.2] transition-transform duration-500 group-hover:scale-[1.3]"
                                alt="The Dubai Carpenter Logo"
                                priority
                            />
                        </div>
                        <p className="text-gray-400 text-sm leading-relaxed max-w-xs italic -mt-2">
                            Premium Bespoke Carpentry & Furniture Solutions in Dubai. Where traditional craftsmanship meets modern architecture.
                        </p>
                    </div>

                    {/* COLUMN 2: QUICK LINKS */}
                    <div>
                        <h4 className="text-[#CCAC34] font-black uppercase tracking-[0.3em] text-[10px] mb-8">Navigation</h4>
                        <ul className="space-y-4">
                            {quickLinks.map((item) => (
                                <li key={item.label}>
                                    <Link href={item.href} className="text-gray-500 hover:text-[#CCAC34] text-xs uppercase tracking-widest transition-colors duration-300">
                                        {item.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* COLUMN 3: SERVICES PAGES */}
                    <div>
                        <h4 className="text-[#CCAC34] font-black uppercase tracking-[0.3em] text-[10px] mb-8">Our Services</h4>
                        <ul className="grid grid-cols-1 gap-y-4">
                            {serviceLinks.map((item) => (
                                <li key={item.label}>
                                    <Link href={item.href} className="text-gray-500 hover:text-[#CCAC34] text-[11px] uppercase tracking-widest transition-colors duration-300">
                                        {item.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* COLUMN 4: CONTACT INFO */}
                    <div>
                        <h4 className="text-[#CCAC34] font-black uppercase tracking-[0.3em] text-[10px] mb-8">Connect</h4>
                        <div className="space-y-6">
                            <div>
                                <span className="block text-[#CCAC34] text-[9px] uppercase tracking-widest mb-1">Office Location</span>
                                <p className="text-xs text-gray-400 leading-relaxed uppercase tracking-tighter">
                                    Al Quoz Industrial Area 3, <br /> Dubai, United Arab Emirates
                                </p>
                            </div>
                            <div>
                                <span className="block text-[#CCAC34] text-[9px] uppercase tracking-widest mb-1">Inquiries</span>
                                <p className="text-xs text-white font-bold tracking-widest">+971 50 XXX XXXX</p>
                                <p className="text-xs text-gray-400 lowercase">contact@thedubaicarpenter.ae</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* BOTTOM BAR */}
                <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-gray-600 text-[10px] uppercase tracking-[0.4em]">
                        © 2026 THE DUBAI CARPENTER. ALL RIGHTS RESERVED.
                    </p>

                    <div className="flex gap-8">
                        {['Instagram', 'WhatsApp'].map((social) => (
                            <Link
                                key={social}
                                href="#"
                                className="text-gray-600 hover:text-[#CCAC34] text-[9px] font-black uppercase tracking-widest transition-colors duration-300"
                            >
                                {social}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
}