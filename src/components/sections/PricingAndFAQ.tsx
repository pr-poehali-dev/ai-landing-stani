import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Icon from "@/components/ui/icon";

export function PricingSection() {
  const plans = [
    {
      name: "Создание AI-видео",
      subtitle: "Визуальный контент",
      price: "от 3 000 ₽",
      description: "за видео",
      features: ["Рекламные ролики", "Мультяшные рилсы", "Цифровые аватары", "Зависит от длительности"],
      popular: true
    },
    {
      name: "AI-ВЕБ РАЗРАБОТКА",
      subtitle: "Дизайн и Презентации",
      price: "от 500 ₽",
      description: "за слайд / от 1500₽ лого",
      features: ["Топ-презентации под ключь", "Дизайн логотипов", "Креативы для соцсетей", "Быстрая разработка"],
      popular: false
    },
    {
      name: "Бизнес-автоматизация",
      subtitle: "Умные помощники",
      price: "от 5 000 ₽",
      description: "за проект",
      features: ["Создание чат-ботов", "AI-ассистенты для продаж", "Автоматизация поддержки", "Интеграция с CRM"],
      popular: false
    }
  ];

  return (
    <section id="pricing" className="py-12 sm:py-24 px-4 sm:px-6 relative overflow-hidden">
      <div className="absolute inset-0 grid-animation opacity-50" />

      <div className="absolute top-10 -left-20 w-[500px] h-[500px] bg-primary/25 rounded-full blur-[100px] animate-pulse-slow" />
      <div className="absolute bottom-10 -right-20 w-[500px] h-[500px] bg-secondary/25 rounded-full blur-[100px] animate-pulse-slow" style={{ animationDelay: '4s' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-primary/15 rounded-full blur-[80px] animate-subtle-zoom" />
      <div className="absolute top-0 left-1/3 w-[400px] h-[400px] bg-secondary/20 rounded-full blur-[90px] animate-subtle-zoom" style={{ animationDelay: '10s' }} />
      <div className="absolute bottom-0 right-1/3 w-[350px] h-[350px] bg-primary/20 rounded-full blur-[90px] animate-pulse-slow" style={{ animationDelay: '2s' }} />

      <svg className="absolute inset-0 w-full h-full opacity-40 pointer-events-none" xmlns="http://www.w3.org/2000/svg">
        <line x1="5%" y1="0" x2="35%" y2="100%" stroke="hsl(189 95% 43%)" strokeWidth="1" className="animate-line-slide" />
        <line x1="25%" y1="0" x2="75%" y2="100%" stroke="hsl(263 70% 60%)" strokeWidth="0.8" className="animate-line-slide" style={{ animationDelay: '2s' }} />
        <line x1="55%" y1="0" x2="85%" y2="100%" stroke="hsl(189 95% 43%)" strokeWidth="1" className="animate-line-slide" style={{ animationDelay: '4s' }} />
        <line x1="75%" y1="0" x2="15%" y2="100%" stroke="hsl(263 70% 60%)" strokeWidth="0.8" className="animate-line-slide" style={{ animationDelay: '6s' }} />
        <line x1="95%" y1="0" x2="50%" y2="100%" stroke="hsl(189 95% 43%)" strokeWidth="0.6" className="animate-line-slide" style={{ animationDelay: '1s' }} />
        <line x1="45%" y1="0" x2="5%" y2="100%" stroke="hsl(263 70% 60%)" strokeWidth="0.6" className="animate-line-slide" style={{ animationDelay: '5s' }} />
      </svg>

      <div className="container mx-auto max-w-6xl relative z-10">
        <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-center mb-8 sm:mb-16">
          Тарифы
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, i) => (
            <Card 
              key={i} 
              className={`glass-card p-5 sm:p-8 relative ${plan.popular ? 'glow-cyan scale-105' : ''}`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-background px-6 py-1 rounded-full text-sm font-bold">
                  Популярный
                </div>
              )}
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-muted-foreground mb-4">{plan.subtitle}</p>
                <div className="text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  {plan.price}
                </div>
                <p className="text-sm text-muted-foreground mt-2">{plan.description}</p>
              </div>
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, j) => (
                  <li key={j} className="flex gap-3">
                    <Icon name="Check" size={20} className="text-primary flex-shrink-0 mt-1" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Button 
                className="w-full" 
                variant={plan.popular ? "default" : "outline"}
                asChild
              >
                <a href="https://t.me/Stanis_coach" target="_blank" rel="noopener noreferrer">
                  Выбрать тариф
                </a>
              </Button>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a
            href="https://t.me/Stanis_coach"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-12 py-5 text-xl font-bold rounded-full bg-gradient-to-r from-primary via-secondary to-primary bg-[length:200%_100%] animate-gradient-x text-white shadow-[0_0_30px_rgba(0,194,255,0.4),0_0_60px_rgba(124,58,237,0.2)] hover:shadow-[0_0_40px_rgba(0,194,255,0.6),0_0_80px_rgba(124,58,237,0.4)] hover:scale-105 transition-all duration-300"
          >
            ЗАКАЗАТЬ ПРОЕКТ
          </a>
        </div>
      </div>
    </section>
  );
}

export function FAQSection() {
  const faqs = [
    {
      question: "Сколько времени занимает разработка проекта?",
      answer: "Зависит от сложности: простое AI-видео — 1-2 рабочих дня, лендинг с AI-элементами — 3-4 дня, комплексная автоматизация — около недели. На этапе согласования ТЗ фиксируем конкретные дедлайны."
    },
    {
      question: "В чём ваше преимущество?",
      answer: "Наша студия отличается тем, что содержит в себе весь спектр AI-услуг. Мы — первые на Дальнем Востоке, предлагающие такой перечень с высоким качеством! Сервис, скорость и работа на результат — наш фундамент."
    },
    {
      question: "Справится ли бот со сложными клиентами?",
      answer: "Да, мы обучаем AI-ассистента на вашей базе знаний, корпоративных стандартах и реальных диалогах. Он понимает контекст и отвечает профессионально."
    },
    {
      question: "Безопасно ли давать данные для анализа?",
      answer: "Абсолютно безопасно. Мы работаем по NDA, используем локальные модели где это необходимо, и обеспечиваем полную конфиденциальность ваших данных."
    }
  ];

  return (
    <section className="py-12 sm:py-24 px-4 sm:px-6">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-center mb-8 sm:mb-16">
          Часто задаваемые вопросы
        </h2>
        
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`item-${i}`} className="glass-card px-6 border-none">
              <AccordionTrigger className="text-lg font-semibold hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}