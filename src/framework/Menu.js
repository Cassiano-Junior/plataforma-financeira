import { Routes, Route,  } from 'react-router-dom'
import Dashboard from '../project/views/Dashboard'
import MyProfile from '../project/views/MyProfile'
import Transactions from '../project/views/Transactions'
import Wallet from '../project/views/Wallet'
import Withdraw from '../project/views/Withdraw'
import InvestNow from '../project/views/InvestNow'
import PortfolioHistory from '../project/views/PortfolioHistory'
import Security from '../project/views/Security'
import Login from '../project/views/Login'
import Register from '../project/views/Register'
import Forgot from '../project/views/Forgot'
import ResetPassword from '../project/views/ResetPassword'

export default function Menu(params) {
  return (
    <Routes>
      <Route path="/" exact element={<Dashboard />} />
      <Route path="/portfolioHistory" exact element={<PortfolioHistory />} />
      <Route path="/investNow" exact element={<InvestNow />} />
      <Route path="/withdraw" exact element={<Withdraw />} />
      <Route path="/transactions" exact element={<Transactions />} />
      <Route path="/wallet" exact element={<Wallet />} />
      <Route path="/myprofile" exact element={<MyProfile />} />
      <Route path="/security" exact element={<Security />} />
      <Route path="/security/:code" exact element={<Security />} />
      <Route path="/login" exact element={<Login />} />
      <Route path="/register" exact element={<Register />} />
      <Route path="/forgot" exact element={<Forgot />} />
      <Route path="/reset/:token" exact element={<ResetPassword />} />
    </Routes>
  )
}
