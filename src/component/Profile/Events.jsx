import EventCard from "./EventCard";


const Events=()=>{
    return(
        <div className="mt-5 flex flex-wrap gap-5">
          {[1,1,1,1].map(()=><EventCard/>)}
          
        </div>
    );
}
export default Events;