import React, { useEffect, useState } from 'react'

import clsx from 'clsx'
import ldDebounce from 'lodash.debounce'

import AnimatiopnOnScrollWrap from '@/components/AnimationOnScrollWrap'
import ReactSlick from '@/components/ReactSlick'

import styles from './Suggestion.module.scss'
import SuggestionCard from './SuggestionCard'

const LIST_CANDIDATES = [
  {
    id: 1,
    name: 'Dylan Maddox',
    role: 'Freelancer Developer',
    location: 'Ho Chi Minh City, Vietnam',
    experienceDescription: 'Have 8 years work experience',
    skills: ['NodeJS', 'ReactJS', 'NextJS', 'MySQL'],
    experience: [
      {
        duration: '2+',
        position: 'Backend Developer',
        company: 'Fetch Technology',
        time: '01/2021 - 05/2023',
      },
      {
        duration: '1+',
        position: 'Backend Developer',
        company: 'Google',
        time: '05/2019 - 12/2020',
      },
    ],
  },
  {
    id: 2,
    name: 'Efren Stein',
    role: 'Freelancer Developer',
    location: 'Singapore',
    experienceDescription: 'Have 2 years work experience',
    skills: ['NodeJS', 'ReactJS', 'NextJS', 'MySQL'],
    experience: [
      {
        duration: '1+',
        position: 'Backend Developer',
        company: 'Fetch Technology',
        time: '01/2021 - 05/2023',
      },
      {
        duration: '1+',
        position: 'Backend Developer',
        company: 'Google',
        time: '05/2019 - 12/2020',
      },
    ],
  },
  {
    id: 3,
    name: 'Patrice Randolph',
    role: 'Freelancer Developer',
    location: 'Hanoi, Vietnam',
    experienceDescription: 'Have 4 years work experience',
    skills: ['NodeJS', 'ReactJS', 'NextJS', 'MySQL'],
    experience: [
      {
        duration: '2+',
        position: 'Backend Developer',
        company: 'Amazon',
        time: '01/2021 - 05/2023',
      },
      {
        duration: '1+',
        position: 'Backend Developer',
        company: 'Google',
        time: '05/2019 - 12/2020',
      },
    ],
  },
  {
    id: 4,
    name: 'Royal Schneider',
    role: 'Freelancer Developer',
    location: 'Singapore',
    experienceDescription: 'Have 7 years work experience',
    skills: ['NodeJS', 'ReactJS', 'NextJS', 'MySQL'],
    experience: [
      {
        duration: '2+',
        position: 'Backend Developer',
        company: 'Fetch Technology',
        time: '01/2021 - 05/2023',
      },
      {
        duration: '2+',
        position: 'Backend Developer',
        company: 'Google',
        time: '05/2018 - 12/2020',
      },
    ],
  },
  {
    id: 5,
    name: 'Mikel Chan',
    role: 'Freelancer Developer',
    location: 'Taiwan',
    experienceDescription: 'Have 5 years work experience',
    skills: ['NodeJS', 'ReactJS', 'NextJS', 'MySQL'],
    experience: [
      {
        duration: '2+',
        position: 'Backend Developer',
        company: 'Fetch Technology',
        time: '01/2021 - 05/2023',
      },
      {
        duration: '1+',
        position: 'Backend Developer',
        company: 'Google',
        time: '05/2019 - 12/2020',
      },
    ],
  },
  {
    id: 6,
    name: 'Gordon Douglas',
    role: 'Freelancer Developer',
    location: 'Danang, Vietnam',
    experienceDescription: 'Have 3 years work experience',
    skills: ['NodeJS', 'ReactJS', 'NextJS', 'MySQL'],
    experience: [
      {
        duration: '1+',
        position: 'Backend Developer',
        company: 'Fetch Technology',
        time: '01/2021 - 05/2023',
      },
      {
        duration: '1+',
        position: 'Frontend Developer',
        company: 'Google',
        time: '05/2019 - 12/2020',
      },
    ],
  },
  {
    id: 7,
    name: 'Dominic Michael',
    role: 'Freelancer Developer',
    location: 'Ho Chi Minh City, Vietnam',
    experienceDescription: 'Have 4 years work experience',
    skills: ['NodeJS', 'ReactJS', 'NextJS', 'MySQL'],
    experience: [
      {
        duration: '2+',
        position: 'Backend Developer',
        company: 'Fetch Technology',
        time: '01/2021 - 05/2023',
      },
      {
        duration: '2+',
        position: 'Backend Developer',
        company: 'Google',
        time: '05/2018 - 12/2020',
      },
    ],
  },
  {
    id: 8,
    name: 'Davis Mathis',
    role: 'Freelancer Developer',
    location: 'Hanoi, Vietnam',
    experienceDescription: 'Have 6 years work experience',
    skills: ['NodeJS', 'ReactJS', 'NextJS', 'MySQL'],
    experience: [
      {
        duration: '2+',
        position: 'Backend Developer',
        company: 'Fetch Technology',
        time: '01/2021 - 05/2023',
      },
      {
        duration: '1+',
        position: 'Backend Developer',
        company: 'Google',
        time: '05/2019 - 12/2020',
      },
    ],
  },
]

type SuggestionProps = {
  handleOpenClientInfoPopup: () => void
}

const Suggestion = ({
  handleOpenClientInfoPopup,
}: SuggestionProps): React.ReactElement => {
  const [isDownLg, setIsDownLg] = useState(false)

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    arrows: false,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }

  useEffect(() => {
    let unmounted = false

    const handleResize = ldDebounce(() => {
      // https://stackoverflow.com/a/8876069
      const width = Math.max(
        document.documentElement.clientWidth,
        window.innerWidth || 0,
      )

      if (unmounted) return

      // md screen
      setIsDownLg(width < 1200)
    }, 100)

    handleResize()

    window.addEventListener('resize', handleResize)

    return () => {
      unmounted = true
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <div className={styles['suggestion-wrapper']}>
      <div className='suggestion-container'>
        <div className='suggestion-header'>
          <h3 className='h3'>Ready to get started?</h3>

          <h6 className='h6'>
            Explore our diverse selection of talents and build your dream team
            now.
          </h6>
        </div>

        <div className='container suggestion-list'>
          {isDownLg ? (
            <ReactSlick settings={settings}>
              {LIST_CANDIDATES.map((item, index) => (
                <AnimatiopnOnScrollWrap
                  key={index}
                  render={(ref, animate) => (
                    <div
                      ref={ref}
                      className={clsx('h-100', {
                        animate__animated: true,
                        animate__zoomIn: animate,
                      })}
                    >
                      <SuggestionCard
                        candidateInfo={item}
                        handleOpenClientInfoPopup={handleOpenClientInfoPopup}
                      />
                    </div>
                  )}
                />
              ))}
            </ReactSlick>
          ) : (
            <div className='row g-4 justify-content-center'>
              {LIST_CANDIDATES.map((item, index) => (
                <AnimatiopnOnScrollWrap
                  key={index}
                  render={(ref, animate) => (
                    <div
                      ref={ref}
                      className={clsx('col-sm-12 col-md-6 col-lg-4 col-xl-3', {
                        animate__animated: true,
                        animate__zoomIn: animate,
                      })}
                    >
                      <SuggestionCard
                        candidateInfo={item}
                        handleOpenClientInfoPopup={handleOpenClientInfoPopup}
                      />
                    </div>
                  )}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Suggestion
