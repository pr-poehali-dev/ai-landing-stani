import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Icon from "@/components/ui/icon";

export function CasesSection() {
  const cases = [
    {
      title: "Кейс StaniStudio - создание презентации для клуба КЛАН",
      image: "https://cdn.poehali.dev/files/f34182d5-d5e2-4e50-a885-246b3ed6b1cb.png",
      tags: ["15 слайдов", "Фирменный дизайн", "Маркетинговая структура"],
      testimonial: "Сделали - огонь! инфографика на презе прям бомба!"
    },
    {
      title: "Кейс StaniStudio - создание видео с маскотами для дизайн-студии PERFECTUM",
      image: "https://cdn.poehali.dev/files/03c876a1-1321-4ef5-a3ca-c9993e452651.png",
      tags: ["Дизайн маскотов", "Разработка сценария", "Оживление кадров", "Наложение субтитров"],
      testimonial: "Оч классное видео, а анимация с текстом круто подчёркивает отличия каждого материала"
    },
    {
      title: "Кейс StaniStudio - создание ряда рекламных видео для компании МикроМир",
      image: "https://cdn.poehali.dev/files/193413dc-c66f-433c-9da4-4799707172d4.png",
      tags: ["5 видео до 1 минуты", "Toyota Mark II, Toyota Supra, Porsche, КАМАЗ"],
      testimonial: "Очень хорошо! То, что нужно! Пробуждает чувства ностальгии"
    },
    {
      title: "Кейс StaniStudio - создание оживлённых видео-показов товаров для магазина BUDUARR",
      image: "https://cdn.poehali.dev/files/61608dd5-5a73-4d4c-922f-434614b8cd82.png",
      tags: ["распаковка товара на видео", "видеопоказ модели 360° по кругу"],
      testimonial: "статистика такого контента показала нам повышение активности аудитории на 30-50%"
    }
  ];

  return (
    <section id="cases" className="py-24 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      
      <div className="container mx-auto max-w-7xl relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          Наши топ-кейсы
        </h2>
        <p className="text-xl text-muted-foreground text-center mb-16">
          Реальные проекты с измеримыми результатами
        </p>

        <Carousel className="w-full" opts={{ align: "start", loop: true }}>
          <CarouselContent>
            {cases.map((caseItem, i) => (
              <CarouselItem key={i}>
                <Card className="glass-card overflow-hidden border-white/10">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="relative aspect-[9/16] md:aspect-auto overflow-hidden bg-muted/20">
                      <img
                        src={caseItem.image}
                        alt={caseItem.title}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    
                    <div className="p-8 md:p-12 flex flex-col justify-center">
                      <h3 className="text-2xl md:text-3xl font-bold mb-6 leading-tight">
                        {caseItem.title}
                      </h3>
                      
                      <div className="flex flex-wrap gap-3 mb-8">
                        {caseItem.tags.map((tag, j) => (
                          <span
                            key={j}
                            className="px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-sm font-medium"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      <Card className="glass-card p-6 border-l-4 border-l-primary bg-primary/5">
                        <div className="flex gap-4">
                          <Icon name="Quote" size={32} className="text-primary flex-shrink-0" />
                          <div>
                            <p className="text-lg italic mb-4">"{caseItem.testimonial}"</p>
                            <div className="flex gap-1">
                              {[...Array(5)].map((_, k) => (
                                <Icon key={k} name="Star" size={20} className="text-yellow-500 fill-yellow-500" />
                              ))}
                            </div>
                          </div>
                        </div>
                      </Card>
                    </div>
                  </div>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          
          <div className="flex justify-center gap-4 mt-8">
            <CarouselPrevious className="relative static translate-y-0 glass-card hover:glow-cyan" />
            <CarouselNext className="relative static translate-y-0 glass-card hover:glow-cyan" />
          </div>
        </Carousel>

        <div className="text-center mt-12">
          <Button size="lg" variant="outline" className="border-primary/30 hover:bg-primary/10">
            <Icon name="Folder" size={20} className="mr-2" />
            Смотреть все кейсы
          </Button>
        </div>
      </div>
    </section>
  );
}