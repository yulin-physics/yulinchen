import './divider.css';
import svg_pic from './divider.svg';

function Divider(){
    return(
        <div class="jumbotron text-center jumbotron-custom" >
        <div class="container">
      
        <h1 className="blink">Scroll Down </h1>
        <object type="image/svg+xml" data={svg_pic} ></object>
          
        </div>
      </div>


    )
}

export default Divider;