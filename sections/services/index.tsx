import React from 'react'

import { ServiceBodyProps, ServiceHeaderProps } from '@type/services'

import ServiceHeader from '@components/service-header'

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
  } = header
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
