import clsx from 'clsx'

import { IOption } from '@/types/contact'

import styles from './DragDrop.module.scss'
import DroppableList from './DroppableList'

interface IDroppableListProps {
  id: string
  title: string
  list: IOption[]
  sectionSelected?: string
  style?: object
  isError?: boolean
  validation?: boolean
  onUpdateOption?: (index: string | number, label: string, type: string) => void
  onUpdateDrag?: (list: IOption[]) => void
  setSectionSelected?: (section: string) => void
}

const DroppableSection = ({
  list = [],
  title,
  id,
  isError = false,
  validation = false,
  sectionSelected,
  onUpdateOption = () => {},
  onUpdateDrag = () => {},
  setSectionSelected = () => {},
  ...other
}: IDroppableListProps) => {
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
        className={clsx('droppable-section', {
          selected: sectionSelected === id,
          error: isError,
        })}
        onClick={handleClickSection}
      >
        <DroppableList
          list={list}
          onUpdateOption={onUpdateOption}
          onUpdateDrag={onUpdateDrag}
        />
      </section>

      {isError && (
        <p className='error-message'>
          You must have chosen at least 4 requirements
        </p>
      )}
    </div>
  )
}

export default DroppableSection
