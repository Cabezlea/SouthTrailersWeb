// src/components/Navbar.js
import { useEffect, useMemo, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

const Navbar = () => {
    const { pathname } = useLocation();
    const isHome = pathname === "/";

    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    const isSolid = useMemo(() => !isHome || scrolled, [isHome, scrolled]);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 12);
        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    useEffect(() => {
        setMenuOpen(false);
    }, [pathname]);

    const NAV_TEXT = "text-[16px] md:text-[15px]";
    const DROPDOWN_WIDE = "w-[350px]";
    const DROPDOWN_ITEM = "px-4 py-3";

    const linkBase = `relative ${NAV_TEXT} font-semibold tracking-tight transition transform`;

    const linkDesktop = ({ isActive }) =>
        [
            linkBase,
            "px-1 py-2",
            isSolid
                ? isActive
                    ? "text-green-600"
                    : "text-gray-900 hover:text-green-600"
                : isActive
                    ? "text-green-300"
                    : "text-white/90 hover:text-white",
            "hover:-translate-y-[1px]",
            "after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:transition-all after:duration-200",
            isSolid
                ? "after:bg-green-600 hover:after:w-full"
                : "after:bg-white/80 hover:after:w-full",
        ].join(" ");

    const dropdownItem =
        `block ${DROPDOWN_ITEM} text-sm font-medium text-gray-900 hover:text-green-700 hover:bg-gray-50 transition`;

    const dropdownWrap =
        "absolute left-1/2 -translate-x-1/2 top-full pt-3 opacity-0 pointer-events-none translate-y-1 group-hover:opacity-100 group-hover:pointer-events-auto group-hover:translate-y-0 transition";

    const Panel = ({ widthClass, children }) => (
        <div
            className={`${widthClass} max-w-[calc(100vw-2rem)] rounded-xl border border-gray-200 bg-white shadow-xl overflow-hidden`}
        >
            {children}
        </div>
    );

    return (
        <header
            className={[
                "fixed top-0 left-0 w-full z-50",
                isHome
                    ? scrolled
                        ? "bg-black/35 backdrop-blur border-b border-white/10"
                        : "bg-transparent"
                    : "bg-white/95 backdrop-blur border-b border-gray-200",
            ].join(" ")}
        >
            <div className="w-full px-5 sm:px-8 xl:px-14 h-20 flex items-center justify-between">
                <Link to="/" className="flex items-center shrink-0">
                    <div className="h-14 md:h-16 w-[260px] sm:w-[280px] overflow-hidden flex items-center">
                        <img
                            src="/images/Banners/South_Trailers_CMYK.png"
                            alt="South Trailers"
                            className="h-full w-auto object-contain origin-left scale-[2.35] -translate-y-0.5"
                        />
                    </div>
                </Link>

                <nav className="hidden md:flex items-center gap-9">
                    <NavLink to="/" className={linkDesktop} end>
                        Home
                    </NavLink>

                    <div className="relative group">
                        <NavLink to="/services" className={linkDesktop}>
                            Services
                        </NavLink>

                        <div className={dropdownWrap}>
                            <Panel widthClass={DROPDOWN_WIDE}>
                                <Link
                                    to="/services/trailer-repair-fleet-maintenance"
                                    className={dropdownItem}
                                >
                                    Trailer Repair & Fleet Maintenance
                                </Link>

                                <Link
                                    to="/services/mobile-fleet-service"
                                    className={dropdownItem}
                                >
                                    Mobile Fleet Service
                                </Link>

                                <Link
                                    to="/services/in-shop-trailer-service"
                                    className={dropdownItem}
                                >
                                    In-Shop Trailer Service
                                </Link>

                                <Link
                                    to="/services/dot-pm-programs"
                                    className={dropdownItem}
                                >
                                    DOT & PM Inspections
                                </Link>

                                <Link
                                    to="/services/roadside-assistance"
                                    className={dropdownItem}
                                >
                                    Roadside Assistance
                                </Link>

                                <Link
                                    to="/services/curtain-side-services"
                                    className={dropdownItem}
                                >
                                    Side-Curtain Repair & Manufacturing
                                </Link>
                            </Panel>
                        </div>
                    </div>

                    <NavLink to="/contact" className={linkDesktop}>
                        Contact
                    </NavLink>
                </nav>

                <button
                    className={[
                        "md:hidden inline-flex items-center justify-center w-11 h-11 rounded-lg transition",
                        isSolid
                            ? "border border-gray-200 text-gray-900 bg-white/80"
                            : "border border-white/30 text-white bg-white/10",
                    ].join(" ")}
                    onClick={() => setMenuOpen((v) => !v)}
                    aria-label="Toggle menu"
                >
                    <span className="text-2xl leading-none">{menuOpen ? "×" : "☰"}</span>
                </button>
            </div>

            {menuOpen && (
                <div className="md:hidden absolute left-0 right-0 top-full bg-white border-t border-gray-200 shadow-2xl max-h-[calc(100svh-5rem)] overflow-y-auto">
                    <div className="px-6 py-6 flex flex-col gap-5">
                        <NavLink
                            to="/"
                            className="text-slate-900 font-extrabold text-xl leading-tight"
                            end
                        >
                            Home
                        </NavLink>

                        <div>
                            <NavLink
                                to="/services"
                                className="text-slate-900 font-extrabold text-xl leading-tight"
                            >
                                Services
                            </NavLink>

                            <div className="mt-4 pl-4 border-l border-slate-200 flex flex-col gap-3">
                                <Link
                                    to="/services/trailer-repair-fleet-maintenance"
                                    className="text-slate-700 hover:text-green-700 text-[1rem] leading-snug"
                                >
                                    Trailer Repair & Fleet Maintenance
                                </Link>

                                <Link
                                    to="/services/mobile-fleet-service"
                                    className="text-slate-700 hover:text-green-700 text-[1rem] leading-snug"
                                >
                                    Mobile Fleet Service
                                </Link>

                                <Link
                                    to="/services/in-shop-trailer-service"
                                    className="text-slate-700 hover:text-green-700 text-[1rem] leading-snug"
                                >
                                    In-Shop Trailer Service
                                </Link>

                                <Link
                                    to="/services/dot-pm-programs"
                                    className="text-slate-700 hover:text-green-700 text-[1rem] leading-snug"
                                >
                                    DOT & PM Inspections
                                </Link>

                                <Link
                                    to="/services/roadside-assistance"
                                    className="text-slate-700 hover:text-green-700 text-[1rem] leading-snug"
                                >
                                    Roadside Assistance
                                </Link>

                                <Link
                                    to="/services/curtain-side-services"
                                    className="text-slate-700 hover:text-green-700 text-[1rem] leading-snug"
                                >
                                    Side-Curtain Repair & Manufacturing
                                </Link>
                            </div>
                        </div>

                        <NavLink
                            to="/contact"
                            className="text-slate-900 font-extrabold text-xl leading-tight"
                        >
                            Contact
                        </NavLink>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Navbar;
