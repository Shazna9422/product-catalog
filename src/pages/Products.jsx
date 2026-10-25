import { useEffect, useState } from "react";
import { fetchProducts } from "../services/api";
import ProductCard from "../components/ProductCard";
import Loader from "../components/Loader";

function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [retry, setRetry] = useState(0);

  useEffect(() => {
    let cancelled = false;

    async function loadProducts() {
      setLoading(true);
      setError("");

      try {
        const data = await fetchProducts();

        if (!cancelled) {
          setProducts(data);
        }
      } catch {
        if (!cancelled) {
          setError("Failed to load products. Please try again.");
        }
      } finally {
        if (!cancelled) {
          setLoading(false);
        }
      }
    }

    loadProducts();

    return () => {
      cancelled = true;
    };
  }, [retry]);

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center gap-4 px-4 text-center">
        <h2 className="text-2xl font-bold text-red-600">
          Something went wrong!
        </h2>

        <p className="text-gray-600">{error}</p>

        <button
          onClick={() => setRetry((previous) => previous + 1)}
          className="rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700"
        >
          Try Again
        </button>
      </div>
    );
  }

  return (
    <main className="mx-auto min-h-screen max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <header className="mb-8 rounded-2xl bg-gradient-to-r from-blue-700 to-indigo-700 p-8 text-white">
        <h1 className="text-3xl font-extrabold sm:text-4xl">
          Product Catalog
        </h1>

        <p className="mt-3 text-blue-100">
          Explore products, prices, ratings and stock availability.
        </p>

        <p className="mt-4 font-semibold">
          Total Products: {products.length}
        </p>
      </header>

      {products.length === 0 ? (
        <p className="py-10 text-center text-gray-600">
          No products found.
        </p>
      ) : (
        <section className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}
        </section>
      )}
    </main>
  );
}

export default Products;