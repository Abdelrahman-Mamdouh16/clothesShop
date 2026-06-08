import Hero from "@/components/Hero/Hero"
import LastesCollection from "@/components/LastesCollection/LastesCollection"
import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../../Context/shopContext";
function Home() {
  const { products } = useContext(ShopContext);
  console.log(products);
  const [latestCollection, setLatestCollection] = useState([]);
  const [bestSellers, setBestSellers] = useState([]);
  console.log(bestSellers);
  
  useEffect(() => {

    setLatestCollection(products.slice(0, 10));
    const bestSellersProducts = products.filter((item) => item.bestseller=== true);
    setBestSellers(bestSellersProducts.slice(0, 5));

  }, [])

  return (
    <div className="mt-5">
      <Hero />
      <LastesCollection span={"LATEST"} Title={"SELLERS"} products={latestCollection} />
      <LastesCollection span={"BEST"} Title={"Collection"} products={bestSellers} />
    </div>
  )
}

export default Home
