import React from 'react'
import './card.css';

const Card = (props) => {
    return (
       <div className="card" styles="width:18rem;">
            <h5 className="card-title">{props.title}</h5>
           <div className="card-body">
                <div class="row align-self-center">
                    <div class="col-sm-6 ">
                    <img src={props.imageSrc} class="rounded img-fluid img-thumbnail" />
                    </div>
                    <div class="col-sm-6 text-center">
                    <h5 className="card-text text-center">{props.skill1}</h5>
                    </div>
                </div>
             
               
               <p className="card-text">{props.text}</p><a href="#" className="btn btn-primary">{props.buttonText}</a>
             
           </div>
       </div>
    )
}

export default Card
