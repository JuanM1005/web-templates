import { useMemo, useState, type CSSProperties } from "react";
import { categories, products, type Product, type ProductCategory } from "./data";

type Filter = "Todos" | ProductCategory;
type SortOrder = "featured" | "priceAsc" | "priceDesc";
type PriceFilter = "all" | "under1000" | "over1000";
type Cart = Record<string, number>;

const currency = new Intl.NumberFormat("es-MX", {
  style: "currency",
  currency: "MXN",
  maximumFractionDigits: 0,
});

export function App() {
  const [filter, setFilter] = useState<Filter>("Todos");
  const [query, setQuery] = useState("");
  const [sortOrder, setSortOrder] = useState<SortOrder>("featured");
  const [priceFilter, setPriceFilter] = useState<PriceFilter>("all");
  const [cart, setCart] = useState<Cart>({});
  const [cartOpen, setCartOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [favorites, setFavorites] = useState<Set<string>>(() => new Set());
  const [notice, setNotice] = useState("");

  const visibleProducts = useMemo(() => {
    const result = products.filter((product) => {
      const matchesCategory = filter === "Todos" || product.category === filter;
      const matchesQuery = `${product.name} ${product.material}`
        .toLowerCase()
        .includes(query.trim().toLowerCase());
      const matchesPrice =
        priceFilter === "all" ||
        (priceFilter === "under1000" ? product.price < 1000 : product.price >= 1000);
      return matchesCategory && matchesQuery && matchesPrice;
    });

    if (sortOrder === "priceAsc") return [...result].sort((a, b) => a.price - b.price);
    if (sortOrder === "priceDesc") return [...result].sort((a, b) => b.price - a.price);
    return result;
  }, [filter, query, sortOrder, priceFilter]);

  const cartItems = products
    .filter((product) => cart[product.id])
    .map((product) => ({ product, quantity: cart[product.id] }));
  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);
  const subtotal = cartItems.reduce(
    (total, item) => total + item.product.price * item.quantity,
    0,
  );

  function addToCart(product: Product) {
    setCart((current) => ({
      ...current,
      [product.id]: (current[product.id] ?? 0) + 1,
    }));
    setNotice(`${product.name} se añadió a la bolsa demostrativa.`);
  }

  function updateQuantity(productId: string, change: number) {
    setCart((current) => {
      const nextQuantity = Math.max(0, (current[productId] ?? 0) + change);
      const next = { ...current };
      if (nextQuantity === 0) delete next[productId];
      else next[productId] = nextQuantity;
      return next;
    });
  }

  function toggleFavorite(productId: string) {
    setFavorites((current) => {
      const next = new Set(current);
      if (next.has(productId)) next.delete(productId);
      else next.add(productId);
      return next;
    });
  }

  return (
    <div className="min-h-screen bg-[#f6f2e9] text-[#20231f]">
      <a href="#catalogo" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:bg-[#d45036] focus:px-4 focus:py-2 focus:text-white">
        Saltar al catálogo
      </a>
      <div className="border-b border-[#20231f] bg-[#20231f] px-4 py-2 text-center text-xs font-bold tracking-wide text-[#f6f2e9]">
        TIENDA DEMOSTRATIVA · Productos, precios y bolsa son ficticios; no se procesan pagos.
      </div>
      <header className="sticky top-0 z-30 border-b border-[#20231f] bg-[#f6f2e9]/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-5 px-4 py-5 sm:px-6">
          <a href="#inicio" className="font-editorial text-2xl font-bold tracking-tight">
            FORMA<span className="text-[#d45036]">●</span>ESTUDIO
          </a>
          <nav aria-label="Navegación de tienda" className="hidden gap-7 text-sm font-semibold md:flex">
            <a href="#catalogo">Colección</a><a href="#historia">El estudio</a><a href="#materiales">Materiales</a>
          </nav>
          <div className="flex items-center gap-2">
            <span className="hidden text-xs font-semibold sm:inline">Favoritos {favorites.size}</span>
            <button type="button" onClick={() => setCartOpen(true)} className="border border-[#20231f] px-4 py-2 text-sm font-bold transition hover:bg-[#20231f] hover:text-white">
              Bolsa ({cartCount})
            </button>
          </div>
        </div>
      </header>

      {notice && (
        <div role="status" className="fixed bottom-4 right-4 z-[70] max-w-sm border border-[#20231f] bg-white p-4 text-sm font-semibold shadow-xl">
          <button type="button" aria-label="Cerrar aviso" onClick={() => setNotice("")} className="float-right ml-4">×</button>
          {notice}
        </div>
      )}

      <main>
        <section id="inicio" className="border-b border-[#20231f]">
          <div className="mx-auto grid max-w-7xl lg:grid-cols-[1.1fr_.9fr]">
            <div className="flex flex-col justify-center px-4 py-16 sm:px-8 lg:py-28">
              <p className="mb-5 text-xs font-bold uppercase tracking-[0.22em] text-[#d45036]">Colección 01 / 2026</p>
              <h1 className="font-editorial max-w-3xl text-5xl leading-[.98] font-normal sm:text-7xl">Objetos cotidianos para vivir <em>despacio.</em></h1>
              <p className="mt-7 max-w-lg text-base leading-relaxed text-[#55594f]">Una tienda editorial para piezas de autor, materiales honestos y pequeñas series producidas con intención.</p>
              <a href="#catalogo" className="mt-8 inline-flex w-fit items-center gap-3 border-b-2 border-[#d45036] pb-2 text-sm font-bold">Explorar la colección <span aria-hidden="true">↓</span></a>
            </div>
            <div aria-hidden="true" className="relative min-h-105 overflow-hidden border-t border-[#20231f] bg-[#d7c8a7] lg:border-t-0 lg:border-l">
              <div className="absolute left-[16%] top-[18%] h-58 w-44 rounded-t-full bg-[#d45036] shadow-2xl"></div>
              <div className="absolute bottom-[13%] right-[12%] h-40 w-40 rounded-full bg-[#20231f]"></div>
              <div className="absolute bottom-[16%] left-[33%] h-20 w-52 rotate-[-8deg] bg-[#f6f2e9] shadow-xl"></div>
              <p className="absolute bottom-5 left-5 font-mono text-xs">FORMA / FUNCIÓN / OFICIO</p>
            </div>
          </div>
        </section>

        <section id="catalogo" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:py-24">
          <div className="mb-8 flex flex-col gap-6 border-b border-[#20231f] pb-6 lg:flex-row lg:items-end lg:justify-between">
            <div><p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-[#d45036]">Catálogo V2 · {visibleProducts.length} resultados</p><h2 className="font-editorial text-4xl sm:text-5xl">Piezas seleccionadas</h2></div>
            <label className="text-xs font-bold uppercase tracking-wider">Buscar pieza<input value={query} onChange={(event) => setQuery(event.target.value)} type="search" placeholder="Nombre o material" className="mt-2 block w-full min-w-65 border-b border-[#20231f] bg-transparent px-0 py-2 text-base font-normal normal-case tracking-normal outline-none" /></label>
          </div>

          <div className="mb-8 flex flex-col justify-between gap-4 lg:flex-row lg:items-center">
            <div role="group" aria-label="Filtrar por categoría" className="flex flex-wrap gap-2">
              {categories.map((category) => <button type="button" key={category} onClick={() => setFilter(category)} aria-pressed={filter === category} className={`rounded-full border border-[#20231f] px-4 py-2 text-sm font-semibold transition ${filter === category ? "bg-[#20231f] text-white" : "hover:bg-white"}`}>{category}</button>)}
            </div>
            <div className="flex flex-wrap gap-3">
              <label className="text-xs font-bold uppercase">Precio<select value={priceFilter} onChange={(event) => setPriceFilter(event.target.value as PriceFilter)} className="ml-2 border border-[#20231f] bg-transparent px-3 py-2 text-sm font-normal normal-case"><option value="all">Todos</option><option value="under1000">Menos de $1,000</option><option value="over1000">$1,000 o más</option></select></label>
              <label className="text-xs font-bold uppercase">Orden<select value={sortOrder} onChange={(event) => setSortOrder(event.target.value as SortOrder)} className="ml-2 border border-[#20231f] bg-transparent px-3 py-2 text-sm font-normal normal-case"><option value="featured">Destacados</option><option value="priceAsc">Precio menor</option><option value="priceDesc">Precio mayor</option></select></label>
            </div>
          </div>

          {visibleProducts.length ? (
            <div className="grid gap-x-5 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
              {visibleProducts.map((product) => (
                <article key={product.id} className="group">
                  <div className="product-stage relative grid aspect-[4/3] place-items-center overflow-hidden border border-[#20231f]/20" style={{ "--stage-accent": product.accent } as CSSProperties}>
                    {product.label && <span className="absolute left-3 top-3 rounded-full bg-white px-3 py-1 text-xs font-bold">{product.label}</span>}
                    <button type="button" onClick={() => toggleFavorite(product.id)} aria-pressed={favorites.has(product.id)} aria-label={`${favorites.has(product.id) ? "Quitar" : "Añadir"} ${product.name} de favoritos`} className={`absolute right-3 top-3 grid h-10 w-10 place-items-center rounded-full border border-[#20231f] text-lg ${favorites.has(product.id) ? "bg-[#d45036] text-white" : "bg-white"}`}>{favorites.has(product.id) ? "♥" : "♡"}</button>
                    <div className={`shape-object h-38 w-30 transition duration-300 group-hover:-translate-y-2 group-hover:rotate-3 ${product.category === "Textiles" ? "rounded-sm" : product.category === "Iluminación" ? "rounded-t-full" : "rounded-[45%_45%_30%_30%]"}`} style={{ "--object-color": product.color } as CSSProperties}></div>
                    <button type="button" onClick={() => setSelectedProduct(product)} className="absolute bottom-3 translate-y-16 bg-white px-4 py-2 text-xs font-bold uppercase tracking-wider transition group-hover:translate-y-0 focus:translate-y-0">Vista rápida</button>
                  </div>
                  <div className="border-b border-[#b7b3a9] py-4">
                    <p className="text-xs font-bold uppercase tracking-wider text-[#77766e]">{product.category} · {product.material}</p>
                    <div className="mt-1 flex items-start justify-between gap-4"><div><h3 className="font-editorial text-2xl">{product.name}</h3><p className="mt-1 font-mono text-sm">{currency.format(product.price)}</p></div><button type="button" onClick={() => addToCart(product)} className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-[#20231f] text-xl transition hover:bg-[#d45036] hover:text-white" aria-label={`Añadir ${product.name} a la bolsa`}>+</button></div>
                    <p className="mt-3 text-xs text-[#6d6b64]">{product.stock} piezas disponibles · Demostración</p>
                  </div>
                </article>
              ))}
            </div>
          ) : <p role="status" className="border border-dashed border-[#77766e] p-8 text-center">No hay piezas que coincidan con los filtros.</p>}
        </section>

        <section id="historia" className="border-y border-[#20231f] bg-[#20231f] text-[#f6f2e9]">
          <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:py-24"><div><p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-[#e67a63]">El estudio ficticio</p><h2 className="font-editorial text-4xl leading-tight sm:text-6xl">Diseño que deja espacio para la vida.</h2></div><div id="materiales" className="grid content-center gap-6 text-[#d7d2c6]"><p className="text-lg leading-relaxed">Forma Estudio representa una marca demostrativa enfocada en objetos simples, series pequeñas y proveedores locales.</p><div className="grid grid-cols-3 gap-3 border-t border-[#66685f] pt-6 text-center"><div><strong className="block text-2xl text-white">06</strong><span className="text-xs">piezas demo</span></div><div><strong className="block text-2xl text-white">03</strong><span className="text-xs">categorías</span></div><div><strong className="block text-2xl text-white">0</strong><span className="text-xs">pagos reales</span></div></div></div></div>
        </section>
      </main>

      {selectedProduct && (
        <div className="fixed inset-0 z-50 grid place-items-center bg-[#20231f]/70 p-4" role="presentation" onMouseDown={(event) => { if (event.target === event.currentTarget) setSelectedProduct(null); }}>
          <section role="dialog" aria-modal="true" aria-labelledby="quick-title" className="grid w-full max-w-4xl overflow-hidden border border-[#20231f] bg-[#f6f2e9] shadow-2xl md:grid-cols-2">
            <div className="product-stage grid min-h-80 place-items-center" style={{ "--stage-accent": selectedProduct.accent } as CSSProperties}><div className="shape-object h-52 w-42 rounded-[45%_45%_30%_30%]" style={{ "--object-color": selectedProduct.color } as CSSProperties}></div></div>
            <div className="relative p-7 sm:p-10"><button type="button" onClick={() => setSelectedProduct(null)} aria-label="Cerrar vista rápida" className="absolute right-4 top-4 text-2xl">×</button><p className="text-xs font-bold uppercase tracking-wider text-[#d45036]">{selectedProduct.category} · {selectedProduct.material}</p><h2 id="quick-title" className="font-editorial mt-3 text-4xl">{selectedProduct.name}</h2><p className="mt-4 leading-relaxed text-[#55594f]">{selectedProduct.description}</p><dl className="mt-6 grid grid-cols-2 gap-4 border-y border-[#b7b3a9] py-4 text-sm"><div><dt className="text-xs font-bold uppercase">Dimensiones</dt><dd className="mt-1">{selectedProduct.dimensions}</dd></div><div><dt className="text-xs font-bold uppercase">Disponibilidad</dt><dd className="mt-1">{selectedProduct.stock} piezas demo</dd></div></dl><div className="mt-7 flex items-center justify-between gap-4"><strong className="font-mono text-lg">{currency.format(selectedProduct.price)}</strong><button type="button" onClick={() => { addToCart(selectedProduct); setSelectedProduct(null); setCartOpen(true); }} className="bg-[#20231f] px-5 py-3 text-sm font-bold text-white hover:bg-[#d45036]">Añadir a la bolsa</button></div></div>
          </section>
        </div>
      )}

      {cartOpen && (
        <div className="fixed inset-0 z-60 bg-[#20231f]/55" role="presentation" onMouseDown={(event) => { if (event.target === event.currentTarget) setCartOpen(false); }}>
          <aside role="dialog" aria-modal="true" aria-labelledby="cart-title" className="ml-auto flex h-full w-full max-w-md flex-col bg-[#f6f2e9] p-6 shadow-2xl">
            <div className="flex items-center justify-between border-b border-[#20231f] pb-4"><h2 id="cart-title" className="font-editorial text-3xl">Tu bolsa</h2><button type="button" onClick={() => setCartOpen(false)} aria-label="Cerrar bolsa" className="text-2xl">×</button></div>
            {cartItems.length ? <><ul className="flex-1 overflow-y-auto py-3">{cartItems.map(({ product, quantity }) => <li key={product.id} className="grid grid-cols-[72px_1fr] gap-4 border-b border-[#cbc6ba] py-4"><div className="product-stage grid h-18 place-items-center" style={{ "--stage-accent": product.accent } as CSSProperties}><div className="shape-object h-10 w-8 rounded-t-full" style={{ "--object-color": product.color } as CSSProperties}></div></div><div><div className="flex justify-between gap-3"><strong>{product.name}</strong><span className="font-mono text-sm">{currency.format(product.price * quantity)}</span></div><p className="text-xs text-[#77766e]">{product.material}</p><div className="mt-3 flex items-center gap-3"><button type="button" onClick={() => updateQuantity(product.id, -1)} className="grid h-7 w-7 place-items-center border border-[#20231f]" aria-label={`Quitar una unidad de ${product.name}`}>−</button><span aria-label={`${quantity} unidades`}>{quantity}</span><button type="button" onClick={() => updateQuantity(product.id, 1)} className="grid h-7 w-7 place-items-center border border-[#20231f]" aria-label={`Añadir una unidad de ${product.name}`}>+</button></div></div></li>)}</ul><div className="border-t border-[#20231f] pt-5"><div className="flex justify-between text-lg font-bold"><span>Subtotal demostrativo</span><span>{currency.format(subtotal)}</span></div><p className="mt-2 text-xs text-[#77766e]">No se cobran envíos ni se procesan pagos en esta plantilla.</p><button type="button" onClick={() => setNotice("El proceso de pago está desactivado en esta demostración.")} className="mt-5 w-full bg-[#d45036] px-5 py-3 font-bold text-white">Continuar demostración</button></div></> : <div className="grid flex-1 place-items-center text-center"><div><p className="font-editorial text-2xl">Tu bolsa está vacía.</p><button type="button" onClick={() => setCartOpen(false)} className="mt-4 border-b-2 border-[#d45036] pb-1 text-sm font-bold">Volver al catálogo</button></div></div>}
          </aside>
        </div>
      )}

      <footer className="px-4 py-8 text-center text-xs text-[#6d6b64]">© 2026 Forma Estudio · Plantilla demostrativa de e-commerce para Web Templates Library.</footer>
    </div>
  );
}
