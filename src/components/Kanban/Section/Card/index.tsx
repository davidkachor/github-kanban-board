import React from 'react'
import { Card } from 'antd'
import { Draggable } from 'react-beautiful-dnd'

import Task from '@/types/task'

const TaskCard: React.FC<
	{
		index: number
	} & Task
> = ({ user, text, taskNumber, commentsAmount, index, id }) => {
	return (
		<Draggable draggableId={id} index={index}>
			{provided => (
				<Card
					title={text}
					ref={provided.innerRef}
					{...provided.draggableProps}
					{...provided.dragHandleProps}
				>
					<p>#{taskNumber} opened 3 days ago</p>
					<p>
						{user} | Comments: {commentsAmount}
					</p>
				</Card>
			)}
		</Draggable>
	)
}

export default TaskCard
