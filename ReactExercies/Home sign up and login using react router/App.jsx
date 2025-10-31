
//import './App.css'
import { BrowserRouter , Routes ,Route } from 'react-router-dom'
import Home from './pages/Home'
import Signup from './pages/Signup'
import Login from './pages/Login'
import  AuthProvider  from './contexts/AuthProvider'
import PrivateRoute from './routes/PrivateRoute.jsx'
import RoleRoute from './routes/RoleRoute.jsx'
import AdminDashboard from './pages/admin/AdminDashboard.jsx'
import AgentDashboard from './pages/agent/AgentDashboard.jsx'
import CustomerDashboard from './pages/customer/CustomerDashboard.jsx'

function App() {

  return (
    <BrowserRouter>
     <AuthProvider>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        
          <Route element={<PrivateRoute />}>
            <Route element={<RoleRoute allowedRoles={['ADMIN']} />}>
              <Route path="/admin/dashboard" element={<AdminDashboard />} />
            </Route>
            <Route element={<RoleRoute allowedRoles={['AGENT']} />}>
              <Route path="/agent/dashboard" element={<AgentDashboard />} />
            </Route>
            <Route element={<RoleRoute allowedRoles={['CUSTOMER']} />}>
              <Route path="/customer/dashboard" element={<CustomerDashboard />} />
            </Route>
          </Route>
      </Routes>
     </AuthProvider>
    </BrowserRouter>
  )
}

export default App
