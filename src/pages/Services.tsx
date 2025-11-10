import { BsUpload } from "react-icons/bs";
import { CiChat1 } from "react-icons/ci";
import { RiCpuLine } from "react-icons/ri";
import { BiGitMerge } from "react-icons/bi";
import { FiRefreshCcw } from "react-icons/fi";
import { MdInsights } from "react-icons/md";
import Test from "../asserts/SlidingImages/Test.png";
import Test1 from "../asserts/SlidingImages/Test1.png";
import Test2 from "../asserts/SlidingImages/Test2.png";
import Test4 from "../asserts/SlidingImages/Test4.png";
import Test5 from "../asserts/SlidingImages/Test5.png";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";


const Services = () => {
  // Sliding images carousel
  const slidingImages = [Test, Test1, Test2, Test4, Test5];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % slidingImages.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, [slidingImages.length]);

  const services = [
    {
      icon: BsUpload,
      title: "Upload & Analyze",
      description: "Upload your dental scans and get comprehensive AI-powered analysis and diagnosis.",
      features: ["High-accuracy scanning", "Multiple format support", "Quick results"],
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: CiChat1,
      title: "AI Chat Consultation",
      description: "Discuss your dental concerns with our AI assistant for personalized advice and guidance.",
      features: ["24/7 availability", "Personalized responses", "Treatment suggestions", "Follow-up care"],
      gradient: "from-green-500 to-teal-500"
    }
  ];

  return (
    <div className="min-h-screen pt-16 bg-background">
      
      <div className="min-h-screen pt-28 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-white to-white dark:from-black dark:to-black">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden">
                {/* Sliding Images Carousel */}
                <div className="relative w-full h-[500px] hidden md:block">
                  {slidingImages.map((image, index) => (
                    <img
                      key={index}
                      src={image}
                      alt={`Liver Scan ${index + 1}`}
                      className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ${
                        index === currentImageIndex ? 'opacity-100' : 'opacity-0'
                      }`}
                    />
                  ))}
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <h3 className="text-xl font-bold mb-2">Smart Liver Diagnostics</h3>
                  <p className="text-gray-200">Harnessing transformer-based AI models to achieve real-time, high-accuracy liver segmentation from CT scans.</p>
                </div>
                
                {/* Dots Indicator */}
                <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
                  {slidingImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        index === currentImageIndex 
                          ? 'bg-white w-6' 
                          : 'bg-white/50 hover:bg-white/75'
                      }`}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-4xl md:text-4xl font-bold mb-5">
                Driven by <span className="text-blue-600 ">Colonoscopy Imaging</span>
              </h2>
              <div className="grid grid-cols-2 gap-8 mt-12">
                <div className="text-center">
                  <RiCpuLine className="h-16 w-16 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-lg font-bold mb-3">PVT-Based Encoding</h3>
                  <p className="text-base text-muted-foreground">Pretrained Pyramid Vision Transformer captures multi-scale mucosal and polyp features.</p>
                </div>
                <div className="text-center">
                  <BiGitMerge className="h-16 w-16 text-purple-600 mx-auto mb-4" />
                  <h3 className="text-lg font-bold mb-3">Refined Segmentation Decoding</h3>
                  <p className="text-base text-muted-foreground">Hierarchical fusion improves the precision of polyp boundaries, even in challenging conditions.</p>
                </div>
                <div className="text-center">
                  <FiRefreshCcw className="h-16 w-16 text-green-600 mx-auto mb-4" />
                  <h3 className="text-lg font-bold mb-3">Residual Learning</h3>
                  <p className="text-base text-muted-foreground">Deep residual blocks enhance recognition of subtle, flat, and low-contrast polyps.</p>
                </div>
                <div className="text-center">
                  <MdInsights className="h-16 w-16 text-orange-600 mx-auto mb-4" />
                  <h3 className="text-lg font-bold mb-3">Robust Clinical Performance</h3>
                  <p className="text-base text-muted-foreground">Benchmark-tested on diverse multi-centre colonoscopy datasets for reliable, generalizable results.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-10 justify-items-center">
            {services.map((service, index) => (
              <Card key={index} className="relative overflow-hidden group hover:shadow-2xl transition-all duration-500 border-0 bg-gradient-to-br from-white to-gray-300 dark:from-gray-800 dark:to-gray-900 w-full max-w-md">
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                <CardHeader className="relative py-8 px-8">
                  <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="h-10 w-10 text-white" />
                  </div>
                  <CardTitle className="text-3xl font-bold mb-4">{service.title}</CardTitle>
                  <CardDescription className="text-lg">{service.description}</CardDescription>
                </CardHeader>
                <CardContent className="relative py-6 px-8">
                  <ul className="space-y-4 mb-8">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-3">
                        <div className={`w-2.5 h-2.5 rounded-full bg-gradient-to-r ${service.gradient}`} />
                        <span className="text-base text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className={`w-full bg-gradient-to-r ${service.gradient} hover:opacity-90 text-white border-0 py-6 text-lg font-semibold`}>
                    Get Started
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;