import { Rubik } from 'next/font/google'
import React from 'react'

const rubick = Rubik({
   subsets: ['latin'],
   weight: ['500'],
})

const ButtonGreen = () => {
   return (
      <div className="btnGreen ">
         <span className="span-green"></span>
         <button className="btns-green">
            <span className={`${rubick.className} btn-spanGreen`}>Contact Us</span>
         </button>
      </div>
   )
}

export default ButtonGreen
