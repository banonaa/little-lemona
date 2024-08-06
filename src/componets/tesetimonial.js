
import React from "react";
import Per from "../review"
function Testimonial(){
    return(
                    <section  className="testimonial">
                    <h2>Review from our custmors</h2>
                    
                     <div className="cards">
                    {
                    Per.map(Per=>
                        <div key={Per.id} className="cardreview">
                            <img src={Per.image} alt=" l"/>
                           <div className="content">
                            <div className="head">
                            <h4>{Per.name}</h4>
                            <p>{Per.review}</p>
                            </div>
              
                        </div> </div>    
                    )       
                    
                    }   
                        </div> 
        
        
                </section>
            )}
        
export default Testimonial;