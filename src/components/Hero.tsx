import Icon from "@/components/ui/icon";

export function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 pt-28 relative bg-gradient-to-b from-background to-secondary/30">
      <div className="max-w-4xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-8">
          <span className="w-2 h-2 rounded-full bg-primary" />
          <span className="text-sm font-medium">Промышленное и гражданское ограждение · Работаем с НДС</span>
        </div>

        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl tracking-tight text-foreground leading-[1.1] text-balance mb-8">
          Ограждения для
          <br />
          <span className="italic text-primary">промышленных объектов</span>
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-6">
          Сварные секции, 3D-сетка, спиральный барьер — под любой тип объекта: ТЭЦ, склады, терминалы, КПП. Собственное производство. Монтаж «под ключ».
        </p>

        {/* Доверие-плашки */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-12 text-sm text-muted-foreground">
          <div className="flex items-center gap-1.5">
            <Icon name="BadgeCheck" size={16} className="text-primary" />
            <span>Допуск СРО</span>
          </div>
          <div className="w-px h-4 bg-border" />
          <div className="flex items-center gap-1.5">
            <Icon name="FileText" size={16} className="text-primary" />
            <span>Сертификаты на металл</span>
          </div>
          <div className="w-px h-4 bg-border" />
          <div className="flex items-center gap-1.5">
            <Icon name="Truck" size={16} className="text-primary" />
            <span>Доставка по России</span>
          </div>
          <div className="w-px h-4 bg-border" />
          <div className="flex items-center gap-1.5">
            <Icon name="ShieldCheck" size={16} className="text-primary" />
            <span>Гарантия 5 лет</span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#contact"
            className="group inline-flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground rounded-full text-base hover:opacity-90 transition-all duration-300"
          >
            Прислать ТЗ на обсчёт
            <Icon name="ArrowRight" size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
          </a>
          <a
            href="#features"
            className="inline-flex items-center gap-2 px-8 py-4 text-muted-foreground hover:text-foreground transition-colors duration-300"
          >
            Смотреть каталог
          </a>
        </div>
      </div>

      <div className="absolute bottom-12 left-1/2 -translate-x-1/2">
        <div className="w-px h-16 bg-border" />
      </div>
    </section>
  );
}
