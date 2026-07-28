import { ArrowRight, ShoppingBag, Sparkles, CheckCircle2 } from 'lucide-react';

interface HeroProps {
  onExploreClick: () => void;
}

export function Hero({ onExploreClick }: HeroProps) {
  return (
    <section id="hero" className="relative bg-gradient-to-b from-stone-100 via-stone-50 to-white pt-12 pb-16 md:pt-20 md:pb-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Copy */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-100/80 border border-amber-200/80 text-amber-800 text-xs font-semibold tracking-wide">
              <Sparkles className="w-3.5 h-3.5 text-amber-600" />
              <span>Nueva Colección 2026 Disponibles</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-stone-900 tracking-tight leading-[1.15]">
              Tu tienda en línea de confianza para <span className="text-amber-700 underline decoration-amber-300 decoration-wavy decoration-2">productos seleccionados</span>
            </h1>

            <p className="text-lg text-stone-600 max-w-2xl leading-relaxed">
              Descubre una experiencia de compra sencilla, rápida y segura. Ofrecemos los mejores artículos de tecnología, hogar, moda y accesorios con envíos a todo el país.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <button
                id="btn-hero-explore"
                onClick={onExploreClick}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-amber-600 hover:bg-amber-700 text-white font-medium text-base shadow-sm hover:shadow transition-all cursor-pointer"
              >
                <ShoppingBag className="w-5 h-5" />
                Explorar Catálogo
                <ArrowRight className="w-4 h-4 ml-1" />
              </button>

              <a
                href="#contacto"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl border border-stone-300 bg-white hover:bg-stone-50 text-stone-800 font-medium text-base transition-colors"
              >
                Conocer Más
              </a>
            </div>

            {/* Key trust bullets */}
            <div className="pt-6 border-t border-stone-200/80 grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs font-medium text-stone-600">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0" />
                <span>Envíos Garatizados</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0" />
                <span>Pago Contra Entrega</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0" />
                <span>Devolución Sin Costo</span>
              </div>
            </div>
          </div>

          {/* Hero Banner Visual */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Background decorative blob */}
              <div className="absolute -top-6 -right-6 w-72 h-72 bg-amber-200/50 rounded-full blur-3xl -z-10"></div>
              <div className="absolute -bottom-6 -left-6 w-72 h-72 bg-stone-300/40 rounded-full blur-3xl -z-10"></div>

              {/* Main Banner Image Container */}
              <div className="relative rounded-2xl overflow-hidden shadow-xl border border-stone-200/80 bg-stone-900 group">
                <img
                  src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=1000"
                  alt="Presentación de la tienda en línea"
                  className="w-full h-[400px] object-cover opacity-90 group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-stone-950/20 to-transparent flex flex-col justify-end p-6 text-white">
                  <span className="text-xs font-semibold text-amber-400 uppercase tracking-wider">
                    Calidad Premium
                  </span>
                  <p className="text-xl font-bold mt-1">
                    Productos pensados para tu estilo de vida
                  </p>
                  <p className="text-xs text-stone-300 mt-1">
                    Diseños funcionales y duraderos con entregas directas a tu puerta.
                  </p>
                </div>
              </div>

              {/* Floating Stat Card */}
              <div className="absolute -bottom-5 -left-5 bg-white p-4 rounded-xl shadow-lg border border-stone-200 flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-amber-100 flex items-center justify-center text-amber-700 font-bold text-lg">
                  ★ 4.9
                </div>
                <div>
                  <p className="text-xs font-bold text-stone-900">+1,500 Clientes Felices</p>
                  <p className="text-[11px] text-stone-500">Valoración promedio verificada</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
