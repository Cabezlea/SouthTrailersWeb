// src/components/Footer.js
import { Link } from "react-router-dom";

const Footer = () => {
    const year = new Date().getFullYear();

    return (
        <footer className="bg-slate-950 text-slate-300">
            <div className="max-w-7xl mx-auto px-5 sm:px-8 xl:px-14 py-12">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
                    {/* LEFT */}
                    <div className="lg:col-span-5">
                        <div className="h-14 md:h-16 w-[280px] overflow-hidden flex items-center">
                            <img
                                src="/images/Banners/South_Trailers_CMYK.png"
                                alt="South Trailers"
                                className="h-full w-auto object-contain origin-left scale-[2.3] -translate-y-0.5"
                            />
                        </div>

                        <p className="mt-5 max-w-md text-sm leading-6 text-slate-400">
                            Trailer repair, fleet maintenance, DOT/PM support, mobile service, roadside assistance,
                            and side-curtain systems for commercial fleets.
                        </p>

                        <div className="mt-6 space-y-3 text-sm">
                            <a href="tel:+19367779615" className="block hover:text-white transition">
                                +1 (936) 777-9615
                            </a>

                            <a
                                href="mailto:sales@southtrailers.com"
                                className="block hover:text-white transition break-all"
                            >
                                sales@southtrailers.com
                            </a>
                        </div>
                    </div>

                    {/* MIDDLE */}
                    <div className="lg:col-span-3">
                        <div className="text-white font-semibold mb-4">Sitemap</div>
                        <ul className="space-y-3 text-sm">
                            <li>
                                <Link to="/" className="hover:text-white transition">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link to="/services" className="hover:text-white transition">
                                    Services
                                </Link>
                            </li>
                            <li>
                                <Link to="/contact" className="hover:text-white transition">
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* RIGHT */}
                    <div className="lg:col-span-4">
                        <div className="text-white font-semibold mb-4">Locations</div>

                        <div className="space-y-6 text-sm text-slate-400">
                            <div>
                                <div className="text-white font-semibold mb-2">North America Office</div>
                                <div>220 Barren Springs Dr #20</div>
                                <div>Houston, TX 77090-5923</div>
                            </div>

                            <div>
                                <div className="text-white font-semibold mb-2">South America Office</div>
                                <div>Lotización Pieza, Km 15</div>
                                <div>Vía a Daule 19, Guayaquil, Ecuador</div>
                            </div>
                        </div>

                        <div className="mt-8 flex flex-wrap items-center gap-4">
                            <div className="w-28 h-16 overflow-hidden rounded-md bg-white/5 border border-white/10">
                                <img
                                    src="/images/Banners/1200px-Flag_of_the_United_States.svg.webp"
                                    alt="United States"
                                    className="w-full h-full object-cover"
                                    loading="lazy"
                                />
                            </div>

                            <div className="w-28 h-16 overflow-hidden rounded-md bg-white/5 border border-white/10">
                                <img
                                    src="/images/Banners/flags-Texas-independence-motif-flag-Mexico-star-1845.webp"
                                    alt="Texas"
                                    className="w-full h-full object-cover"
                                    loading="lazy"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="border-t border-white/10">
                <div className="max-w-7xl mx-auto px-5 sm:px-8 xl:px-14 py-4 flex flex-col sm:flex-row gap-2 sm:items-center sm:justify-between text-xs text-slate-500">
                    <span>© {year} South Trailers. All rights reserved.</span>
                    <span>Heavy duty trailer service and fleet support.</span>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
