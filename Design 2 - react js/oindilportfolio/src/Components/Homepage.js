import myImage from "./Images/myimage.jpg";
import CV from "./Documents/OINDIL_GOLDER.pdf"
export default function Homepage() {
  return (
    <>
      <div className="container" id="home">
        <div className="image">
          <img src={myImage} alt="" />
        </div>
        <div className="intro-text">
          <p className="intro-bold">Hi👋there, welcome to my portfolio.</p>
          <p className="intro-2">
            I am <span id="name-animation">Oindil Golder</span>, an aspiring{" "}
            <span id="tech-animation">MERN</span> stack developer. Based in{" "}
            <span id="place-animation">Kolkata</span>.
          </p>
          <div className="contact-info-icons">
            <a href="https://www.linkedin.com/in/oindil-golder" target="_blank" rel="noreferrer">
              <i className="bx bxl-linkedin-square"></i>
            </a>
            <a href="https://www.instagram.com/oindil.golder/" target="_blank" rel="noreferrer">
              <i className="bx bxl-instagram-alt"></i>
            </a>
            <a href="https://github.com/oindil" target="_blank" rel="noreferrer">
              <i className="bx bxl-github"></i>
            </a>
            <a title="View CV" href={CV} target="_blank" rel="noreferrer">
              <i class='bx bxs-file-pdf'></i>
            </a>
          </div>
        </div>
      </div>
      <div className="scroll-wheel">
        <i className="bx bx-mouse"></i>
        <a href="#about">
          <p>scroll for more</p>
        </a>
      </div>
    </>
  );
}
