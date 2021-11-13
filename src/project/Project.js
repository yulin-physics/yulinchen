import './project.css';

import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

function Project(props){
    return(
      
            <VerticalTimelineElement
              className="vertical-timeline-element"
              date={props.date}
              dateClassName="vertical-timeline-element-date-custom"
              iconStyle={{ background: "#f0e9dc"}}
            >
              <h3 className="vertical-timeline-element-title">
                {props.title}
              </h3>
              <h4 className="vertical-timeline-element-subtitle">{props.place}</h4>
              <p>{props.description}</p>
              <img src={props.imageSrc} className="timeline-img"/>
              <p>
                <span className="button is-rounded is-small is-static">{props.tag1}</span>{" "}
                <span className="button is-rounded is-small is-static">{props.tag2}</span>{" "}
                <span className="button is-rounded is-small is-static">{props.tag3}</span>{" "}
              </p>
              <br />
            
            </VerticalTimelineElement>
         

    )
}

export default Project;