
import './App.css';
import NavBar from './nav/Nav';
import About from './about/About';
import Project from './project/Project';
import Divider from './divider/Divider';
import Contact from './contact/Contact';
import Card from './about/Card';
import Header from './header/Header';
import flappy_bird from './resource/flappy_bird.png';
import js_icon from './resource/java-script.png';


function App() {
  return (
    <div data-bs-spy="scroll" data-bs-target="#navbar" data-bs-offset="100"
    tabindex="0">
    
    <NavBar about="#about"/>

  <Header role1={"Full Stack Developer"}></Header>


 <Divider />

 
    <About  id="about" />

    <div className="row">
      <div className="col-sm-6" align="center">
      <Card title="Technical Skills" 
       imageSrc={js_icon} skill1="JavaScipt"/>
      </div>
      <div className="col-sm-6" align="center">
      <Card title="Hobbies" />
      </div>
    </div>
    
   
  
{/* 
    <div>
      <header className="App-header">
        <p>
          <Header role1='Software Engineer'/>
        </p>
      </header>
      <SideNav about="#about_here" projects="#project_here"/>
    
    </div>
    <Divider />
    <div id="about_here">
        <About />
    </div>
    <Divider />
    <div id="project_here">
        <Project title="Java CLI Car Rental Project" 
        text="I was in a team of three and created a command line tool for car rental and car management. The data was saved onto a PostgreSQL database as well as a csv file. " />
    </div> */}
    </div>
  );
}

export default App;
