
export default function HomeSubscribe() {
  return (
    <div className="flex justify-center flex-col items-center mt-10">
        <h1 className="text-2xl font-medium text-secondary dark:text-primary">Subscribe now & get 20% off</h1>
        <p className="text-secondary/60 dark:text-primary-100 mt-3">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
        <form className="mt-5 flex w-full max-w-2xl">
            <input type="email" placeholder="Enter your email" className="p-2 rounded-none border border-gray-300 focus:outline-none focus:ring-0 
             w-full placeholder:text-gray-500 bg-transparent" />
            <button className=" text-white p-2  hover:bg-blue-600 transition-colors duration-300 uppercase px-8 bg-secondary dark:bg-primary/20">Subscribe</button>
        </form>
    </div>
  )
}
