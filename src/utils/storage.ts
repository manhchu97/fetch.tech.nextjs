export function saveDataToStorage(key: string, value: unknown) {
  localStorage.setItem(key, JSON.stringify(value))
}

export function getDataFromStorage(key: string) {
  const value = localStorage.getItem(key)
  const data = !!value ? JSON.parse(value) : undefined
  return data
}

export function removeDataFromStorage(key: string) {
  localStorage.removeItem(key)
}
