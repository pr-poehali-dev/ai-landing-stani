import Icon from "@/components/ui/icon";

const stats = [
  {
    icon: "Users",
    value: "50+",
    label: "клиентов за 2 месяца",
  },
  {
    icon: "Brain",
    value: "25",
    label: "нейросетей используется",
  },
  {
    icon: "Zap",
    value: "Быстрая",
    label: "разработка проектов",
  },
  {
    icon: "Star",
    value: "Высокий",
    label: "сервис и качество",
  },
];

const roles = [
  "Основатель сообщества ПРОЖизнь",
  "Создатель клуба предпринимателей «Клан»",
  "AI-Креатор",
];

export function AboutSection() {
  return (
    <section id="about" className="py-24 px-6 relative overflow-hidden">
      <div className="absolute inset-0 grid-animation opacity-30" />
      <div className="absolute top-10 -right-20 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[100px] animate-pulse-slow" />
      <div className="absolute bottom-10 -left-20 w-[500px] h-[500px] bg-secondary/20 rounded-full blur-[100px] animate-pulse-slow" style={{ animationDelay: "4s" }} />

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-16">
          <span className="text-primary font-semibold tracking-wider uppercase text-sm">
            О студии
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-3">
            Человек за <span className="text-gradient">StaniStudio</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="relative flex justify-center">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-[350px] h-[350px] md:w-[420px] md:h-[420px] rounded-full bg-gradient-to-br from-primary/30 to-secondary/30 blur-[60px] animate-pulse-slow" />
            </div>
            <div className="relative">
              <div className="w-[300px] h-[300px] md:w-[380px] md:h-[380px] rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-primary/10">
                <img
                  src="https://cdn.poehali.dev/files/b13bcffb-cf27-4723-bda2-1fd04ae55dd4.png"
                  alt="Станислав Цыбульский"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 glass-card px-4 py-2 rounded-xl border border-primary/30">
                <span className="text-primary font-semibold text-sm flex items-center gap-2">
                  <Icon name="Sparkles" size={16} />
                  Founder & AI-Creator
                </span>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-3xl md:text-4xl font-bold">
              Станислав Цыбульский
            </h3>
            <div className="space-y-3">
              {roles.map((role, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <Icon name="CheckCircle" size={16} className="text-primary" />
                  </div>
                  <span className="text-muted-foreground text-lg">{role}</span>
                </div>
              ))}
            </div>
            <p className="text-muted-foreground leading-relaxed text-lg border-l-2 border-primary/40 pl-4">
              Создаю контент и автоматизирую бизнес-процессы с помощью
              передовых нейросетей. Моя миссия — дать каждому предпринимателю
              доступ к AI-инструментам, которые раньше были доступны только
              крупным компаниям.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="glass-card rounded-2xl p-6 text-center group hover:border-primary/30 transition-all duration-500 hover:shadow-lg hover:shadow-primary/5"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-500">
                <Icon
                  name={stat.icon}
                  size={24}
                  className="text-primary"
                />
              </div>
              <div className="text-2xl md:text-3xl font-bold text-gradient mb-1">
                {stat.value}
              </div>
              <div className="text-muted-foreground text-sm">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
