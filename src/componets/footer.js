import React from "react";
import Logo from "../icons_assets/Logo.svg"
import{ Link }from 'react-router-dom';
function Footer(){
        return(
                <div className="foot">
                     <img src={Logo} alt="logo"/>
                        <nav>
                        <ul>
                                <li><Link to="/" >Home</Link></li>
                                <li><Link to="/inprogress">About</Link></li>
                                <li><Link to="/inprogress">order online</Link></li>
                                <li><Link to='\booking'>resrvation</Link></li>
                                <li><Link to="/inprogress">login</Link></li>
                                <li><Link to="/inprogress">menu</Link></li>
                        </ul>
                        </nav>
                        <div> 
                                <h4>Contact Us</h4>
                                <address>
                                        <p>43 E Ohio St, Chicago, IL 60611</p>
                                        <p>(012) 345-6789</p>
                                        <p>hello@littlelemon.com</p>
                                </address>

                        </div>
                       
                      </div>

        );
}


export default Footer;