import { Link } from 'react-router-dom'

export default function NotFound() {


  return (
    <div className="min-h-[calc(100vh-200px)] flex items-center justify-center px-4">
      <div className="text-center">
        <div className="mb-8">
          <h1 className="text-8xl md:text-9xl font-bold text-secondary dark:text-primary mb-4">404</h1>
          <p className="text-3xl md:text-4xl font-semibold text-secondary dark:text-primary mb-4">
            Page Not Found
          </p>
          <p className="text-lg text-gray-500 dark:text-primary/60 mb-8 max-w-md mx-auto">
            Sorry, the page you're looking for doesn't exist. It might have been removed, or the URL might be incorrect.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to={'/'}
            className="px-8 py-3 bg-secondary dark:bg-primary text-white dark:text-black rounded hover:bg-opacity-90 transition duration-300 font-medium"
          >
            Back to Home
          </Link>
       
        </div>
      </div>
    </div>
  )
}
