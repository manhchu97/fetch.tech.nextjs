import React from 'react'

import clsx from 'clsx'

import SlickCalculator from '@/sections/resources/calculator/slick-calculator'

import styles from './Calculator.module.scss'

const Calculator = (): React.ReactElement => {
  return (
    <div className={clsx(styles['calculator-contain'])}>
      <form>
        <div className='calculator-section'>
          <div className='calculator-section__footer'>
            <div className='ft-container slogan text-center'>
              <div className='row div-center'>
                <div className='col-lg-8'>
                  <div className='h2'>Ready to get started?</div>

                  <div className='h6'>
                    Explore our diverse selection of talents and build your
                    dream team now.
                  </div>
                </div>
              </div>
            </div>

            <div className='container-fluid px-0'>
              <SlickCalculator />
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}

export default Calculator
