import React from 'react'
import './card.css';

const Card = (props) => {
    return (
       <div className="card" styles="width:18rem;">
            <h5 className="card-title">{props.title}</h5>
           <div className="card-body">
               
                <div class="row align-items-center row-custom">
                    <div class="col-sm-6">
                    <img src={props.imageSrc1} class="rounded img-fluid img-responsive " />
                    </div>
                    <div class="col-sm-6 text-center">
                    <h5 className="card-text">{props.skill1}</h5>
                    </div>
                </div>
             
                <div class="row align-items-center row-custom">
                    <div class="col col-sm-6 ">
                    <img src={props.imageSrc2} class="rounded img-fluid img-responsive " />
                    </div>
                    <div class="col-sm-auto text-center">
                    <h5 className="card-text text-center">{props.skill2}</h5>
                    </div>
                </div>

                <div class="row align-items-center row-custom">
                    <div class="col col-sm-6 ">
                    <img src={props.imageSrc3} class="rounded img-fluid img-responsive " />
                    </div>
                    <div class="col-sm-auto text-center">
                    <h5 className="card-text text-center">{props.skill3}</h5>
                    </div>
                </div>

                
                <div class="row align-items-center row-custom">
                    <div class="col-sm-auto text-center">
                   {props.other}
                    </div>
                </div>

                <div class="row align-items-center row-custom">
                    <div class="col-sm-auto text-center">
                   {props.framework}
                    </div>
                </div>

                <div class="row align-items-center row-custom">
                    <div class="col-sm-auto text-center">
                   {props.protocol}
                    </div>
                </div>
             
           </div>
       </div>
    )
}

export default Card
