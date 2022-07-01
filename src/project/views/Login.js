import React, { useState, useContext } from 'react'
import api from '../../framework/helpers/api'
import swal from '../../framework/helpers/swal'
import Alert from '../../framework/helpers/Alert'
import asyncLocalStorage from '../../framework/helpers/asyncLocalStorage'
import styled from 'styled-components'
import bgImage from '../views/layouts/components/Images/bgImageLogin.jpg'
import AppContext from '../../framework/helpers/AppContext'

export default function Login() {

  return (
    <ContainerLogin>
      <ContentLogin>
        <Title>
          <SpanTitle>Acessar sua conta</SpanTitle>
        </Title>
        <TextRegister>
          Não tem uma conta?
          <LinkRegister onClick={() => (window.location.href = '/register')}>
            Criar uma conta
          </LinkRegister>
        </TextRegister>
        <Form>
          <InputForm
            type="email"
            placeholder="E-mail"
          />
          <InputForm
            type="password"
            placeholder="Password"
          />
          <ContainerButtons>
            <LoginButton onClick={() => (window.location.href = '/')}>Entrar</LoginButton>
            <ForgotLink onClick={() => (window.location.href = '/forgot')}>
              Esqueceu sua senha?
            </ForgotLink>
          </ContainerButtons>
        </Form>
      </ContentLogin>
      <ContainerBackground>
        <BackgroundImage src={bgImage} />
      </ContainerBackground>
    </ContainerLogin>
  )
}

const ContainerLogin = styled.div.attrs({
  className: `
        flex
    `,
})``

const ContentLogin = styled.div.attrs({
  className: `
    w-[40%] 
    md:w-[100%] 
    h-screen 
    flex 
    flex-col 
    items-center 
    justify-center 
    px-[5rem] 
    lg:px-[3rem] 
    md:px-[10rem] 
    sm:px-[10rem] 
    mm:px-[4rem] 
    py-[8rem]
    `,
})``

const Logo = styled.img.attrs({
  className: `
        w-[12rem]
        pb-[2rem]
    `,
  alt: 'logo',
  src: 'https://files.suscitar.net/kla/assets/kla.png',
})``

const Title = styled.div.attrs({
  className: `
  flex 
  mt-4 
  lg:mt-0 
  text-[34px] 
  lg:text-[25px] 
  whitespace-nowrap 
  lg:whitespace-nowrap 
  font-roboto 
  font-bold 
  text-white
  `,
})``

const SpanTitle = styled.div.attrs({
  className: `
  after:content-['.'] 
  after:text-quarty
  `,
})``

const TextRegister = styled.div.attrs({
  className: `
  flex 
  lg:flex-col 
  text-white 
  mt-2 
  lg:whitespace-nowrap
  `,
})``

const LinkRegister = styled.div.attrs({
  className: `
  text-quarty 
  hover:brightness-125 
  ml-2 
  lg:ml-4
  lg:mt-2 
  cursor-pointer

  `,
})``

const Form = styled.div.attrs({
  className: `
  flex 
  flex-col 
  h-full  
  mt-10 
  lg:mt-4 
  space-y-8 
  w-full
  `,
})``

const InputForm = styled.input.attrs({
  className: `
  flex 
  w-full 
  lg:w-full 
  h-10 
  bg-transparent 
  border 
  border-secondary 
  focus:border-quarty 
  rounded-full 
  p-4  
  outline-none
  `,
})``

const ContainerButtons = styled.div.attrs({
  className: `
    flex
    flex-col
    gap-4
    w-full
  `,
})``

const LoginButton = styled.button.attrs({
  className: `
  flex
  w-full 
  lg:w-full 
  h-10 
  border 
  border-secondary
  mt-2
  hover:border-quarty 
  rounded-full 
  items-center 
  justify-center
  `,
})``

const ForgotLink = styled.div.attrs({
  className: `
  flex 
  w-full 
  justify-center 
  cursor-pointer 
  mt-2 
  dark:text-light 
  text-sm 
  hover:text-quarty 
  `,
})``

const ContainerBackground = styled.div.attrs({
  className: `
    flex-1
  `,
})``

const BackgroundImage = styled.img.attrs({
  className: `
    w-[100%]
    h-full
    object-fill
    md:hidden
  `,
  alt: 'Imagem de fundo',
})``
