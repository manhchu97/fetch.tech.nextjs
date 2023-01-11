import { SetStateAction, memo, useEffect, useRef, useState } from 'react'
import { Draggable } from 'react-beautiful-dnd'

import Image from 'next/image'

import clsx from 'clsx'

import Modal from '@/components/modal/Modal'

import useAutosizeTextArea from '@/hooks/useAutosizeTextArea'

import { ACTION_TYPE } from '@/sections/contact/multi-step/requirement/config'

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

  const handleOpenEdit = () => {
    setIsEditOption(true)
  }

  const handleCloseEdit = () => {
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
    if (e.currentTarget.className.includes('is-edit')) return

    e.currentTarget.focus()
  }

  useAutosizeTextArea(textAreaRef.current)

  useEffect(() => {
    const endText = textAreaRef.current?.value.length || 0
    if (!textAreaRef.current) return
    const scrollHeight = textAreaRef?.current.scrollHeight

    textAreaRef.current.style.height = scrollHeight + 'px'
    textAreaRef.current?.setSelectionRange(endText, endText)
    textAreaRef.current?.focus()
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
            className={clsx(
              { 'draggable-item': true },
              { 'is-dragging': snapshot.isDragging },
              { 'is-edit': isEditOption },
            )}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            ref={provided.innerRef}
            onMouseDown={handlePressOut}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                handleCloseEdit()
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
                  src='/images/IconMenuDragDrop.svg'
                  width={18}
                  height={18}
                />

                {isEditOption ? (
                  <textarea
                    className='draggable-item-input'
                    value={labelOptionValue}
                    ref={textAreaRef}
                    onChange={handleChangeLabelOption}
                    onBlur={handleCloseEdit}
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
                    src='/images/IconSaveDragDrop.svg'
                    width={18}
                    height={18}
                    onClick={handleCloseEdit}
                  />
                ) : (
                  <Image
                    alt='Icon edit item'
                    src='/images/IconEditDragDrop.svg'
                    width={18}
                    height={18}
                    onClick={handleOpenEdit}
                  />
                )}

                <Image
                  alt='Icon delete item'
                  src='/images/IconDeleteDragDrop.svg'
                  width={18}
                  height={18}
                  onClick={handleOpenConfirmModal}
                />
              </div>
            </div>
          </div>
        )}
      </Draggable>

      <Modal
        onClose={handleCloseConfirmModal}
        isOpen={isOpen}
        header={
          <div className='d-flex justify-content-end'>
            <span className='px-3 py-2' onClick={handleCloseConfirmModal}>
              <i className='bi bi-x-lg'></i>
            </span>
          </div>
        }
        footer={
          <div className='d-flex justify-content-end p-3'>
            <button
              className='btn btn-light '
              onClick={handleCloseConfirmModal}
            >
              Cancel
            </button>
            <button
              className='btn btn-warning'
              style={{ color: '#fff', marginLeft: '8px' }}
              onClick={handleDeleteOption}
            >
              Delete
            </button>
          </div>
        }
      >
        <div className='modal-content h6'>
          Are you sure you want to delete this item?
        </div>
      </Modal>
    </>
  )
}

export default memo(DraggableItem)
