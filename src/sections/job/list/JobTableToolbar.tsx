import React from 'react'
import { Control, Controller } from 'react-hook-form'
import Select from 'react-select'

import clsx from 'clsx'

import { FORM_FIELD_JOB_TOOLBAR } from '@/config/job'

import { ILocationOption, ISkillOption, JobToolbarFormValue } from '@/types/job'

const colourStyles = {
  multiValue: (styles: object) => {
    return {
      ...styles,
      backgroundColor: '#fccc4b',
      color: 'white',
    }
  },
  multiValueLabel: (styles: object) => ({
    ...styles,
    color: 'white',
  }),
}

interface IJobToolbarProps {
  locationOptions: ILocationOption[]
  skillOptions: ISkillOption[]
  control: Control<JobToolbarFormValue>
}

export const JobTableToolbar = ({
  locationOptions,
  skillOptions,
  control,
}: IJobToolbarProps): React.ReactElement => {
  return (
    <div className={clsx('row g-4', 'job-table-toolbar-container')}>
      <div className='col-md-5 job-toolbar-select'>
        <div className='toolbar-search-title'>Location</div>

        <div className='select'>
          <Controller
            name={FORM_FIELD_JOB_TOOLBAR.LOCATION}
            control={control}
            render={({ field: { onChange, value, name } }) => (
              <Select
                name={name}
                value={locationOptions.find((c) => c.value === value)}
                options={locationOptions}
                onChange={(selectedOption: ILocationOption | null) => {
                  onChange(selectedOption?.value)
                }}
                isClearable
                placeholder='Select location...'
              />
            )}
          />
        </div>
      </div>

      <div className='col-md-5 job-toolbar-select'>
        <div className='toolbar-search-title'>Skills</div>

        <div className='select'>
          <Controller
            name={FORM_FIELD_JOB_TOOLBAR.SKILL}
            control={control}
            render={({ field: { onChange, name } }) => (
              <Select
                styles={colourStyles}
                name={name}
                options={skillOptions}
                isMulti
                onChange={(selectedOption) => {
                  onChange(selectedOption)
                }}
                placeholder='Select skills...'
              />
            )}
          />
        </div>
      </div>
    </div>
  )
}

export default JobTableToolbar
