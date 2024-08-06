import {React,useState} from "react";
import Icon from "C:/Users/rbany/firstapp/src/icons_assets/🦆 icon _hamburger menu.svg"
import Image from "C:/Users/rbany/firstapp/src/icons_assets/Logo.svg";
import {Link} from 'react-router-dom'
function Header(){
           const[sidbarOpen,setSidebaOpenr]=useState(false);
           const toggleSidebar=()=>{
                setSidebaOpenr(!sidbarOpen);
           }
        return(
               <> 
                <nav className={`navbar ${sidbarOpen? "Open":""}`}>
                <div><img src={Image} alt="logo"></img></div>
                        <div className="navicon" onClick={toggleSidebar} >
                                <img src={Icon} alt="nav_icon"/>
                   
                        </div>
                        <ul className={`navlink ${sidbarOpen?"visible":""}`}>
                                <li><Link to="/" >Home</Link></li>
                                <li><Link to="/inprogress">About</Link></li>
                                <li><Link to="/inprogress">order online</Link></li>
                                <li><Link to='\booking'>resrvation</Link></li>
                                <li><Link to="/inprogress">login</Link></li>
                                <li><Link to="/inprogress">menu</Link></li>
                        </ul>
                </nav>
                </>    
                      
        
        
        );


}

                
        



export default Header;