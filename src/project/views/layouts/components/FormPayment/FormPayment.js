import React from 'react'
import styled from 'styled-components'
import { FiChevronDown } from 'react-icons/fi'
import Button from '../Button/Button'

export default function FormPayment() {
  return (
    <ContainerFormPayment>
        <HeaderFormPayment>
            Escolha a forma de pagamento
            <FiChevronDown size={30}/>
        </HeaderFormPayment>
        <ContentFormPayment>
            Forma de pagamento
            <ContainerRadio>
                <Label>
                    <InputRadio name="paymentType"/>
                    <span>PIX</span>
                </Label>
                <Label>
                    <InputRadio name="paymentType" />
                    <span>CRIPTO</span>
                </Label>
            </ContainerRadio>
            <div></div>
        </ContentFormPayment>
        <ContentFormPayment>
            Escolha uma moeda
            <ContainerRadio>
                <Label>
                    <InputRadio name="currencyType" />
                    <span>BNB</span>
                </Label>
                <Label>
                    <InputRadio name="currencyType"/>
                    <span>BTC</span>
                </Label>
                <Label>
                    <InputRadio name="currencyType" />
                    <span>USDT</span>
                </Label>
            </ContainerRadio>
            <div></div>
        </ContentFormPayment>
        <ContentFormPayment2>
            Defina o valor da compra
            <InputValue />
            <Button css={"bg-blue-50 py-2 px-4 sm:px-1 sm:text-[13px] mm:text-[15px] mm:px-2 "} children={'Finalizar Pagamento'} />
        </ContentFormPayment2>

    </ContainerFormPayment>
  )
}

const ContainerFormPayment = styled.div.attrs({
    className:`
        flex
        flex-col
        gap-1
        w-[50rem]
        lg:w-[42rem]
        md:w-[40rem]
        sm:w-[32rem]
        mm:w-[20rem]
        
        `
    })``

    
    const HeaderFormPayment = styled.div.attrs({
        className:`
            h-[4rem]
            w-full
            flex
            justify-between
            p-[2rem]
            items-center
            font-roboto
            bg-primary
            text-white
            text-[20px]
        `
    })``

    
    const ContentFormPayment = styled.div.attrs({
        className:`
        h-[4rem]
        w-full
        flex
        justify-between
        p-[2rem]
        items-center
        font-roboto
        bg-white
        text-gray-500
        text-[16px]
        mm:flex-col
        mm:p-0
        `
    })``
    
    const ContentFormPayment2 = styled.div.attrs({
        className:`
        h-[4rem]
        w-full
        flex
        justify-between
        p-[2rem]
        items-center
        font-roboto
        bg-white
        text-gray-500
        text-[16px]
        mm:flex-col
        mm:p-2
        mm:h-[8rem]
        `
    })``
    
    const Label = styled.label.attrs({
        className:`
            flex
            items-center
            gap-2
            cursor-pointer
        `
    })``

    const InputRadio = styled.input.attrs({
        className:`
            w-[15px]
            h-[15px]
        `,

        type: 'radio'
        
    })``

    const InputValue = styled.input.attrs({
        placeholder: 'R$ 0,00',
        type: 'text',
        className:`
            border
            border-gray-500
            outline-none
            rounded-md
            sm:w-[8rem]
            mm:w-[15rem]
            px-4
            py-1
        `
    })``

    const ContainerRadio = styled.div.attrs({
        className:`
            flex
            gap-4
            mm:gap-10
        `
    })``