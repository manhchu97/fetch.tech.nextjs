import React, { useState } from 'react'

import styles from './Accordion.module.scss'

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
    <div
      className={styles['accordion-container']}
      onClick={() => setOpen((prev) => !prev)}
    >
      <div className='accordion-header'>
        <div className='h6'>{title}</div>
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
