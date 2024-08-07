import Bookingform from '../componets/bookingForm'
function Booking(props){
    return(
        <Bookingform availableTime={props.availableTime} dispatch={props.dispatch} submitForm={props.submitForm}/>
    )
}
export default Booking;