export const EMPLOYMENT_TYPE = ['Full time', 'Freelance'] as const
export type EmploymentType = typeof EMPLOYMENT_TYPE[number]

export const CALCULATION_TYPE = ['Net', 'Gross', 'Total'] as const
export type CalculationType = typeof CALCULATION_TYPE[number]

export const ROLE_TYPE = ['Employer', 'Employee'] as const
export type RoleType = typeof ROLE_TYPE[number]

export const CURRENCY_TYPE = ['VND', 'USD', 'SGD'] as const
export type CurrencyType = typeof CURRENCY_TYPE[number]

export type ParamsCalculationSalary = {
  employmentType: EmploymentType
  calculationType: CalculationType
  role: RoleType
  currency: CurrencyType
  currencyAmount: CurrencyType
  amount: number
}

export type CalculationSalaryResponse = {
  title: string
  amount: number
  percent?: number
}
