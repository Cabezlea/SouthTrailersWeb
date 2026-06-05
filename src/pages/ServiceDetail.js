// src/pages/ServiceDetail.js
import { Link, Navigate, useParams } from "react-router-dom";
import { getServiceBySlug, services } from "../data/servicesData";

const ServiceDetail = () => {
    const { slug } = useParams();
    const service = getServiceBySlug(slug);

    const PAGE_CONTAINER = "max-w-7xl mx-auto px-5 sm:px-8 xl:px-14";
    const safeUrl = (p) => encodeURI(p);

    if (!service) {
        return <Navigate to="/services" replace />;
    }

    const related = services.filter((item) => item.slug !== service.slug).slice(0, 3);

    return (
        <main>
            {/* HERO */}
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

                    <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/95 to-slate-950/80" />
                </div>

                <div className={`${PAGE_CONTAINER} relative py-20 sm:py-24 lg:py-28`}>
                    <Link
                        to="/services"
                        className="inline-flex items-center text-sm font-semibold text-white/70 hover:text-white transition"
                    >
                        ← All Services
                    </Link>

                    <div className="mt-10 max-w-4xl">
                        <p className="text-green-400 font-semibold">{service.kicker}</p>

                        <h1 className="mt-4 text-white font-extrabold leading-[1.03] tracking-tight text-4xl sm:text-5xl lg:text-6xl">
                            {service.title}
                        </h1>

                        <p className="mt-5 max-w-3xl text-white/85 text-base sm:text-lg leading-relaxed">
                            {service.hero}
                        </p>

                        <div className="mt-8 flex flex-col sm:flex-row gap-3">
                            <Link
                                to="/contact"
                                className="inline-flex justify-center items-center px-6 py-3 rounded-md bg-green-600 text-white font-semibold hover:bg-green-700 transition shadow-lg shadow-green-900/20"
                            >
                                {service.cta}
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

            {/* IMAGE + INTRO */}
            <section className="relative overflow-hidden bg-slate-50">
                <div className="pointer-events-none absolute inset-0">
                    <div className="absolute -top-40 left-[-10rem] h-[32rem] w-[32rem] rounded-full bg-green-500/10 blur-3xl" />
                    <div className="absolute -bottom-48 right-[-8rem] h-[32rem] w-[32rem] rounded-full bg-slate-900/10 blur-3xl" />
                </div>

                <div className={`${PAGE_CONTAINER} relative py-16`}>
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                        <div className="lg:col-span-6">
                            <div className="rounded-3xl border border-slate-200 bg-white shadow-sm overflow-hidden">
                                <div className="aspect-[16/10] bg-slate-100">
                                    <img
                                        src={safeUrl(service.image)}
                                        alt={service.title}
                                        className="h-full w-full object-cover"
                                        loading="lazy"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="lg:col-span-6">
                            <p className="text-green-700 font-semibold">Service overview</p>

                            <h2 className="mt-3 text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900">
                                Built for practical fleet work.
                            </h2>

                            <p className="mt-4 text-slate-600 text-base sm:text-lg leading-relaxed">
                                This service is positioned around uptime, safety, and clear next steps. Send the trailer issue,
                                unit number, location, and photos if available. We’ll respond with the right service path.
                            </p>

                            <div className="mt-7 flex flex-col sm:flex-row gap-3">
                                <Link
                                    to="/contact"
                                    className="inline-flex justify-center items-center px-6 py-3 rounded-xl bg-green-600 text-white font-semibold hover:bg-green-700 transition"
                                >
                                    {service.cta}
                                </Link>

                                <a
                                    href="tel:+19367779615"
                                    className="inline-flex justify-center items-center px-6 py-3 rounded-xl bg-white text-slate-900 font-semibold border border-slate-200 hover:bg-slate-50 transition shadow-sm"
                                >
                                    Call (936) 777-9615
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CONTENT */}
            <section className="relative overflow-hidden bg-white">
                <div className={`${PAGE_CONTAINER} py-16`}>
                    <div className="max-w-3xl">
                        <p className="text-green-700 font-semibold">How this service works</p>
                        <h2 className="mt-3 text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900">
                            Clear scope, direct execution.
                        </h2>
                    </div>

                    <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
                        {service.sections.map((section) => (
                            <div
                                key={section.title}
                                className="rounded-3xl border border-slate-200 bg-slate-50/80 p-6 shadow-sm"
                            >
                                <h3 className="text-2xl font-extrabold text-slate-900">
                                    {section.title}
                                </h3>
                                <p className="mt-3 text-slate-600 leading-relaxed">
                                    {section.body}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* INCLUDED */}
            <section className="relative overflow-hidden bg-slate-950">
                <div className="pointer-events-none absolute inset-0">
                    <div className="absolute -top-40 right-[-10rem] h-[32rem] w-[32rem] rounded-full bg-green-500/20 blur-3xl" />
                    <div className="absolute -bottom-40 left-[-10rem] h-[32rem] w-[32rem] rounded-full bg-white/10 blur-3xl" />
                </div>

                <div className={`${PAGE_CONTAINER} relative py-16`}>
                    <div className="max-w-3xl">
                        <p className="text-green-400 font-semibold">Service scope</p>
                        <h2 className="mt-3 text-4xl sm:text-5xl font-extrabold tracking-tight text-white">
                            What this service can include.
                        </h2>
                    </div>

                    <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                        {service.bullets.map((item) => (
                            <div
                                key={item}
                                className="rounded-2xl border border-white/10 bg-white/[0.06] p-6 backdrop-blur"
                            >
                                <div className="h-10 w-10 rounded-xl bg-green-500/15 text-green-300 flex items-center justify-center font-bold">
                                    ✓
                                </div>

                                <p className="mt-4 text-white font-semibold leading-snug">
                                    {item}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* RELATED SERVICES */}
            <section className="bg-slate-50">
                <div className={`${PAGE_CONTAINER} py-16`}>
                    <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
                        <div>
                            <p className="text-green-700 font-semibold">Related services</p>
                            <h2 className="mt-2 text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900">
                                Keep moving through the service line.
                            </h2>
                        </div>

                        <Link
                            to="/services"
                            className="inline-flex justify-center items-center px-6 py-3 rounded-xl bg-white border border-slate-200 text-slate-900 font-semibold hover:bg-slate-50 transition shadow-sm"
                        >
                            View All Services
                        </Link>
                    </div>

                    <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
                        {related.map((item) => (
                            <Link
                                key={item.slug}
                                to={`/services/${item.slug}`}
                                className="group rounded-2xl border border-slate-200 bg-white/80 p-6 hover:bg-white hover:-translate-y-1 hover:shadow-md transition"
                            >
                                <p className="text-xs font-bold tracking-[0.18em] uppercase text-green-700">
                                    {item.kicker}
                                </p>

                                <h3 className="mt-2 text-xl font-extrabold text-slate-900">
                                    {item.title}
                                </h3>

                                <p className="mt-3 text-slate-600 leading-relaxed">
                                    {item.short}
                                </p>

                                <p className="mt-5 font-semibold text-green-700">
                                    View service →
                                </p>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
};

export default ServiceDetail;
