
import { useNavigate } from "react-router-dom";
import { UserSignInContext } from "../../Context/UserSignInContext";
import { useContext } from "react";

export default function SignIn() {
  const { checkUser } = useContext(UserSignInContext);
  const navigate = useNavigate()
  const OnSubmit = (e) => {
    e.preventDefault();
    checkUser();
    navigate("/");
  };
  return (
    <div className="min-h-screen flex items-center justify-center   transition-colors">
      <div className="w-full max-w-md bg-white dark:bg-gray-800 rounded-lg shadow-[0_0_15px_rgba(0,0,0,0.1)] p-8">
        <h2 className="text-2xl font-semibold text-secondary dark:text-primary mb-6 text-center">Welcome back</h2>

        <form className="space-y-4" aria-label="login form" onSubmit={OnSubmit}>
          <div>
            <label htmlFor="email" className="block text-sm text-secondary dark:text-primary mb-1">Email</label>
            <input
              id="email"
              type="email"
              name="email"
              required
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md bg-transparent text-secondary dark:text-primary focus:outline-none focus:ring-2 focus:ring-secondary dark:focus:ring-primary"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm text-secondary dark:text-primary mb-1">Password</label>
            <input
              id="password"
              type="password"
              name="password"
              required
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md bg-transparent text-secondary dark:text-primary focus:outline-none focus:ring-2 focus:ring-secondary dark:focus:ring-primary"
            />
          </div>

          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-2 text-secondary dark:text-primary">
              <input
                type="checkbox"
                className="h-4 w-4 accent-secondary dark:accent-white"
              />Remember me
            </label>
            <a href="#" className="text-sm text-secondary dark:text-primary hover:underline">Forgot?</a>
          </div>

          <button type="submit" className=" cursor-pointer w-full py-2 rounded-md bg-secondary dark:bg-primary text-white dark:text-gray-900 font-medium hover:opacity-90 transition">Sign in</button>
        </form>

        <p className="mt-4 text-center text-sm text-secondary dark:text-primary">Don't have an account? <a href="/signup" className="text-secondary dark:text-primary font-medium underline">Sign up</a></p>
      </div>
    </div>
  );
}
