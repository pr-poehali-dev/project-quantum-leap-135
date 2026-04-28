import Icon from "@/components/ui/icon";

const certs = [
  { icon: "Award", label: "СРО допуск №СРО-С-123-456" },
  { icon: "FileCheck", label: "ГОСТ Р 51110-97" },
  { icon: "ShieldCheck", label: "Сертификат ISO 9001" },
  { icon: "Building", label: "ОГРН 1234567890123 · ИНН 7712345678" },
];

export function Testimonial() {
  return (
    <section className="py-32 px-6 bg-primary/5">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-sm uppercase tracking-widest text-muted-foreground mb-4 block">Центр доверия</span>
          <h2 className="font-serif text-4xl md:text-5xl tracking-tight text-foreground text-balance">
            Документы и сертификаты
          </h2>
        </div>

        {/* Цитата */}
        <blockquote className="font-serif text-2xl md:text-3xl text-foreground leading-tight tracking-tight mb-10 text-balance text-center">
          «Мы поставили ограждение для склада площадью 4 га. Сдали в срок, все акты подписаны, НДС в порядке — впервые без головной боли с документами.»
        </blockquote>

        <div className="flex items-center justify-center gap-4 mb-16">
          <div className="w-12 h-12 rounded-full bg-muted overflow-hidden">
            <img src="/placeholder-user.jpg" alt="Игорь Смирнов" className="w-full h-full object-cover" />
          </div>
          <div className="text-left">
            <p className="text-foreground font-medium">Игорь Смирнов</p>
            <p className="text-sm text-muted-foreground">Начальник службы снабжения, ОАО «ЛогистикТерминал»</p>
          </div>
        </div>

        {/* Сертификаты */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {certs.map((cert, i) => (
            <div key={i} className="flex flex-col items-center gap-3 p-6 rounded-xl bg-card border border-border text-center">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <Icon name={cert.icon} size={22} className="text-primary" />
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">{cert.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
