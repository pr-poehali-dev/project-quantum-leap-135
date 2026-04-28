import { useState } from "react";
import Icon from "@/components/ui/icon";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      {/* НДС-баннер */}
      <div className="bg-primary text-primary-foreground text-center text-xs py-2 px-4">
        Работаем с НДС 22% · Полный пакет закрывающих документов · СРО · ОГРН 1234567890123
      </div>
      <nav className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
        <a href="#" className="font-serif text-xl font-bold tracking-tight text-foreground">
          ПромОграждение
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#philosophy" className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300">
            О компании
          </a>
          <a href="#features" className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300">
            Продукция
          </a>
          <a href="#pricing" className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300">
            Прайс
          </a>
          <a href="#contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300">
            Контакты
          </a>
        </div>

        <div className="hidden md:flex items-center gap-3">
          <a
            href="https://wa.me/79000000000"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 border border-border text-sm rounded-full text-foreground hover:bg-muted transition-colors duration-300"
          >
            <Icon name="MessageCircle" size={16} />
            WhatsApp
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary text-primary-foreground text-sm rounded-full hover:opacity-90 transition-opacity duration-300"
          >
            Получить КП
          </a>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-foreground"
          aria-label="Открыть меню"
        >
          {isOpen ? <Icon name="X" size={24} /> : <Icon name="Menu" size={24} />}
        </button>
      </nav>

      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-background border-b border-border">
          <div className="flex flex-col px-6 py-6 gap-4">
            <a href="#philosophy" onClick={() => setIsOpen(false)} className="text-muted-foreground hover:text-foreground transition-colors">О компании</a>
            <a href="#features" onClick={() => setIsOpen(false)} className="text-muted-foreground hover:text-foreground transition-colors">Продукция</a>
            <a href="#pricing" onClick={() => setIsOpen(false)} className="text-muted-foreground hover:text-foreground transition-colors">Прайс</a>
            <a href="#contact" onClick={() => setIsOpen(false)} className="text-muted-foreground hover:text-foreground transition-colors">Контакты</a>
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="mt-2 px-5 py-2.5 bg-primary text-primary-foreground text-sm rounded-full text-center"
            >
              Получить КП
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
