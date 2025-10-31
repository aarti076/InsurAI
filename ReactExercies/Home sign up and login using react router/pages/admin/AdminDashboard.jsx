import { useEffect, useState } from "react";
import useAuth from "../../contexts/AuthUse.jsx";
import myAxios from "../../api/myAxios.js";
import Navbar from "../../components/Navbar.jsx";

const AdminDashboard = () => {
  const { user } = useAuth; // Access current logged-in user
  const [summary, setSummary] = useState({
    totalUsers: 0,
    totalAgents: 0,
    totalAppointments: 0,
    totalPlans: 0,
  });

  // ✅ Redirect non-admin users (optional safeguard)
  useEffect(() => {
    if (user && user.role !== "ADMIN") {
      alert("Access denied! Admins only.");
      window.location.href = "/"; // redirect to home or unauthorized page
    }
  }, [user]);

  // 🔹 Fetch dashboard summary from backend
  useEffect(() => {
    const fetchSummary = async () => {
      try {
        const res = await myAxios.get("/api/admin/dashboard/summary");
        setSummary(res.data);
      } catch (error) {
        console.error("Error fetching dashboard summary:", error);
      }
    };

    if (user?.token) fetchSummary();
  }, [user]);

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* ===== SIDEBAR ===== */}
      <aside className="w-64 bg-white shadow-md p-5 hidden md:block">
        <h2 className="text-2xl font-bold text-blue-600 mb-6">Admin Panel</h2>
        <nav className="space-y-3">
          <a href="#overview" className="block text-gray-700 hover:text-blue-600">
            Dashboard Overview
          </a>
          <a href="#users" className="block text-gray-700 hover:text-blue-600">
            Manage Users
          </a>
          <a href="#agents" className="block text-gray-700 hover:text-blue-600">
            Manage Agents
          </a>
          <a href="#appointments" className="block text-gray-700 hover:text-blue-600">
            Appointments
          </a>
          <a href="#plans" className="block text-gray-700 hover:text-blue-600">
            Plans
          </a>
        </nav>
      </aside>

      {/* ===== MAIN CONTENT ===== */}
      <main className="flex-1 ">
       
         
           <Navbar />
        
            <div className="p-4">
           

        {/* ===== OVERVIEW SECTION ===== */}
        <section id="overview" className="mb-2">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Dashboard Overview
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-5 rounded-xl shadow">
              <h3 className="text-gray-500 text-sm">Total Users</h3>
              <p className="text-2xl font-bold text-blue-600">{summary.totalUsers}</p>
            </div>
            <div className="bg-white p-5 rounded-xl shadow">
              <h3 className="text-gray-500 text-sm">Total Agents</h3>
              <p className="text-2xl font-bold text-green-600">{summary.totalAgents}</p>
            </div>
            <div className="bg-white p-5 rounded-xl shadow">
              <h3 className="text-gray-500 text-sm">Appointments</h3>
              <p className="text-2xl font-bold text-yellow-600">{summary.totalAppointments}</p>
            </div>
            <div className="bg-white p-5 rounded-xl shadow">
              <h3 className="text-gray-500 text-sm">Plans</h3>
              <p className="text-2xl font-bold text-purple-600">{summary.totalPlans}</p>
            </div>
          </div>
        </section>

        {/* ===== PLACEHOLDER SECTIONS ===== */}
        <section id="users" className="mb-4">
          <h2 className="text-lg font-semibold text-gray-800 mb-3">User Management</h2>
          <div className="bg-white p-5 rounded-xl shadow text-gray-500">
            User list or table will go here.
          </div>
        </section>

        <section id="agents" className="mb-4">
          <h2 className="text-lg font-semibold text-gray-800 mb-3">Agent Management</h2>
          <div className="bg-white p-5 rounded-xl shadow text-gray-500">
            Agent availability section here.
          </div>
        </section>

        <section id="appointments" className="mb-4">
          <h2 className="text-lg font-semibold text-gray-800 mb-3">Appointments</h2>
          <div className="bg-white p-5 rounded-xl shadow text-gray-500">
            Appointment data here.
          </div>
        </section>

        <section id="plans">
          <h2 className="text-lg font-semibold text-gray-800 mb-3">Plan Management</h2>
          <div className="bg-white p-5 rounded-xl shadow text-gray-500">
            Plan data or forms here.
          </div>
        </section>
            </div>
        
      </main>
    </div>
  );
};

export default AdminDashboard;
