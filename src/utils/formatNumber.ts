export function fNumberWithDot(number: number) {
  const checkNumber = Number(number)
  if (Number.isNaN(checkNumber)) return 0

  return checkNumber.toLocaleString('it-IT')
}
