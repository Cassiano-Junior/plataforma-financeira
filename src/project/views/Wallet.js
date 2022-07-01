import React from 'react'
import styled from 'styled-components'
import Auth from './layouts/Auth/Auth'
import qrcode from './layouts/components/Images/qrcode.png'
import Input from './layouts/components/Input/Input'
import Card from './layouts/components/Card/Card'
import { FaCoins } from 'react-icons/fa'
import Title from './layouts/components/Title/Title'
import PainelWallet from './layouts/components/PainelWallet/PainelWallet'
import TableWallet from './layouts/components/TableWallet/TableWallet'

export default function Wallet() {
  const saldoAtual = {
    descricao: <FaCoins />,
    valor: '$ 0.00',
    tipo: 'Saldo Atual',
  }

  return (
    <Auth>
      <ContainerWallet>
        <QrCode src={qrcode} />

        <ContainerBannerWallet>
          <ContentBannerWallet>
            <Title
              css={`text-[20px] font-roboto ml-4`}
              children="Minha Wallet"
            />
            <Input
              value={`KLAJHSDGFLADKJFGHLAKLAJDHGFLAKJH `}
              css={'w-[35rem] xl:w-[30rem] mm:w-[18rem] mm:text-[13px] mm:px-1'}
            />
          </ContentBannerWallet>
        </ContainerBannerWallet>
        <ContainerCardWallet>
          <Card {...saldoAtual} />
        </ContainerCardWallet>
      </ContainerWallet>

      <PainelWallet />
      <TableWallet />
    </Auth>
  )
}

const ContainerWallet = styled.div.attrs({
  className: `
    flex
    lg:flex-wrap
  `,
})``

const QrCode = styled.img.attrs({
  alt: 'QR Code',

  className: `
    h-[12.5rem]
    w-[13rem]
    lg:order-1
  `,
})``

const ContainerBannerWallet = styled.div.attrs({
  className: `
    bg-white
    flex
    h-[12.5rem]
    lg:order-3
    lg:w-[50rem]
    mm:w-[20rem]
  `,
})``

const ContentBannerWallet = styled.div.attrs({
  className: `
    flex
    flex-col
    justify-end
    p-4
  `,
})``

const ContainerCardWallet = styled.div.attrs({
  className: `
    bg-blue-40
    flex
    flex-col
    items-center
    w-[13rem]
    lg:order-2
  `,
})``
