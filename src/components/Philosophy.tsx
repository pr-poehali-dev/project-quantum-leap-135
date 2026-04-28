import Icon from "@/components/ui/icon";

export function Philosophy() {
  return (
    <section id="philosophy" className="py-32 px-6 bg-card">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left: Image */}
          <div className="relative aspect-[4/5] bg-muted rounded-lg overflow-hidden">
            <img
              src="/minimal-scandinavian-workspace-with-natural-light-.jpg"
              alt="Производство металлических ограждений"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-6 left-6 right-6 p-6 bg-background/90 backdrop-blur-sm rounded-lg">
              <p className="text-sm text-muted-foreground italic">
                «Качество нашей продукции подтверждено на 500+ промышленных объектах по всей России.»
              </p>
            </div>
          </div>

          {/* Right: Text content */}
          <div className="flex flex-col gap-8">
            <span className="text-sm uppercase tracking-widest text-sage">О компании</span>
            <h2 className="font-serif text-4xl md:text-5xl tracking-tight text-foreground leading-tight text-balance">
              Надёжность, проверенная на промышленных объектах
            </h2>
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                Более 12 лет мы производим и монтируем ограждения для предприятий энергетики, логистики, нефтехимии
                и гражданского строительства. Собственный металлообрабатывающий цех в Москве.
              </p>
              <p>
                Работаем исключительно с юридическими лицами: полный пакет закрывающих документов, НДС 22%,
                выполнение требований технадзора и госприёмки.
              </p>
            </div>

            {/* Метрики доверия */}
            <div className="grid grid-cols-3 gap-4 pt-4">
              <div className="text-center">
                <div className="font-serif text-3xl text-primary font-bold">500+</div>
                <div className="text-xs text-muted-foreground mt-1">объектов сдано</div>
              </div>
              <div className="text-center border-x border-border">
                <div className="font-serif text-3xl text-primary font-bold">12 лет</div>
                <div className="text-xs text-muted-foreground mt-1">на рынке</div>
              </div>
              <div className="text-center">
                <div className="font-serif text-3xl text-primary font-bold">НДС</div>
                <div className="text-xs text-muted-foreground mt-1">включён</div>
              </div>
            </div>

            <div className="pt-2 flex items-center gap-4">
              <a href="#features" className="inline-flex items-center gap-2 text-foreground group">
                <span className="border-b border-foreground pb-0.5">Наша продукция</span>
                <span className="text-terracotta group-hover:translate-x-1 transition-transform duration-300">→</span>
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 text-primary group"
              >
                <Icon name="Download" size={16} />
                <span className="border-b border-primary pb-0.5">Скачать реквизиты</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
