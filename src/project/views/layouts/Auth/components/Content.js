import { useContext } from 'react'
import AppContext from '../../../../../framework/helpers/AppContext'

import styled from 'styled-components'

import ContentHeader from './ContentHeader'

export default function Content({ children }) {
	const { sidebarCollapsedState } = useContext(AppContext)
	const [sidebarCollapsed] = sidebarCollapsedState

	return (
		<ContentContainer collapsed={sidebarCollapsed}>
			<ContentHeader />

			<ChildrenContainer>
				{children}
			</ChildrenContainer>
		</ContentContainer>
	)
}

const ContentContainer = styled.div.attrs(({ collapsed }) => ({
  className: `
    ${!collapsed ? 'w-[calc(100%-300px)]' : 'w-[calc(100%-80px)]'}
		md:${!collapsed ? 'hidden' : ''}
    	h-screen  
    	bg-thirdy
		overflow-x-hidden 
		overflow-y-scroll
  `
}))``

const ChildrenContainer = styled.div.attrs({
	className: `
		bg-thirdy 
		overflow-x-hidden 
		overflow-y-scroll
		py-[15px]
		px-[30px]
		mt-[80px]
		flex
		flex-col
		gap-[30px]
	`
})``