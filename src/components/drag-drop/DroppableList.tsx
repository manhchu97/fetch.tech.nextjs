import { DragDropContext, DropResult, Droppable } from 'react-beautiful-dnd'

import { IOption, IOptionParams } from '@/types/contact'

import DraggableItem from './DraggableItem'

interface IDroppableListProps {
  list: IOption[]
  className?: string
  onUpdateOption: (option: IOptionParams) => boolean
  onUpdateDrag: (list: IOption[]) => void
  labelInfo?: (index: number) => React.ReactElement
}

const DroppableList = ({
  list = [],
  className = '',
  onUpdateOption = () => false,
  onUpdateDrag = () => {},
  labelInfo = () => <></>,
}: IDroppableListProps) => {
  const onDragEnd = (result: DropResult) => {
    if (!result.destination) return

    const newListDrag = [...list]
    const [moveItem] = newListDrag.splice(result.source.index, 1)

    newListDrag.splice(result.destination.index, 0, moveItem)
    onUpdateDrag(newListDrag)
  }

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId='droppable'>
        {(provided) => (
          <div
            {...provided.droppableProps}
            ref={provided.innerRef}
            className='droppable-list'
          >
            {list.map((item, index) => {
              if (!Array.isArray(list) || !list.length) return null

              return (
                <DraggableItem
                  item={item}
                  index={index}
                  key={item.value}
                  onUpdateOption={onUpdateOption}
                  className={className}
                  labelInfo={labelInfo}
                />
              )
            })}

            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  )
}

export default DroppableList
