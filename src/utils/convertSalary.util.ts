import {
  CalculationSalaryResponse,
  EmploymentType,
  ParamsCalculationSalary,
  RoleType,
} from '@/sections/resources/calculator/types'

const EXCHANGE_RATE_USD = 23296
const EXCHANGE_RATE_SGD = 16798
const limitSalary = 36 * 10 ** 6
const limitSalaryUI = 93.6 * 10 ** 6

const TAXABLE_INCOME_KEY = [
  '5M',
  '10M',
  '18M',
  '32M',
  '52M',
  '80M',
  'over_80M',
] as const
type TaxableIncomeKey = typeof TAXABLE_INCOME_KEY[number]

type TaxableIncomeValue = {
  value: number
  reductionPercent: number
  reductionAmount: number
}
const taxableIncomeArr: Record<TaxableIncomeKey, TaxableIncomeValue> = {
  '5M': {
    value: 5 * 10 ** 6,
    reductionPercent: 0.05,
    reductionAmount: 0,
  },
  '10M': {
    value: 10 * 10 ** 6,
    reductionPercent: 0.1,
    reductionAmount: 0.25 * 10 ** 6,
  },
  '18M': {
    value: 18 * 10 ** 6,
    reductionPercent: 0.15,
    reductionAmount: 0.75 * 10 ** 6,
  },
  '32M': {
    value: 32 * 10 ** 6,
    reductionPercent: 0.2,
    reductionAmount: 1.65 * 10 ** 6,
  },
  '52M': {
    value: 52 * 10 ** 6,
    reductionPercent: 0.25,
    reductionAmount: 3.25 * 10 ** 6,
  },
  '80M': {
    value: 80 * 10 ** 6,
    reductionPercent: 0.3,
    reductionAmount: 5.85 * 10 ** 6,
  },
  over_80M: {
    value: 80 * 10 ** 6,
    reductionPercent: 0.35,
    reductionAmount: 9.85 * 10 ** 6,
  },
}

/**
 * SI: socialInsurance
 * HI: healthInsurance
 * UI: unemploymentInsurance
 * TU: tradeUnion
 */

const taxData = {
  forEmployer: { SI: 0.175, HI: 0.03, UI: 0.01, TU: 0.02, PVI: 250000 },
  taxDeductions: {
    self: 11000000,
    dependent: 0,
    SI: 0.08,
    HI: 0.015,
    UI: 0.01,
  },
}

const EXCHANGE_RATE = ['VND', 'USD', 'SGD'] as const
type ExchangeRate = typeof EXCHANGE_RATE[number]

export const convertExchangeRate = (rateType: ExchangeRate, salary: number) => {
  switch (rateType) {
    case 'USD':
      return salary / EXCHANGE_RATE_USD
    case 'SGD':
      return salary / EXCHANGE_RATE_SGD
    default:
      return salary
  }
}

export const convertToVND = (rateType: ExchangeRate, salary: number) => {
  switch (rateType) {
    case 'USD':
      return salary * EXCHANGE_RATE_USD
    case 'SGD':
      return salary * EXCHANGE_RATE_SGD
    default:
      return salary
  }
}

export const getPersonalIncomeTaxable = (taxableIncome: number) => {
  if (taxableIncome <= 0) return 0

  let taxableIncomeKey: TaxableIncomeKey = '5M'

  if (taxableIncome <= taxableIncomeArr['5M'].value) taxableIncomeKey = '5M'
  else if (
    taxableIncome > taxableIncomeArr['5M'].value &&
    taxableIncome <= taxableIncomeArr['10M'].value
  )
    taxableIncomeKey = '10M'
  else if (
    taxableIncome > taxableIncomeArr['10M'].value &&
    taxableIncome <= taxableIncomeArr['18M'].value
  )
    taxableIncomeKey = '18M'
  else if (
    taxableIncome > taxableIncomeArr['18M'].value &&
    taxableIncome <= taxableIncomeArr['32M'].value
  )
    taxableIncomeKey = '32M'
  else if (
    taxableIncome > taxableIncomeArr['32M'].value &&
    taxableIncome <= taxableIncomeArr['52M'].value
  )
    taxableIncomeKey = '52M'
  else if (
    taxableIncome > taxableIncomeArr['52M'].value &&
    taxableIncome <= taxableIncomeArr['80M'].value
  )
    taxableIncomeKey = '80M'
  else if (taxableIncome > taxableIncomeArr['80M'].value)
    taxableIncomeKey = 'over_80M'

  return (
    taxableIncome * taxableIncomeArr[taxableIncomeKey].reductionPercent -
    taxableIncomeArr[taxableIncomeKey].reductionAmount
  )
}

const getDataTaxDeduction = (amount: number) => {
  const { self, dependent, SI, HI, UI } = taxData.taxDeductions

  const numSI = amount < limitSalary ? amount * SI : limitSalary * SI
  const numHI = amount < limitSalary ? amount * HI : limitSalary * HI
  const numUI = amount < limitSalaryUI ? amount * UI : limitSalaryUI * UI
  const taxDeductions = self + dependent + numSI + numHI + numUI
  const taxableIncome = amount - taxDeductions
  const PIT = getPersonalIncomeTaxable(taxableIncome)
  return {
    bringHome: amount - PIT - numSI - numHI - numUI,
    numSI,
    numHI,
    numUI,
    PIT,
    taxDeductions,
  }
}

const checkFromGross = (amount: number, netCheck: number) =>
  Math.abs(netCheck - getDataTaxDeduction(amount).bringHome)

const getDataForEmployer = (amount: number) => {
  const { SI, HI, UI, TU, PVI } = taxData.forEmployer

  const numSI = amount < limitSalary ? amount * SI : limitSalary * SI
  const numHI = amount < limitSalary ? amount * HI : limitSalary * HI
  const numUI = amount < limitSalaryUI ? amount * UI : limitSalaryUI * UI
  const numTU = amount < limitSalary ? amount * TU : limitSalary * TU

  return {
    totalExpenses: amount + numSI + numHI + numUI + numTU + PVI,
    numSI,
    numHI,
    numUI,
    numTU,
  }
}

const checkTotalFromGross = (amount: number, totalCheck: number) =>
  Math.abs(totalCheck - getDataForEmployer(amount).totalExpenses)

type ParamsConvertFromGross = {
  employmentType: EmploymentType
  amount: number
  roleType: RoleType
}

const convertFromGross = (
  params: ParamsConvertFromGross,
): CalculationSalaryResponse[] | null => {
  const { employmentType, amount, roleType } = params

  const { SI: SI_TAX, HI: HI_TAX, UI: UI_TAX } = taxData.taxDeductions
  const {
    bringHome,
    numSI: numSI_TAX,
    numHI: numHI_TAX,
    numUI: numUI_TAX,
    PIT,
    taxDeductions,
  } = getDataTaxDeduction(amount)
  const { SI, HI, UI, TU, PVI } = taxData.forEmployer
  const { totalExpenses, numSI, numHI, numUI, numTU } =
    getDataForEmployer(amount)

  switch (employmentType) {
    case 'Freelance':
      switch (roleType) {
        case 'Employee':
          return [
            { title: 'Gross salary', amount: amount || 0 },
            {
              title: 'Social insurance',
              amount: 0,
            },
            {
              title: 'Health insurance',
              amount: 0,
            },
            {
              title: 'Unemployed insurance',
              amount: 0,
            },
            { title: 'Tax deductions', amount: 0 },
            {
              title: 'Personal income tax',
              percent: 0.1,
              amount: amount ? amount * 0.1 : 0,
            },
            { title: 'NET', amount: amount ? amount * 0.9 : 0 },
          ]
        case 'Employer':
          return [
            { title: 'Gross salary', amount: amount || 0 },
            {
              title: 'Social insurance',
              amount: 0,
            },
            {
              title: 'Health insurance',
              amount: 0,
            },
            {
              title: 'Unemployed insurance',
              amount: 0,
            },
            {
              title: 'Union tax',
              amount: 0,
            },
            { title: 'PVI healthcare', amount: 0 },
            { title: 'NET', amount: amount ? amount * 0.9 : 0 },
            { title: 'Total expenses', amount: amount || 0 },
          ]
      }

    case 'Full time':
      switch (roleType) {
        case 'Employee':
          return [
            { title: 'Gross salary', amount: amount || 0 },
            {
              title: 'Social insurance',
              percent: SI_TAX,
              amount: amount ? numSI_TAX : 0,
            },
            {
              title: 'Health insurance',
              percent: HI_TAX,
              amount: amount ? numHI_TAX : 0,
            },
            {
              title: 'Unemployed insurance',
              percent: UI_TAX,
              amount: amount ? numUI_TAX : 0,
            },
            { title: 'Tax deductions', amount: amount ? taxDeductions : 0 },
            { title: 'Personal income tax', amount: amount ? PIT : 0 },
            { title: 'NET', amount: amount ? bringHome : 0 },
          ]

        case 'Employer':
          return [
            { title: 'Gross salary', amount: amount || 0 },
            {
              title: 'Social insurance',
              percent: SI,
              amount: amount ? numSI : 0,
            },
            {
              title: 'Health insurance',
              percent: HI,
              amount: amount ? numHI : 0,
            },
            {
              title: 'Unemployed insurance',
              percent: UI,
              amount: amount ? numUI : 0,
            },
            {
              title: 'Union tax',
              percent: TU,
              amount: amount ? numTU : 0,
            },
            { title: 'PVI healthcare', amount: amount ? PVI : 0 },
            { title: 'NET', amount: amount ? bringHome : 0 },
            { title: 'Total expenses', amount: amount ? totalExpenses : 0 },
          ]
      }

    default:
      return null
  }
}

export const calculationSalary = (
  params: ParamsCalculationSalary,
): CalculationSalaryResponse[] | null => {
  const { amount, employmentType, role: roleType, calculationType } = params

  if (amount <= 0)
    return convertFromGross({
      amount: 0,
      employmentType,
      roleType,
    })

  const { SI: SI_TAX, HI: HI_TAX, UI: UI_TAX } = taxData.taxDeductions

  switch (calculationType) {
    case 'Gross':
      return convertFromGross({
        amount: amount,
        employmentType,
        roleType,
      })
    case 'Net':
      const totalTax = SI_TAX + HI_TAX + UI_TAX
      const taxSI_HI = SI_TAX + HI_TAX
      const taxUI = UI_TAX

      /**
       * if salary < 36
       * gross = (salary * percentTax * 11 * 10 ** 6 - reductionAmount) / (1 - percentTax)(percentTax - 1) * totalTax
       * else
       * gross = (salary - percentTax* 11 * 10 ** 6 - reductionAmount - (percentTax - 1) * 36 * 10 ** 6 * taxHI_UI) / (1 - percentTax + (percentTax - 1) * taxUI)
       */

      const grossUnder298 = amount * (1 - totalTax)
      const grossUnder298Arr = Object.values(taxableIncomeArr).map(
        ({ reductionAmount, reductionPercent }) =>
          (amount - 11 * 10 ** 6 * reductionPercent - reductionAmount) /
          (1 - reductionPercent + (reductionPercent - 1) * totalTax),
      )
      const grossUpper298 = (amount + 36 * 10 ** 6 * taxSI_HI) / (1 - taxUI)
      const grossUpper298Arr = Object.values(taxableIncomeArr).map(
        ({ reductionAmount, reductionPercent }) =>
          (amount -
            11 * 10 ** 6 * reductionPercent -
            reductionAmount -
            (reductionPercent - 1) * 36 * 10 ** 6 * taxSI_HI) /
          (1 - reductionPercent + (reductionPercent - 1) * taxUI),
      )

      const grossArr = [
        grossUnder298,
        ...grossUnder298Arr,
        grossUpper298,
        ...grossUpper298Arr,
      ]

      let minGrossIndex = 0
      grossArr.forEach((item, index) => {
        if (
          checkFromGross(item, amount) <
          checkFromGross(grossArr[minGrossIndex], amount)
        )
          minGrossIndex = index
      })

      return convertFromGross({
        amount: grossArr[minGrossIndex],
        employmentType,
        roleType,
      })

    case 'Total':
      const { SI, HI, UI, TU, PVI } = taxData.forEmployer
      const totalTaxEmployer = SI + HI + UI + TU
      const taxSI_HI_TU = SI + HI + TU

      // < 36
      const grossUnder296 = (amount - PVI) / (1 + totalTaxEmployer)

      // >= 36
      const grossUpper296 =
        (amount - PVI - 36 * 10 ** 6 * taxSI_HI_TU) / (1 + UI)
      const grossLargest =
        amount - PVI - 93.6 * 10 ** 6 * UI - 36 * 10 ** 6 * taxSI_HI_TU

      const grossArrTotal = [grossUnder296, grossLargest, grossUpper296]

      let minGrossTotalIndex = 0
      grossArrTotal.forEach((item, index) => {
        if (
          checkTotalFromGross(item, amount) <
          checkTotalFromGross(grossArrTotal[minGrossTotalIndex], amount)
        )
          minGrossTotalIndex = index
      })

      return convertFromGross({
        amount: grossArrTotal[minGrossTotalIndex],
        employmentType,
        roleType,
      })

    default:
      return null
  }
}
