import { useState } from "react";
import Icon from "@/components/ui/icon";

const NAV_LINKS = [
  { label: "Надёжность", href: "#reliability" },
  { label: "Каналы связи", href: "#connectivity" },
  { label: "Контакты", href: "#contacts" },
];

export default function ContactsSection() {
  const [formData, setFormData] = useState({ name: "", phone: "", email: "", company: "" });
  const [sent, setSent] = useState(false);

  return (
    <>
      {/* CONTACTS */}
      <section id="contacts" className="py-20 md:py-28" style={{ background: "white" }}>
        <div className="max-w-7xl mx-auto px-6 md:px-12">

          {/* Header */}
          <div className="text-center mb-14">
            <div
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold mb-4"
              style={{ background: "#e3f2fd", color: "#1976d2", border: "1px solid #bbdefb" }}
            >
              <Icon name="MessageSquare" size={12} />
              КОНТАКТЫ
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4" style={{ color: "#0d1b2a" }}>
              Оставьте заявку
            </h2>
            <p className="text-base max-w-md mx-auto" style={{ color: "#546e8a" }}>
              Ответим в течение 30 минут. Подберём решение под ваш объект и рассчитаем стоимость.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">

            {/* Form */}
            <div
              className="rounded-2xl p-8"
              style={{ background: "#f8fbff", border: "1.5px solid #bbdefb" }}
            >
              {sent ? (
                <div className="text-center py-10">
                  <div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-5"
                    style={{ background: "#e3f2fd" }}
                  >
                    <Icon name="CheckCircle" size={32} style={{ color: "#1976d2" }} />
                  </div>
                  <div className="font-display text-2xl font-bold mb-2" style={{ color: "#0d1b2a" }}>Заявка отправлена!</div>
                  <p style={{ color: "#546e8a" }}>Наш менеджер свяжется с вами в ближайшее время.</p>
                </div>
              ) : (
                <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} className="flex flex-col gap-5">
                  {[
                    { label: "Имя", key: "name", type: "text", placeholder: "Иван Петров", required: true },
                    { label: "Название организации / УК", key: "company", type: "text", placeholder: "УК «Горизонт»", required: false },
                    { label: "Телефон", key: "phone", type: "tel", placeholder: "+7 (999) 000-00-00", required: true },
                    { label: "E-mail", key: "email", type: "email", placeholder: "ivan@company.ru", required: false },
                  ].map((field) => (
                    <div key={field.key}>
                      <label
                        className="block text-xs font-semibold tracking-wide mb-1.5"
                        style={{ color: "#546e8a" }}
                      >
                        {field.label}{field.required && <span style={{ color: "#1976d2" }}> *</span>}
                      </label>
                      <input
                        type={field.type}
                        required={field.required}
                        placeholder={field.placeholder}
                        value={formData[field.key as keyof typeof formData]}
                        onChange={(e) => setFormData({ ...formData, [field.key]: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl outline-none transition-all duration-200"
                        style={{
                          background: "white",
                          border: "1.5px solid #e3f2fd",
                          color: "#0d1b2a",
                          fontSize: "15px",
                        }}
                        onFocus={(e) => { e.target.style.borderColor = "#1976d2"; e.target.style.boxShadow = "0 0 0 3px rgba(25,118,210,0.1)"; }}
                        onBlur={(e) => { e.target.style.borderColor = "#e3f2fd"; e.target.style.boxShadow = "none"; }}
                      />
                    </div>
                  ))}
                  <button
                    type="submit"
                    className="w-full font-display tracking-wide py-4 rounded-xl font-semibold transition-all duration-200 hover:scale-[1.02] mt-1"
                    style={{ background: "#1976d2", color: "white", fontSize: "15px", boxShadow: "0 4px 16px rgba(25,118,210,0.3)" }}
                  >
                    Отправить заявку
                  </button>
                  <p className="text-xs text-center" style={{ color: "#a0b4c8" }}>
                    Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                  </p>
                </form>
              )}
            </div>

            {/* Contact info + map placeholder */}
            <div className="flex flex-col gap-6 justify-between">
              <div className="flex flex-col gap-5">
                {[
                  { icon: "Phone", title: "Телефон", val: "+7 (800) 555-00-00", sub: "Бесплатно по России, Пн–Пт 9:00–18:00" },
                  { icon: "Mail", title: "E-mail", val: "info@akvametrik.ru", sub: "Ответим в течение часа" },
                  { icon: "MapPin", title: "Офис продаж", val: "Москва, ул. Инновационная, 1", sub: "Пн–Пт, 9:00–18:00 МСК" },
                  { icon: "FileText", title: "Документация", val: "Скачать полный каталог", sub: "PDF, актуальная версия 2026" },
                ].map((c) => (
                  <div key={c.title} className="flex gap-4 items-start">
                    <div
                      className="w-11 h-11 rounded-xl flex-shrink-0 flex items-center justify-center"
                      style={{ background: "#e3f2fd" }}
                    >
                      <Icon name={c.icon} size={18} style={{ color: "#1976d2" }} />
                    </div>
                    <div>
                      <div className="text-xs font-semibold mb-0.5" style={{ color: "#546e8a" }}>{c.title}</div>
                      <div className="font-semibold text-sm" style={{ color: "#0d1b2a" }}>{c.val}</div>
                      <div className="text-xs mt-0.5" style={{ color: "#a0b4c8" }}>{c.sub}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Quick stats */}
              <div className="rounded-2xl p-5 grid grid-cols-3 gap-4" style={{ background: "#e3f2fd", border: "1px solid #bbdefb" }}>
                {[
                  { val: "500+", label: "Клиентов" },
                  { val: "50 000+", label: "Приборов" },
                  { val: "< 1 дня", label: "Срок поставки" },
                ].map((s) => (
                  <div key={s.label} className="text-center">
                    <div className="font-display font-bold text-xl" style={{ color: "#0d47a1" }}>{s.val}</div>
                    <div className="text-xs mt-0.5" style={{ color: "#546e8a" }}>{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-8" style={{ background: "#0d1b2a" }}>
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-4">
          <a href="/" className="flex items-center">
            <img
              src="https://cdn.poehali.dev/projects/527349b6-a2ba-4d9e-83eb-5e072259af46/bucket/7921969e-6e11-4161-bf5a-3315e60b3c31.png"
              alt="АкваМетрик"
              className="h-8 w-auto object-contain"
              style={{ filter: "brightness(0) invert(1)" }}
            />
          </a>
          <div className="text-xs" style={{ color: "rgba(208,232,240,0.4)" }}>
            © 2026 АкваМетрик. Все права защищены.
          </div>
          <div className="flex gap-5">
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-xs transition-colors hover:text-white"
                style={{ color: "rgba(208,232,240,0.5)" }}
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </>
  );
}