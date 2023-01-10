import React, { useMemo, useState } from 'react'

import clsx from 'clsx'

import { IOption } from '@/types/contact'

import { replaceAll } from '@/utils/replace'

import styles from './Autocomplete.module.scss'

type IAutocompleteProps = {
  placeholder?: string
  options: IOption[]
  listOptionDisabled?: IOption[]
  onSelectOption?: (option: IOption) => void
} & (
  | {
      isAddOption: true
      onAddOption: (option: IOption) => void
    }
  | {
      isAddOption?: false
      onAddOption?: () => void
    }
)

const Autocomplete = ({
  placeholder = '',
  options = [],
  listOptionDisabled = [],
  isAddOption = false,
  onSelectOption,
  onAddOption,
}: IAutocompleteProps): React.ReactElement => {
  const [isShowDropDown, setIsShowDropdown] = useState<boolean>(false)
  const [searchValue, setSearchValue] = useState<string>('')

  const handleFocusInput = () => {
    setIsShowDropdown(true)
  }

  const handleCloseDropdown = () => {
    setIsShowDropdown(false)
  }

  const handleChangeSearchInput = (e: {
    target: { value: React.SetStateAction<string> }
  }) => {
    setSearchValue(e.target.value)
  }

  const handleSelectOption = (option: IOption) => {
    setSearchValue('')
    if (onSelectOption) onSelectOption(option)
    handleCloseDropdown()
  }

  const handleAddOption = () => {
    if (isAddOption && onAddOption) {
      onAddOption({
        value: replaceAll(searchValue.trim().toLowerCase(), ' ', '-'),
        label: searchValue,
      })
    }
    setSearchValue('')
    handleCloseDropdown()
  }

  const listFilterOptions = useMemo(
    () =>
      options
        .filter((item) =>
          item.label.toLowerCase().includes(searchValue.trim().toLowerCase()),
        )
        .filter(
          (item) =>
            !listOptionDisabled.find(
              (itemDisabled) => itemDisabled.value === item.value,
            ),
        ),
    [options, searchValue, listOptionDisabled],
  )

  return (
    <div className={styles['autocomplete-container']}>
      <section className='autocomplete-search-section'>
        <div className='input-group my-4 col-6 mx-auto autocomplete-search-input-container'>
          <input
            className='form-control rounded autocomplete-search-input'
            placeholder={placeholder}
            onFocus={handleFocusInput}
            value={searchValue}
            onChange={handleChangeSearchInput}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                handleAddOption()
                e.preventDefault()
              }
            }}
            autoComplete='off'
          />

          <button
            className='btn btn-outline-primary autocomplete-search-icon'
            type='button'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='24px'
              height='24px'
              preserveAspectRatio='xMidYMid meet'
              viewBox='0 0 24 24'
            >
              <path
                fill='currentColor'
                d='m18.9 20.3l-5.6-5.6q-.75.6-1.725.95Q10.6 16 9.5 16q-2.725 0-4.612-1.887Q3 12.225 3 9.5q0-2.725 1.888-4.613Q6.775 3 9.5 3t4.613 1.887Q16 6.775 16 9.5q0 1.1-.35 2.075q-.35.975-.95 1.725l5.625 5.625q.275.275.275.675t-.3.7q-.275.275-.7.275q-.425 0-.7-.275ZM9.5 14q1.875 0 3.188-1.312Q14 11.375 14 9.5q0-1.875-1.312-3.188Q11.375 5 9.5 5Q7.625 5 6.312 6.312Q5 7.625 5 9.5q0 1.875 1.312 3.188Q7.625 14 9.5 14Z'
              />
            </svg>
          </button>
        </div>

        <div className='dropdown-container'>
          <div
            className={clsx(
              { 'dropdown-backdrop': true },
              { active: isShowDropDown },
            )}
            onClick={handleCloseDropdown}
          ></div>

          <div
            className={clsx(
              { 'dropdown-content': true },
              { active: isShowDropDown },
            )}
          >
            <>
              {listFilterOptions.map(({ value, label }) => (
                <DropdownItem
                  key={value}
                  title={label}
                  value={value}
                  onSelectOption={handleSelectOption}
                  disabled={listOptionDisabled?.some(
                    (item) => item.label === label,
                  )}
                />
              ))}

              {!listFilterOptions.length && isAddOption && (
                <li className='dropdown-item-add'>
                  <button
                    type='button'
                    className='btn-add-option'
                    onClick={handleAddOption}
                  >
                    Add
                  </button>
                </li>
              )}

              {!listFilterOptions.length && !isAddOption && (
                <li className='dropdown-item-no-options'>No options</li>
              )}
            </>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Autocomplete

interface IDropdownItemProps {
  title: string
  value: number | string
  disabled?: boolean
  onSelectOption: (item: IOption) => void
}

const DropdownItem = ({
  title,
  value,
  disabled,
  onSelectOption,
}: IDropdownItemProps) => {
  return (
    <div
      className={clsx({ 'dropdown-item': true }, { disabled: disabled })}
      onClick={() => onSelectOption({ value, label: title })}
    >
      <p className='dropdown-item-title'>{title}</p>
    </div>
  )
}
