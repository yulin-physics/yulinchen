import './about.css'
import { Card } from 'antd';


function About(){
    const gridStyle = {
        width: '25%',
        textAlign: 'center',
      };

    return(
        <Card title="FACTS ABOUT ME">
    <Card.Grid style={gridStyle}>graduated from Imperial College London with a MSci Physics degree in Jun 2021</Card.Grid>
    <Card.Grid hoverable={false} style={gridStyle}>
      Studied Japanese for 4 years
    </Card.Grid>
    <Card.Grid style={gridStyle}>Belly Dancing Society President</Card.Grid>
    <Card.Grid style={gridStyle}>Loves cooking and hiking!</Card.Grid>
    <Card.Grid style={gridStyle}>Volunteered as a tutor since lockdown</Card.Grid>
    <Card.Grid style={gridStyle}>Content</Card.Grid>
    <Card.Grid style={gridStyle}>Content</Card.Grid>
  </Card>
        // <div className="about">
        //     <Card title="About Me">Me</Card>
        //     <h3>ABOUT ME</h3>
        //     <p>I graduated from Imperial College London with a physics degree...</p>
        
        // </div>
    )
}

export default About;