import { Product, StoreFeature } from '../types';

export const SAMPLE_PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Auriculares Wireless Pro',
    category: 'Tecnología',
    price: 129.99,
    originalPrice: 159.99,
    rating: 4.8,
    reviewsCount: 124,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=800',
    badge: 'Más Vendido',
    description: 'Cancelación activa de ruido, batería de 30 horas y sonido HD de alta fidelidad.'
  },
  {
    id: '2',
    name: 'Reloj Inteligente Minimalista',
    category: 'Accesorios',
    price: 189.00,
    originalPrice: 210.00,
    rating: 4.9,
    reviewsCount: 98,
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=800',
    badge: 'Nuevo',
    description: 'Pantalla AMOLED retina, sensor de ritmo cardíaco continuo y resistencia al agua 50m.'
  },
  {
    id: '3',
    name: 'Lámpara LED Nórdica',
    category: 'Hogar',
    price: 65.50,
    rating: 4.7,
    reviewsCount: 45,
    image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&q=80&w=800',
    description: 'Diseño escandinavo en madera noble con ajuste de intensidad táctil y luz cálida.'
  },
  {
    id: '4',
    name: 'Mochila Urbana Impermeable',
    category: 'Moda',
    price: 79.90,
    originalPrice: 95.00,
    rating: 4.6,
    reviewsCount: 76,
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&q=80&w=800',
    badge: 'Ofertón',
    description: 'Compartimento acolchado para laptop de 15.6", puerto USB integrado y materiales reciclados.'
  },
  {
    id: '5',
    name: 'Cafetera de Goteo Artesanal',
    category: 'Hogar',
    price: 49.00,
    rating: 4.9,
    reviewsCount: 210,
    image: 'https://images.unsplash.com/photo-1517668808822-9a008282361d?auto=format&fit=crop&q=80&w=800',
    description: 'Jarra de vidrio borosilicato resistente al calor y filtro permanente de acero inoxidable.'
  },
  {
    id: '6',
    name: 'Botella Térmica de Acero 750ml',
    category: 'Accesorios',
    price: 28.00,
    rating: 4.8,
    reviewsCount: 152,
    image: 'https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&q=80&w=800',
    description: 'Mantiene tus bebidas frías por 24h o calientes por 12h. Libre de BPA y a prueba de fugas.'
  }
];

export const STORE_FEATURES: StoreFeature[] = [
  {
    id: 'f1',
    title: 'Envíos Rápidos y Seguros',
    description: 'Entregas en 24-48 horas a todo el país con seguimiento en tiempo real.',
    iconName: 'Truck'
  },
  {
    id: 'f2',
    title: 'Garantía de Calidad',
    description: 'Todos nuestros productos son 100% originales con garantía oficial.',
    iconName: 'ShieldCheck'
  },
  {
    id: 'f3',
    title: 'Pago 100% Protegido',
    description: 'Aceptamos tarjetas, transferencias y pagos en cuotas sin interés.',
    iconName: 'CreditCard'
  },
  {
    id: 'f4',
    title: 'Atención Personalizada',
    description: 'Soporte vía WhatsApp y correo dispuesto a responder tus consultas.',
    iconName: 'Headphones'
  }
];
