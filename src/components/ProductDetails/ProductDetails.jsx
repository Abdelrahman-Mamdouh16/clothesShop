import { useContext, useEffect, useState } from "react";
import { StarIcon } from "@heroicons/react/24/solid";
import { Link, useParams } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext";

export default function ProductDetails() {
    const { ProductDetails } = useParams();
    const { products } = useContext(ShopContext);
    const currentProduct = products.find((item) => item._id === ProductDetails)
    const [selectedSize, setSelectedSize] = useState("");
    const [selectedImg, setSelectedImg] = useState();

    useEffect(() => {
        setSelectedImg(currentProduct?.image[0])
    }, [ProductDetails])

    const filteredProducts = products.filter((p) => {

        const matchCategory =
            p.category === currentProduct.category;

        const matchType =
            p.subCategory === currentProduct.subCategory;

        return matchCategory && matchType;
    });


    const relatedProducts = [...filteredProducts]
        .filter((item) => item._id !== ProductDetails)
        .sort(() => Math.random() - 0.5)
        .filter((item, index, arr) =>
            index === arr.findIndex(
                (p) => p.image[0] === item.image[0]
            )
        )
        .slice(0, 5);

    return (
        currentProduct && <div className=" pt-10 mx-3 sm:mx-0">
            <div className="flex flex-col sm:flex-row gap-12">

                {/* Images */}
                <div className="flex-1 flex flex-col-reverse  sm:flex-row gap-3">

                    <div className="flex sm:flex-col  gap-3 overflow-x-auto sm:w-[19%]">
                        {currentProduct.image.map((img, index) => (
                            <img
                                key={index}
                                src={img}
                                alt=""
                                className="w-24 sm:w-full cursor-pointer"
                                onClick={() => setSelectedImg(img)}
                            />
                        ))}
                    </div>

                    <div className="sm:w-[80%]">
                        <img
                            src={selectedImg}
                            alt=""
                            className="w-full h-full"
                        />
                    </div>

                </div>


                {/* Details */}
                <div className="flex-1">

                    <h1 className="font-medium text-2xl mt-2">
                        {currentProduct.name}
                    </h1>


                    <div className="flex items-center gap-1 mt-3">

                        {[1, 2, 3, 4, 5].map((i) => (
                            <StarIcon
                                key={i}
                                className="w-4 h-4 text-yellow-500"
                            />
                        ))}

                        <p>(122)</p>

                    </div>


                    <p className="mt-5 text-3xl font-medium">
                        {currentProduct.price} $
                    </p>


                    <p className="mt-5 text-gray-500 leading-7">
                        {currentProduct.description}
                    </p>


                    {/* Sizes */}
                    <div className="flex flex-col gap-4 my-8">

                        <p className="">Select Size</p>

                        <div className="flex gap-3">

                            {currentProduct.sizes.map(size => (
                                <button
                                    key={size}
                                    onClick={() => setSelectedSize(size)}
                                    className={`border py-2 px-4 ${selectedSize === size ? "border-red-600 bg-primary/20 dark:bg-secondary/30 text-secondary dark:text-primary " : "bg-primary dark:bg-secondary"}`}>
                                    {size}
                                </button>
                            ))}
                        </div>
                    </div>

                    <button className="bg-black text-white px-8 py-3 text-sm active:bg-gray-700">
                        ADD TO CART
                    </button>


                    <hr className="mt-8 sm:w-4/5" />


                    <div className="text-sm text-secondary/60 dark:text-primary/60 mt-5 flex flex-col gap-2">

                        <p>100% Original product.</p>
                        <p>Cash on delivery is available.</p>
                        <p>Easy return and exchange policy.</p>

                    </div>

                </div>

            </div>


            {/* Description */}

            <div className="mt-20">

                <div className="flex">

                    <button className="border border-secondary/20 dark:border-primary/80 px-5 py-3 text-sm">
                        Description
                    </button>

                    <button className="border border-secondary/20 dark:border-primary/80 px-5 py-3 text-sm">
                        Reviews (122)
                    </button>

                </div>


                <div className="border border-secondary/20 dark:border-primary/80 px-6 py-6 text-sm text-gray-500 flex flex-col gap-4">

                    <p>
                        An e-commerce website is an online platform
                        that facilitates buying and selling products
                        over the internet.
                    </p>

                    <p>
                        Each product usually has its own dedicated page
                        with images, prices and details.
                    </p>

                </div>

            </div>



            {/* Related */}

            <div className="my-24">

                <h2 className="text-center text-3xl py-2">
                    RELATED PRODUCTS
                </h2>
                <div className="
          grid grid-cols-2
          sm:grid-cols-3
          md:grid-cols-4
          lg:grid-cols-5
          gap-5
        ">


                    {relatedProducts.map((item, index) => (
                        <Link
                            key={index}
                            to={`/collection/${item._id}`}
                            className="text-gray-700"
                        >

                            <div className="overflow-hidden">

                                <img
                                    src={item.image[0]}
                                    alt=""
                                    className="
                hover:scale-110
                transition
                "
                                />

                            </div>


                            <p className="pt-3 text-sm text-secondary/60 dark:text-primary/60">
                                {item.name}
                            </p>


                            <p className="text-sm font-medium text-secondary/60 dark:text-primary/60">
                                {item.price} $
                            </p>


                        </Link>
                    ))}


                </div>

            </div>


        </div>
    );
}