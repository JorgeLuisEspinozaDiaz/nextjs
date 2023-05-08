import { Rubik } from 'next/font/google'
import React from 'react'
const rubik = Rubik({
   subsets: ['latin'],
   weight: ['300', '700'],
})

const HomeBannerMidle = () => {
   return (
      <div className="HomeBannerMidle  ">
         <h2 className={`${rubik.className} HomeBannerMidle-title `}>
            Transform Your Home with Our Painting an Gardening Services!
         </h2>
         <p className={`${rubik.className} HomeBannerMidle-subtitle `}>
            Let us add some color to your walls and beauty to your outdoor space. Contact us today to make an
            appointment and get a free quote!
         </p>
      </div>
   )
}

export default HomeBannerMidle
