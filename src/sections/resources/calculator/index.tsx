import React from 'react'
import { useForm } from 'react-hook-form'

import Image from 'next/image'

import clsx from 'clsx'

import ServiceHeader from '@/components/service-header'

import SlickCalculator from '@/sections/resources/calculator/slick-calculator'

import styles from './Calculator.module.scss'

const EMPLOYMENT_TYPE = ['Fulltime', 'Freelance'] as const
type EmploymentType = typeof EMPLOYMENT_TYPE[number]

const CALCULATION_TYPE = ['Net', 'Gross', 'Total'] as const
type CalculationType = typeof CALCULATION_TYPE[number]

const ROLE_TYPE = ['Employer', 'Employee'] as const
type RoleType = typeof ROLE_TYPE[number]

const CURRENCY_TYPE = ['VND', 'USD', 'SGD'] as const
type CurrencyType = typeof CURRENCY_TYPE[number]

type IDataPage = {
  employmentType: EmploymentType
  calculationType: CalculationType
  currencyAmount: CurrencyType
  amount: number
  role: RoleType
  currency: CurrencyType
}

const Calculator = (): React.ReactElement => {
  const { watch, setValue } = useForm<IDataPage>({
    defaultValues: {
      employmentType: 'Fulltime',
      calculationType: 'Net',
      currencyAmount: 'VND',
      amount: 0,
      role: 'Employer',
      currency: 'VND',
    },
  })

  return (
    <div className={clsx(styles['calculator-contain'])}>
      <form>
        <div className='calculator-section'>
          <div className='calculator-section__header'>
            <ServiceHeader
              title='Salary calculator'
              subTitle="Try our live-quote calculator to evaluate the approximate costs for the talent you're looking to hire or for the estimated income you'll receive while working with Fetch."
              imageSource='/images/resources/calculator/calculator.png'
            />
          </div>

          <div className='div-center calculator-section__main'>
            <div className='col-xs-10 col-sm-10 col-lg-6 calculator-section__main__left'>
              <div className='mb-3 subtitle2 fw-bold'>Employment type</div>

              <div className='employment-gr-btn'>
                <button
                  type='button'
                  className={clsx(
                    'btn btn-outline-secondary btn-lg btn-effect me-4',
                    watch('employmentType') === 'Fulltime' && 'btn-selected',
                  )}
                  onClick={() => setValue('employmentType', 'Fulltime')}
                >
                  <div
                    className={clsx(
                      'circle-img-81 mb-3 circle-img div-center mx-2',
                      watch('employmentType') === 'Fulltime' &&
                        'circle-img-selected',
                    )}
                  >
                    <i
                      className={clsx(
                        'bi bi-person-fill mt-1',
                        watch('employmentType') === 'Fulltime'
                          ? 'text-light'
                          : 'text-dark',
                      )}
                    />
                  </div>
                  Full time
                </button>

                <button
                  type='button'
                  className={clsx(
                    'btn btn-outline-secondary btn-lg btn-effect',
                    watch('employmentType') === 'Freelance' && 'btn-selected',
                  )}
                  onClick={() => setValue('employmentType', 'Freelance')}
                >
                  <div
                    className={clsx(
                      'circle-img-81 mb-3 circle-img div-center mx-2',
                      watch('employmentType') === 'Freelance' &&
                        'circle-img-selected',
                    )}
                  >
                    <i
                      className={clsx(
                        'bi bi-calendar4-week mt-1',
                        watch('employmentType') === 'Freelance'
                          ? 'text-light'
                          : 'text-dark',
                      )}
                    />
                  </div>
                  Freelance
                </button>
              </div>

              <div className='mb-3 subtitle2 fw-bold'>Calculation type</div>

              <div className='calculator-gr-btn'>
                <button
                  type='button'
                  className={clsx(
                    'btn btn-outline-secondary btn-lg btn-effect',
                    watch('calculationType') === 'Net' && 'btn-selected',
                  )}
                  onClick={() => setValue('calculationType', 'Net')}
                >
                  Net
                </button>

                <button
                  type='button'
                  className={clsx(
                    'btn btn-outline-secondary btn-lg btn-effect',
                    watch('calculationType') === 'Gross' && 'btn-selected',
                  )}
                  onClick={() => setValue('calculationType', 'Gross')}
                >
                  Gross
                </button>

                <button
                  type='button'
                  className={clsx(
                    'btn btn-outline-secondary btn-lg btn-effect',
                    watch('calculationType') === 'Total' && 'btn-selected',
                  )}
                  onClick={() => setValue('calculationType', 'Total')}
                >
                  Total
                </button>
              </div>

              <div className='mb-3 subtitle2 fw-bold'>Amount</div>

              <div className='amount-gr-btn d-flex'>
                <button
                  type='button'
                  className='btn btn-outline-secondary btn-lg btn-effect div-center me-4'
                >
                  <div className='circle-img-28 me-2'>
                    <Image
                      src={`/images/resources/calculator/${watch(
                        'currencyAmount',
                      )}.png`}
                      alt='image'
                      width={28}
                      height={28}
                    />
                  </div>
                  <div className='dropdown div-center'>
                    <div className='dropdown-toggle' data-bs-toggle='dropdown'>
                      {watch('currencyAmount')}
                    </div>
                    <ul className='dropdown-menu' style={{ width: 30 }}>
                      <li
                        className={clsx(
                          'dropdown-item',
                          watch('currencyAmount') === 'VND' && 'active',
                        )}
                        onClick={() => setValue('currencyAmount', 'VND')}
                      >
                        VND
                      </li>
                      <li
                        className={clsx(
                          'dropdown-item',
                          watch('currencyAmount') === 'USD' && 'active',
                        )}
                        onClick={() => setValue('currencyAmount', 'USD')}
                      >
                        USD
                      </li>
                      <li
                        className={clsx(
                          'dropdown-item',
                          watch('currencyAmount') === 'SGD' && 'active',
                        )}
                        onClick={() => setValue('currencyAmount', 'SGD')}
                      >
                        SGD
                      </li>
                    </ul>
                  </div>
                </button>

                <input
                  type='number'
                  className='form-control'
                  placeholder='Enter your salary'
                  aria-label='salary'
                />
              </div>

              <div className='div-center btn-active'>
                <button
                  type='button'
                  className='btn btn-warning text-light fw-bold'
                >
                  Active
                </button>
              </div>
            </div>

            <div className='col-xs-10 col-sm-10 col-lg-6 calculator-section__main__right'>
              <div className='calculator-section__main__right-top'>
                <div className='div-center group-btn-for'>
                  <button
                    type='button'
                    className={clsx(
                      'btn btn-outline-secondary btn-lg btn-effect',
                      watch('role') === 'Employer' && 'btn-selected',
                    )}
                    onClick={() => setValue('role', 'Employer')}
                  >
                    For Employer
                  </button>

                  <button
                    type='button'
                    className={clsx(
                      'btn btn-outline-secondary btn-lg btn-effect',
                      watch('role') === 'Employee' && 'btn-selected',
                    )}
                    onClick={() => setValue('role', 'Employee')}
                  >
                    For Employee
                  </button>
                </div>

                <div className='group-btn-currency'>
                  <div className='subtitle2 fw-bold mb-3'>Currency</div>

                  <div className='div-center justify-content-start'>
                    <button
                      type='button'
                      className={clsx(
                        'btn btn-outline-secondary btn-lg btn-effect div-center',
                        watch('currency') === 'VND' && 'btn-selected',
                      )}
                      onClick={() => setValue('currency', 'VND')}
                    >
                      <div className='circle-img-28 me-2'>
                        <Image
                          src='/images/resources/calculator/VND.png'
                          alt='image'
                          width={28}
                          height={28}
                        />
                      </div>
                      VND
                    </button>

                    <button
                      type='button'
                      className={clsx(
                        'btn btn-outline-secondary btn-lg btn-effect div-center',
                        watch('currency') === 'USD' && 'btn-selected',
                      )}
                      onClick={() => setValue('currency', 'USD')}
                    >
                      <div className='circle-img-28 me-2'>
                        <Image
                          src='/images/resources/calculator/USD.png'
                          alt='image'
                          width={28}
                          height={28}
                        />
                      </div>
                      USD
                    </button>

                    <button
                      type='button'
                      className={clsx(
                        'btn btn-outline-secondary btn-lg btn-effect div-center',
                        watch('currency') === 'SGD' && 'btn-selected',
                      )}
                      onClick={() => setValue('currency', 'SGD')}
                    >
                      <div className='circle-img-28 me-2'>
                        <Image
                          src='/images/resources/calculator/SGD.png'
                          alt='image'
                          width={28}
                          height={28}
                        />
                      </div>
                      SGD
                    </button>
                  </div>
                </div>

                <hr />

                <div>
                  <div className='h6 fw-semibold'>
                    Breakdown for {watch('calculationType')}
                  </div>
                  <div className='h4'>{watch('currencyAmount')} 0.00</div>
                  <div className='h6 fw-bold'>Overview</div>
                </div>
              </div>

              <hr />

              <div className='calculator-section__main__right-bottom'>
                <div className='circle-img-81 me-4'>
                  <Image
                    src='/images/resources/calculator/avatar.png'
                    alt='image'
                    width={81}
                    height={81}
                  />
                </div>

                <div>
                  <div className='h5'>Hiring someone from Vietnam soon?</div>
                  <div className='subtitle2 mb-3'>
                    Check out some of the better candidates that have passed our
                    evaluation.
                  </div>
                  <button
                    type='button'
                    className='btn btn-warning btn-lg w-75 text-light'
                  >
                    View candidates
                  </button>
                </div>
              </div>
            </div>
          </div>

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
