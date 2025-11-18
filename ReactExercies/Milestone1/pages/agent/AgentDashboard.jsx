import useAuth from "../../contexts/AuthUse";

export default function AgentDashboard() {
    const { logout } = useAuth();

    return (
        <div className="p-4 w-screen h-screen flex flex-col items-center justify-center">
            <h1 className="text-2xl font-bold mb-4">Agent Dashboard</h1>
            <button
                onClick={logout}
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
                Logout
            </button>
        </div>
    );
}