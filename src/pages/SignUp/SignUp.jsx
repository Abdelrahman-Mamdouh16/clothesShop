import { useState } from "react";

export default function SignUp() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    agreeTerms: false,
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = "First name is required";
    }
    if (!formData.lastName.trim()) {
      newErrors.lastName = "Last name is required";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }
    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }
    if (!formData.agreeTerms) {
      newErrors.agreeTerms = "You must agree to the terms";
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm();

    if (Object.keys(newErrors).length === 0) {
      console.log("Form submitted:", formData);
      alert("Account created successfully!");
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
        agreeTerms: false,
      });
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center py-8 transition-colors">
      <div className="w-full max-w-md bg-white dark:bg-gray-800 rounded-lg shadow-[0_0_15px_rgba(0,0,0,0.1)] p-8">
        <h2 className="text-2xl font-semibold text-secondary dark:text-primary mb-2 text-center">
          Create Account
        </h2>
        <p className="text-center text-sm text-secondary dark:text-primary mb-6 opacity-75">
          Join us and start shopping
        </p>

        <form className="space-y-4" onSubmit={handleSubmit} aria-label="signup form">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="firstName" className="block text-sm text-secondary dark:text-primary mb-1">
                First Name
              </label>
              <input
                id="firstName"
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className={`w-full px-4 py-2 border rounded-md bg-transparent text-secondary dark:text-primary focus:outline-none focus:ring-2 transition ${
                  errors.firstName
                    ? "border-red-500 dark:border-red-500 focus:ring-red-500"
                    : "border-gray-300 dark:border-gray-700 focus:ring-secondary dark:focus:ring-primary"
                }`}
              />
              {errors.firstName && (
                <p className="text-red-500 text-xs mt-1">{errors.firstName}</p>
              )}
            </div>

            <div>
              <label htmlFor="lastName" className="block text-sm text-secondary dark:text-primary mb-1">
                Last Name
              </label>
              <input
                id="lastName"
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className={`w-full px-4 py-2 border rounded-md bg-transparent text-secondary dark:text-primary focus:outline-none focus:ring-2 transition ${
                  errors.lastName
                    ? "border-red-500 dark:border-red-500 focus:ring-red-500"
                    : "border-gray-300 dark:border-gray-700 focus:ring-secondary dark:focus:ring-primary"
                }`}
              />
              {errors.lastName && (
                <p className="text-red-500 text-xs mt-1">{errors.lastName}</p>
              )}
            </div>
          </div>

          <div>
            <label htmlFor="email" className="block text-sm text-secondary dark:text-primary mb-1">
              Email
            </label>
            <input
              id="email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full px-4 py-2 border rounded-md bg-transparent text-secondary dark:text-primary focus:outline-none focus:ring-2 transition ${
                errors.email
                  ? "border-red-500 dark:border-red-500 focus:ring-red-500"
                  : "border-gray-300 dark:border-gray-700 focus:ring-secondary dark:focus:ring-primary"
              }`}
            />
            {errors.email && (
              <p className="text-red-500 text-xs mt-1">{errors.email}</p>
            )}
          </div>

          <div>
            <label htmlFor="password" className="block text-sm text-secondary dark:text-primary mb-1">
              Password
            </label>
            <input
              id="password"
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className={`w-full px-4 py-2 border rounded-md bg-transparent text-secondary dark:text-primary focus:outline-none focus:ring-2 transition ${
                errors.password
                  ? "border-red-500 dark:border-red-500 focus:ring-red-500"
                  : "border-gray-300 dark:border-gray-700 focus:ring-secondary dark:focus:ring-primary"
              }`}
            />
            {errors.password && (
              <p className="text-red-500 text-xs mt-1">{errors.password}</p>
            )}
          </div>

          <div>
            <label htmlFor="confirmPassword" className="block text-sm text-secondary dark:text-primary mb-1">
              Confirm Password
            </label>
            <input
              id="confirmPassword"
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              className={`w-full px-4 py-2 border rounded-md bg-transparent text-secondary dark:text-primary focus:outline-none focus:ring-2 transition ${
                errors.confirmPassword
                  ? "border-red-500 dark:border-red-500 focus:ring-red-500"
                  : "border-gray-300 dark:border-gray-700 focus:ring-secondary dark:focus:ring-primary"
              }`}
            />
            {errors.confirmPassword && (
              <p className="text-red-500 text-xs mt-1">{errors.confirmPassword}</p>
            )}
          </div>

          <div className="flex items-start gap-2">
            <input
              id="agreeTerms"
              type="checkbox"
              name="agreeTerms"
              checked={formData.agreeTerms}
              onChange={handleChange}
              className={`h-4 w-4 mt-1 accent-secondary dark:accent-primary cursor-pointer`}
            />
            <label htmlFor="agreeTerms" className="text-sm text-secondary dark:text-primary cursor-pointer">
              I agree to the Terms & Conditions and Privacy Policy
            </label>
          </div>
          {errors.agreeTerms && (
            <p className="text-red-500 text-xs">{errors.agreeTerms}</p>
          )}

          <button
            type="submit"
            className="w-full py-2 rounded-md bg-secondary dark:bg-primary text-white dark:text-gray-900 font-medium hover:opacity-90 transition mt-6"
          >
            Sign up
          </button>
        </form>

        <p className="mt-4 text-center text-sm text-secondary dark:text-primary">
          Already have an account?{" "}
          <a href="/Signin" className="text-secondary dark:text-primary font-medium underline hover:opacity-75">
            Sign in
          </a>
        </p>
      </div>
    </div>
  );
}
