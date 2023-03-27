import React from 'react'

import Image from 'next/image'

import clsx from 'clsx'

import AnimatiopnOnScrollWrap from '@/components/AnimationOnScrollWrap'

interface IFeatureCellProps {
  title: string
  icon: string
  color: string
  bgColor: string
  onClick: () => void
}

const FeatureCell = ({
  title,
  icon,
  color,
  bgColor,
  onClick,
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
          onClick={onClick}
        >
          <div className='icon-wrap'>
            <Image src={icon} alt='check' width={36} height={36} />
          </div>

          <div className='h6-bold'>{title}</div>
        </div>
      )}
    />
  </div>
)

export default FeatureCell
