
import { assets } from "@/assets/assets";
import { useContext } from "react";
import { ShopContext } from "../../Context/ShopContext";
import Hero from "../../components/HomeComponent/Hero/Hero";
import LastesCollection from "../../components/HomeComponent/LatestCollection/LatestCollection";
import Rolls from "../../components/HomeComponent/Rolls/Rolls";
function Home() {
  const { products } = useContext(ShopContext);




  return (
    <div className="mt-5">
      <Hero />
      <LastesCollection span={"LATEST"} Title={"SELLERS"} products={products.slice(0, 10)} />
      <LastesCollection span={"BEST"} Title={"Collection"} products={products.filter((item) => item.bestseller === true).slice(0, 5)} />
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:px-10">
        <Rolls img={assets.exchange_icon} title={"Easy Exchange Policy"} desc={"We offer hassle free exchange policy"} />
        <Rolls img={assets.quality_icon} title={"7 Days Return Policy"} desc={"We provide 7 days free return policy"} />
        <Rolls img={assets.support_img} title={"Best customer support"} desc={"we provide 24/7 customer support"} />
      </div>
      {/* <HomeSubscribe /> */}
    </div>
  )
}

export default Home
