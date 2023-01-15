import React, { useMemo, useState } from 'react'

import Image from 'next/image'

import clsx from 'clsx'
import { paramCase } from 'param-case'

import { IOption } from '@/types/contact'

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
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [searchValue, setSearchValue] = useState<string>('')

  const handleFocusInput = () => {
    setIsOpen(true)
  }

  const handleClose = () => {
    setIsOpen(false)
  }

  const handleChangeSearchInput = (e: {
    target: { value: React.SetStateAction<string> }
  }) => {
    setSearchValue(e.target.value)
  }

  const handleSelectOption = (option: IOption) => {
    setSearchValue('')
    onSelectOption?.(option)
    handleClose()
  }

  const handleAddOption = () => {
    if (!isAddOption) return

    onAddOption?.({
      value: paramCase(searchValue),
      label: searchValue,
    })

    setSearchValue('')
    handleClose()
  }

  const listFilterOptions = useMemo(
    () =>
      options
        .filter((item) =>
          item.label
            .toLowerCase()
            .includes(String(searchValue).trim().toLowerCase()),
        )
        .filter(
          (item) =>
            !listOptionDisabled.some(
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
                e.preventDefault()

                if (!String(searchValue).trim()) return

                e.currentTarget.blur()
                handleAddOption()
              }
            }}
            autoComplete='off'
          />

          <button
            className='btn btn-outline-primary autocomplete-search-icon'
            type='button'
          >
            <Image
              alt='Icon search option'
              src='/images/contact/IconSearchAutocomplete.svg'
              width={22}
              height={22}
            />
          </button>
        </div>

        <div className='dropdown-container'>
          <div
            className={clsx({ 'dropdown-backdrop': true, active: isOpen })}
            onClick={handleClose}
          ></div>

          <div className={clsx({ 'dropdown-content': true, active: isOpen })}>
            {(() => {
              if (!listFilterOptions.length) {
                if (!isAddOption)
                  return (
                    <li className='dropdown-item-no-options'>No options</li>
                  )

                return (
                  <li className='dropdown-item-add'>
                    <button
                      type='button'
                      className='btn-add-option'
                      onClick={handleAddOption}
                    >
                      Add
                    </button>
                  </li>
                )
              }

              return listFilterOptions.map(({ value, label }) => {
                const disabled = listOptionDisabled?.some(
                  (item) => item.label === label,
                )

                return (
                  <DropdownItem
                    key={value}
                    title={label}
                    value={value}
                    onSelectOption={handleSelectOption}
                    disabled={disabled}
                  />
                )
              })
            })()}
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
      className={clsx({ 'dropdown-item': true, disabled: disabled })}
      onClick={() => onSelectOption({ value, label: title })}
    >
      <p className='dropdown-item-title'>{title}</p>
    </div>
  )
}
