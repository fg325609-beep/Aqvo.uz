import React from 'react';

const GALLERY_TOP = [
  { src: 'https://placehold.co/200x200/8B1A1A/ffffff?text=AQVO+1', alt: "AQVO tabiiy mahsulot bankasi yaqin masofadan" },
  { src: 'https://placehold.co/200x200/D2540B/ffffff?text=AQVO+2', alt: "AQVO sousi non ustida" },
  { src: 'https://placehold.co/200x200/3d2b1f/e8c99a?text=AQVO+3', alt: "AQVO murabbosi idishda" },
  { src: 'https://placehold.co/200x200/EC9E59/3d1c00?text=Mozzol+JIZ', alt: "Mozzol JIZ mahsuloti qadoqda" },
  { src: 'https://placehold.co/200x200/991B1B/ffffff?text=AQVO+5', alt: "AQVO mahsulotlari to'plami" },
  { src: 'https://placehold.co/200x200/631419/ffffff?text=AQVO+6', alt: "AQVO ishlab chiqarish jarayoni" },
];

const GALLERY_BOTTOM = [
  { src: 'https://placehold.co/200x200/2b2b2b/e8c99a?text=AQVO+7', alt: "AQVO mahsulotlari qadoqlash sexi" },
  { src: 'https://placehold.co/200x200/7a1414/ffffff?text=AQVO+8', alt: "AQVO oshxonada tayyorlangan taom" },
  { src: 'https://placehold.co/200x200/c0392b/ffffff?text=AQVO+9', alt: "AQVO mahsuloti dasturxon ustida" },
  { src: 'https://placehold.co/200x200/3d1c00/e8c99a?text=AQVO+10', alt: "AQVO tabiiy ingredientlar yaqindan" },
  { src: 'https://placehold.co/200x200/8B1A1A/ffffff?text=AQVO+11', alt: "AQVO mahsuloti idishda yaqin ko'rinish" },
  { src: 'https://placehold.co/200x200/D2540B/3d1c00?text=AQVO+12', alt: "AQVO oilaviy dasturxon lahzasi" },
];

function GalleryRow({ items }) {
  return (
    <div className="grid grid-cols-3 gap-2 sm:grid-cols-6 sm:gap-3">
      {items.map((item) => (
        <img
          key={item.alt}
          src={item.src}
          alt={item.alt}
          width={200}
          height={200}
          loading="lazy"
          className="aspect-square w-full rounded-md object-cover shadow-sm transition-transform hover:scale-[1.03]"
        />
      ))}
    </div>
  );
}

export default function Gallery() {
  return (
    <section
      className="bg-brand-dark px-4 py-10 sm:px-6 lg:px-8"
      aria-labelledby="gallery-heading"
    >
      <h2 id="gallery-heading" className="sr-only">
        Foto galereya
      </h2>
      <div className="mx-auto flex max-w-7xl flex-col gap-2 sm:gap-3">
        <GalleryRow items={GALLERY_TOP} />
        <GalleryRow items={GALLERY_BOTTOM} />
      </div>
    </section>
  );
}
