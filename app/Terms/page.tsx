import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Use | Let&apos;s Resize It",
  description:
    "Read the Terms of Use for Let&apos;s Resize It, including rules for using our online image resizing, compression, and conversion tools, intellectual property, privacy, limitations, and user responsibilities.",
  keywords: [
    "Let&apos;s Resize It terms of use",
    "image tools terms",
    "online image resizer terms",
    "image compressor terms",
    "image converter terms",
    "terms and conditions",
  ],
  alternates: {
    canonical: "/Terms",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Terms of Use | Let&apos;s Resize It",
    description:
      "The Terms of Use governing your use of Let&apos;s Resize It and its online image tools.",
    url: "/Terms",
    siteName: "Let&apos;s Resize It",
    type: "website",
  },
};

const sections = [
  {
    id: "acceptance",
    number: "01",
    title: "Acceptance of Terms",
  },
  {
    id: "using-service",
    number: "02",
    title: "Using Our Service",
  },
  {
    id: "user-content",
    number: "03",
    title: "Your Images and Content",
  },
  {
    id: "acceptable-use",
    number: "04",
    title: "Acceptable Use",
  },
  {
    id: "intellectual-property",
    number: "05",
    title: "Intellectual Property",
  },
  {
    id: "third-party",
    number: "06",
    title: "Third-Party Services and Links",
  },
  {
    id: "availability",
    number: "07",
    title: "Service Availability",
  },
  {
    id: "disclaimers",
    number: "08",
    title: "Disclaimers",
  },
  {
    id: "limitation",
    number: "09",
    title: "Limitation of Liability",
  },
  {
    id: "changes",
    number: "10",
    title: "Changes to These Terms",
  },
  {
    id: "governing-law",
    number: "11",
    title: "Governing Law",
  },
  {
    id: "contact",
    number: "12",
    title: "Contact Us",
  },
];

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Header />

      <main>
        {/* =====================================================
            HERO
        ====================================================== */}
        <section className="relative overflow-hidden border-b border-slate-200 bg-slate-50">
          <div
            className="pointer-events-none absolute inset-0"
            aria-hidden="true"
          >
            <div className="absolute -left-32 -top-32 h-80 w-80 rounded-full bg-blue-500/10 blur-3xl" />
            <div className="absolute -right-32 top-20 h-96 w-96 rounded-full bg-indigo-500/10 blur-3xl" />
          </div>

          <div className="relative mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
            {/* Breadcrumb */}
            <nav
              aria-label="Breadcrumb"
              className="mb-8"
            >
              <ol className="flex flex-wrap items-center gap-2 text-sm text-slate-500">
                <li>
                  <Link
                    href="/"
                    className="transition-colors hover:text-blue-600"
                  >
                    Home
                  </Link>
                </li>

                <li
                  className="text-slate-300"
                  aria-hidden="true"
                >
                  /
                </li>

                <li
                  className="font-medium text-slate-700"
                  aria-current="page"
                >
                  Terms of Use
                </li>
              </ol>
            </nav>

            <div className="max-w-3xl">
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3 py-1.5 text-xs font-semibold text-blue-700">
                <span className="h-1.5 w-1.5 rounded-full bg-blue-600" />
                Terms &amp; Conditions
              </div>

              <h1 className="text-4xl font-bold tracking-[-0.03em] text-slate-950 sm:text-5xl lg:text-6xl">
                Terms of Use
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
                These Terms of Use explain the rules and conditions
                that apply when you use Let&apos;s Resize It, including
                our online image resizing, compression, and conversion
                tools.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-3 text-xs text-slate-500">
                <span className="rounded-full border border-slate-200 bg-white px-3 py-1.5">
                  Effective date: August 2026
                </span>

                <span className="rounded-full border border-slate-200 bg-white px-3 py-1.5">
                  Last updated: August 2026
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            CONTENT
        ====================================================== */}
        <section className="mx-auto w-full max-w-7xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
          <div className="grid gap-10 lg:grid-cols-[260px_minmax(0,1fr)] lg:gap-16">
            {/* =================================================
                SIDEBAR
            ================================================== */}
            <aside className="lg:sticky lg:top-28 lg:self-start">
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                <p className="text-xs font-bold uppercase tracking-[0.12em] text-slate-500">
                  On this page
                </p>

                <nav
                  aria-label="Terms of Use sections"
                  className="mt-4"
                >
                  <ul className="space-y-1">
                    {sections.map((section) => (
                      <li key={section.id}>
                        <a
                          href={`#${section.id}`}
                          className="group flex items-start gap-3 rounded-lg px-2.5 py-2 text-sm text-slate-600 transition-colors hover:bg-white hover:text-blue-600"
                        >
                          <span className="mt-0.5 text-[10px] font-bold text-slate-400 group-hover:text-blue-500">
                            {section.number}
                          </span>

                          <span>{section.title}</span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>

              <div className="mt-4 rounded-2xl border border-blue-100 bg-blue-50/70 p-5">
                <p className="text-sm font-semibold text-slate-900">
                  Need help?
                </p>

                <p className="mt-2 text-xs leading-5 text-slate-600">
                  If you have a question about these terms or how
                  our tools work, please contact us.
                </p>

                <a
                  href="#contact"
                  className="mt-4 inline-flex text-xs font-semibold text-blue-600 transition-colors hover:text-blue-700"
                >
                  Contact information →
                </a>
              </div>
            </aside>

            {/* =================================================
                ARTICLE
            ================================================== */}
            <article className="min-w-0 max-w-4xl">
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8 lg:p-10">
                <div className="mb-10 rounded-xl border border-slate-200 bg-slate-50 p-5 sm:p-6">
                  <p className="text-sm leading-6 text-slate-600">
                    Please read these Terms of Use carefully before
                    using Let&apos;s Resize It. By accessing or using
                    the website or its tools, you agree to be bound
                    by these terms. If you do not agree with these
                    terms, please do not use the service.
                  </p>
                </div>

                {/* =================================================
                    01
                ================================================== */}
                <section
                  id="acceptance"
                  className="scroll-mt-28 border-b border-slate-200 pb-10"
                >
                  <SectionHeading
                    number="01"
                    title="Acceptance of Terms"
                  />

                  <p>
                    These Terms of Use form an agreement between you
                    and Let&apos;s Resize It regarding your use of our
                    website and online image tools.
                  </p>

                  <p>
                    By accessing the website, uploading an image,
                    using one of our tools, or otherwise interacting
                    with the service, you acknowledge that you have
                    read, understood, and agreed to these Terms of
                    Use.
                  </p>

                  <p>
                    If you are using Let&apos;s Resize It on behalf
                    of another person, organization, or business, you
                    confirm that you have the authority to accept
                    these terms on their behalf.
                  </p>
                </section>

                {/* =================================================
                    02
                ================================================== */}
                <section
                  id="using-service"
                  className="scroll-mt-28 border-b border-slate-200 py-10"
                >
                  <SectionHeading
                    number="02"
                    title="Using Our Service"
                  />

                  <p>
                    Let&apos;s Resize It provides browser-based tools
                    designed to help users resize, compress, and
                    convert image files.
                  </p>

                  <p>
                    Our tools are intended for lawful and ordinary
                    personal, professional, educational, and
                    business use.
                  </p>

                  <p>
                    You are responsible for ensuring that your use of
                    the service complies with all applicable laws,
                    regulations, and third-party rights.
                  </p>

                  <div className="mt-6 grid gap-3 sm:grid-cols-2">
                    <InfoCard
                      title="Use responsibly"
                      text="Use the service only for lawful purposes and in a way that does not interfere with other users."
                    />

                    <InfoCard
                      title="Check your files"
                      text="You are responsible for making sure that the images you process are appropriate for your intended use."
                    />
                  </div>
                </section>

                {/* =================================================
                    03
                ================================================== */}
                <section
                  id="user-content"
                  className="scroll-mt-28 border-b border-slate-200 py-10"
                >
                  <SectionHeading
                    number="03"
                    title="Your Images and Content"
                  />

                  <p>
                    You retain ownership of the images and other
                    content that you choose to process through
                    Let&apos;s Resize It.
                  </p>

                  <p>
                    You are responsible for having the necessary
                    rights, permissions, licenses, or other legal
                    authority to upload and process any image you
                    submit through our tools.
                  </p>

                  <p>
                    You must not upload content that you do not have
                    permission to use or process, or content that
                    violates another person&apos;s intellectual
                    property, privacy, publicity, or other legal
                    rights.
                  </p>

                  <div className="mt-6 rounded-xl border border-amber-200 bg-amber-50 p-5">
                    <p className="text-sm font-semibold text-amber-900">
                      Important
                    </p>

                    <p className="mt-2 text-sm leading-6 text-amber-800">
                      Always make sure you have the appropriate rights
                      to an image before uploading or processing it.
                    </p>
                  </div>
                </section>

                {/* =================================================
                    04
                ================================================== */}
                <section
                  id="acceptable-use"
                  className="scroll-mt-28 border-b border-slate-200 py-10"
                >
                  <SectionHeading
                    number="04"
                    title="Acceptable Use"
                  />

                  <p>
                    You agree not to misuse Let&apos;s Resize It or
                    attempt to interfere with the normal operation of
                    the website.
                  </p>

                  <p>You must not use the service to:</p>

                  <BulletList
                    items={[
                      "Violate any applicable law or regulation.",
                      "Infringe the rights of another person or organization.",
                      "Attempt to gain unauthorized access to our systems or infrastructure.",
                      "Interfere with, disrupt, overload, or damage the service.",
                      "Use automated methods in a manner that places unreasonable load on the website.",
                      "Attempt to bypass security, access controls, or technical restrictions.",
                      "Distribute malicious code, malware, or other harmful material.",
                      "Use the service for fraudulent, deceptive, or abusive activity.",
                    ]}
                  />

                  <p>
                    We reserve the right to restrict or terminate
                    access when we reasonably believe that the
                    service is being misused or these Terms of Use
                    have been violated.
                  </p>
                </section>

                {/* =================================================
                    05
                ================================================== */}
                <section
                  id="intellectual-property"
                  className="scroll-mt-28 border-b border-slate-200 py-10"
                >
                  <SectionHeading
                    number="05"
                    title="Intellectual Property"
                  />

                  <p>
                    The Let&apos;s Resize It name, branding, website
                    design, interface, original graphics, text,
                    software, and other materials provided by us are
                    owned by or licensed to Let&apos;s Resize It,
                    unless otherwise stated.
                  </p>

                  <p>
                    Nothing in these Terms of Use gives you ownership
                    of our intellectual property.
                  </p>

                  <p>
                    You may use the website and its tools for their
                    intended purpose, but you may not copy, reproduce,
                    modify, distribute, sell, or create derivative
                    works from our proprietary materials without
                    appropriate permission.
                  </p>
                </section>

                {/* =================================================
                    06
                ================================================== */}
                <section
                  id="third-party"
                  className="scroll-mt-28 border-b border-slate-200 py-10"
                >
                  <SectionHeading
                    number="06"
                    title="Third-Party Services and Links"
                  />

                  <p>
                    Let&apos;s Resize It may use third-party
                    infrastructure, technologies, analytics services,
                    hosting providers, or other services to operate
                    and improve the website.
                  </p>

                  <p>
                    The website may also contain links to websites or
                    services operated by third parties. These services
                    are not controlled by Let&apos;s Resize It, and
                    their own terms and privacy policies may apply.
                  </p>

                  <p>
                    We are not responsible for the content,
                    availability, security, or practices of
                    third-party websites or services.
                  </p>
                </section>

                {/* =================================================
                    07
                ================================================== */}
                <section
                  id="availability"
                  className="scroll-mt-28 border-b border-slate-200 py-10"
                >
                  <SectionHeading
                    number="07"
                    title="Service Availability"
                  />

                  <p>
                    We aim to keep Let&apos;s Resize It available,
                    reliable, and useful, but we do not guarantee that
                    the service will always be available or
                    uninterrupted.
                  </p>

                  <p>
                    The website or individual tools may occasionally
                    become unavailable because of maintenance,
                    updates, technical problems, infrastructure
                    issues, security events, or circumstances outside
                    our reasonable control.
                  </p>

                  <p>
                    We may also modify, update, suspend, or discontinue
                    features of the service when necessary.
                  </p>
                </section>

                {/* =================================================
                    08
                ================================================== */}
                <section
                  id="disclaimers"
                  className="scroll-mt-28 border-b border-slate-200 py-10"
                >
                  <SectionHeading
                    number="08"
                    title="Disclaimers"
                  />

                  <p>
                    Let&apos;s Resize It is provided on an
                    &quot;as is&quot; and &quot;as available&quot;
                    basis to the extent permitted by applicable law.
                  </p>

                  <p>
                    While we make reasonable efforts to provide
                    reliable tools and accurate information, we do not
                    guarantee that every operation will produce a
                    particular result or that the service will be
                    completely error-free.
                  </p>

                  <p>
                    You are responsible for reviewing the output of
                    any image operation before using it for an
                    important, professional, commercial, legal, or
                    other consequential purpose.
                  </p>

                  <div className="mt-6 rounded-xl border border-slate-200 bg-slate-50 p-5">
                    <p className="text-sm leading-6 text-slate-600">
                      For important files, we recommend keeping an
                      original copy before processing and checking the
                      resulting file before submitting or publishing
                      it elsewhere.
                    </p>
                  </div>
                </section>

                {/* =================================================
                    09
                ================================================== */}
                <section
                  id="limitation"
                  className="scroll-mt-28 border-b border-slate-200 py-10"
                >
                  <SectionHeading
                    number="09"
                    title="Limitation of Liability"
                  />

                  <p>
                    To the maximum extent permitted by applicable law,
                    Let&apos;s Resize It and its operators, partners,
                    service providers, and affiliates will not be
                    responsible for indirect, incidental, special,
                    consequential, or punitive damages arising from
                    your use of, or inability to use, the service.
                  </p>

                  <p>
                    This includes, where legally permitted, loss of
                    data, business interruption, loss of profits, loss
                    of revenue, or other losses resulting from use of
                    the website or its tools.
                  </p>

                  <p>
                    Nothing in these Terms of Use is intended to
                    exclude or limit liability where doing so would
                    not be permitted under applicable law.
                  </p>
                </section>

                {/* =================================================
                    10
                ================================================== */}
                <section
                  id="changes"
                  className="scroll-mt-28 border-b border-slate-200 py-10"
                >
                  <SectionHeading
                    number="10"
                    title="Changes to These Terms"
                  />

                  <p>
                    We may update these Terms of Use from time to time
                    to reflect changes to our services, technology,
                    legal requirements, or business practices.
                  </p>

                  <p>
                    When we make changes, we may update the
                    &quot;Last updated&quot; date shown on this page.
                    Your continued use of Let&apos;s Resize It after
                    updated terms become effective means that you
                    accept the revised terms.
                  </p>

                  <p>
                    We encourage you to review this page periodically
                    so that you remain aware of the terms governing
                    your use of the service.
                  </p>
                </section>

                {/* =================================================
                    11
                ================================================== */}
                <section
                  id="governing-law"
                  className="scroll-mt-28 border-b border-slate-200 py-10"
                >
                  <SectionHeading
                    number="11"
                    title="Governing Law"
                  />

                  <p>
                    These Terms of Use will be interpreted and
                    governed in accordance with the applicable laws
                    governing Let&apos;s Resize It and its operations,
                    except where mandatory local law provides
                    otherwise.
                  </p>

                  <p>
                    Any disputes arising from or relating to the use
                    of the service will be subject to the jurisdiction
                    of the courts or authorities that are legally
                    competent to resolve the matter.
                  </p>
                </section>

                {/* =================================================
                    12
                ================================================== */}
                <section
                  id="contact"
                  className="scroll-mt-28 pt-10"
                >
                  <SectionHeading
                    number="12"
                    title="Contact Us"
                  />

                  <p>
                    If you have questions about these Terms of Use or
                    need clarification regarding the service, please
                    contact the Let&apos;s Resize It team through the
                    contact method provided on our website.
                  </p>

                  <div className="mt-6 rounded-2xl border border-blue-100 bg-blue-50 p-6">
                    <p className="text-sm font-semibold text-slate-950">
                      Questions about the terms?
                    </p>

                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      We&apos;re happy to help clarify how the service
                      works and what these terms mean for you.
                    </p>

                    <Link
                      href="/"
                      className="mt-5 inline-flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-700"
                    >
                      Return to Let&apos;s Resize It

                      <svg
                        viewBox="0 0 20 20"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-4 w-4"
                        aria-hidden="true"
                      >
                        <path d="M4 10h11" />
                        <path d="m11 6 4 4-4 4" />
                      </svg>
                    </Link>
                  </div>
                </section>
              </div>

              {/* =================================================
                  RELATED TOOLS
              ================================================== */}
              <div className="mt-8 rounded-2xl border border-slate-200 bg-slate-50 p-6 sm:p-8">
                <p className="text-xs font-bold uppercase tracking-[0.12em] text-slate-500">
                  Explore Let&apos;s Resize It
                </p>

                <h2 className="mt-3 text-xl font-bold tracking-tight text-slate-950">
                  Simple image tools for everyday needs
                </h2>

                <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-600">
                  Use our browser-based image tools to resize,
                  compress, and convert images without complicated
                  editing software.
                </p>

                <div className="mt-6 flex flex-wrap gap-3">
                  <RelatedTool
                    href="/resize-image"
                    label="Resize an Image"
                  />

                  <RelatedTool
                    href="/resize-image-to-100-kb"
                    label="Resize to 100 KB"
                  />

                  <RelatedTool
                    href="/resize-image-to-200-kb"
                    label="Resize to 200 KB"
                  />

                  <RelatedTool
                    href="/resize-jpg"
                    label="Resize JPG"
                  />

                  <RelatedTool
                    href="/compress-image"
                    label="Compress JPG"
                  />

                  <RelatedTool
                    href="/convert-jpg-to-webp"
                    label="Convert JPG to WebP"
                  />
                </div>
              </div>
            </article>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

/* ============================================================
   SECTION HEADING
============================================================ */

function SectionHeading({
  number,
  title,
}: {
  number: string;
  title: string;
}) {
  return (
    <div className="mb-5">
      <div className="mb-3 flex items-center gap-3">
        <span className="text-xs font-bold tracking-[0.12em] text-blue-600">
          {number}
        </span>

        <span className="h-px w-8 bg-blue-200" />
      </div>

      <h2 className="text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl">
        {title}
      </h2>
    </div>
  );
}

/* ============================================================
   INFO CARD
============================================================ */

function InfoCard({
  title,
  text,
}: {
  title: string;
  text: string;
}) {
  return (
    <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
      <h3 className="text-sm font-semibold text-slate-950">
        {title}
      </h3>

      <p className="mt-2 text-xs leading-5 text-slate-500">
        {text}
      </p>
    </div>
  );
}

/* ============================================================
   BULLET LIST
============================================================ */

function BulletList({
  items,
}: {
  items: string[];
}) {
  return (
    <ul className="my-5 space-y-3">
      {items.map((item) => (
        <li
          key={item}
          className="flex gap-3 text-sm leading-6 text-slate-600"
        >
          <span
            className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500"
            aria-hidden="true"
          />

          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

/* ============================================================
   RELATED TOOL
============================================================ */

function RelatedTool({
  href,
  label,
}: {
  href: string;
  label: string;
}) {
  return (
    <Link
      href={href}
      className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-xs font-semibold text-slate-700 shadow-sm transition-all hover:-translate-y-0.5 hover:border-blue-200 hover:text-blue-600 hover:shadow-md"
    >
      {label}

      <svg
        viewBox="0 0 20 20"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-3.5 w-3.5"
        aria-hidden="true"
      >
        <path d="M4 10h11" />
        <path d="m11 6 4 4-4 4" />
      </svg>
    </Link>
  );
}