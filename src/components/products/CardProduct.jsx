function CardProduct({ title, price, category, image }) {
  return (
    <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm">
      <a href="#">
        <img
          className="rounded-t-lg h-72 w-full object-contain p-4 border-gray-300 border"
          src={image}
          alt={title}
        />
      </a>
      <div className="px-5 pb-5">
        <a href="#">
          <h5 className="text-xl font-semibold tracking-tight text-gray-900">
            {title}
          </h5>
        </a>
        <div className="flex items-center my-2.5">
          <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded-sm">
            {category}
          </span>
        </div>
        <div>
          <p className="text-3xl font-bold text-gray-900">$ {price}</p>
        </div>
        <button className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mt-4">
          Adicionar ao carrinho
        </button>
      </div>
    </div>
  );
}

export default CardProduct;
