"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

type DropdownName =
  | "resize"
  | "crop"
  | "compress"
  | "convert"
  | "more"
  | null;

interface DropdownItem {
  label: string;
  description: string;
  href: string;
  icon: React.ReactNode;
  active?: boolean;
}

function ResizeIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-5 w-5"
      aria-hidden="true"
    >
      <path d="M8 3H5a2 2 0 0 0-2 2v3" />
      <path d="M16 3h3a2 2 0 0 1 2 2v3" />
      <path d="M8 21H5a2 2 0 0 1-2-2v-3" />
      <path d="M16 21h3a2 2 0 0 0 2-2v-3" />
      <path d="M8 8l4 4 4-4" />
      <path d="M12 12v6" />
    </svg>
  );
}

function CropIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-5 w-5"
      aria-hidden="true"
    >
      <path d="M6 2v13a3 3 0 0 0 3 3h13" />
      <path d="M18 22V9a3 3 0 0 0-3-3H2" />
    </svg>
  );
}

function CompressIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-5 w-5"
      aria-hidden="true"
    >
      <path d="M8 3H5a2 2 0 0 0-2 2v3" />
      <path d="M16 3h3a2 2 0 0 1 2 2v3" />
      <path d="M8 21H5a2 2 0 0 1-2-2v-3" />
      <path d="M16 21h3a2 2 0 0 0 2-2v-3" />
      <path d="M8 8l4 4 4-4" />
      <path d="M8 16l4-4 4 4" />
    </svg>
  );
}

function ConvertIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-5 w-5"
      aria-hidden="true"
    >
      <path d="M7 7h10l-3-3" />
      <path d="M17 17H7l3 3" />
      <path d="M17 7l3 3-3 3" />
      <path d="M7 17l-3-3 3-3" />
    </svg>
  );
}

function SparklesIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-5 w-5"
      aria-hidden="true"
    >
      <path d="m12 3-1.2 3.8a4 4 0 0 1-2.5 2.5L4.5 10.5l3.8 1.2a4 4 0 0 1 2.5 2.5L12 18l1.2-3.8a4 4 0 0 1 2.5-2.5l3.8-1.2-3.8-1.2a4 4 0 0 1-2.5-2.5L12 3Z" />
      <path d="m19 16-.5 1.5L17 18l1.5.5L19 20l.5-1.5L21 18l-1.5-.5L19 16Z" />
    </svg>
  );
}

function ChevronDown() {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-3.5 w-3.5 transition-transform"
      aria-hidden="true"
    >
      <path d="m5 7.5 5 5 5-5" />
    </svg>
  );
}

const dropdowns: Record<
  Exclude<DropdownName, null>,
  DropdownItem[]
> = {
  resize: [
    {
      label: "Resize an Image",
      description: "Change width, height or dimensions",
      href: "/resize-image",
      icon: <ResizeIcon />,
      active: true,
    },
    {
      label: "Resize by Percentage",
      description: "Scale an image up or down",
      href: "#resize",
      icon: <ResizeIcon />,
    },
  ],

  crop: [
    {
      label: "Crop an Image",
      description: "Crop your image to the perfect size",
      href: "#",
      icon: <CropIcon />,
    },
    {
      label: "Social Media Crop",
      description: "Prepare images for social platforms",
      href: "#",
      icon: <CropIcon />,
    },
  ],

  compress: [
    {
      label: "Compress an Image",
      description: "Reduce file size without the hassle",
      href: "#",
      icon: <CompressIcon />,
    },
    {
      label: "Compress to Target Size",
      description: "Get your image under a specific limit",
      href: "#",
      icon: <CompressIcon />,
    },
  ],

  convert: [
    {
      label: "Image Converter",
      description: "Convert between popular image formats",
      href: "#",
      icon: <ConvertIcon />,
    },
    {
      label: "JPG / PNG / WebP",
      description: "Quick format conversion",
      href: "#",
      icon: <ConvertIcon />,
    },
  ],

  more: [
    {
      label: "Image Tools",
      description: "Explore more useful image utilities",
      href: "#features",
      icon: <SparklesIcon />,
    },
    {
      label: "How It Works",
      description: "See how Let's Resize It works",
      href: "#how-it-works",
      icon: <SparklesIcon />,
    },
    {
      label: "Frequently Asked Questions",
      description: "Find answers to common questions",
      href: "#faq",
      icon: <SparklesIcon />,
    },
  ],
};

export function Header() {
  const [openDropdown, setOpenDropdown] =
    useState<DropdownName>(null);

  const [isMobileMenuOpen, setIsMobileMenuOpen] =
    useState(false);

  const headerRef = useRef<HTMLElement>(null);

  const closeEverything = () => {
    setOpenDropdown(null);
    setIsMobileMenuOpen(false);
  };

  /*
   * Close dropdown when clicking outside.
   */
  useEffect(() => {
    const handleClickOutside = (
      event: MouseEvent
    ) => {
      if (
        headerRef.current &&
        !headerRef.current.contains(
          event.target as Node
        )
      ) {
        setOpenDropdown(null);
      }
    };

    document.addEventListener(
      "mousedown",
      handleClickOutside
    );

    return () => {
      document.removeEventListener(
        "mousedown",
        handleClickOutside
      );
    };
  }, []);

  /*
   * Close dropdown when pressing Escape.
   */
  useEffect(() => {
    const handleEscape = (
      event: KeyboardEvent
    ) => {
      if (event.key === "Escape") {
        setOpenDropdown(null);
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener(
      "keydown",
      handleEscape
    );

    return () => {
      document.removeEventListener(
        "keydown",
        handleEscape
      );
    };
  }, []);

  /*
   * Prevent background scrolling
   * when mobile navigation is open.
   */
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  const toggleDropdown = (
    name: Exclude<DropdownName, null>
  ) => {
    setOpenDropdown((current) =>
      current === name ? null : name
    );
  };

  return (
    <header
      ref={headerRef}
      className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur-xl"
    >
      {/* Very subtle top accent */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-blue-500/40 to-transparent" />

      <div className="mx-auto flex h-[72px] w-full max-w-7xl items-center px-4 sm:px-6 lg:px-8">
        {/* =====================================================
            BRAND
        ====================================================== */}
        <Link
          href="/"
          onClick={closeEverything}
          className="group flex shrink-0 items-center gap-3"
          aria-label="Let's Resize It - Home"
        >
          <span
            className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-white shadow-[0_4px_14px_rgba(37,99,235,0.25)] transition-all duration-200 group-hover:-translate-y-0.5 group-hover:shadow-[0_7px_20px_rgba(37,99,235,0.3)]"
            aria-hidden="true"
          >
            <span className="absolute inset-[1px] rounded-[11px] border border-white/15" />

            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="relative h-5 w-5"
            >
              <path d="M8 3H5a2 2 0 0 0-2 2v3" />
              <path d="M16 3h3a2 2 0 0 1 2 2v3" />
              <path d="M8 21H5a2 2 0 0 1-2-2v-3" />
              <path d="M16 21h3a2 2 0 0 0 2-2v-3" />
              <path d="M8 8l4 4 4-4" />
              <path d="M12 12v6" />
            </svg>
          </span>

          <span className="hidden text-[17px] font-bold tracking-[-0.02em] text-slate-950 sm:block">
            Let&apos;s{" "}
            <span className="text-blue-600">
              Resize It
            </span>
          </span>
        </Link>

        {/* =====================================================
            DESKTOP NAVIGATION
        ====================================================== */}
        <nav
          className="ml-10 hidden h-full items-center lg:flex"
          aria-label="Main navigation"
        >
          <NavDropdown
            label="Resize"
            name="resize"
            openDropdown={openDropdown}
            onToggle={toggleDropdown}
          />

          <NavDropdown
            label="Crop"
            name="crop"
            openDropdown={openDropdown}
            onToggle={toggleDropdown}
          />

          <NavDropdown
            label="Compress"
            name="compress"
            openDropdown={openDropdown}
            onToggle={toggleDropdown}
          />

          <NavDropdown
            label="Convert"
            name="convert"
            openDropdown={openDropdown}
            onToggle={toggleDropdown}
          />

          <NavDropdown
            label="More"
            name="more"
            openDropdown={openDropdown}
            onToggle={toggleDropdown}
          />

          <Link
            href="#how-it-works"
            className="ml-1 inline-flex h-10 items-center rounded-lg px-3 text-sm font-medium text-slate-600 transition-colors hover:bg-slate-50 hover:text-slate-950"
          >
            How It Works
          </Link>
        </nav>

        {/* =====================================================
            DESKTOP RIGHT SIDE
        ====================================================== */}
        <div className="ml-auto hidden items-center gap-3 lg:flex">
          <Link
            href="#features"
            className="text-sm font-medium text-slate-600 transition-colors hover:text-slate-950"
          >
            Features
          </Link>

          <span
            className="h-5 w-px bg-slate-200"
            aria-hidden="true"
          />

          <Link
            href="#resize"
            onClick={() =>
              setOpenDropdown(null)
            }
            className="group inline-flex h-10 items-center justify-center gap-2 rounded-lg bg-blue-600 px-4 text-sm font-semibold text-white shadow-[0_2px_8px_rgba(37,99,235,0.2)] transition-all duration-200 hover:bg-blue-700 hover:shadow-[0_5px_14px_rgba(37,99,235,0.25)] focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
          >
            Resize an Image

            <svg
              viewBox="0 0 20 20"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5"
              aria-hidden="true"
            >
              <path d="M4 10h11" />
              <path d="m11 6 4 4-4 4" />
            </svg>
          </Link>
        </div>

        {/* =====================================================
            TABLET / MOBILE ACTION
        ====================================================== */}
        <div className="ml-auto flex items-center gap-2 lg:hidden">
          <Link
            href="#resize"
            onClick={closeEverything}
            className="hidden h-10 items-center justify-center rounded-lg bg-blue-600 px-4 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700 sm:inline-flex"
          >
            Resize Image
          </Link>

          <button
            type="button"
            onClick={() =>
              setIsMobileMenuOpen(
                (current) => !current
              )
            }
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-700 transition hover:bg-slate-50 hover:text-slate-950 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
            aria-label={
              isMobileMenuOpen
                ? "Close navigation"
                : "Open navigation"
            }
            aria-expanded={
              isMobileMenuOpen
            }
            aria-controls="mobile-navigation"
          >
            {isMobileMenuOpen ? (
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5"
                aria-hidden="true"
              >
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </svg>
            ) : (
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5"
                aria-hidden="true"
              >
                <path d="M4 6h16" />
                <path d="M4 12h16" />
                <path d="M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* =======================================================
          DESKTOP DROPDOWN
      ======================================================== */}
      <div
        className={`absolute left-0 right-0 hidden border-t border-slate-100 bg-white shadow-[0_16px_40px_rgba(15,23,42,0.08)] transition-all duration-150 lg:block ${
          openDropdown
            ? "visible translate-y-0 opacity-100"
            : "pointer-events-none invisible -translate-y-1 opacity-0"
        }`}
      >
        <div className="mx-auto w-full max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          {openDropdown && (
            <div className="grid grid-cols-2 gap-3 md:grid-cols-3">
              {dropdowns[openDropdown].map(
                (item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={() =>
                      setOpenDropdown(null)
                    }
                    className={`group flex items-start gap-3 rounded-xl border p-4 transition-all ${
                      item.active
                        ? "border-blue-100 bg-blue-50/70"
                        : "border-transparent hover:border-slate-200 hover:bg-slate-50"
                    }`}
                  >
                    <span
                      className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg ${
                        item.active
                          ? "bg-blue-600 text-white"
                          : "bg-slate-100 text-slate-600 group-hover:bg-white group-hover:text-blue-600"
                      }`}
                    >
                      {item.icon}
                    </span>

                    <span className="min-w-0">
                      <span className="block text-sm font-semibold text-slate-950">
                        {item.label}
                      </span>

                      <span className="mt-1 block text-xs leading-5 text-slate-500">
                        {item.description}
                      </span>
                    </span>
                  </Link>
                )
              )}
            </div>
          )}

          <div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-4">
            <p className="text-xs text-slate-500">
              Simple image tools. No complicated
              software.
            </p>

            <Link
              href="#features"
              onClick={() =>
                setOpenDropdown(null)
              }
              className="text-xs font-semibold text-blue-600 hover:text-blue-700"
            >
              Explore all features →
            </Link>
          </div>
        </div>
      </div>

      {/* =======================================================
          MOBILE NAVIGATION
      ======================================================== */}
      <div
        id="mobile-navigation"
        className={`overflow-hidden border-t border-slate-200 bg-white transition-all duration-200 lg:hidden ${
          isMobileMenuOpen
            ? "max-h-[calc(100vh-73px)] opacity-100"
            : "max-h-0 opacity-0"
        }`}
      >
        <nav
          className="mx-auto max-h-[calc(100vh-73px)] w-full max-w-7xl overflow-y-auto px-4 py-4 sm:px-6"
          aria-label="Mobile navigation"
        >
          <MobileNavLink
            href="#resize"
            label="Resize"
            description="Resize images to exact dimensions"
            icon={<ResizeIcon />}
            onClick={closeEverything}
          />

          <MobileNavLink
            href="#"
            label="Crop"
            description="Crop images for any purpose"
            icon={<CropIcon />}
            onClick={closeEverything}
          />

          <MobileNavLink
            href="#"
            label="Compress"
            description="Reduce image file size"
            icon={<CompressIcon />}
            onClick={closeEverything}
          />

          <MobileNavLink
            href="#"
            label="Convert"
            description="Convert image formats"
            icon={<ConvertIcon />}
            onClick={closeEverything}
          />

          <div className="my-3 h-px bg-slate-100" />

          <MobileNavLink
            href="#how-it-works"
            label="How It Works"
            description="See how the tool works"
            icon={<SparklesIcon />}
            onClick={closeEverything}
          />

          <MobileNavLink
            href="#features"
            label="Features"
            description="Everything Let's Resize It offers"
            icon={<SparklesIcon />}
            onClick={closeEverything}
          />

          <MobileNavLink
            href="#faq"
            label="FAQ"
            description="Answers to common questions"
            icon={<SparklesIcon />}
            onClick={closeEverything}
          />

          <Link
            href="#resize"
            onClick={closeEverything}
            className="mt-4 flex h-12 items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700"
          >
            Resize an Image

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

          <p className="pb-2 pt-4 text-center text-xs text-slate-400">
            Free image tools · Processed locally
          </p>
        </nav>
      </div>
    </header>
  );
}

/* ============================================================
   DESKTOP NAV DROPDOWN
============================================================ */

interface NavDropdownProps {
  label: string;
  name: Exclude<DropdownName, null>;
  openDropdown: DropdownName;
  onToggle: (
    name: Exclude<DropdownName, null>
  ) => void;
}

function NavDropdown({
  label,
  name,
  openDropdown,
  onToggle,
}: NavDropdownProps) {
  const isOpen =
    openDropdown === name;

  return (
    <button
      type="button"
      onClick={() => onToggle(name)}
      className={`inline-flex h-10 items-center gap-1.5 rounded-lg px-3 text-sm font-medium transition-colors ${
        isOpen
          ? "bg-slate-100 text-slate-950"
          : "text-slate-600 hover:bg-slate-50 hover:text-slate-950"
      }`}
      aria-expanded={isOpen}
    >
      {label}

      <span
        className={`transition-transform duration-150 ${
          isOpen ? "rotate-180" : ""
        }`}
      >
        <ChevronDown />
      </span>
    </button>
  );
}

/* ============================================================
   MOBILE NAV LINK
============================================================ */

interface MobileNavLinkProps {
  href: string;
  label: string;
  description: string;
  icon: React.ReactNode;
  onClick: () => void;
}

function MobileNavLink({
  href,
  label,
  description,
  icon,
  onClick,
}: MobileNavLinkProps) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="group flex items-center gap-3 rounded-xl px-3 py-3 transition hover:bg-slate-50"
    >
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-slate-100 text-slate-600 transition group-hover:bg-blue-50 group-hover:text-blue-600">
        {icon}
      </span>

      <span>
        <span className="block text-sm font-semibold text-slate-950">
          {label}
        </span>

        <span className="mt-0.5 block text-xs text-slate-500">
          {description}
        </span>
      </span>

      <svg
        viewBox="0 0 20 20"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="ml-auto h-4 w-4 text-slate-300 group-hover:text-blue-500"
        aria-hidden="true"
      >
        <path d="m7 4 6 6-6 6" />
      </svg>
    </Link>
  );
}