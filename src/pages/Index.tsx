import { useState, useEffect, useRef } from "react";
import Icon from "@/components/ui/icon";

const METER_IMG = "https://cdn.poehali.dev/projects/527349b6-a2ba-4d9e-83eb-5e072259af46/files/4addbcbb-6c4d-4c5b-899d-eedd011c6824.jpg";

const NAV_LINKS = [
  { label: "Возможности", href: "#features" },
  { label: "Преимущества", href: "#advantages" },
  { label: "Как работает", href: "#howworks" },
  { label: "Контакты", href: "#contacts" },
];

const FEATURES = [
  {
    icon: "BarChart3",
    title: "Детальная аналитика",
    desc: "Почасовые, дневные и месячные отчёты потребления с интерактивными графиками и тенденциями.",
  },
  {
    icon: "Zap",
    title: "Мгновенные уведомления",
    desc: "Оповещения о превышении норм, возможных утечках и аномальном расходе в режиме реального времени.",
  },
  {
    icon: "Wifi",
    title: "Беспроводная передача",
    desc: "Данные передаются по защищённому каналу NB-IoT без абонентской платы и дополнительного оборудования.",
  },
  {
    icon: "Shield",
    title: "Защита от утечек",
    desc: "Алгоритмы ИИ анализируют паттерны и выявляют скрытые протечки ещё до видимого ущерба.",
  },
  {
    icon: "Cloud",
    title: "Облачная платформа",
    desc: "Доступ к данным с любого устройства через веб-кабинет или мобильное приложение 24/7.",
  },
  {
    icon: "TrendingDown",
    title: "Экономия ресурсов",
    desc: "Клиенты сокращают расход воды на 15–30% уже в первые 3 месяца использования системы.",
  },
];

const ADVANTAGES = [
  { value: "30%", label: "Экономия воды", sub: "в среднем по клиентам" },
  { value: "15 лет", label: "Срок службы", sub: "без замены батарей" },
  { value: "99.8%", label: "Точность", sub: "погрешность 0.2%" },
  { value: "24/7", label: "Мониторинг", sub: "без перерывов" },
];

const STEPS = [
  {
    num: "01",
    title: "Установка за 30 минут",
    desc: "Сертифицированный специалист устанавливает счётчик без демонтажа труб. Никакого строительного мусора.",
  },
  {
    num: "02",
    title: "Автоматическая настройка",
    desc: "Устройство самостоятельно подключается к облачной платформе и начинает сбор данных сразу после установки.",
  },
  {
    num: "03",
    title: "Аналитика в реальном времени",
    desc: "Открываете личный кабинет и видите полную картину потребления: графики, аномалии, прогнозы.",
  },
  {
    num: "04",
    title: "Управление и отчётность",
    desc: "Выгружайте отчёты в один клик для ресурсоснабжающих организаций, управляющих компаний и ГИС ЖКХ.",
  },
];

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

export default function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [formData, setFormData] = useState({ name: "", phone: "", email: "" });
  const [sent, setSent] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="min-h-screen" style={{ background: "#080d14", color: "#d0e8f0" }}>

      {/* NAV */}
      <nav
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
        style={{
          background: scrolled ? "rgba(8,13,20,0.92)" : "transparent",
          backdropFilter: scrolled ? "blur(20px)" : "none",
          borderBottom: scrolled ? "1px solid rgba(0,229,255,0.1)" : "none",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="font-display text-xl tracking-widest font-semibold" style={{ color: "var(--cyan)" }}>
            АКВА<span style={{ color: "#d0e8f0" }}>СЕНС</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((l) => (
              <a key={l.href} href={l.href} className="nav-link">{l.label}</a>
            ))}
          </div>
          <a
            href="#contacts"
            className="hidden md:block font-display text-sm tracking-wider px-5 py-2 rounded transition-all duration-300 hover:opacity-90"
            style={{ background: "var(--cyan)", color: "#080d14", fontWeight: 600 }}
          >
            ПОЛУЧИТЬ КП
          </a>
          <button className="md:hidden" style={{ color: "var(--cyan)" }} onClick={() => setMenuOpen(!menuOpen)}>
            <Icon name={menuOpen ? "X" : "Menu"} size={24} />
          </button>
        </div>
        {menuOpen && (
          <div className="md:hidden px-6 pb-6 flex flex-col gap-4" style={{ background: "rgba(8,13,20,0.97)" }}>
            {NAV_LINKS.map((l) => (
              <a key={l.href} href={l.href} className="nav-link" onClick={() => setMenuOpen(false)}>{l.label}</a>
            ))}
            <a
              href="#contacts"
              className="font-display text-sm tracking-wider px-5 py-2 rounded text-center"
              style={{ background: "var(--cyan)", color: "#080d14", fontWeight: 600 }}
            >
              ПОЛУЧИТЬ КП
            </a>
          </div>
        )}
      </nav>

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

      {/* STATS */}
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

      {/* CONTACTS */}
      <section id="contacts" className="py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="font-display text-xs tracking-widest mb-4" style={{ color: "var(--cyan)" }}>— КОНТАКТЫ —</div>
            <h2 className="font-display text-4xl md:text-5xl font-bold" style={{ color: "#fff" }}>Оставьте заявку</h2>
            <p className="mt-4 text-lg" style={{ color: "rgba(200,220,230,0.6)" }}>Ответим в течение 30 минут в рабочее время</p>
          </div>

          <div className="grid md:grid-cols-2 gap-16 items-start max-w-4xl mx-auto">
            <div className="rounded-2xl p-8" style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(0,229,255,0.15)" }}>
              {sent ? (
                <div className="text-center py-8">
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6"
                    style={{ background: "rgba(0,229,255,0.1)", border: "1px solid rgba(0,229,255,0.3)" }}
                  >
                    <Icon name="CheckCircle" size={32} style={{ color: "var(--cyan)" }} />
                  </div>
                  <div className="font-display text-2xl font-bold mb-3" style={{ color: "#fff" }}>Заявка отправлена!</div>
                  <p style={{ color: "rgba(200,220,230,0.6)" }}>Мы свяжемся с вами в ближайшее время.</p>
                </div>
              ) : (
                <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} className="flex flex-col gap-5">
                  {[
                    { label: "ИМЯ", key: "name", type: "text", placeholder: "Иван Петров", required: true },
                    { label: "ТЕЛЕФОН", key: "phone", type: "tel", placeholder: "+7 (999) 000-00-00", required: true },
                    { label: "E-MAIL", key: "email", type: "email", placeholder: "ivan@company.ru", required: false },
                  ].map((field) => (
                    <div key={field.key}>
                      <label className="block text-xs font-display tracking-widest mb-2" style={{ color: "var(--cyan)" }}>{field.label}</label>
                      <input
                        type={field.type}
                        required={field.required}
                        placeholder={field.placeholder}
                        value={formData[field.key as keyof typeof formData]}
                        onChange={(e) => setFormData({ ...formData, [field.key]: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg outline-none"
                        style={{
                          background: "rgba(0,229,255,0.04)",
                          border: "1px solid rgba(0,229,255,0.2)",
                          color: "#d0e8f0",
                          fontSize: "15px",
                          transition: "border-color 0.3s",
                        }}
                      />
                    </div>
                  ))}
                  <button
                    type="submit"
                    className="w-full font-display tracking-wider py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105 hover:opacity-90 mt-2"
                    style={{ background: "var(--cyan)", color: "#080d14", fontSize: "15px" }}
                  >
                    ОТПРАВИТЬ ЗАЯВКУ
                  </button>
                  <p className="text-xs text-center" style={{ color: "rgba(200,220,230,0.4)" }}>
                    Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                  </p>
                </form>
              )}
            </div>

            <div className="flex flex-col gap-8">
              {[
                { icon: "Phone", title: "ТЕЛЕФОН", val: "+7 (800) 555-00-00", sub: "Бесплатно по России" },
                { icon: "Mail", title: "E-MAIL", val: "info@akvasens.ru", sub: "Ответим в течение часа" },
                { icon: "MapPin", title: "ОФИС", val: "Москва, ул. Инновационная, 1", sub: "Пн–Пт, 9:00–18:00" },
              ].map((c) => (
                <div key={c.title} className="flex gap-5 items-start">
                  <div
                    className="w-12 h-12 rounded-xl flex-shrink-0 flex items-center justify-center"
                    style={{ background: "rgba(0,229,255,0.08)", border: "1px solid rgba(0,229,255,0.2)" }}
                  >
                    <Icon name={c.icon} size={20} style={{ color: "var(--cyan)" }} />
                  </div>
                  <div>
                    <div className="font-display text-xs tracking-widest mb-1" style={{ color: "rgba(0,229,255,0.6)" }}>{c.title}</div>
                    <div className="font-semibold" style={{ color: "#fff" }}>{c.val}</div>
                    <div className="text-sm" style={{ color: "rgba(200,220,230,0.5)" }}>{c.sub}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-8 border-t" style={{ borderColor: "rgba(0,229,255,0.1)" }}>
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="font-display text-lg tracking-widest font-semibold" style={{ color: "var(--cyan)" }}>
            АКВА<span style={{ color: "#d0e8f0" }}>СЕНС</span>
          </div>
          <div className="text-sm" style={{ color: "rgba(200,220,230,0.4)" }}>© 2026 АкваСенс. Все права защищены.</div>
          <div className="flex gap-6">
            {NAV_LINKS.map((l) => (
              <a key={l.href} href={l.href} className="nav-link text-xs">{l.label}</a>
            ))}
          </div>
        </div>
      </footer>

    </div>
  );
}