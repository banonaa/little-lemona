import React from "react";
import Check from "../icons_assets/check.png"
function Checked(){
    return(
        <div className="confirm">
            <div>
                <img src={Check} alt="check"/>
                <h1>Your Resevation Has Been confirmed</h1>

              </div>
              <div className="click">
              <a href="/"><button aria-label="On Click">Go Home</button></a>
              <a href="/booking"><button aria-label="On Click">Reseve Agein</button></a>
              </div>
        </div>
    )
}
export default Checked;