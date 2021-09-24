
import './App.css';
import NavBar from './nav/Nav';
import About from './about/About';
import Project from './project/Project';
import Divider from './divider/Divider';
import Contact from './contact/Contact';
import { Layout, Card} from 'antd';
import Icon from '@ant-design/icons';
import Header from './header/Header';

import './divider/divider.css'

const { Footer, Content } = Layout;

function App() {
  return (
    <div data-bs-spy="scroll" data-bs-target="#navbar" data-bs-offset="100"
    tabindex="0">
    
    <NavBar />

  <Header role1={"Full Stack Developer"}></Header>


 <Divider />

 
    <About id="about_here" />
  
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
