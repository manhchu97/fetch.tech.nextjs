import Image from 'next/image'

interface MenuItemProps {
  title: string
  id?: string
  target?: string
  hasIcon?: boolean
  overrideHeaderColor?: boolean
}

const MenuItem = ({
  id = '',
  title = '',
  target = '',
  hasIcon = false,
  overrideHeaderColor = false,
}: MenuItemProps): React.ReactElement => {
  return (
    <div
      role='button'
      id={id}
      className='menu-item-container'
      data-bs-toggle={`${hasIcon ? 'dropdown' : ''}`}
      data-bs-target={`#${target}`}
      aria-expanded='false'
    >
      {title}
      {hasIcon && (
        <div
          className='menu-icon-container'
          style={{
            filter: overrideHeaderColor ? 'brightness(0) invert(1)' : '',
          }}
        >
          <Image
            className='menu-icon'
            src='/images/Vector_15.png'
            alt='arrow'
            width={10}
            height={5}
          />
        </div>
      )}
    </div>
  )
}

export default MenuItem
