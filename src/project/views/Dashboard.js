import React from 'react'
import Auth from './layouts/Auth/Auth'
import Banner from './layouts/components/Banner/Banner'
import CardsDashboard from './layouts/components/CardsDashboard/CardsDashboard'
import MapaRendimentos from './layouts/components/MapaRendimentos/MapaRendimentos'
import SaldoInicio from './layouts/components/SaldoInicio/SaldoInicio'

export default function Dashboard() {
  return (
    <Auth>
      <Banner />
      <CardsDashboard />
      <div className='flex flex-row gap-[30px] lg:gap-[10px] md:gap-[30px] md:flex-col md:items-center'>
        <SaldoInicio />
        <MapaRendimentos />
      </div>
    </Auth>
  )
}
