import React from 'react'
import Banner from '../component/Banner'
import Brands from '../component/Brands'
import BrandOnSell from '../component/BrandOnSell'
import PopularStore from '../component/PopularStore'
import Partners from '../component/Partners'

export default function Home() {
  
  return (
    <div className='bg-base-100'>

      <Banner/>
      <Brands/>
      <BrandOnSell/>
      <PopularStore/>
      <Partners/>
    </div>
  )
}
