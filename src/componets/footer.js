import React from "react";
import Logo from "../icons_assets/Logo.svg"
function Footer(){
        return(
                <div className="foot">
                     <img src={Logo} alt="logo"/>
                        <nav>
                        <ul>
                                <li><a href="/">home</a></li>
                                <li><a href="/">about</a></li>
                                <li><a href="\">order online</a></li>
                                <li><a href="\">resrvation</a></li>
                                <li><a href="\">login</a></li>
                                <li><a href="\">menu</a></li>
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