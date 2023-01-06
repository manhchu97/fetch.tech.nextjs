import React from 'react'

import clsx from 'clsx'

import AnimatiopnOnScrollWrap from '@/components/AnimationOnScrollWrap'

import { CSTabContentProjectInfo } from '@/types/resources'

interface IProjectInfoProps {
  projectInfo: CSTabContentProjectInfo | undefined
}

const ProjectInfo = ({
  projectInfo,
}: IProjectInfoProps): React.ReactElement => {
  const { preriod = '', mainInfo = [] } = projectInfo || {}

  return (
    <div className='project-info-container'>
      <AnimatiopnOnScrollWrap
        render={(ref, animate) => (
          <div
            ref={ref}
            className={clsx({
              'text-center': true,
              animate__animated: animate,
              animate__bounceInUp: animate,
            })}
          >
            <div className='h2'>Project Preriod</div>
            <div className='h5'>{preriod}</div>
          </div>
        )}
      />

      {mainInfo?.map((value, index) => (
        <div key={index}>
          <div className='h3'>{value?.title}</div>

          {value?.description?.map((description, subIndex) => (
            <div className='p-text' key={`${index}-${subIndex}`}>
              {description}
            </div>
          ))}
        </div>
      ))}
    </div>
  )
}

export default ProjectInfo
