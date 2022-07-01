import React, { useContext, useState } from 'react'
import AppContext from '../../../../../framework/helpers/AppContext'
import styled from 'styled-components'
import Button from '../Button/Button'
import Input from '../Input/Input'

export default function PainelWallet() {
  const [selectWallet, setSelectWallet] = useState('')
  const [selectValue, setSelectValue] = useState('')

  const {transfersWallet, setTransfersWallet} = useContext(AppContext)

  function handleAddTransferWallet() {
   
    const newTransferWallet = {
      date: new Date().toLocaleDateString('pt-BR', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
      }, {timeZone: 'UTC'}),
      wallet: selectWallet,
      value: selectValue.toLocaleString('pt-br', {minimumFractionDigits: 2}),
    }

    
    setTransfersWallet([...transfersWallet, newTransferWallet])
  }

  return (
    <ContainerPainelWallet>
      <HeaderPainelWallet>TRANSFERÊNCIA INTERNA</HeaderPainelWallet>

      <MainPainelWallet>
        <ContentPainelWallet>
          <LabelInput>
            1. Entre com a carteira para transferência
            <Input css={'w-[30rem] sm:w-[28rem] mm:w-[17rem]'} onChange={event => setSelectWallet(event.target.value)} value={selectWallet} />
          </LabelInput>
          <LabelInput>
            2. Digite o valor da transferência
            <AlteracaoLayout>
              <Input css={'w-[16rem] mm:w-[17rem]'} onChange={event => setSelectValue(Number(event.target.value))} value={selectValue} />
              <ContainerButtons>
                <Button
                  children={'CANCELAR'}
                  css={
                    'bg-transaparent border-2 border-blue-50 text-blue-50 px-10 hover:bg-quarty hover:text-white hover:border-transparent md:py-[0.7rem]'
                  }
                />
                <Button
                  children={'FINALIZAR'}
                  css={'bg-quarty px-10 md:py-[0.7rem]'}
                  onClick={() => handleAddTransferWallet()}
                />
              </ContainerButtons>
            </AlteracaoLayout>
          </LabelInput>
        </ContentPainelWallet>
      </MainPainelWallet>
    </ContainerPainelWallet>
  )
}

const ContainerPainelWallet = styled.div.attrs({
  className: `
    flex
    flex-col
  `,
})``

const HeaderPainelWallet = styled.div.attrs({
  className: `
  h-[4.68rem]
  bg-bggray
  max-w-[50rem]
  text-gray-500
  flex
  pl-[2rem]
  items-center
  `,
})``

const MainPainelWallet = styled.div.attrs({
  className: `
    bg-white
    p-6
    max-w-[50rem]
  `,
})``

const ContentPainelWallet = styled.div.attrs({
  className: `
    flex
    flex-col
    gap-6
  `,
})``

const LabelInput = styled.div.attrs({
  className: `
    text-gray-500
    flex
    flex-col
  `,
})``

const ContainerButtons = styled.div.attrs({
  className: `
    flex 
    gap-10 
    lg:gap-6 
    mm:flex-col
  `,
})``

const AlteracaoLayout = styled.div.attrs({
  className:`
    flex
    gap-10
    lg:gap-6
    md:flex-col
  `
})``