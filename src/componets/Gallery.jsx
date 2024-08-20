import { register } from 'swiper/element/bundle';
register();
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Swiper, SwiperSlide } from 'swiper/react';



const Gallery = ({showThumbs, image}) => {
return ( 
        <>
        <Swiper
            slidesPerView={1}
            pagination={{ clickable: true }}
            className="SwiperViewPage"
            navigation
            
        >
            {image.map((item, i) => (
                <SwiperSlide key={i} >
                    
                <img src={item.src}
                    alt="Produto"
                    className="Gallery-Img"
                    
                    />
                
                </SwiperSlide>
            ))}
        </Swiper>
        {showThumbs ? <div className="imageslider">
        {image.map((item, i) => {
            return<img src={item.src} key={i}/>
        
        })}
        </div>
        :''}
        </>
     );
}
export default Gallery;