import { assets } from '../../assets/assets.js'
import HomeSubscribe from '../../components/HomeComponent/HomeSubscribe/HomeSubscribe.jsx'

function About() {
  return (
    <div>
      <div className="flex items-center gap-3 justify-center mt-10">
        <p className="text-2xl tracking-wide text-secondary dark:text-primary   "><span className="text-gray-500 dark:text-primary-100">ABOUT
        </span> US</p>
        <span className="w-15 h-[1.7px] bg-secondary dark:bg-primary"></span>
      </div>
      <div className="grid grid-cols-12">
        <div className="col-span-4">
          <img className="w-full md:max-w-[450px]" alt="" src={assets.about_img} />
        </div>
        <div className="col-span-8 flex">
          <div className="flex flex-col justify-center gap-6  text-secondary dark:text-primary"><p>Forever was born out of a passion for innovation and a desire to revolutionize the way people shop online. Our journey began with a simple idea: to provide a platform where customers can easily discover, explore, and purchase a wide range of products from the comfort of their homes.</p><p>Since our inception, we've worked tirelessly to curate a diverse selection of high-quality products that cater to every taste and preference. From fashion and beauty to electronics and home essentials, we offer an extensive collection sourced from trusted brands and suppliers.</p>
          <b className="text-secondary dark:text-primary">Our Mission</b>
          <p>Our mission at Forever is to empower customers with choice, convenience, and confidence. We're dedicated to providing a seamless shopping experience that exceeds expectations, from browsing and ordering to delivery and beyond.</p>
          </div>

        </div>
      </div>
      <div className="inline-flex gap-2 items-center mb-3 mt-16"><p className="text-gray-500">WHY <span className="text-secondary dark:text-primary font-medium">CHOOSE US</span></p><p className="w-8 sm:w-12 h-[1px] sm:h-[2px] bg-setext-secondary dark:text-primary"></p></div>
      <div className="flex flex-col md:flex-row text-sm mb-20"><div className="border border-primary px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5"><b>Quality Assurance:</b><p className=" text-secondary dark:text-primary/60">We meticulously select and vet each product to ensure it meets our stringent quality standards.</p></div><div className="border border-primary px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5"><b>Convenience:</b><p className=" text-secondary dark:text-primary/60">With our user-friendly interface and hassle-free ordering process, shopping has never been easier.</p></div><div className="border border-primary px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5"><b>Exceptional Customer Service:</b><p className=" text-secondary dark:text-primary/60">Our team of dedicated professionals is here to assist you the way, ensuring your satisfaction is our top priority.</p></div></div>
      <HomeSubscribe />
    </div>
  )
}

export default About
