import { ShoppingBag, Users, Globe, Award } from 'lucide-react';

export function AboutSection() {
  return (
    <section id="nosotros" className="py-16 md:py-24 bg-stone-900 text-stone-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column Text */}
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-400">
              Sobre Nuestra Tienda
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
              Simplificando tus compras online con productos de máxima calidad
            </h2>
            <p className="text-stone-300 text-sm leading-relaxed">
              En <strong className="text-white">NovaStore</strong> creamos un espacio pensado para quienes buscan artículos seleccionados sin complicaciones. Nos comprometemos con una atención cercana, transparencia en precios y envíos eficientes.
            </p>

            <div className="grid grid-cols-2 gap-6 pt-4">
              <div className="border-l-2 border-amber-500 pl-4 space-y-1">
                <span className="text-2xl font-bold text-white block">100%</span>
                <span className="text-xs text-stone-400">Garantía de Satisfacción</span>
              </div>
              <div className="border-l-2 border-amber-500 pl-4 space-y-1">
                <span className="text-2xl font-bold text-white block">24/48h</span>
                <span className="text-xs text-stone-400">Tiempo de Despacho Promedio</span>
              </div>
            </div>
          </div>

          {/* Right Column Highlights */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-stone-800/80 p-6 rounded-2xl border border-stone-700/60 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center">
                <ShoppingBag className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white">Catálogo Curado</h3>
              <p className="text-xs text-stone-400 leading-relaxed">
                Cada producto en nuestra tienda ha sido probado y evaluado para cumplir altos estándares.
              </p>
            </div>

            <div className="bg-stone-800/80 p-6 rounded-2xl border border-stone-700/60 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center">
                <Users className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white">Comunidad Fiel</h3>
              <p className="text-xs text-stone-400 leading-relaxed">
                Miles de clientes confían a diario en nuestra plataforma para sus compras familiares y personales.
              </p>
            </div>

            <div className="bg-stone-800/80 p-6 rounded-2xl border border-stone-700/60 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center">
                <Globe className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white">Envíos Nacionales</h3>
              <p className="text-xs text-stone-400 leading-relaxed">
                Llegamos a cualquier ciudad o municipio con seguimiento detallado de cada pedido.
              </p>
            </div>

            <div className="bg-stone-800/80 p-6 rounded-2xl border border-stone-700/60 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center">
                <Award className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white">Soporte Directo</h3>
              <p className="text-xs text-stone-400 leading-relaxed">
                Asistencia post-venta constante para resolver dudas o coordinar cambios rápidamente.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
