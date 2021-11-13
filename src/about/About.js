import './about.css'
import { Card } from 'antd';


function About(props){
    const gridStyle = {
        width: '33.3333%',
        textAlign: 'center',
      };

    return(
        <Card id={props.id} title="FACTS ABOUT ME" className="card-title" style={{ backgroundColor: '#aaaaaa' }}>
    <Card.Grid hoverable={false} style={gridStyle}>Imperial College London MSci Physics degree</Card.Grid>
    <Card.Grid style={gridStyle}>Took Japanese evening classes for 4 years</Card.Grid>
    <Card.Grid style={gridStyle}>Belly Dancing Society President</Card.Grid>
    <Card.Grid style={gridStyle}>Performed in Dance Imperial Shows</Card.Grid>
    <Card.Grid style={gridStyle}>Volunteered as a tutor since lockdown</Card.Grid>
    <Card.Grid style={gridStyle}>Volunteered with Teddy Bear Hospital</Card.Grid>
    <Card.Grid style={gridStyle}>Wrote EPQ on wormholes</Card.Grid>
    <Card.Grid style={gridStyle}>Completed Duke of Edinburgh Bronze and Silver Award</Card.Grid>
    <Card.Grid style={gridStyle}>Founder of 93% Club Imperial</Card.Grid>
  </Card>

    )
}

export default About;