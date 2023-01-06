import React from 'react'

import Image from 'next/image'

import { CSTabContentCustomerInfo } from '@/types/resources'

interface ICustomerInfoProps {
  customerInfo: CSTabContentCustomerInfo | undefined
}

const CustomerInfo = ({
  customerInfo,
}: ICustomerInfoProps): React.ReactElement => {
  const { general = [], logoImg = '' } = customerInfo || {}

  return (
    <div className='customer-info-container row'>
      <div className='col-lg-8'>
        {general?.map(({ key, value }, index) => (
          <div key={`customer-info-${index}`} className='customer-detail-info'>
            <div className='subtitle1'>{`${key}:`}</div>
            <div className='h6-bold'>{value}</div>
          </div>
        ))}
      </div>

      <div className='customer-img-container col-lg-4'>
        <Image
          alt={logoImg}
          src={logoImg || ''}
          layout='fill'
          objectFit='contain'
        />
      </div>
    </div>
  )
}

export default CustomerInfo
