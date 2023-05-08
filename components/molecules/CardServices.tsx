import React from 'react'
import house from '../../public/house.png'
import house1 from '../../public/house1.png'
import Image from 'next/image'
import brow from '../../public/brow.png'
import ButtonGreen from '../atoms/ButtonGreen'
import { Rubik } from 'next/font/google'

const rubick = Rubik({
   subsets: ['latin'],
   weight: ['300', '600'],
})
const CardServices = () => {
   return (
      <div className="cardServices">
         <div className="cardServices-header">
            <Image src={house} alt="house" className="w-full h-full object-cover" />
         </div>
         <div className="cardServices-conta">
            <div className="cardServices-contaImg">
               <Image src={house1} alt="house" className="w-full h-full object-cover" />
            </div>
            <div className="cardServices-ConteTex">
               <h5 className={`${rubick.className} cardServices-title  `}>Exterior Painting</h5>
               <p className={`${rubick.className}  cardServices-subtitle `}>
                  We take pride in providing high-quality exterior painting services for residential and commercial
                  properties. Our specialists guarantee that your propertys exterior looks its best by utilizing the
                  latest techniques and top-of-the-line equipment, so your visitors or customers will have a great first
                  impression. Our services include power washing, surface preparation, priming, and painting. Look no
                  further and contact us now!
               </p>
               <div className="cardServices-btn ">
                  <ButtonGreen />
               </div>
            </div>
            <div className=" cardServices-line "></div>
         </div>
      </div>
   )
}

export default CardServices
