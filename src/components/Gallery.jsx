import React from 'react';

// Yuqori qator (rasmlar, o'ngdan chapga yuradi)
const GALLERY_TOP = [
  'src/components/img/jiz1.jpg', 'src/components/img/jiz2.jpg',
  'src/components/img/jiz3.jpg', 'src/components/img/myaco.jpg',
  'src/components/img/jiz3.jpg', 'src/components/img/myaco.jpg',
  'src/components/img/til.jpg', 'src/components/img/jiz4.jpg',
  'src/components/img/til.jpg', 'src/components/img/jiz4.jpg',
];

// Pastki qator (rasmlar, chapdan o'ngga yuradi)
const GALLERY_BOTTOM = [
  'src/components/img/til.jpg', 'src/components/img/myaco.jpg',
  'src/components/img/jiz1.jpg', 'src/components/img/jiz2.jpg',
  'src/components/img/jiz1.jpg', 'src/components/img/jiz2.jpg',
  'src/components/img/jiz3.jpg', 'src/components/img/banner (2).jpg',
  'src/components/img/pamidor.jpg', 'src/components/img/qalampir.jpg',
  'src/components/img/pamidor.jpg', 'src/components/img/qalampir.jpg',
];

export default function Gallery() {
  return (
    <section id="gallery" className="bg-[#901717] py-10 overflow-hidden w-full" aria-labelledby="gallery-heading">
      <style>{`
        @keyframes scrollLeft {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes scrollRight {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .animate-left {
          animation: scrollLeft 40s linear infinite;
        }
        .animate-right {
          animation: scrollRight 40s linear infinite;
        }
        .animate-left:hover,
        .animate-right:hover {
          animation-play-state: paused;
        }
      `}</style>

      {/* Sarlavha */}
      <div className="text-center mb-8 px-6">
        <h2 id="gallery-heading" className="font-display text-3xl font-bold uppercase tracking-wider text-white drop-shadow-lg">
          BIZNING GALEREYA
        </h2>
        <p className="text-white/70 text-sm mt-2">Mahsulotlarimizning eng yaxshi lavhalari</p>
      </div>

      <div className="flex w-full flex-col gap-6">
        {/* Yuqori qator: O'ngdan chapga */}
        <div className="flex w-full overflow-hidden">
          <div className="flex gap-3 animate-left px-3">
            {[...GALLERY_TOP, ...GALLERY_TOP].map((src, i) => (
              <div key={`top-${i}`} className="relative group flex-shrink-0">
                <img
                  src={src}
                  alt="AQVO mahsuloti"
                  className="h-40 w-40 rounded-2xl object-cover shadow-lg transition-all duration-500 group-hover:scale-105 group-hover:shadow-xl"
                />
                <div className="absolute inset-0 rounded-2xl bg-black/0 group-hover:bg-black/20 transition-all duration-300" />
              </div>
            ))}
          </div>
        </div>

        {/* Pastki qator: Chapdan o'ngga */}
        <div className="flex w-full overflow-hidden">
          <div className="flex gap-3 animate-right px-3">
            {[...GALLERY_BOTTOM, ...GALLERY_BOTTOM].map((src, i) => (
              <div key={`bottom-${i}`} className="relative group flex-shrink-0">
                <img
                  src={src}
                  alt="AQVO mahsuloti"
                  className="h-40 w-40 rounded-2xl object-cover shadow-lg transition-all duration-500 group-hover:scale-105 group-hover:shadow-xl"
                />
                <div className="absolute inset-0 rounded-2xl bg-black/0 group-hover:bg-black/20 transition-all duration-300" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}