
export default function HomeSubscribe() {
  return (
    <div className="flex justify-center flex-col items-center mt-10 mx-3">
      <h1 className="text-2xl font-medium text-secondary dark:text-primary">Subscribe now & get 20% off</h1>
      <p className="text-secondary/60 dark:text-primary-100 mt-3">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
      <form autoComplete="off" onSubmit={''}
        className="mt-5 sm:flex w-full max-w-2xl overflow-hidden">
        <input type="email" placeholder="Enter your email" className="p-2 rounded-none border border-gray-300 focus:outline-none focus:ring-0 
             w-full placeholder:text-gray-500 bg-transparent" />
        <button className=" text-white p-2 block w-full sm:w-auto sm:flex cursor-pointer transition-colors duration-300 uppercase px-8 bg-secondary
         dark:bg-primary/20 " type="submit"
          autoComplete="off"
          autoCorrect="off"
          autoCapitalize="off"
          spellCheck="false"
          data-lpignore="true">Subscribe</button>
      </form>
    </div>
  )
}
