import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import Icon from "@/components/ui/icon";

export function CTASection() {
  return (
    <section className="py-24 px-6 bg-gradient-to-br from-primary/20 via-secondary/20 to-background relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 animate-glow-pulse" />
      
      <div className="container mx-auto max-w-4xl relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Готовы опередить конкурентов?
          </h2>
          <p className="text-xl text-muted-foreground">
            Оставьте заявку на бесплатную консультацию и получите демо-видео с вашим аватаром в подарок
          </p>
        </div>
        
        <Card className="glass-card p-8 max-w-2xl mx-auto">
          <form className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-2">Имя</label>
              <Input placeholder="Ваше имя" className="bg-white/5 border-white/10" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Телефон</label>
              <Input placeholder="+7 (___) ___-__-__" className="bg-white/5 border-white/10" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Ниша бизнеса</label>
              <Input placeholder="Юридические услуги, консалтинг и т.д." className="bg-white/5 border-white/10" />
            </div>
            <Button className="w-full bg-primary hover:bg-primary/90 text-lg py-6 glow-cyan">
              Получить консультацию
            </Button>
          </form>
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
              <div className="flex items-center gap-2">
                <Icon name="Mail" size={18} />
                <span>info@stanistudio.ru</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="Phone" size={18} />
                <span>+7 (999) 123-45-67</span>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Соцсети</h4>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary/20 transition-colors">
                <Icon name="Send" size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary/20 transition-colors">
                <Icon name="Instagram" size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary/20 transition-colors">
                <Icon name="Youtube" size={20} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/10 text-center text-muted-foreground">
          <p>© 2024 StaniStudio. Все права защищены. Политика конфиденциальности</p>
        </div>
      </div>
    </footer>
  );
}
