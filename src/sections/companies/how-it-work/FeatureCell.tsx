import React from 'react'

import Image from 'next/image'
import Link from 'next/link'

import clsx from 'clsx'

import AnimatiopnOnScrollWrap from '@/components/AnimationOnScrollWrap'

interface IFeatureCellProps {
  feature: string
  icon: string
  color: string
  bgColor: string
  url: string
}

const FeatureCell = ({
  feature,
  icon,
  color,
  bgColor,
  url,
}: IFeatureCellProps): React.ReactElement => (
  <div className='col-6'>
    <Link href={url}>
      <a>
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
      </a>
    </Link>
  </div>
)

export default FeatureCell
