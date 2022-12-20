import Image from 'next/image'

interface MenuItemProps {
  title: string
  id?: string
  target?: string
  hasIcon?: boolean
}

const MenuItem = (props: MenuItemProps): React.ReactElement => {
  const { id = '', title = '', target = '', hasIcon = false } = props

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
        <div className='menu-icon-container'>
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
