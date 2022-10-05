import styled from 'styled-components'
import { Breadcrumb } from 'antd'

export const Nav = styled.nav`
	display: flex;
	gap: 20px;
`

export const Item = styled(Breadcrumb.Item)`

  &:hover {
		text-decoration: underline;
	}
`
