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
  return (
    <div className={styles['react-slick-container']} {...other}>
      <div className='react-slick-inner'>
        <Slider {...settings}>{children}</Slider>
      </div>
    </div>
  )
}

export default ReactSlick
