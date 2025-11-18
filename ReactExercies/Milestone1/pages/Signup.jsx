import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Navbar.jsx" // ✅ your existing header
import myAxios from "../api/myAxios.js";

export default function Signup() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "CUSTOMER", // default role
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const roles = [ "CUSTOMER", "AGENT", "ADMIN"];

  // handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
       const response = await myAxios.post("/auth/signup", formData);

      console.log("Form submitted:", formData);
      console.log("Signup response:", response);

      // simulate success
      setTimeout(() => {
        setLoading(false);
        navigate("/login");
      }, 1000);
    } catch (err) {
      console.error("Signup error:", err);
      setLoading(false);
      setError("Signup failed. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header Component */}
      <Header />

      <div className="flex flex-1 justify-center items-center px-4 py-8 bg-gray-100">
        <div className="w-full max-w-md bg-white shadow-lg rounded-2xl p-8 ">
          <h2 className="text-2xl font-semibold text-gray-800 text-center mb-6">
            Create Your Account
          </h2>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full mt-1 px-3 py-2 border rounded-lg focus:ring focus:ring-blue-300 focus:outline-none"
                placeholder="Enter your name"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full mt-1 px-3 py-2 border rounded-lg focus:ring focus:ring-blue-300 focus:outline-none"
                placeholder="you@example.com"
              />
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                minLength={6}
                className="w-full mt-1 px-3 py-2 border rounded-lg focus:ring focus:ring-blue-300 focus:outline-none"
                placeholder="••••••••"
              />
            </div>

            {/* Role */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Select Role
              </label>
              <select
                name="role"
                value={formData.role}
                onChange={handleChange}
                className="w-full mt-1 px-3 py-2 border rounded-lg focus:ring focus:ring-blue-300 focus:outline-none"
              >
                {roles.map((r) => (
                  <option key={r} value={r}>
                    {r}
                  </option>
                ))}
              </select>
            </div>

            {/* Error */}
            {error && (
              <p className="text-red-500 text-sm text-center">{error}</p>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-my-light-mustard hover:bg-my-mustard text-white font-semibold py-2 rounded-lg transition duration-200"
            >
              {loading ? "Creating Account..." : "Sign Up"}
            </button>

            {/* Redirect to Login */}
            <p className="text-sm text-center text-gray-600 mt-4">
              Already have an account?{" "}
              <span
                onClick={() => navigate("/login")}
                className="text-blue-600 hover:underline cursor-pointer"
              >
                Log in
              </span>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
