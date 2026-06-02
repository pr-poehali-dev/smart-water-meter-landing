import { useState } from "react";
import Icon from "@/components/ui/icon";

const PROTOCOLS = [
  {
    id: "nfc",
    name: "NFC",
    color: "#1565c0",
    bg: "#e3f2fd",
    border: "#90caf9",
    icon: "Nfc",
    tag: "Контактная",
    title: "NFC — управление смартфоном",
    desc: "Считайте показания и настройте счётчик одним касанием телефона. Работает без интернета, прямо на месте установки.",
    usecases: ["Снятие показаний контролёром", "Настройка тарифов на месте", "Диагностика без разборки"],
    range: "до 10 см",
  },
  {
    id: "wifi",
    name: "Wi-Fi",
    color: "#0277bd",
    bg: "#e1f5fe",
    border: "#81d4fa",
    icon: "Wifi",
    tag: "Локальная",
    title: "Wi-Fi — интеграция с домашней сетью",
    desc: "Подключается к роутеру жильца или управляющей компании. Идеален для умного дома и прямой передачи данных в облако.",
    usecases: ["Умный дом (Home Assistant)", "Прямое подключение к серверу УК", "Без абонплаты за связь"],
    range: "до 50 м",
  },
  {
    id: "nbiot",
    name: "NB-IoT",
    color: "#006064",
    bg: "#e0f7fa",
    border: "#80deea",
    icon: "Signal",
    tag: "Сотовая",
    title: "NB-IoT — сотовая сеть IoT",
    desc: "Работает в зонах с плохим покрытием 4G. Сигнал проникает в подвалы и технические помещения. Потребление тока — 1 мА.",
    usecases: ["Подвалы и технические помещения", "Объекты без Wi-Fi инфраструктуры", "Массовая автоматизация ЖКХ"],
    range: "до 10 км",
  },
  {
    id: "lora",
    name: "LoRa",
    color: "#1b5e20",
    bg: "#e8f5e9",
    border: "#a5d6a7",
    icon: "Radio",
    tag: "LPWAN",
    title: "LoRa — дальняя беспроводная связь",
    desc: "Технология LPWAN с дальностью до 15 км. Один шлюз LoRa покрывает целый жилой квартал. Низкое энергопотребление.",
    usecases: ["Покрытие целого квартала одним шлюзом", "Работа без SIM-карты", "Экономный IoT-сценарий"],
    range: "до 15 км",
  },
  {
    id: "rs485",
    name: "RS-485",
    color: "#4a148c",
    bg: "#f3e5f5",
    border: "#ce93d8",
    icon: "Cable",
    tag: "Проводная",
    title: "RS-485 — промышленный интерфейс",
    desc: "Стандартный промышленный интерфейс для интеграции с АСКУЭ, диспетчерскими системами и контроллерами ИТП.",
    usecases: ["АСКУЭ и SCADA системы", "Диспетчерские пункты", "Интеграция с ИТП"],
    range: "до 1200 м",
  },
  {
    id: "bt",
    name: "Bluetooth",
    color: "#1565c0",
    bg: "#e8eaf6",
    border: "#9fa8da",
    icon: "Bluetooth",
    tag: "Ближняя",
    title: "Bluetooth — мобильное приложение",
    desc: "Связь со смартфоном для настройки, диагностики и снятия показаний через фирменное приложение АкваМетрик.",
    usecases: ["Мобильное приложение Android/iOS", "Обход контролёра с планшетом", "Быстрая настройка при установке"],
    range: "до 30 м",
  },
  {
    id: "zigbee",
    name: "Zigbee",
    color: "#e65100",
    bg: "#fff3e0",
    border: "#ffcc80",
    icon: "Zap",
    tag: "Mesh-сеть",
    title: "Zigbee — умный дом и Mesh",
    desc: "Протокол для умного дома с поддержкой Mesh-топологии. Устройства усиливают сигнал друг друга, создавая надёжную сеть.",
    usecases: ["Экосистема умного дома", "Автоматизация подъезда", "Совместимость с Tuya/Xiaomi"],
    range: "до 100 м",
  },
];

export default function ConnectivitySection() {
  const [activeId, setActiveId] = useState("nbiot");
  const active = PROTOCOLS.find((p) => p.id === activeId) || PROTOCOLS[0];

  return (
    <section id="connectivity" className="py-20 md:py-28" style={{ background: "#f0f7ff" }}>
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        {/* Header */}
        <div className="text-center mb-14">
          <div
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold mb-4"
            style={{ background: "#e3f2fd", color: "#1976d2", border: "1px solid #bbdefb" }}
          >
            <Icon name="Radio" size={12} />
            КАНАЛЫ СВЯЗИ
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4" style={{ color: "#0d1b2a" }}>
            Весь спектр<br />
            <span className="heading-gradient">каналов связи</span>
          </h2>
          <p className="text-base max-w-2xl mx-auto leading-relaxed" style={{ color: "#546e8a" }}>
            Один прибор — семь вариантов подключения. Выбирайте протокол под задачу: от ближней связи по NFC до сотовых сетей NB-IoT с охватом нескольких километров.
          </p>
        </div>

        {/* Protocol selector */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {PROTOCOLS.map((p) => (
            <button
              key={p.id}
              onClick={() => setActiveId(p.id)}
              className="proto-badge transition-all"
              style={{
                background: activeId === p.id ? p.color : "white",
                color: activeId === p.id ? "white" : p.color,
                borderColor: p.border,
                boxShadow: activeId === p.id ? `0 4px 16px ${p.color}40` : "none",
                transform: activeId === p.id ? "translateY(-2px)" : "none",
              }}
            >
              <Icon name={p.icon} size={16} fallback="Circle" />
              {p.name}
            </button>
          ))}
        </div>

        {/* Detail card */}
        <div
          className="rounded-3xl overflow-hidden transition-all duration-300"
          style={{
            background: "white",
            border: `1.5px solid ${active.border}`,
            boxShadow: `0 8px 40px ${active.color}15`,
          }}
          key={activeId}
        >
          <div className="grid md:grid-cols-5 gap-0">

            {/* Left: info */}
            <div className="md:col-span-3 p-8 md:p-12">
              <div
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold mb-5"
                style={{ background: active.bg, color: active.color, border: `1px solid ${active.border}` }}
              >
                <Icon name={active.icon} size={12} fallback="Circle" />
                {active.tag}
              </div>

              <h3 className="font-display text-3xl font-bold mb-3" style={{ color: "#0d1b2a" }}>
                {active.title}
              </h3>

              <div
                className="text-xs font-semibold mb-5 flex items-center gap-2"
                style={{ color: active.color }}
              >
                <Icon name="MapPin" size={12} />
                Дальность: {active.range}
              </div>

              <p className="text-base leading-relaxed mb-8" style={{ color: "#546e8a" }}>
                {active.desc}
              </p>

              <div>
                <div className="text-xs font-semibold uppercase tracking-wider mb-4" style={{ color: "#546e8a" }}>
                  Типовые сценарии применения
                </div>
                <div className="flex flex-col gap-3">
                  {active.usecases.map((u) => (
                    <div key={u} className="flex items-center gap-3">
                      <div
                        className="w-5 h-5 rounded-full flex-shrink-0 flex items-center justify-center"
                        style={{ background: active.bg }}
                      >
                        <Icon name="Check" size={11} style={{ color: active.color }} />
                      </div>
                      <span className="text-sm" style={{ color: "#0d1b2a" }}>{u}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: visual */}
            <div
              className="md:col-span-2 flex items-center justify-center p-8 md:p-12 relative overflow-hidden"
              style={{ background: active.bg }}
            >
              {/* Signal rings animation */}
              <div className="relative flex items-center justify-center w-40 h-40">
                {[1, 2, 3].map((ring) => (
                  <div
                    key={ring}
                    className="absolute rounded-full border-2"
                    style={{
                      width: `${ring * 48 + 40}px`,
                      height: `${ring * 48 + 40}px`,
                      borderColor: `${active.color}${Math.round((1 - ring * 0.25) * 255).toString(16).padStart(2, "0")}`,
                      animation: `signal-wave ${1.5 + ring * 0.5}s ease-out infinite`,
                      animationDelay: `${ring * 0.4}s`,
                    }}
                  />
                ))}
                <div
                  className="relative z-10 w-20 h-20 rounded-2xl flex items-center justify-center"
                  style={{ background: active.color, boxShadow: `0 8px 24px ${active.color}50` }}
                >
                  <Icon name={active.icon} size={36} style={{ color: "white" }} fallback="Circle" />
                </div>
              </div>

              {/* Protocol name watermark */}
              <div
                className="absolute bottom-6 right-6 font-display text-6xl font-bold select-none pointer-events-none"
                style={{ color: `${active.color}10`, lineHeight: 1 }}
              >
                {active.name}
              </div>
            </div>
          </div>
        </div>

        {/* All protocols grid */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-3">
          {PROTOCOLS.map((p) => (
            <button
              key={p.id}
              onClick={() => setActiveId(p.id)}
              className="rounded-xl p-4 text-center transition-all duration-200 hover:scale-105 cursor-pointer"
              style={{
                background: activeId === p.id ? p.color : "white",
                border: `1.5px solid ${activeId === p.id ? p.color : p.border}`,
                boxShadow: activeId === p.id ? `0 4px 16px ${p.color}30` : "0 2px 8px rgba(0,0,0,0.06)",
              }}
            >
              <Icon
                name={p.icon}
                size={24}
                fallback="Circle"
                style={{ color: activeId === p.id ? "white" : p.color, margin: "0 auto 6px" }}
              />
              <div
                className="font-display font-bold text-sm"
                style={{ color: activeId === p.id ? "white" : p.color }}
              >
                {p.name}
              </div>
              <div
                className="text-xs mt-0.5"
                style={{ color: activeId === p.id ? "rgba(255,255,255,0.7)" : "#546e8a" }}
              >
                {p.tag}
              </div>
            </button>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-14 rounded-2xl p-8 md:p-10 text-center" style={{ background: "white", border: "1.5px solid #bbdefb" }}>
          <h3 className="font-display text-2xl md:text-3xl font-bold mb-3" style={{ color: "#0d1b2a" }}>
            Не знаете, какой протокол подойдёт?
          </h3>
          <p className="mb-6 text-base" style={{ color: "#546e8a" }}>
            Наш инженер бесплатно подберёт оптимальное решение для вашего объекта
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <button
              className="font-display text-sm tracking-wide px-8 py-3.5 rounded-xl font-semibold transition-all duration-200 hover:scale-105"
              style={{ background: "#1976d2", color: "white", boxShadow: "0 4px 16px rgba(25,118,210,0.3)" }}
            >
              Получить консультацию
            </button>
            <button
              className="font-display text-sm tracking-wide px-8 py-3.5 rounded-xl font-semibold transition-all duration-200 hover:scale-105"
              style={{ background: "#e3f2fd", color: "#1976d2", border: "1.5px solid #bbdefb" }}
            >
              Сравнить протоколы
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
