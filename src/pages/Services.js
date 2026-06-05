// src/pages/Services.js
import { Link } from "react-router-dom";
import { services } from "../data/servicesData";

const Services = () => {
    const NAV_CONTAINER = "w-full px-5 sm:px-8 xl:px-14";
    const PAGE_CONTAINER = "max-w-7xl mx-auto px-5 sm:px-8 xl:px-14";
    const safeUrl = (p) => encodeURI(p);

    const serviceHighlights = [
        {
            title: "Recurring fleet support",
            desc: "PM schedules, DOT cycles, mobile visits, and preferred vendor relationships.",
        },
        {
            title: "Mobile + in-shop",
            desc: "Service at your yard when speed matters, or scheduled shop work when the job requires it.",
        },
        {
            title: "Compliance-driven repair",
            desc: "DOT findings often become repair work. We handle both the inspection path and the fix.",
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
                            Trailer repair, fleet maintenance, mobile service, in-shop repair, DOT & PM programs,
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
                        />
                    </div>
                </div>

                <div className={`${PAGE_CONTAINER} relative py-16`}>
                    <div className="max-w-3xl">
                        <p className="text-green-700 font-semibold">Primary service lanes</p>

                        <h2 className="mt-3 text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900">
                            Clear services for how fleets actually operate.
                        </h2>

                        <p className="mt-4 text-slate-600 text-base sm:text-lg leading-relaxed">
                            Trailer Repair & Fleet Maintenance is the umbrella. The service pages explain how the work is delivered:
                            mobile, in-shop, compliance programs, roadside, and curtain-side specialty work.
                        </p>
                    </div>

                    {/* All service cards aligned */}
                    <div className="mt-10 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                        {services.map((service, index) => (
                            <Link
                                key={service.slug}
                                to={`/services/${service.slug}`}
                                className="group h-full rounded-3xl border border-slate-200 bg-white/85 backdrop-blur shadow-sm overflow-hidden hover:-translate-y-1 hover:shadow-md transition"
                            >
                                <div className="aspect-[16/9] bg-slate-100 overflow-hidden">
                                    <img
                                        src={safeUrl(service.image)}
                                        alt={service.title}
                                        className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                                        loading="lazy"
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
                        ))}
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
                            <p className="text-green-400 font-semibold">More than one-off repair</p>

                            <h2 className="mt-3 text-4xl sm:text-5xl font-extrabold tracking-tight text-white">
                                Built for recurring fleet relationships.
                            </h2>

                            <p className="mt-4 text-slate-300 text-base sm:text-lg leading-relaxed">
                                The service model is designed to move from single repairs into structured maintenance support.
                            </p>
                        </div>

                        <div className="lg:col-span-7">
                            <div className="rounded-3xl border border-white/10 bg-white/[0.06] p-6 sm:p-8 backdrop-blur">
                                <p className="text-slate-300 text-lg leading-relaxed">
                                    DOT findings, PM inspections, roadside calls, and mobile repairs all point to the same goal:
                                    a consistent fleet maintenance relationship. South Trailers is positioned as a service partner,
                                    not just a vendor called after equipment fails.
                                </p>

                                <div className="mt-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    {[
                                        {
                                            title: "Annual DOT cycles",
                                            desc: "Inspection and repair support tied to compliance readiness.",
                                        },
                                        {
                                            title: "PM schedules",
                                            desc: "Preventive checks to reduce surprise breakdowns.",
                                        },
                                        {
                                            title: "Mobile service programs",
                                            desc: "Scheduled on-site fleet visits for yards and facilities.",
                                        },
                                        {
                                            title: "Preferred vendor support",
                                            desc: "A long-term service relationship with better response.",
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
                                        Request Fleet Program
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

            {/* ================= CURTAIN-SIDE REMINDER ================= */}
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
                            <p className="text-green-700 font-semibold">Curtain-side specialty</p>

                            <h2 className="mt-3 text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900">
                                Curtain-side work stays part of the operation.
                            </h2>

                            <p className="mt-4 text-slate-600 text-base sm:text-lg leading-relaxed">
                                South Trailers is now positioned around trailer repair and fleet maintenance, but curtain-side
                                manufacturing, repair, installation, rollers, tracks, buckles, straps, and hardware remain a key specialty.
                            </p>

                            <div className="mt-7 flex flex-col sm:flex-row gap-3">
                                <Link
                                    to="/services/curtain-side-services"
                                    className="inline-flex justify-center items-center px-6 py-3 rounded-xl bg-green-600 text-white font-semibold hover:bg-green-700 transition"
                                >
                                    View Curtain-Side Services
                                </Link>

                                <Link
                                    to="/products"
                                    className="inline-flex justify-center items-center px-6 py-3 rounded-xl bg-white text-slate-900 font-semibold border border-slate-200 hover:bg-slate-50 transition shadow-sm"
                                >
                                    View Products
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
