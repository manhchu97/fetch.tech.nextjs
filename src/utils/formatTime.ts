import { intervalToDuration } from 'date-fns'

export function fDateDuration(
  startDate: string,
  endDate: string,
  isCurrentJob = false,
) {
  try {
    if (!startDate || (!endDate && !isCurrentJob))
      return { value: 0, label: 'month' }

    const dateDuration = intervalToDuration({
      start: new Date(startDate),
      end: isCurrentJob ? new Date() : new Date(endDate),
    })

    const { years = 0, months = 0 } = dateDuration || {}

    if (!years)
      return {
        value: months || 1,
        label: months > 1 ? 'months' : 'month',
      }

    const suffix = months > 0 ? '+' : ''

    return {
      value: `${years}${suffix}`,
      label: `${years > 1 ? 'years' : 'year'}`,
    }
  } catch (error) {
    return {
      value: 1,
      label: 'month',
    }
  }
}
