import { Dispatch, SetStateAction, useCallback } from 'react'

import clsx from 'clsx'
import { paramCase } from 'param-case'

import { ACTION_TYPE } from '@/config/contact'

import { IOption, IOptionParams } from '@/types/contact'

import styles from './DragDrop.module.scss'
import DroppableList from './DroppableList'

interface IDroppableListProps {
  id: string
  title: string
  list: IOption[]
  listSelectedOption: IOption[]
  sectionSelected?: string
  style?: object
  validation?: boolean
  className?: string
  updateListOption: Dispatch<SetStateAction<IOption[]>>
  setSectionSelected?: (section: string) => void
  labelInfo?: (index: number) => React.ReactElement
}

const DroppableSection = ({
  id,
  title,
  list = [],
  listSelectedOption = [],
  sectionSelected,
  validation = false,
  className = '',
  updateListOption = () => {},
  setSectionSelected = () => {},
  labelInfo = () => <></>,
  ...other
}: IDroppableListProps) => {
  const handleUpdateAfterAddItem = useCallback(() => {
    updateListOption((prevState) =>
      prevState.map(({ label = '', value = '' }) => ({
        value,
        label,
      })),
    )
  }, [updateListOption])

  const handleDeleteItem = useCallback(
    (index: string | number) => {
      updateListOption((prevState) =>
        prevState.filter((item) => item.value !== index),
      )
    },
    [updateListOption],
  )

  const handleUpdateBeforeDeleteItem = useCallback(
    (index: string | number) => {
      updateListOption((prevState: IOption[]) => {
        return prevState.map((option) => {
          if (option.value === index) {
            return {
              ...option,
              isDeleted: true,
            }
          }

          return option
        })
      })
    },
    [updateListOption],
  )

  const handleUpdateItem = useCallback(
    (index: string | number, label: string) => {
      updateListOption((prevState: IOption[]) => {
        return prevState
          .map((option) => {
            if (option.value === index) {
              return {
                ...option,
                value: paramCase(label),
                label,
              }
            }

            return option
          })
          .filter((option) => option.label)
      })
    },
    [updateListOption],
  )

  const onUpdateOption = useCallback(
    ({ index = '', label = '', type = '' }: IOptionParams) => {
      if (type === ACTION_TYPE.DELETING) {
        handleUpdateBeforeDeleteItem(index)
        return false
      }

      if (type === ACTION_TYPE.DELETE) {
        handleDeleteItem(index)
        return false
      }

      if (type === ACTION_TYPE.ADDED) {
        handleUpdateAfterAddItem()
        return false
      }

      const isLabelExisted = listSelectedOption
        .filter((item) => item.value !== index)
        .some((item) => item.value === paramCase(label))

      if (!isLabelExisted) {
        handleUpdateItem(index, label)
        return false
      }

      return true
    },
    [
      handleDeleteItem,
      handleUpdateAfterAddItem,
      handleUpdateBeforeDeleteItem,
      handleUpdateItem,
      listSelectedOption,
    ],
  )

  const onUpdateDrag = useCallback(
    (listOption: IOption[]) => {
      updateListOption(listOption)
    },
    [updateListOption],
  )

  const handleClickSection = () => {
    setSectionSelected(id)
  }

  return (
    <div className={styles['droppable-container']} {...other}>
      <div className='droppable-title h5'>
        {title}
        {validation && <span className='asterisk'>*</span>}
      </div>

      <section
        className={clsx({
          'droppable-section': true,
          selected: sectionSelected === id,
        })}
        onClick={handleClickSection}
      >
        <DroppableList
          list={list}
          onUpdateOption={onUpdateOption}
          onUpdateDrag={onUpdateDrag}
          className={className}
          labelInfo={labelInfo}
        />
      </section>
    </div>
  )
}

export default DroppableSection
