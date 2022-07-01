import { useState } from 'react'
import { Assets } from '../../../../../Assets'
import { MdHome } from 'react-icons/md'
import { FaCoins, FaRegCalendarAlt } from 'react-icons/fa'
import { BiUpArrowCircle } from 'react-icons/bi'
import { RiExchangeBoxLine } from 'react-icons/ri'
import { GiWallet, GiHamburgerMenu } from 'react-icons/gi'

export default function SideBar() {
  const [menuToggle, setMenuToggle] = useState(true)

  const toggleMenu = function () {
    let sideBar = document.querySelector('#sidebar-main-wrapper')
    let logo = document.querySelector('#logo')
    let dashboard = document.querySelector('.dashboard')
    let investNow = document.querySelector('.investNow')
    let withdraw = document.querySelector('.withdraw')
    let transactions = document.querySelector('.transactions')
    let wallet = document.querySelector('.wallet')
    let portfolioHistory = document.querySelector('.portfolioHistory')
    let burguerMenu = document.querySelector('#hamburguer-wrapper')

    if (menuToggle) {
      sideBar.classList.remove('w-[400px]')
      sideBar.classList.add('w-[90px]')
      // logo.classList.remove('h-[50px]')
      // logo.classList.add('h-[20px]')
      dashboard.classList.add('hidden')
      investNow.classList.add('hidden')
      withdraw.classList.add('hidden')
      transactions.classList.add('hidden')
      wallet.classList.add('hidden')
      portfolioHistory.classList.add('hidden')
      burguerMenu.classList.add('top-[7px]')

      setMenuToggle(false)
    } else {

      sideBar.classList.add('w-[400px]')
      sideBar.classList.remove('w-[90px]')
      // logo.classList.remove('h-[20px]')
      // logo.classList.add('h-[50px]')
      dashboard.classList.remove('hidden')
      investNow.classList.remove('hidden')
      withdraw.classList.remove('hidden')
      transactions.classList.remove('hidden')
      wallet.classList.remove('hidden')
      portfolioHistory.classList.remove('hidden')
      burguerMenu.classList.remove('top-[7px]')
      
      setMenuToggle(true)
    }
  }

  const logoClass = !!menuToggle ? "bg-primary h-[100px] flex pl-[32px] justify-start items-center relative" : "bg-primary h-[100px] relative"
  const logoImgClass = !!menuToggle ? "h-[50px] w-[150px] cursor-pointer" : "h-[50px] w-[150px] cursor-pointer"

  return (
    <>
      <div
        id="sidebar-main-wrapper"
        className="bg-secondary h-screen flex flex-col w-[400px]"
      >
        <div id="logo-wrapper" className={logoClass}>
          <a href="/">
            <img
              id="logo"
              src={Assets.logo}
              alt="logo"
              className="h-[50px] w-[150px] cursor-pointer"
            />
          </a>

          <button
            id="hamburguer-wrapper"
            className="absolute text-thirdy text-[1.5rem] right-[-55px] bottom-[25%] bg-blue-50 rounded-[50px] w-[3rem] h-[3rem] flex items-center justify-center"
            onClick={toggleMenu}
          >
            <GiHamburgerMenu />
          </button>
        </div>

        <ul
          id="links-list-wrapper"
          className="list-none pt-[2rem] text-letter font-roboto text-[20px]"
        >
          <li className="gap-3 flex items-center hover:bg-thirdy duration-200 h-[70px] rounded-l-[50px]  mt-[15px] pl-[32px] capitalize lg:mr-[30px]">
            <a href="/" className="flex items-center gap-3 cursor-pointer">
              <MdHome />
              <span className="dashboard lg:text-[0.8rem]">dashboard</span>
            </a>
          </li>
          <li className=" gap-3 flex items-center hover:bg-thirdy duration-200 h-[70px] rounded-l-[50px]  mt-[15px] pl-[32px] capitalize">
            <a href="/portfolioHistory" className="flex items-center gap-3 cursor-pointer">
              <FaRegCalendarAlt />
              <span className="portfolioHistory lg:text-[0.8rem]">histórico do portfólio</span>
            </a>
          </li>
          <li className=" gap-3 flex items-center hover:bg-thirdy duration-200 h-[70px] rounded-l-[50px]  mt-[15px] pl-[32px] capitalize">
            <a href="/investNow" className="flex items-center gap-3 cursor-pointer">
              <FaCoins />
              <span className="investNow lg:text-[0.8rem]">invista agora</span>
            </a>
          </li>
          <li className=" gap-3 flex items-center hover:bg-thirdy duration-200 h-[70px] rounded-l-[50px] mt-[15px] pl-[32px] capitalize">
            <a href="/withdraw" className="flex items-center gap-3 cursor-pointer">
              <BiUpArrowCircle />
              <span className="withdraw lg:text-[0.8rem]">retirar</span>
            </a>
          </li>
          <li className=" gap-3 flex items-center hover:bg-thirdy duration-200 h-[70px] rounded-l-[50px] mt-[15px] pl-[32px] capitalize">
            <a href="/transactions" className="flex items-center gap-3 cursor-pointer">
              <RiExchangeBoxLine />
              <span className="transactions lg:text-[0.8rem]">transações</span>
            </a>
          </li>
          <li className=" gap-3 flex items-center hover:bg-thirdy duration-200 h-[70px] rounded-l-[50px] mt-[15px] pl-[32px] capitalize">
            <a href="/wallet" className="flex items-center gap-3">
              <GiWallet />
              <span className="wallet lg:text-[0.8rem] cursor-pointer"> wallet</span>
            </a>
          </li>
        </ul>
      </div>
    </>
  )
}