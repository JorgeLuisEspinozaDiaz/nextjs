import Image from 'next/image'
import React from 'react'
import brush from '../../public/brocha.png'
import { Rubik } from 'next/font/google'

const rubik = Rubik({
   subsets: ['latin'],
   weight: ['300', '600'],
})

const CardValues = () => {
   return (
      <div className="cardValues">
         <div className="cardValues-conta">
            <div className="imag">
               <Image className="i" src={brush} alt="brush" />
            </div>
            <span className={`${rubik.className} cardValues-title`}>Skilled Painters</span>
            <p className={`${rubik.className} cardValues-subtitle `}>
               Our experienced painters will transform any room into a beautiful and inviting space.
            </p>
         </div>
      </div>
   )
}

export default CardValues
