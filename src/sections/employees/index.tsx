import React from 'react'

import dynamic from 'next/dynamic'

import EmployeeHeader from '@/sections/employees/header'

import styles from './Employee.module.scss'

const EmployeeCareer = dynamic(
  () => import('@/sections/employees/employee-career'),
)

const EmployeeUSP = dynamic(() => import('@/sections/employees/employee-usp'))

const EmployeeMember = dynamic(
  () => import('@/sections/employees/employee-member'),
)

const Employee = () => {
  return (
    <div className={styles.employee}>
      <div className='employee-section'>
        <EmployeeHeader />

        <EmployeeCareer />

        <EmployeeUSP />

        <EmployeeMember />
      </div>
    </div>
  )
}

export default Employee
