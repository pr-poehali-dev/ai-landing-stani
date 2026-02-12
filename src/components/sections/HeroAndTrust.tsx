import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(https://cdn.poehali.dev/files/b906551f-d798-4cc7-b45a-d3a84cd7eb19.png)' }}
      />
      
      <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto text-center animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent leading-tight drop-shadow-2xl">
            ИИ-студия, которая удваивает продажи бизнеса за счет нейросетей
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-3xl mx-auto drop-shadow-lg">
            StaniStudio — студия нейросетей полного цикла. От генерации контента до автоматизации продаж и глубокой аналитики.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8 py-6 bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 glow-cyan shadow-2xl">
              Получить аудит бизнеса
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-cyan-400/50 hover:bg-cyan-400/10 backdrop-blur-sm">
              Смотреть демо
            </Button>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <Icon name="ChevronDown" size={32} className="text-cyan-400/70" />
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