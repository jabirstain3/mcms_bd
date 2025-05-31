import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Pagination, Autoplay } from 'swiper/modules';

export const BannerSlide = () => {
    const banners = [
        {image: "", id: 12300421 },
        {image: "", id: 12300423 },
        {image: "", id: 12300423 },
        {image: "", id: 12300424 },
    ]

    return (
        <div className="w-full bannercontainer">
            <Swiper
            modules={[ Pagination, Autoplay]}
            spaceBetween={50}
            slidesPerView={1}
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            loop={true}
            autoplay={{
                delay: 2000,
                disableOnInteraction: true,
            }}
            >
                {
                    banners.map((bnr) =>(
                        <SwiperSlide >
                            <div key={bnr.id} className=" w-full h-full flex justify-center bg-neutral-200">
                                <img src={bnr.image} className='w-full max-w-[1600px] h-full max-h-[700px] aspect-[19/10]'/>
                            </div>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    );
};