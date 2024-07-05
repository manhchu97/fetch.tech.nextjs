import {
  CalculationSalaryResponse,
  EmploymentType,
  InsuranceType,
  ParamsCalculationSalary,
  RoleType,
} from '@/sections/resources/calculator/types'

const maxSalarySHI = 46800000
const maxSalaryUI = 99200000

export const BASE_SALARY_INSURANCE = 4.68 * 10 ** 6

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

const GROSS_EXCHANGE_KEY = [
  '4M750',
  '9M250',
  '16M050',
  '27M250',
  '42M250',
  '61M850',
  'over_61M850',
] as const
type GrossExchangeKey = typeof GROSS_EXCHANGE_KEY[number]

type GrossExchangeValue = {
  value: number
  reductionPercentGE: number
  reductionAmountGE: number
}

const grossExchangeArr: Record<GrossExchangeKey, GrossExchangeValue> = {
  '4M750': {
    value: 4.75 * 10 ** 6,
    reductionPercentGE: 0.95,
    reductionAmountGE: 0,
  },
  '9M250': {
    value: 9.25 * 10 ** 6,
    reductionPercentGE: 0.9,
    reductionAmountGE: 0.25 * 10 ** 6,
  },
  '16M050': {
    value: 16.05 * 10 ** 6,
    reductionPercentGE: 0.85,
    reductionAmountGE: 0.75 * 10 ** 6,
  },
  '27M250': {
    value: 27.25 * 10 ** 6,
    reductionPercentGE: 0.8,
    reductionAmountGE: 1.65 * 10 ** 6,
  },
  '42M250': {
    value: 42.25 * 10 ** 6,
    reductionPercentGE: 0.75,
    reductionAmountGE: 3.25 * 10 ** 6,
  },
  '61M850': {
    value: 61.85 * 10 ** 6,
    reductionPercentGE: 0.7,
    reductionAmountGE: 5.85 * 10 ** 6,
  },
  over_61M850: {
    value: 61.85 * 10 ** 6,
    reductionPercentGE: 0.65,
    reductionAmountGE: 9.85 * 10 ** 6,
  },
}

/**
 * SI: Social Insurance
 * HI: Health Insurance
 * UI: Unemployment Insurance
 * TU: Union Tax
 */

const taxData = {
  forEmployer: { SI: 0.175, HI: 0.03, UI: 0.01, TU: 0.02, PVI: 250000 },
  forEmployee: {
    self: 11000000,
    dependent: 4400000,
    SI: 0.08,
    HI: 0.015,
    UI: 0.01,
  },
}

const EXCHANGE_RATE = ['VND', 'USD', 'SGD'] as const
type ExchangeRate = typeof EXCHANGE_RATE[number]

export const convertExchangeRate = (
  rateType: ExchangeRate,
  salary: number,
  exchangeRateUSD: number,
  exchangeRateSGD: number,
) => {
  switch (rateType) {
    case 'USD':
      return salary / exchangeRateUSD
    case 'SGD':
      return salary / exchangeRateSGD
    default:
      return salary
  }
}

export const convertToVND = (
  rateType: ExchangeRate,
  salary: number,
  exchangeRateUSD: number,
  exchangeRateSGD: number,
) => {
  switch (rateType) {
    case 'USD':
      return salary * exchangeRateUSD
    case 'SGD':
      return salary * exchangeRateSGD
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

export const getTaxableIncomeFromGE = (grossExchange: number) => {
  if (grossExchange <= 0) return grossExchange

  let grossExchangeKey: GrossExchangeKey = '4M750'

  if (grossExchange < grossExchangeArr['4M750'].value)
    grossExchangeKey = '4M750'
  else if (grossExchange < grossExchangeArr['9M250'].value)
    grossExchangeKey = '9M250'
  else if (grossExchange < grossExchangeArr['16M050'].value)
    grossExchangeKey = '16M050'
  else if (grossExchange < grossExchangeArr['27M250'].value)
    grossExchangeKey = '27M250'
  else if (grossExchange < grossExchangeArr['42M250'].value)
    grossExchangeKey = '42M250'
  else if (grossExchange < grossExchangeArr['61M850'].value)
    grossExchangeKey = '61M850'
  else if (grossExchange >= grossExchangeArr['61M850'].value)
    grossExchangeKey = 'over_61M850'

  return (
    (grossExchange - grossExchangeArr[grossExchangeKey].reductionAmountGE) /
    grossExchangeArr[grossExchangeKey].reductionPercentGE
  )
}

const getDataTaxForEmployee = (
  amount: number,
  numberDependent: number,
  insuranceType: InsuranceType,
  insuranceAmount: number,
) => {
  const { self, dependent, SI, HI, UI } = taxData.forEmployee

  switch (insuranceType) {
    case 'Full wage': {
      const numSI = amount < maxSalarySHI ? amount * SI : maxSalarySHI * SI
      const numHI = amount < maxSalarySHI ? amount * HI : maxSalarySHI * HI
      const numUI = amount < maxSalaryUI ? amount * UI : maxSalaryUI * UI

      const totalSHUIEE = numSI + numHI + numUI
      const taxDeductions = totalSHUIEE + self + dependent * numberDependent
      const taxableIncome = amount > taxDeductions ? amount - taxDeductions : 0
      const PIT = getPersonalIncomeTaxable(taxableIncome)

      return {
        bringHome: amount - PIT - totalSHUIEE,
        numSI,
        numHI,
        numUI,
        PIT,
        taxDeductions,
      }
    }
    case 'Other': {
      const numSI =
        insuranceAmount < maxSalarySHI
          ? insuranceAmount * SI
          : maxSalarySHI * SI
      const numHI =
        insuranceAmount < maxSalarySHI
          ? insuranceAmount * HI
          : maxSalarySHI * HI
      const numUI =
        insuranceAmount < maxSalaryUI ? insuranceAmount * UI : maxSalaryUI * UI

      const totalSHUIEE = numSI + numHI + numUI
      const taxDeductions = totalSHUIEE + self + dependent * numberDependent
      const taxableIncome = amount > taxDeductions ? amount - taxDeductions : 0
      const PIT = getPersonalIncomeTaxable(taxableIncome)

      return {
        bringHome: amount - PIT - totalSHUIEE,
        numSI,
        numHI,
        numUI,
        PIT,
        taxDeductions,
      }
    }
  }
}

const getDataTaxForEmployer = (
  amount: number,
  insuranceType: InsuranceType,
  insuranceAmount: number,
) => {
  const { SI, HI, UI, TU, PVI } = taxData.forEmployer

  switch (insuranceType) {
    case 'Full wage': {
      const numSI = amount < maxSalarySHI ? amount * SI : maxSalarySHI * SI
      const numHI = amount < maxSalarySHI ? amount * HI : maxSalarySHI * HI
      const numUI = amount < maxSalaryUI ? amount * UI : maxSalaryUI * UI
      const numTU = amount < maxSalarySHI ? amount * TU : maxSalarySHI * TU
      const totalSHUIER = numSI + numHI + numUI

      return {
        totalExpenses: amount + totalSHUIER + numTU + PVI,
        numSI,
        numHI,
        numUI,
        numTU,
      }
    }
    case 'Other': {
      const numSI =
        insuranceAmount < maxSalarySHI
          ? insuranceAmount * SI
          : maxSalarySHI * SI
      const numHI =
        insuranceAmount < maxSalarySHI
          ? insuranceAmount * HI
          : maxSalarySHI * HI
      const numUI =
        insuranceAmount < maxSalaryUI ? insuranceAmount * UI : maxSalaryUI * UI
      const numTU =
        insuranceAmount < maxSalarySHI
          ? insuranceAmount * TU
          : maxSalarySHI * TU
      const totalSHUIER = numSI + numHI + numUI

      return {
        totalExpenses: amount + totalSHUIER + numTU + PVI,
        numSI,
        numHI,
        numUI,
        numTU,
      }
    }
  }
}

type ParamsConvertFromGross = {
  employmentType: EmploymentType
  amount: number
  roleType: RoleType
  dependentNumber: number
  insuranceType: InsuranceType
  insuranceAmount: number
}

const convertFromGross = (
  params: ParamsConvertFromGross,
): CalculationSalaryResponse[] | null => {
  const {
    employmentType,
    amount,
    roleType,
    dependentNumber,
    insuranceType,
    insuranceAmount,
  } = params

  const {
    SI: SI_Employee,
    HI: HI_Employee,
    UI: UI_Employee,
  } = taxData.forEmployee
  const {
    SI: SI_Employer,
    HI: HI_Employer,
    UI: UI_Employer,
    TU,
    PVI,
  } = taxData.forEmployer

  const {
    bringHome,
    numSI: numSI_Employee,
    numHI: numHI_Employee,
    numUI: numUI_Employee,
    PIT,
    taxDeductions,
  } = getDataTaxForEmployee(
    amount,
    dependentNumber,
    insuranceType,
    insuranceAmount,
  )

  const {
    totalExpenses,
    numSI: numSI_Employer,
    numHI: numHI_Employer,
    numUI: numUI_Employer,
    numTU,
  } = getDataTaxForEmployer(amount, insuranceType, insuranceAmount)

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
              percent: SI_Employee,
              amount: amount ? numSI_Employee : 0,
            },
            {
              title: 'Health insurance',
              percent: HI_Employee,
              amount: amount ? numHI_Employee : 0,
            },
            {
              title: 'Unemployed insurance',
              percent: UI_Employee,
              amount: amount ? numUI_Employee : 0,
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
              percent: SI_Employer,
              amount: amount ? numSI_Employer : 0,
            },
            {
              title: 'Health insurance',
              percent: HI_Employer,
              amount: amount ? numHI_Employer : 0,
            },
            {
              title: 'Unemployed insurance',
              percent: UI_Employer,
              amount: amount ? numUI_Employer : 0,
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
  const {
    amount,
    employmentType,
    role: roleType,
    calculationType,
    dependentNumber = 0,
    insuranceType,
    insuranceAmount,
  } = params

  if (amount <= 0)
    return convertFromGross({
      amount: 0,
      employmentType,
      roleType,
      dependentNumber,
      insuranceType,
      insuranceAmount,
    })

  const {
    SI: SI_Employee,
    HI: HI_Employee,
    UI: UI_Employee,
    self,
    dependent,
  } = taxData.forEmployee

  switch (calculationType) {
    case 'Gross':
      return convertFromGross({
        amount: amount,
        employmentType,
        roleType,
        dependentNumber,
        insuranceType,
        insuranceAmount,
      })
    case 'Net':
      switch (employmentType) {
        case 'Freelance': {
          const gross = amount / 0.9
          return convertFromGross({
            amount: gross,
            employmentType,
            roleType,
            dependentNumber,
            insuranceType,
            insuranceAmount,
          })
        }
        case 'Full time': {
          const exemption = self + dependent * dependentNumber
          const grossExchange = amount - exemption
          const taxableIncome = getTaxableIncomeFromGE(grossExchange)

          switch (insuranceType) {
            case 'Full wage': {
              // check insurance base
              let insuranceBase = 0

              if (
                (taxableIncome + exemption) / 0.895 >= maxSalarySHI &&
                (taxableIncome + exemption) / 0.895 < maxSalaryUI
              ) {
                insuranceBase =
                  (taxableIncome + exemption + maxSalarySHI * 0.095) / 0.99
              } else if ((taxableIncome + exemption) / 0.895 > maxSalaryUI) {
                insuranceBase =
                  taxableIncome +
                  exemption +
                  maxSalarySHI * 0.095 +
                  maxSalaryUI * 0.01
              } else {
                insuranceBase = (taxableIncome + exemption) / 0.895
              }

              // check social insurance
              let numSI_Employee = 0

              if (insuranceBase < maxSalarySHI)
                numSI_Employee = insuranceBase * SI_Employee

              if (insuranceBase >= maxSalarySHI)
                numSI_Employee = maxSalarySHI * SI_Employee

              // check health insurance
              let numHI_Employee = 0

              if (insuranceBase < maxSalarySHI)
                numHI_Employee = insuranceBase * HI_Employee

              if (insuranceBase >= maxSalarySHI)
                numHI_Employee = maxSalarySHI * HI_Employee

              // check health insurance
              let numUI_Employee = 0

              if (insuranceBase < maxSalaryUI)
                numUI_Employee = insuranceBase * UI_Employee

              if (insuranceBase >= maxSalaryUI)
                numUI_Employee = maxSalaryUI * UI_Employee

              const totalSHUIEE =
                numSI_Employee + numHI_Employee + numUI_Employee

              const gross = exemption + totalSHUIEE + taxableIncome
              return convertFromGross({
                amount: gross,
                employmentType,
                roleType,
                dependentNumber,
                insuranceType,
                insuranceAmount,
              })
            }
            case 'Other': {
              // check social insurance
              let numSI_Employee = 0

              if (insuranceAmount < maxSalarySHI)
                numSI_Employee = insuranceAmount * SI_Employee

              if (insuranceAmount >= maxSalarySHI)
                numSI_Employee = maxSalarySHI * SI_Employee

              // check health insurance
              let numHI_Employee = 0

              if (insuranceAmount < maxSalarySHI)
                numHI_Employee = insuranceAmount * HI_Employee

              if (insuranceAmount >= maxSalarySHI)
                numHI_Employee = maxSalarySHI * HI_Employee

              // check health insurance
              let numUI_Employee = 0

              if (insuranceAmount < maxSalaryUI)
                numUI_Employee = insuranceAmount * UI_Employee

              if (insuranceAmount >= maxSalaryUI)
                numUI_Employee = maxSalaryUI * UI_Employee

              const totalSHUIEE =
                numSI_Employee + numHI_Employee + numUI_Employee
              const taxDeductions =
                totalSHUIEE + self + dependent * dependentNumber
              const taxableIncome = getTaxableIncomeFromGE(grossExchange)

              return convertFromGross({
                amount: taxDeductions + taxableIncome,
                employmentType,
                roleType,
                dependentNumber,
                insuranceType,
                insuranceAmount,
              })
            }
          }
        }
        default:
          return null
      }
    case 'Total':
      const { PVI, HI, SI, UI, TU } = taxData.forEmployer

      switch (employmentType) {
        case 'Freelance': {
          return convertFromGross({
            amount,
            employmentType,
            roleType,
            dependentNumber,
            insuranceType,
            insuranceAmount,
          })
        }
        case 'Full time': {
          let gross = 0

          switch (insuranceType) {
            case 'Full wage': {
              if (amount - PVI >= 102.636 * 10 ** 6) {
                gross = amount - PVI - 9.036 * 10 ** 6
              } else if (amount - PVI >= 44.46 * 10 ** 6) {
                gross = (amount - PVI - 8.1 * 10 ** 6) / (1 + 0.01)
              } else gross = (amount - PVI) / (1 + 0.235)

              return convertFromGross({
                amount: gross,
                employmentType,
                roleType,
                dependentNumber,
                insuranceType,
                insuranceAmount,
              })
            }
            case 'Other': {
              const numSI =
                insuranceAmount < maxSalarySHI
                  ? insuranceAmount * SI
                  : maxSalarySHI * SI
              const numHI =
                insuranceAmount < maxSalarySHI
                  ? insuranceAmount * HI
                  : maxSalarySHI * HI
              const numUI =
                insuranceAmount < maxSalaryUI
                  ? insuranceAmount * UI
                  : maxSalaryUI * UI
              const numTU =
                insuranceAmount < maxSalarySHI
                  ? insuranceAmount * TU
                  : maxSalarySHI * TU
              const totalSHUIER = numSI + numHI + numUI

              return convertFromGross({
                amount: amount - PVI - totalSHUIER - numTU,
                employmentType,
                roleType,
                dependentNumber,
                insuranceType,
                insuranceAmount,
              })
            }
          }
        }
        default:
          return null
      }
    default:
      return null
  }
}
