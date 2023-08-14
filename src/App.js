import './App.css';
import AboutMe from './components/about-me/aboutMe';
import Contact from './components/contact/contact';
import Footer from './components/footer/footer';
import Header from './components/header/header';
import Hobbies from './components/hobbies/hobbies';
import Home from "./components/home/home";
import Projects from './components/projects/projects';
import Skills from './components/skills/skills';
import Trainning from './components/trainning/trainning';
import { Route, Routes } from "react-router-dom";

function App() {
  const handleSubmit = (valores) => {
    console.log("Datos:", valores)
  }
    return (

    <div className="App">
      <Header/>
        <Routes>
          <Route path="/SergiosPortfolio" element={<Home/>} />
          <Route path="/me" element={<AboutMe/>} />
          <Route path="/skills" element={<Skills/>} />
          <Route path="/hobbies" element={<Hobbies/>} />
          <Route path="/trainning" element={<Trainning/>} />
          <Route path="/projects" element={<Projects/>} />
          <Route path="/contact" element={<Contact handleSubmit={handleSubmit}/>} />
        </Routes>
      <Footer/>

    </div>
  );
}

export default App;
