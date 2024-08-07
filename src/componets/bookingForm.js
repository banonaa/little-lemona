import React from "react";
import { useState } from "react";
function Bookingform(props){
    const[date,setDate]=useState("");
    const[time,setTime]=useState("");
    const[occasion,setOccasion]=useState("");
    const[guest,setGuest]=useState("");
    const handleChange=(e)=>{
        setDate(e);
         props.dispatch(e); 
     }
     const handleSubmit=(e)=>{
        e.preventDefault();
        props.submitForm(e);
        console.log("Form Submitted");
     }
    return(
        <div className="forma">
        <h1>Booking a Table</h1>
        
        <form onSubmit={handleSubmit}>
          <fieldset>
            
                <div >
                    <label htmlFor="res_date">Choose a Date :</label>
                    <input type="date" value={date} onChange={(e)=>handleChange(e.target.value)} id="res_date" required/>
                   
                    <label htmlFor="res_time">Choose a Time :</label>
                    <select id="res_time" value={time} onChange={(e)=>setTime(e.target.value)} placeholder="....." required>
                        {
                            props.availableTime.availableTime.map(availableTime =>{
                                return <option key={availableTime}>{availableTime}</option>
                            })
                        }
                    </select>
                    <label htmlFor="guest">Number oF Guests :</label>
                    <input type="number" id="guest" placeholder="1" min={1} max={10} value={guest} onChange={(e)=>{setGuest(e.target.value)}} required/>


                    <label htmlFor="occasion">what's the occasion ?</label>
                    <select placeholder="....." id="occasion" value={occasion} key={occasion} onChange={(e)=>setOccasion(e.target.value)} required>
                    <option>Birthday</option>
                    <option>Anniversary</option>
                    </select>

            
                </div>
                <input  className="btn" aria-label="On Click" type="submit" value={"Make Your Resevation"}/>
            </fieldset>
        </form></div>
    )
}
export default Bookingform;