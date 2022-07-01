import React, { useContext, useState } from 'react'
import api from '../../framework/helpers/api'
import swal from '../../framework/helpers/swal'
import styled from 'styled-components'
import bgImage from '../views/layouts/components/Images/bgImageLogin.jpg'
import AppContext from '../../framework/helpers/AppContext'

export default function Forgot() {
  const GLOBAL = useContext(AppContext)
  const [email, setEmail] = useState('');
  
  
  function Forgot() {
    swal.wait();
    api.post('forgot-password', {
      email: email
    }, GLOBAL.token).then(function (response) {
      if (response.status === 422) {
        var printerrors = "";

        Object.entries(response.data.errors).forEach(([key, error]) => {
          error.map((message) => {
            let errorTranslate = GLOBAL.language;
            message.split('.').map((key) => {
              errorTranslate = errorTranslate[key]
              return true;
            })
            printerrors = printerrors + errorTranslate + "</br>";
            return true;
          });
        });

        swal.simple(
          'Opss...',
          printerrors,
          'error'
        )
      }
      if (response.status === 200) {
        swal.simple(
          GLOBAL.language.commons.success, GLOBAL.language.commons.email_success_send, 'success'
        ).then(function () {
          window.location.href = '/login'
        })
      }
    })
  } 

  return (
    <Container>
    <Content>
      <Title>
        <SpanTitle>Recuperar senha</SpanTitle>
      </Title>
      <Form>
      <InputForm
      onChange={(e) => setEmail(e.target.value)}
        type="email"
        placeholder="E-mail"
      />
      <ContainerButtons>
        <Button
        onClick={Forgot}>
          Recuperar
        </Button>
      </ContainerButtons>
      <ForgotLink onClick={() => (window.location.href = '/login')}>
              Voltar
        </ForgotLink>
    </Form>
      
    </Content>
    <ContainerBackground>
      <BackgroundImage
        src={bgImage}
      />
    </ContainerBackground>
  </Container>
  )
}



const Container = styled.div.attrs({
    className: `
          flex
      `,
  })``
  
  const Content = styled.div.attrs({
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
    font-roboto
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
    className:`
      flex-1
    `
  })``
  
  const BackgroundImage = styled.img.attrs({
    className:`
      w-[100%]
      h-full
      object-fill
      md:hidden
    `,
    alt: "Imagem de fundo",
  })``