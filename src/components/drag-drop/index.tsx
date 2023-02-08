import clsx from 'clsx'

import { IOption, IOptionParams } from '@/types/contact'

import styles from './DragDrop.module.scss'
import DroppableList from './DroppableList'

interface IDroppableListProps {
  id: string
  title: string
  list: IOption[]
  sectionSelected?: string
  style?: object
  validation?: boolean
  onUpdateOption?: (option: IOptionParams) => boolean
  onUpdateDrag?: (list: IOption[]) => void
  setSectionSelected?: (section: string) => void
}

const DroppableSection = ({
  list = [],
  title,
  id,
  validation = false,
  sectionSelected,
  onUpdateOption = () => false,
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
        />
      </section>
    </div>
  )
}

export default DroppableSection
