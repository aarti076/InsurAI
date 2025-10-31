import Button from "./Button";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  return (
    <nav className="flex justify-between items-center px-8 py-4 bg-gradient-to-r from-my-mixed-blue to-my-cyan shadow-md sticky top-0 z-50">
      <h1 className="text-3xl font-extrabold font-mono text-white">InsurAI</h1>
      <ul className="hidden md:flex space-x-6 text-white font-medium">
       <Link to="/"> <li className="hover:text-my-mustard cursor-pointer">Home</li></Link>
        <li><a href="#policies" className="hover:text-my-mustard">Policies</a></li>
        <li><a href="#contact" className="hover:text-my-mustard">Contact</a></li>
      </ul>
      <div className="space-x-4">
        <Button onClick={() => navigate("/signup")}>Sign Up</Button>
        <Link to="/login">
          <Button>Login</Button>
        </Link>
      </div>
    </nav>
  );
}

