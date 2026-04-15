import Image from "next/image";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-black text-white pt-24 pb-12 border-t border-white/5">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">

                    {/* COLUMN 1: BRAND LOGO & BIO */}
                    <div className="lg:col-span-1 flex flex-col items-start">
                        <div className="relative w-36 h-36 -ml-4 -mt-10 mb-2 overflow-hidden cursor-pointer group">
                            <Image
                                src="/logo.png"
                                fill
                                className="object-contain scale-[1.2] transition-transform duration-500 group-hover:scale-[1.7]"
                                alt="The Dubai Carpenter Logo"
                                priority
                            />
                        </div>
                        <p className="text-gray-400 text-sm leading-relaxed max-w-xs italic -mt-2">
                            Crafting bespoke woodwork and luxury interiors across the UAE. Where traditional craftsmanship meets modern architecture.
                        </p>
                    </div>

                    {/* COLUMN 2: QUICK LINKS */}
                    <div>
                        <h4 className="text-[#CCAC34] font-black uppercase tracking-[0.3em] text-[10px] mb-8">Navigation</h4>
                        <ul className="space-y-4">
                            {['Home', 'About', 'Services', 'Process', 'About Us'].map((item) => (
                                <li key={item}>
                                    <Link href={`/${item.toLowerCase()}`} className="text-gray-500 hover:text-white text-xs uppercase tracking-widest transition-colors duration-300">
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* COLUMN 3: SERVICES */}
                    <div>
                        <h4 className="text-[#CCAC34] font-black uppercase tracking-[0.3em] text-[10px] mb-8">Specialized</h4>
                        <ul className="space-y-4">
                            {['Custom Kitchens', 'Luxury Wardrobes', 'Wall Paneling', 'Wooden Pergolas', 'Bespoke Doors'].map((item) => (
                                <li key={item} className="text-gray-500 text-xs uppercase tracking-widest cursor-default">
                                    {item}
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
                                <p className="text-xs text-gray-400 lowercase">hello@dubaicarpenter.com</p>
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
                        {['Instagram', 'LinkedIn', 'WhatsApp'].map((social) => (
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