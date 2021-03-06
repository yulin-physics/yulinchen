import "./App.css";
import NavBar from "./nav/Nav";
import Project from "./project/Project";
import Divider from "./divider/Divider";
import Contact from "./contact/Contact";
import Card from "./about/Card";
import Header from "./header/Header";
import flappy_bird from "./resource/flappy_bird.png";
import study_maths from "./resource/study-maths-smarter.png";
import bootcamp from "./resource/bootcamp.png";
import car_rental from "./resource/car-rental.png";
import js_icon from "./resource/java-script.png";
import java_icon from "./resource/java.png";
import python_icon from "./resource/python.png";
import golang_icon from "./resource/golang.png";
import postgres_icon from "./resource/postgresql.png";
import couch_icon from "./resource/couchdb.png";
import mongo_icon from "./resource/mongoDB.png";
import cloud_icon from "./resource/cloud.png";

import { VerticalTimeline } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./theme";
import { createGlobalStyle } from "styled-components";
import React, { useState } from "react";

import Board from "./about/Board";

function App() {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };
  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <>
        <GlobalStyles />
        <div
          data-bs-spy="scroll"
          data-bs-target="#navbar"
          data-bs-offset="100"
          tabIndex="0"
        >
          <NavBar
            about="#about"
            projects="#projects"
            contact="#contact"
            blog="https://dev.to/yulin"
            theme={theme}
            toggleTheme={toggleTheme}
          />

          <Header
            role1={"Software Developer"}
            role2={"Physics Graduate"}
          ></Header>

          <Divider />

          <section id="about" className="stars">
            <div className="container twinkling">
              <div className="clouds">
                <Board title="About Me" />

                <div className="row">
                  <div className="col-sm-6" align="center">
                    <Card
                      title="Programming Languages"
                      imageSrc1={js_icon}
                      skill1="JavaScipt"
                      imageSrc2={java_icon}
                      skill2="Java"
                      imageSrc3={python_icon}
                      skill3="Python"
                      imageSrc4={golang_icon}
                      skill4="Go"
                      other="Other web technologies: HTML & CSS, REACT, REDUX, Spring Boot, REST API, GraphQL, Google Cloud, FileZilla"
                      protocol="Protocols: HTTP, TCP, FTTP"
                    />
                  </div>

                  <div className="col-sm-6" align="center">
                    <Card
                      title="Databases"
                      imageSrc1={postgres_icon}
                      skill1="PostgreSQL"
                      imageSrc2={couch_icon}
                      skill2="Apache CounchDB"
                      imageSrc3={mongo_icon}
                      skill3="MongoDB"
                      imageSrc4={cloud_icon}
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="projects">
            <div className="container">
              <h1 className="title">Projects</h1>

              <VerticalTimeline>
                <Project
                  title="Study Maths Smarter Full Stack Project"
                  link="https://github.com/yulin-physics/bnta-studyMathsSmarter-backend"
                  place="Bright Network"
                  date="October 2021"
                  description="Study Maths Smarter is website where students can take quiz of varied difficulty and find out their strengths and weaknesses. The website then prompts the students to register and save quiz results. I self leanrt redux and basic authentication, successfully implemented the login system and transfer of states on frontend"
                  imageSrc={study_maths}
                  tag1="Java"
                  tag2="REACT"
                  tag3="Spring Boot"
                />

                <Project
                  title="Bootcamp Backend Project"
                  link="https://github.com/yulin-physics/bnta-bootcamp-backend"
                  place="Bright Network"
                  date="September 2021"
                  description="Bootcamp is a website with a collection of categorised live courses, where users can add courses to wishlist and submit feedback"
                  imageSrc={bootcamp}
                  tag1="Java"
                  tag2="Spring Boot"
                  tag3="PostgreSQL"
                />

                <Project
                  title="Car Rental CLI Tool"
                  link="https://github.com/yulin-physics/bnta-car-rental"
                  place="Bright Network"
                  date="August 2021"
                  description="Created a car rental command line management system with tailored options for manager and customers. Managers can add cars, remove cars, check current renting status, users can borrow and return cars"
                  imageSrc={car_rental}
                  tag1="Java"
                  tag2="Spring Boot"
                  tag3="Command Line"
                />

                <Project
                  title="Games Site Frontend Project"
                  link="https://github.com/yulin-physics/bnta-yusobya-flappyBird"
                  place="Bright Network"
                  date="July 2021"
                  description="Worked in a team of 4 where we had one afternoon and created a games site under time pressure. I made a modified version of flappy bird based off a Youtube tutorial, improved CSS styling, changed JavaScript parameters and added the start button. My group was selected as the final winner of the hackathon"
                  imageSrc={flappy_bird}
                  tag1="HTML"
                  tag2="CSS"
                  tag3="JavaScript"
                />
              </VerticalTimeline>
            </div>
          </section>

          <section id="contact">
            <Contact></Contact>
          </section>
        </div>
      </>
    </ThemeProvider>
  );
}

const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }

  body {
    align-items: center;
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    height: 100vh;
    margin: 0;
    padding: 0;
    transition: all 0.25s linear;
  }
  
  h1, h3, h5 {
    color: ${({ theme }) => theme.text};
  }

  header {
    background:${({ theme }) => theme.gradient}; 
    color: ${({ theme }) => theme.text};
  }

  .jumbotron {
    background:${({ theme }) => theme.gradient};  
    color: ${({ theme }) => theme.text};
  }

  #projects {
    background:${({ theme }) => theme.background};  
    color: ${({ theme }) => theme.text};
    overflow-anchor: none;
  }
 
  // .stars {
  //   background: ${({ theme }) => theme.star}; 
  //   z-index:0;
  // }

  .twinkling{
    background: ${({ theme }) => theme.twinkling};
    z-index:1;
    animation:move-twink-back 200s linear infinite;
  }

  // #about div div{
  //   background:${({ theme }) => theme.transparent}; 
  // }

  .vertical-timeline-element-content{
    background:${({ theme }) => theme.timeline};   
  }

  span.vertical-timeline-element-icon{
    background:${({ theme }) => theme.timeline} !important;   
  }

  .card {
    background:${({ theme }) => theme.timeline} !important;   
    color: ${({ theme }) => theme.text} !important; 
  }
  
  `;

export default App;
