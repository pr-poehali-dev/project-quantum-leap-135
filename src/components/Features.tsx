import Icon from "@/components/ui/icon";

const features = [
  {
    icon: "Grid3x3",
    title: "Сварные ограждения",
    description: "Секционные сварные заборы для ТЭЦ, подстанций и режимных объектов. Высота от 1,5 м до 4 м. Оцинкование + полимерное покрытие.",
    tag: "Промышленное",
  },
  {
    icon: "Network",
    title: "3D-сетка",
    description: "Объёмная сварная сетка для складских терминалов, логистических центров и производственных территорий. Быстрый монтаж.",
    tag: "Коммерческое",
  },
  {
    icon: "Shield",
    title: "Спиральный барьер (АКЛ/АСКЛ)",
    description: "Защита периметра КПП, банков, военных и охраняемых объектов. Колючая лента в соответствии с ГОСТ Р 51110.",
    tag: "Периметр",
  },
  {
    icon: "Building2",
    title: "Ограждения для ГО и ЖК",
    description: "Декоративные металлические секции для жилых комплексов, паркингов и благоустроенных территорий. Индивидуальный дизайн.",
    tag: "Гражданское",
  },
];

export function Features() {
  return (
    <section id="features" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <span className="text-sm uppercase tracking-widest text-terracotta mb-4 block">Продукция</span>
          <h2 className="font-serif text-4xl md:text-5xl tracking-tight text-foreground text-balance">
            Ограждения под любой объект
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            Производство по ГОСТ, индивидуальные размеры, доставка и монтаж «под ключ» по всей России
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-8 md:p-10 rounded-2xl bg-card border border-border hover:border-primary/30 hover:shadow-md transition-all duration-500"
            >
              <div className="flex items-start justify-between mb-6">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-500">
                  <Icon name={feature.icon} size={24} className="text-primary" />
                </div>
                <span className="text-xs uppercase tracking-widest text-muted-foreground border border-border px-3 py-1 rounded-full">
                  {feature.tag}
                </span>
              </div>
              <h3 className="font-serif text-2xl text-foreground mb-3">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed mb-5">{feature.description}</p>
              <a href="#contact" className="inline-flex items-center gap-2 text-sm text-primary group-hover:gap-3 transition-all duration-300">
                Запросить КП
                <Icon name="ArrowRight" size={14} />
              </a>
            </div>
          ))}
        </div>

        {/* Перелинковка / похожие */}
        <div className="mt-16 p-8 rounded-2xl bg-primary/5 border border-primary/15 text-center">
          <p className="text-muted-foreground mb-4">С этим товаром часто заказывают:</p>
          <div className="flex flex-wrap justify-center gap-3">
            {["Монтаж ограждений", "Ворота распашные", "Ворота откатные", "Калитки с замком", "Столбы и крепёж", "Покраска и цинкование"].map((item) => (
              <a key={item} href="#contact" className="px-4 py-2 rounded-full border border-border text-sm text-muted-foreground hover:text-foreground hover:border-primary/30 transition-colors duration-300">
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
