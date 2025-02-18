import "../styles/Resume.css";

const Resume=()=>{
    return(
        <>
            <section className="resume">
                <div className="reH">
                    <span>Resume</span>
                    <p>Seeking a dynamic role where I can apply my technical skills to build innovative, scalable solutions.
                    Passionate about continuous learning and collaboration, I aim to grow as a developer while contributing
                    to the organization's success.</p>
                </div>
                <div className="experience">
                    <span className="exp"> Experience</span>
                    <div className="intern">
                        <p> Worked as <b>Java FullStack Developer Intern at Ai Variant</b></p>                                                  
                        <p>Jul 2024-Oct 2024</p>
                    </div>
                    <ul>
                        <li> Developed and tested full-stack applications using Java, SpringBoot, and front-end technologies
                            including HTML5, CSS3, and ReactJS.
                        </li>
                        <br />
                        <li>Collaborated with a team to design, develop, and deploy a web application, enhancing user
                            engagement and accessibility.
                        </li>
                        <br />
                        <li>Gained hands-on experience in implementing RESTful APIs and integrating front-end with back
                            end databases.
                        </li>
                    </ul>
                </div>
                <div className="ed">
                    <div className="degree">
                        <span className="degreeh">Education</span>
                        <p>BACHELOR IN COMPUTER SCIENCE</p>
                        <p>CGPA: 7.93</p>
                        <p>Batch:<span>2020-2023</span></p>
                        <p>Goverment Degree College(A),Siddipet.</p>
                    </div>
                    <div className="crtftn">
                        <span className="certi">certification</span>
                        <ul>
                            <li> Programming Foundations with Javascript,Html and css (coursera)</li>
                            <br />
                            <li> FullStack Java Developer (ExcelR)</li>
                        </ul>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Resume;