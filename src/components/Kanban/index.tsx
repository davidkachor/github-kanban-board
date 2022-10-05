import React, { useState } from 'react'
import { DragDropContext, DropResult } from 'react-beautiful-dnd'
import { v4 } from 'uuid'
import { cloneDeep } from 'lodash'
import Section from './Section'

import { Wrapper } from './styled'
import Task from '@/types/task'

const MOCHA_DATA1: Task[] = [
	{
		id: v4(),
		user: 'Admin',
		text: 'Some issue 1',
		commentsAmount: 3,
		taskNumber: 123,
	},
	{
		id: v4(),
		user: 'Admin',
		text: 'Some issue 2',
		commentsAmount: 3,
		taskNumber: 123,
	},
	{
		id: v4(),
		user: 'Admin',
		text: 'Some issue 3',
		commentsAmount: 3,
		taskNumber: 123,
	},
	{
		id: v4(),
		user: 'Admin',
		text: 'Some issue 4',
		commentsAmount: 3,
		taskNumber: 123,
	},
	{
		id: v4(),
		user: 'Admin',
		text: 'Some issue 5',
		commentsAmount: 3,
		taskNumber: 123,
	},
]

export type KanbanItem = {
	id: string
	items: Task[]
	title: string
}

const Kanban: React.FC = () => {
	const [kanbanItems, setKanbanItems] = useState<KanbanItem[]>([
		{
			id: 'to-do',
			items: [],
			title: 'ToDo',
		},
		{
			id: 'in-progress',
			items: MOCHA_DATA1,
			title: 'In progress',
		},
		{
			id: 'done',
			items: [],
			title: 'Done',
		},
	])

	const dragEndHandler = (result: DropResult) => {
		if (!result.destination) return
		setKanbanItems(prev => {
			const newState = cloneDeep(prev)
			const source = newState.find(e => e.id === result.source.droppableId)
			const destination = newState.find(
				e => result.destination && e.id === result.destination.droppableId
			)
			if (!source || !destination) return prev
			const item = source.items.find(e => e.id === result.draggableId)
			if (!item) return prev
			source.items.splice(result.source.index, 1)
			// eslint-disable-next-line @typescript-eslint/ban-ts-comment
			// @ts-ignore
			destination.items.splice(result.destination.index, 0, item)
			return newState
		})
	}

	return (
		<DragDropContext onDragEnd={dragEndHandler}>
			<Wrapper>
				{kanbanItems.map(e => (
					<Section key={e.id} {...e} />
				))}
			</Wrapper>
		</DragDropContext>
	)
}

export default Kanban
