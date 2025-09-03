import { useEffect, useState } from "react";
import CardProduct from "../components/products/CardProduct";
import Header from "../components/Header"

function HomePage() {
  const [products, setProducts] = useState([]);

  async function getProducts() {
    const response = await fetch("https://fakestoreapi.com/products", {
      method: "get",
    }).then((data) => data.json());

    setProducts(response);
  }

  useEffect(() => {
    getProducts();
  });

  return (
    <>
      <Header/>
      <main className="p-4">
        <button className="bg-blue-300 text-blue-950 cursor-pointer p-2 rounded-sm font-semibold mb-4 shadow-sm shadow-blue-800 active:shadow-inner">Ordenar por preço</button>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 justify-center">
          { products.map(product => (
            <CardProduct
              key={product.id}
              category={product.category}
              image={product.image}
              price={product.price}
              title={product.title}
            />
          ))}
        </div>
      </main>

    </>
  )
}

export default HomePage;
