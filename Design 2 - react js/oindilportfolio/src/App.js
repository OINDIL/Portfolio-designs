import './App.css';
import About from './Components/About';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import Homepage from './Components/Homepage';
import Navbar from './Components/Navbar';
import Project from './Components/Projects';

function App() {
  return (
    <>
      <Navbar/>
      <Homepage/>
      <About/>
      <Project/>
      {/* <Contact/> */}
      {/* <Footer/> */}
    </>
  );
}

export default App;
