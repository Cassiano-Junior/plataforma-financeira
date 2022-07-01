import { useContext, useEffect } from 'react';
import Sidebar from './components/Sidebar'
import Api from './../../../../framework/helpers/api'
import Content from './components/Content'
import { User } from './../../../../framework/models/User';
import AppContext from './../../../../framework/helpers/AppContext';
import AsyncLocalStorage from '../../../../framework/helpers/asyncLocalStorage'

import styled from 'styled-components'

export default function Auth({ children }) {
  const GLOBAL = useContext(AppContext);

  async function checkToken() {
      return new Promise(resolve => {
          AsyncLocalStorage.getItem('TOKEN').then((token) => {
              if (token) {

                  return User.check(token).then((valid) => {
                      if (valid) {
                          GLOBAL.setToken(token)
                          Api.get('user/get-info', {}, token).then(function (response) {
                            console.log(response);
                              GLOBAL.setUserInfos(response.data)
                              resolve()
                          })
                      } else {
                          AsyncLocalStorage.removeItem('TOKEN')
                          resolve()
                      }
                  })
              } else {
                  resolve()
              }
          });
      });
  }

  useEffect(() => {
    if (GLOBAL.verificationSteps === 0) {
        checkToken().then(function () {
            GLOBAL.setVerificationSteps(1)
        })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [GLOBAL.verificationSteps])

  return (
    <Container>
      <Sidebar />

      <Content children={children} />
    </Container>
  )
}

const Container = styled.div.attrs({
  className: `
    flex
    flex-row 
    h-screen
  `
})``