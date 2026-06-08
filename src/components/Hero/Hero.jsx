import{ assets} from "../../assets/assets.js";

function Hero() {
    return (
        <div className="lg:flex items-center justify-between border mx-2 sm:mx-0">

            {/* Left Content */}
            <div className="lg:w-1/2 ps-10 flex justify-center flex-col items-start mt-5 lg:mt-0">
                <div className="mx-auto"> <div className="flex items-center gap-3 mb-4">
                    <span className="w-10 h-0.5 bg-gray-400 dark:bg-gray-600"></span>
                    <p className="text-sm tracking-wide">OUR BESTSELLERS</p>
                </div>

                    <h1 className="text-4xl prata-regular">
                        Welcome to Veloura
                    </h1>

                    <div className="flex items-center gap-3">
                        <p className="text-sm tracking-wide">Shop Now</p>
                        <span className="w-10 h-px bg-gray-400 dark:bg-gray-600"></span>
                    </div></div>

            </div>

            {/* Right Image */}
            <div className="lg:w-1/2 flex justify-end h-full">
                <img
                    src={assets.hero_img}
                    alt="Hero"
                    className="w-full h-full object-fit "
                />
            </div>

        </div>
    );
}

export default Hero;