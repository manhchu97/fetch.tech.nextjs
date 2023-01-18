import { SetStateAction, memo, useEffect, useRef, useState } from 'react'
import { Draggable } from 'react-beautiful-dnd'

import Image from 'next/image'

import clsx from 'clsx'

import { ACTION_TYPE } from '@/config/contact'

import useAutosizeTextArea from '@/hooks/useAutosizeTextArea'

import { IOption, IOptionParams } from '@/types/contact'

interface IDraggableItemProps {
  item: IOption
  index: number
  onUpdateOption?: (option: IOptionParams) => void
}

const DraggableItem = ({
  item,
  index,
  onUpdateOption = () => {},
}: IDraggableItemProps) => {
  const { value: optionId, label, isDeleted = false, isAdded = false } = item

  const [labelOptionValue, setLabelOptionValue] = useState<string>(label || '')
  const [isEditOption, setIsEditOption] = useState<boolean>(false)

  const [isAnimationAdd, setIsAnimationAdd] = useState<boolean>(false)
  const [isAnimationDelete, setIsAnimationDelete] = useState<boolean>(false)

  const textAreaRef = useRef<HTMLTextAreaElement>(null)

  const handleOpenEditOption = () => {
    setIsEditOption(true)
  }

  const handleCloseEditOption = () => {
    setIsEditOption(false)

    onUpdateOption({
      index: optionId,
      label: labelOptionValue,
      type: ACTION_TYPE.EDIT,
    })
  }

  const handleDeleteOption = () => {
    onUpdateOption({
      index: optionId,
      type: ACTION_TYPE.DELETING,
    })
  }

  const handleChangeLabelOption = (e: {
    target: { value: SetStateAction<string> }
  }) => {
    setLabelOptionValue(e.target.value)
  }

  const handlePressOut = (e: {
    currentTarget: { className: string | string[]; focus: () => void }
  }) => {
    if (e.currentTarget?.className?.includes('is-edit')) return

    e.currentTarget?.focus()
  }

  useAutosizeTextArea(textAreaRef.current)

  useEffect(() => {
    const element = textAreaRef.current

    if (!element) return

    const endText = element.value.length || 0

    const scrollHeight = element.scrollHeight

    element.style.height = scrollHeight + 'px'
    element.setSelectionRange(endText, endText)
    element.focus()
  })

  useEffect(() => {
    setIsAnimationDelete(!!isDeleted)
  }, [isDeleted])

  useEffect(() => {
    if (!isDeleted) return

    // use setTimeout 650ms for smooth animation because animation-duration of animate.css is 1000ms
    setTimeout(() => {
      onUpdateOption({ index: optionId, type: ACTION_TYPE.DELETE })
    }, 650)
  }, [isDeleted, labelOptionValue, onUpdateOption, optionId])

  useEffect(() => {
    setIsAnimationAdd(isAdded)
  }, [isAdded])

  useEffect(() => {
    if (!isAdded) return

    // use setTimeout 650ms to wait animation after add item complete
    setTimeout(() => {
      onUpdateOption({
        index: optionId,
        type: ACTION_TYPE.ADDED,
      })
    }, 650)
  }, [isAdded, onUpdateOption, optionId])

  return (
    <Draggable draggableId={item.value} index={index} key={item.value}>
      {(provided, snapshot) => (
        <div
          className={clsx({
            'draggable-item': true,
            'is-dragging': snapshot.isDragging,
            'is-edit': isEditOption,
            animate__animated: true,
            animate__bounceIn: isAnimationAdd,
            animate__bounceOut: isAnimationDelete,
          })}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
          onMouseDown={handlePressOut}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              e.preventDefault()
              handleCloseEditOption()
            }
          }}
        >
          <div
            className={clsx({
              'draggable-item-wrapper': true,
            })}
          >
            <div className='draggable-item-content'>
              <Image
                alt='Icon menu'
                src='/images/contact/IconMenuDragDrop.svg'
                width={18}
                height={18}
              />

              {isEditOption ? (
                <textarea
                  className='draggable-item-input'
                  value={labelOptionValue}
                  ref={textAreaRef}
                  onChange={handleChangeLabelOption}
                  onBlur={handleCloseEditOption}
                  rows={1}
                />
              ) : (
                <p className='draggable-item-label'>{labelOptionValue}</p>
              )}
            </div>

            <div className='draggable-item-action'>
              {isEditOption ? (
                <Image
                  alt='Icon save item'
                  src='/images/contact/IconSaveDragDrop.svg'
                  width={18}
                  height={18}
                  onClick={handleCloseEditOption}
                />
              ) : (
                <Image
                  alt='Icon edit item'
                  src='/images/contact/IconEditDragDrop.svg'
                  width={18}
                  height={18}
                  onClick={handleOpenEditOption}
                />
              )}

              <Image
                alt='Icon delete item'
                src='/images/contact/IconDeleteDragDrop.svg'
                width={18}
                height={18}
                onClick={handleDeleteOption}
              />
            </div>
          </div>
        </div>
      )}
    </Draggable>
  )
}

export default memo(DraggableItem)
