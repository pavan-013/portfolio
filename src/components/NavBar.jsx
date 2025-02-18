import { useState ,useRef,useEffect} from "react";
import Homepage from "./Homepage";
import About from "./About";
import Resume from "./Resume";
import Projects from "./Projects";
import Contact from "./Contact";
import  "../styles/NavBar.css";


const NavBar=()=>{
    const [activeButton, setActiveButton] = useState("btn1");
    const homeRef = useRef(null);
    const aboutRef = useRef(null);
    const resumeRef = useRef(null);
    const projectsRef = useRef(null);
    const contactRef = useRef(null);

    const sectionRefs = {
        btn1: homeRef,
        btn2: aboutRef,
        btn3: resumeRef,
        btn4: projectsRef,
        btn6: contactRef,
    };
    
    useEffect(() => { 
        homeRef.current?.scrollIntoView({ behavior: "smooth" });
        const handleScroll = () => {
            let currentSection = "btn1"; 

            Object.entries(sectionRefs).forEach(([key, ref]) => {
                if (ref.current) {
                    const { top } = ref.current.getBoundingClientRect();
                    if (top <= window.innerHeight / 3) {
                        currentSection = key;
                    }
                }
            });

            setActiveButton(currentSection);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleButtonClick = (btn) => {
        setActiveButton(btn);
        sectionRefs[btn]?.current?.scrollIntoView({ behavior: "smooth" });
    };

    return(
        <>
            <nav id="navbarforp">
                <div>
                    <button className={activeButton==="btn1"  ? "btnactive" :"iconbutton" }
                            onClick={() => handleButtonClick("btn1")}>
                        <img src="./images/home.svg" alt="error" />
                    </button>
                    <button className={activeButton==="btn2"  ? "btnactive" : "iconbutton"}
                            onClick={() => handleButtonClick("btn2")}>
                        <img src="./images/profile.svg" alt="error" />
                    </button >
                    <button className={activeButton==="btn3"  ? "btnactive" : "iconbutton"}
                            onClick={() => handleButtonClick("btn3")}>
                        <img src="./images/file.svg" alt="error" />                       
                    </button>
                    <button className={activeButton==="btn4"  ? "btnactive" : "iconbutton"}
                            onClick={() => handleButtonClick("btn4")}>
                        <img src="./images/projects.svg" alt="error" />                      
                    </button>
                    {/* <button className={activeButton==="btn5"  ? "btnactive" : "iconbutton"}
                            onClick={() => handleButtonClick("btn5")}>
                        <img src="./images/service.svg" alt="error" />
                    </button> */}
                    <button className={activeButton==="btn6"  ? "btnactive" : "iconbutton"}
                            onClick={() => handleButtonClick("btn6")}>
                        <img src="./images/mail.svg" alt="error" />
                    </button>
                </div>
            </nav> 
            
            <div ref={homeRef}><Homepage /></div>
            <div ref={aboutRef}><About /></div>
            <div ref={resumeRef}><Resume /></div>
            <div ref={projectsRef}><Projects /></div>
            <div ref={contactRef}><Contact /></div>
        </>
    )
}
export default NavBar;