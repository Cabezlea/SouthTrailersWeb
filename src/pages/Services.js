// src/pages/Services.js
import { Link } from "react-router-dom";
import { services } from "../data/servicesData";

const Services = () => {
    const NAV_CONTAINER = "w-full px-5 sm:px-8 xl:px-14";
    const PAGE_CONTAINER = "max-w-7xl mx-auto px-5 sm:px-8 xl:px-14";

    const priorityServices = services.slice(0, 4);
    const secondaryServices = services.slice(4);

    return (
        <main>
            {/* HERO — no homepage banner */}
            <section className="relative overflow-hidden bg-slate-950">
                <div className="pointer-events-none absolute inset-0">
                    <div className="absolute -top-48 left-1/4 h-[34rem] w-[34rem] rounded-full bg-green-500/15 blur-3xl" />
                    <div className="absolute -bottom-48 right-[-10rem] h-[34rem] w-[34rem] rounded-full bg-white/10 blur-3xl" />
                    <div className="absolute inset-0 opacity-[0.045] flex items-center justify-center">
                        <img
                            src="/images/Banners/South_Trailers_CMYK.png"
                            alt=""
                            className="w-[58rem] max-w-none rotate-[-10deg] select-none"
                            draggable={false}
                        />
                    </div>
                </div>

                <div className={`${NAV_CONTAINER} relative py-24 sm:py-28 lg:py-32`}>
                    <div className="max-w-4xl">
                        <p className="text-green-400 font-semibold">
                            Heavy-duty trailer service
                        </p>

                        <h1 className="mt-4 text-white font-extrabold leading-[1.03] tracking-tight text-4xl sm:text-5xl lg:text-6xl">
                            Services built around fleet uptime.
                        </h1>

                        <p className="mt-5 max-w-3xl text-white/85 text-base sm:text-lg leading-relaxed">
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
                </div>
            </section>

            {/* MAIN SERVICE PRIORITIES */}
            <section className="relative overflow-hidden bg-slate-50">
                <div className="pointer-events-none absolute inset-0">
                    <div className="absolute -top-40 left-1/2 h-[32rem] w-[32rem] -translate-x-1/2 rounded-full bg-green-500/10 blur-3xl" />
                    <div className="absolute -bottom-48 right-[-8rem] h-[32rem] w-[32rem] rounded-full bg-slate-900/10 blur-3xl" />
                </div>

                <div className={`${PAGE_CONTAINER} relative py-16`}>
                    <div className="max-w-3xl">
                        <p className="text-green-700 font-semibold">Primary service lanes</p>
                        <h2 className="mt-3 text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900">
                            Clear services for how fleets actually operate.
                        </h2>
                        <p className="mt-4 text-slate-600 text-base sm:text-lg leading-relaxed">
                            Trailer Repair & Fleet Maintenance is the umbrella. The other services explain how the work is delivered:
                            mobile, in-shop, compliance programs, roadside, and curtain-side specialty work.
                        </p>
                    </div>

                    <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
                        {priorityServices.map((service, index) => (
                            <Link
                                key={service.slug}
                                to={`/services/${service.slug}`}
                                className="group rounded-3xl border border-slate-200 bg-white/80 backdrop-blur shadow-sm p-6 sm:p-7 hover:-translate-y-1 hover:shadow-md transition"
                            >
                                <div className="flex items-start justify-between gap-5">
                                    <div className="h-11 w-11 shrink-0 rounded-xl bg-green-100 text-green-700 flex items-center justify-center font-extrabold">
                                        0{index + 1}
                                    </div>

                                    <span className="text-slate-400 group-hover:text-green-600 transition text-2xl">
                    →
                  </span>
                                </div>

                                <p className="mt-6 text-xs font-bold tracking-[0.18em] uppercase text-green-700">
                                    {service.kicker}
                                </p>

                                <h3 className="mt-2 text-2xl font-extrabold text-slate-900">
                                    {service.title}
                                </h3>

                                <p className="mt-3 text-slate-600 leading-relaxed">
                                    {service.short}
                                </p>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* SECONDARY / SPECIALTY SERVICES */}
            <section className="relative overflow-hidden bg-white">
                <div className={`${PAGE_CONTAINER} py-16`}>
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                        <div className="lg:col-span-5">
                            <p className="text-green-700 font-semibold">Additional support</p>
                            <h2 className="mt-3 text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900">
                                Emergency support and curtain-side specialty work.
                            </h2>
                            <p className="mt-4 text-slate-600 text-base sm:text-lg leading-relaxed">
                                Roadside assistance and curtain-side services stay visible, but they do not replace the core identity:
                                trailer repair and fleet maintenance.
                            </p>
                        </div>

                        <div className="lg:col-span-7 grid grid-cols-1 gap-5">
                            {secondaryServices.map((service) => (
                                <Link
                                    key={service.slug}
                                    to={`/services/${service.slug}`}
                                    className="group rounded-2xl border border-slate-200 bg-slate-50/80 p-6 hover:bg-white hover:shadow-md transition"
                                >
                                    <div className="flex items-start justify-between gap-5">
                                        <div>
                                            <p className="text-xs font-bold tracking-[0.18em] uppercase text-green-700">
                                                {service.kicker}
                                            </p>
                                            <h3 className="mt-2 text-2xl font-extrabold text-slate-900">
                                                {service.title}
                                            </h3>
                                            <p className="mt-3 text-slate-600 leading-relaxed">
                                                {service.short}
                                            </p>
                                        </div>

                                        <span className="text-slate-400 group-hover:text-green-600 transition text-2xl">
                      →
                    </span>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* FLEET PROGRAM CTA */}
            <section className="relative overflow-hidden bg-slate-950">
                <div className="pointer-events-none absolute inset-0">
                    <div className="absolute -top-40 right-[-10rem] h-[32rem] w-[32rem] rounded-full bg-green-500/20 blur-3xl" />
                    <div className="absolute -bottom-40 left-[-10rem] h-[32rem] w-[32rem] rounded-full bg-white/10 blur-3xl" />
                </div>

                <div className={`${PAGE_CONTAINER} relative py-16`}>
                    <div className="rounded-3xl border border-white/10 bg-white/[0.06] backdrop-blur p-6 sm:p-8 lg:p-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
                        <div className="max-w-3xl">
                            <p className="text-green-400 font-semibold">Recurring fleet support</p>
                            <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
                                Built for preferred vendor relationships, not random one-off repairs.
                            </h2>
                            <p className="mt-4 text-slate-300 leading-relaxed">
                                Ask about PM schedules, annual DOT cycles, mobile service programs, recurring fleet maintenance,
                                and emergency support agreements.
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
                                className="inline-flex justify-center items-center px-6 py-3 rounded-xl border border-white/20 text-white font-semibold hover:bg-white/10 transition"
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
