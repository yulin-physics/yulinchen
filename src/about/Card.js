import React from 'react'
import './card.css';

const Card = (props) => {
    return (
       <div className="card" styles="width:18rem;">
            <h5 className="card-title">{props.title}</h5>
           <div className="card-body">
               
                <div className="row align-items-center row-custom">
                    <div className="col-sm-6">
                    <img alt="tech stack one" src={props.imageSrc1} className="rounded img-fluid img-responsive " />
                    </div>
                    <div className="col-sm-6 text-center">
                    <h5 className="card-text">{props.skill1}</h5>
                    </div>
                </div>
             
                <div className="row align-items-center row-custom">
                    <div className="col col-sm-6 ">
                    <img alt="tech stack two" src={props.imageSrc2} className="rounded img-fluid img-responsive " />
                    </div>
                    <div className="col-sm-auto text-center">
                    <h5 className="card-text text-center">{props.skill2}</h5>
                    </div>
                </div>

                <div className="row align-items-center row-custom">
                    <div className="col col-sm-6 ">
                    <img alt="tech stack three" src={props.imageSrc3} className="rounded img-fluid img-responsive " />
                    </div>
                    <div className="col-sm-auto text-center">
                    <h5 className="card-text text-center">{props.skill3}</h5>
                    </div>
                </div>

                <div className="row align-items-center row-custom">
                    <div className="col col-sm-6 ">
                    <img alt="tech stack four" src={props.imageSrc4} className="rounded img-fluid img-responsive " />
                    </div>
                    <div className="col-sm-auto text-center">
                    <h5 className="card-text text-center">{props.skill4}</h5>
                    </div>
                </div>
                
                <div className="row align-items-center row-custom">
                    <div className="col-sm-auto text-center">
                   {props.other}
                    </div>
                </div>

                <div className="row align-items-center row-custom">
                    <div className="col-sm-auto text-center">
                   {props.framework}
                    </div>
                </div>

                <div className="row align-items-center row-custom">
                    <div className="col-sm-auto text-center">
                   {props.protocol}
                    </div>
                </div>
             
           </div>
       </div>
    )
}

export default Card
