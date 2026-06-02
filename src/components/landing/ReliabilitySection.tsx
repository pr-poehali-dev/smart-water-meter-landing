import Icon from "@/components/ui/icon";

const STATS = [
  { value: "12 лет", label: "Автономная работа", sub: "без замены батарей", icon: "Battery" },
  { value: "±0.2%", label: "Погрешность", sub: "класс точности А+", icon: "Target" },
  { value: "IP68", label: "Защита корпуса", sub: "полное погружение", icon: "Shield" },
  { value: "−25…+50°С", label: "Рабочий диапазон", sub: "для любых условий", icon: "Thermometer" },
];

const FEATURES = [
  {
    icon: "Cpu",
    title: "Защита от взлома и магнитного воздействия",
    desc: "Трёхуровневая система защиты фиксирует любые попытки воздействия на прибор и отправляет оповещение в личный кабинет.",
  },
  {
    icon: "RotateCcw",
    title: "Самодиагностика в режиме реального времени",
    desc: "Встроенные датчики непрерывно мониторят состояние прибора: детектируют утечки, воздушные пробки и нарушения целостности.",
  },
  {
    icon: "FileCheck",
    title: "Госповерка и сертификация",
    desc: "Прибор внесён в Государственный реестр средств измерений РФ. Интервал поверки — 6 лет для горячей воды, 6 лет для холодной.",
  },
  {
    icon: "Wrench",
    title: "Монтаж без остановки водоснабжения",
    desc: "Устанавливается за 20–30 минут без демонтажа труб и перекрытия стояка. Подходит для замены любых существующих счётчиков.",
  },
];

export default function ReliabilitySection() {
  return (
    <section id="reliability" className="py-20 md:py-28" style={{ background: "white" }}>
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 gap-6">
          <div>
            <div
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold mb-4"
              style={{ background: "#e3f2fd", color: "#1976d2", border: "1px solid #bbdefb" }}
            >
              <Icon name="ShieldCheck" size={12} />
              НАДЁЖНОСТЬ
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-bold leading-tight" style={{ color: "#0d1b2a" }}>
              Абсолютная<br />
              <span className="heading-gradient">надёжность</span>
            </h2>
          </div>
          <p className="text-base leading-relaxed max-w-md" style={{ color: "#546e8a" }}>
            Счётчик создан для работы в условиях реальной эксплуатации — в подвалах, подъездах и технических помещениях управляющих компаний.
          </p>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {STATS.map((s, i) => (
            <div
              key={s.label}
              className="stat-card p-6 animate-fade-in-up"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                style={{ background: "#e3f2fd" }}
              >
                <Icon name={s.icon} size={20} fallback="Star" style={{ color: "#1976d2" }} />
              </div>
              <div className="font-display text-2xl md:text-3xl font-bold mb-1" style={{ color: "#0d47a1" }}>
                {s.value}
              </div>
              <div className="font-semibold text-sm mb-0.5" style={{ color: "#0d1b2a" }}>{s.label}</div>
              <div className="text-xs" style={{ color: "#546e8a" }}>{s.sub}</div>
            </div>
          ))}
        </div>

        {/* Main content: image + features */}
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* Device visual */}
          <div className="relative flex items-center justify-center">
            {/* Background rings */}
            <div
              className="absolute w-80 h-80 rounded-full pointer-events-none"
              style={{ background: "radial-gradient(circle, #e3f2fd 0%, transparent 70%)" }}
            />
            <div
              className="absolute w-64 h-64 rounded-full border-2 pointer-events-none"
              style={{ borderColor: "rgba(25,118,210,0.08)" }}
            />
            <div
              className="absolute w-48 h-48 rounded-full border pointer-events-none"
              style={{ borderColor: "rgba(25,118,210,0.12)" }}
            />

            <div className="relative z-10 animate-float">
              <img
                src="https://cdn.poehali.dev/projects/527349b6-a2ba-4d9e-83eb-5e072259af46/bucket/d3c0f163-64ad-477f-b54b-5b7509aad46e.jpg"
                alt="Умный счётчик воды АКВАМЕТРИК"
                className="w-full max-w-sm object-contain"
                style={{ filter: "drop-shadow(0 24px 48px rgba(25,118,210,0.2))" }}
              />

              {/* Floating badges */}
              <div
                className="absolute -top-4 -right-4 px-3 py-2 rounded-xl text-xs font-semibold animate-fade-in-up"
                style={{ background: "white", boxShadow: "0 4px 16px rgba(25,118,210,0.15)", color: "#1976d2", border: "1px solid #e3f2fd" }}
              >
                ✓ Госповерка
              </div>
              <div
                className="absolute -bottom-2 -left-4 px-3 py-2 rounded-xl text-xs font-semibold delay-200 animate-fade-in-up"
                style={{ background: "white", boxShadow: "0 4px 16px rgba(25,118,210,0.15)", color: "#00838f", border: "1px solid #e0f7fa" }}
              >
                ✓ IP68
              </div>
            </div>
          </div>

          {/* Features list */}
          <div className="flex flex-col gap-6">
            {FEATURES.map((f, i) => (
              <div
                key={f.title}
                className="flex gap-4 animate-fade-in-right"
                style={{ animationDelay: `${i * 0.12}s` }}
              >
                <div
                  className="w-11 h-11 rounded-xl flex-shrink-0 flex items-center justify-center mt-0.5"
                  style={{ background: "#e3f2fd", border: "1px solid #bbdefb" }}
                >
                  <Icon name={f.icon} size={20} fallback="Star" style={{ color: "#1976d2" }} />
                </div>
                <div>
                  <div className="font-semibold mb-1.5" style={{ color: "#0d1b2a", fontSize: "15px" }}>{f.title}</div>
                  <div className="text-sm leading-relaxed" style={{ color: "#546e8a" }}>{f.desc}</div>
                </div>
              </div>
            ))}

            <div className="mt-4 flex flex-wrap gap-3">
              <button
                className="font-display text-sm tracking-wide px-6 py-3 rounded-xl font-semibold transition-all duration-200 hover:scale-105"
                style={{ background: "#1976d2", color: "white", boxShadow: "0 4px 16px rgba(25,118,210,0.3)" }}
              >
                Скачать паспорт прибора
              </button>
              <button
                className="font-display text-sm tracking-wide px-6 py-3 rounded-xl font-semibold transition-all duration-200 hover:scale-105"
                style={{ background: "#e3f2fd", color: "#1976d2", border: "1.5px solid #bbdefb" }}
              >
                Запросить образец
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
