import { Outlet, Link, useLocation, NavLink } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import useAuth from "../contexts/useAuth";

export default function DashboardLayout() {
  const { user ,logout } = useAuth();
  const location = useLocation();

  const navLinks = [
    { lable: "Dashboard Overview", to: "/dashboard/dashboard-overview" },
    ...(user?.role === "ADMIN"
      ? [
          { lable: "Manage Users", to: "/dashboard/manage-users" },
          { lable: "Manage Policies", to: "/dashboard/manage-policies" },
          { lable: "Manage Applications", to: "/dashboard/manage-applications" },
          { lable: "Transactions", to: "/dashboard/transactions" },
          { lable: "Manage Agents", to: "/dashboard/manage-agents" },]
          : user?.role === "AGENT"
          ? [
              { lable: "Assigned Customers", to: "/dashboard/assigned-customers" }, 
              { lable: "Appointments", to: "/dashboard/appointments" },]
          : [ { lable: "My Policies", to: "/dashboard/my-policies" }, 
              { lable: "My Applications", to: "/dashboard/my-applications" },
              { lable: "Payment Status", to: "/dashboard/payment-status" }, 
              { lable: "Request Claim", to: "/dashboard/request-claim" }, ]
    )
    ,
    { lable: "Profile", to: "/dashboard/profile" },
  ];

  return (
    <div className=" flex flex-row min-h-screen ">
      {/*aside for side bar*/}
      <aside className="menu min-h-screen bg-white text-gray-800 border-r border-gray-200 w-72 h-full p-4 flex flex-col justify-between">
       <div>
         <Link to="/" className="text-center p-2">
          <h1 className="text-4xl font-extrabold font-mono text-my-mustard">
            InsureAI
          </h1>
        </Link>
           <h1 className="text-lg font-semibold mr-4 text-neutral-800">Welcome, {user?.role || "Guest"}</h1>
        {/*user icon and name email section*/}
        <div className="flex flex-row items-center  ">
          {/*user image*/}
       
          <div className=" gap-3 p-3">
            <img
              src="https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y"
              alt="User Avatar"
              className="w-12 h-12 rounded-full object-cover bg-gray-300"
            />
          </div>
          <div>
            <p className="font-medium truncate text-gray-800 capitalize">
              {user?.name || "Guest User"}
            </p>
            <p className="text-sm text-gray-500 truncate">
              {user?.email || "No email"}
            </p>
          </div>
        </div>

        <nav className="mt-6">
          <ul className="space-y-2">
            {
              navLinks.map(
                ({ to, lable }) => (
                  <li key= {to}>
                    <NavLink
                      to={to}
                        className={({isActive}) => {
                      return `flex items-center gap-1 px-4 py-3 rounded-lg transition-colors duration-200 ${isActive
                          ? 'bg-yellow-50 text-my-mustard font-medium border-l-4 border-my-mustard'
                          : 'hover:bg-gray-100 text-gray-700'
                        }`;
                    }}> {lable}</NavLink>
                  </li>
                )
              )
            }
          </ul>
        </nav>
       </div>
        <button onClick={logout} className=" mt-4 w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-600">
          Logout
        </button>
      </aside>
      {/*this div will have header and main*/}
      <div className="flex flex-col bg-gray-200  min-h-screen flex-1">
        {/*this is the header*/}
        <header className="flex justify-between items-center bg-white text-gray-700 p-4 shadow-sm border-b border-gray-200 sticky top-0 z-10">
          <div>
            <h1 className="text-xl font-semibold text-gray-800 capitalize">
              Dashboard
            </h1>
            <h2 className="text-sm text-gray-500">
              {location.pathname.replaceAll("/", " | ")}
            </h2>
          </div>
          <Link
            to="/"
            className="bg-my-light-mustard text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-my-mustard"
          >
            <FaHome /> Home
          </Link>
        </header>
        {/*this is the main content area*/}
        <main className="flex-1 p-6 bg-white">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
