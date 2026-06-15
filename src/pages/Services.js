// src/pages/Services.js
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { services } from "../data/servicesData";

const Services = () => {
    const NAV_CONTAINER = "w-full px-5 sm:px-8 xl:px-14";
    const PAGE_CONTAINER = "max-w-7xl mx-auto px-5 sm:px-8 xl:px-14";
    const safeUrl = (p) => encodeURI(p);

    useEffect(() => {
        const imagePaths = services.flatMap((service) => [
            service.image,
            service.cardImage,
        ]);

        const uniqueImagePaths = [...new Set(imagePaths.filter(Boolean))];

        uniqueImagePaths.forEach((path) => {
            const link = document.createElement("link");
            link.rel = "preload";
            link.as = "image";
            link.href = safeUrl(path);
            document.head.appendChild(link);
        });
    }, []);

    const serviceHighlights = [
        {
            title: "Fleet service support",
            desc: "Trailer repair, mobile work, in-shop service, DOT/PM support, roadside response, and side-curtain systems.",
        },
        {
            title: "Mobile + in-shop",
            desc: "Service at your yard when speed matters, or scheduled shop work when the job requires it.",
        },
        {
            title: "Inspection-driven repair",
            desc: "DOT and PM services help identify repair needs and keep trailers ready for operation.",
        },
    ];

    return (
        <main>
            {/* ================= HERO ================= */}
            <section className="relative overflow-hidden bg-slate-950">
                <div className="pointer-events-none absolute inset-0">
                    <div className="absolute -top-48 left-[-8rem] h-[34rem] w-[34rem] rounded-full bg-green-500/15 blur-3xl" />
                    <div className="absolute bottom-[-14rem] right-[-8rem] h-[36rem] w-[36rem] rounded-full bg-white/10 blur-3xl" />

                    <div className="absolute inset-0 opacity-[0.045] flex items-center justify-center">
                        <img
                            src="/images/Banners/South_Trailers_CMYK.png"
                            alt=""
                            className="w-[58rem] max-w-none rotate-[-10deg] select-none"
                            draggable={false}
                            loading="eager"
                            fetchPriority="high"
                        />
                    </div>

                    <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/95 to-slate-950/75" />
                </div>

                <div className={`${NAV_CONTAINER} relative py-24 sm:py-28 lg:py-32`}>
                    <div className="max-w-4xl">
                        <p className="text-green-400 font-semibold">
                            Heavy-duty trailer service
                        </p>

                        <h1 className="mt-4 text-white font-extrabold leading-[1.03] tracking-tight text-4xl sm:text-5xl lg:text-6xl xl:text-[4rem]">
                            Services built around fleet uptime.
                        </h1>

                        <p className="mt-5 max-w-3xl text-white/90 text-base sm:text-lg leading-relaxed">
                            Trailer repair, fleet maintenance, mobile service, in-shop repair, DOT & PM inspections,
                            roadside assistance, and curtain-side support for commercial fleets in the Houston area.
                        </p>

                        <div className="mt-8 flex flex-col sm:flex-row gap-3">
                            <Link
                                to="/contact"
                                className="inline-flex justify-center items-center px-6 py-3 rounded-md bg-green-600 text-white font-semibold hover:bg-green-700 transition shadow-lg shadow-green-900/20"
                            >
                                Schedule Service
                            </Link>

                            <a
                                href="tel:+19367779615"
                                className="inline-flex justify-center items-center px-6 py-3 rounded-md border border-white/70 text-white font-semibold hover:border-white hover:bg-white/10 transition"
                            >
                                Call (936) 777-9615
                            </a>
                        </div>
                    </div>

                    {/* Bottom service strip */}
                    <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-4">
                        {serviceHighlights.map((item) => (
                            <div
                                key={item.title}
                                className="rounded-2xl border border-white/10 bg-white/[0.06] p-5 backdrop-blur"
                            >
                                <p className="font-bold text-white">{item.title}</p>
                                <p className="mt-2 text-sm leading-relaxed text-slate-300">
                                    {item.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ================= SERVICE OVERVIEW ================= */}
            <section className="relative overflow-hidden bg-slate-50">
                <div className="pointer-events-none absolute inset-0">
                    <div className="absolute -top-40 left-1/2 h-[32rem] w-[32rem] -translate-x-1/2 rounded-full bg-green-500/10 blur-3xl" />
                    <div className="absolute -bottom-48 right-[-8rem] h-[32rem] w-[32rem] rounded-full bg-slate-900/10 blur-3xl" />

                    <div className="absolute inset-0 opacity-[0.03] flex items-center justify-center">
                        <img
                            src="/images/Banners/South_Trailers_CMYK.png"
                            alt=""
                            className="w-[60rem] max-w-none rotate-[-12deg] select-none"
                            draggable={false}
                            loading="lazy"
                        />
                    </div>
                </div>

                <div className={`${PAGE_CONTAINER} relative py-16`}>
                    <div className="max-w-3xl">
                        <p className="text-green-700 font-semibold">Service categories</p>

                        <h2 className="mt-3 text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900">
                            Trailer services for how fleets actually operate.
                        </h2>

                        <p className="mt-4 text-slate-600 text-base sm:text-lg leading-relaxed">
                            South Trailers supports fleets through mobile service, in-shop repair, DOT and PM inspections,
                            roadside assistance, trailer maintenance, and side-curtain manufacturing and repair.
                        </p>
                    </div>

                    {/* All service cards aligned */}
                    <div className="mt-10 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                        {services.map((service, index) => {
                            const cardImage = service.cardImage || service.image;
                            const cardImagePosition =
                                service.cardImagePosition || service.imagePosition || "object-center";

                            return (
                                <Link
                                    key={service.slug}
                                    to={`/services/${service.slug}`}
                                    className="group h-full rounded-3xl border border-slate-200 bg-white/85 backdrop-blur shadow-sm overflow-hidden hover:-translate-y-1 hover:shadow-md transition"
                                >
                                    <div className="aspect-[16/9] bg-slate-100 overflow-hidden">
                                        <img
                                            src={safeUrl(cardImage)}
                                            alt={service.title}
                                            className={`h-full w-full object-cover ${cardImagePosition} transition duration-500 group-hover:scale-[1.03]`}
                                            loading={index < 3 ? "eager" : "lazy"}
                                            fetchPriority={index < 3 ? "high" : "auto"}
                                        />
                                    </div>

                                    <div className="p-6 flex flex-col min-h-[18rem]">
                                        <div className="flex items-center justify-between gap-4">
                                            <div className="h-10 w-10 rounded-xl bg-green-100 text-green-700 flex items-center justify-center font-extrabold">
                                                {String(index + 1).padStart(2, "0")}
                                            </div>

                                            <span className="text-slate-400 group-hover:text-green-600 transition text-2xl">
                                                →
                                            </span>
                                        </div>

                                        <p className="mt-5 text-xs font-bold tracking-[0.18em] uppercase text-green-700">
                                            {service.kicker}
                                        </p>

                                        <h3 className="mt-2 text-xl font-extrabold text-slate-900 leading-tight">
                                            {service.title}
                                        </h3>

                                        <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                                            {service.short}
                                        </p>

                                        <p className="mt-auto pt-5 text-sm font-semibold text-green-700">
                                            View service
                                        </p>
                                    </div>
                                </Link>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* ================= DARK STRATEGIC SECTION ================= */}
            <section className="relative overflow-hidden bg-slate-950">
                <div className="pointer-events-none absolute inset-0">
                    <div className="absolute -top-40 left-1/4 h-[32rem] w-[32rem] rounded-full bg-green-500/10 blur-3xl" />
                    <div className="absolute -bottom-40 right-[-8rem] h-[30rem] w-[30rem] rounded-full bg-white/5 blur-3xl" />
                    <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                </div>

                <div className={`${PAGE_CONTAINER} relative py-16`}>
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                        <div className="lg:col-span-5">
                            <p className="text-green-400 font-semibold">Fleet service structure</p>

                            <h2 className="mt-3 text-4xl sm:text-5xl font-extrabold tracking-tight text-white">
                                Built for recurring fleet support.
                            </h2>

                            <p className="mt-4 text-slate-300 text-base sm:text-lg leading-relaxed">
                                South Trailers supports fleets through one-time repairs, scheduled maintenance,
                                inspection cycles, emergency response, and recurring service programs.
                            </p>
                        </div>

                        <div className="lg:col-span-7">
                            <div className="rounded-3xl border border-white/10 bg-white/[0.06] p-6 sm:p-8 backdrop-blur">
                                <p className="text-slate-300 text-lg leading-relaxed">
                                    DOT findings, PM inspections, roadside calls, mobile service, in-shop repairs,
                                    and curtain-side work all support the same operational goal: keeping fleet equipment
                                    safe, compliant, and available for use.
                                </p>

                                <div className="mt-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    {[
                                        {
                                            title: "DOT inspection cycles",
                                            desc: "Inspection and repair support tied to compliance readiness.",
                                        },
                                        {
                                            title: "PM schedules",
                                            desc: "Preventive checks to reduce surprise breakdowns.",
                                        },
                                        {
                                            title: "Mobile service visits",
                                            desc: "Scheduled on-site fleet service for yards and facilities.",
                                        },
                                        {
                                            title: "Roadside support",
                                            desc: "Emergency response when trailer issues interrupt operations.",
                                        },
                                    ].map((item) => (
                                        <div
                                            key={item.title}
                                            className="rounded-2xl border border-white/10 bg-white/[0.05] p-5"
                                        >
                                            <p className="font-bold text-white">{item.title}</p>
                                            <p className="mt-2 text-sm text-slate-300 leading-relaxed">
                                                {item.desc}
                                            </p>
                                        </div>
                                    ))}
                                </div>

                                <div className="mt-7 flex flex-col sm:flex-row gap-3">
                                    <Link
                                        to="/contact"
                                        className="inline-flex justify-center items-center px-6 py-3 rounded-xl bg-green-600 text-white font-semibold hover:bg-green-700 transition"
                                    >
                                        Request Fleet Service
                                    </Link>

                                    <a
                                        href="tel:+19367779615"
                                        className="inline-flex justify-center items-center px-6 py-3 rounded-xl border border-white/20 text-white font-semibold hover:bg-white/10 transition"
                                    >
                                        Call (936) 777-9615
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ================= CURTAIN-SIDE SECTION ================= */}
            <section className="relative overflow-hidden bg-white">
                <div className={`${PAGE_CONTAINER} py-16`}>
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                        <div className="lg:col-span-6">
                            <div className="rounded-3xl border border-slate-200 bg-slate-50 overflow-hidden shadow-sm">
                                <div className="aspect-[16/10]">
                                    <img
                                        src="/images/Banners/South_Trailers_banner.png"
                                        alt="Curtain-side services"
                                        className="h-full w-full object-cover"
                                        loading="lazy"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="lg:col-span-6">
                            <p className="text-green-700 font-semibold">Side-curtain systems</p>

                            <h2 className="mt-3 text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900">
                                Curtain-side manufacturing, repair, and hardware support.
                            </h2>

                            <p className="mt-4 text-slate-600 text-base sm:text-lg leading-relaxed">
                                South Trailers handles curtain-side manufacturing, repair, installation, rollers,
                                tracks, buckles, straps, rails, and related hardware for commercial trailer equipment.
                            </p>

                            <div className="mt-7 flex flex-col sm:flex-row gap-3">
                                <Link
                                    to="/services/curtain-side-services"
                                    className="inline-flex justify-center items-center px-6 py-3 rounded-xl bg-green-600 text-white font-semibold hover:bg-green-700 transition"
                                >
                                    View Curtain-Side Services
                                </Link>

                                <Link
                                    to="/contact"
                                    className="inline-flex justify-center items-center px-6 py-3 rounded-xl bg-white text-slate-900 font-semibold border border-slate-200 hover:bg-slate-50 transition shadow-sm"
                                >
                                    Request Curtain Service
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ================= CTA ================= */}
            <section className="relative overflow-hidden bg-slate-50">
                <div className={`${PAGE_CONTAINER} py-16`}>
                    <div className="rounded-3xl border border-slate-200 bg-white/80 backdrop-blur shadow-sm p-6 sm:p-8 lg:p-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
                        <div className="max-w-3xl">
                            <p className="text-green-700 font-semibold">Fleet maintenance support</p>

                            <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
                                Need service scheduled?
                            </h2>

                            <p className="mt-4 text-slate-600 leading-relaxed">
                                Send the unit number, trailer issue, location, and photos if available.
                                We’ll respond with the next step.
                            </p>
                        </div>

                        <div className="flex flex-col sm:flex-row lg:flex-col gap-3 lg:min-w-[16rem]">
                            <Link
                                to="/contact"
                                className="inline-flex justify-center items-center px-6 py-3 rounded-xl bg-green-600 text-white font-semibold hover:bg-green-700 transition"
                            >
                                Request Fleet Service
                            </Link>

                            <a
                                href="tel:+19367779615"
                                className="inline-flex justify-center items-center px-6 py-3 rounded-xl bg-slate-900 text-white font-semibold hover:bg-slate-800 transition"
                            >
                                Call Now
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Services;
