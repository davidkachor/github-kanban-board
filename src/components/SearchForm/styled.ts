import styled from 'styled-components'
import { Form } from 'antd'

export const FormStyled = styled(Form)`
	display: flex;
	gap: 10px;
	height: auto;

	& > div {
		margin: 0;
	}
`

export const InputItem = styled(Form.Item)`
	flex: 1 1 auto;
`
