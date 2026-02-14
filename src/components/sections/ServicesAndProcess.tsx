import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

export function ProblemSection() {
  const problems = [
    {
      icon: "Clock",
      title: "Рутина съедает время?",
      solution: "Создадим AI-ассистентов работающих 24/7 без выходных"
    },
    {
      icon: "DollarSign",
      title: "Дорогой продакшн?",
      solution: "Создаем видео и дизайн в 10 раз быстрее и дешевле студий."
    },
    {
      icon: "Database",
      title: "Нужна глубокая аналитика?",
      solution: "Наши нейронки сделают крутейший свод.анализ, просчёт или план"
    }
  ];

  return (
    <section className="py-24 px-6">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          Бизнес меняется. Либо вы используете AI, либо отстаете.
        </h2>
        <p className="text-xl text-cyan-400 font-semibold text-center mb-16 max-w-3xl mx-auto">
          9 из 10 лидеров рынка в РФ уже используют нейросети и ИИ-решения
        </p>
        
        <div className="grid md:grid-cols-3 gap-8">
          {problems.map((item, i) => (
            <Card key={i} className="glass-card p-8 hover:glow-cyan transition-all duration-300">
              <div className="mb-6 w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center">
                <Icon name={item.icon} size={32} className="text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-4">{item.title}</h3>
              <p className="text-muted-foreground text-lg">{item.solution}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ServicesSection() {
  const services = [
    {
      title: "AI-Маркетинг и Визуал",
      icon: "Sparkles",
      color: "primary",
      items: [
        { text: "Создание AI-видео и Аватаров: Рекламные ролики, Цифровые двойники для рилс", icon: "Video" },
        { text: "Дизайн логотипов и Креативов: Уникальный брендинг", icon: "Palette" },
        { text: "AI-Презентации: Продающие слайды 'под ключ' за считанные часы", icon: "Presentation" }
      ]
    },
    {
      title: "Автоматизация и Веб",
      icon: "Bot",
      color: "secondary",
      items: [
        { text: "AI-Ассистенты и Чат-боты: Умные ИИ-сотрудники поддержки и продаж", icon: "MessageSquare" },
        { text: "Создание сайтов с AI: Генеративный дизайн и умный контент. Быстрый запуск", icon: "Globe" }
      ]
    },
    {
      title: "Интеллект и Развитие",
      icon: "Brain",
      color: "accent",
      items: [
        { text: "Глубокий анализ данных: Прогнозирование трендов, анализ конкурентов и отчетов", icon: "BarChart3" },
        { text: "Корпоративное обучение: Учим ваши команды реально использовать AI", icon: "GraduationCap" }
      ]
    }
  ];

  return (
    <section id="services" className="py-24 px-6 bg-muted/30 relative overflow-hidden">
      <div 
        className="absolute -inset-10 opacity-25 animate-subtle-zoom"
        style={{
          backgroundImage: 'url(https://cdn.poehali.dev/files/62bfc3ba-1492-4bc0-bff2-bbebefa1f740.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          maskImage: 'radial-gradient(ellipse 80% 70% at center, black 40%, transparent 100%)',
          WebkitMaskImage: 'radial-gradient(ellipse 80% 70% at center, black 40%, transparent 100%)',
        }}
      />
      <div className="absolute inset-0 grid-animation opacity-30" />
      <div className="absolute top-10 -left-16 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[100px] animate-pulse-slow" />
      <div className="absolute bottom-10 -right-16 w-[500px] h-[500px] bg-secondary/20 rounded-full blur-[100px] animate-pulse-slow" style={{ animationDelay: '4s' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[80px] animate-subtle-zoom" style={{ animationDelay: '10s' }} />

      <svg className="absolute inset-0 w-full h-full opacity-20 pointer-events-none" xmlns="http://www.w3.org/2000/svg">
        <line x1="10%" y1="0" x2="50%" y2="100%" stroke="hsl(189 95% 43%)" strokeWidth="0.8" className="animate-line-slide" />
        <line x1="70%" y1="0" x2="30%" y2="100%" stroke="hsl(263 70% 60%)" strokeWidth="0.8" className="animate-line-slide" style={{ animationDelay: '3s' }} />
        <line x1="90%" y1="0" x2="60%" y2="100%" stroke="hsl(189 95% 43%)" strokeWidth="0.6" className="animate-line-slide" style={{ animationDelay: '6s' }} />
      </svg>
      <div className="container mx-auto max-w-6xl relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          Экосистема услуг
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <Card key={i} className="glass-card p-8 hover:glow-violet transition-all duration-300">
              <div className={`mb-6 w-16 h-16 rounded-full bg-${service.color}/20 flex items-center justify-center`}>
                <Icon name={service.icon} size={32} className={`text-${service.color}`} />
              </div>
              <h3 className="text-2xl font-bold mb-6">{service.title}</h3>
              <ul className="space-y-4">
                {service.items.map((item, j) => (
                  <li key={j} className="flex gap-3 text-muted-foreground">
                    <Icon name={item.icon} size={20} className="text-cyan-400 flex-shrink-0 mt-1" />
                    <span>{item.text}</span>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ProcessSection() {
  const steps = [
    { icon: "Lightbulb", title: "Брифинг", description: "Понимаем задачи" },
    { icon: "Search", title: "Анализ", description: "Подбираем стек нейросетей под ваш кейс" },
    { icon: "Cpu", title: "Реализация", description: "Обучаем модели, генерируем, допиливаем" },
    { icon: "Rocket", title: "Интеграция/Сдача", description: "Внедряем в ваши системы или отдаем готовые файлы" }
  ];

  return (
    <section className="py-24 px-6 relative overflow-hidden">
      <div className="absolute top-1/4 -left-20 w-[400px] h-[400px] bg-primary/15 rounded-full blur-[100px] animate-pulse-slow" />
      <div className="absolute bottom-1/4 -right-20 w-[400px] h-[400px] bg-secondary/15 rounded-full blur-[100px] animate-pulse-slow" style={{ animationDelay: '4s' }} />

      <div className="absolute inset-0 pointer-events-none">
        {[
          { x: '12%', y: '18%', size: 6, delay: 0, duration: 12, color: 'bg-cyan-400/60' },
          { x: '82%', y: '25%', size: 8, delay: 2, duration: 15, color: 'bg-purple-400/50' },
          { x: '42%', y: '72%', size: 5, delay: 4, duration: 10, color: 'bg-cyan-400/50' },
          { x: '72%', y: '78%', size: 7, delay: 1, duration: 14, color: 'bg-purple-400/60' },
          { x: '22%', y: '58%', size: 6, delay: 6, duration: 11, color: 'bg-cyan-400/40' },
          { x: '88%', y: '52%', size: 5, delay: 3, duration: 13, color: 'bg-purple-400/50' },
          { x: '55%', y: '12%', size: 8, delay: 5, duration: 16, color: 'bg-cyan-400/50' },
          { x: '8%', y: '82%', size: 6, delay: 7, duration: 12, color: 'bg-purple-400/40' },
          { x: '35%', y: '40%', size: 5, delay: 8, duration: 14, color: 'bg-cyan-400/50' },
          { x: '65%', y: '45%', size: 7, delay: 3, duration: 11, color: 'bg-purple-400/60' },
        ].map((dot, i) => (
          <div
            key={i}
            className={`absolute rounded-full ${dot.color} blur-[1px]`}
            style={{
              left: dot.x,
              top: dot.y,
              width: dot.size,
              height: dot.size,
              animation: `dot-drift ${dot.duration}s ease-in-out infinite`,
              animationDelay: `${dot.delay}s`,
            }}
          />
        ))}
      </div>

      <svg className="absolute inset-0 w-full h-full opacity-25 pointer-events-none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="50%" cy="50%" r="150" fill="none" stroke="hsl(189 95% 43%)" strokeWidth="1" strokeDasharray="6 10" style={{ animation: 'orbit 40s linear infinite' }} />
        <circle cx="50%" cy="50%" r="280" fill="none" stroke="hsl(263 70% 60%)" strokeWidth="1" strokeDasharray="6 14" style={{ animation: 'orbit 55s linear infinite reverse' }} />
      </svg>

      <div className="container mx-auto max-w-6xl relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          Как мы работаем
        </h2>
        <p className="text-xl text-muted-foreground text-center mb-16">
          Простой и понятный процесс от идеи до результата
        </p>
        
        <div className="grid md:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <div key={i} className="relative">
              <Card className="glass-card p-6 text-center h-full hover:scale-105 transition-transform">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-xl font-bold">
                  {i + 1}
                </div>
                <div className="mt-6 mb-4 flex justify-center">
                  <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center">
                    <Icon name={step.icon} size={28} className="text-primary" />
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}