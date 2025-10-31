import { InsuranceImage } from "../assets/Assets";
import Button from "./Button";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="bg-gray-50 ">
      <div className="container  px-24 flex flex-col-reverse lg:flex-row items-center">
        {/* Left: Text Content */}
        <div className="flex flex-col w-1/2">
          <h1 className="text-5xl  font-bold text-[#31b8ba] gap-3 leading-relaxed">
            Protect What Matters Most 
          </h1>
           <h1 className="text-4xl  font-bold text-gray-900 mb-3 ">
            with our Insurance plans 
          </h1>
          <p className="text-gray-600 text-lg mb-4">
            Get the best coverage for your family, home, and future. 
            Trusted by thousands across the country.
          </p>
          <div className="flex space-x-4">
            <button className="px-6 py-3 border border-[#fdb23b] text-[#265668] rounded-md hover:bg-blue-50 transition">
              Learn More
            </button>
            <Link to="/signup">
            <button className="px-6 py-3  bg-my-light-mustard hover:bg-my-mustard text-white rounded-md transition">
              Get Started
            </button>
            </Link>
          </div>
        </div>

        {/* Right: Image */}
        <div className="w-1/2 flex items-center justify-center">
            <div className="w-[450rem] ">
          <img src={InsuranceImage} alt="Insurance Illustration" />
        </div>
      </div>
       </div>
    </section>
  );
}