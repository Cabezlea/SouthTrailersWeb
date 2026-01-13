import { useMemo, useRef, useState } from "react";
import { Link } from "react-router-dom";

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
            emailDisplay: "sales@southtrailers.com",
            emailHref: "mailto:sales@southtrailers.com",
            baseTitle: "Houston-based, serving nationwide",
            baseLine: "On-site service available • inbound trailers welcome from anywhere",
            hours: [
                { label: "Mon–Fri", value: "8:00 AM – 6:00 PM" },
                { label: "Sat", value: "9:00 AM – 2:00 PM" },
                { label: "Sun", value: "Closed" },
            ],
        }),
        []
    );

    const [intent, setIntent] = useState("quote"); // quote | talk | general
    const [toast, setToast] = useState(null);
    const [errors, setErrors] = useState({});

    const [form, setForm] = useState({
        name: "",
        company: "",
        email: "",
        phone: "",
        service: "Curtain Side Services",
        urgency: "Standard",
        message: "",
    });

    const formTopRef = useRef(null);

    const onChange = (e) => {
        const { name, value } = e.target;
        setForm((p) => ({ ...p, [name]: value }));
        setErrors((p) => {
            if (!p[name]) return p;
            const copy = { ...p };
            delete copy[name];
            return copy;
        });
    };

    const showToast = (msg) => {
        setToast(msg);
        window.clearTimeout(showToast._t);
        showToast._t = window.setTimeout(() => setToast(null), 2600);
    };

    const setIntentOnly = (next) => {
        setIntent(next);
        if (next === "talk") setForm((p) => ({ ...p, urgency: "Urgent (same / next day)" }));
        if (next === "general") setForm((p) => ({ ...p, urgency: "Standard" }));
    };

    const scrollToFormTop = () => {
        formTopRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    };

    const heroQuote = () => {
        setIntentOnly("quote");
        scrollToFormTop();
    };

    const validate = () => {
        const e = {};
        if (!form.name.trim()) e.name = "Required";
        if (!form.email.trim()) e.email = "Required";
        if (!form.service.trim()) e.service = "Required";
        if (!form.urgency.trim()) e.urgency = "Required";
        return e;
    };

    const onSubmit = (ev) => {
        ev.preventDefault();
        const e = validate();
        setErrors(e);
        if (Object.keys(e).length) {
            showToast("Fix the required fields.");
            return;
        }
        showToast("Saved. Delivery will be wired at the end.");
    };

    const Field = ({ name, label, required, right, children }) => (
        <label className="block">
            <div className="flex items-end justify-between gap-3">
        <span className="text-sm font-semibold text-slate-900">
          {label} {required ? <span className="text-green-700">*</span> : null}
        </span>
                {right ? <span className="text-xs text-slate-500">{right}</span> : null}
            </div>
            <div className="mt-2">{children}</div>
            {errors[name] ? <p className="mt-2 text-xs font-semibold text-red-600">{errors[name]}</p> : null}
        </label>
    );

    const intentBtn = (key) =>
        [
            "w-full text-left rounded-2xl border px-5 py-4 transition shadow-sm",
            "min-h-[96px]",
            key === intent
                ? "border-slate-900 bg-slate-900 text-white"
                : "border-slate-200 bg-white hover:bg-slate-50 text-slate-900",
        ].join(" ");

    const formTitle = intent === "general" ? "Send a message" : "Request a quote";
    const formSub =
        intent === "talk"
            ? "If you want it fast: call — we’ll coordinate immediately."
            : intent === "general"
                ? "Ask anything. We’ll respond with direction, options, and next steps."
                : "Share details and we’ll respond with pricing and scheduling options.";

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
                        Quotes • On-site service • Parts shipping
                    </p>

                    {/* REMOVE the top-right hero card: keep hero clean */}
                    <div className="mt-3">
                        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900">
                            Contact South Trailers
                        </h1>
                        <p className="mt-3 max-w-2xl text-slate-600 text-base sm:text-lg">
                            Choose how you want to connect — quote request, quick call, or a general question.
                        </p>

                        <div className="mt-6 flex flex-col sm:flex-row gap-3">
                            <button
                                type="button"
                                onClick={heroQuote}
                                className="inline-flex justify-center items-center px-6 py-3 rounded-xl bg-green-600 text-white font-semibold hover:bg-green-700 transition shadow-sm"
                            >
                                Request a Quote
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
                        <button type="button" onClick={() => setIntentOnly("quote")} className={intentBtn("quote")}>
                            <p className="text-sm font-extrabold">Request a quote</p>
                            <p className={`mt-1 text-sm ${intent === "quote" ? "text-white/80" : "text-slate-600"}`}>
                                Repairs, installs, curtains, parts, shipping.
                            </p>
                        </button>

                        <button type="button" onClick={() => setIntentOnly("talk")} className={intentBtn("talk")}>
                            <p className="text-sm font-extrabold">Talk to us</p>
                            <p className={`mt-1 text-sm ${intent === "talk" ? "text-white/80" : "text-slate-600"}`}>
                                Quick answer or scheduling.
                            </p>
                        </button>

                        <button type="button" onClick={() => setIntentOnly("general")} className={intentBtn("general")}>
                            <p className="text-sm font-extrabold">General question</p>
                            <p className={`mt-1 text-sm ${intent === "general" ? "text-white/80" : "text-slate-600"}`}>
                                You’re exploring or learning what we do.
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
                    {/* KEY FIX: items-stretch + h-full on columns/cards so bottoms align */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
                        {/* LEFT: Direct contact (h-full) */}
                        <div className="lg:col-span-5 h-full">
                            <div className={`${cardBase} h-full p-6 flex flex-col`}>
                                <p className="text-lg font-extrabold text-slate-900">Direct contact</p>
                                <p className="mt-2 text-slate-600">
                                    {intent === "talk"
                                        ? "Call now for fast coordination."
                                        : intent === "general"
                                            ? "Send a message and we’ll point you in the right direction."
                                            : "Send details and we’ll respond with pricing + next steps."}
                                </p>

                                <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
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
                                        <p className="mt-1 text-base font-extrabold text-slate-900 truncate">{contact.emailDisplay}</p>
                                        <p className="mt-1 text-xs text-slate-500">Tap to email</p>
                                    </a>
                                </div>

                                <div className="mt-5 rounded-xl border border-slate-200 bg-white p-4">
                                    <p className="text-xs font-semibold text-slate-500">{contact.baseTitle}</p>
                                    <p className="mt-1 text-sm text-slate-600">{contact.baseLine}</p>
                                </div>

                                <div className="mt-6">
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

                                    <div className="mt-4 flex gap-3">
                                        <a
                                            href={contact.phoneHref}
                                            className="flex-1 inline-flex justify-center items-center px-5 py-3 rounded-xl bg-green-600 text-white font-semibold hover:bg-green-700 transition"
                                        >
                                            Call
                                        </a>
                                        <Link
                                            to="/products"
                                            className="flex-1 inline-flex justify-center items-center px-5 py-3 rounded-xl bg-white text-slate-900 font-semibold border border-slate-200 hover:bg-slate-50 transition"
                                        >
                                            Parts
                                        </Link>
                                    </div>
                                </div>

                                {/* spacer to help align when form grows */}
                                <div className="mt-auto" />
                            </div>
                        </div>

                        {/* RIGHT: form (h-full) */}
                        <div className="lg:col-span-7 h-full">
                            <div ref={formTopRef} className="scroll-mt-28 md:scroll-mt-32" />

                            <div className={`${cardBase} h-full`}>
                                <div className="p-6 sm:p-8">
                                    <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
                                        <div>
                                            <p className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900">{formTitle}</p>
                                            <p className="mt-2 text-slate-600">{formSub}</p>
                                        </div>

                                        <div className="rounded-xl border border-slate-200 bg-white px-4 py-3">
                                            <p className="text-xs font-semibold text-slate-500">Tip</p>
                                            <p className="text-sm font-bold text-slate-900">More details = faster quote.</p>
                                        </div>
                                    </div>

                                    <form onSubmit={onSubmit} className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-5">
                                        <Field name="name" label="Full name" required>
                                            <input className={inputBase} name="name" value={form.name} onChange={onChange} placeholder="John Smith" />
                                        </Field>

                                        <Field name="company" label="Company">
                                            <input className={inputBase} name="company" value={form.company} onChange={onChange} placeholder="Fleet / Carrier / Shop" />
                                        </Field>

                                        <Field name="email" label="Email" required>
                                            <input className={inputBase} name="email" type="email" value={form.email} onChange={onChange} placeholder="name@company.com" />
                                        </Field>

                                        <Field name="phone" label="Phone">
                                            <input className={inputBase} name="phone" value={form.phone} onChange={onChange} placeholder="(xxx) xxx-xxxx" />
                                        </Field>

                                        <Field name="service" label="What do you need?" required>
                                            <select className={selectBase} name="service" value={form.service} onChange={onChange}>
                                                <option>Curtain Side Services</option>
                                                <option>Mechanical Trailer Services</option>
                                                <option>Curtain / Parts Shipping</option>
                                                <option>Parts Only</option>
                                                <option>Other</option>
                                            </select>
                                        </Field>

                                        <Field name="urgency" label="Urgency" required>
                                            <select className={selectBase} name="urgency" value={form.urgency} onChange={onChange}>
                                                <option>Standard</option>
                                                <option>Urgent (same / next day)</option>
                                                <option>Scheduled (this week)</option>
                                                <option>Scheduled (later)</option>
                                            </select>
                                        </Field>

                                        <div className="sm:col-span-2">
                                            <Field name="message" label="Message" right="details + measurements help">
                        <textarea
                            className={`${inputBase} min-h-[150px] resize-y`}
                            name="message"
                            value={form.message}
                            onChange={onChange}
                            placeholder="Example: 48' curtain. Damage near rear. Rollers bind. Need parts + labor estimate."
                        />
                                            </Field>

                                            <div className="mt-4 rounded-xl border border-slate-200 bg-white p-4">
                                                <p className="text-xs font-semibold text-slate-500">Photos (optional)</p>
                                                <p className="mt-1 text-sm text-slate-600">
                                                    You can send photos by text/email. Upload gets added when delivery is wired.
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

                {/* BOTTOM combined card - tightened + balanced */}
                <div className={`${PAGE_CONTAINER} pb-16`}>
                    <div className={`${cardBase} p-6`}>
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                            <div className="lg:col-span-5">
                                <p className="text-lg font-extrabold text-slate-900">Quick answers</p>
                                <div className="mt-4 space-y-4">
                                    <div className="rounded-xl border border-slate-200 bg-white p-4">
                                        <p className="text-sm font-bold text-slate-900">Do you do on-site curtain repair?</p>
                                        <p className="mt-1 text-sm text-slate-600">Yes — depending on location and job scope.</p>
                                    </div>
                                    <div className="rounded-xl border border-slate-200 bg-white p-4">
                                        <p className="text-sm font-bold text-slate-900">Do you ship curtains and parts?</p>
                                        <p className="mt-1 text-sm text-slate-600">Yes — parts and curtain solutions can ship.</p>
                                    </div>
                                    <div className="rounded-xl border border-slate-200 bg-white p-4">
                                        <p className="text-sm font-bold text-slate-900">Can customers come from outside Houston?</p>
                                        <p className="mt-1 text-sm text-slate-600">Yes — customers can send trailers from anywhere.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="lg:col-span-7">
                                <p className="text-lg font-extrabold text-slate-900">What you get</p>
                                {/* Make these fill and align better */}
                                <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
                                    <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 h-full">
                                        <p className="text-sm font-extrabold text-slate-900">Fast turnaround</p>
                                        <p className="mt-1 text-sm text-slate-600">Shop + on-site work focused on uptime.</p>
                                    </div>
                                    <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 h-full">
                                        <p className="text-sm font-extrabold text-slate-900">Quality parts</p>
                                        <p className="mt-1 text-sm text-slate-600">Hardware, rails, rollers, straps, hooks.</p>
                                    </div>
                                    <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 h-full">
                                        <p className="text-sm font-extrabold text-slate-900">Clear quotes</p>
                                        <p className="mt-1 text-sm text-slate-600">Straight pricing + scheduling options.</p>
                                    </div>
                                </div>

                                {/* subtle note to avoid emptiness */}
                                <div className="mt-4 rounded-xl border border-slate-200 bg-white px-4 py-3">
                                    <p className="text-sm text-slate-600">
                                        Need a faster answer? Call us and we’ll guide you on measurements and what to send.
                                    </p>
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
