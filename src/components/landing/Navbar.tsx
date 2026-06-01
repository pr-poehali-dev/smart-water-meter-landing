import { useState, useEffect } from "react";
import Icon from "@/components/ui/icon";
import { NAV_LINKS } from "./constants";

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
  );
}
