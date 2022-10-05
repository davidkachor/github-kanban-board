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
			<Droppable droppableId={id}>
				{provided => (
					<>
						<CardWrapper >
							<CardContainer{...provided.droppableProps} ref={provided.innerRef}>
								{!!items &&
									items.map((e, i) => <TaskCard key={e.id} {...e} index={i} />)}
							</CardContainer>
						</CardWrapper>
						{provided.placeholder}
					</>
				)}
			</Droppable>
		</Wrapper>
	)
}

export default Section
