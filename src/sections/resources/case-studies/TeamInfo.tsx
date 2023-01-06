import React from 'react'

import { CSTabContentTeamInfo } from '@/types/resources'

interface ITeamInfoProps {
  teamInfo: CSTabContentTeamInfo | undefined
}

const TeamInfo = ({ teamInfo }: ITeamInfoProps): React.ReactElement => {
  const { title = '', subTitle = '', description = [] } = teamInfo || {}
  return (
    <div className='fetch-team-info-container'>
      <div className='h2 text-center'>{title}</div>

      {subTitle && <div className='h5 text-center'>{subTitle}</div>}

      {description?.map((value, index) => (
        <div className='p-text' key={index}>
          {value}
        </div>
      ))}
    </div>
  )
}

export default TeamInfo
