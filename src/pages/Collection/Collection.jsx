import { useContext, useState } from "react";
import { Link } from "react-router-dom"
import { ShopContext } from "../../Context/ShopContext";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import SearchBar from "../../components/SearchBar/SearchBar";

function Collection() {
  const { products } = useContext(ShopContext);
  // console.log(products);

  const [filters, setFilters] = useState([]);
  const [typeFilters, setTypeFilters] = useState([]);
  const [searchBarOn, setSearchBarOn] = useState(false)
  const [SearchValue, setSearchValue] = useState('')


  const handleFilter = (value) => {
    setFilters((prev) =>
      prev.includes(value)
        ? prev.filter((item) => item !== value)
        : [...prev, value]
    );
  };

  const handleTypeFilter = (value) => {
    setTypeFilters((prev) =>
      prev.includes(value)
        ? prev.filter((item) => item !== value)
        : [...prev, value]
    );
  };
  const filteredProducts = products.filter((p) => {
    const matchSearch =
      !SearchValue ||
      p.name.toLowerCase().includes(SearchValue.toLowerCase());

    const matchCategory =
      filters.length === 0 ||
      filters.includes(p.category);

    const matchType =
      typeFilters.length === 0 ||
      typeFilters.includes(p.subCategory);

    return matchSearch && matchCategory && matchType;
  });

  console.log(filteredProducts);
  return (
    <>
      {searchBarOn && <SearchBar setSearchBarOn={setSearchBarOn} searchBarOn={searchBarOn} SearchValue={SearchValue} setSearchValue={setSearchValue} />}
      <div className="grid lg:grid-cols-12 gap-10 mt-10 mx-3">
        <div className="lg:col-span-3">

          {/* FILTERS */}
          <p className="text-2xl tracking-wide text-secondary dark:text-primary">
            FILTERS
          </p>

          {/* CATEGORY FILTER */}
          <div className="border border-gray-300 pl-5 py-3 mt-6">
            <p className="mb-3 text-sm font-medium">CATEGORIES</p>

            <div className="flex flex-col gap-2 text-sm font-light text-gray-700">

              {["Men", "Women", "Kids"].map((item,i) => (
                <label key={i} className="flex gap-2 items-center">
                  <input
                    type="checkbox"
                    value={item}
                    checked={filters.includes(item)}
                    onChange={(e) => handleFilter(e.target.value)}
                    className="w-4 h-4 "
                  />
                  <span className="text-secondary dark:text-primary">{item}</span>
                </label>
              ))}

            </div>
          </div>

          {/* TYPE FILTER */}
          <div className="border border-gray-300 pl-5 py-3 mt-6">
            <p className="mb-3 text-sm font-medium">TYPE</p>

            <div className="flex flex-col gap-2 text-sm font-light text-gray-700">

              {["Topwear", "Bottomwear", "Winterwear"].map((item,i) => (
                <label key={i} className="flex gap-2 items-center">
                  <input
                    type="checkbox"
                    value={item}
                    checked={typeFilters.includes(item)}
                    onChange={(e) => handleTypeFilter(e.target.value)}
                    className="w-4 h-4"
                  />
                  <span className="text-secondary dark:text-primary">{item}</span>
                </label>
              ))}

            </div>
          </div>
        </div>

        <div className="lg:col-span-9">
          <div className="flex justify-between">
            <div className="flex items-center gap-3 justify-start">
              <p className="text-2xl tracking-wide text-secondary dark:text-primary">
                <span className="text-gray-500 dark:text-primary-100">ALL </span>COLLECTIONS</p>
              <span className="w-15 h-[1.7px] bg-secondary dark:bg-primary"></span>
            </div>
            {!searchBarOn &&
              <button className="p-1 cursor-pointer focus:outline-none rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800" onClick={() => setSearchBarOn(!searchBarOn)}>
                <MagnifyingGlassIcon className="w-6 h-6 text-secondary dark:text-primary" />
              </button>}
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-5">
            {filteredProducts.map((product,i) => (
              <div key={i} className="overflow-hidden">
                <Link to={`/collection/${product._id}`} className="cursor-pointer text-xs block">

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
      </div>
    </>

  )
}

export default Collection

