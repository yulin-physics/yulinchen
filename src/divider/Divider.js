import "./divider.css";
import svg_pic from "./divider.svg";

function Divider() {
  return (
    <div className="jumbotron text-center jumbotron-custom">
      <div className="container">
        <h1 className="blink">Hi there! </h1>
        <h1 className="blink">Scroll down :)</h1>
        <object type="image/svg+xml" data={svg_pic}></object>
      </div>
    </div>
  );
}

export default Divider;
