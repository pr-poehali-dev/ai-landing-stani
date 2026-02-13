import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const navLinks = [
  { label: "Услуги", id: "services" },
  { label: "Кейсы", id: "cases" },
  { label: "Тарифы", id: "pricing" },
  { label: "Контакты", id: "contact" },
];

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/80 backdrop-blur-lg border-b border-white/10 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto max-w-6xl px-6 flex items-center justify-between">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
        >
          StaniStudio
        </button>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              {link.label}
            </button>
          ))}
          <Button
            size="sm"
            className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700"
            onClick={() => scrollTo("contact")}
          >
            Оставить заявку
          </Button>
        </nav>

        <button
          className="md:hidden text-foreground"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <Icon name={menuOpen ? "X" : "Menu"} size={24} />
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-lg border-t border-white/10 px-6 py-6 space-y-4">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => {
                scrollTo(link.id);
                setMenuOpen(false);
              }}
              className="block w-full text-left text-lg font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              {link.label}
            </button>
          ))}
          <Button
            className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700"
            onClick={() => {
              scrollTo("contact");
              setMenuOpen(false);
            }}
          >
            Оставить заявку
          </Button>
        </div>
      )}
    </header>
  );
}
