import image from "./Images/tech-stack-image.png";
export default function About() {
  return (
    <>
      <div className="about" id="about">
        <p>
          <span>About</span>
        </p>
        <div className="about-container">
          <div className="about-image-skills">
            <p>TECH STACK</p>
          </div>
          <div className="about-skills">
            <h3>Technologies I have experience in</h3>
            <p>
              I have great experience in languages like html, css , javascript ,
              c , java and javascript library such as{" "}
              <span id="react-animation">"react"</span>.I also have familarities
              with version control system like github. I have built many project
              on the web. Those projects can be found in the{" "}
              <span id="project-animation-link">
                <a href="#projects">projects</a>
              </span>{" "}
              section.
            </p>
            <div className="skills-icons">
              <i className="bx bxl-html5"></i>
              <i className="bx bxl-css3"></i>
              <i className="bx bxl-javascript"></i>
              <i className="bx bxl-react"></i>
              <i className="bx bxl-mongodb"></i>
              <i className="bx bxl-java"></i>
              <i className="bx bxl-nodejs"></i>
              <i className="bx bxl-git"></i>
            </div>
          </div>
        </div>
        <div className="hobby-container">
          <div className="about-image-hobby">
            <p>
              <span>PHOTOGRAPHY</span>
            </p>
            <p>As a hobby</p>
          </div>
            <div className="about-hobby">
              <img src={image} alt="" />
              <img src={image} alt="" />
              <img src={image} alt="" />
              <img src={image} alt="" />
              <img src={image} alt="" />
              <img src={image} alt="" />
              <img src={image} alt="" />
            </div>
        </div>
      </div>
    </>
  );
}
