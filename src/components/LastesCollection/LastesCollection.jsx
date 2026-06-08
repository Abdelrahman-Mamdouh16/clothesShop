import { Link } from "react-router-dom";


export default function LastesCollection({ span, Title ,products}) {
  
  return (
    <div className="mt-10">
      <div>
        <div className="flex items-center gap-3 justify-center">
          <p className="text-3xl tracking-wide text-gray-700"><span className="text-gray-500 ">{span}</span> {Title}</p>
          {Title && <span className="w-20 mt-2 h-[1.7px] bg-gray-700 dark:bg-gray-600"></span>}
        </div>
        <p className="text-gray-600 dark:text-gray-400 mt-4 text-center">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5 mt-10">
        {products.map((product) => (
          <Link key={product.id} to={`#`} className=" rounded-lg p-4 cursor-pointer text-xs">
            <img src={product.image[0]} alt={product.name} className="w-full h-auto object-cover mb-4 hover:scale-105 transition-transform duration-300 " />
            <h3 className="">{product.name}</h3>
            <p className="text-secondary dark:text-primary font-semibold">${product.price}</p>
          </Link>
        ))}
      </div>
    </div>

  )
}
