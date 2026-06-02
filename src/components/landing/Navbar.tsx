import { useState, useEffect } from "react";
import Icon from "@/components/ui/icon";

const NAV_LINKS = [
  { label: "Надёжность", href: "#reliability" },
  { label: "Каналы связи", href: "#connectivity" },
  { label: "Контакты", href: "#contacts" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? "rgba(255,255,255,0.95)" : "rgba(255,255,255,0.85)",
        backdropFilter: "blur(16px)",
        borderBottom: scrolled ? "1px solid rgba(25,118,210,0.12)" : "1px solid transparent",
        boxShadow: scrolled ? "0 2px 20px rgba(25,118,210,0.08)" : "none",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 py-3.5 flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: "#1976d2" }}>
            <Icon name="Droplets" size={18} style={{ color: "white" }} />
          </div>
          <div>
            <span className="font-display text-lg font-bold tracking-wide" style={{ color: "#1976d2" }}>АКВА</span>
            <span className="font-display text-lg font-bold tracking-wide" style={{ color: "#0d1b2a" }}>МЕТРИК</span>
          </div>
        </div>

        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((l) => (
            <a key={l.href} href={l.href} className="nav-link">{l.label}</a>
          ))}
        </div>

        <a
          href="#contacts"
          className="hidden md:flex items-center gap-2 font-display text-sm tracking-wide px-5 py-2.5 rounded-xl transition-all duration-200 hover:scale-105"
          style={{ background: "#1976d2", color: "white", fontWeight: 600, boxShadow: "0 2px 12px rgba(25,118,210,0.3)" }}
        >
          <Icon name="Phone" size={14} />
          Связаться
        </a>

        <button
          className="md:hidden w-9 h-9 rounded-lg flex items-center justify-center"
          style={{ background: "#e3f2fd", color: "#1976d2" }}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <Icon name={menuOpen ? "X" : "Menu"} size={18} />
        </button>
      </div>

      {menuOpen && (
        <div
          className="md:hidden px-6 pb-6 flex flex-col gap-3"
          style={{ background: "rgba(255,255,255,0.98)", borderTop: "1px solid #e3f2fd" }}
        >
          {NAV_LINKS.map((l) => (
            <a key={l.href} href={l.href} className="nav-link py-2" onClick={() => setMenuOpen(false)}>
              {l.label}
            </a>
          ))}
          <a
            href="#contacts"
            className="font-display text-sm tracking-wide px-5 py-2.5 rounded-xl text-center font-semibold mt-2"
            style={{ background: "#1976d2", color: "white" }}
          >
            Связаться
          </a>
        </div>
      )}
    </nav>
  );
}
