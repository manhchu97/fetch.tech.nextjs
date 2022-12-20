import React from 'react'

import ServiceHeader from '@/components/service-header'

import { ServiceBodyProps, ServiceHeaderProps } from '@/types/services'

interface ServiceProps {
  header: ServiceHeaderProps
  serviceBody: ServiceBodyProps[]
}

const ServiceSections = ({
  header,
  serviceBody,
}: ServiceProps): React.ReactElement => {
  const {
    title = '',
    subTitle = '',
    imageSource = '',
    className: imgClassName = '',
  } = header || {}
  console.log('serviceBody', serviceBody)

  return (
    <>
      <ServiceHeader
        title={title}
        subTitle={subTitle}
        imageSource={imageSource}
        className={imgClassName}
      />
    </>
  )
}

export default ServiceSections
