
import './App.css';
import Divider from './divider/Divider';
import Header from './home/Header';
import SideNav from './nav/Nav';
import About from './about/About';
import Project from './project/Project';

function App() {
  return (
    <>
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
    </div>
    </>
  );
}

export default App;
