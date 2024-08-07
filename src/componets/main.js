import React, { useReducer } from "react";
import { Route,Routes,useNavigate } from 'react-router-dom';
import Home from "../pages/home";
import Booking from "../pages/booking";
import Progresses from "../pages/inProgreses";
import Checked from "./checked";
function Main(){
    const seedRandom=function(seed){
        var m=2**23-31;
        var a=185852;
        var s=seed % m;
        return function(){
            return(s=s*a%m)/m;
        }
    
    }
    const fetchAPI=function(date){
let result=[];
let random=seedRandom(date.getDate());
for(let i=17; i<23;i++){
    if(random()<0.5){
        result.push(i +':00');
    }if(random()>0.5){
        result.push(i +':30');
    }
}
return result;
    }
    const submitAPI=function(formData){
        return true;
    }
 const initialState={availableTime: fetchAPI(new Date())} ;  
const [state,dispatch]=useReducer(updateTime,initialState);
function updateTime(state,date){
    return {availableTime: fetchAPI(new Date())};
}
const navigate=useNavigate();
function submitForm(formData){
    if(submitAPI(formData)){
        navigate("/checked");
    }

}
    return(
<main>
<Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/checked' element={<Checked/>}/>
    <Route path='/booking' element={<Booking availableTime={state} dispatch={dispatch} submitForm={submitForm}/>}/>
    <Route path='/inprogress' element={<Progresses/>}/>
  </Routes>
</main>





    )
}
export default Main;