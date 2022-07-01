import React, { useContext, useState } from 'react'
import { useParams } from 'react-router-dom'
import api from '../../framework/helpers/api'
import styled from 'styled-components'
import swal from '../../framework/helpers/swal'
import asyncLocalStorage from '../../framework/helpers/asyncLocalStorage'
import bgImage from '../views/layouts/components/Images/bgImageLogin.jpg'
import AppContext from '../../framework/helpers/AppContext'

export default function ResetPassword() {
  const [email, setEmail] = useState('')
  // const [token, setToken] = useState('')
  const [password, setPassword] = useState('')
  const [password_confirmation, setPasswordConfirmation] = useState('')
  const { token } = useParams()
  const GLOBAL = useContext(AppContext)

  function ResetPassword() {
    swal.wait()
    api
      .post(
        'reset-password',
        {
          email: email,
          token: token,
          password: password,
          password_confirmation: password_confirmation,
        },
        GLOBAL.token
      )
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
          console.log(response)
        }
        if (response.status === 200) {
          asyncLocalStorage.setItem('TOKEN', response.data.token)
          swal
            .simple(
              GLOBAL.language.commons.success,
              GLOBAL.language.commons.success_data,
              'success'
            )
            .then(function () {
              window.location.href = '/login'
            })
        }
      })
  }

  return (
    <ContainerResetPassword>
      <ContentResetPassword>
        <Title>
          <SpanTitle>Alteração de senha</SpanTitle>
        </Title>

        <Form>
          <InputForm
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="E-mail"
          />
          {/* <InputForm
            onChange={(e) => setToken(e.target.value)}
            type="number"
            placeholder="Token"
          /> */}
          <InputForm
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Nova senha"
          />
          <InputForm
            onChange={(e) => setPasswordConfirmation(e.target.value)}
            type="password"
            placeholder="Confirme sua nova senha"
          />

          <ContainerButtons>
            <Button onClick={() => (window.location.href = '/login')}>
              Cancelar
            </Button>
            <Button onClick={ResetPassword}>Cadastrar</Button>
          </ContainerButtons>
        </Form>
      </ContentResetPassword>
      <ContainerBackground>
        <BackgroundImage src={bgImage} />
      </ContainerBackground>
    </ContainerResetPassword>
  )
}

const ContainerResetPassword = styled.div.attrs({
  className: `
        flex
    `,
})``

const ContentResetPassword = styled.div.attrs({
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

const Form = styled.div.attrs({
  className: `
    flex 
    flex-col 
    h-full  
    mt-10 
    space-y-6 
    lg:space-y-4 
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
      flex-row 
      gap-4 
      justify-between
      `,
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
