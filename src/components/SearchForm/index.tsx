import React from 'react'
import { Input, Button } from 'antd'
import { useForm } from 'antd/es/form/Form'
import { FormStyled, InputItem } from './styled'

const SearchForm: React.FC = () => {
	const [form] = useForm()
	return (
		<header>
			<FormStyled layout={'horizontal'} form={form}>
				<InputItem rules={[{ type: 'url', required: true }]}>
					<Input placeholder={'Enter repo URL'} />
				</InputItem>
				<FormStyled.Item>
					<Button htmlType="submit" type="primary">
						Load issues
					</Button>
				</FormStyled.Item>
			</FormStyled>
		</header>
	)
}

export default SearchForm
