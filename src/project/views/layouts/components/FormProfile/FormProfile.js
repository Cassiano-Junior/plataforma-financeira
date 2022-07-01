import React from 'react'
import Button from '../Button/Button'
import Input from '../Input/Input'
import styled from 'styled-components'

export default function FormProfile() {
  return (
    <>
      <ContainerInputs>
        <Input css={'w-[30rem] 2xl:w-[30rem] sm:w-[25rem] mm:w-[20rem]'} placeholder={'Nome'} />
        <Input css={'w-[30rem] 2xl:w-[30rem] sm:w-[25rem] mm:w-[20rem]'} placeholder={'Sobrenome'} />
      </ContainerInputs>
      <ContainerInputs>
        <Input css={'w-[30rem] 2xl:w-[30rem] sm:w-[25rem] mm:w-[20rem]'} placeholder={'E-mail'} />
        <Input css={'w-[30rem] 2xl:w-[30rem] sm:w-[25rem] mm:w-[20rem]'} placeholder={'Telefone'} />
      </ContainerInputs>
      <ContainerInputs>
        <Input css={'w-[30rem] 2xl:w-[30rem] sm:w-[25rem] mm:w-[20rem]'} placeholder={'CEP'} />
        <Input css={'w-[30rem] 2xl:w-[30rem] sm:w-[25rem] mm:w-[20rem]'} placeholder={'Logradouro'} />
      </ContainerInputs>
      <ContainerInputs>
        <Input css={'w-[30rem] 2xl:w-[30rem] sm:w-[25rem] mm:w-[20rem]'} placeholder={'Número'} />
        <Input css={'w-[30rem] 2xl:w-[30rem] sm:w-[25rem] mm:w-[20rem]'} placeholder={'Complemento'} />
      </ContainerInputs>
      <ContainerInputs>
        <Input css={'w-[30rem] 2xl:w-[30rem] sm:w-[25rem] mm:w-[20rem]'} placeholder={'Bairro'} />
        <Input css={'w-[30rem] 2xl:w-[30rem] sm:w-[25rem] mm:w-[20rem]'} placeholder={'Cidade'} />
      </ContainerInputs>
      <ContainerInputs>
        <Input css={'w-[30rem] 2xl:w-[30rem] sm:w-[25rem] mm:w-[20rem]'} placeholder={'Estado'} />
        <Input css={'w-[30rem] 2xl:w-[30rem] sm:w-[25rem] mm:w-[20rem]'} placeholder={'País'} />
      </ContainerInputs>

      <ContainerButtons>
        <Button children="Alterar Senha" css={'bg-[#999A9B] w-[10rem] py-2'} />

        <ContentButtons>
          <Button
            children="Cancelar"
            css={'w-[10rem] border-2 border-quarty text-blue-50 py-2'}
          />
          <Button children="Salvar" css={' w-[10rem] bg-quarty py-2'} />
        </ContentButtons>
      </ContainerButtons>
    </>
  )
}

const ContainerInputs = styled.div.attrs({
  className: `
    flex
    gap-10
    sm:flex-col
    sm:gap-8
  `,
})``

const ContainerButtons = styled.div.attrs({
  className:`
    flex
    gap-[30rem]
    xl:gap-10
    sm:flex-col
    sm:gap-4
  `
})``

const ContentButtons = styled.div.attrs({
  className:`
    flex
    gap-10
  `
})``