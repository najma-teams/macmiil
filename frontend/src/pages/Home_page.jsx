import React from 'react'
import Header from '../common/Header/Header'
import Menuhome from '@/components/Home/menu/Menuhome'
import Hero from '@/components/Home/hero/Hero'
import Service from '@/components/Home/service/Service'
import Region from '@/components/Home/region/Region'
import Outdoor from '@/components/Home/catogeyfitnes/Catogeyfitness'
import Swiperpage from '@/components/Home/swiper/Swiperpage'
import Ourproduct from '@/components/Home/product/Ourproduct'
import Footer from '@/common/Footer/Footer'
import Catogeryf from '@/components/Home/catogeysumsung/Catogeryf'
import Catogerys from '@/components/Home/catogeyApple/Catogerys'
import Catogeryall from '@/components/Home/catogeyall/Catogeryall'

const Home_page = () => {
  return (
    <div >
        {/* <Header/> */}
        <Menuhome/>
        <Catogeryall/>
        <Hero/>
        <Outdoor/>
        <Ourproduct/>
        <Catogeryf/>
        <Swiperpage/>
        <Catogerys/>
        <Swiperpage/>

        <Service/>
        <Region/>
        <Footer/>
    </div>
  )
}

export default Home_page