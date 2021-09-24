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
        `Hey there, this page is about me`,
        ':)'
      ]
     

    return (
      
    <header>
     <br />
     <br />
     <br />
     <br />
     <br />
     <br />
     <h2> 
       <Typed strings={textLines} typeSpeed={60}  backDelay={1100}backSpeed={30} loop />
       </h2>

      <br />
     <br />
     <br />
      <div class="p-5 text-center bg-gradient-primary text-white" >

        <motion.div variants={container} initial="hidden" animate="show">
        
        <img src={pic} alt="profile picture" className="avatar"  />

        <h1 class="mb-3">Yulin Chen</h1>
        <Divider style={{'background-color':'#fff',  'box-shadow':'5px 10px #000001'  }}/>
        
        <h3 class="mb-3">{props.role1}</h3>
       </motion.div>
       <br />
       <br />
       <br />
      </div>

    </header>
    )
   
}

export default HeaderName;