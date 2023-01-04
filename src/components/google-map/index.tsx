import React from 'react'

interface IGoogleMapProps {
  linkMap: string
}

const GoogleMap = ({ linkMap }: IGoogleMapProps): React.ReactElement => {
  return (
    <div>
      <iframe
        src={linkMap}
        width='100%'
        height='100%'
        style={{ border: 0, height: '225px' }}
        allowFullScreen
        title='HN'
      />
    </div>
  )
}

export default GoogleMap
