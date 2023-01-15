import React from 'react'

import Slider, { Settings } from '@ant-design/react-slick'

import styles from './ReactSlick.module.scss'

interface IReactSlickProp {
  children: React.ReactNode
  settings: Settings
}
const ReactSlick = ({
  children,
  settings,
  ...other
}: IReactSlickProp): React.ReactElement => {
  const defaultSettings = {
    customPaging: () => (
      <div
        style={{
          width: '16px',
          height: '16px',
          borderRadius: '50%',
          backgroundColor: '#a4b7c8',
        }}
      ></div>
    ),
    ...settings,
  }

  return (
    <div className={styles['react-slick-container']} {...other}>
      <div className='react-slick-inner'>
        <Slider {...defaultSettings}>{children}</Slider>
      </div>
    </div>
  )
}

export default ReactSlick
