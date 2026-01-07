// src/pages/Home.js
import { Link } from "react-router-dom";

const Home = () => {
    const clientLogos = [];

    return (
        <main>
            {/* HERO */}
            <section className="relative h-[85vh] min-h-[560px] w-full overflow-hidden">
                {/* Banner */}
                <div
                    className="absolute inset-0 bg-center bg-cover"
                    style={{ backgroundImage: "url(/images/Banners/South_Trailers_banner.png)" }}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/45 to-black/10" />

                {/* merged with navbar */}
                <div className="relative h-full pt-20">
                    <div className="h-full flex items-center">
                        {/* MATCH NAVBAR PADDING */}
                        <div className="w-full px-5 sm:px-8 xl:px-14">
                            {/* text block */}
                            <div className="text-left max-w-[620px] sm:max-w-[660px] xl:max-w-[640px]">
                                <h1 className="text-white font-extrabold leading-tight tracking-tight text-4xl sm:text-5xl md:text-[3.25rem]">
                                    Curtain Side Solutions for Trucking Companies
                                </h1>

                                <p className="mt-4 text-white/90 text-base sm:text-lg md:text-lg">
                                    Manufacturing, installation, and maintenance of curtain sides and parts — with
                                    on-site curtain repair and assessment available.
                                </p>

                                <div className="mt-7 flex flex-col sm:flex-row gap-3">
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
                    </div>

                    {/* bottom strip */}
                    <div className="absolute bottom-0 left-0 right-0">
                        <div className="bg-black/35 backdrop-blur-sm border-t border-white/10">
                            <div className="w-full px-5 sm:px-8 xl:px-14 py-4">
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

            {/* TRUSTED BY */}
            <section className="bg-white">
                <div className="w-full px-5 sm:px-8 xl:px-14 py-14">
                    <h2 className="text-2xl font-bold">Trusted by</h2>
                    <p className="text-gray-600 text-sm mt-1">
                        From regional operators to multinational fleets.
                    </p>

                    <div className="mt-8">
                        {clientLogos.length > 0 ? (
                            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 items-center">
                                {clientLogos.map((src, idx) => (
                                    <div
                                        key={idx}
                                        className="h-16 w-full flex items-center justify-center grayscale opacity-80 hover:opacity-100 hover:grayscale-0 transition"
                                    >
                                        <img
                                            src={src}
                                            alt={`Client ${idx + 1}`}
                                            className="h-full w-auto object-contain"
                                        />
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8">
                                {Array.from({ length: 10 }).map((_, idx) => (
                                    <div
                                        key={idx}
                                        className="h-16 rounded-md bg-gray-100 border border-gray-200"
                                    />
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Home;
