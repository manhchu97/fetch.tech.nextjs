import Link from 'next/link'

import Accordion from '../accordion'
import styles from './JoinSteps.module.scss'

const joinSteps = [
  {
    step: 1,
    title: (
      <>
        <u>Bước 1:</u> Đăng ký thành viên của Fetchunt
      </>
    ),
    content: (
      <>
        Đầu tiên, để tiến hành đăng ký, bạn truy cập&nbsp;
        <Link href='https://portal.fetch.tech/auth/login?tab=signin'>
          <a target='_blank' rel='noopener noreferrer'>
            <u>tại đây</u>
          </a>
        </Link>
        &nbsp;và điền đầy đủ thông tin của mình vào mẫu. Sau đó, bạn chọn đăng
        ký.
      </>
    ),
  },
  {
    step: 2,
    title: (
      <>
        <u>Bước 2:</u> Tìm công việc đang tuyển dụng
      </>
    ),
    content: (
      <>
        Bạn đăng nhập vào hệ thống. Tiếp theo, bạn chọn “Công việc”. Sau đó,
        nhấn vào “Đang tuyển dụng”. Cuối cùng, bạn tìm các vị trí có ứng viên
        phù hợp.
      </>
    ),
  },
  {
    step: 3,
    title: (
      <>
        <u>Bước 3:</u> Giới thiệu ứng viên
      </>
    ),
    content: (
      <>
        Nhập đầy đủ thông tin ứng viên, tải hồ sơ ứng viên lên và lưu lại. Cuối
        cùng, kiểm tra lại hồ sơ trong danh sách vị trí ứng tuyển.
      </>
    ),
  },
  {
    step: 4,
    title: (
      <>
        <u>Bước 4:</u> Chờ xét duyệt và nhận thưởng
      </>
    ),
    content: (
      <>
        Đội ngũ Fetch kiểm tra hồ sơ ứng viên hợp lệ và tùy vào từng mốc đánh
        giá sẽ được nhận thưởng với các mức hoa hồng khác nhau. Những cập nhật
        mới nhất về vị trí ứng tuyển này sẽ được thông báo đến tài khoản và
        email của bạn.
      </>
    ),
  },
  {
    step: 5,
    title: (
      <>
        <u>Bước 5:</u> Rút tiền về tài khoản bạn
      </>
    ),
    content: (
      <>
        Khi bạn muốn rút tiền, bạn cần vào “Hồ sơ”, chọn “Thông tin thanh toán”
        và nhập “Thông tin tài khoản ngân hàng”, chọn “Lưu”. Nếu đã nhập Thông
        tin ngân hàng trước đó, bạn có thể bỏ qua bước này.
        <br /> Sau đó, bạn chọn “Rút tiền” trong “Giao dịch” ở thanh bên trái,
        chọn “Đổi điểm thưởng”, nhập số điểm bạn bạn muốn đổi chọn “Xác nhận”.
      </>
    ),
  },
]

const JoinSteps = () => {
  return (
    <div className={styles['join-steps-container']}>
      <div className='join-steps-header'>
        Các bước SIÊU ĐƠN GIẢN gia nhập mạng lưới của Fetchunt
      </div>

      <div className='join-steps-main m-auto'>
        {joinSteps.map((item, index) => (
          <div key={index} className='d-flex mb-3'>
            <div className='num-step d-flex justify-content-center align-items-center'>
              {item.step}
            </div>
            <Accordion title={item.title} content={item.content} />
          </div>
        ))}
      </div>

      <div className='join-steps-footer'>
        <Link href='https://portal.fetch.tech/auth/login?tab=signin'>
          <a target='_blank' rel='noopener noreferrer'>
            <button type='button'>Đăng ký ngay</button>
          </a>
        </Link>
      </div>
    </div>
  )
}

export default JoinSteps
