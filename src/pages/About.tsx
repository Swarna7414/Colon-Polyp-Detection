import { FiGithub } from "react-icons/fi";
import { FiLinkedin } from "react-icons/fi";
import { FaXTwitter } from "react-icons/fa6";
import { GiBrain } from "react-icons/gi";
import { VscGraphLine } from "react-icons/vsc";
import { Card, CardContent } from "@/components/ui/card";
import Swarnaone from "../asserts/about/swarnaone.png"
import TechinalLead from "../asserts/about/Leadimage.png"
import harshith from "../asserts/about/Harshith.png";
import { TbTargetArrow } from "react-icons/tb";
import { IoIosSync } from "react-icons/io";
import { BsGlobe2 } from "react-icons/bs";
import { Button } from "@/components/ui/button";

const About = () => {

  const Dgithub=()=>{
    window.open("https://github.com/DebeshJha","_blank");
  }

  const Dlinkedin=()=>{
    window.open("https://www.linkedin.com/in/debesh-jha-ph-d-071462aa/","_blank");
  }

  const Dtwitter=()=>{
    window.open("https://x.com/debesh_jha","_blank")
  }
  const teamMembers = [

    {
      name: "Sai Sankar Swarna",
      role: "Back-end, API design & Orchestration",
      college:"Graduate Student",
      image:Swarnaone,
      description: "Manages backend services, API development, and model workflow.",
      social: {
        github: "https://github.com/Swarna7414",
        linkedin: "https://www.linkedin.com/in/swanra-sai-sankar-000797191/",
      }
    }
    ,
    {
      name: "Harshith Reddy Nalla",
      role: "Full Stack Developer",
      college:"Undergraduate Student",
      image: harshith,
      description: "Built responsive UIs with React & Tailwind; developed backend with Spring Boot.",
      social: {
        github: "https://github.com/HarshithReddy01",
        linkedin: "https://www.linkedin.com/in/harshith-reddy-nalla-6005012ab/",
      }
    },
  ];

  return (
    <div className="min-h-screen pt-16 bg-background">
      
      <div className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/10 via-white to-white dark:from-black dark:via-black dark:to-black">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Meet Our <span className="bg-gradient-to-r from-blue-500 to-blue-600 bg-clip-text text-transparent">Team</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Passionate innovators dedicated to integrating AI into healthcare through advanced deep learning and medical imaging technologies.
            </p>
        </div>
      </div>

      
      <div className="py-15 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-white to-white dark:from-black dark:to-black">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 py-8">
            
            <div className="lg:col-span-6">
              <Card className="flex flex-col justify-between group hover:shadow-2xl transition-all duration-500 border-0 bg-card/80 backdrop-blur-sm h-full">
                <CardContent className="p-0">
                  <div className="relative overflow-hidden rounded-md">
                    <img
                      src={TechinalLead}
                      alt={"DebashJha"}
                      className="w-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Button size="icon" variant="secondary" className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30" onClick={Dgithub}>
                        <FiGithub className="h-4 w-4 text-blue-500" />
                      </Button>
                      <Button size="icon" variant="secondary" className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30" onClick={Dlinkedin}>
                        <FiLinkedin className="h-4 w-4 text-blue-500" />
                      </Button>
                      <Button size="icon" variant="secondary" className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30" onClick={Dtwitter}>
                        <FaXTwitter className="h-4 w-4 text-blue-500" />
                      </Button>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-1">Dr. Debesh Jha</h3>
                    <p className="text-primary font-medium mb-3">Technical Lead</p>
                    <p className="text-sm text-muted-foreground leading-relaxed">AI/ML specialist in medical imaging, recognized among world’s top scientists.</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            
            <div className="lg:col-span-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 h-1/2">
                {teamMembers.map((member, index) => (
                  <Card key={index} className="group hover:shadow-2xl transition-all duration-500 border-0 bg-card/80 backdrop-blur-sm mt-6 mb-6">
                    <CardContent className="p-0">
                      <div className="relative overflow-hidden rounded-md">
                        <img
                          src={member.image}
                          alt={member.name}
                          className="w-full h-48 object-cover object-top group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        
                        
                        <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <Button size="icon" variant="secondary" className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30" onClick={()=>{window.open(member.social.github)}}>
                            <FiGithub className="h-3 w-3 text-white" />
                          </Button>
                          <Button size="icon" variant="secondary" className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30" onClick={()=>{window.open(member.social.linkedin)}}>
                            <FiLinkedin className="h-3 w-3 text-white" />
                          </Button>
                        </div>
                      </div>
                      
                      <div className="p-4">
                        <h3 className="text-lg font-bold mb-1">{member.name}</h3>
                        <p className="text-primary font-medium mb-2 text-sm">{member.role}</p>
                        <p className="text-xs text-muted-foreground leading-relaxed">{member.college},</p>
                        <p className="text-xs text-muted-foreground leading-relaxed">{member.description}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="hidden lg:block mt-20">
                <h1 className="font-bold text-4xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Who are we ?</h1>
                
                <p className="text-justify font-semibold text-md mt-6">We’re students at the University of South Dakota who created this website to make helpful technology freely accessible to everyone. 
                  Our goal is to improve AI in healthcare by building practical, research-driven tools. By combining our technical skills with insights from the 
                  medical field, we aim to develop solutions that support doctors, researchers, and patients alike,  making advanced technology more human-centered 
                  and accessible.</p>
              </div>

            </div>
          </div>
        </div>
      </div>

      
      <div className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-8">Our <span className="bg-gradient-to-r from-blue-500 to-blue-600 bg-clip-text text-transparent">Mission</span></h2>
          <p className="text-xl text-muted-foreground leading-relaxed mb-8">
            Advanced AI is transforming modern healthcare, enabling earlier detection, precise segmentation, and improved clinical 
            decision making. Our mission is to integrate state-of-the-art deep learning technologies into medical imaging workflows,
            making high-accuracy analysis accessible to healthcare providers everywhere.
          </p>
          <p className="text-xl text-muted-foreground leading-relaxed mb-8">
            Building on innovative architectures such as nnSynergyNet3D, our platform unifies continuous and discrete latent representations 
            to capture both fine-grained and global imaging features. This synergistic design enhances segmentation quality, supports reliable 
            cross-modal generalization, and adapts seamlessly across CT and MRI data.
          </p>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Combining cutting-edge AI with intuitive user experience, we aim to equip clinicians and researchers with powerful tools that streamline workflows, 
            support early diagnosis, and elevate the standard of patient care.
          </p>
        </div>
      </div>

      {/* Technology & Research Section */}
      <div className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50/50 to-purple-50/50 dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-bold mb-12 text-center">
            Our <span className="bg-gradient-to-r from-blue-500 to-blue-600 bg-clip-text text-transparent">Technology</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="border-0 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-14 h-14 bg-gradient-to-br  rounded-xl flex items-center justify-center mr-4">
                    <span className="text-black dark:text-white text-3xl font-bold"><GiBrain/></span>
                  </div>
                  <h3 className="text-2xl font-bold">3D Synergistic Modeling for Polyp</h3>
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  By combining continuous and discrete latent spaces, our architecture learns both fine-grained polyp details and overall colon morphology. 
                  This synergy enhances segmentation accuracy and improves early detection of colorectal lesions.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 bg-transparent dark:bg-transparent backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-14 h-14 bg-gradient-to-br rounded-xl flex items-center justify-center mr-4">
                    <span className="text-black dark:text-white text-3xl font-bold"><VscGraphLine/></span>
                  </div>
                  <h3 className="text-2xl font-bold">Proven Performance</h3>
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Validated on a diverse multi-centre colonoscopy dataset, our model delivers improved polyp segmentation accuracy, outperforming established baselines such as nnUNet3D. 
                  In zero-shot evaluations on unseen centres and imaging conditions
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="bg-white/50 dark:bg-gray-800/50 rounded-2xl p-8 backdrop-blur-sm">
            <h3 className="text-3xl font-bold mb-8 text-center">Key Features</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center justify-center text-center">
                <div className="text-5xl mb-4 text-red-600"><TbTargetArrow/></div>
                <h4 className="text-xl font-bold mb-3">High Accuracy</h4>
                <p className="text-base text-muted-foreground">87.89% Dice Similarity Coefficient on T1W MRI scans</p>
              </div>
              <div className="flex flex-col items-center justify-center text-center">
                <div className="text-5xl mb-4 text-blue-500"><IoIosSync/></div>
                <h4 className="text-xl font-bold mb-3">Auto-Configuration</h4>
                <p className="text-base text-muted-foreground">Automatically adapts to dataset characteristics and hardware constraints</p>
              </div>
              <div className="flex flex-col items-center justify-center text-center">
                <div className="text-5xl mb-4 text-green-500"><BsGlobe2/></div>
                <h4 className="text-xl font-bold mb-3">Cross-Modal</h4>
                <p className="text-base text-muted-foreground">Generalizes effectively across CT and MRI modalities</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
