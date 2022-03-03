import pic from './profile_pic.png';
import './header.css';
import Typed from 'react-typed';

function HeaderName(props){

      const textLines = [
        props.role1,
        props.role2
      ]
     

    return (
      
    <header>

     <br />
      <div className="p-5 text-center bg-gradient-primary text-white" >


        <h1 className="mb-3"><span style={{'color':"#fdd701"}}>$ </span>Yulin Chen</h1>
        <div className="mb-3"> 
        <a href="https://github.com/yulin-physics" className="fa fa-github"></a>
        <a href="https://uk.linkedin.com/in/yulinphysics" className="fa fa-linkedin"></a>
        </div>
        <h3 className="mb-3">
        <Typed strings={textLines} typeSpeed={60}  backDelay={1100}backSpeed={30} loop />
       </h3>
        <img src={pic} alt="profile" className="avatar"  />
      </div>

    </header>
    )
   
}

export default HeaderName;