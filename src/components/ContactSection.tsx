import { useState, FormEvent } from 'react';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle2 } from 'lucide-react';

export function ContactSection() {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSubscribed, setNewsletterSubscribed] = useState(false);

  const [contactForm, setContactForm] = useState({ name: '', email: '', message: '' });
  const [contactSent, setContactSent] = useState(false);

  const handleNewsletterSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (newsletterEmail.trim()) {
      setNewsletterSubscribed(true);
      setNewsletterEmail('');
      setTimeout(() => setNewsletterSubscribed(false), 3000);
    }
  };

  const handleContactSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (contactForm.name && contactForm.email && contactForm.message) {
      setContactSent(true);
      setContactForm({ name: '', email: '', message: '' });
      setTimeout(() => setContactSent(false), 3000);
    }
  };

  return (
    <section id="contacto" className="py-16 md:py-24 bg-stone-100/70 border-t border-stone-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Newsletter Banner */}
        <div className="bg-gradient-to-r from-amber-700 via-amber-600 to-amber-700 rounded-3xl p-8 md:p-12 text-white shadow-xl mb-16 relative overflow-hidden">
          <div className="relative z-10 max-w-2xl mx-auto text-center space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-200">
              Novedades y Descuentos
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              Suscríbete para recibir promociones exclusivas
            </h2>
            <p className="text-amber-100 text-xs sm:text-sm">
              Recibe avisos sobre nuevos lanzamientos, ofertas de temporada y cupones de descuento directo en tu correo.
            </p>

            {newsletterSubscribed ? (
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md px-6 py-3 rounded-xl text-xs font-bold text-white">
                <CheckCircle2 className="w-4 h-4 text-emerald-300" />
                <span>¡Gracias por suscribirte a NovaStore!</span>
              </div>
            ) : (
              <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto pt-2">
                <input
                  type="email"
                  required
                  placeholder="Tu correo electrónico..."
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  className="flex-1 px-4 py-3 rounded-xl bg-white text-stone-900 placeholder:text-stone-400 text-xs font-medium focus:outline-hidden"
                />
                <button
                  type="submit"
                  className="px-6 py-3 rounded-xl bg-stone-900 hover:bg-stone-950 text-white font-bold text-xs transition-colors cursor-pointer"
                >
                  Suscribirme
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Contact Info & Direct Inquiry Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Store info */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-amber-700">
                Atención al Cliente
              </span>
              <h3 className="text-2xl font-bold text-stone-900 mt-1">
                ¿Tienes alguna consulta?
              </h3>
              <p className="text-xs text-stone-600 mt-2">
                Estamos disponibles para orientarte con la elección de tus productos o consultar el estado de tu pedido.
              </p>
            </div>

            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-lg bg-amber-100 flex items-center justify-center text-amber-700 shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-xs font-bold text-stone-900 block">Teléfono / WhatsApp</span>
                  <span className="text-xs text-stone-600">+54 (11) 4567-8900</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-lg bg-amber-100 flex items-center justify-center text-amber-700 shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-xs font-bold text-stone-900 block">Correo Electrónico</span>
                  <span className="text-xs text-stone-600">contacto@novastore.com</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-lg bg-amber-100 flex items-center justify-center text-amber-700 shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-xs font-bold text-stone-900 block">Oficina Central</span>
                  <span className="text-xs text-stone-600">Av. Comercio 1234, Centro Comercial Nivel 2</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-lg bg-amber-100 flex items-center justify-center text-amber-700 shrink-0">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-xs font-bold text-stone-900 block">Horario de Atención</span>
                  <span className="text-xs text-stone-600">Lunes a Viernes: 9:00 - 18:00hs</span>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Message Form */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-2xl border border-stone-200/80 shadow-xs">
            <h4 className="text-lg font-bold text-stone-900 mb-2">
              Envíanos un mensaje directo
            </h4>
            <p className="text-xs text-stone-500 mb-6">
              Completa el formulario y un asesor comercial te responderá a la brevedad.
            </p>

            {contactSent ? (
              <div className="p-6 bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-xl text-center space-y-2">
                <CheckCircle2 className="w-8 h-8 text-emerald-600 mx-auto" />
                <p className="text-sm font-bold">¡Mensaje enviado con éxito!</p>
                <p className="text-xs text-emerald-700">Nos pondremos en contacto contigo lo antes posible.</p>
              </div>
            ) : (
              <form onSubmit={handleContactSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-bold text-stone-700 block mb-1">Nombre</label>
                    <input
                      type="text"
                      required
                      placeholder="Tu nombre completo"
                      value={contactForm.name}
                      onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 text-xs font-medium focus:ring-2 focus:ring-amber-500 focus:outline-hidden"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-bold text-stone-700 block mb-1">Correo Electrónico</label>
                    <input
                      type="email"
                      required
                      placeholder="correo@ejemplo.com"
                      value={contactForm.email}
                      onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 text-xs font-medium focus:ring-2 focus:ring-amber-500 focus:outline-hidden"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs font-bold text-stone-700 block mb-1">Mensaje o Consulta</label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Escribe tu duda o inquietud..."
                    value={contactForm.message}
                    onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 text-xs font-medium focus:ring-2 focus:ring-amber-500 focus:outline-hidden resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs transition-colors cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Enviar Consulta</span>
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
