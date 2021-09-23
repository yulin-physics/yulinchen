import pic from './profile_pic.png';
import './header.css';
import { Layout, Divider } from 'antd';
import { motion } from "framer-motion";

const { Header } = Layout;

function HeaderName(props){
    const isTwoRole = props.isTwoRole;

    const container = {
        hidden: { opacity: 0 },
        show: {
          opacity: 1,
          transition: {
            delay: 3,
           ease: [0.17, 0.67, 0.83, 0.67] 
          }
        }
      }

    if (isTwoRole){

        return (
            <Header>

            <h2 className="typewriter">Hi there, this page is about me...</h2>
            <br />
            <img className="round_pic" src={pic} alt="Yulin's profile picture" />
     
            <h1>Yulin Chen</h1>
  
            <h3>{props.role1} | {props.role2}</h3>
 

            </Header>
           
            
        )
    }

    return (
        <Header className="header-background">

        <h2 className="typewriter">Hi there, this page is about me...</h2>
        <br />

        <motion.div
         variants={container}
    initial="hidden"
    animate="show">
        <img className="round_pic" src={pic} alt="Yulin's profile picture" />

        <h1 className="glow">Yulin Chen</h1>
        <Divider style={{'background-color':'#fff',  'box-shadow':'5px 10px #000001'  }}/>
        <h3>{props.role1}</h3>
       </motion.div>
        </Header>
    )
   
}

export default HeaderName;