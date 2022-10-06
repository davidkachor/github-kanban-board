import React from 'react'
import { Droppable } from 'react-beautiful-dnd'

import { Wrapper, Title, CardWrapper, CardContainer } from './styled'
import Task from '@/types/task'
import TaskCard from '@/components/Kanban/Section/Card'

const Section: React.FC<{
	title: string
	items: Task[]
	id: string
}> = ({ title, items, id }) => {
	return (
		<Wrapper>
			{!!title && <Title>{title}</Title>}
			<CardWrapper>
				<Droppable droppableId={id}>
					{provided => (
						<CardContainer {...provided.droppableProps} ref={provided.innerRef}>
							{!!items &&
								items.map((e, i) => <TaskCard key={e.id} {...e} index={i} />)}
							{provided.placeholder}
						</CardContainer>
					)}
				</Droppable>
			</CardWrapper>
		</Wrapper>
	)
}

export default Section
