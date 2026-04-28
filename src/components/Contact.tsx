import { useState, FormEvent } from "react";
import Icon from "@/components/ui/icon";

export function Contact() {
  const [form, setForm] = useState({ name: "", phone: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (form.name && form.phone) {
      setSubmitted(true);
    }
  };

  return (
    <section id="contact" className="py-32 px-6 bg-card">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-sm uppercase tracking-widest text-muted-foreground mb-4 block">Связаться</span>
          <h2 className="font-serif text-4xl md:text-5xl tracking-tight text-foreground mb-6 text-balance">
            Пришлите ТЗ — обсчитаем за 24 часа
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto leading-relaxed">
            Снабженцы и тендерные отделы — работаем по ТЗ, КП, договорам. Полный пакет документов с НДС.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Форма */}
          <div>
            {submitted ? (
              <div className="p-8 rounded-2xl bg-primary/10 border border-primary/20">
                <Icon name="CheckCircle" size={40} className="text-primary mb-4" />
                <p className="text-foreground font-serif text-2xl mb-2">Заявка принята!</p>
                <p className="text-muted-foreground">Наш менеджер свяжется с вами в течение 2 часов в рабочее время.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <input
                  type="text"
                  placeholder="Ваше имя и должность"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="px-6 py-4 rounded-xl bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all duration-300"
                  required
                />
                <input
                  type="tel"
                  placeholder="Телефон"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="px-6 py-4 rounded-xl bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all duration-300"
                  required
                />
                <textarea
                  placeholder="Опишите объект: тип ограждения, протяжённость, высота, регион"
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  rows={4}
                  className="px-6 py-4 rounded-xl bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all duration-300 resize-none"
                />
                <button
                  type="submit"
                  className="px-8 py-4 bg-primary text-primary-foreground rounded-xl hover:opacity-90 transition-opacity duration-300 font-medium"
                >
                  Отправить заявку на обсчёт
                </button>
                <p className="text-xs text-muted-foreground text-center">
                  Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                </p>
              </form>
            )}
          </div>

          {/* Контактная информация */}
          <div className="flex flex-col gap-6">
            <div className="p-6 rounded-xl bg-background border border-border">
              <h3 className="font-medium text-foreground mb-4">Быстрая связь</h3>
              <div className="flex flex-col gap-4">
                <a href="https://wa.me/79000000000" target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors">
                  <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                    <Icon name="MessageCircle" size={18} className="text-green-600" />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-foreground">WhatsApp</div>
                    <div className="text-xs">+7 (900) 000-00-00</div>
                  </div>
                </a>
                <a href="https://t.me/yourcompany" target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors">
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                    <Icon name="Send" size={18} className="text-blue-500" />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-foreground">Telegram</div>
                    <div className="text-xs">@yourcompany</div>
                  </div>
                </a>
                <a href="mailto:info@promo.ru"
                  className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <Icon name="Mail" size={18} className="text-primary" />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-foreground">Email</div>
                    <div className="text-xs">info@promo.ru</div>
                  </div>
                </a>
              </div>
            </div>

            <div className="p-6 rounded-xl bg-primary/5 border border-primary/15">
              <div className="flex items-start gap-3">
                <Icon name="Info" size={18} className="text-primary mt-0.5 shrink-0" />
                <div>
                  <p className="text-sm font-medium text-foreground mb-1">Работаем с НДС 22%</p>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Договор поставки или подряда, счёт-фактура, УПД, КС-2, КС-3 — все необходимые документы для бухгалтерии и тендерной документации.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
