// src/components/Footer.js
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-gray-300">
            <div className="max-w-7xl mx-auto px-6 py-10 grid gap-10 md:grid-cols-3">
                {/* LEFT */}
                <div>
                    <div className="h-14 md:h-16 w-[320px] overflow-hidden flex items-center mb-6">
                        <img
                            src="/images/Banners/South_Trailers_CMYK.png"
                            alt="South Trailers"
                            className="h-full w-auto object-contain origin-left scale-[2.3] -translate-y-0.5"
                        />
                    </div>

                    <div className="space-y-3 text-sm">
                        <div className="flex items-center gap-3">
              <span className="text-green-500">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C10.07 21 3 13.93 3 5a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.46.57 3.58a1 1 0 0 1-.24 1.01l-2.2 2.2Z" />
                </svg>
              </span>
                            <a href="tel:+19367779615" className="hover:text-white">
                                +1 (936) 777-9615
                            </a>
                        </div>

                        <div className="flex items-center gap-3">
              <span className="text-green-500">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20 4H4a2 2 0 0 0-2 2v.01L12 13 22 6.01V6a2 2 0 0 0-2-2Zm2 6.24-10 6.25-10-6.25V18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-7.76Z" />
                </svg>
              </span>
                            <a href="mailto:sales@southtrailers.com" className="hover:text-white">
                                sales@southtrailers.com
                            </a>
                        </div>
                    </div>

                    <div className="mt-8 space-y-6 text-sm">
                        <div>
                            <div className="text-white font-semibold mb-2">North America Office</div>
                            <div>220 Barren Springs Dr #20, Houston, TX</div>
                            <div>77090-5923</div>
                        </div>

                        <div>
                            <div className="text-white font-semibold mb-2">South America Office</div>
                            <div>Lotización Pieza, Km 15, Vía a Daule 19, Guayaquil, Ecuador</div>
                            <a href="mailto:latam@southtrailers.com" className="hover:text-white">
                                latam@southtrailers.com
                            </a>
                        </div>
                    </div>
                </div>

                {/* MIDDLE */}
                <div>
                    <div className="text-white font-semibold mb-4">Sitemap</div>
                    <ul className="space-y-2 text-sm">
                        <li><Link to="/" className="hover:text-white">Home</Link></li>
                        <li><Link to="/services" className="hover:text-white">Services</Link></li>
                        <li><Link to="/products" className="hover:text-white">Products</Link></li>
                        <li><Link to="/shipping" className="hover:text-white">Shipping</Link></li>
                        <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
                    </ul>
                </div>

                {/* RIGHT */}
                <div className="flex flex-col justify-between">
                    <div>
                        <div className="text-white font-semibold mb-4">Follow</div>
                        <a href="#" className="inline-flex items-center gap-3 text-sm hover:text-white" aria-label="LinkedIn">
              <span className="inline-flex items-center justify-center w-10 h-10 rounded-md bg-white/10">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M6.94 6.5A2.44 2.44 0 1 1 4.5 4.06 2.44 2.44 0 0 1 6.94 6.5ZM4.7 20.5h4.47V9h-4.47Zm7.17-11.5h4.28v1.57h.06a4.69 4.69 0 0 1 4.22-2.32c4.52 0 5.36 2.98 5.36 6.86v7.39h-4.47v-6.56c0-1.57 0-3.58-2.18-3.58s-2.51 1.7-2.51 3.46v6.68h-4.47Z" />
                </svg>
              </span>
                            LinkedIn
                        </a>
                    </div>

                    {/* RESPONSIVE FLAGS (smaller + wrap on small screens) */}
                    <div className="mt-10 flex flex-wrap items-center gap-4 sm:gap-6">
                        <div className="w-32 h-18 sm:w-36 sm:h-20 md:w-40 md:h-22 overflow-hidden rounded-sm bg-white/5">
                            <img
                                src="/images/Banners/1200px-Flag_of_the_United_States.svg.webp"
                                alt="United States"
                                className="w-full h-full object-cover"
                                loading="lazy"
                            />
                        </div>

                        <div className="w-32 h-18 sm:w-36 sm:h-20 md:w-40 md:h-22 overflow-hidden rounded-sm bg-white/5">
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

            <div className="border-t border-white/10">
                <div className="max-w-7xl mx-auto px-6 py-4 text-center text-xs text-gray-400">
                    © {new Date().getFullYear()} South Trailers | All rights reserved
                </div>
            </div>
        </footer>
    );
};

export default Footer;
