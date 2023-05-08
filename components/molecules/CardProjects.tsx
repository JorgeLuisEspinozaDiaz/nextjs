import Image from 'next/image'
import React from 'react'
import house from '../../public/housepainter.png'
import { Rubik } from 'next/font/google'
const rubik = Rubik({
   subsets: ['latin'],
   weight: ['400', '600', '700'],
})

const CardProjects = () => {
   return (
      <div className="cardProjects">
         <Image src={house} className="w-full h-full " alt="" />
         <div className="cardProjects-conte">
            <div className=''> 
               <h2 className={`${rubik.className} cardProjects-title`}>Exterior Painting</h2>
               <p className={`${rubik.className} cardProjects-subtitle`}>Lorem ipsus rem ipsus </p>
            </div>
            <div className="cardProjects-glass">
               <span className="icon-glass"></span>
            </div>
         </div>
      </div>
   )
}

export default CardProjects
