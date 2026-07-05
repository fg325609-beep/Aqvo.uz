import React, { useState } from 'react';

const PRODUCT_OPTIONS = [
  { value: '', label: "Mahsulot turini tanlang" },
  { value: 'sous', label: 'Tabiiy sous' },
  { value: 'murabbo', label: 'Murabbo' },
  { value: 'ajika', label: 'Ajika' },
  { value: 'jiz', label: "Mazali JIZ" },
];

const DELIVERY_OPTIONS = [
  { value: '', label: "Yetkazib berish turini tanlang" },
  { value: 'courier', label: "Kuryer orqali" },
  { value: 'pickup', label: "Do'kondan olib ketish" },
];

export default function OrderForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    address: '',
    product: '',
    delivery: '',
    comment: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Integration point: send formData to backend / Telegram Bot API, etc.
    setSubmitted(true);
  };

  return (
    <section id="order" className="relative isolate overflow-hidden bg-brand-dark py-20">
      <img
        src="https://images.unsplash.com/photo-1608197492762-1e08c9f5a0e1?auto=format&fit=crop&w=1600&q=60"
        alt="AQVO tabiiy mahsulot bankalari qorong'u fonda"
        loading="lazy"
        className="absolute inset-0 -z-10 h-full w-full object-cover"
      />
      <div className="absolute inset-0 -z-10 bg-black/70" aria-hidden="true" />

      <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div className="text-white">
          <h2 className="font-display text-2xl font-extrabold uppercase leading-tight tracking-wide sm:text-3xl">
            AQVO bilan yangicha ta'mni his eting
          </h2>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-white/80 sm:text-base">
            Buyurtma shaklini to'ldiring — bizning operatorlarimiz siz bilan
            tez orada bog'lanadi va yetkazib berish tafsilotlarini
            aniqlashtiradi.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="rounded-2xl bg-white/95 p-6 shadow-2xl sm:p-8"
          aria-labelledby="order-form-heading"
        >
          <h3 id="order-form-heading" className="sr-only">
            Buyurtma berish shakli
          </h3>

          {submitted && (
            <p
              role="status"
              className="mb-4 rounded-md bg-green-50 px-4 py-3 text-sm font-medium text-green-700"
            >
              Buyurtmangiz qabul qilindi! Tez orada siz bilan bog'lanamiz.
            </p>
          )}

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="flex flex-col gap-1.5">
              <label htmlFor="fullName" className="text-xs font-semibold text-brand-dark">
                Ism familiya
              </label>
              <input
                id="fullName"
                name="fullName"
                type="text"
                required
                autoComplete="name"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Ismingizni kiriting"
                title="Ism familiyangizni kiriting"
                className="rounded-lg border border-gray-300 px-3 py-2.5 text-sm text-gray-800 outline-none transition-colors focus:border-brand"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label htmlFor="phone" className="text-xs font-semibold text-brand-dark">
                Telefon raqam
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                required
                autoComplete="tel"
                pattern="^\+?[0-9\s\-()]{9,15}$"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+998 90 123 45 67"
                title="Telefon raqamingizni kiriting"
                className="rounded-lg border border-gray-300 px-3 py-2.5 text-sm text-gray-800 outline-none transition-colors focus:border-brand"
              />
            </div>

            <div className="flex flex-col gap-1.5 sm:col-span-2">
              <label htmlFor="address" className="text-xs font-semibold text-brand-dark">
                Manzil
              </label>
              <input
                id="address"
                name="address"
                type="text"
                required
                autoComplete="street-address"
                value={formData.address}
                onChange={handleChange}
                placeholder="Shahar, tuman, ko'cha"
                title="Yetkazib berish manzilini kiriting"
                className="rounded-lg border border-gray-300 px-3 py-2.5 text-sm text-gray-800 outline-none transition-colors focus:border-brand"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label htmlFor="product" className="text-xs font-semibold text-brand-dark">
                Mahsulot turi
              </label>
              <select
                id="product"
                name="product"
                required
                value={formData.product}
                onChange={handleChange}
                title="Mahsulot turini tanlang"
                className="rounded-lg border border-gray-300 bg-white px-3 py-2.5 text-sm text-gray-800 outline-none transition-colors focus:border-brand"
              >
                {PRODUCT_OPTIONS.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex flex-col gap-1.5">
              <label htmlFor="delivery" className="text-xs font-semibold text-brand-dark">
                Yetkazib berish
              </label>
              <select
                id="delivery"
                name="delivery"
                required
                value={formData.delivery}
                onChange={handleChange}
                title="Yetkazib berish turini tanlang"
                className="rounded-lg border border-gray-300 bg-white px-3 py-2.5 text-sm text-gray-800 outline-none transition-colors focus:border-brand"
              >
                {DELIVERY_OPTIONS.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex flex-col gap-1.5 sm:col-span-2">
              <label htmlFor="comment" className="text-xs font-semibold text-brand-dark">
                Izoh (ixtiyoriy)
              </label>
              <textarea
                id="comment"
                name="comment"
                rows={3}
                value={formData.comment}
                onChange={handleChange}
                placeholder="Qo'shimcha izoh qoldiring"
                title="Qo'shimcha izoh"
                className="resize-none rounded-lg border border-gray-300 px-3 py-2.5 text-sm text-gray-800 outline-none transition-colors focus:border-brand"
              />
            </div>
          </div>

          <button
            type="submit"
            className="mt-6 w-full rounded-full bg-accent px-6 py-3 text-sm font-bold uppercase tracking-wide text-brand-dark transition-colors hover:bg-accent-dark hover:text-white sm:w-auto sm:px-10"
            title="Buyurtma berish"
            aria-label="Buyurtmani yuborish"
          >
            Buyurtma berish
          </button>
        </form>
      </div>
    </section>
  );
}
