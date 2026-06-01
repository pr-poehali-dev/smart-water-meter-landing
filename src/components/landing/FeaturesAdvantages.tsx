import Icon from "@/components/ui/icon";
import { FEATURES, STEPS } from "./constants";

export default function FeaturesAdvantages() {
  return (
    <>
      {/* FEATURES */}
      <section id="features" className="py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <div className="font-display text-xs tracking-widest mb-4" style={{ color: "var(--cyan)" }}>— ВОЗМОЖНОСТИ —</div>
            <h2 className="font-display text-4xl md:text-5xl font-bold" style={{ color: "#fff" }}>
              Технологии на страже<br />каждой капли
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {FEATURES.map((f) => (
              <div
                key={f.title}
                className="card-hover rounded-2xl p-8"
                style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(0,229,255,0.12)" }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-6"
                  style={{ background: "rgba(0,229,255,0.1)", border: "1px solid rgba(0,229,255,0.25)" }}
                >
                  <Icon name={f.icon} size={22} fallback="Star" style={{ color: "var(--cyan)" }} />
                </div>
                <h3 className="font-display text-lg font-semibold mb-3" style={{ color: "#fff" }}>{f.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "rgba(200,220,230,0.6)" }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ADVANTAGES / DASHBOARD */}
      <section id="advantages" className="py-28 relative overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-40" />
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-64 h-64 rounded-full blur-3xl pointer-events-none" style={{ background: "rgba(0,229,255,0.06)" }} />
        <div className="max-w-7xl mx-auto px-6 relative">
          <div className="text-center mb-20">
            <div className="font-display text-xs tracking-widest mb-4" style={{ color: "var(--cyan)" }}>— ПРЕИМУЩЕСТВА —</div>
            <h2 className="font-display text-4xl md:text-5xl font-bold" style={{ color: "#fff" }}>
              Аналитика, которая<br />говорит на языке цифр
            </h2>
          </div>

          {/* Dashboard mockup */}
          <div
            className="rounded-3xl overflow-hidden border mb-16 scanline-container"
            style={{ border: "1px solid rgba(0,229,255,0.2)", background: "rgba(8,13,20,0.9)" }}
          >
            <div
              className="flex items-center justify-between px-6 py-4 border-b"
              style={{ borderColor: "rgba(0,229,255,0.1)" }}
            >
              <div className="font-display text-sm tracking-widest" style={{ color: "var(--cyan)" }}>АКВАДАННЫЕ / ДАШБОРД</div>
              <div className="flex items-center gap-2 text-xs" style={{ color: "rgba(0,229,255,0.6)" }}>
                <span className="w-2 h-2 rounded-full animate-blink" style={{ background: "var(--cyan)" }} />
                ОБНОВЛЕНО: СЕЙЧАС
              </div>
            </div>
            <div className="p-6 md:p-10 grid md:grid-cols-3 gap-6">
              <div
                className="md:col-span-2 rounded-2xl p-6"
                style={{ background: "rgba(0,229,255,0.03)", border: "1px solid rgba(0,229,255,0.1)" }}
              >
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <div className="font-display text-xs tracking-widest mb-1" style={{ color: "rgba(0,229,255,0.5)" }}>ПОТРЕБЛЕНИЕ ВОДЫ</div>
                    <div className="font-display text-3xl font-bold" style={{ color: "#fff" }}>
                      2 847 <span className="text-base font-normal" style={{ color: "var(--cyan)" }}>л/мес</span>
                    </div>
                  </div>
                  <div
                    className="flex items-center gap-1 px-3 py-1 rounded-full text-xs font-display"
                    style={{ background: "rgba(0,229,255,0.1)", color: "var(--cyan)" }}
                  >
                    <Icon name="TrendingDown" size={12} />
                    −18%
                  </div>
                </div>
                <div className="flex items-end gap-2 h-28">
                  {[65, 48, 72, 55, 80, 43, 90, 62, 75, 58, 85, 70].map((h, i) => (
                    <div key={i} className="flex-1 flex flex-col items-center gap-1">
                      <div
                        className="w-full rounded-t"
                        style={{
                          height: `${h}%`,
                          background: i === 11 ? "var(--cyan)" : "rgba(0,229,255,0.25)",
                        }}
                      />
                      <span style={{ color: "rgba(0,229,255,0.3)", fontSize: "9px" }}>
                        {["Я","Ф","М","А","М","И","И","А","С","О","Н","Д"][i]}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col gap-4">
                {[
                  { label: "Сегодня", val: "94 л", delta: "+2 л", icon: "Droplets" },
                  { label: "Норма", val: "120 л", delta: "−26 л", icon: "Target" },
                  { label: "Утечки", val: "0", delta: "Норма", icon: "ShieldCheck" },
                  { label: "Экономия", val: "₽840", delta: "в этом месяце", icon: "Coins" },
                ].map((m) => (
                  <div
                    key={m.label}
                    className="rounded-xl p-4 flex items-center gap-4"
                    style={{ background: "rgba(0,229,255,0.03)", border: "1px solid rgba(0,229,255,0.1)" }}
                  >
                    <div className="w-9 h-9 rounded-lg flex-shrink-0 flex items-center justify-center" style={{ background: "rgba(0,229,255,0.1)" }}>
                      <Icon name={m.icon} size={16} fallback="Circle" style={{ color: "var(--cyan)" }} />
                    </div>
                    <div>
                      <div className="font-display text-lg font-bold leading-none" style={{ color: "#fff" }}>{m.val}</div>
                      <div className="text-xs mt-1" style={{ color: "rgba(200,220,230,0.5)" }}>
                        {m.label} · <span style={{ color: "var(--cyan)" }}>{m.delta}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: "FileText", title: "Автоотчёты", desc: "PDF и Excel для управляющих компаний, ГИС ЖКХ и ресурсоснабжающих организаций." },
              { icon: "Bell", title: "Умные алерты", desc: "Алгоритм сам решает, когда уведомить: аномалия, утечка или счёт выходит за бюджет." },
              { icon: "Users", title: "Мультиобъект", desc: "Управляйте сотнями точек учёта из единого кабинета с фильтрами, сортировкой и экспортом." },
            ].map((b) => (
              <div key={b.title} className="flex gap-4">
                <div
                  className="w-10 h-10 rounded-xl flex-shrink-0 flex items-center justify-center mt-1"
                  style={{ background: "rgba(0,229,255,0.08)", border: "1px solid rgba(0,229,255,0.2)" }}
                >
                  <Icon name={b.icon} size={18} fallback="Star" style={{ color: "var(--cyan)" }} />
                </div>
                <div>
                  <div className="font-display font-semibold mb-1" style={{ color: "#fff" }}>{b.title}</div>
                  <div className="text-sm leading-relaxed" style={{ color: "rgba(200,220,230,0.6)" }}>{b.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="howworks" className="py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <div className="font-display text-xs tracking-widest mb-4" style={{ color: "var(--cyan)" }}>— КАК РАБОТАЕТ —</div>
            <h2 className="font-display text-4xl md:text-5xl font-bold" style={{ color: "#fff" }}>
              От установки до данных<br />за один день
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {STEPS.map((s, i) => (
              <div
                key={s.num}
                className="relative card-hover rounded-2xl p-8"
                style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(0,229,255,0.12)" }}
              >
                {i < STEPS.length - 1 && (
                  <div className="hidden lg:block absolute top-12 left-full w-6 h-px z-10" style={{ background: "rgba(0,229,255,0.3)" }} />
                )}
                <div className="font-display text-5xl font-bold mb-4 leading-none" style={{ color: "rgba(0,229,255,0.15)" }}>{s.num}</div>
                <h3 className="font-display text-lg font-semibold mb-3" style={{ color: "#fff" }}>{s.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "rgba(200,220,230,0.6)" }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA BAND */}
      <div
        className="py-20 relative overflow-hidden"
        style={{
          background: "linear-gradient(135deg, rgba(0,229,255,0.07) 0%, rgba(0,100,200,0.09) 100%)",
          borderTop: "1px solid rgba(0,229,255,0.15)",
          borderBottom: "1px solid rgba(0,229,255,0.15)",
        }}
      >
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div className="max-w-4xl mx-auto px-6 text-center relative">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6" style={{ color: "#fff" }}>
            Готовы сократить расходы<br />на воду прямо сейчас?
          </h2>
          <p className="text-lg mb-10" style={{ color: "rgba(200,220,230,0.7)" }}>
            Оставьте заявку — наш специалист рассчитает стоимость и срок окупаемости для вашего объекта.
          </p>
          <a
            href="#contacts"
            className="inline-block font-display text-base tracking-wider px-10 py-5 rounded font-semibold transition-all duration-300 hover:scale-105 hover:opacity-90"
            style={{ background: "var(--cyan)", color: "#080d14", boxShadow: "0 0 30px rgba(0,229,255,0.3)" }}
          >
            ПОЛУЧИТЬ БЕСПЛАТНЫЙ РАСЧЁТ
          </a>
        </div>
      </div>
    </>
  );
}
