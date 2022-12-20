import clsx from 'clsx'
import Image from 'next/image'

import styles from './DropdownItem.module.scss'

interface DropdownItemProps {
  title: string
  text?: string
  imageSrc?: string
}

const DropdownItem = (props: DropdownItemProps): React.ReactElement => {
  const { text = '', title = '', imageSrc = '' } = props

  return (
    <div
      role='button'
      className={clsx('ft-dropdown-item', styles['dropdown-item-container'])}
    >
      <div className='header__dropdown-item__img'>
        {imageSrc && (
          <Image
            className='header__dropdown-item__img__icon'
            src={imageSrc}
            alt='arrow'
            width={22}
            height={28}
          />
        )}
      </div>

      <div className='header__dropdown-item__content'>
        <div className='header__dropdown-item__content__text'>{title}</div>

        <div className='header__dropdown-item__content__sub-text'>{text}</div>
      </div>
    </div>
  )
}

export default DropdownItem
