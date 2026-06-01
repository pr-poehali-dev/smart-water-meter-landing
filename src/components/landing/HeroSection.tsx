import { METER_IMG, ADVANTAGES } from "./constants";

function MiniChart() {
  const bars = [45, 62, 38, 78, 55, 90, 43, 67, 82, 59, 71, 95];
  return (
    <div className="flex items-end gap-1 h-16">
      {bars.map((h, i) => (
        <div
          key={i}
          className="flex-1 rounded-sm"
          style={{
            height: `${h}%`,
            background: i === 11
              ? "var(--cyan)"
              : i > 8
              ? "rgba(0,229,255,0.5)"
              : "rgba(0,229,255,0.2)",
          }}
        />
      ))}
    </div>
  );
}

function HeroDevice() {
  return (
    <div className="relative w-full max-w-md mx-auto animate-float">
      <div
        className="absolute blur-3xl rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(0,229,255,0.12) 0%, transparent 70%)",
          top: "10%", left: "5%", right: "5%", bottom: "0",
        }}
      />
      <div
        className="relative rounded-2xl overflow-hidden scanline-container"
        style={{ border: "1px solid rgba(0,229,255,0.3)", boxShadow: "0 0 40px rgba(0,229,255,0.15)" }}
      >
        <img src={METER_IMG} alt="Умный счётчик воды АкваСенс" className="w-full object-cover" />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(180deg, transparent 50%, rgba(8,13,20,0.85) 100%)" }}
        />
        <div
          className="absolute top-4 right-4 flex items-center gap-2 px-3 py-1 rounded-full text-xs font-display tracking-widest"
          style={{ background: "rgba(0,229,255,0.1)", border: "1px solid rgba(0,229,255,0.4)", color: "var(--cyan)" }}
        >
          <span className="w-2 h-2 rounded-full animate-blink" style={{ background: "var(--cyan)" }} />
          LIVE
        </div>
        <div className="absolute bottom-4 left-4 right-4">
          <div className="rounded-xl p-3" style={{ background: "rgba(8,13,20,0.85)", border: "1px solid rgba(0,229,255,0.2)" }}>
            <div className="text-xs mb-2 font-display tracking-widest" style={{ color: "rgba(0,229,255,0.6)" }}>РАСХОД / СУТКИ</div>
            <MiniChart />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function HeroSection() {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-screen flex items-center grid-bg overflow-hidden" id="hero">
        <div className="absolute top-20 left-0 w-96 h-96 rounded-full blur-3xl pointer-events-none" style={{ background: "rgba(0,229,255,0.05)" }} />
        <div className="absolute bottom-20 right-0 w-80 h-80 rounded-full blur-3xl pointer-events-none" style={{ background: "rgba(0,100,200,0.08)" }} />
        <div className="max-w-7xl mx-auto px-6 pt-24 pb-16 grid md:grid-cols-2 gap-16 items-center w-full">
          <div>
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8 font-display text-xs tracking-widest animate-fade-in-up"
              style={{ border: "1px solid rgba(0,229,255,0.3)", color: "var(--cyan)", background: "rgba(0,229,255,0.05)" }}
            >
              <span className="w-2 h-2 rounded-full animate-blink" style={{ background: "var(--cyan)" }} />
              СЛЕДУЮЩЕЕ ПОКОЛЕНИЕ УЧЁТА ВОДЫ
            </div>
            <h1
              className="font-display text-5xl md:text-7xl font-bold leading-tight mb-6 animate-fade-in-up delay-100"
              style={{ color: "#fff" }}
            >
              УМНЫЙ<br />
              <span className="glow-text" style={{ color: "var(--cyan)" }}>КОНТРОЛЬ</span><br />
              ВОДЫ
            </h1>
            <p
              className="text-lg leading-relaxed mb-10 animate-fade-in-up delay-200"
              style={{ color: "rgba(200,220,230,0.7)", maxWidth: "440px" }}
            >
              Точный учёт, подробная аналитика и автоматические отчёты. Видите каждый литр — экономите до 30% расходов на воду.
            </p>
            <div className="flex flex-wrap gap-4 animate-fade-in-up delay-300">
              <a
                href="#contacts"
                className="font-display tracking-wider px-8 py-4 rounded text-base font-semibold transition-all duration-300 hover:opacity-90 hover:scale-105"
                style={{ background: "var(--cyan)", color: "#080d14" }}
              >
                ОСТАВИТЬ ЗАЯВКУ
              </a>
              <a
                href="#howworks"
                className="font-display tracking-wider px-8 py-4 rounded text-base font-semibold transition-all duration-300 hover:opacity-80"
                style={{ border: "1px solid rgba(0,229,255,0.4)", color: "var(--cyan)", background: "transparent" }}
              >
                КАК ЭТО РАБОТАЕТ
              </a>
            </div>
          </div>
          <div className="animate-fade-in-up delay-400">
            <HeroDevice />
          </div>
        </div>
      </section>

      {/* STATS TICKER */}
      <div
        className="py-6 overflow-hidden"
        style={{
          borderTop: "1px solid rgba(0,229,255,0.1)",
          borderBottom: "1px solid rgba(0,229,255,0.1)",
          background: "rgba(0,229,255,0.03)",
        }}
      >
        <div className="flex gap-10 md:gap-16 px-6 flex-wrap justify-center">
          {ADVANTAGES.map((a) => (
            <div key={a.label} className="flex items-center gap-4">
              <div className="font-display text-3xl font-bold glow-text" style={{ color: "var(--cyan)" }}>{a.value}</div>
              <div>
                <div className="font-semibold text-sm" style={{ color: "#d0e8f0" }}>{a.label}</div>
                <div className="text-xs" style={{ color: "rgba(200,220,230,0.5)" }}>{a.sub}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
