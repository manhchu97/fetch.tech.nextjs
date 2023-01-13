import React from 'react'

import Image from 'next/image'

import clsx from 'clsx'

import AnimatiopnOnScrollWrap from '@/components/AnimationOnScrollWrap'

import styles from './EmployeeMember.module.scss'

const EmployeeMember = (): React.ReactElement => (
  <section className={styles['employee-member']}>
    <div className='wrap-container'>
      <div className='row justify-content-center'>
        <div className='col col-sm-12 col-md-10 col-xl-6'>
          <div className='heart-img mx-auto'>
            <Image
              src='/images/employee/heart.png'
              width={96}
              height={96}
              alt='heart'
            />
          </div>

          <AnimatiopnOnScrollWrap
            render={(ref, animate) => (
              <div
                ref={ref}
                className={clsx({
                  'big-text': true,
                  animate__animated: animate,
                  animate__bounceIn: animate,
                })}
              >
                150+
              </div>
            )}
          />

          <div className='subtext'>associates and growing</div>

          <div className='paragraph'>
            You don&apos;t just play a role on our client&apos;s team. First and
            foremost, you are a part of the Fetch family. As a valued member of
            our community, you stand to enjoy bonuses like company trips and
            more.
          </div>

          <button className='btn-learn-more'>Learn more</button>
        </div>
      </div>

      <div className='row justify-content-center emp-row'>
        <div className='col-sm-12 col-md-6 emp-col'>
          <AnimatiopnOnScrollWrap
            render={(ref, animate) => (
              <div
                ref={ref}
                className={clsx({
                  'emp-wrap': true,
                  animate__animated: animate,
                  animate__bounceIn: animate,
                })}
              >
                <div className='emp-img'>
                  <Image
                    src='/images/employee/avt1.jpg'
                    width={540}
                    height={720}
                    objectFit='contain'
                    alt='avt1'
                    id='1'
                  />
                </div>

                <div className='quote-wrap'>
                  <div className='quote-text'>
                    “I’ve been working at Fetch for some years. Not only do I
                    tackle meaningful challenges and projects, I also get to
                    enjoy valuable team-bonding sessions through company dinners
                    and activities that allow me to exchange and learn new
                    skills with my coworkers.”
                  </div>

                  <div className='sign'>
                    Tran Bao Tram,
                    <br />
                    Marketer
                  </div>
                </div>
              </div>
            )}
          />
        </div>

        <div className='col-sm-12 col-md-6 emp-col'>
          <AnimatiopnOnScrollWrap
            render={(ref, animate) => (
              <div
                ref={ref}
                className={clsx({
                  'emp-wrap': true,
                  animate__animated: animate,
                  animate__bounceIn: animate,
                })}
              >
                <div className='emp-img'>
                  <Image
                    src='/images/employee/avt2.jpg'
                    width={540}
                    height={720}
                    objectFit='contain'
                    alt='avt2'
                  />
                </div>

                <div className='quote-wrap'>
                  <div className='quote-text'>
                    “I just graduated from college and I’m glad to be able to
                    begin my employment with Fetch. I get the opportunity of
                    working with a global team while still living in Vietnam.
                    This allows me to broaden my horizon without having to
                    making additional expenses such as rent in a foreign
                    country.”
                  </div>

                  <div className='sign'>
                    Duc Tran,
                    <br />
                    Front-end Developer
                  </div>
                </div>
              </div>
            )}
          />
        </div>
      </div>
    </div>
  </section>
)

export default EmployeeMember
