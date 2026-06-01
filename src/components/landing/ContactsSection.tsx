import { useState } from "react";
import Icon from "@/components/ui/icon";
import { NAV_LINKS } from "./constants";

export default function ContactsSection() {
  const [formData, setFormData] = useState({ name: "", phone: "", email: "" });
  const [sent, setSent] = useState(false);

  return (
    <>
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
    </>
  );
}
