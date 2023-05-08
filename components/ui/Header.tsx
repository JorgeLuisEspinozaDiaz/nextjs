import React, { useState } from 'react'
import c from '../../public/x.png'
import Image from 'next/image'
import { Roboto } from 'next/font/google'
const roboto = Roboto({
   subsets: ['latin'],
   weight: ['400'],
})

const Header = () => {
   const [navClick, setNavClick] = useState(false)

   const handleClick = () => {
      setNavClick(!navClick)
   }

   return (
      <header className="fixed z-50">
         <div className="navbar">
            <div>Logo</div>
            <div className="navbar-icons">
               <a className="icon-facebook"></a>
               <a className="icon-instagram"></a>
               <div className="navbar-menu " onClick={handleClick}>
                  <a className="icon-menu"></a>
               </div>
            </div>
         </div>

         <nav className={`nav ${navClick ? 'isActive' : ''}`}>
            <div className="nav-container">
               <div>Logo</div>
               <div className="nav-icons">
                  <div className="gap-x-6 flex ">
                     <a className="icon-facebook"></a>
                     <a className="icon-instagram"></a>
                  </div>
                  <div className="nav-menu" onClick={handleClick}>
                     <Image src={c} width={27.5} height={27.5} alt="" />
                  </div>
               </div>
            </div>

            <ul className="nav-ul">
               <li className="liNav">
                  <a className={`${roboto.className} nav-fb font-semibold`}>Home</a>
               </li>

               <li className="liNav">
                  <a className={`${roboto.className} nav-a`}>Services</a>
               </li>

               <li className="liNav">
                  <a className={`${roboto.className}nav-a`}>About</a>
               </li>

               <li className="liNav">
                  <a className={`${roboto.className} nav-a`}>Gallery</a>
               </li>

               <li className="liNav ">
                  <a className={`${roboto.className} nav-a`}>Blog</a>
               </li>

               <li className="liNav">
                  <a className={`${roboto.className} nav-a `}>Contact Us</a>
               </li>
               <br />
               <br />
            </ul>
         </nav>
      </header>
   )
}

export default Header
