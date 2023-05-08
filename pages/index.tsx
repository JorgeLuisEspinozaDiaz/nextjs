import HomeAbout from '@/components/organisms/HomeAbout'
import HomeBanner from '@/components/organisms/HomeBanner'
import HomeBannerMidle from '@/components/organisms/HomeBannerMidle'
import HomeProject from '@/components/organisms/HomeProject'
import HomeServices from '@/components/organisms/HomeServices'
import HomeValues from '@/components/organisms/HomeValues'
import Header from '@/components/ui/Header'

import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
   return (
      <>
         {/* <Nav /> */}
         <main className="flex flex-col gap-1">
            <Header />
            <div className="mt-[5.6rem]">
               <HomeBanner />
            </div>
            <div>
               <HomeValues />
            </div>

            <div>
               <HomeServices />
            </div>
            <div className="mb-4">
               <HomeBannerMidle />
            </div>

            <div className="mb-4">
               <HomeAbout />
            </div>
            <div className="mb-4">
               <HomeProject />
            </div>
         </main>
      </>
   )
}
