import React from 'react'

import clsx from 'clsx'

import AnimatiopnOnScrollWrap from '@/components/AnimationOnScrollWrap'

import styles from './TrustedBy.module.scss'
import TrustedSlide from './TrustedSlide'

const CompanyTrustedBy = (): React.ReactElement => {
  return (
    <section
      className={clsx(styles['company-trusted-by-container'], 'wrap-container')}
    >
      <div className='row div-center'>
        <div className='col-12 col-lg-8'>
          <AnimatiopnOnScrollWrap
            render={(ref, animate) => (
              <div
                ref={ref}
                className={clsx({
                  animate__animated: animate,
                  animate__zoomIn: animate,
                })}
              >
                <h2 className='h2'>Trusted by many</h2>

                <div className='par-grey-color'>
                  Being one of the first in the industry has allowed us to gain
                  a strong grasp of the Vietnamese market.
                </div>
              </div>
            )}
          />
        </div>
      </div>

      <div className='row div-center'>
        <div className='col-xs-12 col-sm-12 col-md-8 col-lg-8'>
          <TrustedSlide />
        </div>
      </div>
    </section>
  )
}

export default CompanyTrustedBy
