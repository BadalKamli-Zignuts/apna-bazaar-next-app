export default function ProductCard({ product }) {
  return (
    <>
      <div className="border w-[80%] h-full md:w-[50%] md:h-[25%] lg:w-[30%]">
        <div className="flex justify-center p-5">
          <img src={product.image} className="md:w-32" alt="" />
        </div>
        <div className="border-b px-5 py-2 space-y-2">
          <div>${product.price}</div>
          <div className="font-bold">{product.title}</div>
          <div className="text-gray-600">
            {product.description.substring(0, 30)}...
          </div>
        </div>
        <div className="flex justify-around items-center px-5 py-2">
          <button className="bg-blue-600 px-3 rounded-md text-white">
            View
          </button>
          <button className="bg-red-300 px-3 rounded-md">Like</button>
        </div>
      </div>
    </>
  );
}
