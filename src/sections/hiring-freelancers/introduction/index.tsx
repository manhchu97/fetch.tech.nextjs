import React from 'react'

import Image from 'next/image'

import Button from '@/components/button/Button'

import styles from './Introduction.module.scss'

const Introduction = ({
  handleOpenClientInfoPopup = () => {},
}): React.ReactElement => {
  return (
    <div className={styles['introduction-container']}>
      <div className='main'>
        <div className='row'>
          <div className='col-md-6 d-flex  align-items-center justify-content-center'>
            <div className='main-content'>
              <h1 className='h3'>
                Hire the top freelance engineers from VietNam today
              </h1>

              <h4 className='h4'>
                Fuss free and simple steps to fulfill all your engineering needs
              </h4>

              <Button
                className='btn-primary'
                size='large'
                variant='filled'
                title={'Get Started'}
                onClick={handleOpenClientInfoPopup}
              />
            </div>
          </div>

          <div className='col-md-6 d-flex justify-content-center align-items-end'>
            <div className='introduction-img d-flex justify-content-center'>
              <Image
                src={`/images/hiring-freelancers/introduction.png`}
                alt='introduction banner'
                height={493}
                width={700}
                quality={100}
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Introduction
