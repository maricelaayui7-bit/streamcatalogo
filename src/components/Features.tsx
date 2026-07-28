import { Truck, ShieldCheck, CreditCard, Headphones } from 'lucide-react';
import { STORE_FEATURES } from '../data/products';

export function Features() {
  const getIcon = (name: string) => {
    switch (name) {
      case 'Truck':
        return <Truck className="w-6 h-6 text-amber-600" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-6 h-6 text-amber-600" />;
      case 'CreditCard':
        return <CreditCard className="w-6 h-6 text-amber-600" />;
      case 'Headphones':
        return <Headphones className="w-6 h-6 text-amber-600" />;
      default:
        return <Truck className="w-6 h-6 text-amber-600" />;
    }
  };

  return (
    <section id="ventajas" className="py-16 bg-white border-y border-stone-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-xs font-bold uppercase tracking-widest text-amber-700 mb-2">
            ¿Por qué elegirnos?
          </h2>
          <p className="text-2xl sm:text-3xl font-bold text-stone-900 tracking-tight">
            Ventajas de comprar en nuestra tienda en línea
          </p>
          <p className="text-stone-600 text-sm mt-2">
            Nos enfocamos en ofrecer un servicio transparente, rápido y confiable.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {STORE_FEATURES.map((feature) => (
            <div
              key={feature.id}
              className="bg-stone-50/70 p-6 rounded-2xl border border-stone-200/60 hover:bg-stone-50 hover:border-amber-200 transition-all group"
            >
              <div className="w-12 h-12 rounded-xl bg-amber-100/80 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                {getIcon(feature.iconName)}
              </div>
              <h3 className="text-base font-bold text-stone-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
