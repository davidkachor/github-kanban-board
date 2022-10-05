import React from 'react'
import { Breadcrumb } from 'antd'

import { Item, Nav } from './styled'
import Rating from './Rating'

const NavBar: React.FC = () => {
	return (
		<Nav>
			<Breadcrumb separator=">">
				<Item href="https://github.com/davidkachor">davidkachor</Item>
				<Item href="https://github.com/davidkachor/short-link-app">
					short-link-app
				</Item>
			</Breadcrumb>
			<Rating amount={10000} />
		</Nav>
	)
}

export default NavBar
