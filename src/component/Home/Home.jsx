import Auth from "../Auth/Auth";
import RestaurantCard from "../Restaurant/RestaurantCard";
import "./Home.css"
import MultiItemCarousel from "./MultiItemCarousel";
const restaurant=[1,2,3,4,5,6,9,4];
export const Home=()=>{
    return(
        <div className="pb-10">
        <section className="banner -z-50 flex  relative flex-col justify-center items-center">

            <div className="w-[50vw] z-10 text-center">
                <p className="text-2xl  lg:text-6xl font-bold z-10 py-5">Zosh food</p>
                <p className="z-10 text-gray-300 text-xl lg:text-4xl">Test the Convieneince:Food Fast Delivered</p>

            </div>
            <div className="cover absolute top-0 left-0 right-0">

            </div>
            <div className="fadout">

            </div>
          
        </section>
        <section className="p-10 la:py:10 lg:px:20">
            <p className="text-2xl text-center font-semibold text-gray-400 py-3 pb-10">Top Meels</p>
            <MultiItemCarousel/>
        </section>
        <section className="px-5 lg:px-20 pt-10">
            <h1 className="text-2xl text-center text-gray-400 font-semibold py-8">Oreder From Our Handpicked Favourites</h1>
            <div className="flex flex-wrap items-center justify-around gap-5">
                {
                   restaurant.map((item)=> <RestaurantCard/>)
                }
               
            </div>
        </section>
        <Auth/>
        </div>
    );
}
export default Home;