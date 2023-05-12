import React from 'react'

import styles from './Introduction.module.scss'

const Introduction = (): React.ReactElement => {
  return (
    <div className={styles['introduction-container']}>
      <div className='header-content'>
        <div className='h2'>
          Fetchunt là nền tảng mạng lưới công việc trực tuyến cho nhà tuyển dụng
          giới thiệu, trao đổi ứng viên trên toàn quốc. Đây là cơ hội cho nhà
          tuyển dụng tăng thu nhập không giới hạn. Bạn chỉ cần giới thiệu ứng
          viên, việc còn lại hãy để đội ngũ của Fetchunt lo.
        </div>
      </div>
    </div>
  )
}

export default Introduction
