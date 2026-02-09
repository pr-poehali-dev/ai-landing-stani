import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Icon from "@/components/ui/icon";

export default function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <HeroSection />
      <TrustBar />
      <ProblemSection />
      <ServicesSection />
      <ProcessSection />
      <PricingSection />
      <FAQSection />
      <CTASection />
      <Footer />
    </div>
  );
}

function HeroSection() {
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

function TrustBar() {
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

function ProblemSection() {
  const problems = [
    {
      icon: "Clock",
      title: "Рутина съедает время?",
      solution: "Наши AI-ассистенты работают 24/7 без выходных."
    },
    {
      icon: "DollarSign",
      title: "Дорогой продакшн?",
      solution: "Создаем видео и дизайн в 10 раз быстрее и дешевле студий."
    },
    {
      icon: "Database",
      title: "Хаос в данных?",
      solution: "AI найдет инсайты там, где человек не увидит закономерности."
    }
  ];

  return (
    <section className="py-24 px-6">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          Бизнес меняется. Либо вы используете AI, либо отстаете.
        </h2>
        <p className="text-xl text-muted-foreground text-center mb-16 max-w-3xl mx-auto">
          Ваши конкуренты уже автоматизируют процессы с помощью нейросетей
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

function ServicesSection() {
  const services = [
    {
      title: "AI-Маркетинг и Визуал",
      icon: "Sparkles",
      color: "primary",
      items: [
        "Создание AI-видео и Аватаров: Рекламные ролики, Цифровые двойники для рилс",
        "Дизайн логотипов и Креативов: Уникальный брендинг",
        "AI-Презентации: Продающие слайды 'под ключ' за считанные часы"
      ]
    },
    {
      title: "Автоматизация и Веб",
      icon: "Bot",
      color: "secondary",
      items: [
        "AI-Ассистенты и Чат-боты: Умные ИИ-сотрудники поддержки и продаж",
        "Создание сайтов с AI: Генеративный дизайн и умный контент. Быстрый запуск"
      ]
    },
    {
      title: "Интеллект и Развитие",
      icon: "Brain",
      color: "accent",
      items: [
        "Глубокий анализ данных: Прогнозирование трендов, анализ конкурентов и отчетов",
        "Корпоративное обучение: Учим ваши команды реально использовать AI"
      ]
    }
  ];

  return (
    <section className="py-24 px-6 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
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
                    <Icon name="Check" size={20} className="text-primary flex-shrink-0 mt-1" />
                    <span>{item}</span>
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

function ProcessSection() {
  const steps = [
    { icon: "Lightbulb", title: "Брифинг", description: "Понимаем задачи" },
    { icon: "Search", title: "Анализ", description: "Подбираем стек нейросетей под ваш кейс" },
    { icon: "Cpu", title: "Реализация", description: "Обучаем модели, генерируем, допиливаем" },
    { icon: "Rocket", title: "Интеграция/Сдача", description: "Внедряем в ваши системы или отдаем готовые файлы" }
  ];

  return (
    <section className="py-24 px-6">
      <div className="container mx-auto max-w-6xl">
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

function PricingSection() {
  const plans = [
    {
      name: "Start",
      subtitle: "Контент",
      price: "от 50 000 ₽",
      features: ["Аватар", "5 креативов", "Лого"],
      popular: false
    },
    {
      name: "Business",
      subtitle: "Автоматизация",
      price: "от 150 000 ₽",
      features: ["Чат-бот", "Сайт", "Видео-презентация"],
      popular: true
    },
    {
      name: "Enterprise",
      subtitle: "Полное внедрение",
      price: "от 500 000 ₽",
      features: ["Анализ данных", "Обучение штата", "Кастомные AI-решения"],
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

function FAQSection() {
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

function CTASection() {
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

function Footer() {
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
