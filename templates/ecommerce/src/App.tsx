import React, { useState } from "react";
import { storeInfo, products, type Product } from "./data";

type CategoryFilter = "Todas" | Product["category"];
type SortOption = "relevancia" | "precio-asc" | "precio-desc";

export function App() {
  const [selectedCategory, setSelectedCategory] =
    useState<CategoryFilter>("Todas");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState<SortOption>("relevancia");
  const [activeProduct, setActiveProduct] = useState<Product | null>(null);
  const [cart, setCart] = useState<{ product: Product; quantity: number }[]>(
    [],
  );
  const [checkoutNotice, setCheckoutNotice] = useState(false);

  const categories: CategoryFilter[] = [
    "Todas",
    "Iluminación",
    "Mobiliario",
    "Escritorio",
    "Accesorios",
  ];

  const filteredProducts = products
    .filter((item) => {
      const matchesCategory =
        selectedCategory === "Todas" || item.category === selectedCategory;
      const matchesSearch =
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.shortDesc.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    })
    .sort((a, b) => {
      if (sortBy === "precio-asc") return a.price - b.price;
      if (sortBy === "precio-desc") return b.price - a.price;
      return 0;
    });

  const addToCart = (product: Product) => {
    setCheckoutNotice(false);
    setCart((prev) => {
      const existing = prev.find((item) => item.product.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        );
      }
      return [...prev, { product, quantity: 1 }];
    });
  };

  const removeFromCart = (productId: string) => {
    setCart((prev) => prev.filter((item) => item.product.id !== productId));
  };

  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);
  const totalPrice = cart.reduce(
    (acc, item) => acc + item.product.price * item.quantity,
    0,
  );

  return (
    <div className="min-h-screen flex flex-col bg-stone-50 text-stone-900">
      <a
        href="#catalogo-principal"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50 focus:bg-emerald-700 focus:text-white focus:px-4 focus:py-2 focus:rounded font-semibold"
      >
        Saltar al catálogo principal
      </a>

      <div
        role="status"
        className="bg-emerald-950 text-emerald-100 text-xs sm:text-sm py-2 px-4 text-center border-b border-emerald-800"
      >
        <strong>Catálogo demostrativo:</strong> Los precios, existencias y el
        carrito son simulaciones locales sin cobros ni envíos reales.
      </div>

      <header className="bg-white border-b border-stone-200 sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
          <a
            href="#"
            className="text-xl font-bold tracking-tight text-stone-900"
          >
            {storeInfo.name}
          </a>

          <div className="flex items-center gap-4 text-sm">
            <a
              href="#catalogo"
              className="text-stone-600 hover:text-stone-900 font-medium"
            >
              Productos
            </a>
            <a
              href="#resumen-pedido"
              className="bg-stone-900 hover:bg-emerald-800 text-white font-semibold px-4 py-2 rounded-lg transition-colors"
            >
              Bolsa ({totalItems})
            </a>
          </div>
        </div>
      </header>

      <main
        id="catalogo-principal"
        className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-10"
      >
        <section className="bg-stone-900 text-stone-50 rounded-2xl p-8 sm:p-12 mb-12">
          <p className="text-emerald-400 text-xs font-semibold uppercase tracking-widest mb-2">
            Colección Otoño – Invierno 2026
          </p>
          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight max-w-2xl leading-tight mb-4">
            {storeInfo.tagline}
          </h1>
          <p className="text-stone-300 text-sm sm:text-base max-w-xl">
            Explora nuestras piezas seleccionadas, filtra por categoría y
            consulta las especificaciones técnicas en la vista de detalle.
          </p>
        </section>

        <section id="catalogo" aria-label="Filtros y listado de productos">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-stone-200">
            <div
              role="group"
              aria-label="Filtrar por categoría"
              className="flex flex-wrap gap-2"
            >
              {categories.map((category) => {
                const active = selectedCategory === category;
                return (
                  <button
                    key={category}
                    type="button"
                    onClick={() => setSelectedCategory(category)}
                    aria-pressed={active}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                      active
                        ? "bg-emerald-700 text-white"
                        : "bg-white text-stone-700 border border-stone-300 hover:bg-stone-100"
                    }`}
                  >
                    {category}
                  </button>
                );
              })}
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <div>
                <label htmlFor="buscar-producto" className="sr-only">
                  Buscar producto
                </label>
                <input
                  id="buscar-producto"
                  type="search"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Buscar por nombre o material..."
                  className="w-full sm:w-64 rounded-lg bg-white border border-stone-300 px-3.5 py-2 text-sm focus:outline-2 focus:outline-emerald-700"
                />
              </div>

              <div>
                <label htmlFor="ordenar-por" className="sr-only">
                  Ordenar productos
                </label>
                <select
                  id="ordenar-por"
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as SortOption)}
                  className="w-full sm:w-auto rounded-lg bg-white border border-stone-300 px-3.5 py-2 text-sm focus:outline-2 focus:outline-emerald-700"
                >
                  <option value="relevancia">Ordenar: Destacados</option>
                  <option value="precio-asc">Precio: Menor a Mayor</option>
                  <option value="precio-desc">Precio: Mayor a Menor</option>
                </select>
              </div>
            </div>
          </div>

          {filteredProducts.length === 0 ? (
            <div className="text-center py-12 bg-white rounded-xl border border-stone-200 my-8">
              <p className="text-stone-600 font-medium">
                No se encontraron productos con esos criterios.
              </p>
              <button
                type="button"
                onClick={() => {
                  setSelectedCategory("Todas");
                  setSearchQuery("");
                }}
                className="mt-3 text-sm font-semibold text-emerald-700 hover:underline"
              >
                Restablecer filtros
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 my-8">
              {filteredProducts.map((product) => (
                <article
                  key={product.id}
                  className="bg-white rounded-xl border border-stone-200 overflow-hidden flex flex-col justify-between shadow-2xs hover:border-emerald-700 transition-colors"
                >
                  <div>
                    <div
                      role="img"
                      aria-label={product.imageAlt}
                      className="h-48 bg-stone-200 text-stone-600 flex items-center justify-center p-6 text-center text-xs font-mono"
                    >
                      [{product.imageAlt}]
                    </div>
                    <div className="p-5">
                      <div className="flex items-center justify-between text-xs mb-2">
                        <span className="font-semibold text-emerald-800">
                          {product.category}
                        </span>
                        <span className="bg-stone-100 text-stone-700 px-2 py-0.5 rounded">
                          {product.stock}
                        </span>
                      </div>
                      <h2 className="text-lg font-bold text-stone-900">
                        {product.name}
                      </h2>
                      <p className="text-sm text-stone-600 mt-1">
                        {product.shortDesc}
                      </p>
                    </div>
                  </div>

                  <div className="p-5 pt-0 flex items-center justify-between border-t border-stone-100 mt-2">
                    <span className="text-lg font-extrabold text-stone-900">
                      ${product.price.toLocaleString("es-MX")}{" "}
                      {storeInfo.currency}
                    </span>
                    <div className="flex gap-2">
                      <button
                        type="button"
                        onClick={() => setActiveProduct(product)}
                        className="px-3 py-1.5 rounded-lg border border-stone-300 text-xs font-semibold hover:bg-stone-100"
                      >
                        Detalle
                      </button>
                      <button
                        type="button"
                        onClick={() => addToCart(product)}
                        className="px-3 py-1.5 rounded-lg bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-semibold transition-colors"
                      >
                        Agregar
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </section>

        {activeProduct && (
          <section
            aria-label="Vista de detalle del producto seleccionado"
            className="my-10 bg-white border-2 border-emerald-700 rounded-2xl p-6 sm:p-8 shadow-lg"
          >
            <div className="flex items-start justify-between gap-4 mb-4">
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-emerald-700">
                  Ficha técnica · {activeProduct.category}
                </span>
                <h2 className="text-2xl font-bold text-stone-900 mt-1">
                  {activeProduct.name}
                </h2>
              </div>
              <button
                type="button"
                onClick={() => setActiveProduct(null)}
                className="text-sm font-semibold text-stone-500 hover:text-stone-900 px-3 py-1 rounded border border-stone-300"
              >
                Cerrar detalle ✕
              </button>
            </div>

            <p className="text-stone-700 text-sm leading-relaxed mb-6">
              {activeProduct.details}
            </p>

            <dl className="grid grid-cols-1 sm:grid-cols-3 gap-4 bg-stone-50 p-4 rounded-xl border border-stone-200 text-sm mb-6">
              <div>
                <dt className="text-xs text-stone-500 uppercase">
                  Dimensiones
                </dt>
                <dd className="font-semibold text-stone-900 mt-0.5">
                  {activeProduct.dimensions}
                </dd>
              </div>
              <div>
                <dt className="text-xs text-stone-500 uppercase">Materiales</dt>
                <dd className="font-semibold text-stone-900 mt-0.5">
                  {activeProduct.materials}
                </dd>
              </div>
              <div>
                <dt className="text-xs text-stone-500 uppercase">
                  Precio unitario
                </dt>
                <dd className="font-bold text-emerald-800 mt-0.5">
                  ${activeProduct.price.toLocaleString("es-MX")}{" "}
                  {storeInfo.currency}
                </dd>
              </div>
            </dl>

            <button
              type="button"
              onClick={() => addToCart(activeProduct)}
              className="bg-emerald-700 hover:bg-emerald-800 text-white font-semibold px-6 py-2.5 rounded-lg text-sm transition-colors"
            >
              Añadir a la bolsa demostrativa
            </button>
          </section>
        )}

        <section
          id="resumen-pedido"
          className="mt-12 bg-white border border-stone-200 rounded-2xl p-6 sm:p-8"
        >
          <h2 className="text-xl font-bold text-stone-900 mb-1">
            Bolsa de Compra Demostrativa
          </h2>
          <p className="text-xs text-stone-500 mb-6">
            Simulación de selección de productos (no solicita tarjetas ni
            procesa pagos reales).
          </p>

          {checkoutNotice && (
            <div
              role="alert"
              className="mb-6 bg-emerald-50 border border-emerald-600 text-emerald-950 p-4 rounded-xl text-sm"
            >
              <strong>Pedido simulado con éxito:</strong> Esta demostración ha
              vaciado la bolsa sin realizar ningún cargo real.
            </div>
          )}

          {cart.length === 0 ? (
            <p className="text-sm text-stone-600">
              Tu bolsa demostrativa está vacía. Agrega algún artículo del
              catálogo superior.
            </p>
          ) : (
            <div className="space-y-4">
              {cart.map(({ product, quantity }) => (
                <div
                  key={product.id}
                  className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-stone-200 text-sm"
                >
                  <div>
                    <span className="font-bold text-stone-900">
                      {product.name}
                    </span>
                    <span className="text-stone-500 ml-2">× {quantity}</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="font-semibold">
                      ${(product.price * quantity).toLocaleString("es-MX")}{" "}
                      {storeInfo.currency}
                    </span>
                    <button
                      type="button"
                      onClick={() => removeFromCart(product.id)}
                      className="text-xs text-red-700 hover:underline font-medium"
                    >
                      Quitar
                    </button>
                  </div>
                </div>
              ))}

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-4">
                <p className="text-lg font-extrabold text-stone-900">
                  Total estimado: ${totalPrice.toLocaleString("es-MX")}{" "}
                  {storeInfo.currency}
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setCart([]);
                    setCheckoutNotice(true);
                  }}
                  className="bg-stone-900 hover:bg-emerald-800 text-white font-bold px-6 py-2.5 rounded-lg text-sm transition-colors"
                >
                  Simular orden de compra
                </button>
              </div>
            </div>
          )}
        </section>
      </main>

      <footer className="bg-stone-900 text-stone-400 text-xs py-8 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>
            © 2026 {storeInfo.name}. Plantilla demostrativa para Web Templates
            Library.
          </p>
          <p>Sin pasarela de pagos ni procesamiento comercial real.</p>
        </div>
      </footer>
    </div>
  );
}
