import React from 'react'
import Auth from './layouts/Auth/Auth'
import styled from 'styled-components'
import FormProfile from './layouts/components/FormProfile/FormProfile'

export default function MyProfile() {
  return (
    <Auth>
       <ContainerProfile>
        <FormProfile />
     </ContainerProfile>
    </Auth>
  )
}


const ContainerProfile = styled.div.attrs({
  className:`
    flex
    flex-col
    p-[3rem]
    mm:p-0
    gap-[2rem]
  `
})``