import React from 'react'
import Auth from './layouts/Auth/Auth'
import styled from 'styled-components'
import { AiOutlineArrowUp } from 'react-icons/ai'
import Card from './layouts/components/Card/Card'
import grafico from './layouts/components/Images/grafico.png'
import LineGraphic from './layouts/components/Graficos/LineGraphic'
import TablePortfolio from './layouts/components/TablePortfolioHistory/TablePortfolioHistory'
import { FaCoins } from 'react-icons/fa'

export default function PortfolioHistory() {
  const TotalInvestido = {
    descricao: <FaCoins />,
    valor: 'R$173.000',
    tipo: 'Total Investido',
  }

  const TotalRentabilidade = {
    descricao: <FaCoins />,
    valor: 'R$222.004',
    tipo: 'Total + Rentabilidade',
  }

  return (
    <Auth>
      <div className="flex gap-10 flex-col">
        <ContainerCards>
          <ContentCards color="bg-primary">
            <Card {...TotalInvestido} />
          </ContentCards>
          <ContentCards color="bg-secondary">
            <Card {...TotalRentabilidade} />
            <div className="text-green-500 flex">
              22% <AiOutlineArrowUp />
            </div>
          </ContentCards>
        </ContainerCards>
        <ContainerMapaRendimentos>
          <TextMapaRendimentos>
            mapa de rendimentos
          </TextMapaRendimentos>
         <div className="bg-white"> <LineGraphic /> </div> 
          {/* <img src={grafico} alt="Gráfico" className="w-[50rem] h-[15rem] lg:h-[18rem]" /> */}
        </ContainerMapaRendimentos>
      </div>
        <TablePortfolio />
    </Auth>
  )
}

const ContainerCards = styled.div.attrs({
  className: `
          flex
          lg:justify-center
          md:justify-center
          mm:justify-center
          2xl:h-[16rem]
        `,
})``

const ContentCards = styled.div.attrs((props) => ({
  className: `
          w-[15rem]
          md:w-[12rem]
          flex
          flex-col
          items-center
          justify-center
          ${props.color}
        `,
}))``

const ContainerMapaRendimentos = styled.div.attrs({
  className: `
    flex
    flex-col
  `
})``

const TextMapaRendimentos = styled.span.attrs({
  className: `
    h-[4.68rem]
    bg-bggray
    text-letter
    flex
    pl-[2rem]
    items-center
    capitalize
  `
})``
