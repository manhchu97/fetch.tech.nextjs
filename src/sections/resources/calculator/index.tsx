import React, { useEffect, useMemo, useState } from 'react'
import CurrencyInput from 'react-currency-input-field'
import { useForm } from 'react-hook-form'

import Image from 'next/image'

import clsx from 'clsx'
import useSWR from 'swr'

import {
  CALCULATOR_HEADER_DATA,
  CURRENCY_VALUE,
  EXCHANGE_RATE_SGD,
  EXCHANGE_RATE_USD,
} from '@/config/resources'

import ServiceHeader from '@/components/service-header'

import {
  API_EXCHANGE_RATE_BANK,
  API_EXCHANGE_RATE_REQUEST_API_KEY,
} from '@/routes/api'

import SlickCalculator from '@/sections/resources/calculator/slick-calculator'

import {
  ExchangeRateRequestApiResponse,
  ExchangeRateResponse,
} from '@/types/resources'

import {
  BASE_SALARY_INSURANCE,
  calculationSalary,
  convertExchangeRate,
  convertToVND,
} from '@/utils/convertSalary'
import fetcher from '@/utils/fetcher'

import styles from './Calculator.module.scss'
import {
  CALCULATION_TYPE,
  CURRENCY_TYPE,
  CalculationSalaryResponse,
  CalculationType,
  CurrencyType,
  EMPLOYMENT_TYPE,
  EmploymentType,
  INSURANCE_TYPE,
  InsuranceType,
  ROLE_TYPE,
  RoleType,
} from './types'

type IDataPage = {
  employmentType: EmploymentType
  calculationType: CalculationType
  currencyAmount: CurrencyType
  amount: number
  role: RoleType
  currency: CurrencyType
  dependentNumber: number
  insuranceType: InsuranceType
  insuranceAmount: number
}

type ICalculatorProps = {
  requestApiFallback: ExchangeRateRequestApiResponse
  exchangeRateFallback: ExchangeRateResponse
}

const Calculator = ({
  requestApiFallback,
  exchangeRateFallback,
}: ICalculatorProps): React.ReactElement => {
  const { watch, getValues, setValue, handleSubmit } = useForm<IDataPage>({
    defaultValues: {
      employmentType: 'Full time',
      calculationType: 'Gross',
      currencyAmount: 'VND',
      amount: 0,
      role: 'Employer',
      currency: 'VND',
      dependentNumber: 0,
      insuranceType: 'Full wage',
      insuranceAmount: 0,
    },
  })

  const insuranceType = watch('insuranceType')
  const insuranceAmount = watch('insuranceAmount')
  const employmentType = watch('employmentType')
  const amount = watch('amount')
  const calculationType = watch('calculationType')

  const [error, setError] = useState<string>('')

  const [dataCalculationSalary, setDataCalculationSalary] = useState<
    CalculationSalaryResponse[] | null
  >(null)

  const [mounted, setMounted] = useState<boolean>(false)

  useEffect(() => setMounted(true), [])

  useEffect(() => {
    if (
      employmentType === 'Full time' &&
      insuranceType === 'Other' &&
      calculationType === 'Gross' &&
      Boolean(insuranceAmount) &&
      (insuranceAmount < BASE_SALARY_INSURANCE || insuranceAmount > amount)
    ) {
      setError(
        `Insurance amount must be around base salary insurance (${BASE_SALARY_INSURANCE}) and salary amount`,
      )
      return
    }

    setError('')
  }, [amount, calculationType, employmentType, insuranceAmount, insuranceType])

  const { data: exchangeRateRequestApiData } = useSWR(
    mounted ? [API_EXCHANGE_RATE_REQUEST_API_KEY] : null,
    (url: string) => {
      return fetcher(url)
    },
    { fallbackData: requestApiFallback },
  )

  const exchangeRateToken = exchangeRateRequestApiData?.results || null

  const { data } = useSWR(
    mounted ? [API_EXCHANGE_RATE_BANK, exchangeRateToken] : null,
    (url: string, token: string) => {
      return fetcher(url, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      })
    },
    { fallbackData: exchangeRateFallback },
  )

  const exchangeRateUSD = useMemo(() => {
    const rateInfo = data?.results?.find(
      ({ currency = '' }) => currency === CURRENCY_VALUE.USD,
    )

    return rateInfo?.buy_transfer || EXCHANGE_RATE_USD
  }, [data])

  const exchangeRateSGD = useMemo(() => {
    const rateInfo = data?.results?.find(
      ({ currency = '' }) => currency === CURRENCY_VALUE.SGD,
    )

    return rateInfo?.buy_transfer || EXCHANGE_RATE_SGD
  }, [data])

  const getDataCalculationSalary = (payload: IDataPage) => {
    const { amount, currency, currencyAmount } = payload

    const amountVND = convertToVND(
      currencyAmount,
      amount,
      exchangeRateUSD,
      exchangeRateSGD,
    )

    const dataCalculationSalary = calculationSalary({
      ...payload,
      amount: amountVND,
    })

    const currencyResult =
      dataCalculationSalary?.map((item) => ({
        ...item,
        amount: convertExchangeRate(
          currency,
          item.amount,
          exchangeRateUSD,
          exchangeRateSGD,
        ),
      })) || null

    return currencyResult
  }

  const onSubmit = (data: IDataPage) => {
    const salaryData = getDataCalculationSalary(data)
    setDataCalculationSalary(salaryData)
  }

  const onUpdateData = () => {
    if (!dataCalculationSalary) return

    const salaryData = getDataCalculationSalary(getValues())
    setDataCalculationSalary(salaryData)
  }

  const handleChangeCurrency = (
    field: 'currency' | 'currencyAmount',
    currencyType: CurrencyType,
  ) => {
    setValue(field, currencyType)
    onUpdateData()
  }

  return (
    <div className={clsx(styles['calculator-contain'])}>
      <div className='calculator-section'>
        <div className='calculator-section__header'>
          <ServiceHeader headerConfig={CALCULATOR_HEADER_DATA} />
        </div>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className='div-center calculator-section__main'>
            <div className='col-xs-10 col-sm-10 col-lg-6 calculator-section__main__left'>
              <div className='mb-3 subtitle2 fw-bold'>Employment type</div>

              <div className='employment-gr-btn'>
                {EMPLOYMENT_TYPE.map((item) => (
                  <button
                    key={item}
                    type='button'
                    className={clsx(
                      'btn btn-outline-secondary btn-lg btn-effect me-4 flipY-animation',
                      employmentType === item && 'btn-selected',
                    )}
                    onClick={() => {
                      setValue('employmentType', item)
                      onUpdateData()
                    }}
                  >
                    <div
                      className={clsx(
                        'circle-img-81 mb-3 circle-img div-center mx-2',
                        employmentType === item && 'circle-img-selected',
                      )}
                    >
                      <Image
                        src={
                          item === 'Full time'
                            ? '/images/resources/calculator/person_icon.png'
                            : '/images/resources/calculator/calendar_icon.png'
                        }
                        alt='icon'
                        layout='fill'
                        objectFit='inherit'
                      />
                    </div>
                    <div className='h6'>{item}</div>
                  </button>
                ))}
              </div>

              <div className='mb-3 subtitle2 fw-bold'>Calculation type</div>

              <div className='calculator-gr-btn'>
                {CALCULATION_TYPE.map((item) => (
                  <button
                    key={item}
                    type='button'
                    className={clsx(
                      'btn btn-outline-secondary btn-lg btn-effect',
                      calculationType === item && 'btn-selected',
                    )}
                    onClick={() => {
                      setValue('calculationType', item)
                      onUpdateData()
                    }}
                  >
                    {item}
                  </button>
                ))}
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
                      {CURRENCY_TYPE.map((item) => (
                        <li
                          key={item}
                          className={clsx(
                            'dropdown-item',
                            watch('currencyAmount') === item && 'active',
                          )}
                          onClick={() => {
                            handleChangeCurrency('currencyAmount', item)
                          }}
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </button>

                <CurrencyInput
                  value={amount}
                  placeholder='Enter your salary'
                  decimalsLimit={2}
                  onValueChange={(value) => setValue('amount', +(value || 0))}
                />
              </div>

              {employmentType === 'Full time' && (
                <div>
                  <div className='d-flex mb-4'>
                    {INSURANCE_TYPE.map((item) => (
                      <div key={item} className='form-check me-2'>
                        <input
                          className='form-check-input'
                          type='radio'
                          name='flexRadioDefault'
                          id={item}
                          checked={insuranceType === item}
                          onChange={() => {
                            if (item === 'Full wage')
                              setValue('insuranceAmount', 0)

                            setValue('insuranceType', item)
                          }}
                        />
                        <label className='form-check-label' htmlFor={item}>
                          {item}
                        </label>
                      </div>
                    ))}
                  </div>

                  <div className='amount-gr-btn w-100 h-100'>
                    <CurrencyInput
                      value={insuranceAmount}
                      placeholder='Enter your insurance amount'
                      decimalsLimit={2}
                      disabled={insuranceType === 'Full wage'}
                      onValueChange={(value) =>
                        setValue('insuranceAmount', +(value || 0))
                      }
                    />

                    {error && (
                      <div className='mt-2 invalid-feedback d-block'>
                        {error}
                      </div>
                    )}
                  </div>
                </div>
              )}

              {employmentType === 'Full time' && (
                <>
                  <div className='mb-3 subtitle2 fw-bold'>Dependent</div>

                  <div className='amount-gr-btn'>
                    <input
                      type='number'
                      value={watch('dependentNumber').toString()}
                      onChange={(e) => {
                        setValue(
                          'dependentNumber',
                          Number.parseInt(e.target.value || '0', 10),
                        )
                      }}
                    />
                  </div>
                </>
              )}

              <div className='div-center btn-active'>
                <button
                  type='submit'
                  disabled={!!error}
                  className='btn btn-warning text-light h6-bold'
                >
                  Active
                </button>
              </div>
            </div>

            <div className='col-xs-10 col-sm-10 col-lg-6 calculator-section__main__right'>
              <div className='calculator-section__main__right-top'>
                <div className='div-center group-btn-for'>
                  {ROLE_TYPE.map((item) => (
                    <button
                      key={item}
                      type='button'
                      className={clsx(
                        'btn btn-outline-secondary btn-lg btn-effect h6',
                        watch('role') === item && 'btn-selected',
                      )}
                      onClick={() => {
                        setValue('role', item)
                        onUpdateData()
                      }}
                    >
                      For {item}
                    </button>
                  ))}
                </div>

                <div className='group-btn-currency'>
                  <div className='subtitle2 fw-bold mb-3'>Currency</div>

                  <div className='div-center justify-content-between justify-content-sm-start'>
                    {CURRENCY_TYPE.map((item) => (
                      <button
                        key={item}
                        type='button'
                        className={clsx(
                          'btn btn-outline-secondary btn-lg btn-effect div-center',
                          watch('currency') === item && 'btn-selected',
                        )}
                        onClick={() => {
                          handleChangeCurrency('currency', item)
                        }}
                      >
                        <div className='circle-img-28 me-2'>
                          <Image
                            src={`/images/resources/calculator/${item}.png`}
                            alt='image'
                            width={28}
                            height={28}
                          />
                        </div>
                        {item}
                      </button>
                    ))}
                  </div>
                </div>

                <hr />

                <div>
                  <div className='h6 fw-semibold'>
                    Breakdown for {calculationType}
                  </div>
                  <div className='h4'>
                    {watch('currencyAmount')}{' '}
                    {`${Math.round(Number(amount.toFixed(2)))}`.replace(
                      /\B(?=(\d{3})+(?!\d))/g,
                      ',',
                    )}
                  </div>
                  <div className='h6 fw-bold'>Overview</div>
                  {dataCalculationSalary &&
                    dataCalculationSalary.map((item, index) => (
                      <div
                        key={index}
                        className='div-center justify-content-between my-3 subtitle1 h-color'
                      >
                        <div>
                          {item.title}
                          {item.percent && (
                            <span className='grey-color ms-1'>
                              ({item.percent * 100}%)
                            </span>
                          )}
                        </div>
                        <div className='h6 fw-semibold letter-spacing-1'>
                          <span className='me-2'>{watch('currency')}</span>
                          {`${Math.round(
                            Number(item.amount.toFixed(2)),
                          )}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                        </div>
                      </div>
                    ))}
                </div>
              </div>

              <hr />

              <div className='calculator-section__main__right-bottom'>
                <div className='circle-img-81 mb-3 mb-sm-0 me-sm-4'>
                  <Image
                    src='/images/resources/calculator/avatar.png'
                    alt='image'
                    width={81}
                    height={81}
                  />
                </div>

                <div>
                  <div className='h5-bold'>
                    Hiring someone from Vietnam soon?
                  </div>
                  <div className='subtitle2 mb-3'>
                    Check out some of the better candidates that have passed our
                    evaluation.
                  </div>
                  <button
                    type='button'
                    className='btn btn-warning btn-lg w-75 text-light h5-bold'
                  >
                    View candidates
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>

        <div className='calculator-section__footer'>
          <div className='ft-container slogan text-center'>
            <div className='row div-center'>
              <div className='col-lg-8'>
                <div className='h2'>Ready to get started?</div>

                <div className='h6'>
                  Explore our diverse selection of talents and build your dream
                  team now.
                </div>
              </div>
            </div>
          </div>

          <div className='container-fluid px-0 overflow-hidden'>
            <SlickCalculator />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Calculator
