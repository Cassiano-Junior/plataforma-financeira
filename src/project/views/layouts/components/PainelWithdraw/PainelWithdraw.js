import React, { useState, useContext } from 'react'
import Button from '../Button/Button'
import AppContext from '../../../../../framework/helpers/AppContext'
import styled from 'styled-components'


export default function PainelWithdraw() {
     const [paymentType, setPaymentType] = useState('')
    const [selectCurrency, setSelectCurrency] = useState('')
    const [selectValue, setSelectValue] = useState('')
  

    const {setWithdraws, withdraws} = useContext(AppContext)

    function handleAddWithdraw() {
      const newWithdraw = {
        date: new Date().toLocaleDateString('pt-BR', {
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
        }, {timeZone: 'UTC'}),
        paymentType: paymentType,
        value: selectValue.toLocaleString('pt-br', {minimumFractionDigits: 2}),
        currency: selectCurrency,
      }
      setWithdraws([...withdraws, newWithdraw])
      console.log(withdraws)
    }



  return (
    <ContainerPainelWithdraw>
      <div className="flex flex-col gap-4">
      <div className="flex flex-col text-gray-500">
    <label>Passo 1: Escolha a forma de recebimento</label>
    <select className=" w-[15rem] p-2 bg-transparent border rounded-full border-blue-40 cursor-pointer" onChange={event => setPaymentType(event.target.value)}>
      <option></option>
      <option value={'CRIPTO'}>CRIPTO</option>
      <option value={'PIX'}>PIX</option>
    </select>
  </div>

  <div className="flex flex-col text-gray-500">
    <label>Passo 2: Escolha uma moeda</label>
    <select className="w-[15rem] p-2 bg-transparent border rounded-full border-blue-40 cursor-pointer" onChange={event => setSelectCurrency(event.target.value)}>
      <option></option>
      <option value={'BNB'}>BNB</option>
      <option value={'BTC'}>BTC</option>
      <option value={'USDT'}>USDT</option>
    </select>
  </div>

      </div>

      <div className="flex flex-col gap-8 sm:gap-6">

      <div className="flex flex-col md:mt-[23px] text-gray-500">
    <label>Passo 3: Defina um valor</label>
    <input className="w-[15rem] p-2 pl-[1rem] bg-transparent border rounded-full border-blue-40 cursor-pointer h-[38.5px]" value={selectValue} onChange={event => setSelectValue(Number(event.target.value))}/>
  </div>

  <div className="flex items-end gap-4 text-gray-500">
    <Button children="Cancelar" css={'bg-quarty px-8 py-2'}/>
    <Button children="Finalizar" css={'bg-quarty px-8 py-2'} onClick={() => handleAddWithdraw()} />
  </div>

      </div>

    </ContainerPainelWithdraw>
  )
}


const ContainerPainelWithdraw = styled.div.attrs({
  className:`
    bg-white
    p-[2rem]
    flex
    gap-12
    xl:justify-center
    xl:max-w-[50rem]
    lg:justify-start
    sm:flex-col
    sm:gap-1
    lg:gap-8
  `
})``
