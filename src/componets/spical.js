
import React from "react";
import Dish from "../dishes"
function spical(){
    return(
        <section  className="special">
            <div className="spical-title">
                <h1>This week special</h1>
                <button>online menu</button>
            </div>
            
             <div className="cards">
            {
            Dish.map(Dish=>
                <div key={Dish.id} className="card">
                    <img src={Dish.image} alt=""/>
                   <div className="content">
                    <div className="head">
                    <h4>{Dish.title}</h4>
                    <p>{Dish.price}</p>
                    </div>
                    <p>{Dish.description}</p>
                    <button>Order Now</button>
</div>
                </div>
            )        
                    
            }    
                </div> 


        </section>
    )
}

export default spical;
