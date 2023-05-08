import { Rubik } from 'next/font/google'
import React from 'react'

const rubick = Rubik({
   subsets: ['latin'],
   weight: ['500'],
})

const Button = () => {
   return (
      <div className="btn">
         <span className="span"></span>
         <button className="btns">
            <span className={`${rubick.className} btn-span `}>Contact Us</span>
         </button>
      </div>
   )
}

export default Button
