
import './App.css';
import NavBar from './nav/Nav';
import About from './about/About';
import Project from './project/Project';
import Divider from './divider/Divider';
import Contact from './contact/Contact';
import Card from './about/Card';
import Header from './header/Header';
import flappy_bird from './resource/flappy_bird.png';
import study_maths from './resource/study-maths-smarter.png';
import bootcamp from './resource/bootcamp.png';
import car_rental from './resource/car-rental.png';
import js_icon from './resource/java-script.png';
import java_icon from './resource/java.png';
import python_icon from './resource/python.png';
import golang_icon from './resource/golang.png';
import postgres_icon from './resource/postgresql.png';
import couch_icon from './resource/couchdb.png';

import { VerticalTimeline}  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';


function App() {
  return (
    <div data-bs-spy="scroll" data-bs-target="#navbar" data-bs-offset="100"
    tabindex="0">
    
    <NavBar about="#about" projects="#projects" contact="#contact" blog="https://spinningtop862693762.wordpress.com/blog/"/>

  <Header role1={"Software Developer"} role2={"Physics Graduate"}></Header>


 <Divider />

    <section id="about" >
    <div className="container">
    <About />

    <div className="row">
      <div className="col-sm-6" align="center">
      <Card title="Programming Languages" 
       imageSrc1={js_icon} skill1="JavaScipt"
       imageSrc2={java_icon} skill2="Java"
       imageSrc3={python_icon} skill3="Python"
       imageSrc4={golang_icon} skill4="Go"
       other="Other web technologies: HTML & CSS, REACT, REDUX, Spring Boot"
       protocol="Protocols: HTTP, REST API, GraphQL" />
      </div>

      <div className="col-sm-6" align="center">
      <Card title="Databases" 
      imageSrc1={postgres_icon} skill1="PostgreSQL"
      imageSrc2={couch_icon} skill2="Apache CounchDB" />
      </div>
    </div>
    </div>
    </section>

    <Divider />
    
      <section id="projects">
        <div className="container">
          <h1 className="title">Projects</h1>
  
          <VerticalTimeline>


          <Project title="Study Maths Smarter Full Stack Project" place="Bright Network" 
          date="October 2021"
          description="Study Maths Smarter is website where students can take quiz of varied difficulty and find out their strengths and weaknesses. The website then prompts the students to register and save quiz results. I self leanrt basic authentication and successfully implemented the login system"

          imageSrc={study_maths}
          
          tag1="Java"
          tag2="REACT"
          tag3="Spring Boot"/>

          <Project title="Bootcamp Backend Project" place="Bright Network" 
          date="September 2021"
          description="Bootcamp is a website with a collection of categorised live courses, where users can add courses to wishlist and submit feedback"
          
          imageSrc={bootcamp}

          tag1="Java"
          tag2="Spring Boot"
          tag3="PostgreSQL"/>
          
          <Project title="Car Rental CLI Tool" place="Bright Network" 
          date="August 2021"
          description="Created a car rental command line management system with tailored options for manager and customers. Managers can add cars, remove cars, check current renting status, users can borrow and return cars"
          
          imageSrc={car_rental}
          
          tag1="Java"
          tag2="Spring Boot"
          tag3="Command Line"/>
          
          <Project title="Games Site Frontend Project" place="Bright Network" 
          date="July 2021"
          description="Worked in a team of 4 where we had one afternoon and created a games site under time pressure. I made a modified version of flappy bird based off a Youtube tutorial, improved CSS styling, changed JavaScript parameters and added the start button. My group was selected as the final winner of the hackathon"
          
          imageSrc={flappy_bird}
          
          tag1="HTML"
          tag2="CSS"
          tag3="JavaScript"/>
        
           </ VerticalTimeline>
        </div>
      </section>

    <section id="contact">
    <Contact></Contact>
   </section> 
   

    </div>
  );
}

export default App;
