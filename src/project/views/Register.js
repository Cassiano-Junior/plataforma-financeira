import React, { useState, useContext } from 'react'
import api from '../../framework/helpers/api'
import styled from 'styled-components'
import swal from '../../framework/helpers/swal'
import asyncLocalStorage from '../../framework/helpers/asyncLocalStorage'
import bgImage from '../views/layouts/components/Images/bgImageLogin.jpg'
import AppContext from '../../framework/helpers/AppContext'

export default function Register() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [password_confirmation, setPasswordConfirmation] = useState('')
  const [phone, setPhone] = useState('')
  const [username, setUsername] = useState('')
  const GLOBAL = useContext(AppContext)

  function Register() {
    swal.wait()
    api
      .post('register', {
        name: name,
        phone: phone,
        email: email,
        username: username,
        password: password,
        password_confirmation: password_confirmation,
      }, GLOBAL.token)
      .then(function (response) {
        if (response.status === 422) {
          var printerrors = ''

          Object.entries(response.data.errors).forEach(([key, error]) => {
            error.map((message) => {
              let errorTranslate = GLOBAL.language
              message.split('.').map((key) => {
                errorTranslate = errorTranslate[key]
                return true
              })
              printerrors = printerrors + errorTranslate + '</br>'
              return true
            })
          })

          swal.simple('Opss...', printerrors, 'error')
        }
        if (response.status === 200) {
          asyncLocalStorage.setItem('TOKEN', response.data.token)
          swal
            .simple(
              GLOBAL.language.commons.success,
              GLOBAL.language.commons.email_success,
              'success'
            )
            .then(function () {
              window.location.href = '/login'
            })
        }
      })
  }

  return (
    <ContainerRegister>
      <ContentRegister>
        <Title>
          <SpanTitle>
            Criar uma conta
          </SpanTitle>
        </Title>
        <TextLogin>
          Já tem uma conta?
          <LinkLogin
            onClick={() => (window.location.href = '/login')}>
            Fazer login
          </LinkLogin>
        </TextLogin>
        <Form>
            <InputForm
              onChange={(e) => setName(e.target.value)}
              type="text"
              placeholder="Nome Completo"

            />
            <InputForm
              onChange={(e) => setPhone(e.target.value)}
              type="number"
              placeholder="Telefone"

            />
          
          <InputForm
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="E-mail"
          />
          <InputForm
            onChange={(e) => setUsername(e.target.value)}
            type="text"
            placeholder="Username"
          />
          <InputForm
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Senha"
          />
          <InputForm
            onChange={(e) => setPasswordConfirmation(e.target.value)}
            type="password"
            placeholder="Confirme sua senha"
          />

          <ContainerButtons>
            <Button onClick={() => (window.location.href = '/login')}>
              Cancelar
            </Button>
            <Button onClick={Register} >
              Cadastrar
            </Button>
          </ContainerButtons>
        </Form>
      </ContentRegister>
      <ContainerBackground>
        <BackgroundImage src={bgImage} />
      </ContainerBackground>
    </ContainerRegister>
  )
}

const ContainerRegister = styled.div.attrs({
  className: `
        flex
    `,
})``

const ContentRegister = styled.div.attrs({
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

  const TextLogin = styled.div.attrs({
      className:`
      flex 
      lg:flex-col 
      text-white 
      mt-2 
      lg:whitespace-nowrap
      `
  })``

  const LinkLogin = styled.span.attrs({
      className:`
      text-quarty 
      ml-2 
      lg:ml-7 
      lg:mt-2 
      cursor-pointer 
      hover:brightness-125
      `
  })``

const Form = styled.div.attrs({
    className:`
    flex 
    flex-col 
    h-full  
    mt-10 
    space-y-6 
    lg:space-y-4 
    w-full
    `
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
      className:`
      flex 
      flex-row 
      gap-4 
      justify-between
      `
  })``

  const Button = styled.button.attrs({
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
