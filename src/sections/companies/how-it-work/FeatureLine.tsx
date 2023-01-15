import React from 'react'

import Image from 'next/image'

import clsx from 'clsx'

import AnimatiopnOnScrollWrap from '@/components/AnimationOnScrollWrap'

interface IFeatureLineProps {
  feature: string
}

const FeatureLine = ({
  feature = '',
}: IFeatureLineProps): React.ReactElement => (
  <AnimatiopnOnScrollWrap
    render={(ref, animate) => (
      <div
        ref={ref}
        className={clsx({
          checkpoint: true,
          animate__animated: animate,
          animate__fadeInLeft: animate,
        })}
      >
        <div className='check-icon-wrap'>
          <Image
            src='/images/employee/tick15.svg'
            alt='check'
            width={16}
            height={16}
          />
        </div>

        <div className='par'>{feature}</div>
      </div>
    )}
  />
)

export default FeatureLine
