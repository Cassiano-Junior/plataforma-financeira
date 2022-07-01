import React from 'react'
import ButtonDashboard from '../ButtonDashboard/ButtonDashboard'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

export default function Banner() {
  const navigate = useNavigate()
  return (
    <Container>
      <JorgePicture />

      <TextContainer>
        <Text>
          Seu patrimônio pode render ainda mais investindo no
          <HighlightedText children=' lugar certo.' />
        </Text>
        <ActionsContainer>
            <ButtonDashboard children="INVESTIR AGORA" onClick={() => navigate('/investNow')} />
            <ButtonDashboard children="SACAR" onClick={() => navigate('/withdraw')}/>
        </ActionsContainer>
      </TextContainer>
    </Container>
  )
}

const Container = styled.div.attrs({
  className: `
    bg-[url('https://files.suscitar.net/kla/assets/bg.png')] 
    w-full 
    h-[25rem]
    relative
    flex
    items-center
    pl-[50px]
    mm:pl-[30px]
  `
})``

const JorgePicture = styled.img.attrs({
  src: 'https://files.suscitar.net/kla/assets/jorge.png',
  alt: 'Jorge',
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

const TextContainer = styled.div.attrs({
  className: `
    flex
    flex-col
    w-[580px]
    gap-[80px]
    lg: gap-[40px]
    lg:w-[350px]
    z-40
    mm:w-[200px]
    sm:w-[250px]
  `
})``

const Text = styled.p.attrs({
  className: `
    text-[2rem]
    font-sora
    text-white
    mm:text-[24px]
    mm:ml-[50px]
    sm:text-[26px]
    
  `
})``

const HighlightedText = styled.span.attrs({
  className: `
    text-blue-40
  `
})``

const ActionsContainer = styled.div.attrs({
  className: `
    flex
    gap-5
    mm:flex-col
  `
})``