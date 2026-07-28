import { Store, Heart } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-stone-900 text-stone-400 py-12 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-8 border-b border-stone-800">
          
          {/* Col 1 */}
          <div className="space-y-3 md:col-span-1">
            <div className="flex items-center gap-2 text-white font-bold text-lg">
              <Store className="w-5 h-5 text-amber-500" />
              <span>NovaStore</span>
            </div>
            <p className="text-xs text-stone-400 leading-relaxed">
              Tu tienda en línea con productos de alta calidad y envíos garantizados.
            </p>
          </div>

          {/* Col 2 */}
          <div className="space-y-2">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">Navegación</h4>
            <ul className="space-y-1.5 text-xs">
              <li><a href="#hero" className="hover:text-amber-400 transition-colors">Inicio</a></li>
              <li><a href="#catalogo" className="hover:text-amber-400 transition-colors">Catálogo de Productos</a></li>
              <li><a href="#ventajas" className="hover:text-amber-400 transition-colors">Beneficios</a></li>
              <li><a href="#nosotros" className="hover:text-amber-400 transition-colors">Sobre la Tienda</a></li>
            </ul>
          </div>

          {/* Col 3 */}
          <div className="space-y-2">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">Legal & Ayuda</h4>
            <ul className="space-y-1.5 text-xs">
              <li><a href="#contacto" className="hover:text-amber-400 transition-colors">Preguntas Frecuentes</a></li>
              <li><a href="#contacto" className="hover:text-amber-400 transition-colors">Políticas de Envío</a></li>
              <li><a href="#contacto" className="hover:text-amber-400 transition-colors">Términos del Servicio</a></li>
              <li><a href="#contacto" className="hover:text-amber-400 transition-colors">Centro de Soporte</a></li>
            </ul>
          </div>

          {/* Col 4 */}
          <div className="space-y-2">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">Métodos de Pago</h4>
            <p className="text-xs text-stone-400">
              Aceptamos todas las tarjetas de crédito, débito, transferencias bancarias y pago contra entrega.
            </p>
            <div className="flex items-center gap-2 pt-2 text-[10px] text-stone-300 font-mono">
              <span className="px-2 py-1 bg-stone-800 rounded">VISA</span>
              <span className="px-2 py-1 bg-stone-800 rounded">MasterCard</span>
              <span className="px-2 py-1 bg-stone-800 rounded">PayPal</span>
            </div>
          </div>

        </div>

        {/* Bottom copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-stone-500 gap-4">
          <p>© 2026 NovaStore - Todos los derechos reservados.</p>
          <p className="flex items-center gap-1">
            Diseñado con <Heart className="w-3.5 h-3.5 text-amber-500 fill-amber-500" /> para tu tienda en línea
          </p>
        </div>
      </div>
    </footer>
  );
}
