import Heroo from "c:/Users/rbany/firstapp/src/icons_assets/restauranfood.jpg"
import Booking from"../pages/booking"
function Hero(){
    return(
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
            <img src={Heroo} alt="hero section"/>
            </div>
        </section>
          </div>
    )
}

export default Hero;
