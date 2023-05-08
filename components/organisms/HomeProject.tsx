import { Rubik } from 'next/font/google'
import React from 'react'
import { Container } from '../globals/Container'
import CardProjects from '../molecules/CardProjects'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation, SwiperOptions } from 'swiper'


const rubik = Rubik({
   subsets: ['latin'],
   weight: ['400', '600', '700'],
})

const swiperOptions: SwiperOptions = {
   navigation: {
      prevEl: '.HomeGallery-prev',
      nextEl: '.HomeGallery-next',
   },
   autoplay: {
      delay: 4000,
      disableOnInteraction: false,
   },
   breakpoints: {
      768: {
         slidesPerView: 2,
         spaceBetween: 15,
      },
      960: {
         slidesPerView: 3,
         spaceBetween: 10,
      },
      1200: {
         slidesPerView: 3,
         spaceBetween: 20,
      },
   },
   modules: [Autoplay, Navigation],
}


const HomeProject = () => {
   return (
      <div className="homeProject">
         <Container>
            <h2 className={`${rubik.className} homeProject-title`}>Explore our latest creations</h2>
      <div className='relative'>
            <Swiper {...swiperOptions} >
            <SwiperSlide>
            <CardProjects />
            </SwiperSlide>
            <SwiperSlide>
            <CardProjects />
            </SwiperSlide>
            <SwiperSlide>
            <CardProjects />
            </SwiperSlide>
            <SwiperSlide>
            <CardProjects />
            </SwiperSlide>
            <SwiperSlide>
            <CardProjects />
            </SwiperSlide><SwiperSlide>
            <CardProjects />
            </SwiperSlide>

            </Swiper>
            <div
                  className="HomeGallery-arrow HomeGallery-prev   top-3 icon-rigth-arrow"
               ></div>
               <div
                  className="HomeGallery-arrow HomeGallery-next icon-left-arrow"
               ></div>
               </div>
         </Container>
      </div>
   )
}

export default HomeProject
