import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 via-background to-primary/10" />
      
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-secondary/30 rounded-full blur-[120px] animate-float" />
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-primary/30 rounded-full blur-[120px] animate-float" style={{ animationDelay: '3s' }} />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto text-center animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent leading-tight">
            ИИ-студия, которая удваивает продажи бизнеса за счет нейросетей
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto">
            StaniStudio — студия нейросетей полного цикла. От генерации контента до автоматизации продаж и глубокой аналитики.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8 py-6 bg-primary hover:bg-primary/90 glow-cyan">
              Получить аудит бизнеса
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-white/20 hover:bg-white/10">
              Смотреть демо
            </Button>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <Icon name="ChevronDown" size={32} className="text-muted-foreground" />
      </div>
    </section>
  );
}

export function TrustBar() {
  const stats = [
    "50+ клиентов за 2 месяца",
    "25 нейросетей",
    "NanoBanana",
    "VEO",
    "KIMI",
    "HEYGEN",
    "Perplexity",
    "ChatGPT",
    "Claude",
    "Midjourney",
    "Stable Diffusion",
    "Runway"
  ];

  return (
    <section className="py-12 border-y border-white/10 overflow-hidden bg-muted/50">
      <div className="relative flex">
        <div className="flex animate-scroll">
          {[...stats, ...stats].map((item, i) => (
            <div key={i} className="mx-8 whitespace-nowrap text-lg font-medium text-muted-foreground">
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
