import React from "react";
import Check from "../icons_assets/check.png"
function Checked(){
    return(
        <div className="confirm">
            <div>
                <img src={Check} alt="check"/>
                <h1>Your Resevation Has Been confirmed</h1>
              </div>

        </div>
    )
}
export default Checked;