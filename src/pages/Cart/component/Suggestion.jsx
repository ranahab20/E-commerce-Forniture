import ProductCard from "../../../components/ProductCard/ProductCard";

function Suggestion({ products = [] }) {
  return (
    <section className="mt-20">
      <h2 className="mb-8 text-2xl font-bold">You May Like</h2>

      <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}

export default Suggestion;
