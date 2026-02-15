import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import Icon from "@/components/ui/icon";
import func2url from "../../../backend/func2url.json";

export function CTASection() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [niche, setNiche] = useState("");
  const [agreed, setAgreed] = useState(false);
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim() || !agreed) return;

    setLoading(true);
    try {
      const res = await fetch(func2url["send-telegram"], {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, phone, niche }),
      });
      if (res.ok) {
        setSent(true);
      }
    } catch {
      // silent
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24 px-6 bg-gradient-to-br from-primary/20 via-secondary/20 to-background relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 animate-glow-pulse" />
      
      <div className="container mx-auto max-w-4xl relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Получите консультацию по вашему запросу
          </h2>
          <p className="text-xl text-muted-foreground">
            И мы сами свяжемся с Вами в ближайшее время!
          </p>
        </div>
        
        <Card className="glass-card p-8 max-w-2xl mx-auto">
          {sent ? (
            <div className="text-center py-8 space-y-4">
              <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mx-auto">
                <Icon name="Check" size={32} className="text-green-400" />
              </div>
              <h3 className="text-2xl font-bold">Заявка отправлена!</h3>
              <p className="text-muted-foreground">Мы свяжемся с вами в ближайшее время</p>
            </div>
          ) : (
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label className="block text-sm font-medium mb-2">Имя</label>
                <Input
                  placeholder="Ваше имя"
                  className="bg-white/5 border-white/10"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Телефон</label>
                <Input
                  placeholder="+7 (___) ___-__-__"
                  className="bg-white/5 border-white/10"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Ниша бизнеса</label>
                <Input
                  placeholder="Юридические услуги, консалтинг и т.д."
                  className="bg-white/5 border-white/10"
                  value={niche}
                  onChange={(e) => setNiche(e.target.value)}
                />
              </div>
              <div className="flex items-start gap-3">
                <Checkbox
                  id="privacy-agree"
                  checked={agreed}
                  onCheckedChange={(checked) => setAgreed(checked === true)}
                  className="mt-0.5"
                />
                <label htmlFor="privacy-agree" className="text-sm text-muted-foreground leading-snug cursor-pointer">
                  Я даю согласие на обработку{" "}
                  <Link to="/privacy" className="text-primary hover:underline" target="_blank">
                    персональных данных
                  </Link>
                </label>
              </div>
              <Button
                type="submit"
                className="w-full bg-primary hover:bg-primary/90 text-lg py-6 glow-cyan"
                disabled={loading || !agreed}
              >
                {loading ? "Отправка..." : "Получить консультацию"}
              </Button>
            </form>
          )}
        </Card>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="py-12 px-6 border-t border-white/10">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              StaniStudio
            </h3>
            <p className="text-muted-foreground">
              Студия нейросетей полного цикла
            </p>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Контакты</h4>
            <div className="space-y-2 text-muted-foreground">
              <a href="mailto:stanislavtsybulskiy03@gmail.com" className="flex items-center gap-2 hover:text-primary transition-colors">
                <Icon name="Mail" size={18} />
                <span>stanislavtsybulskiy03@gmail.com</span>
              </a>
              <a href="tel:+79147044172" className="flex items-center gap-2 hover:text-primary transition-colors">
                <Icon name="Phone" size={18} />
                <span>+7 (914) 704-41-72</span>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Соцсети</h4>
            <div className="flex gap-4">
              <a href="https://t.me/stanistudio" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary/20 transition-colors">
                <Icon name="Send" size={20} />
              </a>
              <a href="https://wa.me/+79147044172" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-green-500/20 transition-colors">
                <Icon name="MessageCircle" size={20} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/10 text-center text-muted-foreground">
          <p>© 2026 StaniStudio. Все права защищены. <Link to="/privacy" className="hover:text-primary transition-colors underline">Политика конфиденциальности</Link></p>
        </div>
      </div>
    </footer>
  );
}