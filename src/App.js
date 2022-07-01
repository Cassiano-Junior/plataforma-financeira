import { useState, useEffect } from 'react'
import AppContext from './framework/helpers/AppContext'
import Menu from './framework/Menu'
import Auth from './project/views/layouts/Auth/Auth'

function App() {
  const [verificationSteps, setVerificationSteps] = useState(0)
  const [contentText, setContentText] = useState(null)
  const [language, setLanguage] = useState('pt-BR')
  const [context, setContext] = useState(null)
  const [token, setToken] = useState(null)
  const [withdraws, setWithdraws] = useState([])
  const [userInfos, setUserInfos] = useState(false)
  const sidebarCollapsedState = useState(false)
  const [_, setSidebarCollapsed] = sidebarCollapsedState
  const [transfersWallet, setTransfersWallet] = useState([])

  const appSettings = {
    token,
    verificationSteps,
    language,
    context,
    token,
    setToken,
    contentText,
    userInfos,
    setLanguage,
    setContext,
    withdraws,
    setWithdraws,
    sidebarCollapsedState,
    transfersWallet,
    setTransfersWallet,
    setContentText,
    setUserInfos,
    setToken,
    setVerificationSteps,
  }

  useEffect(() => {
    if (window.innerWidth <= 760) setSidebarCollapsed(true)
  }, [window.innerWidth])

  return (
    <AppContext.Provider value={appSettings}>
      <Menu />
    </AppContext.Provider>
  )
}

export default App
