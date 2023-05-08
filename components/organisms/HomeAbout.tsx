import Image from 'next/image'
import React from 'react'
import painter from '../../public/painter1.png'
import pink from '../../public/pink.png'
import { Container } from '../globals/Container'
import { Rubik } from 'next/font/google'
const rubik = Rubik({
   subsets: ['latin'],
   weight: ['300', '500', '700'],
})

const HomeAbout = () => {
   return (
      <Container>
         <div className="homeAbout ">
            <div className="homeAbout-painterImg  ">
               <Image src={painter} alt="painter" className="w-full h-full object-cover homeAbout-img  " />
               <div className="homeAbout-pinkImg ">
                  <Image src={pink} alt="pink" className="w-full h-full object-cover  " />
               </div>
               <div className="homeAbout-green">
                  <span className={`${rubik.className} homeAbout-span1 `}>More than</span>
                  <span className={`${rubik.className}  homeAbout-span2`}>250</span>
                  <span className={`${rubik.className}  homeAbout-span3`}>Sucessful Projects</span>
               </div>
            </div>

            <div className="homeAbout-conten">
               <h1 className={`${rubik.className} homeAbout-conten-title`}>
                  We are here to help you create a space you’ll love for a very long time!
               </h1>
               <p className={`${rubik.className} homeAbout-conten-subtitle`}>
                  City Garden & Painter has over 20 years of experience providing homes and businesses in the greater
                  Los Angeles area and nearby coastal ports with a fresh and renewed appearance.
               </p>
               <div className="homeAbout-conte-card ">
                  <div className="homeAbout-card">
                     <div className="homeAbout-cardLine"></div>
                     <div className="homeAbout-cardConte">
                        <h2 className={`${rubik.className} homeAbout-cardTitle`}>Our Mission</h2>
                        <h4 className={`${rubik.className} homeAbout-cardSubtitle`}>
                           Our mission is to enhance the beauty of our customers properties while also promoting
                           environmental sustainability, responsible practices, and the utilization of sustainable
                           products.
                        </h4>
                     </div>
                  </div>

                  <div className="homeAbout-card ">
                     <div className="homeAbout-cardLine"></div>
                     <div className="homeAbout-cardConte">
                        <h2 className={`${rubik.className} homeAbout-cardTitle`}>Our Mission</h2>
                        <h4 className={`${rubik.className} homeAbout-cardSubtitle`}>
                           We aspire to lead the painting and gardening industry with our commitment to environmental
                           sustainability and exceptional service, creating a world with beautiful buildings while
                           contributing to a healthier planet.
                        </h4>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </Container>
   )
}

export default HomeAbout
