import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper';
import "swiper/css";
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Pop from '../common/Pop';
import { useRef, useState } from 'react';

function Vids() {
    const pop = useRef(null);
    const [Index, setIndex] = useState(0);
    const { youtube } = useSelector((store) => store.youtubeReducer);
    useEffect(() => {
        console.log(youtube);
    }, []);
    return (
        <>
            <section id="vids" className="myScroll">
                <Swiper
                    modules={[Pagination, Navigation, Autoplay]}
                    autoplay={{ delay: 2000, disableOnInteraction: false }}
                    pagination={{ clickable: true }}
                    navigation={true}
                    spaceBetween={50}
                    loop={true}
                    slidesPerView={3}
                    centeredSlides={true}
                >
                    {youtube.map((el, index) => {
                        return (
                            <SwiperSlide key={index}>
                                <div className="inner">
                                    <div className="pic" onClick={() => {
                                        setIndex(index);
                                        pop.current.open();
                                    }}>
                                        <img src={el.snippet.thumbnails.standard.url} alt={el.snippet.title} />
                                    </div>
                                </div>
                                <h2>
                                    {el.snippet.title}
                                </h2>
                            </SwiperSlide>
                        )
                    })}
                </Swiper>
            </section>
            <Pop ref={pop}>
                {youtube.length !== 0 && (
                    <iframe title="시발" src={`https://www.youtube.com/embed/${youtube[Index].snippet.resourceId.videoId}`} frameBorder="0" ></iframe>
                )}
            </Pop>
        </>
    )
}

export default Vids

