import { useState } from 'react';
import { ShoppingBag, Search, Menu, X, Store } from 'lucide-react';

interface NavbarProps {
  cartCount: number;
  onOpenCart: () => void;
  onNavigate: (sectionId: string) => void;
}

export function Navbar({ cartCount, onOpenCart, onNavigate }: NavbarProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleNavClick = (sectionId: string) => {
    onNavigate(sectionId);
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-stone-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Brand Logo */}
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => handleNavClick('hero')}>
            <div className="w-10 h-10 rounded-xl bg-amber-600 text-white flex items-center justify-center shadow-sm">
              <Store className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xl font-bold tracking-tight text-stone-900 block leading-none">
                NovaStore
              </span>
              <span className="text-[10px] text-amber-700 uppercase tracking-widest font-semibold">
                Tienda Online
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-stone-600">
            <button
              id="nav-link-inicio"
              onClick={() => handleNavClick('hero')}
              className="hover:text-amber-600 transition-colors cursor-pointer"
            >
              Inicio
            </button>
            <button
              id="nav-link-catalogo"
              onClick={() => handleNavClick('catalogo')}
              className="hover:text-amber-600 transition-colors cursor-pointer"
            >
              Catálogo
            </button>
            <button
              id="nav-link-ventajas"
              onClick={() => handleNavClick('ventajas')}
              className="hover:text-amber-600 transition-colors cursor-pointer"
            >
              Ventajas
            </button>
            <button
              id="nav-link-nosotros"
              onClick={() => handleNavClick('nosotros')}
              className="hover:text-amber-600 transition-colors cursor-pointer"
            >
              Nosotros
            </button>
            <button
              id="nav-link-contacto"
              onClick={() => handleNavClick('contacto')}
              className="hover:text-amber-600 transition-colors cursor-pointer"
            >
              Contacto
            </button>
          </nav>

          {/* Action Buttons */}
          <div className="flex items-center gap-3">
            <button
              id="btn-search-preview"
              onClick={() => handleNavClick('catalogo')}
              aria-label="Buscar productos"
              className="p-2 text-stone-600 hover:text-stone-900 hover:bg-stone-100 rounded-lg transition-colors cursor-pointer"
            >
              <Search className="w-5 h-5" />
            </button>

            <button
              id="btn-cart-toggle"
              onClick={onOpenCart}
              className="relative p-2 text-stone-800 hover:bg-stone-100 rounded-lg transition-colors flex items-center gap-2 cursor-pointer"
              aria-label="Carrito de compras"
            >
              <ShoppingBag className="w-5 h-5 text-amber-700" />
              <span className="hidden sm:inline text-xs font-semibold text-stone-700">Carrito</span>
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-amber-600 text-white text-[11px] font-bold w-5 h-5 rounded-full flex items-center justify-center shadow-xs">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Mobile menu trigger */}
            <button
              id="btn-mobile-menu"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-stone-600 hover:text-stone-900 rounded-lg"
              aria-label="Abrir menú"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-stone-200 bg-white px-4 pt-3 pb-6 space-y-3">
          <button
            onClick={() => handleNavClick('hero')}
            className="block w-full text-left py-2 px-3 text-stone-700 font-medium hover:bg-stone-50 rounded-lg"
          >
            Inicio
          </button>
          <button
            onClick={() => handleNavClick('catalogo')}
            className="block w-full text-left py-2 px-3 text-stone-700 font-medium hover:bg-stone-50 rounded-lg"
          >
            Catálogo de Productos
          </button>
          <button
            onClick={() => handleNavClick('ventajas')}
            className="block w-full text-left py-2 px-3 text-stone-700 font-medium hover:bg-stone-50 rounded-lg"
          >
            Ventajas & Beneficios
          </button>
          <button
            onClick={() => handleNavClick('nosotros')}
            className="block w-full text-left py-2 px-3 text-stone-700 font-medium hover:bg-stone-50 rounded-lg"
          >
            Sobre la Tienda
          </button>
          <button
            onClick={() => handleNavClick('contacto')}
            className="block w-full text-left py-2 px-3 text-stone-700 font-medium hover:bg-stone-50 rounded-lg"
          >
            Contacto & Ubicación
          </button>
        </div>
      )}
    </header>
  );
}
