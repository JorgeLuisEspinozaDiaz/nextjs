import { Rubik } from 'next/font/google'
import React from 'react'
const rubick = Rubik({
   subsets: ['latin'],
   weight: ['500'],
})
const ButtonSeeMore = () => {
   return (
      <div className="btnSeeMore">
         <span className="span-seeMore"></span>
         <button className="btns-seeMore">
            <span className={`${rubick.className} btn-seeMore`}>See More</span>
         </button>
      </div>
   )
}

export default ButtonSeeMore
