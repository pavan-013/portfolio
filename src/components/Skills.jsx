import "../styles/Skills.css"

const Skills=()=>{

    return(
        <>
            <section className="skills">
                <div className="skillH">
                    <span>Skills</span>
                </div>
                <div className="simgs"> 
                    <div className="java"><img className="simg" src="./images/javaicon.png" alt="error" /></div>
                    <div className="spring"><img className="simg" src="./images/springbooticon.png" alt="error" /></div>
                    <div className="html"><img className="simg" src="./images/htmlicon.png" alt="error" /></div>
                    <div className="css"><img className="simg" src="./images/cssicon.svg" alt="error" /></div>
                    <div className="js"><img className="simg" src="./images/javascripticon.svg" alt="error" /></div>
                </div>
                <div className="simgs">
                    <div className="react"><img className="simg" src="./images/reactjs.svg" alt="error" /></div>
                    <div className="bootstrap"><img className="simg" src="./images/bootstrap.svg" alt="error" /></div>
                    <div className="mysql"><img className="simg" src="./images/mysql.svg" alt="error" /></div>
                    <div className="mongo"><img className="simg" src="./images/mongodb.svg" alt="error" /></div>
                    <div className="mongo"><img className="simg" src="./images/git.svg" alt="error" /></div>
                </div>
                <div className="tools">
                        <span><b>IDE's:</b></span>
                        <span>Sts4</span>
                        <span>Intellij</span>
                        <span>VsCode</span>
                </div>
            </section>
        </>
    )
}
export default Skills;