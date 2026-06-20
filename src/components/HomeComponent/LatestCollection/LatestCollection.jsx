import { Link } from "react-router-dom";


export default function LatestCollection({ span, Title ,products}) {
  
  return (
    <div className="mt-10">
      <div>
        <div className="flex items-center gap-3 justify-center">
          <p className="text-3xl tracking-wide text-secondary dark:text-primary"><span className="text-gray-500 dark:text-primary-100">{span}</span> {Title}</p>
          {Title && <span className="w-20 mt-2 h-[1.7px] bg-secondary dark:bg-primary"></span>}
        </div>
        <p className="text-secondary dark:text-primary mt-4 text-center">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the.
        </p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 mt-5">
          {products.map((product,i) => (
            <div key={i} className="overflow-hidden">
              <Link to="#" className="cursor-pointer text-xs block">

                <div className="overflow-hidden">
                  <img
                    src={product.image[0]}
                    alt={product.name}
                    className="w-full object-cover  transition-transform  hover:scale-110 will-change-transform block overflow-y-hidden"
                  />
                </div>

                <h3 className="mt-5">{product.name}</h3>

                <p className="text-secondary dark:text-primary font-semibold">
                  ${product.price}
                </p>

              </Link>
            </div>
          ))}
        </div>
    </div>

  )
}
