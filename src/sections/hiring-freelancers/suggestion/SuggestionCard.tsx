import React from 'react'

import Image from 'next/image'

import clsx from 'clsx'

import Button from '@/components/button/Button'

import styles from './SuggestionCard.module.scss'

interface IExperience {
  duration: string
  position: string
  company: string
  time: string
}

interface ISuggestionCardProps {
  candidateInfo: {
    id: number
    name: string
    role: string
    location: string
    experienceDescription: string
    skills: string[]
    avatarUrl: string
    experience: IExperience[]
  }
  handleOpenClientInfoPopup: () => void
}

const SuggestionCard = ({
  candidateInfo,
  handleOpenClientInfoPopup,
}: ISuggestionCardProps): React.ReactElement => {
  const {
    name,
    role,
    location,
    experienceDescription,
    skills,
    experience,
    avatarUrl,
  } = candidateInfo || {}

  return (
    <div className={clsx('card', styles['card-container'])}>
      <div className='card-header d-flex flex-column'>
        <div className='d-flex'>
          <div className='user-avatar flex-shrink-0'>
            <Image
              alt='candidate avatar'
              src={avatarUrl}
              width={72}
              height={72}
            />
          </div>

          <div className='user-info'>
            <div className='h6-bold text-max-line text-max-line-2'>{name}</div>
            <div className='par-grey-color text-max-line text-max-line-2'>
              {role}
            </div>
            <div className='par-grey-color text-max-line text-max-line-2'>
              {location}
            </div>
          </div>
        </div>

        <div className='card-experience d-flex align-items-end'>
          <div className='card-experience__basic'>
            <div className='card-experience__basic-description d-flex align-items-start'>
              <i className='bi bi-check-lg me-1' />

              <span className='subtitle2 text-max-line text-max-line-2'>
                {experienceDescription}
              </span>
            </div>

            <div className='card-experience__basic-description d-flex align-items-start'>
              <i className='bi bi-check-lg me-1' />

              <span className='subtitle2 text-max-line text-max-line-2'>
                Skills: {skills.join(', ')}
              </span>
            </div>
          </div>
        </div>

        <hr className='my-3 text-black-50 divider' />
      </div>

      <div className='card-content'>
        <div className='card-experience__detail'>
          <div className='h6'>Work Experience</div>

          <ul className='card-experience__detail-list p-0'>
            {experience.map(({ duration, position, company, time }, index) => (
              <li key={index} className='card-experience__detail-item'>
                <span>
                  <i className='bi bi-three-dots-vertical'></i>
                </span>

                <div className='card-experience__detail-item__year ms-3'>
                  <span>{duration}</span>
                  <p>years</p>
                </div>

                <div className='card-experience__detail-item__detail ms-3'>
                  <div className='subtitle2 text-bold'>{position}</div>
                  <div className='subtitle2'>{company}</div>
                  <div className='subtitle2'>{time}</div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className='card-action d-flex flex-column justify-content-center align-items-center'>
        <Button
          frontClassName='btn-primary'
          size='small'
          variant='filled'
          title={'I’m interested'}
          onClick={handleOpenClientInfoPopup}
        />

        <div
          className='btn-see-profile mt-2'
          onClick={handleOpenClientInfoPopup}
        >
          <span className='see-text'>See full profile</span>
        </div>
      </div>
    </div>
  )
}

export default SuggestionCard
