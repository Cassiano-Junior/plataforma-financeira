import { useContext } from 'react'
import { MdHome } from 'react-icons/md'
import { FaRegCalendarAlt, FaCoins } from 'react-icons/fa'
import { BiUpArrowCircle } from 'react-icons/bi'
import { RiExchangeBoxLine } from 'react-icons/ri'
import { GiWallet, GiHamburgerMenu } from 'react-icons/gi'
import { useNavigate } from 'react-router-dom'

import { Assets } from '../../../../../Assets'

import styled from 'styled-components'

import AppContext from '../../../../../framework/helpers/AppContext'

const menuItems = [
  { text: 'Dashboard', Icon: MdHome, path: '/' },
  { text: 'Histórico do Portfólio', Icon: FaRegCalendarAlt, path: '/portfolioHistory' },
  { text: 'Invista Agora', Icon: FaCoins, path: '/investNow' },
  { text: 'Retirar', Icon: BiUpArrowCircle, path:'/withdraw' },
  { text: 'Transações', Icon: RiExchangeBoxLine, path: '/transactions' },
  { text: 'Wallet', Icon: GiWallet, path: '/wallet' },
]

export default function Sidebar() {
  const navigate = useNavigate()
  const { sidebarCollapsedState } = useContext(AppContext)

	const [sidebarCollapsed, setSidebarCollapsed] = sidebarCollapsedState

	function toggleMenu() {
		setSidebarCollapsed(!sidebarCollapsed)
	}

	return (
		<SidebarContainer collapsed={sidebarCollapsed}>
			<SidebarHeader collapsed={sidebarCollapsed}>
				<div className="text-white font-bold text-[50px] ml-[30px]"
         onClick={() => navigate('/')} collapsed={sidebarCollapsed} >
          LOGO
        </div>
			
				<HamburguerMenuButton collapsed={sidebarCollapsed} onClick={toggleMenu}>
					<GiHamburgerMenu />
				</HamburguerMenuButton>
			</SidebarHeader>

			<Menu>
				{menuItems?.map(({ text, Icon, path }) => (
					<MenuItem onClick={() => navigate(path)}>
						<Icon />
						<MenuItemText collapsed={sidebarCollapsed} children={text} />
					</MenuItem>
				))}
			</Menu>
		</SidebarContainer>
	)
}

const SidebarContainer = styled.div.attrs(({ collapsed }) => ({
  className: `
    ${!collapsed ? (
      `
        w-[300px]
        md:w-[100%]
      `
    ) : 'w-[80px]'}
    flex
    flex-col
    bg-secondary
    h-full
    z-[200]
  `
}))`

`

const SidebarHeader = styled.div.attrs(({ collapsed }) => ({
  className: `
    w-[100%]
    h-[80px]
    bg-primary
    flex
    items-center
    relative
    ${!collapsed ? 'justify-start' : 'justify-center'}
  `
}))``

const Logo = styled.img.attrs(({ collapsed }) => ({
  src: Assets.logo,
  alt: 'logo',
  className: `
    cursor-pointer
    ${!collapsed ? 'h-[40px]' : 'h-[25px]'}
    ${!collapsed ? 'pl-[32px]' : ''}
  `
}))``

const HamburguerMenuButton = styled.button.attrs(({ collapsed }) => ({
  className: `
    absolute 
    right-[0] 
    bg-blue-50 
    rounded-[50%] 
    text-thirdy
    ${!collapsed ? (
      `
        text-[25px]
        p-[8px]
        mr-[-20px]
        md:mr-[32px]
      `
    ) : (
      `
      text-[15px]
      p-[4px]
      mr-[-12px]
      `
    )}
  `
}))``

const Menu = styled.ul.attrs(({ collapsed }) => ({
  className: `
    list-none 
    mt-[15px] 
    ml-[15px] 
    text-letter 
    font-roboto 
    text-[20px]
  `
}))``

const MenuItem = styled.li.attrs(({ collapsed }) => ({
  className: `
    gap-3 
    flex 
    items-center 
    hover:bg-thirdy 
    duration-200 
    h-[70px] 
    pl-[17px] 
    rounded-l-[50px] 
    capitalize
    cursor-pointer
    select-none
    mb-[5px]
  `
}))``

const MenuItemText = styled.span`
  ${props => !props.collapsed ? '' : 'display: none;'}
`