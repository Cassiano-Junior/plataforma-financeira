import { useContext } from 'react'
import styled from 'styled-components'

import Select from './Select'

import { BsFillShareFill } from 'react-icons/bs'
import { MdNotifications } from 'react-icons/md'

import ProfileMenu from '../../components/ProfileMenu.js/ProfileMenu'

import AppContext from '../../../../../framework/helpers/AppContext'

export default function ContentHeader() {
	const { sidebarCollapsedState } = useContext(AppContext)
	const [sidebarCollapsed] = sidebarCollapsedState

	return (
		<Container collapsed={sidebarCollapsed}>
			<Select />

			<NotificationsContainer>
				<MdNotifications className='text-[25px]' />

				<NotificationsCounter className='mt-[-8px]'>
					99+
				</NotificationsCounter>

				<NotificationsText className='md:hidden'>
					Notificações
				</NotificationsText>

			</NotificationsContainer>

			<IndicationsContainer>
				<BsFillShareFill className='text-[20px]' />
				<span className='md:hidden'>Link de Indicação</span>
			</IndicationsContainer>

			<ProfileMenu />
		</Container>
	)
}

const Container = styled.div.attrs(({ collapsed }) => ({
	className: `
		h-[80px] 
		bg-white 
		flex 
		justify-start
		md:justify-around
		items-center
		text-letter
		px-[30px]
		gap-[30px]
		fixed
		z-[100]

		${!collapsed ? (
			`
				w-[calc(100%-300px)]			
			`
		) : (
			`
				w-[calc(100%-80px)]
			`
		)}
	`
}))``

const NotificationsContainer = styled.div.attrs({
	className: `
		indicator
		flex
		items-center
		hover:text-gray-600
		cursor-pointer
	`
})``

const NotificationsCounter = styled.span.attrs({
	className: `
		indicator-item 
		badge 
		badge-secondary 
		bg-blue-50 
		border-none
	`
})``

const NotificationsText = styled.button.attrs({
	className: ` 
		text-[16px] 
		pt-[5px]
	`
})``

const IndicationsContainer = styled.button.attrs({
	className: `
		flex 
		items-center 
		gap-[0.5rem] 
		hover:text-gray-600 
		pt-[5px]
	`
})``