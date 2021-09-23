import './project.css';

function Project(props){
    return(
    <div className="project">
        <h3>{props.title}</h3>
        <div className="project-text-wrapper">
         {props.text}
        </div>
    </div>)
}

export default Project;