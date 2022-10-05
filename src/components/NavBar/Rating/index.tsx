import React from 'react'
import { Wrapper } from './styled'
import star from '@/assets/icons/star.svg'

const Rating: React.FC<{ amount: number }> = ({ amount }) => {
	return (
		<Wrapper>
			<img src={star} alt="rating" width="20" height="20" />
			<p>{amount} likes</p>
		</Wrapper>
	)
}

export default Rating
