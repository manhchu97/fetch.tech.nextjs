import React from 'react'

import clsx from 'clsx'

import { careerData } from '@/config/employees'

import AnimatiopnOnScrollWrap from '@/components/AnimationOnScrollWrap'

import styles from './EmployeeCareer.module.scss'

const EmployeeCareer = (): React.ReactElement => (
  <section className={styles['employee-career']}>
    <div className='row div-center wrap-container'>
      <div className='col-sm-12 col-lg-6 mb-5'>
        <AnimatiopnOnScrollWrap
          render={(ref, animate) => (
            <div
              ref={ref}
              className={clsx({
                h2: true,
                animate__animated: true,
                animate__faster: true,
                animate__lightSpeedInLeft: animate,
              })}
            >
              Why build your career with Fetch?
            </div>
          )}
        />

        <AnimatiopnOnScrollWrap
          render={(ref, animate) => (
            <div
              ref={ref}
              className={clsx({
                h6: true,
                animate__animated: true,
                animate__fast: true,
                animate__lightSpeedInLeft: animate,
              })}
            >
              It&apos;s simple, Fetch cares. We are committed to nurturing every
              employee to be the best developer they can be. To provide you with
              the right tools and opportunities to a global audience, expanding
              their horizons beyond Vietnam.
            </div>
          )}
        />
      </div>

      <div className='col-sm-12 col-lg-6'>
        <ul className='list-wrap'>
          {careerData?.map((career) => (
            <AnimatiopnOnScrollWrap
              key={career.id}
              render={(ref, animate) => (
                <li
                  ref={ref}
                  className={clsx({
                    animate__animated: true,
                    animate__fast: true,
                    animate__lightSpeedInRight: animate,
                  })}
                >
                  <div className='head'>
                    <span>{career?.id}</span>
                  </div>

                  <div className='content'>
                    <div className='h5 h5-bold'>{career?.title}</div>

                    <div className='par-grey-color'>{career?.subtitle}</div>
                  </div>
                </li>
              )}
            />
          ))}

          <AnimatiopnOnScrollWrap
            ratio={1.1}
            render={(ref, animate) => (
              <div
                ref={ref}
                className={clsx({
                  'horizontal-line': true,
                  animate__animated: true,
                  animate__slower: true,
                  animate__flipInX: animate,
                })}
              ></div>
            )}
          />
        </ul>
      </div>
    </div>
  </section>
)

export default EmployeeCareer
