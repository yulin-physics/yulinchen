import pic from './profile_pic.png';
import './header.css';

function Header(props){
    const isTwoRole = props.isTwoRole;
    if (isTwoRole){

        return (
            <div>
            <h2 className="typewriter">Hi there, this page is about me...</h2>
            <br />
            <img className="round_pic" src={pic} alt="Yulin's profile picture" />
            <div className="text-box">
            <h1>Yulin Chen</h1>
            </div>
            <h3>{props.role1} | {props.role2}</h3>
    
            </div>
            
        )
    }

    return (
        <div>
        <h2 className="typewriter">Hi there, this page is about me...</h2>
        <br />
        <img className="round_pic" src={pic} alt="Yulin's profile picture" />
        <div className="text-box">
        <h1>Yulin Chen</h1>
        </div>
        <h3>{props.role1}</h3>

        </div>
        
    )
   
}

export default Header;