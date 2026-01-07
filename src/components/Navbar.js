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

    // ===== EASY TWEAKS (sizes) =====
    const NAV_TEXT = "text-[16px] md:text-[15px]";
    const DROPDOWN_WIDE = "w-[260px]";
    const DROPDOWN_MED = "w-[240px]";
    const DROPDOWN_NARROW = "w-[230px]";
    const DROPDOWN_ITEM = "px-4 py-2.5"; // smaller than before
    // ===============================

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

    const dropdownItem = `block ${DROPDOWN_ITEM} text-sm font-medium text-gray-900 hover:text-green-700 hover:bg-gray-50 transition`;

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
                "w-full z-50",
                isHome ? "absolute top-0 left-0" : "sticky top-0",
                isSolid
                    ? "bg-white/95 backdrop-blur border-b border-gray-200"
                    : "bg-transparent",
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
                                <Link to="/services#curtain" className={dropdownItem}>
                                    Curtain Side Services
                                </Link>
                                <Link to="/services#mechanical" className={dropdownItem}>
                                    Mechanical Trailer Services
                                </Link>
                                <Link to="/services#shipping" className={dropdownItem}>
                                    Shipping (Curtains & Parts)
                                </Link>
                            </Panel>
                        </div>
                    </div>

                    <div className="relative group">
                        <NavLink to="/products" className={linkDesktop}>
                            Products
                        </NavLink>
                        <div className={dropdownWrap}>
                            <Panel widthClass={DROPDOWN_MED}>
                                <Link to="/products" className={dropdownItem}>
                                    View All Parts
                                </Link>
                                <Link to="/products#hardware" className={dropdownItem}>
                                    Curtain Hardware
                                </Link>
                                <Link to="/products#tracks" className={dropdownItem}>
                                    Rails & Tracks
                                </Link>
                                <Link to="/products#buckles" className={dropdownItem}>
                                    Buckles / Straps / Hooks
                                </Link>
                            </Panel>
                        </div>
                    </div>

                    <div className="relative group">
                        <NavLink to="/shipping" className={linkDesktop}>
                            Shipping
                        </NavLink>
                        <div className={dropdownWrap}>
                            <Panel widthClass={DROPDOWN_NARROW}>
                                <Link to="/shipping#curtains" className={dropdownItem}>
                                    Curtain Shipping
                                </Link>
                                <Link to="/shipping#parts" className={dropdownItem}>
                                    Parts Shipping
                                </Link>
                                <Link to="/shipping#quote" className={dropdownItem}>
                                    Request Shipping Quote
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
                        "md:hidden inline-flex items-center justify-center w-11 h-11 rounded-lg",
                        isSolid
                            ? "border border-gray-200 text-gray-900"
                            : "border border-white/30 text-white",
                    ].join(" ")}
                    onClick={() => setMenuOpen((v) => !v)}
                    aria-label="Toggle menu"
                >
                    <span className="text-lg">{menuOpen ? "✕" : "☰"}</span>
                </button>
            </div>

            {menuOpen && (
                <div className="md:hidden border-t border-white/10 bg-white">
                    <div className="px-6 py-5 flex flex-col gap-3">
                        <NavLink to="/" className="text-gray-900 font-semibold text-[16px]" end>
                            Home
                        </NavLink>

                        <NavLink to="/services" className="text-gray-900 font-semibold text-[16px]">
                            Services
                        </NavLink>
                        <div className="pl-3 flex flex-col gap-2 text-sm">
                            <Link to="/services#curtain" className="text-gray-700 hover:text-green-700">
                                Curtain Side Services
                            </Link>
                            <Link to="/services#mechanical" className="text-gray-700 hover:text-green-700">
                                Mechanical Trailer Services
                            </Link>
                            <Link to="/services#shipping" className="text-gray-700 hover:text-green-700">
                                Shipping
                            </Link>
                        </div>

                        <NavLink to="/products" className="text-gray-900 font-semibold text-[16px]">
                            Products
                        </NavLink>
                        <div className="pl-3 flex flex-col gap-2 text-sm">
                            <Link to="/products" className="text-gray-700 hover:text-green-700">
                                View All Parts
                            </Link>
                            <Link to="/products#hardware" className="text-gray-700 hover:text-green-700">
                                Curtain Hardware
                            </Link>
                            <Link to="/products#tracks" className="text-gray-700 hover:text-green-700">
                                Rails & Tracks
                            </Link>
                            <Link to="/products#buckles" className="text-gray-700 hover:text-green-700">
                                Buckles / Straps / Hooks
                            </Link>
                        </div>

                        <NavLink to="/shipping" className="text-gray-900 font-semibold text-[16px]">
                            Shipping
                        </NavLink>
                        <div className="pl-3 flex flex-col gap-2 text-sm">
                            <Link to="/shipping#curtains" className="text-gray-700 hover:text-green-700">
                                Curtain Shipping
                            </Link>
                            <Link to="/shipping#parts" className="text-gray-700 hover:text-green-700">
                                Parts Shipping
                            </Link>
                            <Link to="/shipping#quote" className="text-gray-700 hover:text-green-700">
                                Request Shipping Quote
                            </Link>
                        </div>

                        <NavLink to="/contact" className="text-gray-900 font-semibold text-[16px]">
                            Contact
                        </NavLink>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Navbar;
