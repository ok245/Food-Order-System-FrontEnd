import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import slider from "react-slick/lib/slider";
import Slider from "react-slick/lib/slider";
import { CarouselItem } from "./CarouselItem";
import { topMeels } from "./topMeels";
  const MultiItemCarousel=()=>{
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay:true,
        autoplaySpeed:2000,
        arrows:false
      };
    return(
        <Slider {...settings}>
            {topMeels.map((item)=><CarouselItem image={item.image} title={item.title}/>)}
        </Slider>
    );
}

export default MultiItemCarousel;