import { useState, useEffect, useCallback } from "react";
import Icon from "@/components/ui/icon";

const BANNER_IMG = "https://cdn.poehali.dev/projects/527349b6-a2ba-4d9e-83eb-5e072259af46/bucket/d3c0f163-64ad-477f-b54b-5b7509aad46e.jpg";

const BANNERS = [
  {
    id: 1,
    tag: "Новая линейка",
    title: "Умный счётчик воды\nАКВАМЕТРИК-15",
    subtitle: "Надёжный · Умный · Универсальный",
    desc: "12 лет автономной работы, управление по NFC и поддержка всех каналов связи. Идеален для управляющих компаний.",
    cta: "Узнать подробнее",
    ctaSecondary: "Скачать каталог",
    img: BANNER_IMG,
    accent: "#1976d2",
    bg: "linear-gradient(135deg, #e3f2fd 0%, #bbdefb 40%, #e1f5fe 100%)",
  },
  {
    id: 2,
    tag: "Спецпредложение",
    title: "Партнёрская программа\nдля УК и ТСЖ",
    subtitle: "Скидки · Обучение · Поддержка",
    desc: "Станьте сертифицированным партнёром АкваМетрик. Специальные условия поставки, бесплатное обучение и техподдержка 24/7.",
    cta: "Стать партнёром",
    ctaSecondary: "Условия программы",
    img: null,
    accent: "#0277bd",
    bg: "linear-gradient(135deg, #e1f5fe 0%, #b3e5fc 40%, #e8f5e9 100%)",
    icon: "Handshake",
  },
  {
    id: 3,
    tag: "Интеграция",
    title: "Подключение к\nГИС ЖКХ за 1 день",
    subtitle: "Автоматизация · Отчётность · Контроль",
    desc: "Автоматическая передача показаний в ГИС ЖКХ, АСКУЭ и личный кабинет жильцов. Никакого ручного труда.",
    cta: "Запросить интеграцию",
    ctaSecondary: "Документация API",
    img: null,
    accent: "#00838f",
    bg: "linear-gradient(135deg, #e0f7fa 0%, #b2ebf2 40%, #e3f2fd 100%)",
    icon: "Database",
  },
];

export default function BannerCarousel() {
  const [active, setActive] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const goTo = useCallback((idx: number) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setTimeout(() => {
      setActive(idx);
      setIsAnimating(false);
    }, 250);
  }, [isAnimating]);

  const next = useCallback(() => goTo((active + 1) % BANNERS.length), [active, goTo]);
  const prev = useCallback(() => goTo((active - 1 + BANNERS.length) % BANNERS.length), [active, goTo]);

  useEffect(() => {
    const t = setInterval(next, 6000);
    return () => clearInterval(t);
  }, [next]);

  const banner = BANNERS[active];

  return (
    <section
      className="relative overflow-hidden"
      style={{ minHeight: "560px", background: banner.bg, transition: "background 0.5s ease" }}
    >
      {/* Decorative circles */}
      <div className="absolute -right-24 -top-24 w-96 h-96 rounded-full pointer-events-none" style={{ background: "rgba(25,118,210,0.06)" }} />
      <div className="absolute right-48 bottom-0 w-64 h-64 rounded-full pointer-events-none" style={{ background: "rgba(0,184,212,0.07)" }} />
      <div className="absolute -left-12 top-1/2 -translate-y-1/2 w-48 h-48 rounded-full pointer-events-none" style={{ background: "rgba(25,118,210,0.04)" }} />

      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-20 flex flex-col md:flex-row items-center gap-12 min-h-[560px]">
        {/* Text */}
        <div className="flex-1 z-10" style={{ opacity: isAnimating ? 0 : 1, transition: "opacity 0.25s ease" }}>
          <div
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold mb-5"
            style={{ background: "rgba(25,118,210,0.1)", color: banner.accent, border: `1px solid ${banner.accent}30` }}
          >
            <span className="w-1.5 h-1.5 rounded-full animate-blink" style={{ background: banner.accent }} />
            {banner.tag}
          </div>

          <h1
            className="font-display text-4xl md:text-6xl font-bold leading-tight mb-3"
            style={{ color: "#0d1b2a", whiteSpace: "pre-line" }}
          >
            {banner.title}
          </h1>

          <div className="flex items-center gap-2 mb-5">
            {banner.subtitle.split(" · ").map((s, i) => (
              <span key={i} className="flex items-center gap-1.5">
                {i > 0 && <span style={{ color: "rgba(25,118,210,0.3)" }}>·</span>}
                <span className="text-sm font-semibold" style={{ color: banner.accent }}>{s}</span>
              </span>
            ))}
          </div>

          <p className="text-base leading-relaxed mb-8 max-w-lg" style={{ color: "#546e8a" }}>
            {banner.desc}
          </p>

          <div className="flex flex-wrap gap-3">
            <button
              className="font-display text-sm tracking-wide px-6 py-3 rounded-xl font-semibold transition-all duration-200 hover:scale-105 hover:shadow-lg"
              style={{ background: banner.accent, color: "#fff" }}
            >
              {banner.cta}
            </button>
            <button
              className="font-display text-sm tracking-wide px-6 py-3 rounded-xl font-semibold transition-all duration-200 hover:scale-105"
              style={{ background: "white", color: banner.accent, border: `1.5px solid ${banner.accent}40` }}
            >
              {banner.ctaSecondary}
            </button>
          </div>
        </div>

        {/* Visual */}
        <div
          className="flex-1 flex items-center justify-center z-10 max-w-xl w-full"
          style={{ opacity: isAnimating ? 0 : 1, transition: "opacity 0.25s ease" }}
        >
          {banner.img ? (
            <img
              src={banner.img}
              alt="Умный счётчик воды"
              className="w-full max-w-lg object-contain drop-shadow-2xl animate-float"
              style={{ filter: "drop-shadow(0 20px 40px rgba(25,118,210,0.2))" }}
            />
          ) : (
            <div
              className="w-72 h-72 rounded-3xl flex items-center justify-center animate-float"
              style={{
                background: "rgba(255,255,255,0.7)",
                border: `2px solid ${banner.accent}25`,
                boxShadow: `0 20px 60px ${banner.accent}20`,
              }}
            >
              <Icon name={banner.icon || "Star"} size={96} style={{ color: banner.accent, opacity: 0.7 }} fallback="Star" />
            </div>
          )}
        </div>
      </div>

      {/* Controls */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-4 z-20">
        <button
          onClick={prev}
          className="w-8 h-8 rounded-full flex items-center justify-center transition-all hover:scale-110"
          style={{ background: "white", boxShadow: "0 2px 8px rgba(0,0,0,0.12)", color: "#1976d2" }}
        >
          <Icon name="ChevronLeft" size={16} />
        </button>

        <div className="flex items-center gap-2">
          {BANNERS.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className={`carousel-dot ${i === active ? "active" : ""}`}
            />
          ))}
        </div>

        <button
          onClick={next}
          className="w-8 h-8 rounded-full flex items-center justify-center transition-all hover:scale-110"
          style={{ background: "white", boxShadow: "0 2px 8px rgba(0,0,0,0.12)", color: "#1976d2" }}
        >
          <Icon name="ChevronRight" size={16} />
        </button>
      </div>

      {/* Slide counter */}
      <div className="absolute bottom-6 right-8 font-display text-xs tracking-widest" style={{ color: "rgba(25,118,210,0.4)" }}>
        {String(active + 1).padStart(2, "0")} / {String(BANNERS.length).padStart(2, "0")}
      </div>
    </section>
  );
}
