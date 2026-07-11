import './HomePage.css'
import { useEffect } from "react";
import { DiMongodb } from "react-icons/di";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";
import { FaGithub, FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { useRef } from "react";
import { FaArrowRight } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { SiCanva, SiFigma } from "react-icons/si";
import { FaCode } from "react-icons/fa";
import { FaPalette } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { SiMysql } from "react-icons/si";
import { SiPhp } from "react-icons/si";
import { SiWordpress } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { FaCss3Alt } from "react-icons/fa";
import { PiCodeBold } from "react-icons/pi";
import { LuBrainCircuit } from "react-icons/lu";
import { HiOutlineMagnifyingGlass } from "react-icons/hi2";
import { LuExternalLink } from "react-icons/lu";
import { FaNodeJs } from "react-icons/fa6";
import {
  HiCodeBracket,
  HiOutlinePaintBrush,
  HiMagnifyingGlass,
  HiUserGroup,
} from "react-icons/hi2";
import joshua from "../assets/joshua.jpg"; 
import cybersecurity from "../assets/cisco-certified-support-technician-cybersecurity.jpg";
import networking from "../assets/cisco-certified-support-technician-networking.jpg";
import aboutus from "../assets/willow-pet-about-us-page.png";
import faq from "../assets/willow-pet-home-page-faq.jpg";
import homepage from "../assets/willow-pet-home-page-whole.jpg";
import product from "../assets/willow-home-page-product.jpg";
import willowslide from "../assets/willow-pet-home-page-slide.jpg";
import willowfacts from "../assets/willow-pet-home-page-facts.jpg";
import willowfooter from "../assets/willow-pet-home-page-footer.png";
import chatpage from "../assets/link-up-chat-page.png";
import linkuphomepage from "../assets/link-up-home-page.png";
import profilepage from "../assets/link-up-profile-page.png";
import storiespage from "../assets/link-stories-page.png";
import postpage from "../assets/link-up-post-page.png";
import empowerherdashboard from "../assets/empowerher-dashboard.png";
import empowerherchatbot from "../assets/empowerher-chatbot.png";
import empowerhercommunity from "../assets/empowerher-community.png";
import empowerherlesson from "../assets/empowerher-lesson-page.png";
import empowerherpersonalized from "../assets/empowerher-personalized-learning.png";
import jpcs from "../assets/junior-philippines-computer-society-membership.jpg";
import quote from "../assets/quote.png"; 
import certificate from "../assets/certificate.jpg"; 
import joshuapaldo from "../assets/joshuapaldo.jpg"; 
import joshuafake from "../assets/joshuafake.jpg"; 
import joshuamasarap from "../assets/joshuamasarap.jpg"; 
import joshuaprofile from "../assets/joshuaprofile.jpg"; 
import empowerher from "../assets/empowerher.png"; 
import linkup from "../assets/LinkUp.png";
import projectdesign from "../assets/Container.png"
import signature from "../assets/signature.png";
import elegant from "../assets/elegant.mp4";
import { RiRobot2Line } from "react-icons/ri";
import { LuCodeXml } from "react-icons/lu";
import { LuUserRound } from "react-icons/lu";
import { LuRocket } from "react-icons/lu";
import { LuGraduationCap } from "react-icons/lu";
import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import { LuArrowLeft, LuArrowRight } from "react-icons/lu";
import { FaBars, FaTimes } from "react-icons/fa";

function HomePage() {
const [openFAQ, setOpenFAQ] = useState(null);
const [menuOpen, setMenuOpen] = useState(false);
const [openChatbot, setOpenChatbot] = useState(false);
const [openCertifications, setOpenCertifications] = useState(false);
const [selectedCertificate, setSelectedCertificate] = useState(null);
const [selectedProject, setSelectedProject] = useState(null);
const [count, setCount] = useState(0);
const [openWebsite, setOpenWebsite] = useState(false);
const [slideImage, setSlideImage] = useState(0);
const certifications = [
{
id: 1,
number: "1",
certificate: "IT Specialist Python - Certiport",
date: "3/27/2026",
image: certificate
}, {
id: 2,
number: "2",
certificate: "Cisco Certified Support Technician Cybersecurity - Cisco",
date: "3/21/2026",
image: cybersecurity
}, {
id: 3,
number: "3",
certificate: "Cisco Certified Support Technician Networking - Cisco",
date: "2/28/2026",
image: networking
}, {
id: 4,
number: "4",
certificate: "Junior Philippines Computer Society membership",
date: "2024-2025",
image: jpcs
}
]

const testimonial = [
{
    id: 1,
    comment: "Working with Joshua was a great experience. He delivered a modern, responsive website with clean code and excellent attention to detail. Communication was smooth throughout the project.",
    current: "1/3",
    profile: joshua,
    name: "Joshua Andres",
    position: "Software Engineer"
}, {
    id: 2,
    comment: "Joshua exceeded our expectations by delivering high-quality work ahead of schedule. His problem-solving skills and dedication made the entire development process seamless he did a great job.",
    current: "2/3",
    profile: joshuapaldo,
    name: "Cyril Vicente",
    position: "Pharmacist"
}, {
    id: 3,
    comment: "From the initial design to the final implementation, Joshua demonstrated professionalism and creativity. We are extremely satisfied with the results and would gladly work with him again.",
    current: "3/3",
    profile: joshuafake,
    name: "Justine Bulagui",
    position: "Tambay"
}]

const number = () => {
   setCount(count + 1);

   if(count === 2) {
    setCount(count * 0)
   }
}

const negative = () => {
    setCount(count - 1);

    if(count === 0) {
        setCount(count + 2);
    }
}

const project = [{
id: 1,
name: "Willow Pet Food",
type: "Online Thinkers Technology - Internship",
year: "2026",
development: "Web Development, Web Design, SEO Optimization, Graphic Design, Social Media Marketing",
description: "Contributed to the development of responsive websites by building user interfaces, implementing web features, improving SEO performance, and creating digital content while collaborating with a professional development team.",
image: projectdesign,
tech: [
    {icon: SiCanva, name:"Canva", style: "canva-logo" }, 
    {icon: SiFigma, name: "Figma", style: "figma"}
],
features: [
    {icon: HiCodeBracket, header: "Development", description: "Responsive Websites"},
    {icon: HiOutlinePaintBrush, header: "Web Design", description: "UI & Graphics"},
    {icon: HiMagnifyingGlass, header: "SEO Strategy", description: "Visibility"},
    {icon: HiUserGroup, header: "Client Projects", description: "Experience"},
]
}, {
id: 2,
name: "LinkUp",
type: "Personal Project",
year: "2025-2026",
development: "Web Development, Frontend Development, Responsive Web Design",
description: "Designed and developed LinkUp, a responsive social media web application inspired by the user experiences of Facebook, Instagram, and Twitter. Built with React, HTML, CSS, and JavaScript to showcase modern UI design, reusable components, and responsive frontend development.",
image: linkup,
tech: [
    {icon: FaReact, name: "React", style: "react"}, 
    {icon: FaHtml5, name: "HTML", style: "html"}, 
    {icon: FaCss3Alt, name: "CSS", style: "css"},
    {icon: IoLogoJavascript, name: "Javascript", style: "javascript"}
], 
features: [
    {icon: HiCodeBracket, header: "Development", description: "Responsive Websites"},
    {icon: HiCodeBracket, header: "Web Design", description: "UI & Graphics"},
    {icon: HiCodeBracket, header: "SEO Strategy", description: "Visibility"},
    {icon: HiCodeBracket, header: "Personal Project", description: "Experience"},
]
}, {
id: 3,
name: "EmpowerHer",
type: "Capstone Project",
year: "2025",
development: "Full Stack Web Development, Artificial Intelligence, Personalized Learning",
description: "Developed EmpowerHer, an AI-powered full stack educational platform featuring an AI chatbot, AI content checker, and AI module generator. Built with responsive design, secure authentication, role-based access, and database integration to deliver an interactive learning experience.",
image: empowerher,
tech: [
    {icon: IoLogoJavascript, name: "Javascript", style: "javascript"}, 
    {icon: SiPhp, name: "Php", style: "php"}, 
    {icon: FaHtml5, name: "HTML", style: "html"},
    {icon: FaCss3Alt, name: "CSS", style: "css"},
    {icon: SiMysql, name: "MySQL", style: "mysql"}
], 
features: [
    {icon: HiCodeBracket, header: "Development", description: "Responsive Websites"},
    {icon: HiCodeBracket, header: "Web Design", description: "UI & Graphics"},
    {icon: HiCodeBracket, header: "Artificial Intelligence", description: "AI Automation"},
    {icon: HiCodeBracket, header: "Capstone Projects", description: "Experience"},
]
}
];

const projectwebsite = [{
id: 1,
name: "Willow Pet Food",
year: "2026",
role: "Online Thinkers Technology - Internship",
description: "Contributed to the development of responsive websites by building user interfaces, implementing web features, improving SEO performance, and creating digital content while collaborating with a professional development team.",
features: [
    {icon: "HiCodeBracket", description: "Product Catalog", support: "Browse Pad"},
    {icon: "HiCodeBracket", description: "Product Catalog", support: "Browse Pad"},
    {icon: "HiCodeBracket", description: "Product Catalog", support: "Browse Pad"},
    {icon: "HiCodeBracket", description: "Product Catalog", support: "Browse Pad"} 
],
tech: [
    {icon: SiCanva, name:"Canva", style: "canva-logo" }, 
    {icon: SiFigma, name: "Figma", style: "figma"}
],
image: [projectdesign, willowfacts, faq, product, willowslide, willowfooter],
link: ""  
}, {
id: 2,
name: "LinkUp",
year: "2025",
role: "Personal Project",
description: "Designed and developed LinkUp, a responsive social media web application inspired by the user experiences of Facebook, Instagram, and Twitter. Built with React, HTML, CSS, and JavaScript to showcase modern UI design, reusable components, and responsive frontend development.",
features: [
    {icon: "HiCodeBracket", description: "Product Catalog", support: "Browse Pad"},
    {icon: "HiCodeBracket", description: "Product Catalog", support: "Browse Pad"},
    {icon: "HiCodeBracket", description: "Product Catalog", support: "Browse Pad"},
    {icon: "HiCodeBracket", description: "Product Catalog", support: "Browse Pad"} 
],
tech: [
    {icon: FaReact, name: "React", style: "react"}, 
    {icon: FaHtml5, name: "HTML", style: "html"}, 
    {icon: FaCss3Alt, name: "CSS", style: "css"},
    {icon: IoLogoJavascript, name: "Javascript", style: "javascript"}
],
image: [linkup, linkuphomepage, postpage, profilepage, storiespage, chatpage],
link: "https://link-up-rust-six.vercel.app/"  
}, {
id: 3,
name: "EmpowerHer",
year: "2025",
role: "Capstone Project",
description: "Developed EmpowerHer, an AI-powered full stack educational platform featuring an AI chatbot, AI content checker, and AI module generator. Built with responsive design, secure authentication, role-based access, and database integration to deliver an interactive learning experience.",
features: [
    {icon: "HiCodeBracket", description: "Product Catalog", support: "Browse Pad"},
    {icon: "HiCodeBracket", description: "Product Catalog", support: "Browse Pad"},
    {icon: "HiCodeBracket", description: "Product Catalog", support: "Browse Pad"},
    {icon: "HiCodeBracket", description: "Product Catalog", support: "Browse Pad"} 
],
tech: [
    {icon: IoLogoJavascript, name: "Javascript", style: "javascript"}, 
    {icon: SiPhp, name: "Php", style: "php"}, 
    {icon: FaHtml5, name: "HTML", style: "html"},
    {icon: FaCss3Alt, name: "CSS", style: "css"},
    {icon: SiMysql, name: "MySQL", style: "mysql"}
], 
image: [empowerher, empowerherdashboard, empowerherchatbot,  empowerherpersonalized, empowerherlesson, empowerhercommunity],
link: "https://empowerherbest.com/index.php"  
}]

const increase = () => {
    setSlideImage(slideImage + 1);

    if(slideImage === 5) {
        setSlideImage(slideImage * 0);
    }
    console.log(slideImage);
}

const decrease = () => {
    setSlideImage(slideImage - 1);

    if(slideImage === 0) {
        setSlideImage(slideImage + 5);
    }
    console.log(slideImage)
}

useEffect(() => {
    if (openWebsite || openCertifications) {
        document.body.style.overflow = "hidden";
        document.body.style.paddingRight = "0px"; 
    } else {
        document.body.style.overflow = "";
        document.body.style.paddingRight = "";
    }

    return () => {
        document.body.style.overflow = "";
        document.body.style.paddingRight = "";
    };
}, [openWebsite, openCertifications]);



const techItems = [
    { name: "React", icon: <FaReact className="icon-react" />, desc: "Leading frontend library" },
    { name: "Node.js", icon: <FaNodeJs className="icon-node" />, desc: "Leading backend runtime" },
    { name: "Express.js", icon: <SiExpress className="icon-express" />, desc: "Fast Node.js web framework" },
    { name: "Php", icon: <SiPhp className="icon-php" />, desc: "Backend programming language" },
    { name: "Javascript", icon: <IoLogoJavascript className="icon-javascript" />, desc: "Full-stack programming language" },
    { name: "Wordpress", icon: <SiWordpress className="icon-wordpress" />, desc: "Content Management System" },
    { name: "HTML", icon: <FaHtml5  className="icon-html" />, desc: "Web markup language" },
    { name: "CSS", icon: <FaCss3Alt className="icon-css" />, desc: "Web styling language" },
    { name: "MongoDB", icon: <DiMongodb className="icon-mongo" />, desc: "NoSQL database system" },
    { name: "MySQL", icon: <SiMysql className="icon-mysql" />, desc: "Leading relational database" },
];


const [current, setCurrent] = useState(0);
const next = (current + 1) % techItems.length;
const left = () => {
    setCurrent((prev) =>
        prev === 0 ? techItems.length - 1 : prev - 1
    );
};

const right = () => {
    setCurrent((prev) =>
        prev === techItems.length - 1 ? 0 : prev + 1
    );
};

const [name, setName] = useState("");
const [email, setEmail] = useState("");
const [phone, setPhone] = useState("");
const [message, setMessage] = useState("");
const [status, setStatus] = useState({
    message: "",
    type: "error"
});

const handleData = async (e) => {

e.preventDefault();

if (name === "" || email === "" || phone === "" || message === "") {
   setStatus({
        message: "Please fill all fields.",
        type: "error",
    });
} else {
const response = await fetch("https://joshuaportfolio-1.onrender.com/api/contact", {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
    }, 
    body: JSON.stringify({
        name,
        email,
        phone,
        message
    })
});

const data = await response.json();

if (data) {
setStatus({
    message: "Message sent successfully!",
    type: "success",
});
setName("");
setEmail("");
setPhone("");
setMessage("");
console.log(data.message);
} else {
console.log("Something went wrong");
};
}

}


const [chatbotMessage, setChatbotMessage] = useState("");
const [chatMessage, setChatMessage] = useState([{
    role: "chatbot",
    text: "Hi! I'm Joshua Andres' personal AI assistant. Feel free to ask me anything about his background, skills, projects, or experiences. I'll be happy to help!"
}]);

const sendMessage = async (e) => {
    e.preventDefault();

    if(chatbotMessage === "") {
        console.log("empty");
    } else {
       setChatMessage([
        ...chatMessage,
        {
            role: "user",
            text: chatbotMessage
        }
    ]);
    setChatbotMessage("");
    }

const response = await fetch("https://joshuaportfolio-1.onrender.com/api/openai/chat", {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({
        message: chatbotMessage
    })
})

    const data = await response.json();
    

    setTimeout(() => {
        setChatMessage(chatMessage => [
            ...chatMessage,
        {
            role: "chatbot",
            text: data.reply
        }
        ])
    }, 2000)
}

const inputRef = useRef(null);

useEffect(() => {
   inputRef.current?.scrollIntoView({
        behavior: "smooth"
    });
}, [chatMessage]);


    return (
        <>
        <video
            className="background-video"
            autoPlay
            loop
            muted
            playsInline
        >
            <source src={elegant} type="video/mp4" />
        </video>

        <nav>
            <div className="nav-container">
                <a className="header">Joshua</a>

                <ul className={menuOpen ? "active" : ""}>
                    <li>About</li>
                    <li>Project</li>
                    <li>Services</li>
                    <li>Contact</li>
                </ul>

                <button className="book">Book a Call</button>

                <div
                className="burger"
                onClick={() => setMenuOpen(!menuOpen)}
                >
                {menuOpen ? <FaTimes /> : <FaBars />}
                </div>
            </div>
        </nav>

        {openWebsite && selectedProject && (
            <>
                <div className="website-background">
                    <div className="website-container">
                        <div className="website-header">
                            <div className="website-header-nav">
                                <div className="website-title-year">
                                    <h1>{selectedProject.name}</h1>
                                    <div className="website-company-year">{selectedProject.year}</div>
                                </div>
                                <p>{selectedProject.role}</p>
                            </div>
                            <div>
                                <button className="website-back-button" onClick={() => setOpenWebsite(false)}>x</button>
                            </div>
                        </div>

                        <div className="website-body">
                            <div className="website-image-container">
                                 <img src={selectedProject.image[slideImage]} className="website-image-size"/>
                                 <div className="website-slide-container">
                                    <div className="website-slide">
                                        <button className="website-slide-button" onClick={decrease}>
                                             <LuArrowLeft />
                                        </button>
                                    </div>
                                    {selectedProject.image.map((image, index) => {
                                        return (
                                            <img
                                                src={image}
                                                className={`website-image-slide ${
                                                    slideImage === index ? "active" : ""
                                                }`}
                                                onClick={() => setSlideImage(index)}
                                            />
                                        );
                                    })}
                                    
                                    <div className="website-slide">
                                        <button className="website-slide-button" onClick={increase}>
                                           <LuArrowRight />
                                        </button>
                                    </div>
                                 </div>
                            </div>
                            <div className="website-description-container">
                                <div className="website-description">
                                    <h2>About</h2>
                                    <p>{selectedProject.description}</p>
                                </div>
                                <div className="website-features">
                                    <h2>Key Features</h2>
                                    <div className="website-features-container">
                                        <div className="website-row-container">
                                            <div className="website-flex-container">
                                                <div className="website-project-icons-background">
                                                    <HiCodeBracket className="website-project-icon" />
                                                </div>
                                                <div className="website-project">
                                                    <p>Browse Pad</p>
                                                </div>
                                            </div>
                                            <div className="website-flex-container">
                                                <div className="website-project-icons-background">
                                                    <HiCodeBracket className="website-project-icon" />
                                                </div>
                                                <div className="website-project">
                                                    <p>Browse Pad</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="website-row-container">
                                            <div className="website-flex-container">
                                                <div className="website-project-icons-background">
                                                    <HiCodeBracket className="website-project-icon" />
                                                </div>
                                                <div className="website-project">
                                                    
                                                    <p>Browse Pad</p>
                                                </div>
                                            </div>

                                            <div className="website-flex-container">
                                                <div className="website-project-icons-background">
                                                    <HiCodeBracket className="website-project-icon" />
                                                </div>
                                                <div className="website-project">
                                                    
                                                    <p>Browse Pad</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="website-tech-stack">
                                    <h2>Tech Stack</h2>
                                    <div className="website-company-tech">
                                        {selectedProject.tech.map((items) => {
                                            const Icon = items.icon;
                                            return (
                                                <div className="company-usage">
                                                    <Icon className={items.style}/>
                                                    <p className="company-tech-name">{items.name}</p>
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="website-footer">
                           <div className="website-visit" href="https://empowerherbest.com/index.php">
                                <LuExternalLink className="website-icon"/>
                                <a href={selectedProject.link}>Visit Site</a>
                           </div>
                        </div>
                    </div>
                    
                </div>
            </>
        )}

        {openCertifications && selectedCertificate && (
            <>
                <div className="certifications-image-container">
                   <div className="image-container-certificate"  onClick={(e) => e.stopPropagation()}>
                        <button onClick={(e) => setOpenCertifications(false)}>x</button>
                        <img src={selectedCertificate.image} className="image-size-certificate"/>
                   </div>
                </div>
            </>
        )}

       <div 
       className="chatbot-head"
       onClick={() => setOpenChatbot(prev => !prev)}
       >
            <div className="chatbot-card">
                <RiRobot2Line className="chatbot-icon" />
            </div>

            <div className="chatbot-popup">
                <h4>Chat with Joshua AI</h4>
                <p>Ask about my projects, skills, and experience.</p>
            </div>
        </div>

        {openChatbot && (
            <>
                <div className="chatbot-dialog-box">
                    <div className="chatbot-name">
                         <RiRobot2Line className="chatbot-icon" />
                         <p>Joshua Andres</p>
                         <button 
                         className="chatbot-back"
                         onClick={() => setOpenChatbot(false)}
                         >
                            x
                         </button>
                    </div>

                    <div className="chatbot-body">

                       <div className="chatbot-conversation">
                           {chatMessage.map((message, index) => (
                                message.role === "user" ? (
                                    <p key={index} className="chatbot-user">
                                        {message.text}
                                    </p>
                                ) : (
                                    
                                    <div key={index} className="chatbot-response">
                                        <RiRobot2Line className="chatbot-icon" />
                                        <p>{message.text}</p>
                                    </div>
                                )
                            ))}
                            
           
                           <div ref={inputRef}></div>
                        </div>

                    </div>

                    <div className="chatbot-input">
                        <div>
                            <input
                                type="text"
                                placeholder="Type a message..."
                                className="chatbot-text"
                                value={chatbotMessage}
                                onChange={(e) => setChatbotMessage(e.target.value)}
                                onKeyDown={(e) => {
                                if (e.key === "Enter") {
                                    sendMessage(e);
                                }
                            }}
                            />
                            <button 
                            type="button"
                            className="chatbot-send-button"
                            onClick={sendMessage}
                            >Send
                            </button>
                            
                        </div>
                    </div>
                </div>
            </>
        )
     }

        <section className="row">
            <div className="left">
                <div className="card">
                    <div className="box-status">
                        <div className="dot-job"></div>
                        <p>Available for job</p>
                    </div>
                    <div className="avatar">
                         <img src={joshua} alt="Joshua" className="name"/>
                         <img src={signature} alt="signature" className="signature"/> 
                    </div>
                    <h2 className="email txt-center">
                        joshuaandres098@gmail.com
                    </h2>
                    <p className="location txt-center">
                        Metro Manila, Philippines
                    </p>
                    <ul>
                        <li>
                            <a href="https://facebook.com" target="_blank" rel="noreferrer">
                            <FaFacebookF />
                        </a>
                        </li>
                        <li>
                            <a href="https://instagram.com" target="_blank" rel="noreferrer">
                              <FaInstagram />
                            </a>
                        </li>
                        <li>
                         <a href="https://x.com" target="_blank" rel="noreferrer">
                            <FaGithub />
                        </a>
                        </li>
                        <li>
                            <a href="https://linkedin.com" target="_blank" rel="noreferrer">
                                <FaLinkedinIn />
                            </a>
                        </li>
                    </ul>
                     <a className="button-direction">
                        <p>Get Started</p>
                        <li><FaArrowRight /></li>
                     </a>
                </div>
            
            </div>

            <div className="right">
                <motion.p
                    className="details"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{
                        duration: 1,
                        ease: "easeOut",
                        delay: 0.2
                    }}
                    viewport={{ once: true }}
                >
                    Metro Manila, Philippines
                </motion.p>
                <div className="introduction">
                    <div className="dot"></div>
                    <p>Introduction</p>
                </div>
                <motion.h1
                className="header-1"
                initial={{
                    clipPath: "inset(0 100% 0 0)",
                }}
                whileInView={{
                    clipPath: "inset(0 0% 0 0)",
                }}
                transition={{
                    duration: 1.5,
                    ease: "easeInOut",
                }}
                viewport={{ once: true }}
                >
                    Hi, I'm <span>Joshua Andres</span>, an<br />
                     Aspiring Software Engineer.
                </motion.h1>
                <p className="hero-description">
                    As an aspiring Software Engineer, I enjoy developing intuitive user
                    interfaces and reliable backend solutions. <br/>I'm committed to writing clean
                    code and building applications that deliver great user experiences.
                </p>
                <ul>
                    <motion.li
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                        duration: .5,
                        ease: "easeOut"
                    }}
                    viewport={{ once: true }}>
                        Web Development
                    </motion.li>
                    <motion.li
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                        duration: .5,
                        ease: "easeOut"
                    }}
                    viewport={{ once: true }}>
                        Web Design
                    </motion.li>
                    <motion.li
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                        duration: .5,
                        ease: "easeOut"
                    }}
                    viewport={{ once: true }}>
                        UI/UX
                    </motion.li>
                </ul>

                  <ul className="test">
                    <motion.li
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                        duration: .5,
                        ease: "easeOut"
                    }}
                    viewport={{ once: true }}>
                        RESTful API
                    </motion.li>
                    <motion.li
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                        duration: .5,
                        ease: "easeOut"
                    }}
                    viewport={{ once: true }}>
                        Artificial Intelligence
                    </motion.li>
                    <motion.li
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                        duration: .5,
                        ease: "easeOut"
                    }}
                    viewport={{ once: true }}>
                        Search Engine Optimization
                    </motion.li>
                </ul>
                <div className="card-container">
                    <motion.div
                    className="container-xs"
                    initial={{ opacity: 0, y: 60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                        duration: 1,
                        ease: "easeOut"
                    }}
                    viewport={{ once: true }}>
                        <li>Tech Stack</li>
                        <p>
                        10+
                        </p>
                    </motion.div>
                   <motion.div
                    className="container-xs"
                    initial={{ opacity: 0, y: 60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                        duration: 1,
                        ease: "easeOut"
                    }}
                    viewport={{ once: true }}>
                        <li>Projects Built</li>
                        <p>4+</p>
                    </motion.div>
                </div>

                <section className="about">
                    <div className="experience-container">
                        <div className="dot"></div>
                        <p>About</p>
                    </div>
                    <div className="about-container">
                        <div className="about-description">
                            <motion.h1
                            initial={{
                                clipPath: "inset(0 100% 0 0)",
                            }}
                            whileInView={{
                                clipPath: "inset(0 0% 0 0)",
                            }}
                            transition={{
                                duration: 1.5,
                                ease: "easeInOut",
                            }}
                            viewport={{ once: true }}
                            >
                                Building digital solutions <br/> that makes an impact.
                            </motion.h1>
                            <p>
                                I'm a passionate Full Stack Web Developer with a strong focus on
                                building responsive, user-friendly, and high-performing websites
                                and applications
                            </p>

                            <p>
                                I enjoy turning ideas into real digital experiences and continuously
                                learn new technologies to stay current in the fast-evolving tech landscape.
                            </p>
                            
                        </div>
                        <div className="img-container">
                            <motion.div
                                className="about-img-container"
                                initial={{ opacity: 0, x: 100 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{
                                    duration: 1.5,
                                    ease: "easeOut"
                                }}
                                viewport={{ once: true }}
                            >
                                <img src={joshuaprofile} className="about-img"/>
                            </motion.div>
                            <motion.div
                                className="about-experience"
                                initial={{ opacity: 0, x: 100 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{
                                    duration: 1.8,
                                    ease: "easeOut"
                                }}
                                viewport={{ once: true }}
                            >
                                <p>Internship Experience</p>
                                <p className="about-years">5 months</p>
                            </motion.div>
                        </div>
                    </div>
                    <div className="about-cards">
                        <motion.div
                            className="about-cards-container"
                            initial={{ opacity: 0, y: 60 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 1,
                                ease: "easeOut"
                            }}
                            viewport={{ once: true }}>
                            <div className="about-icons">
                                <div className="about-background-icons">
                                      <LuCodeXml className="card-icon" />
                                </div>
                                <h2>Clean Code</h2>
                            </div>
                            <p>Writing maintanable, scalable, and efficent code.</p>
                        </motion.div>
                        <motion.div
                            className="about-cards-container"
                            initial={{ opacity: 0, y: 60 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 1,
                                ease: "easeOut"
                            }}
                            viewport={{ once: true }}>
                            <div className="about-icons">
                                <div className="about-background-icons">
                                    <LuUserRound className="card-icon"/>
                                </div>
                                <h2>User Focused</h2>
                            </div>
                            <p>Building with users in mind for better experiences</p>
                        </motion.div>
                        <motion.div
                            className="about-cards-container"
                            initial={{ opacity: 0, y: 60 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 1,
                                ease: "easeOut"
                            }}
                            viewport={{ once: true }}>
                            <div className="about-icons">
                                <div className="about-background-icons">
                                    <LuRocket className="card-icon"/>
                                </div>
                                <h2>Performance</h2>
                            </div>
                            <p>Optimized solutions for speed and realibility.</p>
                        </motion.div>
                        <motion.div
                            className="about-cards-container"
                            initial={{ opacity: 0, y: 60 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 1,
                                ease: "easeOut"
                            }}
                            viewport={{ once: true }}>
                            <div className="about-icons">
                                <div className="about-background-icons">
                                    <LuGraduationCap className="card-icon"/>
                                </div>
                                <h2>Adaptable</h2>
                            </div>
                            <p>Always learning, exploring and improving.</p>
                        </motion.div>
                    </div>
                </section>

                <section className="tech-stack-container">
                    <motion.h1
                        className="tech-stack"
                        initial={{
                            clipPath: "inset(0 0 0 100%)",
                            opacity: 0
                        }}
                        whileInView={{
                            clipPath: "inset(0 0 0 0)",
                            opacity: 1
                        }}
                        transition={{
                            duration: 1,
                            ease: [0.22, 1, 0.36, 1]
                        }}
                        viewport={{ once: true }}
                    >
                        TECH STACK
                    </motion.h1>
                    <div className="container-tech">
                        
                        <motion.div className="tech-stack-tech">
                            <h2>{techItems[current].name}</h2>

                            <div className="icon-background-tech">
                                {techItems[current].icon}
                            </div>

                            <p>{techItems[current].desc}</p>
                        </motion.div>
                       
                        <motion.div className="tech-stack-tech">
                            <h2>{techItems[next].name}</h2>

                            <div className="icon-background-tech">
                                {techItems[next].icon}
                            </div>

                            <p>{techItems[next].desc}</p>
                        </motion.div>
                    </div>
                    <div className="tech-controls">
                        <button className="tech-btn" onClick={left}>
                            <IoChevronBack />
                        </button>

                        <button className="tech-btn" onClick={right}>
                             <IoChevronForward />
                        </button>
                    </div>
                </section>

                <div className="experience">
                    <div className="experience-container">
                        <div className="dot"></div>
                        <p>Experience</p>
                        <motion.h1
                            className="additional-h1"
                            initial={{
                                clipPath: "inset(0 100% 0 0)",
                            }}
                            whileInView={{
                                clipPath: "inset(0 0% 0 0)",
                            }}
                            transition={{
                                duration: 1.5,
                                ease: "easeInOut",
                            }}
                            viewport={{ once: true }}
                            >
                            My internship was more than just  
                        </motion.h1>
                    </div>
                    <motion.h1
                            className="support-h1"
                            initial={{
                                clipPath: "inset(0 100% 0 0)",
                            }}
                            whileInView={{
                                clipPath: "inset(0 0% 0 0)",
                            }}
                            transition={{
                                duration: 1.5,
                                ease: "easeInOut",
                            }}
                            viewport={{ once: true }}
                            >
                        gaining experience it was an opportunity to grow, learn, and contribute to real-world projects.
                    </motion.h1>
                </div>
                <div className="experience-wrap">
                    <div className="wrap-container">
                         <motion.h2
                            className="company"
                            initial={{
                                clipPath: "inset(0 0 0 100%)",
                                opacity: 0
                            }}
                            whileInView={{
                                clipPath: "inset(0 0 0 0)",
                                opacity: 1
                            }}
                            transition={{
                                duration: 1,
                                ease: [0.22, 1, 0.36, 1]
                            }}
                            viewport={{ once: true }}
                            >
                            Online Thinkers Technology
                        </motion.h2>
                        <div className="company-experience-container">
                            <motion.h3
                            className="company-experience"
                            initial={{
                                clipPath: "inset(0 0 0 100%)",
                                opacity: 0
                            }}
                            whileInView={{
                                clipPath: "inset(0 0 0 0)",
                                opacity: 1
                            }}
                            transition={{
                                duration: 1,
                                ease: [0.22, 1, 0.36, 1]
                            }}
                            viewport={{ once: true }}
                            >
                                Web Developer, Web Designer, SEO Optimization, Graphics Design, Social Media Marketing
                            </motion.h3>
                            <div className="company-year">
                                2026
                            </div>
                        </div>
                        <p className="internship-description">
                           Throughout my internship at Online Thinkers Technology, I gained practical experience in designing and developing responsive websites that prioritize usability, performance, and accessibility. I collaborated with the team to build intuitive user interfaces, implement web features, and maintain websites using modern development practices. Beyond web development, I supported SEO initiatives by optimizing website content and structure, created visual assets for branding and marketing campaigns, and contributed to social media content that enhanced online engagement. This experience allowed me to improve both my technical and creative skills while working in a fast-paced, collaborative environment.
                        </p>
                    </div>
                </div>

                <section className="projects">
                     <div className="experience-container">
                        <div className="dot"></div>
                        <p>Project</p>
                        <motion.h1
                            className="additional-h1"
                            initial={{
                                clipPath: "inset(0 100% 0 0)",
                            }}
                            whileInView={{
                                clipPath: "inset(0 0% 0 0)",
                            }}
                            transition={{
                                duration: 1.5,
                                ease: "easeInOut",
                            }}
                            viewport={{ once: true }}
                            >
                            Explore the websites and applications
                        </motion.h1>
                    </div>
                    <motion.h1
                            className="support-h1"
                            initial={{
                                clipPath: "inset(0 100% 0 0)",
                            }}
                            whileInView={{
                                clipPath: "inset(0 0% 0 0)",
                            }}
                            transition={{
                                duration: 1.5,
                                ease: "easeInOut",
                            }}
                            viewport={{ once: true }}
                            >
                        I've built during my internship and personal development journey.  
                    </motion.h1>


                    {project.map((project, index) => {
                        return (
                        <motion.div
                            key={project.id}
                            className="project-container"
                            initial={{ opacity: 0, x: -100 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{
                                duration: 1.5,
                                ease: "easeOut"
                            }}
                            viewport={{ once: true }}
                        >
                        <div className="project-img-container">
                            <div 
                            className="project-img" 
                            onClick={() =>  {
                            setSelectedProject(projectwebsite[index])
                            setOpenWebsite(true)}}
                            >
                                <img src={project.image} className="project-img-size"/>
                            </div>
                            
                            <div className="project-description">
                                <div className="header-container">
                                    <h1>{project.name}</h1>
                                    <div className="company-year">
                                       {project.year}
                                    </div>
                                </div>
                                <div className="company-profile">
                                    <p className="company-name">
                                        
                                        {project.type}
                                    </p>
                                    <p className="company-role">
                                        {project.development}
                                    </p>
                                </div>
                                <p className="company-details">
                                    {project.description}
                                </p>
                                <div className="website-company-tech">
                                    {project.tech.map((item) => {
                                        const Icons = item.icon;
                                        return (
                                            <div className="company-usage">
                                                <Icons className={item.style} />
                                                <p className="company-tech-name">{item.name}</p>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                          </div>
                        <div className="project-description-container">
                           {project.features.map((features) => {
                                const Featuresicon = features.icon;
                            return (
                            <div className="project-container-information">
                                <div className="project-icons-background">
                                    <Featuresicon className="project-icon" />
                                </div>
                                <div>
                                    <p>{features.header}</p>
                                    <p>{features.description}</p>
                                </div>
                            </div>
                            );

                           })}
                            

                        </div>
                    </motion.div>
                        );
                    })}
                    
                </section>

                <section className="testimonials">
                     <div className="testimonial-container" key={testimonial[count].id}>
                         <div className="services-dot">
                                <div className="dot"></div>
                                <p>Testimonial</p>
                            </div>
                            
                            <div className="testimonial-review">
                                 <motion.h2
                                    className="additional-h1"
                                    initial={{
                                        clipPath: "inset(0 100% 0 0)",
                                    }}
                                    whileInView={{
                                        clipPath: "inset(0 0% 0 0)",
                                    }}
                                    transition={{
                                        duration: 1.5,
                                        ease: "easeInOut",
                                    }}
                                    viewport={{ once: true }}
                                    >
                                    “ {testimonial[count].comment} ”
                                </motion.h2>
                                <div className="testimonial-controller">
                                    <div 
                                    className="testimonial-button"
                                    onClick={negative}
                                    >
                                        <span>
                                           <LuArrowLeft />
                                        </span>
                                    </div>
                                    <p>{testimonial[count].current}</p>
                                    <div 
                                    className="testimonial-button"
                                    onClick={number}
                                    >
                                        <span>
                                            <LuArrowRight />
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="testimonial-img">
                                <img src={quote} className="quote-img"/>
                                <motion.img
                                    className="testimonial-client"
                                    src={testimonial[count].profile}
                                    initial={{ opacity: 0, x: 100 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{
                                        duration: 1,
                                        ease: "easeOut"
                                    }}
                                    viewport={{ once: true }}
                                />
                                  <motion.div
                                    className="testimonial-name"
                                    src={testimonial[count].profile}
                                    initial={{ opacity: 0, x: 100 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{
                                        duration: 1,
                                        ease: "easeOut"
                                    }}
                                    viewport={{ once: true }}
                                >
                                    <h6>{testimonial[count].name}</h6>
                                    <p>{testimonial[count].position}</p>
                                </motion.div>
                                
                            </div>
                        </div>
                        
                    </section>

                <section className="certifications-container">
                        <motion.h1
                        className="certifications"
                        initial={{
                            clipPath: "inset(0 0 0 100%)",
                            opacity: 0
                        }}
                        whileInView={{
                            clipPath: "inset(0 0 0 0)",
                            opacity: 1
                        }}
                        transition={{
                            duration: 1,
                            ease: [0.22, 1, 0.36, 1]
                        }}
                        viewport={{ once: true }}
                        >
                            CERTIFICATIONS
                        </motion.h1>
                        <div className="certifications-details-container">
                            {certifications.map((certificates) => {
                             return (
                                <motion.div
                                    key={certificates.id}
                                    onClick={() => {
                                    setSelectedCertificate(certificates);
                                    setOpenCertifications(true);
                                     }}
                                    className="certifications-details"
                                    initial={{ opacity: 0, x: -100 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{
                                        duration: 2,
                                        ease: "easeOut"
                                    }}
                                    viewport={{ once: true }}
                                >
                                    <p className="certifications-number">{certificates.number}</p>
                                    <h2 className="ceritifcations-name">{certificates.certificate}</h2>
                                    <p className="certifications-date">{certificates.date}</p>
                             </motion.div>
                                );
                            })}
                        </div>
                    </section>


                    <section className="services">
                        <div className="services-container">
                             <div className="services-dot">
                                <div className="dot"></div>
                                <p>Services</p>
                            </div>
                            <div className="services-offer-container">
                                <div className="services-offer">
                                {openFAQ === 6 && (
                                    <div className="services-first-icon-background"> 
                                        <PiCodeBold className="project-icon" />
                                    </div>
                                )}
                                    <motion.h1
                                    onClick={() => setOpenFAQ(openFAQ === 6 ? null : 6)}
                                    style={{
                                        color: openFAQ === 6
                                            ? "white"
                                            : "rgba(255, 255, 255, 0.3019607843)"
                                    }}
                                    initial={{
                                        clipPath: "inset(0 0 0 100%)",
                                        opacity: 0
                                    }}
                                    whileInView={{
                                        clipPath: "inset(0 0 0 0)",
                                        opacity: 1
                                    }}
                                    transition={{
                                        duration: 1,
                                        ease: [0.22, 1, 0.36, 1]
                                    }}
                                    viewport={{ once: true }}
                                    >
                                        FULL STACK WEB DEVELOPMENT
                                        <span class="text-number">(01)</span>
                                    </motion.h1>
                                    
                                </div>
                                <AnimatePresence>
                                    {openFAQ === 6 && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3 }}
                                            style={{ overflow: "hidden" }}
                                        >
                                             <div className="services-list">
                                                <li>Responsive Frontend Development</li>
                                                <li>RESTful API Development & Integration</li>
                                                <li>Database Integration</li>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                               
                                <div className="services-header">
                                  <div className="services-offer">
                                    {openFAQ === 7 && (
                                    <div className="services-icon-background"> 
                                        <LuBrainCircuit className="project-icon" />
                                    </div>
                                )}
                                    <motion.h2
                                    onClick={() => setOpenFAQ(openFAQ === 7 ? null : 7)}
                                    style={{
                                        color: openFAQ === 7
                                            ? "white"
                                            : "rgba(255, 255, 255, 0.3019607843)",
                                             cursor: "pointer"
                                    }}
                                    initial={{
                                        clipPath: "inset(0 0 0 100%)",
                                        opacity: 0
                                    }}
                                    whileInView={{
                                        clipPath: "inset(0 0 0 0)",
                                        opacity: 1
                                    }}
                                    transition={{
                                        duration: 1,
                                        ease: [0.22, 1, 0.36, 1]
                                    }}
                                    viewport={{ once: true }}
                                    >
                                        Artificial Intelligence
                                        <span class="text-number">(02)</span>
                                    </motion.h2>
                                 </div>
                                <AnimatePresence>
                                    {openFAQ === 7 && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3 }}
                                            style={{ overflow: "hidden" }}
                                        >
                                             <div className="services-list">
                                                <li>AI-Powered Web Applications</li>
                                                <li>AI Chatbot Development</li>
                                                <li>OpenAI API Integration</li>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                                    
                                <div className="services-offer">
                                    {openFAQ === 8 && (
                                    <div className="services-icon-background"> 
                                        <HiOutlineMagnifyingGlass className="project-icon" />
                                    </div>
                                    )}
                                    <motion.h2
                                    onClick={() => setOpenFAQ(openFAQ === 8 ? null : 8)}
                                    style={{
                                        color: openFAQ === 8
                                            ? "white"
                                            : "rgba(255, 255, 255, 0.3019607843)",
                                             cursor: "pointer"
                                    }}
                                    initial={{
                                        clipPath: "inset(0 0 0 100%)",
                                        opacity: 0
                                    }}
                                    whileInView={{
                                        clipPath: "inset(0 0 0 0)",
                                        opacity: 1
                                    }}
                                    transition={{
                                        duration: 1,
                                        ease: [0.22, 1, 0.36, 1]
                                    }}
                                    viewport={{ once: true }}
                                    >
                                        SEO
                                        <span class="text-number">(03)</span>
                                    </motion.h2>
                                 </div>
                                <AnimatePresence>
                                    {openFAQ === 8 && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3 }}
                                            style={{ overflow: "hidden" }}
                                        >
                                             <div className="services-list">
                                                <li>On-Page SEO Optimization</li>
                                                <li>Keyword Research & Strategy</li>
                                                <li>Meta Tags & Structured Data</li>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                                 <div className="services-offer">
                                    {openFAQ === 9 && (
                                    <div className="services-icon-background"> 
                                        <HiOutlinePaintBrush className="project-icon" />
                                    </div>
                                    )}
                                    <motion.h2
                                    onClick={() => setOpenFAQ(openFAQ === 9 ? null : 9)}
                                    style={{
                                        color: openFAQ === 9
                                            ? "white"
                                            : "rgba(255, 255, 255, 0.3019607843)",
                                             cursor: "pointer"
                                    }}
                                    initial={{
                                        clipPath: "inset(0 0 0 100%)",
                                        opacity: 0
                                    }}
                                    whileInView={{
                                        clipPath: "inset(0 0 0 0)",
                                        opacity: 1
                                    }}
                                    transition={{
                                        duration: 1,
                                        ease: [0.22, 1, 0.36, 1]
                                    }}
                                    viewport={{ once: true }}
                                    >
                                        UI/UX IMPLEMENTATION
                                        <span class="text-number">(04)</span>
                                    </motion.h2>
                                 </div>
                                <AnimatePresence>
                                    {openFAQ === 9 && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3 }}
                                            style={{ overflow: "hidden" }}
                                        >
                                             <div className="services-list">
                                                <li>UI Implementation from Figma</li>
                                                <li>Responsive UI Development</li>
                                                <li>User Interface Improvements</li>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                                </div>
                                <div className="services-contact">
                                    <div className="services-available">
                                         <HiCodeBracket className="project-icon" />
                                        <p className="services-available-location">Available to</p>
                                        <p className="services-location">Metro Manila, Philippines</p>
                                    </div>
                                    <p className="services-contact-number">Contact me</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="frequently">
                        <motion.h1
                            className="frequently-header"
                            initial={{
                                clipPath: "inset(0 0 0 100%)",
                                opacity: 0
                            }}
                            whileInView={{
                                clipPath: "inset(0 0 0 0)",
                                opacity: 1
                            }}
                            transition={{
                                duration: 1,
                                ease: [0.22, 1, 0.36, 1]
                            }}
                            viewport={{ once: true }}
                            >
                            FAQs
                        </motion.h1>
                        <div className="faq-container">
                            <motion.div
                                className="faq-details-container"
                                initial={{ opacity: 0, x: -100 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{
                                    duration: 2,
                                    ease: "easeOut"
                                }}
                                viewport={{ once: true }}
                                >
                                <div
                                className="faq"
                                onClick={() => setOpenFAQ(openFAQ === 0 ? null : 0)}>
                                    <h2>
                                        What technologies do you work with?
                                    </h2>
                                    <div className="faq-background">
                                        <p>{openFAQ === 0 ? "-" : "+"}</p>
                                    </div>
                                </div>
                                   <AnimatePresence>
                                    {openFAQ === 0 && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3 }}
                                            style={{ overflow: "hidden" }}
                                        >
                                            <p className="faq-answer">
                                                I primarily work with HTML, CSS, JavaScript, PHP,
                                                React, Node.js, Express.js, MySQL, and RESTful APIs.
                                            </p>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>

                            <motion.div
                                className="faq-details-container"
                                initial={{ opacity: 0, x: -100 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{
                                    duration: 2,
                                    ease: "easeOut"
                                }}
                                viewport={{ once: true }}
                                >
                                <div
                                className="faq"
                                onClick={() => setOpenFAQ(openFAQ === 1 ? null : 1)}>
                                    <h2>
                                        What makes you different as a developer?
                                    </h2>
                                    <div className="faq-background">
                                        <p>{openFAQ === 1 ? "-" : "+"}</p>
                                    </div>
                                </div>
                                <AnimatePresence>
                                    {openFAQ === 1 && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3 }}
                                            style={{ overflow: "hidden" }}
                                        >
                                            <p className="faq-answer">
                                                I focus on writing clean, maintainable code while creating intuitive user 
                                                experiences. I enjoy transforming <br/>ideas into fast, responsive, and visually 
                                                polished web applications.
                                            </p>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>

                            <motion.div
                                className="faq-details-container"
                                initial={{ opacity: 0, x: -100 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{
                                    duration: 2,
                                    ease: "easeOut"
                                }}
                                viewport={{ once: true }}
                                >
                                <div
                                className="faq"
                                onClick={() => setOpenFAQ(openFAQ === 2 ? null : 2)}>
                                    <h2>
                                        Are you open to learning new technologies?
                                    </h2>
                                    <div className="faq-background">
                                        <p>{openFAQ === 2 ? "-" : "+"}</p>
                                    </div>
                                </div>
                                <AnimatePresence>
                                    {openFAQ === 2 && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3 }}
                                            style={{ overflow: "hidden" }}
                                        >
                                            <p className="faq-answer">
                                               Absolutely. I'm passionate about continuous learning and quickly adapting to 
                                               new frameworks, <br/>tools, and development practices to deliver better solutions.
                                            </p>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>

                            <motion.div
                                className="faq-details-container"
                                initial={{ opacity: 0, x: -100 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{
                                    duration: 2,
                                    ease: "easeOut"
                                }}
                                viewport={{ once: true }}
                                >
                                <div
                                className="faq"
                                onClick={() => setOpenFAQ(openFAQ === 3 ? null : 3)}>
                                    <h2>
                                        How do you approach a new project?
                                    </h2>
                                    <div className="faq-background">
                                        <p>{openFAQ === 3 ? "-" : "+"}</p>
                                    </div>
                                </div>
                                <AnimatePresence>
                                    {openFAQ === 3 && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3 }}
                                            style={{ overflow: "hidden" }}
                                        >
                                            <p className="faq-answer">
                                                I begin by understanding the client's goals and planning the application's 
                                                structure <br/>before designing the interface, developing the features, and refining 
                                                the overall user experience.
                                            </p>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>

                            <motion.div
                                className="faq-details-container"
                                initial={{ opacity: 0, x: -100 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{
                                    duration: 2,
                                    ease: "easeOut"
                                }}
                                viewport={{ once: true }}
                                >
                                <div
                                className="faq"
                                onClick={() => setOpenFAQ(openFAQ === 4 ? null : 4)}>
                                    <h2>
                                        Do you use Artificial Intelligence in your projects?
                                    </h2>
                                    <div className="faq-background">
                                        <p>{openFAQ === 4 ? "-" : "+"}</p>
                                    </div>
                                </div>
                                <AnimatePresence>
                                    {openFAQ === 4 && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3 }}
                                            style={{ overflow: "hidden" }}
                                        >
                                            <p className="faq-answer">
                                               Yes. I have experience integrating AI into web applications to provide 
                                               intelligent features <br/>such as personalized recommendations, chatbot assistance, 
                                               and automation.
                                            </p>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        </div>
                    </section>

                    <section className="contact">
                        <div className="contact-card">
                            <motion.h1
                                    initial={{
                                        clipPath: "inset(0 0 0 100%)",
                                        opacity: 0
                                    }}
                                    whileInView={{
                                        clipPath: "inset(0 0 0 0)",
                                        opacity: 1
                                    }}
                                    transition={{
                                        duration: 1,
                                        ease: [0.22, 1, 0.36, 1]
                                    }}
                                    viewport={{ once: true }}
                                    >
                                Contact For <br/>Interview
                            </motion.h1>
                            <form onSubmit={handleData}>
                                <fieldset className="contact-field">
                                <label>Your Name</label>
                                <input
                                type="name"
                                name="name"
                                id="name"
                                placeholder="Enter your name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                />
                                </fieldset>

                                <fieldset className="contact-field">
                                <label>Your Email</label>
                                <input
                                type="email"
                                name="email"
                                id="email"
                                placeholder="Enter your email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                />
                                </fieldset>

                                <fieldset className="contact-field">
                                <label>Your Phone</label>
                                <input
                                type="phone"
                                name="phone"
                                id="phone"
                                placeholder="Enter your phone number"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                />
                                </fieldset>

                                <fieldset className="contact-field-message">
                                <label>Your Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    placeholder="Send me a message"
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                />
                                </fieldset>
                                {status.message && (
                                    <p className={`contact-status ${status.type}`}>
                                        {status.message}
                                    </p>
                                )}
                                <input
                                className="contact-submit"
                                type="submit"
                                value="Send Message"
                                />
                            </form>
                        </div>
                    </section>


            </div>
        </section>
        </>
    );
}

export default HomePage;
