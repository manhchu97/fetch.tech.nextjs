import React, { useState } from 'react'

import clsx from 'clsx'

interface AccordionProps {
  title: React.ReactNode
  content: React.ReactNode
}

const Accordion = ({
  title = '',
  content = '',
}: AccordionProps): React.ReactElement => {
  const [open, setOpen] = useState(false)

  return (
    <div className='accordion-container'>
      <div
        className='accordion-header'
        onClick={() => setOpen((prev) => !prev)}
      >
        <div className='h6'>{title}</div>

        <i className={clsx('bi bi-caret-down-fill', open && 'icon-up')}></i>
      </div>

      {open && (
        <div className='accordion-content'>
          <div className='h6'>{content}</div>
        </div>
      )}
    </div>
  )
}

export default Accordion
