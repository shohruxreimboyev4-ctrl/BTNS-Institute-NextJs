"use client";

import React, { useEffect, useRef, useState } from "react";
import { FaLocationDot } from "react-icons/fa6";
import {
  FiSearch,
  FiBookmark,
  FiShoppingCart,
  FiUser,
  FiMenu,
  FiX,
} from "react-icons/fi";
import Image from "next/image";
import { RiArrowDropDownLine } from "react-icons/ri";

const REGIONS = [
  "Toshkent",
  "Samarqand",
  "Buxoro",
  "Andijon",
  "Farg'ona",
  "Namangan",
];
const LANGS = ["uz", "ru", "en"];

const NAV_LINKS = [
  { label: "Materiallar", href: "#" },
  { label: "Mashina mexanizmlar", href: "#" },
  { label: "Qurilish ishlari", href: "#" },
  { label: "Kichik mexanizatsiya", href: "#" },
  { label: "Uskuna va qurilmalar", href: "#" },
  { label: "Buyumlar", href: "#" },
  { label: "Ma’lumotlar", href: "#" },
  { label: "Aloqa", href: "#" },
];

const Header = () => {
  const [region, setRegion] = useState("Toshkent");
  const [regionOpen, setRegionOpen] = useState(false);

  const [lang, setLang] = useState("uz");
  const [langOpen, setLangOpen] = useState(false);

  const [searchOpen, setSearchOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const regionRef = useRef<HTMLDivElement | null>(null);
  const langRef = useRef<HTMLDivElement | null>(null);
  const searchRef = useRef<HTMLDivElement | null>(null);
  const mobileRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const onClickOutside = (e: MouseEvent) => {
      const t = e.target as Node;

      if (regionRef.current && !regionRef.current.contains(t))
        setRegionOpen(false);
      if (langRef.current && !langRef.current.contains(t)) setLangOpen(false);
      if (searchRef.current && !searchRef.current.contains(t))
        setSearchOpen(false);
      if (mobileRef.current && !mobileRef.current.contains(t))
        setMobileMenuOpen(false);
    };

    document.addEventListener("mousedown", onClickOutside);
    return () => document.removeEventListener("mousedown", onClickOutside);
  }, []);

  useEffect(() => {
    const onEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setRegionOpen(false);
        setLangOpen(false);
        setSearchOpen(false);
        setMobileMenuOpen(false);
      }
    };
    document.addEventListener("keydown", onEsc);
    return () => document.removeEventListener("keydown", onEsc);
  }, []);

  return (
    <header className="w-full">
      <div className="bg-[#0f1832] text-white hidden sm:block">
        <div className="mx-auto w-[95%] max-w-7xl h-9 flex items-center justify-between gap-3">
          <div ref={regionRef} className="relative">
            <button
              type="button"
              onClick={() => {
                setRegionOpen((p) => !p);
                setLangOpen(false);
              }}
              className="flex items-center gap-2 text-[12px] sm:text-[13px] opacity-90 hover:opacity-100 transition cursor-pointer"
            >
              <FaLocationDot className="text-white/90" />
              <span className="font-medium">{region}</span>
              <span
                className={`text-white/80 transition-transform duration-200 ${
                  regionOpen ? "rotate-180" : ""
                }`}
              >
                <RiArrowDropDownLine />
              </span>
            </button>

            <div
              className={[
                "absolute left-0 top-[calc(100%+8px)] w-44 bg-white text-[#0f1832] rounded-lg shadow-lg overflow-hidden z-50",
                "origin-top transition-all duration-200",
                regionOpen
                  ? "opacity-100 scale-100 translate-y-0 pointer-events-auto"
                  : "opacity-0 scale-[0.98] -translate-y-1 pointer-events-none",
              ].join(" ")}
            >
              {REGIONS.map((r) => (
                <button
                  key={r}
                  type="button"
                  onClick={() => {
                    setRegion(r);
                    setRegionOpen(false);
                  }}
                  className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-100 transition cursor-pointer ${
                    r === region ? "bg-gray-100 font-semibold" : ""
                  }`}
                >
                  {r}
                </button>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-4 sm:gap-6">
            <a
              href="#"
              className="text-[12px] sm:text-[13px] opacity-90 hover:opacity-100 transition cursor-pointer"
            >
              Yo‘riqnoma
            </a>

            <div ref={langRef} className="relative">
              <button
                type="button"
                onClick={() => {
                  setLangOpen((p) => !p);
                  setRegionOpen(false);
                }}
                className="flex items-center gap-2 text-[12px] sm:text-[13px] uppercase opacity-90 hover:opacity-100 transition cursor-pointer"
              >
                <span className="font-medium">{lang}</span>
                <span
                  className={`text-white/80 transition-transform duration-200 ${
                    langOpen ? "rotate-180" : ""
                  }`}
                >
                  <RiArrowDropDownLine />
                </span>
              </button>

              <div
                className={[
                  "absolute right-0 top-[calc(100%+8px)] w-20 bg-white text-[#0f1832] rounded-lg shadow-lg overflow-hidden z-50",
                  "origin-top transition-all duration-200",
                  langOpen
                    ? "opacity-100 scale-100 translate-y-0 pointer-events-auto"
                    : "opacity-0 scale-[0.98] -translate-y-1 pointer-events-none",
                ].join(" ")}
              >
                {LANGS.map((l) => (
                  <button
                    key={l}
                    type="button"
                    onClick={() => {
                      setLang(l);
                      setLangOpen(false);
                    }}
                    className={`w-full text-left px-3 py-2 text-sm hover:bg-gray-100 transition uppercase cursor-pointer ${
                      l === lang ? "bg-gray-100 font-semibold" : ""
                    }`}
                  >
                    {l}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#18244a] text-white">
        <div className="mx-auto w-[95%] max-w-7xl min-h-[74px] py-3 flex items-center justify-between gap-3">
          <div className="flex items-center gap-3 sm:gap-4 min-w-0">
            <Image
              src="/logo.svg"
              alt="Logo"
              width={44}
              height={44}
              priority
              className="shrink-0 w-10 h-10 sm:w-11 sm:h-11 object-contain"
            />

            <div className="min-w-0 leading-[1.15] text-[11px] xs:text-[12px] sm:text-[14px] font-semibold">
              <div className="whitespace-normal break-words">
                Qurilishda texnik me’yorlash
              </div>
              <div className="whitespace-normal break-words">
                va standartlashtirish
              </div>
              <div className="whitespace-normal break-words">
                ilmiy-tadqiqot instituti
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3 sm:gap-8">
            <div ref={searchRef} className="hidden sm:flex items-center gap-2">
              <div
                className={[
                  "overflow-hidden",
                  "transition-all duration-200 ease-out",
                  searchOpen
                    ? "w-[170px] sm:w-[260px] opacity-100"
                    : "w-0 opacity-0",
                ].join(" ")}
              >
                <input
                  type="text"
                  placeholder="Qidirish..."
                  className="w-full h-9 px-3 rounded-lg bg-white/10 border border-white/15 outline-none text-sm placeholder:text-white/60 focus:border-white/30"
                  autoFocus={searchOpen}
                />
              </div>

              <button
                className="opacity-90 hover:opacity-100 transition cursor-pointer active:scale-[0.98]"
                type="button"
                aria-label="Search"
                onClick={() => setSearchOpen((p) => !p)}
              >
                <FiSearch size={20} />
              </button>
            </div>

            <button
              className="hidden sm:inline-flex relative opacity-90 hover:opacity-100 transition cursor-pointer active:scale-[0.98]"
              type="button"
              aria-label="Bookmarks"
            >
              <FiBookmark size={20} />
              <span className="absolute -top-2 -right-2 w-4 h-4 rounded-full bg-[#2d7ff9] text-[10px] grid place-items-center">
                3
              </span>
            </button>

            <button
              className="hidden sm:inline-flex relative opacity-90 hover:opacity-100 transition cursor-pointer active:scale-[0.98]"
              type="button"
              aria-label="Cart"
            >
              <FiShoppingCart size={20} />
              <span className="absolute -top-2 -right-2 w-4 h-4 rounded-full bg-[#2d7ff9] text-[10px] grid place-items-center">
                4
              </span>
            </button>

            <div className="hidden sm:flex items-center gap-3">
              <div className="w-9 h-9 rounded-full border border-white/35 grid place-items-center">
                <FiUser />
              </div>
              <div className="text-[13px] leading-tight">
                <div className="font-semibold">Kirish</div>
                <a
                  className="text-white/80 hover:text-white transition cursor-pointer"
                  href="#"
                >
                  Ro‘yxatdan o‘tish
                </a>
              </div>
            </div>

            <div
              ref={mobileRef}
              className="flex items-center gap-2 sm:hidden relative"
            >
              <button
                className="opacity-90 hover:opacity-100 transition cursor-pointer active:scale-[0.98]"
                type="button"
                aria-label="Menu"
                onClick={() => setMobileMenuOpen((p) => !p)}
              >
                {mobileMenuOpen ? <FiX size={22} /> : <FiMenu size={22} />}
              </button>

              <div
                className={[
                  "fixed left-1/2 -translate-x-1/2 top-[112px] z-50 w-[95%] max-w-7xl rounded-xl overflow-hidden",
                  "bg-[#23335e] border border-white/10 shadow-lg",
                  "origin-top transition-all duration-200",
                  mobileMenuOpen
                    ? "opacity-100 scale-100 translate-y-0 pointer-events-auto"
                    : "opacity-0 scale-[0.98] -translate-y-1 pointer-events-none",
                ].join(" ")}
              >
                <div className="p-3 flex flex-col gap-3">
                  <div className="flex items-center justify-between gap-3">
                    <div className="relative" ref={regionRef}>
                      <button
                        type="button"
                        onClick={() => {
                          setRegionOpen((p) => !p);
                          setLangOpen(false);
                        }}
                        className="flex items-center gap-2 text-[13px] opacity-95 hover:opacity-100 transition"
                      >
                        <FaLocationDot className="text-white/90" />
                        <span className="font-medium">{region}</span>
                        <span
                          className={`text-white/80 transition-transform duration-200 ${
                            regionOpen ? "rotate-180" : ""
                          }`}
                        >
                          <RiArrowDropDownLine />
                        </span>
                      </button>

                      <div
                        className={[
                          "absolute left-0 top-[calc(100%+8px)] w-44 bg-white text-[#0f1832] rounded-lg shadow-lg overflow-hidden z-50",
                          "origin-top transition-all duration-200",
                          regionOpen
                            ? "opacity-100 scale-100 translate-y-0 pointer-events-auto"
                            : "opacity-0 scale-[0.98] -translate-y-1 pointer-events-none",
                        ].join(" ")}
                      >
                        {REGIONS.map((r) => (
                          <button
                            key={r}
                            type="button"
                            onClick={() => {
                              setRegion(r);
                              setRegionOpen(false);
                            }}
                            className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-100 transition cursor-pointer ${
                              r === region ? "bg-gray-100 font-semibold" : ""
                            }`}
                          >
                            {r}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="relative" ref={langRef}>
                      <button
                        type="button"
                        onClick={() => {
                          setLangOpen((p) => !p);
                          setRegionOpen(false);
                        }}
                        className="flex items-center gap-2 text-[13px] uppercase opacity-95 hover:opacity-100 transition"
                      >
                        <span className="font-medium">{lang}</span>
                        <span
                          className={`text-white/80 transition-transform duration-200 ${
                            langOpen ? "rotate-180" : ""
                          }`}
                        >
                          <RiArrowDropDownLine />
                        </span>
                      </button>

                      <div
                        className={[
                          "absolute right-0 top-[calc(100%+8px)] w-20 bg-white text-[#0f1832] rounded-lg shadow-lg overflow-hidden z-50",
                          "origin-top transition-all duration-200",
                          langOpen
                            ? "opacity-100 scale-100 translate-y-0 pointer-events-auto"
                            : "opacity-0 scale-[0.98] -translate-y-1 pointer-events-none",
                        ].join(" ")}
                      >
                        {LANGS.map((l) => (
                          <button
                            key={l}
                            type="button"
                            onClick={() => {
                              setLang(l);
                              setLangOpen(false);
                            }}
                            className={`w-full text-left px-3 py-2 text-sm hover:bg-gray-100 transition uppercase cursor-pointer ${
                              l === lang ? "bg-gray-100 font-semibold" : ""
                            }`}
                          >
                            {l}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <div className="flex-1">
                      <input
                        type="text"
                        placeholder="Qidirish..."
                        className="w-full h-10 px-3 rounded-lg bg-white/10 border border-white/15 outline-none text-sm placeholder:text-white/60 focus:border-white/30"
                      />
                    </div>
                    <button
                      className="h-10 w-10 grid place-items-center rounded-lg bg-white/10 border border-white/15 opacity-90 hover:opacity-100 transition active:scale-[0.98]"
                      type="button"
                      aria-label="Search"
                    >
                      <FiSearch size={20} />
                    </button>
                  </div>

                  <div className="flex items-center justify-between gap-3">
                    <button
                      className="relative flex-1 h-10 rounded-lg bg-white/10 border border-white/15 flex items-center justify-center gap-2 opacity-90 hover:opacity-100 transition active:scale-[0.98]"
                      type="button"
                    >
                      <FiBookmark size={18} />
                      <span className="text-[13px]">Bookmark</span>
                      <span className="absolute -top-2 -right-2 w-4 h-4 rounded-full bg-[#2d7ff9] text-[10px] grid place-items-center">
                        3
                      </span>
                    </button>

                    <button
                      className="relative flex-1 h-10 rounded-lg bg-white/10 border border-white/15 flex items-center justify-center gap-2 opacity-90 hover:opacity-100 transition active:scale-[0.98]"
                      type="button"
                    >
                      <FiShoppingCart size={18} />
                      <span className="text-[13px]">Cart</span>
                      <span className="absolute -top-2 -right-2 w-4 h-4 rounded-full bg-[#2d7ff9] text-[10px] grid place-items-center">
                        4
                      </span>
                    </button>
                  </div>

                  <div className="rounded-lg bg-white/10 border border-white/15 p-3 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full border border-white/35 grid place-items-center shrink-0">
                      <FiUser />
                    </div>
                    <div className="text-[13px] leading-tight">
                      <div className="font-semibold">Kirish</div>
                      <a
                        className="text-white/80 hover:text-white transition cursor-pointer"
                        href="#"
                      >
                        Ro‘yxatdan o‘tish
                      </a>
                    </div>
                  </div>

                  <a
                    href="#"
                    className="px-3 py-2 rounded-lg text-white/90 hover:text-white hover:bg-white/10 transition cursor-pointer"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Yo‘riqnoma
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <nav className="bg-[#23335e] text-white hidden sm:block">
        <div className="mx-auto w-[95%] max-w-7xl h-12 flex items-center">
          <div className="w-full flex items-center justify-between text-[14px]">
            {NAV_LINKS.map((item, idx) => {
              const isActive = idx === 0;
              return (
                <a
                  key={item.label}
                  href={item.href}
                  className={[
                    "py-3 transition cursor-pointer",
                    isActive
                      ? "font-semibold border-b-2 border-white"
                      : "text-white/70 hover:text-white",
                  ].join(" ")}
                >
                  {item.label}
                </a>
              );
            })}
          </div>
        </div>
      </nav>

      <nav className="bg-[#23335e] text-white sm:hidden">
        <div className="mx-auto w-[95%] h-12 flex items-center">
          <div className="w-full overflow-x-auto no-scrollbar">
            <div className="flex items-center gap-6 text-[13px] whitespace-nowrap">
              {NAV_LINKS.map((item, idx) => (
                <a
                  key={item.label}
                  href={item.href}
                  className={[
                    "py-3 transition cursor-pointer",
                    idx === 0
                      ? "font-semibold border-b-2 border-white"
                      : "text-white/70 hover:text-white",
                  ].join(" ")}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
