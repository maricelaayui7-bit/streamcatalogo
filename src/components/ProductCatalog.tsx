import { useState, MouseEvent } from 'react';
import { Product } from '../types';
import { SAMPLE_PRODUCTS } from '../data/products';
import { Star, Eye, Plus, Check } from 'lucide-react';

interface ProductCatalogProps {
  onSelectProduct: (product: Product) => void;
  onAddToCart: (product: Product) => void;
}

export function ProductCatalog({ onSelectProduct, onAddToCart }: ProductCatalogProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('Todos');
  const [addedIds, setAddedIds] = useState<string[]>([]);

  const categories = ['Todos', 'Tecnología', 'Accesorios', 'Hogar', 'Moda'];

  const filteredProducts = selectedCategory === 'Todos'
    ? SAMPLE_PRODUCTS
    : SAMPLE_PRODUCTS.filter((p) => p.category === selectedCategory);

  const handleQuickAdd = (product: Product, e: MouseEvent) => {
    e.stopPropagation();
    onAddToCart(product);
    setAddedIds((prev) => [...prev, product.id]);
    setTimeout(() => {
      setAddedIds((prev) => prev.filter((id) => id !== product.id));
    }, 1500);
  };

  return (
    <section id="catalogo" className="py-16 md:py-24 bg-stone-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-amber-700 block mb-1">
              Catálogo Destacado
            </span>
            <h2 className="text-3xl font-extrabold text-stone-900 tracking-tight">
              Nuestros Productos Principales
            </h2>
            <p className="text-sm text-stone-600 mt-1 max-w-xl">
              Explora una selección cuidada de artículos destacados con envío directo a tu domicilio.
            </p>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((category) => (
              <button
                key={category}
                id={`filter-${category.toLowerCase()}`}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                  selectedCategory === category
                    ? 'bg-amber-600 text-white shadow-xs'
                    : 'bg-white text-stone-700 hover:bg-stone-100 border border-stone-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => {
            const isAdded = addedIds.includes(product.id);

            return (
              <div
                key={product.id}
                onClick={() => onSelectProduct(product)}
                className="bg-white rounded-2xl border border-stone-200/80 overflow-hidden shadow-xs hover:shadow-md hover:border-amber-300 transition-all cursor-pointer flex flex-col group"
              >
                {/* Image Container */}
                <div className="relative aspect-4/3 bg-stone-100 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />

                  {/* Badge */}
                  {product.badge && (
                    <span className="absolute top-3 left-3 bg-amber-600 text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md shadow-xs">
                      {product.badge}
                    </span>
                  )}

                  {/* Category Tag */}
                  <span className="absolute bottom-3 left-3 bg-stone-900/70 text-white text-[10px] font-medium px-2 py-0.5 rounded-md backdrop-blur-xs">
                    {product.category}
                  </span>

                  {/* Quick view button */}
                  <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onSelectProduct(product);
                      }}
                      aria-label="Ver detalle"
                      className="p-2 bg-white/90 text-stone-800 rounded-lg hover:bg-white shadow-sm transition-all"
                    >
                      <Eye className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Rating */}
                    <div className="flex items-center gap-1 mb-2">
                      <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                      <span className="text-xs font-bold text-stone-800">{product.rating}</span>
                      <span className="text-[11px] text-stone-400">({product.reviewsCount})</span>
                    </div>

                    <h3 className="text-base font-bold text-stone-900 group-hover:text-amber-700 transition-colors line-clamp-1">
                      {product.name}
                    </h3>

                    <p className="text-xs text-stone-500 mt-1 line-clamp-2">
                      {product.description}
                    </p>
                  </div>

                  {/* Pricing & Cart Action */}
                  <div className="pt-4 mt-4 border-t border-stone-100 flex items-center justify-between">
                    <div>
                      <div className="flex items-baseline gap-2">
                        <span className="text-lg font-extrabold text-stone-900">
                          ${product.price.toFixed(2)}
                        </span>
                        {product.originalPrice && (
                          <span className="text-xs text-stone-400 line-through">
                            ${product.originalPrice.toFixed(2)}
                          </span>
                        )}
                      </div>
                    </div>

                    <button
                      id={`btn-add-${product.id}`}
                      onClick={(e) => handleQuickAdd(product, e)}
                      className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                        isAdded
                          ? 'bg-emerald-600 text-white'
                          : 'bg-stone-900 text-white hover:bg-amber-600'
                      }`}
                    >
                      {isAdded ? (
                        <>
                          <Check className="w-3.5 h-3.5" />
                          <span>¡Añadido!</span>
                        </>
                      ) : (
                        <>
                          <Plus className="w-3.5 h-3.5" />
                          <span>Agregar</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
