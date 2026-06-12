// src/pages/Contact.js
import { Link } from "react-router-dom";
import { useMemo, useRef, useState, useCallback } from "react";

const Field = ({ label, required, right, error, children }) => {
    return (
        <div className="block">
            <div className="flex items-end justify-between gap-3">
                <span className="text-sm font-semibold text-slate-900">
                    {label} {required ? <span className="text-green-700">*</span> : null}
                </span>
                {right ? <span className="text-xs text-slate-500">{right}</span> : null}
            </div>

            <div className="mt-2">{children}</div>

            {error ? <p className="mt-2 text-xs font-semibold text-red-600">{error}</p> : null}
        </div>
    );
};

const Contact = () => {
    const PAGE_CONTAINER = "max-w-7xl mx-auto px-5 sm:px-8 xl:px-14";

    const cardBase = "rounded-2xl border border-slate-200 bg-white shadow-sm";
    const inputBase =
        "w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-900 placeholder:text-slate-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500/40 focus:border-green-500/40";
    const selectBase =
        "w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-900 shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500/40 focus:border-green-500/40";

    const contact = useMemo(
        () => ({
            phoneDisplay: "(936) 777-9615",
            phoneHref: "tel:+19367779615",
            emailDisplay: "Leandro.cabezas@southtrailers.com",
            emailHref: "mailto:Leandro.cabezas@southtrailers.com",
            baseTitle: "Houston-based, serving fleets across Texas",
            baseLine: "Mobile service available 24/7 • in-shop repair subject to shop hours • inbound trailers welcome",
            hours: [
                { label: "Mon–Fri", value: "8:00 AM – 5:00 PM" },
                { label: "Sat", value: "8:00 AM – 2:00 PM" },
                { label: "Sun", value: "Closed" },
            ],
        }),
        []
    );

    const [intent, setIntent] = useState("fleet"); // fleet | mobile | general
    const [toast, setToast] = useState(null);
    const toastTimerRef = useRef(null);

    const [errors, setErrors] = useState({});

    const [form, setForm] = useState({
        name: "",
        company: "",
        email: "",
        phone: "",
        service: "Trailer Repair & Fleet Maintenance",
        urgency: "Standard",
        message: "",
    });

    const formTopRef = useRef(null);

    const showToast = useCallback((msg) => {
        setToast(msg);
        if (toastTimerRef.current) window.clearTimeout(toastTimerRef.current);
        toastTimerRef.current = window.setTimeout(() => setToast(null), 2600);
    }, []);

    const onChange = useCallback((e) => {
        const { name, value } = e.target;

        setForm((p) => ({ ...p, [name]: value }));

        setErrors((p) => {
            if (!p[name]) return p;
            const copy = { ...p };
            delete copy[name];
            return copy;
        });
    }, []);

    const setIntentOnly = useCallback((next) => {
        setIntent(next);

        setForm((p) => {
            const autoUrgent = "Urgent (same / next day)";
            const leavingMobile = p.urgency === autoUrgent && next !== "mobile";

            if (next === "mobile") {
                return {
                    ...p,
                    service: "Mobile Fleet Service",
                    urgency: autoUrgent,
                };
            }

            if (next === "fleet") {
                return {
                    ...p,
                    service: "Trailer Repair & Fleet Maintenance",
                    urgency: leavingMobile ? "Standard" : p.urgency,
                };
            }

            if (next === "general") {
                return {
                    ...p,
                    urgency: leavingMobile ? "Standard" : p.urgency,
                };
            }

            return p;
        });
    }, []);

    const scrollToFormTop = useCallback(() => {
        formTopRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, []);

    const heroQuote = useCallback(() => {
        setIntentOnly("fleet");
        scrollToFormTop();
    }, [setIntentOnly, scrollToFormTop]);

    const validate = useCallback(() => {
        const e = {};
        if (!form.name.trim()) e.name = "Required";
        if (!form.email.trim()) e.email = "Required";
        if (!form.service.trim()) e.service = "Required";
        if (!form.urgency.trim()) e.urgency = "Required";
        return e;
    }, [form]);

    const onSubmit = useCallback(
        (ev) => {
            ev.preventDefault();
            const e = validate();
            setErrors(e);

            if (Object.keys(e).length) {
                showToast("Fix the required fields.");
                return;
            }

            showToast("Saved. Delivery will be wired at the end.");
        },
        [validate, showToast]
    );

    const intentBtn = (key) =>
        [
            "w-full text-left rounded-2xl border px-5 py-4 transition shadow-sm",
            "min-h-[96px]",
            key === intent
                ? "border-slate-900 bg-slate-900 text-white"
                : "border-slate-200 bg-white hover:bg-slate-50 text-slate-900",
        ].join(" ");

    const formTitle =
        intent === "mobile"
            ? "Schedule mobile service"
            : intent === "general"
                ? "Send a message"
                : "Request fleet service";

    const formSub =
        intent === "mobile"
            ? "Send the trailer issue, location, and unit details so we can coordinate service."
            : intent === "general"
                ? "Ask anything. We’ll respond with direction, options, and next steps."
                : "Share the trailer issue and we’ll respond with pricing, scheduling, or the next step.";

    return (
        <main className="bg-white">
            {/* HERO */}
            <section className="relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-slate-50 via-white to-white" />
                <div className="pointer-events-none absolute inset-0">
                    <div className="absolute -top-40 left-[-140px] h-[520px] w-[520px] rounded-full bg-green-500/10 blur-3xl" />
                    <div className="absolute -top-48 right-[-180px] h-[520px] w-[520px] rounded-full bg-slate-900/10 blur-3xl" />
                </div>

                <div className={`${PAGE_CONTAINER} relative pt-14 pb-10`}>
                    <p className="inline-flex items-center gap-2 text-sm font-semibold text-green-700">
                        <span className="h-2 w-2 rounded-full bg-green-600" />
                        Fleet service • Mobile support • DOT / PM • Roadside
                    </p>

                    <div className="mt-3">
                        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900">
                            Contact South Trailers
                        </h1>
                        <p className="mt-3 max-w-2xl text-slate-600 text-base sm:text-lg">
                            Request fleet service, schedule mobile support, or send a general question.
                        </p>

                        <div className="mt-6 flex flex-col sm:flex-row gap-3">
                            <button
                                type="button"
                                onClick={heroQuote}
                                className="inline-flex justify-center items-center px-6 py-3 rounded-xl bg-green-600 text-white font-semibold hover:bg-green-700 transition shadow-sm"
                            >
                                Request Fleet Service
                            </button>

                            <a
                                href={contact.phoneHref}
                                className="inline-flex justify-center items-center px-6 py-3 rounded-xl bg-slate-900 text-white font-semibold hover:bg-slate-800 transition shadow-sm"
                            >
                                Call Now
                            </a>
                        </div>

                        {toast && (
                            <div className="mt-6 max-w-2xl rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-amber-900 text-sm font-semibold">
                                {toast}
                            </div>
                        )}
                    </div>

                    <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-4">
                        <button
                            type="button"
                            onClick={() => {
                                setIntentOnly("fleet");
                                scrollToFormTop();
                            }}
                            className={intentBtn("fleet")}
                        >
                            <p className="text-sm font-extrabold">Request fleet service</p>
                            <p className={`mt-1 text-sm ${intent === "fleet" ? "text-white/80" : "text-slate-600"}`}>
                                Trailer repair, PM, DOT, suspension, brakes, lighting.
                            </p>
                        </button>

                        <button
                            type="button"
                            onClick={() => {
                                setIntentOnly("mobile");
                                scrollToFormTop();
                            }}
                            className={intentBtn("mobile")}
                        >
                            <p className="text-sm font-extrabold">Schedule mobile service</p>
                            <p className={`mt-1 text-sm ${intent === "mobile" ? "text-white/80" : "text-slate-600"}`}>
                                Yard, warehouse, terminal, or field service.
                            </p>
                        </button>

                        <button
                            type="button"
                            onClick={() => {
                                setIntentOnly("general");
                                scrollToFormTop();
                            }}
                            className={intentBtn("general")}
                        >
                            <p className="text-sm font-extrabold">General question</p>
                            <p className={`mt-1 text-sm ${intent === "general" ? "text-white/80" : "text-slate-600"}`}>
                                Ask about service options, timing, or next steps.
                            </p>
                        </button>
                    </div>
                </div>
            </section>

            {/* MAIN */}
            <section className="relative overflow-hidden">
                <div className="pointer-events-none absolute inset-0">
                    <div className="absolute -bottom-48 left-[-160px] h-[520px] w-[520px] rounded-full bg-green-500/10 blur-3xl" />
                    <div className="absolute -bottom-56 right-[-220px] h-[520px] w-[520px] rounded-full bg-slate-900/10 blur-3xl" />
                </div>

                <div className={`${PAGE_CONTAINER} relative pb-10`}>
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
                        {/* LEFT */}
                        <div className="lg:col-span-5 h-full">
                            <div className={`${cardBase} h-full p-6 sm:p-7 flex flex-col`}>
                                <p className="text-lg font-extrabold text-slate-900">Direct contact</p>

                                <div className="mt-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <a
                                        href={contact.phoneHref}
                                        className="rounded-xl border border-slate-200 bg-white p-4 hover:bg-slate-50 transition shadow-sm"
                                    >
                                        <p className="text-xs font-semibold text-slate-500">Phone</p>
                                        <p className="mt-1 text-base font-extrabold text-slate-900">{contact.phoneDisplay}</p>
                                        <p className="mt-1 text-xs text-slate-500">Tap to call</p>
                                    </a>

                                    <a
                                        href={contact.emailHref}
                                        className="rounded-xl border border-slate-200 bg-white p-4 hover:bg-slate-50 transition shadow-sm min-w-0"
                                        title={contact.emailDisplay}
                                    >
                                        <p className="text-xs font-semibold text-slate-500">Email</p>
                                        <p className="mt-1 text-base font-extrabold text-slate-900 break-all">
                                            {contact.emailDisplay}
                                        </p>
                                        <p className="mt-1 text-xs text-slate-500">Tap to email</p>
                                    </a>
                                </div>

                                <div className="mt-6 rounded-xl border border-slate-200 bg-white p-4">
                                    <p className="text-xs font-semibold text-slate-500">{contact.baseTitle}</p>
                                    <p className="mt-1 text-sm text-slate-600">{contact.baseLine}</p>
                                </div>

                                <div className="mt-9">
                                    <p className="text-sm font-extrabold text-slate-900">Hours</p>
                                    <div className="mt-3 rounded-xl border border-slate-200 bg-white overflow-hidden">
                                        <div className="divide-y divide-slate-200">
                                            {contact.hours.map((h) => (
                                                <div key={h.label} className="flex items-center justify-between px-4 py-3">
                                                    <span className="text-sm font-semibold text-slate-900">{h.label}</span>
                                                    <span className="text-sm text-slate-600">{h.value}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-auto pt-9">
                                    <a
                                        href={contact.phoneHref}
                                        className="inline-flex w-full justify-center items-center px-6 py-3 rounded-xl bg-green-600 text-white font-semibold hover:bg-green-700 transition shadow-sm"
                                    >
                                        Call Now
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* RIGHT */}
                        <div className="lg:col-span-7 h-full">
                            <div ref={formTopRef} className="scroll-mt-28 md:scroll-mt-32" />

                            <div className={`${cardBase} h-full`}>
                                <div className="p-6 sm:p-8">
                                    <div>
                                        <p className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900">{formTitle}</p>
                                        <p className="mt-2 text-slate-600">{formSub}</p>
                                    </div>

                                    <form onSubmit={onSubmit} className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-5">
                                        <Field label="Full name" required error={errors.name}>
                                            <input
                                                className={inputBase}
                                                name="name"
                                                value={form.name}
                                                onChange={onChange}
                                                placeholder="John Smith"
                                            />
                                        </Field>

                                        <Field label="Company" error={errors.company}>
                                            <input
                                                className={inputBase}
                                                name="company"
                                                value={form.company}
                                                onChange={onChange}
                                                placeholder="Fleet / Carrier / Shop"
                                            />
                                        </Field>

                                        <Field label="Email" required error={errors.email}>
                                            <input
                                                className={inputBase}
                                                name="email"
                                                type="email"
                                                value={form.email}
                                                onChange={onChange}
                                                placeholder="name@company.com"
                                            />
                                        </Field>

                                        <Field label="Phone" error={errors.phone}>
                                            <input
                                                className={inputBase}
                                                name="phone"
                                                value={form.phone}
                                                onChange={onChange}
                                                placeholder="(xxx) xxx-xxxx"
                                            />
                                        </Field>

                                        <Field label="What do you need?" required error={errors.service}>
                                            <select className={selectBase} name="service" value={form.service} onChange={onChange}>
                                                <option>Trailer Repair & Fleet Maintenance</option>
                                                <option>Mobile Fleet Service</option>
                                                <option>In-Shop Trailer Service</option>
                                                <option>DOT / PM Inspection</option>
                                                <option>Roadside Assistance</option>
                                                <option>Side-Curtain Repair & Manufacturing</option>
                                                <option>Other</option>
                                            </select>
                                        </Field>

                                        <Field label="Urgency" required error={errors.urgency}>
                                            <select className={selectBase} name="urgency" value={form.urgency} onChange={onChange}>
                                                <option>Standard</option>
                                                <option>Urgent (same / next day)</option>
                                                <option>Scheduled (this week)</option>
                                                <option>Scheduled (later)</option>
                                            </select>
                                        </Field>

                                        <div className="sm:col-span-2">
                                            <Field label="Message" error={errors.message}>
                                                <textarea
                                                    className={`${inputBase} min-h-[150px] resize-y`}
                                                    name="message"
                                                    value={form.message}
                                                    onChange={onChange}
                                                    placeholder="Example: Unit #204 has lighting issues and airbag damage. Need mobile service at our yard in Houston. Photos available."
                                                />
                                            </Field>

                                            <div className="mt-4 rounded-xl border border-slate-200 bg-white p-4">
                                                <p className="text-xs font-semibold text-slate-500">Photos / details</p>
                                                <p className="mt-1 text-sm text-slate-600">
                                                    Helpful info: unit number, trailer issue, location, urgency, and photos of visible damage.
                                                </p>
                                            </div>
                                        </div>

                                        <div className="sm:col-span-2 mt-2 flex flex-col sm:flex-row gap-3">
                                            <button
                                                type="submit"
                                                className="flex-1 inline-flex justify-center items-center px-6 py-3 rounded-xl bg-green-600 text-white font-semibold hover:bg-green-700 transition shadow-sm"
                                            >
                                                Submit
                                            </button>

                                            <a
                                                href={contact.phoneHref}
                                                className="flex-1 inline-flex justify-center items-center px-6 py-3 rounded-xl bg-slate-900 text-white font-semibold hover:bg-slate-800 transition shadow-sm"
                                            >
                                                Call Instead
                                            </a>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* BOTTOM combined */}
                <div className={`${PAGE_CONTAINER} pb-16`}>
                    <div className={`${cardBase} p-6`}>
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                            <div className="lg:col-span-5">
                                <p className="text-lg font-extrabold text-slate-900">Quick answers</p>
                                <div className="mt-4 space-y-4">
                                    <div className="rounded-xl border border-slate-200 bg-white p-4">
                                        <p className="text-sm font-bold text-slate-900">Do you offer mobile fleet service?</p>
                                        <p className="mt-1 text-sm text-slate-600">
                                            Yes — we can service trailers at yards, terminals, warehouses, and customer facilities.
                                        </p>
                                    </div>
                                    <div className="rounded-xl border border-slate-200 bg-white p-4">
                                        <p className="text-sm font-bold text-slate-900">Do you handle DOT and PM work?</p>
                                        <p className="mt-1 text-sm text-slate-600">
                                            Yes — DOT findings, PM inspections, and compliance-related repairs are part of the service path.
                                        </p>
                                    </div>
                                    <div className="rounded-xl border border-slate-200 bg-white p-4">
                                        <p className="text-sm font-bold text-slate-900">Do you handle side-curtain
                                            systems?</p>
                                        <p className="mt-1 text-sm text-slate-600">
                                            Yes — repair, manufacturing, installation, rollers, rails, straps, and
                                            hardware are part of our service line.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="lg:col-span-7">
                                <p className="text-lg font-extrabold text-slate-900">What you get</p>
                                <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
                                    <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 h-full">
                                        <p className="text-sm font-extrabold text-slate-900">Fleet uptime focus</p>
                                        <p className="mt-1 text-sm text-slate-600">
                                            Repair and maintenance support built around keeping trailers moving.
                                        </p>
                                    </div>
                                    <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 h-full">
                                        <p className="text-sm font-extrabold text-slate-900">Mobile + in-shop</p>
                                        <p className="mt-1 text-sm text-slate-600">
                                            Service at your location or scheduled shop work when the job requires it.
                                        </p>
                                    </div>
                                    <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 h-full">
                                        <p className="text-sm font-extrabold text-slate-900">Recurring support</p>
                                        <p className="mt-1 text-sm text-slate-600">
                                            PM schedules, DOT cycles, mobile visits, and preferred vendor support.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Contact;
