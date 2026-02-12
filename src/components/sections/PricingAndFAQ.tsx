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
    <section className="py-24 px-6 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          Тарифы
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, i) => (
            <Card 
              key={i} 
              className={`glass-card p-8 relative ${plan.popular ? 'glow-cyan scale-105' : ''}`}
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
              >
                Выбрать тариф
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

export function FAQSection() {
  const faqs = [
    {
      question: "А это уникальный контент?",
      answer: "Да, все права на созданный контент передаются вам. Мы создаем уникальные материалы специально под ваши задачи."
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
    <section className="py-24 px-6">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
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