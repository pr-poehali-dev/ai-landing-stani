import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0a0a1a]">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat animate-subtle-zoom"
        style={{ backgroundImage: 'url(https://cdn.poehali.dev/files/611fb5dc-687f-4531-8355-fda410c4b2ef.png)' }}
      />
      
      <div className="absolute inset-0 animate-pulse-slow">
        <div className="absolute top-20 left-20 w-64 h-64 bg-cyan-500/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-32 right-32 w-80 h-80 bg-purple-500/10 rounded-full blur-[120px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-400/5 rounded-full blur-[150px] animate-float" />
      </div>

      <div className="absolute inset-0 grid-animation opacity-20" />

      <div className="absolute inset-0 pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="particle absolute rounded-full bg-gradient-to-r from-cyan-400 to-purple-400"
            style={{
              width: `${Math.random() * 4 + 2}px`,
              height: `${Math.random() * 4 + 2}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `particle-float ${Math.random() * 10 + 15}s linear infinite`,
              animationDelay: `${Math.random() * 5}s`,
              opacity: Math.random() * 0.5 + 0.3
            }}
          />
        ))}
      </div>

      <svg className="absolute inset-0 w-full h-full opacity-10 pointer-events-none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="line-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#a855f7" stopOpacity="0.8" />
          </linearGradient>
        </defs>
        {[...Array(6)].map((_, i) => (
          <line
            key={i}
            x1="0"
            y1={`${(i + 1) * 16.66}%`}
            x2="100%"
            y2={`${(i + 1) * 16.66}%`}
            stroke="url(#line-gradient)"
            strokeWidth="1"
            className="animate-line-slide"
            style={{ animationDelay: `${i * 0.5}s` }}
          />
        ))}
        {[...Array(8)].map((_, i) => (
          <line
            key={`v-${i}`}
            x1={`${(i + 1) * 12.5}%`}
            y1="0"
            x2={`${(i + 1) * 12.5}%`}
            y2="100%"
            stroke="url(#line-gradient)"
            strokeWidth="1"
            className="animate-line-slide"
            style={{ animationDelay: `${i * 0.3}s` }}
          />
        ))}
      </svg>
      
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0a0a1a]/50 to-[#0a0a1a]" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto text-center animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent leading-tight drop-shadow-2xl animate-text-glow">
            ИИ-студия, которая удваивает продажи бизнеса за счет нейросетей
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-3xl mx-auto drop-shadow-lg">
            StaniStudio — студия нейросетей полного цикла. От генерации контента до автоматизации продаж и глубокой аналитики.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8 py-6 bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 glow-cyan shadow-2xl transition-all hover:scale-105" onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}>
              Перечень услуг
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-cyan-400/50 hover:bg-cyan-400/10 backdrop-blur-sm transition-all hover:scale-105" onClick={() => document.getElementById('cases')?.scrollIntoView({ behavior: 'smooth' })}>
              Смотреть кейсы
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