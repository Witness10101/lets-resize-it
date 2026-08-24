import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy | Let's Resize It",
  description:
    "Read the Privacy Policy for Let's Resize It. Learn how we handle image processing, website usage, cookies, analytics, data privacy, and your rights when using our online image tools.",
  keywords: [
    "Let's Resize It privacy policy",
    "image resizer privacy policy",
    "online image tools privacy",
    "image compression privacy",
    "image resizing privacy",
    "browser based image processing",
    "image converter privacy",
  ],
  alternates: {
    canonical: "/privacy",
  },
  openGraph: {
    title: "Privacy Policy | Let's Resize It",
    description:
      "Learn how Let's Resize It handles privacy, image processing, website usage, and user data.",
    url: "/privacy",
    siteName: "Let's Resize It",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Privacy Policy | Let's Resize It",
    description:
      "Learn how Let's Resize It handles privacy, image processing, website usage, and user data.",
  },
};

const sections = [
  {
    id: "introduction",
    number: "01",
    title: "Introduction",
  },
  {
    id: "information",
    number: "02",
    title: "Information We Collect",
  },
  {
    id: "image-processing",
    number: "03",
    title: "Image Processing",
  },
  {
    id: "how-we-use",
    number: "04",
    title: "How We Use Information",
  },
  {
    id: "cookies",
    number: "05",
    title: "Cookies & Similar Technologies",
  },
  {
    id: "third-party",
    number: "06",
    title: "Third-Party Services",
  },
  {
    id: "data-security",
    number: "07",
    title: "Data Security",
  },
  {
    id: "data-retention",
    number: "08",
    title: "Data Retention",
  },
  {
    id: "your-rights",
    number: "09",
    title: "Your Rights",
  },
  {
    id: "children",
    number: "10",
    title: "Children's Privacy",
  },
  {
    id: "changes",
    number: "11",
    title: "Changes to This Policy",
  },
  {
    id: "contact",
    number: "12",
    title: "Contact Us",
  },
];

export default function PrivacyPage() {
  const lastUpdated = "August 24, 2026";

  return (
    <>
      <Header />

      <main className="min-h-screen bg-white text-slate-900">
        {/* =====================================================
            HERO
        ====================================================== */}
        <section className="relative overflow-hidden border-b border-slate-200 bg-slate-50">
          {/* Decorative background */}
          <div
            className="pointer-events-none absolute inset-0"
            aria-hidden="true"
          >
            <div className="absolute -left-32 -top-32 h-80 w-80 rounded-full bg-blue-500/10 blur-3xl" />
            <div className="absolute -bottom-40 right-0 h-96 w-96 rounded-full bg-indigo-500/10 blur-3xl" />
          </div>

          <div className="relative mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
            {/* Breadcrumb */}
            <nav
              aria-label="Breadcrumb"
              className="mb-8 flex items-center gap-2 text-sm text-slate-500"
            >
              <Link
                href="/"
                className="transition-colors hover:text-blue-600"
              >
                Home
              </Link>

              <span aria-hidden="true">/</span>

              <span className="font-medium text-slate-700">
                Privacy Policy
              </span>
            </nav>

            <div className="max-w-4xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3 py-1.5 text-xs font-semibold text-blue-700">
                <span
                  className="h-1.5 w-1.5 rounded-full bg-blue-600"
                  aria-hidden="true"
                />
                Privacy &amp; Data Protection
              </div>

              <h1 className="mt-6 text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
                Privacy Policy
              </h1>

              <p className="mt-6 max-w-3xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
                Your privacy matters to us. This Privacy Policy
                explains how Let&apos;s Resize It handles information
                when you visit our website and use our online image
                resizing, compression, and conversion tools.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-3 text-sm">
                <span className="rounded-lg border border-slate-200 bg-white px-3 py-2 font-medium text-slate-600 shadow-sm">
                  Last updated: {lastUpdated}
                </span>

                <span className="rounded-lg border border-emerald-200 bg-emerald-50 px-3 py-2 font-medium text-emerald-700">
                  Privacy-first image tools
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            CONTENT AREA
        ====================================================== */}
        <section className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
          <div className="grid gap-10 lg:grid-cols-[260px_minmax(0,1fr)] lg:gap-16">
            {/* =================================================
                TABLE OF CONTENTS
            ================================================== */}
            <aside className="lg:sticky lg:top-28 lg:self-start">
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                <p className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  On this page
                </p>

                <nav className="mt-4 space-y-1" aria-label="Privacy policy sections">
                  {sections.map((section) => (
                    <a
                      key={section.id}
                      href={`#${section.id}`}
                      className="group flex items-start gap-3 rounded-lg px-2.5 py-2 text-sm text-slate-600 transition-colors hover:bg-white hover:text-blue-600"
                    >
                      <span className="mt-0.5 text-[10px] font-bold text-slate-400 group-hover:text-blue-500">
                        {section.number}
                      </span>

                      <span>{section.title}</span>
                    </a>
                  ))}
                </nav>
              </div>

              {/* Privacy note */}
              <div className="mt-4 rounded-2xl border border-blue-100 bg-blue-50/60 p-5">
                <div className="flex items-start gap-3">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-blue-600 text-white">
                    <svg
                      className="h-4 w-4"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" />
                      <path d="m9 12 2 2 4-4" />
                    </svg>
                  </span>

                  <div>
                    <p className="text-sm font-semibold text-slate-900">
                      Privacy by design
                    </p>

                    <p className="mt-1 text-xs leading-5 text-slate-600">
                      Our image tools are designed to make image
                      processing simple while minimizing unnecessary
                      handling of your files.
                    </p>
                  </div>
                </div>
              </div>
            </aside>

            {/* =================================================
                POLICY CONTENT
            ================================================== */}
            <article className="min-w-0 max-w-4xl">
              {/* Introduction */}
              <section
                id="introduction"
                className="scroll-mt-28 border-b border-slate-200 pb-10"
              >
                <SectionNumber number="01" />

                <h2 className="mt-3 text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl">
                  Introduction
                </h2>

                <div className="mt-5 space-y-4 text-sm leading-7 text-slate-600 sm:text-base">
                  <p>
                    Welcome to Let&apos;s Resize It. We provide online
                    image utilities that help you resize, compress,
                    and convert images for everyday digital needs.
                  </p>

                  <p>
                    This Privacy Policy describes the types of
                    information that may be collected when you use our
                    website, how that information may be used, and the
                    choices available to you.
                  </p>

                  <p>
                    By accessing or using Let&apos;s Resize It, you
                    acknowledge that you have read and understood this
                    Privacy Policy.
                  </p>
                </div>
              </section>

              {/* Information */}
              <section
                id="information"
                className="scroll-mt-28 border-b border-slate-200 py-10"
              >
                <SectionNumber number="02" />

                <h2 className="mt-3 text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl">
                  Information We Collect
                </h2>

                <div className="mt-5 space-y-4 text-sm leading-7 text-slate-600 sm:text-base">
                  <p>
                    The information collected through our website
                    depends on how you use the service.
                  </p>

                  <h3 className="pt-2 text-lg font-semibold text-slate-900">
                    Information you provide
                  </h3>

                  <p>
                    Some parts of the website may allow you to
                    voluntarily provide information, such as when you
                    contact us or communicate with us. We only use
                    information provided in those interactions for the
                    relevant purpose.
                  </p>

                  <h3 className="pt-2 text-lg font-semibold text-slate-900">
                    Technical information
                  </h3>

                  <p>
                    Like most websites, our infrastructure or service
                    providers may process limited technical information
                    needed to operate, secure, maintain, and improve
                    the website. This may include information such as
                    browser type, device information, approximate
                    usage information, IP address, referring pages, and
                    technical request data.
                  </p>

                  <p>
                    The exact information collected may depend on the
                    hosting, analytics, security, advertising, or other
                    services enabled on the website at a particular
                    time.
                  </p>
                </div>
              </section>

              {/* Image Processing */}
              <section
                id="image-processing"
                className="scroll-mt-28 border-b border-slate-200 py-10"
              >
                <SectionNumber number="03" />

                <h2 className="mt-3 text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl">
                  Image Processing
                </h2>

                <div className="mt-5 space-y-4 text-sm leading-7 text-slate-600 sm:text-base">
                  <p>
                    Let&apos;s Resize It is designed around convenient,
                    privacy-conscious image processing. Where a tool
                    performs processing directly in your browser, the
                    image can be processed locally on your device rather
                    than being uploaded to a remote server for
                    processing.
                  </p>

                  <div className="my-6 rounded-2xl border border-emerald-200 bg-emerald-50/70 p-5">
                    <div className="flex items-start gap-3">
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-emerald-600 text-white">
                        <svg
                          className="h-4 w-4"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          aria-hidden="true"
                        >
                          <path d="M12 3v18" />
                          <path d="M3 12h18" />
                        </svg>
                      </span>

                      <div>
                        <p className="font-semibold text-slate-900">
                          Browser-based processing
                        </p>

                        <p className="mt-1 text-sm leading-6 text-slate-600">
                          When processing occurs entirely in your
                          browser, your selected image does not need to
                          be transmitted to our servers merely to resize,
                          compress, or convert it.
                        </p>
                      </div>
                    </div>
                  </div>

                  <p>
                    However, technical implementation can vary between
                    individual tools and future versions of the
                    website. Users should not assume that every feature
                    or third-party service operates entirely locally
                    unless the relevant tool clearly indicates this.
                  </p>

                  <p>
                    We do not sell uploaded images or intentionally use
                    users&apos; images for unrelated commercial
                    purposes.
                  </p>
                </div>
              </section>

              {/* How We Use */}
              <section
                id="how-we-use"
                className="scroll-mt-28 border-b border-slate-200 py-10"
              >
                <SectionNumber number="04" />

                <h2 className="mt-3 text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl">
                  How We Use Information
                </h2>

                <div className="mt-5 text-sm leading-7 text-slate-600 sm:text-base">
                  <p>
                    Information that is legitimately collected may be
                    used for purposes such as:
                  </p>

                  <ul className="mt-5 space-y-3">
                    {[
                      "Providing and maintaining the website and its tools.",
                      "Improving performance, usability, reliability, and user experience.",
                      "Understanding general website usage and tool performance.",
                      "Detecting, preventing, and addressing security issues or abuse.",
                      "Responding to questions, support requests, or communications.",
                      "Maintaining the technical operation and security of our services.",
                      "Complying with applicable legal obligations.",
                    ].map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-3"
                      >
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-600" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </section>

              {/* Cookies */}
              <section
                id="cookies"
                className="scroll-mt-28 border-b border-slate-200 py-10"
              >
                <SectionNumber number="05" />

                <h2 className="mt-3 text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl">
                  Cookies &amp; Similar Technologies
                </h2>

                <div className="mt-5 space-y-4 text-sm leading-7 text-slate-600 sm:text-base">
                  <p>
                    Let&apos;s Resize It may use cookies, local storage,
                    or similar technologies where necessary for website
                    functionality, preferences, security, analytics, or
                    other legitimate website purposes.
                  </p>

                  <p>
                    Cookies are small pieces of information stored by
                    your browser. They can help websites remember
                    settings, understand general usage patterns, and
                    provide certain functionality.
                  </p>

                  <p>
                    Depending on your browser and the services enabled
                    on the website, you may be able to control or
                    restrict cookies through your browser settings.
                  </p>
                </div>
              </section>

              {/* Third Party */}
              <section
                id="third-party"
                className="scroll-mt-28 border-b border-slate-200 py-10"
              >
                <SectionNumber number="06" />

                <h2 className="mt-3 text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl">
                  Third-Party Services
                </h2>

                <div className="mt-5 space-y-4 text-sm leading-7 text-slate-600 sm:text-base">
                  <p>
                    We may use third-party providers to support aspects
                    of the website, such as hosting, security,
                    analytics, performance monitoring, communication,
                    or other technical services.
                  </p>

                  <p>
                    These providers may process limited information as
                    necessary to perform services on our behalf or to
                    provide their own services.
                  </p>

                  <p>
                    Third-party websites and services have their own
                    privacy policies and terms. We encourage you to
                    review the privacy practices of any third-party
                    service you choose to interact with.
                  </p>
                </div>
              </section>

              {/* Security */}
              <section
                id="data-security"
                className="scroll-mt-28 border-b border-slate-200 py-10"
              >
                <SectionNumber number="07" />

                <h2 className="mt-3 text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl">
                  Data Security
                </h2>

                <div className="mt-5 space-y-4 text-sm leading-7 text-slate-600 sm:text-base">
                  <p>
                    We take reasonable measures designed to protect
                    information handled through the website from
                    unauthorized access, misuse, alteration, or
                    disclosure.
                  </p>

                  <p>
                    However, no internet transmission, website,
                    application, or electronic storage system can be
                    guaranteed to be completely secure.
                  </p>

                  <p>
                    You should also take reasonable precautions when
                    using online services, including keeping your
                    browser and operating system updated and avoiding
                    uploading information that you do not want processed
                    by an online service.
                  </p>
                </div>
              </section>

              {/* Retention */}
              <section
                id="data-retention"
                className="scroll-mt-28 border-b border-slate-200 py-10"
              >
                <SectionNumber number="08" />

                <h2 className="mt-3 text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl">
                  Data Retention
                </h2>

                <div className="mt-5 space-y-4 text-sm leading-7 text-slate-600 sm:text-base">
                  <p>
                    We aim to retain information only for as long as
                    reasonably necessary for the purpose for which it
                    was collected, for legitimate operational needs, or
                    as required by applicable law.
                  </p>

                  <p>
                    Images processed entirely within your browser are
                    handled differently from information that may be
                    collected by website infrastructure or third-party
                    services.
                  </p>

                  <p>
                    Where a particular tool or service temporarily
                    processes information on a server, the applicable
                    technical and retention practices may depend on that
                    service.
                  </p>
                </div>
              </section>

              {/* Rights */}
              <section
                id="your-rights"
                className="scroll-mt-28 border-b border-slate-200 py-10"
              >
                <SectionNumber number="09" />

                <h2 className="mt-3 text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl">
                  Your Rights
                </h2>

                <div className="mt-5 space-y-4 text-sm leading-7 text-slate-600 sm:text-base">
                  <p>
                    Depending on where you live and the laws that apply
                    to you, you may have rights regarding personal
                    information, including rights to request access,
                    correction, deletion, restriction, or information
                    about how your data is processed.
                  </p>

                  <p>
                    You may also have the right to object to certain
                    types of processing or withdraw consent where
                    processing is based on consent.
                  </p>

                  <p>
                    Requests can be submitted through the contact
                    method provided below. We may need to verify your
                    identity before completing certain requests.
                  </p>
                </div>
              </section>

              {/* Children */}
              <section
                id="children"
                className="scroll-mt-28 border-b border-slate-200 py-10"
              >
                <SectionNumber number="10" />

                <h2 className="mt-3 text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl">
                  Children&apos;s Privacy
                </h2>

                <div className="mt-5 space-y-4 text-sm leading-7 text-slate-600 sm:text-base">
                  <p>
                    Let&apos;s Resize It is not intended to knowingly
                    collect personal information from children in
                    violation of applicable laws.
                  </p>

                  <p>
                    If you believe that a child has provided personal
                    information to us without appropriate consent,
                    please contact us so that we can review the matter
                    and take appropriate action.
                  </p>
                </div>
              </section>

              {/* Changes */}
              <section
                id="changes"
                className="scroll-mt-28 border-b border-slate-200 py-10"
              >
                <SectionNumber number="11" />

                <h2 className="mt-3 text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl">
                  Changes to This Privacy Policy
                </h2>

                <div className="mt-5 space-y-4 text-sm leading-7 text-slate-600 sm:text-base">
                  <p>
                    We may update this Privacy Policy from time to time
                    to reflect changes to our website, technology,
                    services, or legal requirements.
                  </p>

                  <p>
                    When changes are made, the updated version will be
                    published on this page and the &quot;Last
                    updated&quot; date will be revised.
                  </p>

                  <p>
                    We encourage you to review this page periodically
                    if you continue to use Let&apos;s Resize It.
                  </p>
                </div>
              </section>

              {/* Contact */}
              <section
                id="contact"
                className="scroll-mt-28 pt-10"
              >
                <SectionNumber number="12" />

                <h2 className="mt-3 text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl">
                  Contact Us
                </h2>

                <div className="mt-5 space-y-4 text-sm leading-7 text-slate-600 sm:text-base">
                  <p>
                    If you have questions about this Privacy Policy,
                    our privacy practices, or the way information is
                    handled when using Let&apos;s Resize It, you can
                    contact us through the contact method made
                    available on our website.
                  </p>

                  <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-6">
                    <p className="text-sm font-semibold text-slate-900">
                      Let&apos;s Resize It
                    </p>

                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      For privacy-related questions or requests, please
                      contact the website operator through the available
                      contact channel.
                    </p>

                    <Link
                      href="/about"
                      className="mt-4 inline-flex items-center text-sm font-semibold text-blue-600 transition-colors hover:text-blue-700"
                    >
                      Contact us
                      <svg
                        className="ml-1.5 h-4 w-4"
                        viewBox="0 0 20 20"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                      >
                        <path d="M4 10h11" />
                        <path d="m11 6 4 4-4 4" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </section>

              {/* Related Tools */}
              <div className="mt-14 rounded-3xl border border-blue-100 bg-gradient-to-br from-blue-50 to-white p-6 sm:p-8">
                <p className="text-xs font-bold uppercase tracking-wider text-blue-600">
                  Continue using Let&apos;s Resize It
                </p>

                <h2 className="mt-3 text-xl font-bold tracking-tight text-slate-950 sm:text-2xl">
                  Simple image tools with privacy in mind.
                </h2>

                <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-600">
                  Resize, compress, and convert images using our
                  collection of browser-based image utilities.
                </p>

                <div className="mt-6 flex flex-wrap gap-3">
                  <Link
                    href="/resize-image"
                    className="inline-flex items-center rounded-xl bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700"
                  >
                    Resize an image
                  </Link>

                  <Link
                    href="/compress-image"
                    className="inline-flex items-center rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-slate-700 transition hover:border-blue-200 hover:text-blue-600"
                  >
                    Compress an image
                  </Link>

                  <Link
                    href="/resize-jpg"
                    className="inline-flex items-center rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-slate-700 transition hover:border-blue-200 hover:text-blue-600"
                  >
                    Resize JPG
                  </Link>

                  <Link
                    href="/convert-jpg-to-webp"
                    className="inline-flex items-center rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-slate-700 transition hover:border-blue-200 hover:text-blue-600"
                  >
                    JPG to WebP
                  </Link>
                </div>
              </div>
            </article>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

/* ============================================================
   SECTION NUMBER
============================================================ */

function SectionNumber({
  number,
}: {
  number: string;
}) {
  return (
    <span className="inline-flex items-center rounded-full border border-blue-100 bg-blue-50 px-2.5 py-1 text-[10px] font-bold tracking-wider text-blue-600">
      SECTION {number}
    </span>
  );
}