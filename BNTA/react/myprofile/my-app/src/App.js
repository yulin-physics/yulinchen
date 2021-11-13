
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
import java_icon from './resource/java.png';
import python_icon from './resource/python.png';
import postgres_icon from './resource/postgresql.png';
import couch_icon from './resource/couchdb.png';

import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';


function App() {
  return (
    <div data-bs-spy="scroll" data-bs-target="#navbar" data-bs-offset="100"
    tabindex="0">
    
    <NavBar about="#about" projects="#projects"/>

  <Header role1={"Software Developer"} role2={"Physics Graduate"}></Header>


 <Divider />

 
    <About  id="about" />

    <div className="row">
      <div className="col-sm-6" align="center">
      <Card title="Programming Languages" 
       imageSrc1={js_icon} skill1="JavaScipt"
       imageSrc2={java_icon} skill2="Java"
       imageSrc3={python_icon} skill3="Python"
       other="Other web technologies: HTML & CSS"
       framework="Frameworks: REACT" 
       protocol="Protocols: HTTP, REST API" />
      </div>

      <div className="col-sm-6" align="center">
      <Card title="Databases" 
      imageSrc1={postgres_icon} skill1="PostgreSQL"
      imageSrc2={couch_icon} skill2="Apache CounchDB" />
      </div>

      <Divider />

      <section id="projects">
        <div className="container">
          <h1 className="title">Projects</h1>
  
          <VerticalTimeline>
          
          <Project title="Games Site Frontend Project" place="Bright Network" 
          date="July 2021"
          description="Worked in a team of 4 where we had one afternoon and created a games site under time pressure. I made a modified version off flappy bird based off a Youtube tutorial, improved CSS styling, changed JavaScript parameters and added the start button. Our group was the final winner of the hackathon"
          
          imageSrc={flappy_bird}
          
          tag1="HTML"
          tag2="CSS"
          tag3="JavaScript"/>


        
           </ VerticalTimeline>
        </div>
      </section>
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
