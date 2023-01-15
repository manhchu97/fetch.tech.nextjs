import React from 'react'

import clsx from 'clsx'

import AnimatiopnOnScrollWrap from '@/components/AnimationOnScrollWrap'

import styles from './Header.module.scss'

const EmployeeHeader = (): React.ReactElement => (
  <section className={styles['employee-header']}>
    <div className='row div-center wrap-container'>
      <div className='col-xs-12 col-sm-12 col-lg-8 col-xl8'>
        <AnimatiopnOnScrollWrap
          render={(ref, animate) => (
            <div
              ref={ref}
              className={clsx({
                animate__animated: true,
                animate__zoomIn: animate,
              })}
            >
              <div className='h1'>Work globally, stay locally</div>

              <div className='h6-p-color'>
                Experience the world without stepping out of Vietnam. Get
                unrestricted international exposure while applying your
                expertise from the comforts of home with Fetch.
              </div>

              <button className='btn-learn-more'>Learn More</button>
            </div>
          )}
        />
      </div>
    </div>
  </section>
)

export default EmployeeHeader
