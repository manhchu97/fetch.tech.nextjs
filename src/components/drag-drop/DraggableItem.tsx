import { SetStateAction, memo, useEffect, useRef, useState } from 'react'
import { Draggable } from 'react-beautiful-dnd'

import Image from 'next/image'

import clsx from 'clsx'

import { ACTION_TYPE } from '@/config/contact'

import ConfirmDialog from '@/components/confirm-dialog'

import useAutosizeTextArea from '@/hooks/useAutosizeTextArea'

import { IOption } from '@/types/contact'

interface IDraggableItemProps {
  item: IOption
  index: number
  onUpdateOption?: (index: string | number, label: string, type: string) => void
}

const DraggableItem = ({
  item,
  index,
  onUpdateOption = () => {},
}: IDraggableItemProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [labelOptionValue, setLabelOptionValue] = useState<string>(
    item.label || '',
  )
  const [isEditOption, setIsEditOption] = useState<boolean>(false)

  const textAreaRef = useRef<HTMLTextAreaElement>(null)

  const handleOpenConfirmModal = () => {
    setIsOpen(true)
  }

  const handleCloseConfirmModal = () => {
    setIsOpen(false)
  }

  const handleOpenEditOption = () => {
    setIsEditOption(true)
  }

  const handleCloseEditOption = () => {
    setIsEditOption(false)
    onUpdateOption(item.value, labelOptionValue, ACTION_TYPE.EDIT)
  }

  const handleDeleteOption = () => {
    onUpdateOption(item.value, labelOptionValue, ACTION_TYPE.DELETE)
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

  return (
    <>
      <Draggable
        draggableId={item.value.toString()}
        index={index}
        key={item.value}
      >
        {(provided, snapshot) => (
          <div
            className={clsx({
              'draggable-item': true,
              'is-dragging': snapshot.isDragging,
              'is-edit': isEditOption,
            })}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            ref={provided.innerRef}
            onMouseDown={handlePressOut}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                handleCloseEditOption()
                e.preventDefault()
              }
            }}
          >
            <div
              className={clsx({
                'draggable-item-wrapper': true,
                animate__animated: true,
                animate__slideInLeft: true,
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
                  onClick={handleOpenConfirmModal}
                />
              </div>
            </div>
          </div>
        )}
      </Draggable>

      {isOpen && (
        <ConfirmDialog
          isOpen
          onClose={handleCloseConfirmModal}
          title='Are you sure you want to delete this item ?'
          actions={
            <div className='d-flex justify-content-end p-4'>
              <button
                className='btn btn-light'
                onClick={handleCloseConfirmModal}
              >
                Cancel
              </button>

              <button className='btn btn-danger' onClick={handleDeleteOption}>
                Delete
              </button>
            </div>
          }
        />
      )}
    </>
  )
}

export default memo(DraggableItem)
