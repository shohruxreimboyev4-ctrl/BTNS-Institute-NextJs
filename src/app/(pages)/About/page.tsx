import React from "react";
import Image from "next/image";

const CATEGORIES = [
  { title: "Beton va qorishmalar", icon: "/icons/cat-1.svg" },
  { title: "Kabel mahsulotlari", icon: "/icons/cat-2.svg" },
  { title: "To‘ldiruvchilar", icon: "/icons/cat-3.svg" },
  { title: "Metall prokat va metall buyumlar", icon: "/icons/cat-4.svg" },
  { title: "Yog‘och material va buyumlar", icon: "/icons/cat-5.svg" },
  { title: "Plastmassalar", icon: "/icons/cat-6.svg" },
  { title: "Keramika materiallari va buyumlar", icon: "/icons/cat-7.svg" },
  {
    title: "Issiqlik izolyatsiyasi va akustik materiallar",
    icon: "/icons/cat-8.svg",
  },
  {
    title: "Tom yopish va gidroizolyatsiya materiallari",
    icon: "/icons/cat-9.svg",
  },
  {
    title: "Qoplamali va yopishtiruvchi materiallar va buyumlar",
    icon: "/icons/cat-10.svg",
  },
];

const Category = () => {
  return (
    <div className="Category bg-white">
      <div className="mx-auto w-[95%] max-w-7xl py-10 sm:py-12">
        {/* GRID */}
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {CATEGORIES.map((c) => (
            <div
              key={c.title}
              className="
                rounded-xl bg-white
                border border-[#EAF0FF]
                shadow-[0_8px_24px_rgba(15,24,50,0.08)]
                px-5 py-4
                flex items-center gap-4
                transition
                hover:-translate-y-[2px]
                hover:shadow-[0_14px_34px_rgba(15,24,50,0.12)]
                cursor-pointer
              "
            >
              <div className="shrink-0 w-10 h-10 grid place-items-center">
                <Image
                  src={c.icon}
                  alt={c.title}
                  width={40}
                  height={40}
                  className="w-10 h-10 object-contain"
                />
              </div>

              <p className="text-[#1C2E66] font-semibold text-[14px] leading-snug">
                {c.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Category;
