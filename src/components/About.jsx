import "../styles/About.css";
import Skills from "./Skills.jsx"

const About=()=>{
    return(
        <>
            <section className="about">
                <div className="headingforabout">
                    <span>About</span> 
                </div>
                <div className="aboutinfo">
                        <span>Hey there! I'm Pavankumar, a Java Fullstack Developer who loves building
                            dynamic web applications. I work with Java, Spring Boot, React.js, and 
                            modern web tech to create seamless user experiences and efficient backends.
                            I enjoy problem-solving, writing clean code, and constantly 
                            learning—especially about AI and full-stack development.</span>
                    </div>
                <div className="pandli">
                    <div className="myphto">
                        <div className="myimage">
                            <img src="./images/myphto.jpg" alt="error" />
                        </div>
                    </div>
                    <div className="myinfo">
                        <div className="ht">FullStack Developer & Web Developer</div>
                        <ul>
                            <li><span className="listsp">Email:</span>pavanchikoti1310@gmail.com</li>
                            <br></br>
                            <li><span className="listsp">Phone No:</span>+91 9502367121</li>
                            <br></br>
                            <li><span className="listsp">City:</span>Siddipet,Telangana,India</li>
                            <br></br>
                            <li><span className="listsp">Freelance:</span>Available</li>
                        </ul>
                        <a className="Rpdf" href="./images/pavankumar-R.pdf" download={"Pavankumar_Resume.pdf"}>
                            <button className="Rbtn">
                                <svg strokeLinejoin="round" strokeLinecap="round" fill="none" stroke="currentColor"
                                    strokeWidth="1.5" viewBox="0 0 24 24" height="40" width="40" className="button__icon" xmlns="http://www.w3.org/2000/svg">
                                    <path fill="none" d="M0 0h24v24H0z" stroke="none"></path>
                                    <path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2"></path>
                                    <path d="M7 11l5 5l5 -5"></path>
                                    <path d="M12 4l0 12"></path>
                                </svg>
                                <span className="button__text">My Resume</span>
                            </button>
                        </a>
                    </div>
                    
                </div>
            </section>
            <div>
                <Skills></Skills>
            </div>
        </>
    )
}
export default About;