// src/pages/Home.js
import { Link } from "react-router-dom";
import { useEffect, useMemo, useRef, useState } from "react";

const Home = () => {
    // MUST match Navbar container (Navbar is full width, not max-w-7xl)
    const NAV_CONTAINER = "w-full px-5 sm:px-8 xl:px-14";

    // For sections below hero you can keep max width (optional, but looks clean)
    const PAGE_CONTAINER = "max-w-7xl mx-auto px-5 sm:px-8 xl:px-14";

    // --- CLIENT LOGOS (public/images/Clients/*) ---
    const clientLogos = useMemo(
        () => [
            { name: "Coca-Cola", src: "/images/Clients/cocaCola-logo.png" },
            { name: "Brazos", src: "/images/Clients/Brazos-logo.webp" },
            { name: "Coleman", src: "/images/Clients/coleman-logo.jpeg" },
            { name: "Melaminetex", src: "/images/Clients/melaminetex-logo.png" },
            { name: "Sunbelt", src: "/images/Clients/sunbelt-logo.png" },
            { name: "Woodgrain", src: "/images/Clients/woodgrain-logo-1.png" },
            { name: "Client 7", src: "" },
            { name: "Client 8", src: "" },
        ],
        []
    );

    // --- VIDEOS (public/images/Videos/*) ---
    const videos = useMemo(
        () => [
            {
                title: "Curtain Work (Shop)",
                desc: "Curtain fabrication, repairs, and hardware work from our shop.",
                src: "/images/Videos/Bolsillo.mov",
            },
            {
                title: "PVC Strap Installation",
                desc: "Clean installs and practical fixes that keep fleets moving.",
                src: "/images/Videos/Instalación de faja PVC.mov",
            },
            {
                title: "Roller / Track Work",
                desc: "Rollers, track alignment, and small parts done right so curtains glide.",
                src: "/images/Videos/Instalación de rodamiento.mov",
            },
        ],
        []
    );

    // Autoplay ONLY when visible (and stop when not visible)
    const videoRefs = useRef([]);
    const [videoLoaded, setVideoLoaded] = useState(() => videos.map(() => false));

    useEffect(() => {
        const els = videoRefs.current.filter(Boolean);
        if (!els.length) return;

        const io = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    const el = entry.target;
                    if (!(el instanceof HTMLVideoElement)) return;

                    if (entry.isIntersecting) {
                        const p = el.play();
                        if (p && typeof p.catch === "function") p.catch(() => {});
                    } else {
                        el.pause();
                    }
                });
            },
            { threshold: 0.35 }
        );

        els.forEach((el) => io.observe(el));
        return () => io.disconnect();
    }, [videos.length]);

    // --- PRODUCT GALLERY (public/images/Products/*) ---
    // USE YOUR REAL FILENAMES EXACTLY (spaces/caps) + encodeURI()
    const gallery = useMemo(
        () => [
            { label: "Back plate", src: "/images/Products/Back plate.jpeg" },
            { label: "Bottom Adaptor", src: "/images/Products/Bottom Adaptor.jpeg" },
            { label: "Hebilla", src: "/images/Products/Hebilla.jpg" },
            { label: "Perfil Plano", src: "/images/Products/PERFIL PLANO.jpg" },
            { label: "Ratchet", src: "/images/Products/Ratchet.jpeg" },
            { label: "RaveHook", src: "/images/Products/RaveHook.png" },
            { label: "Riel", src: "/images/Products/RIEL.jpg" },
            { label: "Roller 1R", src: "/images/Products/Roller 1R.jpg" },
            { label: "Roller 2R", src: "/images/Products/Roller 2R.jpg" },
            { label: "Tubo Tensor", src: "/images/Products/TUBO TENSOR.jpg" },
        ],
        []
    );

    const [gIdx, setGIdx] = useState(0);
    useEffect(() => {
        const t = setInterval(() => setGIdx((v) => (v + 1) % gallery.length), 5000);
        return () => clearInterval(t);
    }, [gallery.length]);

    const safeUrl = (p) => encodeURI(p); // fixes spaces + accents

    return (
        <main>
            {/* ================= HERO ================= */}
            <section className="relative h-[85vh] min-h-[560px] w-full overflow-hidden">
                <div
                    className="absolute inset-0 bg-center bg-cover"
                    style={{ backgroundImage: "url(/images/Banners/South_Trailers_banner.png)" }}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/45 to-black/10" />

                {/* navbar height spacing */}
                <div className="relative h-full pt-20">
                    {/* IMPORTANT: use NAV_CONTAINER (same as Navbar) */}
                    <div className={`${NAV_CONTAINER} h-full flex items-center`}>
                        <div className="text-left w-full max-w-xl sm:max-w-2xl lg:max-w-[42rem] xl:max-w-[42rem]">
                            <h1 className="text-white font-extrabold leading-[1.05] tracking-tight text-4xl sm:text-5xl lg:text-6xl xl:text-[60px]">
                                Curtain Side Solutions for Trucking Companies
                            </h1>

                            <p className="mt-4 text-white/90 text-base sm:text-lg">
                                Manufacturing, installation, and maintenance of curtain sides and parts — with on-site
                                curtain repair and assessment available.
                            </p>

                            <div className="mt-8 flex flex-col sm:flex-row gap-3">
                                <Link
                                    to="/contact"
                                    className="inline-flex justify-center items-center px-6 py-3 rounded-md bg-green-600 text-white font-semibold hover:bg-green-700 transition"
                                >
                                    Request Quote
                                </Link>

                                <a
                                    href="tel:+19367779615"
                                    className="inline-flex justify-center items-center px-6 py-3 rounded-md border border-white/70 text-white font-semibold hover:border-white hover:bg-white/10 transition"
                                >
                                    Call
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* bottom strip */}
                    <div className="absolute bottom-0 left-0 right-0">
                        <div className="bg-black/35 backdrop-blur-sm border-t border-white/10">
                            {/* keep strip aligned with hero text (use NAV_CONTAINER too) */}
                            <div className={`${NAV_CONTAINER} py-4`}>
                                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 text-white/90 text-sm font-medium">
                                    <span>15+ years experience</span>
                                    <span className="hidden sm:inline text-white/40">|</span>
                                    <span>On-site curtain repair</span>
                                    <span className="hidden sm:inline text-white/40">|</span>
                                    <span>Curtains &amp; parts shipping</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ================= SECTION: Real work / products cards ================= */}
            <section className="relative overflow-hidden bg-slate-50">
                <div className="pointer-events-none absolute inset-0">
                    <div className="absolute -top-40 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-green-500/10 blur-3xl" />
                    <div className="absolute -bottom-48 right-[-120px] h-[520px] w-[520px] rounded-full bg-slate-900/10 blur-3xl" />
                    <div className="absolute inset-0 opacity-[0.035] flex items-center justify-center">
                        <img
                            src="/images/Banners/South_Trailers_CMYK.png"
                            alt=""
                            className="w-[980px] max-w-none rotate-[-12deg] select-none"
                            draggable={false}
                        />
                    </div>
                </div>

                <div className={`${PAGE_CONTAINER} relative py-16`}>
                    <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
                        <div className="max-w-2xl">
                            <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900">
                                Real work. Real results.
                            </h2>
                            <p className="mt-3 text-slate-600 text-base sm:text-lg">
                                Quick look at what we do — curtain side services, parts, installs, and the details that
                                keep fleets moving.
                            </p>
                        </div>

                        <Link
                            to="/services"
                            className="inline-flex justify-center items-center px-6 py-3 rounded-xl bg-white/70 backdrop-blur border border-slate-200 text-slate-900 font-semibold hover:bg-white transition shadow-sm"
                        >
                            View Services
                        </Link>
                    </div>

                    <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
                        {/* Rotating Gallery */}
                        <div className="lg:col-span-8">
                            <div className="h-full rounded-2xl border border-slate-200 bg-white/70 backdrop-blur shadow-sm overflow-hidden">
                                <div className="px-6 py-5 flex items-center justify-between">
                                    <div>
                                        <p className="text-lg font-bold text-slate-900">Rotating Gallery</p>
                                        <p className="text-slate-600 text-sm">
                                            Parts, hardware, rails, and common components we work with.
                                        </p>
                                    </div>

                                    <div className="flex items-center gap-2">
                                        <button
                                            type="button"
                                            onClick={() => setGIdx((v) => (v - 1 + gallery.length) % gallery.length)}
                                            className="w-10 h-10 rounded-full border border-slate-200 bg-white hover:bg-slate-50 transition"
                                            aria-label="Previous"
                                        >
                                            ‹
                                        </button>
                                        <button
                                            type="button"
                                            onClick={() => setGIdx((v) => (v + 1) % gallery.length)}
                                            className="w-10 h-10 rounded-full border border-slate-200 bg-white hover:bg-slate-50 transition"
                                            aria-label="Next"
                                        >
                                            ›
                                        </button>
                                    </div>
                                </div>

                                <div className="px-6 pb-6">
                                    <div className="rounded-2xl border border-slate-200 bg-white overflow-hidden">
                                        {/* consistent image area so it never looks messy */}
                                        <div className="aspect-[16/10] w-full relative bg-slate-50">
                                            <img
                                                src={safeUrl(gallery[gIdx].src)}
                                                alt={gallery[gIdx].label}
                                                className="absolute inset-0 w-full h-full object-contain p-8 sm:p-10"
                                            />
                                            {/* label pill */}
                                            <div className="absolute left-4 bottom-4">
                                                <span className="inline-flex items-center px-3 py-1.5 rounded-full text-sm font-semibold bg-white/90 backdrop-blur border border-slate-200 text-slate-800 shadow-sm">
                                                    {gallery[gIdx].label}
                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="mt-4 flex flex-wrap gap-2">
                                        {gallery.map((g, i) => (
                                            <button
                                                key={g.label}
                                                onClick={() => setGIdx(i)}
                                                className={[
                                                    "px-3 py-1.5 rounded-full text-sm font-semibold transition border",
                                                    i === gIdx
                                                        ? "bg-slate-900 text-white border-slate-900"
                                                        : "bg-white/70 text-slate-700 border-slate-200 hover:bg-white",
                                                ].join(" ")}
                                            >
                                                {g.label}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Services + Products boxes */}
                        <div className="lg:col-span-4 flex flex-col gap-6">
                            <div className="flex-1 rounded-2xl border border-slate-200 bg-white/70 backdrop-blur shadow-sm p-6">
                                <p className="text-lg font-bold text-slate-900">Services</p>
                                <p className="mt-2 text-slate-600">
                                    With over 15 years of experience, we deliver curtain-side manufacturing and installs
                                    (with or without graphics), plus maintenance of the curtain system and components.
                                </p>
                                <Link
                                    to="/services"
                                    className="mt-5 inline-flex justify-center items-center px-5 py-3 rounded-xl bg-green-600 text-white font-semibold hover:bg-green-700 transition"
                                >
                                    Learn More
                                </Link>
                            </div>

                            <div className="flex-1 rounded-2xl border border-slate-200 bg-white/70 backdrop-blur shadow-sm p-6">
                                <p className="text-lg font-bold text-slate-900">Products</p>
                                <p className="mt-2 text-slate-600">
                                    High-quality parts and hardware for curtain-side trailers commonly used in the United
                                    States and Europe — built around consistency, fit, and long-term durability.
                                </p>
                                <Link
                                    to="/products"
                                    className="mt-5 inline-flex justify-center items-center px-5 py-3 rounded-xl bg-white text-slate-900 font-semibold border border-slate-200 hover:bg-slate-50 transition"
                                >
                                    View Products
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ================= SECTION: Videos ================= */}
            <section className="bg-white">
                <div className={`${PAGE_CONTAINER} py-16`}>
                    <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
                        <div className="max-w-3xl">
                            <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900">
                                Work, captured.
                            </h2>
                            <p className="mt-3 text-slate-600 text-base sm:text-lg">
                                Short clips from installs and shop work — the details that don’t show up on a quote but
                                absolutely show up on the road.
                            </p>
                        </div>

                        <Link
                            to="/contact"
                            className="inline-flex justify-center items-center px-6 py-3 rounded-xl bg-slate-900 text-white font-semibold hover:bg-slate-800 transition shadow-sm"
                        >
                            Request a Quote
                        </Link>
                    </div>

                    <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
                        {videos.map((v, idx) => (
                            <div
                                key={v.title}
                                className="rounded-2xl border border-slate-200 bg-white shadow-sm overflow-hidden"
                            >
                                <div className="p-6 pb-4">
                                    <p className="text-lg font-bold text-slate-900">{v.title}</p>
                                    <p className="mt-2 text-slate-600">{v.desc}</p>
                                </div>

                                <div className="px-6 pb-6">
                                    <div className="rounded-2xl overflow-hidden border border-slate-200 bg-slate-100 relative">
                                        {!videoLoaded[idx] && (
                                            <div className="absolute inset-0 animate-pulse bg-gradient-to-br from-slate-200 to-slate-100" />
                                        )}

                                        <video
                                            ref={(el) => (videoRefs.current[idx] = el)}
                                            className="w-full aspect-video object-cover relative z-[1]"
                                            src={safeUrl(v.src)}
                                            muted
                                            playsInline
                                            loop
                                            preload="metadata"
                                            autoPlay
                                            controls
                                            onLoadedData={() =>
                                                setVideoLoaded((prev) => {
                                                    const copy = [...prev];
                                                    copy[idx] = true;
                                                    return copy;
                                                })
                                            }
                                        />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ================= SECTION: Trusted by ================= */}
            <section className="relative overflow-hidden bg-slate-50">
                <div className="pointer-events-none absolute inset-0">
                    <div className="absolute -top-40 right-[-160px] h-[520px] w-[520px] rounded-full bg-green-500/10 blur-3xl" />
                    <div className="absolute -bottom-48 left-[-140px] h-[520px] w-[520px] rounded-full bg-slate-900/10 blur-3xl" />
                </div>

                <div className={`${PAGE_CONTAINER} relative py-16`}>
                    <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
                        <div>
                            <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900">
                                Trusted by
                            </h2>
                            <p className="mt-3 text-slate-600 text-base sm:text-lg">
                                From regional operators to multinational fleets.
                            </p>
                        </div>

                        <Link
                            to="/contact"
                            className="inline-flex justify-center items-center px-6 py-3 rounded-xl bg-white/70 backdrop-blur border border-slate-200 text-slate-900 font-semibold hover:bg-white transition shadow-sm"
                        >
                            Request a Quote
                        </Link>
                    </div>

                    {/* Force 3-per-row at md+ */}
                    <div className="mt-10 grid grid-cols-2 md:grid-cols-3 gap-10 md:gap-12 place-items-center">
                        {clientLogos.map((c) => {
                            const hasSrc = Boolean(c.src);
                            return (
                                <div key={c.name} className="flex flex-col items-center">
                                    <div
                                        className={[
                                            "h-36 w-36 sm:h-40 sm:w-40 rounded-full",
                                            "bg-white/80 backdrop-blur border border-slate-200 shadow-sm",
                                            "flex items-center justify-center overflow-hidden",
                                            "transition transform hover:-translate-y-1 hover:shadow-lg",
                                            hasSrc ? "" : "border-dashed",
                                        ].join(" ")}
                                    >
                                        {hasSrc ? (
                                            <img
                                                src={safeUrl(c.src)}
                                                alt={c.name}
                                                className="h-[68%] w-[68%] object-contain"
                                                draggable={false}
                                            />
                                        ) : (
                                            <span className="text-slate-400 text-sm font-semibold">{c.name}</span>
                                        )}
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    {/* CTA strip */}
                    <div className="mt-14 rounded-2xl border border-slate-200 bg-white/70 backdrop-blur shadow-sm p-6 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                        <div>
                            <p className="text-xl font-extrabold text-slate-900">Need a quote today?</p>
                            <p className="mt-1 text-slate-600">
                                Send photos, measurements, or a quick description — we’ll respond fast with next steps.
                            </p>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-3">
                            <a
                                href="tel:+19367779615"
                                className="inline-flex justify-center items-center px-6 py-3 rounded-xl bg-slate-900 text-white font-semibold hover:bg-slate-800 transition"
                            >
                                Call Now
                            </a>
                            <Link
                                to="/contact"
                                className="inline-flex justify-center items-center px-6 py-3 rounded-xl bg-green-600 text-white font-semibold hover:bg-green-700 transition"
                            >
                                Request Quote
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Home;
