import React from 'react'

import Image from 'next/image'

import clsx from 'clsx'

import AnimatiopnOnScrollWrap from '@/components/AnimationOnScrollWrap'

interface IFeatureCellProps {
  feature: string
  icon: string
  color: string
  bgColor: string
}

const FeatureCell = ({
  feature,
  icon,
  color,
  bgColor,
}: IFeatureCellProps): React.ReactElement => (
  <div className='col-6'>
    <AnimatiopnOnScrollWrap
      render={(ref, animate) => (
        <div
          ref={ref}
          className={clsx({
            'feature-cell': true,
            animate__animated: animate,
            animate__fadeInUp: animate,
          })}
          style={{ color, backgroundColor: bgColor }}
        >
          <div className='icon-wrap'>
            <Image src={icon} alt='check' width={36} height={36} />
          </div>

          <div className='h6-bold'>{feature}</div>
        </div>
      )}
    />
  </div>
)

export default FeatureCell
