import React from "react";
import Icon from "C:/Users/rbany/firstapp/src/icons_assets/🦆 icon _hamburger menu.svg"
import Image from "C:/Users/rbany/firstapp/src/icons_assets/Logo.svg";

function Header(){
        return(
               <div> 
                <nav className='navbar'>
                        <div><img src={Image} alt="logo"></img></div>
                        <div className="navicon">
                                <img src={Icon} alt="nav_icon"/>
                        </div>
                        <ul className="navlink">
                                <li><a href="\Pages\home.js">home</a></li>
                                <li><a href="\Pages\inProgresses.js">about</a></li>
                                <li><a href="\Pages\inProgresses.js">order online</a></li>
                                <li><a href="\Pages\booking.js">resrvation</a></li>
                                <li><a href="\Pages\inProgresses.js">login</a></li>
                                <li><a href="\Pages\inProgresses.js">menu</a></li>
                        </ul>
                </nav>
                </div>      
                        
        
        
        );


}

                
        



export default Header;