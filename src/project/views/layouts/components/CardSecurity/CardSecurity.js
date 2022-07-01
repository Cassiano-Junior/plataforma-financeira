import React from 'react'
import Button from '../Button/Button'
import styled from 'styled-components'
import { RiInformationFill } from 'react-icons/ri'

export default function CardSecurity(props) {

  return (
    <ContainerCardSecurity>
      <DescriptionCardSecurity>
        <IconDescription>{props.icon}</IconDescription>
        {props.description}
      </DescriptionCardSecurity>
      <ContainerButton>
        <Button css={'bg-quarty px-10 py-1'} children={props.button} onClick={props.onClick}/>
      </ContainerButton>
      <StatusCardSecurity color='bg-yellow'>
        {props.status}
        <RiInformationFill className="text-[20px]" />
      </StatusCardSecurity>
    </ContainerCardSecurity>
  )
}

const ContainerCardSecurity = styled.div.attrs({
  className:`
    flex
    flex-col
    border
    border-[#999A9B]
    bg-white
    rounded-3xl 
    gap-4
    w-[25rem] mm:w-[20rem]
    pt-6
  `
})``

const DescriptionCardSecurity = styled.div.attrs({
  className:`
    flex
    flex-col
    items-center
    text-gray-500
    gap-4
  `
})``

const IconDescription = styled.div.attrs({
  className:`
    text-[50px]
    text-quarty
  `
})``

const ContainerButton = styled.div.attrs({
  className:`
    flex
    justify-center
  `
})``

const StatusCardSecurity = styled.div.attrs(props => ({
  className:`
    flex
    items-center
    rounded-b-3xl
    text-white
    py-2
    justify-center
    gap-10
    ${props.color}
  `
}))``