import pic from './profile_pic.png';
import './header.css';
import { Layout, Divider, Avatar, Image } from 'antd';
import { motion } from "framer-motion";
import Typed from 'react-typed';

const { Header } = Layout;

function HeaderName(props){

    const container = {
        hidden: { opacity: 0 },
        show: {
          opacity: 1,
          transition: {
            delay: 6,
           ease: [0.17, 0.67, 0.83, 0.67] 
          }
        }
      }

      const textLines = [
        props.role1,
        props.role2
      ]
     

    return (
      
    <header>

     <br />
      <div class="p-5 text-center bg-gradient-primary text-white" >


        <h1 class="mb-3"><span style={{'color':"#fdd701"}}>$ </span>Yulin Chen</h1>
        <div class="mb-3"> 
        <a href="https://github.com/yulin-physics" class="fa fa-github"></a>
        <a href="https://uk.linkedin.com/in/yulinphysics" class="fa fa-linkedin"></a>
        </div>
        <h3 class="mb-3">
        <Typed strings={textLines} typeSpeed={60}  backDelay={1100}backSpeed={30} loop />
       </h3>
        <img src={pic} alt="profile picture" className="avatar"  />
      </div>

    </header>
    )
   
}

export default HeaderName;