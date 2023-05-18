import React from 'react'

import Image from 'next/image'
import Link from 'next/link'

import clsx from 'clsx'

import styles from './MainContent.module.scss'

const MainContent = (): React.ReactElement => {
  return (
    <div className={clsx(styles['content-container'])}>
      <div className='ft-container row div-center ft-main-content-container'>
        <div className='h2 heading-title'>CHÍNH SÁCH BẢO MẬT</div>
        <div className='privacy-policy-content'>
          <div className='privacy-policy-content-section'>
            <div className='h3 heading-section'>I. GIỚI THIỆU</div>

            <div className='description-section'>
              Chính sách bảo mật của Fetchunt nhằm giúp bạn hiểu Fetchunt thu
              thập dữ liệu gì liên quan tới bạn, lý do Fetchunt thu thập và
              Fetchunt làm gì với dữ liệu đó. Bạn đã tin tưởng sử dụng Fetchunt
              và chia sẻ thông tin với Fetchunt, nên Fetchunt cam kết chỉ sử
              dụng thông tin của bạn để tạo ra những trải nghiệm tốt nhất.
            </div>
          </div>

          <div className='privacy-policy-content-section'>
            <div className='h3 heading-section'>
              II. MỤC ĐÍCH VÀ PHẠM VI THU THẬP THÔNG TIN
            </div>

            <div className='description-section'>
              Việc thu thập dữ liệu chủ yếu trên nền tảng Fetchunt bao gồm:
              email, số điện thoại, tên đăng nhập và mật khẩu đăng nhập.
            </div>

            <div className='description-section'>
              Đây là những thông tin mà Fetchunt cần nhà tuyển dụng cung cấp khi
              tham gia sử dụng dịch vụ và để Fetchunt liên hệ xác nhận khi thành
              viên đăng ký sử dụng dịch vụ trên nền tảng nhằm đảm bảo quyền lợi
              cho cho người tiêu dùng.
            </div>

            <div className='description-section'>
              Các thành viên sẽ tự chịu trách nhiệm về bảo mật và lưu giữ mọi
              hoạt động sử dụng dịch vụ dưới tên đăng ký, mật khẩu và email của
              mình. Ngoài ra, thành viên có trách nhiệm thông báo kịp thời với
              nền tảng Fetchunt về những hành vi sử dụng trái phép, lạm dụng, vi
              phạm bảo mật, lưu trữ tên đăng ký và mật khẩu của bên thứ ba để
              công ty có biện pháp giải quyết phù hợp.
            </div>
          </div>

          <div className='privacy-policy-content-section'>
            <div className='h3 heading-section'>
              III. PHẠM VI SỬ DỤNG THÔNG TIN
            </div>

            <div className='description-section'>
              Nền tảng Fetchunt dùng thông tin thu thập được để:
              <div className='list-sub-description'>
                <div className='sub-description-item'>
                  <div className='check-icon-container'>
                    <div className='position-relative check-icon-img'>
                      <Image
                        src='/images/home-page/CheckIcon.png'
                        alt='check-icon'
                        layout='fill'
                        objectFit='cover'
                      />
                    </div>
                  </div>
                  Cung cấp các dịch vụ và tính năng cho bạn
                </div>

                <div className='sub-description-item'>
                  <div className='check-icon-container'>
                    <div className='position-relative check-icon-img'>
                      <Image
                        src='/images/home-page/CheckIcon.png'
                        alt='check-icon'
                        layout='fill'
                        objectFit='cover'
                      />
                    </div>
                  </div>
                  Tăng cường bảo mật cho tài khoản và giao dịch của bạn Hỗ trợ
                  khi bạn có yêu cầu.
                </div>

                <div className='sub-description-item'>
                  <div className='check-icon-container'>
                    <div className='position-relative check-icon-img'>
                      <Image
                        src='/images/home-page/CheckIcon.png'
                        alt='check-icon'
                        layout='fill'
                        objectFit='cover'
                      />
                    </div>
                  </div>
                  Cung cấp các chương trình hoặc các công việc hấp dẫn
                </div>

                <div className='sub-description-item'>
                  <div className='check-icon-container'>
                    <div className='position-relative check-icon-img'>
                      <Image
                        src='/images/home-page/CheckIcon.png'
                        alt='check-icon'
                        layout='fill'
                        objectFit='cover'
                      />
                    </div>
                  </div>
                  Cung cấp các dịch vụ và tính năng cho bạn
                </div>

                <div className='sub-description-item'>
                  <div className='check-icon-container'>
                    <div className='position-relative check-icon-img'>
                      <Image
                        src='/images/home-page/CheckIcon.png'
                        alt='check-icon'
                        layout='fill'
                        objectFit='cover'
                      />
                    </div>
                  </div>
                  Thông báo về những cập nhật của nền tảng
                </div>

                <div className='sub-description-item'>
                  <div className='check-icon-container'>
                    <div className='position-relative check-icon-img'>
                      <Image
                        src='/images/home-page/CheckIcon.png'
                        alt='check-icon'
                        layout='fill'
                        objectFit='cover'
                      />
                    </div>
                  </div>
                  Phục vụ các mục đích liên quan đến các thủ tục pháp lý
                </div>
              </div>
            </div>

            <div className='description-section'>
              Nhà tuyển dụng có quyền lựa chọn nhận những thông báo, thông tin
              và các chương trình được gửi tới email từ nền tảng Fetchunt. Nội
              dung và tần suất của những email này sẽ thay đổi tùy thuộc vào
              thông tin mà Fetchunt có về nhà tuyển dụng. 
            </div>
          </div>

          <div className='privacy-policy-content-section'>
            <div className='h3 heading-section'>
              IV. THỜI GIAN LƯU TRỮ THÔNG TIN
            </div>

            <div className='description-section'>
              Dữ liệu cá nhân của ứng viên và nhà tuyển dụng sẽ được lưu trữ cho
              đến khi có yêu cầu hủy bỏ. Trong mọi trường hợp còn lại thông tin
              cá nhân của ứng viên và nhà tuyển dụng sẽ được bảo mật trên máy
              chủ của nền tảng Fetchunt.
            </div>
          </div>

          <div className='privacy-policy-content-section'>
            <div className='h3 heading-section'>
              V. THÔNG TIN ĐƠN VỊ THU THẬP VÀ QUẢN LÝ THÔNG TIN
            </div>

            <div className='description-section'>
              Công ty TNHH Fetch Technology Việt Nam
            </div>

            <div className='description-section'>
              Địa chỉ: Tòa nhà BCONS TOWER 2, 42/1 Ung Văn Khiêm, Phường 25,
              Quận Bình Thạnh, Thành phố Hồ Chí Minh, Việt Nam
            </div>

            <div className='description-section'>Số điện thoại: 0843382458</div>

            <div className='description-section'>
              Email: &nbsp;
              <Link href='mailto:recruitment@fetch.tech' passHref>
                <a
                  target='_blank'
                  rel='noopener noreferrer'
                  className='send-mail-link'
                >
                  recruitment@fetch.tech
                </a>
              </Link>
            </div>
          </div>

          <div className='privacy-policy-content-section'>
            <div className='h3 heading-section'>
              VI. PHƯƠNG THỨC ĐỂ NHÀ TUYỂN DỤNG XEM VÀ CHỈNH SỬA DỮ LIỆU CÁ NHÂN
              TRÊN NỀN TẢNG
            </div>

            <div className='description-section'>
              Nhà tuyển dụng có quyền chỉnh sửa dữ liệu cá nhân của mình bằng
              cách đăng nhập vào nền tảng Fetchunt sau đó vào mục tài khoản tiến
              hành điều chỉnh và cập nhật lại thông tin của mình một cách dễ
              dàng.
            </div>

            <div className='description-section'>
              Nếu nhà tuyển dụng đã đăng ký và quên mật khẩu, nhà tuyển dụng có
              thể thiết lập lại mật khẩu bằng cách dùng tính năng
              <Link href='https://portal.fetch.tech/auth/login' passHref>
                <a
                  target='_blank'
                  rel='noopener noreferrer'
                  className='forgot-password-link'
                >
                  &nbsp; “Quên mật khẩu”
                </a>
              </Link>
              . Nền tảng Fetchunt không thể cung cấp mật khẩu của bạn theo các
              cách khác.
            </div>

            <div className='description-section'>
              Nền tảng Fetchunt xem bảo vệ sự riêng tư của người sử dụng như một
              nguyên tắc quan trọng cần tuân thủ. Mọi thông tin của bạn sẽ được
              chúng tôi bảo mật và bảo vệ tuyệt đối. Nhà tuyển dụng có thể truy
              cập và sửa đổi các thông tin mà nhà tuyển dụng đã cung cấp cho nền
              tảng Fetchunt.
            </div>

            <div className='description-section'>
              Nền tảng Fetchunt cam kết tiếp nhận, xử lý phản ánh của bạn về
              việc dữ liệu thu thập bị sử dụng trái với mục đích đã cam kết.
            </div>

            <div className='description-section'>
              Thông tin tiếp nhận và giải quyết khiếu nại vui lòng liên hệ:
            </div>

            <div className='description-section'>
              Công ty TNHH Fetch Technology Việt Nam
            </div>

            <div className='description-section'>
              Địa chỉ: Tòa nhà BCONS TOWER 2, 42/1 Ung Văn Khiêm, Phường 25,
              Quận Bình Thạnh, Thành phố Hồ Chí Minh, Việt Nam
            </div>

            <div className='description-section'>Số điện thoại: 0843382458</div>

            <div className='description-section'>
              Email: &nbsp;
              <Link href='mailto:recruitment@fetch.tech' passHref>
                <a
                  target='_blank'
                  rel='noopener noreferrer'
                  className='send-mail-link'
                >
                  recruitment@fetch.tech
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MainContent
