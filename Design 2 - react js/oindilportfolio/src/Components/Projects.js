import textDev from './Images/text-og.png'
import weather from './Images/weatherapp-sc.png'
export default function Project() {
  return (
    <>
    <div className="projects" id="projects">
        <p><span>Projects</span></p>
      <div className="projects-container">
        <div className="project-1">
          <div className="thumbnail">
            <img src={textDev} alt="" />
          </div>
          <div className="desc">
            <h3>Text.dev</h3>
            <p>It is a password generator cum text manipulation web app. It is highly effective on generating secure passwords that comes in handy everytime. I use this tool for creating passwords and using those passwords on various websites and apps. Then there's text manipulation feature that can change a text's case and remove extra spaces on click of a button. Go and experience it today.</p>
            <div className="buttons">
              <a href="https://oindil.github.io/textog/" target="_blank" rel="noreferrer"><button>Take a look</button></a>
              <a href="https://github.com/OINDIL/textog" target="_blank" rel="noreferrer"><button>Contribute</button></a>
            </div>
          </div>
        </div>


        <div className="project-2">
          <div className="thumbnail">
            <img src={weather} alt="" />
          </div>
          <div className="desc">
          <h3>Weather App</h3>
            <p>A visually stunning weather web app based on HTML, CSS, and JavaScript. It can show your current location's weather dynamically. Adding functionalities as days pass. It contains some really good background images based on the weather condition. It uses the weatherAPI's forecast api that is highly accurate. You can search for various city's weather or allow the location popup to see your own city's weather.</p>
            <div className="buttons">
              <a href="https://weatheroindil.netlify.app/" target="_blank" rel="noreferrer"><button>Take a look</button></a>
              <a href="https://github.com/OINDIL/weather.dev" target="_blank" rel="noreferrer"><button>Contribute</button></a>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
