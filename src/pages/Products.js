// src/pages/Products.js
import React from "react";
import { Link } from "react-router-dom";

const parts = [
    {
        name: "Roller 1R",
        image: "/images/Products/Roller 1R.jpg",
        description:
            "Replacement roller for curtain-side trailer systems. Used to help the curtain slide properly along the rail.",
    },
    {
        name: "Roller 2R",
        image: "/images/Products/Roller 2R.jpg",
        description:
            "Double roller option for curtain-side systems where added stability or replacement hardware is needed.",
    },
    {
        name: "Rail",
        image: "/images/Products/RIEL.jpg",
        description:
            "Curtain rail component for curtain-side trailer systems. Available based on measurements and system type.",
    },
    {
        name: "Rave Hook",
        image: "/images/Products/RaveHook.png",
        description:
            "Hook component used in curtain-side trailer systems for securing curtain hardware and related assemblies.",
    },
    {
        name: "Buckle",
        image: "/images/Products/Hebilla.jpg",
        description:
            "Replacement buckle for curtain straps and tensioning systems. Part confirmation depends on size and setup.",
    },
    {
        name: "Ratchet",
        image: "/images/Products/Ratchet.jpeg",
        description:
            "Ratchet hardware used to tension and secure curtain-side trailer curtains.",
    },
    {
        name: "Back Plate",
        image: "/images/Products/Back plate.jpeg",
        description:
            "Replacement back plate hardware for curtain-side trailer assemblies.",
    },
    {
        name: "Bottom Adaptor",
        image: "/images/Products/Bottom Adaptor.jpeg",
        description:
            "Bottom adaptor component for curtain-side systems. Fitment depends on curtain and rail setup.",
    },
    {
        name: "Flat Profile",
        image: "/images/Products/PERFIL PLANO.jpg",
        description:
            "Flat profile component used in curtain-side trailer hardware assemblies.",
    },
    {
        name: "Tension Tube",
        image: "/images/Products/TUBO TENSOR.jpg",
        description:
            "Tension tube for curtain-side systems. Used for curtain tensioning and proper side curtain operation.",
    },
];

const Products = () => {
    return (
        <main className="min-h-screen bg-white text-gray-950">
            {/* HERO */}
            <section className="relative pt-32 pb-20 overflow-hidden border-b border-gray-200">
                <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-100" />
                <div className="absolute -top-24 -right-24 w-80 h-80 bg-green-100/50 rounded-full blur-3xl" />
                <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-gray-200/60 rounded-full blur-3xl" />

                <div className="relative max-w-7xl mx-auto px-5 sm:px-8 xl:px-14">
                    <div className="max-w-3xl">
                        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-green-700 mb-4">
                            Side Curtain Hardware
                        </p>

                        <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-gray-950">
                            Curtain-side trailer parts and hardware.
                        </h1>

                        <p className="mt-6 text-lg md:text-xl text-gray-600 leading-relaxed">
                            South Trailers supplies and sources replacement parts for
                            curtain-side trailer systems, including rollers, rails, hooks,
                            buckles, straps, ratchets, tension tubes, profiles, and related
                            hardware.
                        </p>

                        <div className="mt-8 flex flex-col sm:flex-row gap-3">
                            <Link
                                to="/contact"
                                className="inline-flex items-center justify-center rounded-lg bg-green-600 px-6 py-3 text-sm font-semibold text-white hover:bg-green-700 transition"
                            >
                                Get a Quote
                            </Link>

                            <Link
                                to="/services/curtain-side-services"
                                className="inline-flex items-center justify-center rounded-lg border border-gray-300 px-6 py-3 text-sm font-semibold text-gray-950 hover:border-green-600 hover:text-green-700 transition"
                            >
                                Curtain Repair Services
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* INTRO */}
            <section className="py-14 border-b border-gray-200">
                <div className="max-w-7xl mx-auto px-5 sm:px-8 xl:px-14">
                    <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-10 items-start">
                        <div>
                            <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
                                Parts can be sourced, shipped, or installed.
                            </h2>
                        </div>

                        <div className="space-y-5 text-gray-600 leading-relaxed">
                            <p>
                                Parts availability may vary. Some components may be available
                                locally, while others are sourced per order. Send us the part
                                name, photos, measurements, or trailer details and we will
                                confirm availability, pricing, lead time, and shipping options.
                            </p>

                            <div className="grid sm:grid-cols-2 gap-3">
                                {[
                                    "Local pickup",
                                    "Shipping when available",
                                    "In-shop installation",
                                    "Mobile repair depending on the job",
                                ].map((item) => (
                                    <div
                                        key={item}
                                        className="rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm font-semibold text-gray-900"
                                    >
                                        {item}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* PARTS GRID */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-5 sm:px-8 xl:px-14">
                    <div className="mb-10 max-w-2xl">
                        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-green-700 mb-3">
                            Available Parts
                        </p>

                        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                            Side curtain hardware components.
                        </h2>

                        <p className="mt-4 text-gray-600 leading-relaxed">
                            Use these parts as a reference. If the exact part is unknown,
                            send photos and measurements so we can help identify it.
                        </p>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                        {parts.map((part) => (
                            <article
                                key={part.name}
                                className="group rounded-2xl border border-gray-200 bg-white overflow-hidden hover:shadow-xl hover:-translate-y-1 transition"
                            >
                                <div className="aspect-[4/3] bg-gray-100 overflow-hidden">
                                    <img
                                        src={encodeURI(part.image)}
                                        alt={part.name}
                                        className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                                    />
                                </div>

                                <div className="p-5">
                                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-green-700">
                                        Side Curtain Hardware
                                    </p>

                                    <h3 className="mt-2 text-lg font-bold text-gray-950">
                                        {part.name}
                                    </h3>

                                    <p className="mt-3 text-sm text-gray-600 leading-relaxed">
                                        {part.description}
                                    </p>

                                    <Link
                                        to="/contact"
                                        className="mt-5 inline-flex text-sm font-semibold text-green-700 hover:text-green-800"
                                    >
                                        Get a Quote →
                                    </Link>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            {/* SHIPPING / PICKUP */}
            <section className="py-20 bg-gray-950 text-white">
                <div className="max-w-7xl mx-auto px-5 sm:px-8 xl:px-14">
                    <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-10 items-start">
                        <div>
                            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-green-400 mb-4">
                                Pickup & Shipping
                            </p>

                            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                                Parts can be picked up locally or shipped when available.
                            </h2>
                        </div>

                        <div className="space-y-5 text-gray-300 leading-relaxed">
                            <p>
                                South Trailers can confirm availability, pricing, lead time,
                                and shipping options before the order is processed. Some
                                components may be stocked locally, while others are sourced
                                per order.
                            </p>

                            <p>
                                For best accuracy, send photos of the part, measurements,
                                trailer details, and quantity needed. We can also help
                                identify the part if the original part number is not
                                available.
                            </p>

                            <Link
                                to="/contact"
                                className="inline-flex items-center justify-center rounded-lg bg-green-600 px-6 py-3 text-sm font-semibold text-white hover:bg-green-700 transition"
                            >
                                Get a Quote
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Products;
