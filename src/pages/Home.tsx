import { FaArrowRight } from "react-icons/fa";
import { BiScan } from "react-icons/bi";
import { LuBrainCircuit } from "react-icons/lu";
import { FaCheckCircle } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      
      <div className="absolute inset-0 bg-background">
        <div className="absolute inset-0" />
      </div>

      {/* Animated background elements ra pilla bacha */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-10 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-32 sm:pt-24">
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="md:text-6xl lg:text-7xl font-bold leading-tight">
              <span className="text-5xl dark:text-white bg-gradient-to-r px-2 py-1 font-bold from-blue-500 to-blue-600 bg-clip-text text-transparent">
                AI-Powered Colon Polyp Detection & Segmentation
              </span>
              <br />
            </h1>
            <div className="mt-6">
              <p className="text-md md:text-2xl dark:text-gray-300 text-gray-500 max-w-4xl mx-auto">
                  Advancing colorectal care with AI, our system analyzes colonoscopy frames to provide rapid, reliable polyp detection and high-quality segmentation.
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/services">
              <Button size="lg" className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-700 hover:to-blue-700 text-white px-8 py-4 text-lg">
                  Start Now
                <FaArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>

        </div>
      </div>

    </div>
  );
};

export default Home;