// src/pages/Services.js
import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const NAV_CONTAINER = "w-full px-5 sm:px-8 xl:px-14";
const PAGE_CONTAINER = "max-w-7xl mx-auto px-5 sm:px-8 xl:px-14";

const PHONE_RAW = "9367779615";
const PHONE_TEL = `tel:+1${PHONE_RAW}`;
const PHONE_PRETTY = "(936) 777-9615";

// Use real images (update if you prefer different ones)
const IMG_HERO = "/images/Banners/ST.jpeg";
const IMG_MOBILE = "/images/Banners/South_Trailers_banner.png";
const IMG_DOT = "/images/Banners/South_Trailers_CMYK.jpg";
const IMG_PM = "/images/Banners/South_Trailers_CMYK.png";
const IMG_CURTAIN = "/images/Banners/South_Trailers_CMYK.png";

function cn(...xs) {
    return xs.filter(Boolean).join(" ");
}

export default function Services() {
    const location = useLocation();

    // Smooth scroll for /services#mobile etc.
    useEffect(() => {
        if (!location.hash) return;
        const id = location.hash.replace("#", "");
        const el = document.getElementById(id);
        if (!el) return;
        setTimeout(() => el.scrollIntoView({ behavior: "smooth", block: "start" }), 50);
    }, [location.hash]);

    const Badge = ({ children }) => (
        <span className="inline-flex items-center rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-white/85">
      {children}
    </span>
    );

    const SectionHeader = ({ kicker, title, desc }) => (
        <div className="max-w-3xl">
            {kicker && (
                <div className="text-xs font-semibold tracking-widest text-emerald-400/90 uppercase">
                    {kicker}
                </div>
            )}
            <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
                {title}
            </h2>
            {desc && <p className="mt-3 text-base sm:text-lg text-white/75 leading-relaxed">{desc}</p>}
        </div>
    );

    const ImagePanel = ({ src, alt }) => (
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-[0_12px_40px_rgba(0,0,0,0.35)]">
            <div className="absolute inset-0 bg-gradient-to-tr from-black/60 via-black/25 to-black/10" />
            <img src={src} alt={alt} className="h-[360px] w-full object-cover sm:h-[460px]" loading="lazy" />
        </div>
    );

    const Panel = ({ children }) => (
        <div className="rounded-3xl border border-white/10 bg-white/5 p-7 sm:p-10 shadow-[0_12px_40px_rgba(0,0,0,0.35)] backdrop-blur">
            {children}
        </div>
    );

    const BulletList = ({ items }) => (
        <ul className="mt-5 space-y-3 text-sm sm:text-[15px] text-white/80">
            {items.map((t) => (
                <li key={t} className="flex gap-3">
                    <span className="mt-[8px] h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400/90" />
                    <span>{t}</span>
                </li>
            ))}
        </ul>
    );

    const BigCTA = ({ title, desc }) => (
        <div className={cn(NAV_CONTAINER, "pb-20")}>
            <div className="rounded-3xl border border-white/10 bg-gradient-to-r from-emerald-500/20 via-white/5 to-white/5 p-8 sm:p-12 shadow-[0_12px_40px_rgba(0,0,0,0.35)]">
                <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
                    <div className="max-w-2xl">
                        <h3 className="text-3xl sm:text-4xl font-extrabold tracking-tight">{title}</h3>
                        <p className="mt-2 text-white/75">{desc}</p>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-3">
                        <Link
                            to="/contact"
                            className="inline-flex items-center justify-center rounded-xl bg-emerald-500 px-7 py-3.5 text-sm font-semibold text-white shadow hover:bg-emerald-400 transition"
                        >
                            Schedule Service
                        </Link>
                        <a
                            href={PHONE_TEL}
                            className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white hover:bg-white/10 transition"
                        >
                            Call {PHONE_PRETTY}
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );

    return (
        <main className="min-h-screen bg-[#070A08] text-white">
            {/* HERO */}
            <section className="relative overflow-hidden">
                <div className="absolute inset-0">
                    <img src={IMG_HERO} alt="South Trailers services" className="h-full w-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/55 to-black/20" />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/15 via-transparent to-[#070A08]" />
                </div>

                <div className={cn(NAV_CONTAINER, "relative pt-16 sm:pt-20 lg:pt-24 pb-14")}>
                    <div className="max-w-3xl">
                        <div className="flex flex-wrap gap-2">
                            <Badge>Mobile Trailer Service</Badge>
                            <Badge>DOT Compliance</Badge>
                            <Badge>PM Inspections</Badge>
                            <Badge>Curtain Side + Parts</Badge>
                        </div>

                        <h1 className="mt-5 text-4xl sm:text-5xl font-extrabold tracking-tight">
                            Trailer Services Built for{" "}
                            <span className="text-emerald-400">Uptime & Compliance</span>
                        </h1>

                        <p className="mt-4 text-base sm:text-lg text-white/75 leading-relaxed">
                            Mobile service when you need speed. In-shop service when you want to bring it in.
                            Either way — the goal is simple: safe, compliant, and back on the road.
                        </p>

                        <div className="mt-8 flex flex-col sm:flex-row gap-3">
                            <Link
                                to="/contact"
                                className="inline-flex items-center justify-center rounded-xl bg-emerald-500 px-7 py-3.5 text-sm font-semibold text-white shadow hover:bg-emerald-400 transition"
                            >
                                Schedule Service
                            </Link>

                            <a
                                href={PHONE_TEL}
                                className="inline-flex items-center justify-center rounded-xl border border-white/20 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white hover:bg-white/10 transition"
                            >
                                Call {PHONE_PRETTY}
                            </a>
                        </div>

                        <div className="mt-7 flex flex-wrap gap-4 text-sm">
                            <a href="#mobile" className="text-white/80 hover:text-white underline underline-offset-4">
                                Mobile Service
                            </a>
                            <a href="#curtain" className="text-white/80 hover:text-white underline underline-offset-4">
                                Curtain Side
                            </a>
                            <a href="#shipping" className="text-white/80 hover:text-white underline underline-offset-4">
                                Shipping
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* MOBILE SERVICE (single column, vertical breathing room) */}
            <section id="mobile" className="scroll-mt-24">
                <div className={cn(PAGE_CONTAINER, "py-16 sm:py-20")}>
                    <SectionHeader
                        kicker="Mobile Trailer Service"
                        title="We Bring the Shop to Your Yard"
                        desc="Inspections and repairs performed on-site to keep your operation moving — without wasting time on logistics."
                    />

                    <div className="mt-10">
                        <ImagePanel src={IMG_MOBILE} alt="Mobile trailer service" />
                    </div>

                    <div className="mt-10">
                        <Panel>
                            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                                <div className="max-w-2xl">
                                    <h3 className="text-2xl sm:text-3xl font-bold">Mobile Service Includes</h3>
                                    <p className="mt-3 text-white/75 leading-relaxed">
                                        Most issues fall into compliance checks and common wear items. We handle those on-site,
                                        then escalate to in-shop only when a job truly requires it.
                                    </p>

                                    <BulletList
                                        items={[
                                            "On-site inspections and repairs",
                                            "DOT-focused compliance work (mobile)",
                                            "Preventive maintenance inspections (mobile)",
                                            "Fast fixes for the most common trailer issues",
                                        ]}
                                    />
                                </div>

                                <div className="flex flex-col gap-3 min-w-[260px]">
                                    <Link
                                        to="/contact"
                                        className="inline-flex items-center justify-center rounded-xl bg-emerald-500 px-7 py-3.5 text-sm font-semibold text-white shadow hover:bg-emerald-400 transition"
                                    >
                                        Schedule Mobile Service
                                    </Link>
                                    <a
                                        href={PHONE_TEL}
                                        className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white hover:bg-white/10 transition"
                                    >
                                        Call {PHONE_PRETTY}
                                    </a>
                                    <div className="pt-2 text-xs text-white/60">
                                        Prefer to bring it in? We also offer scheduled service at our location.
                                    </div>
                                </div>
                            </div>
                        </Panel>
                    </div>

                    {/* DOT inside MOBILE (stacked) */}
                    <div className="mt-12 sm:mt-16">
                        <Panel>
                            <div className="flex flex-col gap-8">
                                <div>
                                    <div className="text-xs font-semibold tracking-widest text-emerald-400/90 uppercase">
                                        Mobile — DOT Compliance
                                    </div>
                                    <h3 className="mt-2 text-2xl sm:text-3xl font-bold">DOT Compliance (Mobile)</h3>
                                    <p className="mt-3 text-white/75 leading-relaxed max-w-3xl">
                                        DOT work is about keeping the trailer compliant and road-ready.
                                        If something won’t pass, we repair it so it’s inspection-ready.
                                    </p>

                                    <BulletList
                                        items={[
                                            "Brake & air system issues",
                                            "Suspension / axle problems",
                                            "Tires / wheels / lugs",
                                            "Lighting & wiring",
                                            "Frame / structure concerns",
                                            "Rear impact guard & other safety items",
                                        ]}
                                    />

                                    <div className="mt-7 flex flex-col sm:flex-row gap-3">
                                        <Link
                                            to="/contact"
                                            className="inline-flex items-center justify-center rounded-xl bg-emerald-500 px-7 py-3.5 text-sm font-semibold text-white shadow hover:bg-emerald-400 transition"
                                        >
                                            Schedule DOT Service
                                        </Link>
                                        <Link
                                            to="/contact"
                                            className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white hover:bg-white/10 transition"
                                        >
                                            Request Quote
                                        </Link>
                                    </div>
                                </div>

                                <ImagePanel src={IMG_DOT} alt="DOT compliance service" />
                            </div>
                        </Panel>
                    </div>

                    {/* PM inside MOBILE (stacked) */}
                    <div className="mt-12 sm:mt-16">
                        <Panel>
                            <div className="flex flex-col gap-8">
                                <div>
                                    <div className="text-xs font-semibold tracking-widest text-emerald-400/90 uppercase">
                                        Mobile — PM Inspection
                                    </div>
                                    <h3 className="mt-2 text-2xl sm:text-3xl font-bold">Preventive Maintenance (PM)</h3>
                                    <p className="mt-3 text-white/75 leading-relaxed max-w-3xl">
                                        PM is a preventive inspection — checks and recommendations to catch problems early.
                                        It’s not a DOT annual inspection.
                                    </p>

                                    <BulletList
                                        items={[
                                            "Brake & air system",
                                            "Suspension & axles",
                                            "Wheels & tires",
                                            "Electrical & lighting",
                                            "Body & structure",
                                            "Doors / curtains / hardware",
                                            "Coupling / landing gear",
                                            "Safety & general",
                                        ]}
                                    />

                                    <div className="mt-7 flex flex-col sm:flex-row gap-3">
                                        <Link
                                            to="/contact"
                                            className="inline-flex items-center justify-center rounded-xl bg-emerald-500 px-7 py-3.5 text-sm font-semibold text-white shadow hover:bg-emerald-400 transition"
                                        >
                                            Schedule PM Inspection
                                        </Link>
                                        <Link
                                            to="/contact"
                                            className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white hover:bg-white/10 transition"
                                        >
                                            Request Quote
                                        </Link>
                                    </div>

                                    <p className="mt-4 text-xs text-white/60">
                                        PM categories based on our internal PM inspection report.
                                    </p>
                                </div>

                                <ImagePanel src={IMG_PM} alt="Preventive maintenance inspection" />
                            </div>
                        </Panel>
                    </div>
                </div>
            </section>

            {/* CURTAIN SIDE (separate service, not DOT) */}
            <section id="curtain" className="scroll-mt-24">
                <div className={cn(PAGE_CONTAINER, "py-16 sm:py-20")}>
                    <SectionHeader
                        kicker="Curtain Side Services"
                        title="Curtain Side Repair, Install & Maintenance"
                        desc="Curtain side work is its own service category — repairs, hardware, adjustments, and parts support."
                    />

                    <div className="mt-10">
                        <ImagePanel src={IMG_CURTAIN} alt="Curtain side services" />
                    </div>

                    <div className="mt-10">
                        <Panel>
                            <div className="max-w-3xl">
                                <h3 className="text-2xl sm:text-3xl font-bold">What We Handle</h3>
                                <BulletList
                                    items={[
                                        "Curtain installation and replacement",
                                        "Tracks / rails / rollers adjustments",
                                        "Buckles, straps, hooks, hardware fixes",
                                        "On-site curtain service available",
                                    ]}
                                />
                            </div>

                            <div className="mt-8 flex flex-col sm:flex-row gap-3">
                                <Link
                                    to="/contact"
                                    className="inline-flex items-center justify-center rounded-xl bg-emerald-500 px-7 py-3.5 text-sm font-semibold text-white shadow hover:bg-emerald-400 transition"
                                >
                                    Schedule Curtain Service
                                </Link>
                                <Link
                                    to="/products"
                                    className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white hover:bg-white/10 transition"
                                >
                                    View Parts
                                </Link>
                            </div>
                        </Panel>
                    </div>
                </div>
            </section>

            {/* SHIPPING */}
            <section id="shipping" className="scroll-mt-24">
                <div className={cn(PAGE_CONTAINER, "py-16 sm:py-20")}>
                    <SectionHeader
                        kicker="Shipping"
                        title="Curtain & Parts Shipping"
                        desc="Need curtains or parts shipped? We can confirm the right items and handle logistics."
                    />

                    <div className="mt-10">
                        <Panel>
                            <div className="max-w-3xl">
                                <h3 className="text-2xl sm:text-3xl font-bold">Shipping Support</h3>
                                <BulletList
                                    items={[
                                        "Curtain orders and replacements",
                                        "Hardware and parts shipping",
                                        "Quote support for bulk orders",
                                    ]}
                                />
                            </div>

                            <div className="mt-8 flex flex-col sm:flex-row gap-3">
                                <Link
                                    to="/shipping"
                                    className="inline-flex items-center justify-center rounded-xl bg-emerald-500 px-7 py-3.5 text-sm font-semibold text-white shadow hover:bg-emerald-400 transition"
                                >
                                    Shipping Page
                                </Link>
                                <Link
                                    to="/contact"
                                    className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white hover:bg-white/10 transition"
                                >
                                    Request Shipping Quote
                                </Link>
                            </div>
                        </Panel>
                    </div>
                </div>
            </section>

            <BigCTA
                title="Schedule Service"
                desc="Mobile service available. DOT compliance work. PM inspections. Curtain side service and parts support."
            />
        </main>
    );
}
