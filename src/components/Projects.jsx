import "../styles/Projects.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/Slider.css";

const Projects=()=>{
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: true, // Show navigation arrows
    };
    return(
        <>
            <section className="project">
                <div className="projecth">
                    <span>Project</span>
                </div>
                <div className="slider-container">
                    <Slider {...settings}>
                        <div className=".rimg">
                            <img src="./images/R1.jpg" alt="Slide 1" />
                        </div>
                        <div className=".rimg">
                            <img src="./images/R2.jpg" alt="Slide 2" />
                        </div>
                        <div className=".rimg">
                            <img src="./images/R3.jpg" alt="Slide 3" />
                        </div>
                        <div className=".rimg">
                            <img src="./images/R4.jpg" alt="Slide 4" />
                        </div>
                        <div className=".rimg">
                            <img src="./images/R6.jpg" alt="Slide 5" />
                        </div>
                        <div className=".rimg">
                            <img src="./images/R7.jpg" alt="Slide 6" />
                        </div>
                    </Slider>
                </div>
                <div className="projectdesc">
                    <span>
                    <b> Real Estate Website:</b> Developed a web application for real estate listings, featuring user
                    authentication, property listings and posting, responsive design. Built with React JS, SpringBoot,
                    and MySql
                    </span>
                </div>
                <div>
                    <span></span>
                </div>
            </section>
        </>
    )
}
export default Projects;