import React from 'react'
import styled from 'styled-components'
import { BsArrowDown } from 'react-icons/bs'

export default function BannerInvestNow() {
  return (
      <ContainerBannerInvestNow>
      <CarlaPicture />
       <ContentBannerInvestNow>
        <TitleBanner>
          Poupar é <TextBold>investir</TextBold>
          <TextBold color='text-blue-50'>.</TextBold>
        </TitleBanner>

        <ParagraphBanner>
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temptation ullamco laboris nisi ut aliquip ex . Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        </ParagraphBanner>
        <FooterBanner>
          <BsArrowDown className="text-blue-50 text-[40px] lg:text-[26px] sm:text-[20px] font-bold" />
          Escolha o seu pacote
        </FooterBanner>
        </ContentBannerInvestNow>
      </ContainerBannerInvestNow>
  )
}

const ContainerBannerInvestNow = styled.div.attrs({
  className:`
  bg-[url('https://files.suscitar.net/kla/assets/bg.png')] 
  w-full 
  h-[25rem]
  relative
  flex
  items-center
  pl-[50px]
  lg:pl-[30px]
  md:pl-[20px]
  `
})``

const CarlaPicture = styled.img.attrs({
  src: 'https://files.suscitar.net/kla/assets/carla.png',
  alt: 'Carla',
  draggable: false,
  className: `
    select-none
    h-[25rem]
    absolute
    right-0
    mr-350px
    mm:hidden
  `
})``

const ContentBannerInvestNow = styled.div.attrs({
  className:`
  flex 
  flex-col 
  gap-12
  sm:gap-6
  mm:gap-12
  py-6
  pl-[5rem]
  lg:pl-0
  w-[30rem] 
  h-full
  `
})``

const TitleBanner = styled.div.attrs({
  className:`
  text-white 
  text-[50px] 
  w-[15rem]
  font-roboto 
  font-thin 
  leading-none
  `
})``

const TextBold = styled.span.attrs(props => ({
  className:`
    font-bold
    ${props.color}
  `
}))``

const ParagraphBanner = styled.div.attrs({
  className:`
  text-white 
  w-[30rem]
  lg:w-[22rem]
  md:w-[20rem]
  sm:w-[15rem]
  mm:w-[18rem]
  text-[18px]
  md:text-[16px]
  leading-tight
  `
})``

const FooterBanner = styled.div.attrs({
  className:`
  flex 
  text-white 
  text-[20px] 
  items-center 
  w-[15rem]
  `
})``