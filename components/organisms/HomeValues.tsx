import { Rubik } from 'next/font/google'
import { Swiper, SwiperSlide } from 'swiper/react'
import React from 'react'
import { Container } from '../globals/Container'
import CardValues from '../molecules/CardValues'
import { Autoplay, Pagination, SwiperOptions } from 'swiper'

const rubik = Rubik({
   subsets: ['latin'],
   weight: ['300', '600', '800'],
})

const swiperOptions: SwiperOptions = {
   slidesPerView: 'auto',
   autoplay: {
      delay: 10000,
      disableOnInteraction: false,
   },
   loop: false,
   speed: 700,
   spaceBetween: 15,
   pagination: {
      el: '.HomeCharac-pagination',
      clickable: true,
      type: 'bullets',
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
         slidesPerView: 4,
         spaceBetween: 0,
      },
   },
   modules: [Pagination, Autoplay],
}

const HomeValues = () => {
   return (
      <Container>
         <div className="homeValues">
            <div className="homeValues-Text">
               <div className="homeValues-line"></div>

               <div className="flex flex-col gap-1">
                  <span className={` ${rubik.className} homeValues-title  `}>Leave it all to us! </span>
                  <span className={` ${rubik.className} homeValues-subtitle `}>
                     Well manage the entire process, from prep work to clean-up.
                  </span>
               </div>
            </div>
            <p className={`${rubik.className} homeValues-paragraph  `}>
               Every service we perform is carried out with high commitment and extreme care. Whether it is painting or
               gardening services, we clean up the place after we finish our work, so you dont have to worry about it.
            </p>
           
         </div>
       

         <Swiper {...swiperOptions} className="flex my-10  ">
            <SwiperSlide>
               <CardValues />
            </SwiperSlide>
            <SwiperSlide>
               <CardValues />
            </SwiperSlide>
            <SwiperSlide>
               <CardValues />
            </SwiperSlide>
            <SwiperSlide>
               <CardValues />
            </SwiperSlide>
         </Swiper>
         <div className={`HomeCharac-pagination`}></div>
      </Container>
   )
}

export default HomeValues
