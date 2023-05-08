import { Rubik } from 'next/font/google'
import React from 'react'
import { Container } from '../globals/Container'
import CardServices from '../molecules/CardServices'
const rubik = Rubik({
   subsets: ['latin'],
   weight: ['700'],
})

const HomeServices = () => {
   return (
      <div className="bg-[#FAFAFA] py-7">
         <Container>
            <h1 className={`${rubik.className} homeService-tile py-14 `}>Services City Garden & Painter Offers</h1>
         </Container>
         <Container className="container-card">
            <CardServices />
            <CardServices />
            <CardServices />
            <CardServices />
         </Container>
      </div>
   )
}

export default HomeServices
