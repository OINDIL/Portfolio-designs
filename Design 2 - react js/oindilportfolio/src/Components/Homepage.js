import myImage from "./Images/myimage.jpg";
export default function Homepage() {
  return (
    <>
      <div className="container" id="home">
        <div className="image">
          <img src={myImage} alt="" />
        </div>
        <div className="intro-text">
          <p className="intro-bold">Hi👋visitor, welcome to my portfolio.</p>
          <p className="intro-2">
            I am <span id="name-animation">Oindil Golder</span>, an aspiring{" "}
            <span id="tech-animation">MERN</span> stack developer. Based in{" "}
            <span id="place-animation">Kolkata</span>.
          </p>
          <div className="contact-info-icons">
            <a href="" target="_blank">
              <i className="bx bxl-linkedin-square"></i>
            </a>
            <a href="" target="_blank">
              <i className="bx bxl-instagram-alt"></i>
            </a>
            <a href="" target="_blank">
              <i className="bx bxl-github"></i>
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
