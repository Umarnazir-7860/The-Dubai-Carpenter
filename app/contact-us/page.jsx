"use client";
import { useState } from 'react';
import Image from 'next/image';
import { Mail, Phone, MapPin, Clock, Loader2, Send, CheckCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ContactPage() {
    const [formData, setFormData] = useState({ name: '', email: '', subject: 'General Inquiry', message: '' });
    const [loading, setLoading] = useState(false);
    const [sent, setSent] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const res = await fetch('/api/send', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });
            if (res.ok) {
                setSent(true);
                setFormData({ name: '', email: '', subject: 'General Inquiry', message: '' });
                setTimeout(() => setSent(false), 5000);
            }
        } catch (error) {
            console.error("Error sending email", error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <main className="bg-white min-h-screen">
            
            {/* 1️⃣ HERO SECTION */}
            <section className="relative h-[70vh] md:h-screen flex items-center justify-center overflow-hidden bg-[#1A1A1A]">
                <div className="absolute inset-0 opacity-50">
                    <Image 
                        src="/contact-h.jpg" // Apni image lagayein
                        fill className="object-cover" alt="The Dubai Carpenter" 
                    />
                </div>
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/70"></div>
                <div className="relative z-10 text-center px-6">
                    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                        <span className="text-[#CCAC34] font-bold tracking-[0.5em] text-[10px] md:text-xs uppercase mb-6 block">Available Across UAE</span>
                        <h1 className="text-6xl md:text-9xl font-black italic uppercase tracking-tighter text-white leading-[0.8]">
                            Start Your <br /> <span className="text-[#CCAC34]">Journey.</span>
                        </h1>
                    </motion.div>
                </div>
            </section>

            {/* 2️⃣ FORM & INFO SECTION */}
            <section className="py-32 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
                        
                        {/* Info Column */}
                        <div className="lg:col-span-4 space-y-12">
                            <div>
                                <h2 className="text-4xl font-black italic uppercase tracking-tighter mb-6">Contact <span className="text-[#CCAC34]">Details.</span></h2>
                                <p className="text-gray-500 leading-relaxed mb-10">Reach out to our Dubai workshop for bespoke joinery and high-end wood solutions.</p>
                            </div>
                            <div className="space-y-8">
                                <ContactInfo icon={<Phone size={20}/>} label="Call Us" detail="+971 50 123 4567" />
                                <ContactInfo icon={<Mail size={20}/>} label="Email Us" detail="hello@thedubaicarpenter.com" />
                                <ContactInfo icon={<MapPin size={20}/>} label="Location" detail="Al Quoz Industrial 3, Dubai" />
                            </div>
                        </div>

                        {/* Form Column */}
                        <div className="lg:col-span-8">
                            <div className="bg-[#F9F9F7] rounded-[3rem] p-8 md:p-16 relative">
                                <AnimatePresence mode="wait">
                                    {!sent ? (
                                        <motion.form key="form" onSubmit={handleSubmit} className="space-y-8">
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                                <FloatingInput label="Your Name" value={formData.name} onChange={(e)=>setFormData({...formData, name: e.target.value})} />
                                                <FloatingInput label="Email Address" type="email" value={formData.email} onChange={(e)=>setFormData({...formData, email: e.target.value})} />
                                            </div>
                                            <div className="space-y-2">
                                                <label className="text-[10px] uppercase font-bold tracking-[0.2em] text-gray-400 ml-2">Interest</label>
                                                <select className="w-full bg-white rounded-2xl px-6 py-5 outline-none border border-transparent focus:border-[#CCAC34] transition-all appearance-none font-medium"
                                                    value={formData.subject} onChange={(e)=>setFormData({...formData, subject: e.target.value})}>
                                                    <option>General Inquiry</option>
                                                    <option>Residential Joinery</option>
                                                    <option>Commercial Fit-out</option>
                                                </select>
                                            </div>
                                            <FloatingInput label="Message" isTextArea value={formData.message} onChange={(e)=>setFormData({...formData, message: e.target.value})} />
                                            <button disabled={loading} className="w-full bg-[#1A1A1A] group/btn relative h-20 rounded-2xl overflow-hidden text-white font-black uppercase tracking-[0.3em] text-xs transition-all">
                                                <div className="relative z-10 flex items-center justify-center gap-4">
                                                    {loading ? <Loader2 className="animate-spin" /> : <>Send Inquiry <Send size={14} /></>}
                                                </div>
                                                <div className="absolute inset-0 bg-[#CCAC34] -translate-x-full group-hover/btn:translate-x-0 transition-transform duration-500"></div>
                                            </button>
                                        </motion.form>
                                    ) : (
                                        <motion.div key="success" initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="text-center py-20">
                                            <CheckCircle size={60} className="text-[#CCAC34] mx-auto mb-6" />
                                            <h3 className="text-3xl font-black italic uppercase text-[#1A1A1A]">Inquiry Sent!</h3>
                                            <p className="text-gray-500 mt-2">We will get back to you within 24 hours.</p>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3️⃣ MAP SECTION */}
            <section className="pb-24 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="h-[500px] w-full rounded-[4rem] overflow-hidden grayscale hover:grayscale-0 transition-all duration-1000 shadow-2xl border-[12px] border-[#F9F9F7]">
                        <iframe 
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115555.4526010534!2d55.15858063870311!3d25.16568194458925!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f6bb044345555%3A0x6a05d6e9f9c7e0c4!2sAl%20Quoz%20-%20Dubai!5e0!3m2!1sen!2sae!4v1700000000000!5m2!1sen!2sae" 
                            width="100%" height="100%" style={{ border: 0 }} allowFullScreen="" loading="lazy">
                        </iframe>
                    </div>
                </div>
            </section>
        </main>
    );
}

// Reusable Components
function ContactInfo({ icon, label, detail }) {
    return (
        <div className="flex gap-6 items-center group">
            <div className="w-14 h-14 rounded-2xl bg-[#F9F9F7] flex items-center justify-center text-[#CCAC34] group-hover:bg-[#1A1A1A] group-hover:text-white transition-all duration-500">
                {icon}
            </div>
            <div>
                <span className="block text-[9px] uppercase font-bold tracking-widest text-gray-400 mb-0.5">{label}</span>
                <span className="text-lg font-bold text-[#1A1A1A]">{detail}</span>
            </div>
        </div>
    );
}

function FloatingInput({ label, type = "text", isTextArea, value, onChange }) {
    return (
        <div className="space-y-2 flex-1">
            <label className="text-[10px] uppercase font-bold tracking-[0.2em] text-gray-400 ml-2">{label}</label>
            {isTextArea ? (
                <textarea required rows={4} value={value} onChange={onChange} className="w-full bg-white rounded-2xl px-6 py-5 outline-none border border-transparent focus:border-[#CCAC34] transition-all resize-none font-medium" />
            ) : (
                <input required type={type} value={value} onChange={onChange} className="w-full bg-white rounded-2xl px-6 py-5 outline-none border border-transparent focus:border-[#CCAC34] transition-all font-medium" />
            )}
        </div>
    );
}