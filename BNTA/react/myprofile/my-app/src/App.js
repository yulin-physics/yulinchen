
import './App.css';
import NavBar from './nav/Nav';
import About from './about/About';
import Project from './project/Project';
import Divider from './divider/Divider';
import Contact from './contact/Contact';
import { Layout, Card} from 'antd';
import Icon from '@ant-design/icons';
import Header from './header/Header';
import svg_pic from './divider/divider.svg'
import './divider/divider.css'

const { Footer, Content } = Layout;

function App() {
  return (
    <div data-bs-spy="scroll" data-bs-target="#navbar" data-bs-offset="100"
    tabindex="0">
    
    <NavBar />

  <Header isTwoRole={false} role1={"Software Engineer"}></Header>

  {/* <Card  style={{ width: 240 }} cover={<Divider />} bordered={true}/> */}
  <div class="jumbotron jumbotron-fluid">
  <div class="container">
    <h1 class="display-4">Fluid jumbotron</h1>
    <p class="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
    <img src={svg_pic} /> 
    <object type="image/svg+xml" data={svg_pic} ></object>
    <Divider />
    
  </div>
</div>


 
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
