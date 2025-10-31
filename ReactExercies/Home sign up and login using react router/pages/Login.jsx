import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Navbar.jsx"
import useAuth from "../contexts/AuthUse.jsx";

export default function Login() {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      //use auth context to login
      const resp = await login(formData);
      console.log("Login submitted:", formData);
      console.log("Login response:", resp);

      if( !resp || !resp.data || !resp.data.data || !resp.data.data.user ) {
        setLoading(false);
        setError("Invalid credentials. Please try again.");
        return;
      }

      const role = resp.data.data.user.role;
      console.log("User role:", role);
      // simulate login success
      setTimeout(() => {
        setLoading(false);
        if (role === "ADMIN") {
          navigate("/admin/dashboard");
        } else if (role === "AGENT") {
          navigate("/agent/dashboard");
        } else if (role === "CUSTOMER") {
          navigate("/customer/dashboard");
        } else {
          navigate("/");
        } 
      }, 1000);
    } catch (err) {
      console.error("Login error:", err);
      setLoading(false);
      setError("Invalid credentials. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* ✅ Your Header Component */}
      <Header />

      <div className="flex flex-1 justify-center items-center px-4 py-8 bg-gray-100">
        <div className="w-full max-w-md bg-white shadow-lg rounded-2xl p-8">
          <h2 className="text-2xl font-semibold text-gray-800 text-center mb-6">
            Welcome Back
          </h2>

          <form onSubmit={handleSubmit} className="space-y-5">
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

            {/* Error message */}
            {error && (
              <p className="text-red-500 text-sm text-center">{error}</p>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-my-light-mustard hover:bg-my-mustard text-white font-semibold py-2 rounded-lg transition duration-200"
            >
              {loading ? "Signing In..." : "Login"}
            </button>

            {/* Forgot Password & Signup link */}
            <div className="text-sm text-center text-gray-600 mt-4">
              <p
                onClick={() => navigate("/forgot-password")}
                className="text-blue-600 hover:underline cursor-pointer"
              >
                Forgot your password?
              </p>

              <p className="mt-2">
                Don’t have an account?{" "}
                <span
                  onClick={() => navigate("/signup")}
                  className="text-blue-600 hover:underline cursor-pointer"
                >
                  Sign Up
                </span>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
