import { FC, PropsWithChildren } from 'react'

import { Roboto, Rubik } from 'next/font/google'

const roboto = Roboto({
   subsets: ['latin'],
   weight: ['100', '300', '400', '500', '700', '900'],
   variable: '--font-roboto',
})

const rubik = Rubik({
   subsets: ['latin'],
   weight: ['300', '400', '500', '700', '800', '900'],
   variable: '--font-roboto',
})

export const Layout: FC<PropsWithChildren> = ({ children }) => {
   return <div className={`${roboto.className}  relative`}>{children}</div>
}
