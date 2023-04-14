import React, { useCallback, useEffect } from 'react'
import { Controller, useForm } from 'react-hook-form'
import Select from 'react-select'

import { useRouter } from 'next/router'

import clsx from 'clsx'

import { DEFAULT_PAGE_NUMBER } from '@/config/global'
import { FORM_FIELD_JOB_TOOLBAR } from '@/config/job'

import { PATH_CONFIG } from '@/routes/paths'

import {
  IJobQuerySearch,
  ILocationOption,
  ISkillOption,
  JobToolbarFormValue,
} from '@/types/job'

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
}

export const JobTableToolbar = ({
  locationOptions,
  skillOptions,
}: IJobToolbarProps): React.ReactElement => {
  const router = useRouter()
  const methods = useForm<JobToolbarFormValue>()

  const { location = '', skills = '' } = router.query as IJobQuerySearch

  const { control, watch, setValue } = methods

  const handleNavigate = useCallback(() => {
    const { location = '', skill = [] } = watch()
    const skillString = skill?.map(({ value = '' }) => value)?.join(',') || ''

    router.push({
      pathname: PATH_CONFIG.careers.root,
      query: {
        ...(location && { location }),
        ...(skillString && { skills: skillString }),
        page: DEFAULT_PAGE_NUMBER,
      },
    })
  }, [router, watch])

  useEffect(() => {
    const selectedLocation = locationOptions?.find(
      ({ value }) => value === location,
    )

    setValue(FORM_FIELD_JOB_TOOLBAR.LOCATION, selectedLocation?.value || '')
  }, [location, locationOptions, setValue])

  useEffect(() => {
    const selectedSkills =
      skillOptions?.filter(({ value }) =>
        String(skills)?.split(',')?.includes(value),
      ) || []

    setValue(FORM_FIELD_JOB_TOOLBAR.SKILL, selectedSkills || [])
  }, [skills, skillOptions, setValue])

  return (
    <form>
      <div className={clsx('row g-4', 'job-table-toolbar-container')}>
        <div className='col-md-5 job-toolbar-select'>
          <div className='toolbar-search-title'>Location</div>

          <div className='select'>
            <Controller
              name={FORM_FIELD_JOB_TOOLBAR.LOCATION}
              control={control}
              render={({ field: { onChange, value, name } }) => (
                <Select
                  // https://stackoverflow.com/questions/61290173/react-select-how-do-i-resolve-warning-prop-id-did-not-match
                  instanceId={name}
                  name={name}
                  value={locationOptions.find((c) => c.value === value)}
                  options={locationOptions}
                  onChange={(selectedOption: ILocationOption | null) => {
                    onChange(selectedOption?.value)
                    handleNavigate()
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
              render={({ field: { onChange, name, value } }) => (
                <Select
                  styles={colourStyles}
                  instanceId={name}
                  name={name}
                  value={value}
                  options={skillOptions}
                  isMulti
                  onChange={(selectedOption) => {
                    onChange(selectedOption)
                    handleNavigate()
                  }}
                  placeholder='Select skills...'
                />
              )}
            />
          </div>
        </div>
      </div>
    </form>
  )
}

export default JobTableToolbar
