import Icon from "@/components/ui/icon";

const plans = [
  {
    name: "Малый объект",
    price: "от 850 ₽",
    period: "/м.п.",
    description: "Сварная секция 3D-сетки, высота 1,5–2 м, с монтажом и НДС",
    features: [
      "Секционное ограждение 3D",
      "Столбы 60×60 мм в комплекте",
      "Полимерное покрытие RAL",
      "Монтаж бригадой",
      "Закрывающие документы с НДС",
    ],
    cta: "Запросить смету",
    highlighted: false,
  },
  {
    name: "Промышленный объект",
    price: "от 1 200 ₽",
    period: "/м.п.",
    description: "Сварные ограждения усиленные для периметра ТЭЦ, складов, КПП",
    features: [
      "Высота от 2 до 4 м",
      "Оцинкование + полимер",
      "АКЛ / спиральный барьер",
      "Ворота и калитки в комплекте",
      "Согласование с технадзором",
      "Гарантия 5 лет + сервис",
    ],
    cta: "Прислать ТЗ на обсчёт",
    highlighted: true,
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-20">
          <span className="text-sm uppercase tracking-widest text-amber mb-4 block">Прайс</span>
          <h2 className="font-serif text-4xl md:text-5xl tracking-tight text-foreground mb-4 text-balance">
            Цены с НДС, без скрытых доплат
          </h2>
          <p className="text-muted-foreground text-lg">Точная стоимость — после получения ТЗ или замеров на объекте</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`p-8 md:p-10 rounded-2xl border ${
                plan.highlighted ? "bg-primary text-primary-foreground border-primary" : "bg-card border-border"
              }`}
            >
              <h3 className={`text-xl mb-2 font-medium ${plan.highlighted ? "text-primary-foreground" : "text-foreground"}`}>
                {plan.name}
              </h3>
              <div className="flex items-baseline gap-1 mb-4">
                <span className="font-serif text-4xl tracking-tight">{plan.price}</span>
                {plan.period && (
                  <span className={plan.highlighted ? "text-primary-foreground/70" : "text-muted-foreground"}>
                    {plan.period}
                  </span>
                )}
              </div>
              <p className={`mb-8 text-sm leading-relaxed ${plan.highlighted ? "text-primary-foreground/80" : "text-muted-foreground"}`}>
                {plan.description}
              </p>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <Icon name="Check" size={16} className={plan.highlighted ? "text-primary-foreground" : "text-primary"} />
                    <span className={`text-sm ${plan.highlighted ? "text-primary-foreground/90" : "text-foreground"}`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={`block w-full py-3.5 rounded-full text-center transition-opacity duration-300 hover:opacity-90 text-sm font-medium ${
                  plan.highlighted ? "bg-primary-foreground text-primary" : "bg-primary text-primary-foreground"
                }`}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>

        <p className="text-center text-sm text-muted-foreground mt-8">
          * Все цены указаны с НДС 22%. Окончательная стоимость после замеров и согласования ТЗ.
        </p>
      </div>
    </section>
  );
}
