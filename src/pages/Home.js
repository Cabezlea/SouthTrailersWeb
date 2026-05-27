// src/pages/Home.js
import { Link } from "react-router-dom";
import { useEffect, useMemo, useRef, useState } from "react";

const Home = () => {
    const NAV_CONTAINER = "w-full px-5 sm:px-8 xl:px-14";
    const PAGE_CONTAINER = "max-w-7xl mx-auto px-5 sm:px-8 xl:px-14";
    const safeUrl = (p) => encodeURI(p);

    const videos = useMemo(
        () => [
            {
                title: "Curtain Side Work",
                desc: "Curtain-side repair, installation, and hardware work for commercial trailer equipment.",
                src: "/images/Videos/Bolsillo.mov",
            },
            {
                title: "PVC Strap Installation",
                desc: "Component installation and curtain-side hardware work performed cleanly and correctly.",
                src: "/images/Videos/Instalación de faja PVC.mov",
            },
            {
                title: "Roller / Track Work",
                desc: "Rollers, track alignment, and hardware work that keeps curtain systems moving properly.",
                src: "/images/Videos/Instalación de rodamiento.mov",
            },
        ],
        []
    );

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

    const servicePillars = [
        {
            title: "Trailer Repair & Fleet Maintenance",
            desc: "Structural repairs, roof work, suspension, airbags, brakes, lighting, welding, landing gear, and preventive maintenance.",
        },
        {
            title: "Mobile Fleet Service",
            desc: "On-site repair and maintenance for fleets that need service without pulling trailers out of operation.",
        },
        {
            title: "DOT & Compliance Support",
            desc: "Annual DOT inspections, compliance-related repairs, safety corrections, and fleet readiness support.",
        },
        {
            title: "Roadside Assistance",
            desc: " 24/7 Emergency trailer repair, lighting issues, brake-related problems, temporary field fixes, and fleet support.",
        },
    ];

    const mobileLocations = [
        {
            title: "Fleet yards",
            desc: "Good for servicing multiple trailers without moving equipment away from your operation.",
        },
        {
            title: "Warehouses",
            desc: "On-site work for trailers staged around loading docks and distribution activity.",
        },
        {
            title: "Trucking terminals",
            desc: "Repair and maintenance support where trailers are already parked and cycling through.",
        },
        {
            title: "Distribution centers",
            desc: "Fleet support for high-volume locations where downtime creates operational pressure.",
        },
        {
            title: "Customer facilities",
            desc: "Scheduled service at your location when bringing trailers to a shop is not efficient.",
        },
        {
            title: "Emergency field support",
            desc: "Roadside and field response when a trailer issue needs to be handled quickly.",
        },
    ];

    const dotItems = [
        {
            title: "Annual DOT inspections",
            desc: "Inspection work that helps identify compliance and safety issues before they become bigger problems.",
        },
        {
            title: "Compliance-related repairs",
            desc: "Lighting, suspension, airbags, roof issues, structural corrections, and other required repairs.",
        },
        {
            title: "Preventive maintenance",
            desc: "Recurring service that helps fleets reduce unexpected breakdowns and keep trailers ready.",
        },
        {
            title: "Recurring fleet support",
            desc: "A path toward PM schedules, inspection cycles, and preferred vendor relationships.",
        },
    ];

    return (
        <main>
            {/* HERO */}
            <section className="relative h-[85vh] min-h-[35rem] w-full overflow-hidden">
                <div
                    className="absolute inset-0 bg-center bg-cover"
                    style={{ backgroundImage: "url(/images/Banners/South_Trailers_banner.png)" }}
                />

                {/* readability overlays */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/62 to-black/25" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-black/15" />
                <div className="absolute left-0 top-0 h-full w-[62%] bg-black/20 blur-3xl" />

                <div className="relative h-full pt-20">
                    <div className={`${NAV_CONTAINER} h-full flex items-center`}>
                        <div className="text-left w-full max-w-[42rem]">
                            <p className="mb-4 text-sm sm:text-base font-semibold text-green-300">
                                Houston-based fleet service with mobile support across Texas
                            </p>

                            <h1 className="text-white font-extrabold leading-[1.03] tracking-tight text-4xl sm:text-5xl lg:text-6xl xl:text-[3.55rem] drop-shadow-[0_0.2rem_1rem_rgba(0,0,0,0.55)]">
                                Heavy-Duty Trailer Repair & Fleet Maintenance
                            </h1>

                            <p className="mt-5 text-white/95 text-base sm:text-lg leading-relaxed max-w-[40rem] drop-shadow-[0_0.15rem_0.7rem_rgba(0,0,0,0.65)]">
                                Mobile fleet service, DOT-related repairs, preventive maintenance, roadside assistance,
                                and curtain-side manufacturing and repair for commercial fleets.
                            </p>

                            <div className="mt-8 flex flex-col sm:flex-row gap-3">
                                <Link
                                    to="/contact"
                                    className="inline-flex justify-center items-center px-6 py-3 rounded-md bg-green-600 text-white font-semibold hover:bg-green-700 transition shadow-lg shadow-green-900/20"
                                >
                                    Request Fleet Service
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

                    <div className="absolute bottom-0 left-0 right-0">
                        <div className="bg-black/45 backdrop-blur-sm border-t border-white/10">
                            <div className={`${NAV_CONTAINER} py-4`}>
                                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 text-white/90 text-sm font-medium">
                                    <span>Mobile fleet service</span>
                                    <span className="hidden sm:inline text-white/40">|</span>
                                    <span>DOT support</span>
                                    <span className="hidden sm:inline text-white/40">|</span>
                                    <span>Preventive maintenance</span>
                                    <span className="hidden sm:inline text-white/40">|</span>
                                    <span>Roadside assistance</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* SERVICE PRIORITIES */}
            <section className="relative overflow-hidden bg-slate-950">
                <div className="pointer-events-none absolute inset-0">
                    <div className="absolute -top-40 left-1/4 h-[32rem] w-[32rem] rounded-full bg-green-500/10 blur-3xl" />
                    <div className="absolute -bottom-40 right-0 h-[30rem] w-[30rem] rounded-full bg-white/5 blur-3xl" />
                    <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                </div>

                <div className={`${PAGE_CONTAINER} relative py-16`}>
                    <div className="max-w-3xl">
                        <p className="text-green-400 font-semibold">Fleet uptime first</p>
                        <h2 className="mt-3 text-4xl sm:text-5xl font-extrabold tracking-tight text-white">
                            The main services fleets need to keep trailers working.
                        </h2>
                        <p className="mt-4 text-slate-300 text-base sm:text-lg leading-relaxed">
                            South Trailers supports commercial fleets with trailer repair, maintenance, mobile service,
                            DOT-related work, and emergency response.
                        </p>
                    </div>

                    <div className="mt-10 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">
                        {servicePillars.map((item, index) => (
                            <div
                                key={item.title}
                                className="rounded-2xl border border-white/10 bg-white/[0.06] p-6 backdrop-blur hover:bg-white/[0.09] hover:-translate-y-1 transition"
                            >
                                <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-green-500/15 text-green-300 font-bold">
                                    0{index + 1}
                                </div>
                                <h3 className="text-white text-lg font-bold">{item.title}</h3>
                                <p className="mt-3 text-slate-300 text-sm leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* MOBILE SERVICE */}
            <section className="relative overflow-hidden bg-gradient-to-b from-white via-slate-50 to-white">
                <div className="pointer-events-none absolute inset-0">
                    <div className="absolute -left-40 top-10 h-[32rem] w-[32rem] rounded-full bg-green-500/10 blur-3xl" />
                    <div className="absolute right-0 bottom-0 h-[32rem] w-[32rem] rounded-full bg-slate-900/5 blur-3xl" />
                    <div className="absolute inset-0 opacity-[0.03] flex items-center justify-center">
                        <img
                            src="/images/Banners/South_Trailers_CMYK.png"
                            alt=""
                            className="w-[60rem] max-w-none rotate-[-10deg] select-none"
                            draggable={false}
                        />
                    </div>
                </div>

                <div className={`${PAGE_CONTAINER} relative py-16`}>
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
                        <div className="lg:col-span-5 rounded-3xl bg-slate-950 p-8 text-white overflow-hidden relative">
                            <div className="absolute -right-24 -bottom-24 h-72 w-72 rounded-full bg-green-500/20 blur-3xl" />
                            <div className="relative">
                                <p className="text-green-400 font-semibold">Mobile fleet service</p>
                                <h2 className="mt-3 text-4xl font-extrabold tracking-tight">
                                    We service trailers where the fleet operates.
                                </h2>
                                <p className="mt-4 text-slate-300 leading-relaxed">
                                    On-site service helps fleets reduce downtime, handle multiple units, and avoid
                                    unnecessary trips away from the yard.
                                </p>
                                <Link
                                    to="/contact"
                                    className="mt-7 inline-flex justify-center items-center px-6 py-3 rounded-xl bg-green-600 text-white font-semibold hover:bg-green-700 transition"
                                >
                                    Schedule Mobile Service
                                </Link>
                            </div>
                        </div>

                        <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
                            {mobileLocations.map((item) => (
                                <div
                                    key={item.title}
                                    className="rounded-2xl border border-slate-200 bg-white/85 p-6 shadow-sm hover:-translate-y-1 hover:shadow-md transition"
                                >
                                    <div className="h-10 w-10 rounded-xl bg-green-100 text-green-700 flex items-center justify-center font-bold">
                                        ✓
                                    </div>
                                    <p className="mt-4 font-bold text-slate-900">{item.title}</p>
                                    <p className="mt-2 text-sm text-slate-600 leading-relaxed">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* DOT / RECURRING FLEET WORK */}
            <section className="relative overflow-hidden bg-white">
                <div className="pointer-events-none absolute inset-0">
                    <div className="absolute left-[-12rem] top-[-8rem] h-[28rem] w-[28rem] rounded-full bg-green-500/8 blur-3xl" />
                    <div className="absolute right-[-10rem] bottom-[-10rem] h-[30rem] w-[30rem] rounded-full bg-slate-900/6 blur-3xl" />
                </div>

                <div className={`${PAGE_CONTAINER} relative py-16`}>
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                        <div className="lg:col-span-5">
                            <p className="text-green-700 font-semibold">DOT work becomes repair work</p>
                            <h2 className="mt-2 text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900">
                                Inspections, repairs, and maintenance under one fleet service path.
                            </h2>
                        </div>

                        <div className="lg:col-span-7">
                            <div className="rounded-3xl border border-slate-200 bg-slate-50/80 p-6 sm:p-8 shadow-sm">
                                <p className="text-slate-700 text-lg leading-relaxed">
                                    DOT inspections often uncover repair needs fleets must handle quickly. The value is
                                    not only the inspection. The value is identifying issues and getting the trailer
                                    corrected before it costs more downtime.
                                </p>

                                <div className="mt-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    {dotItems.map((item) => (
                                        <div
                                            key={item.title}
                                            className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
                                        >
                                            <p className="font-bold text-slate-900">{item.title}</p>
                                            <p className="mt-2 text-sm text-slate-600 leading-relaxed">{item.desc}</p>
                                        </div>
                                    ))}
                                </div>

                                <div className="mt-7 flex flex-col sm:flex-row gap-3">
                                    <Link
                                        to="/services"
                                        className="inline-flex justify-center items-center px-6 py-3 rounded-xl bg-slate-900 text-white font-semibold hover:bg-slate-800 transition"
                                    >
                                        View Fleet Services
                                    </Link>
                                    <Link
                                        to="/contact"
                                        className="inline-flex justify-center items-center px-6 py-3 rounded-xl bg-white text-slate-900 font-semibold border border-slate-200 hover:bg-slate-50 transition"
                                    >
                                        Request DOT Support
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* VIDEOS */}
            <section className="bg-slate-50">
                <div className={`${PAGE_CONTAINER} py-16`}>
                    <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
                        <div className="max-w-3xl">
                            <p className="text-green-700 font-semibold">Shop and field work</p>
                            <h2 className="mt-2 text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900">
                                Work, captured.
                            </h2>
                            <p className="mt-3 text-slate-600 text-base sm:text-lg">
                                Short clips from installs and shop work. More service photos will be added as fleet
                                repair and mobile work are documented.
                            </p>
                        </div>

                        <Link
                            to="/contact"
                            className="inline-flex justify-center items-center px-6 py-3 rounded-xl bg-slate-900 text-white font-semibold hover:bg-slate-800 transition shadow-sm"
                        >
                            Request Fleet Service
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

            {/* TRUSTED BY */}
            <section className="relative overflow-hidden bg-white">
                <div className="pointer-events-none absolute inset-0">
                    <div className="absolute -top-40 right-[-160px] h-[32rem] w-[32rem] rounded-full bg-green-500/10 blur-3xl" />
                    <div className="absolute -bottom-48 left-[-140px] h-[32rem] w-[32rem] rounded-full bg-slate-900/10 blur-3xl" />
                </div>

                <div className={`${PAGE_CONTAINER} relative py-16`}>
                    <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
                        <div>
                            <p className="text-green-700 font-semibold">Commercial credibility</p>
                            <h2 className="mt-2 text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900">
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
                            Request Service
                        </Link>
                    </div>

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

                    <div className="mt-14 rounded-2xl border border-slate-200 bg-white/70 backdrop-blur shadow-sm p-6 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                        <div>
                            <p className="text-xl font-extrabold text-slate-900">
                                Looking for recurring fleet maintenance support?
                            </p>
                            <p className="mt-1 text-slate-600">
                                Ask about PM schedules, recurring DOT cycles, mobile service programs, and preferred
                                vendor support.
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
