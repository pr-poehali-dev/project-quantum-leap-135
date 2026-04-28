export function Footer() {
  return (
    <footer className="py-16 px-6 border-t border-border bg-foreground text-primary-foreground">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          <div className="md:col-span-2">
            <a href="#" className="font-serif text-2xl tracking-tight text-primary-foreground block mb-3">
              ПромОграждение
            </a>
            <p className="text-sm text-primary-foreground/60 leading-relaxed mb-4">
              Производство и монтаж промышленных и гражданских ограждений по всей России. Работаем с НДС 22%.
            </p>
            <p className="text-xs text-primary-foreground/40">
              ОГРН 1234567890123 · ИНН 7712345678 · СРО-С-123-456
            </p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-widest text-primary-foreground/40 mb-4">Продукция</p>
            <div className="flex flex-col gap-2 text-sm text-primary-foreground/60">
              <a href="#features" className="hover:text-primary-foreground transition-colors">Сварные ограждения</a>
              <a href="#features" className="hover:text-primary-foreground transition-colors">3D-сетка</a>
              <a href="#features" className="hover:text-primary-foreground transition-colors">Спиральный барьер</a>
              <a href="#features" className="hover:text-primary-foreground transition-colors">Ворота и калитки</a>
            </div>
          </div>
          <div>
            <p className="text-xs uppercase tracking-widest text-primary-foreground/40 mb-4">Компания</p>
            <div className="flex flex-col gap-2 text-sm text-primary-foreground/60">
              <a href="#philosophy" className="hover:text-primary-foreground transition-colors">О нас</a>
              <a href="#pricing" className="hover:text-primary-foreground transition-colors">Прайс</a>
              <a href="#contact" className="hover:text-primary-foreground transition-colors">Контакты</a>
              <a href="#" className="hover:text-primary-foreground transition-colors">Политика конфиденциальности</a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-primary-foreground/40">© 2026 ПромОграждение. Все права защищены.</p>
          <p className="text-xs text-primary-foreground/30">Все цены указаны с НДС 22%</p>
        </div>
      </div>
    </footer>
  );
}
