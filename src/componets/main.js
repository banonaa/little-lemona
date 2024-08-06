import React from "react"
import Dish1 from "c:/Users/rbany/firstapp/src/icons_assets/greek salad.jpg"
import Dish2 from "c:/Users/rbany/firstapp/src/icons_assets/bruchetta.svg"
import Dish3 from "c:/Users/rbany/firstapp/src/icons_assets/lemon dessert.jpg"
import Per1 from "../icons_assets/per1.jpg"
import Per2 from "../icons_assets/per2.jpg"
import Per3 from "../icons_assets/per3.jpeg"
import Per4 from "../icons_assets/per4.jpg"
import  A from "../icons_assets/Mario and Adrian A.jpg"
import B from "../icons_assets/Mario and Adrian b.jpg" 
import Booking from "c:/Users/rbany/firstapp/src/componets/booking"
import Hero from "c:/Users/rbany/firstapp/src/icons_assets/restauranfood.jpg"
function Main(){
    return(
        <main>
            <div className="hero" >
            <section  >
                <div  >
                    
                        <h2>Little Lemon</h2>
                        <h3>Chicago</h3>
                        <p>We are a family owned Mediterranean restaurant,
                             focused on traditional recipes served with a modern twist</p>
                            <a href={Booking}><button aria-label="on click" >Reserve a Table</button>  </a>              
                    
                </div>
                <div className="heroimg">
                <img src={Hero} alt="hero section"/>
                </div>
            </section>
              </div>
              
            <section  className="special">
                <div>
                    <div className="spical-title">
                        <h1>This week special</h1>
                        <button>online menu</button>
                    </div>
                    <div className="menu-card">
                        <div className="cardbox">
                            <div className="photo">
                                <img src={Dish1} alt="Greek salad"/>
                            </div>
                            <div className="descrp">
                            <div className="titlecard">
                               <h4>Greek salad</h4> 
                               <h5>$ 12.50</h5>

                            </div>
                            <p>
                            The famous greek salad of crispy lettuce, peppers, 
                            olives and our Chicago style feta cheese,
                             garnished with crunchy garlic and rosemary croutons.
                            </p>
                            <div className="delivery">
                                <button>order a delivery</button>
                            </div>
                            </div>
                        </div>
                        <div className="cardbox">
                        <div className="photo">
                        <img src={Dish2} alt="Bruchetta"/>

                        </div>
                            <div className="descrp">
                            <div className="titlecard">
                               <h4>Bruchetta</h4> 
                               <h5>$ 9.50</h5>

                            </div>
                            <p>
                            Our Bruschetta is made from grilled bread that
                             has been smeared with garlic 
                             and seasoned with salt and olive oil.
                            </p>
                            <div className="delivery">
                                <button>order a delivery</button>
                            </div>
                            </div>
                        </div>
                        <div className="cardbox">
                        <div className="photo">
                        <img src={Dish3} alt="Lemon Desert"/>
                        </div>
                            <div className="descrp">
                            <div className="titlecard">
                               <h4>Lemon Dessert</h4> 
                               <h5>$ 4.50</h5>

                            </div>
                            <p>
                            This comes straight from grandma’s recipe book,
                             every last ingredient has been sourced 
                             and is as authentic as can be imagined.
                            </p>
                            <div className="delivery">
                                <button>order a delivery</button>
                            </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
            <section className="testimonial">
                <div className="testimonialcard">
                    <h2> Review from our custmors</h2>
                    <article>
                        <img src={Per1} alt="person 1"/>
                        <h4>lucy lu</h4>
                        <blockquote>
                            <p>
                                "that was the best restaurant i ever went to"
                            </p>
                        </blockquote>
                    </article>
                    <article>
                    <img src={Per2} alt="person 2"/>
                        <h4>lucy lu</h4>
                        <blockquote>
                            <p>
                                "that was the best restaurant i ever went to"
                            </p>
                        </blockquote>
                    </article>
                    <article>
                    <img src={Per3} alt="person 3"/>
                        <h4>lucy lu</h4>
                        <blockquote>
                            <p>
                                "that was the best restaurant i ever went to"
                            </p>
                        </blockquote>
                    </article>
                    <article>
                    <img src={Per4} alt="person 4"/>
                        <h4>lucy lu</h4>
                        <blockquote>
                            <p>
                                "that was the best restaurant i ever went to"
                            </p>
                        </blockquote>
                    </article>
                </div>
            </section>
            <section className="aboutus">
                <div>
                    <div className="theowner">
                        <img src={A} alt="a"/>
                        <img src={B} alt="b"/>
                        </div>
                        <div className="backstory">
                            <h1>Little Lemon</h1>
                            <h2>Chicago</h2>
                            <p>
                                the little lemon start by owen and micl blah blah
                                blah blahblah blahblah blahvvblah blahblah blah
                                blah blahblah blahblah blahblah blahblah blah
                                blah blahblah blahblah blahblah blahblah blah
                            </p>
                        </div>
                    </div>
                
            </section>
    
            </main>
    );
}
export default Main;