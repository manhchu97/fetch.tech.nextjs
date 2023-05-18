import React from 'react'

import Image from 'next/image'
import Link from 'next/link'

import clsx from 'clsx'

import styles from './MainContent.module.scss'

const MainContent = (): React.ReactElement => {
  return (
    <div className={clsx(styles['content-container'])}>
      <div className='ft-container row div-center ft-main-content-container'>
        <div className='service-agreement-heading'>
          <div className='h2 heading-title'>THOẢ THUẬN DỊCH VỤ</div>

          <div className='h4 effective-date'>
            (Có hiệu lực từ ngày 01, tháng 06, năm 2023)
          </div>
        </div>

        <div className='service-agreement-content'>
          <div className='service-agreement-content-section'>
            <div className='h3 heading-section'>I. KHÁI NIỆM</div>

            <div className='description-section'>
              Fetchunt là nền tảng giới thiệu ứng viên cho nhà tuyển dụng của
              Công ty TNHH Fetch Technology Việt Nam.
            </div>

            <div className='description-section'>
              Bạn nghĩa là bất kỳ cá nhân, tổ chức nào đăng ký việc sử dụng nền
              tảng của Fetchunt.
            </div>

            <div className='description-section'>
              Ứng viên nghĩa là người được Bạn giới thiệu thông qua nền tảng
              tuyển dụng của Fetchunt.
            </div>

            <div className='description-section'>
              Dịch Vụ nghĩa là các dịch vụ được cung cấp trên nền tảng tuyển
              dụng của Fetchunt.
            </div>
          </div>

          <div className='service-agreement-content-section'>
            <div className='h3 heading-section'>II. QUY ĐỊNH CHUNG</div>

            <div className='description-section'>
              Quy chế hoạt động này bao gồm các điều khoản và điều kiện để hoạt
              động và sử dụng dịch vụ trên nền tảng Fetchunt.
            </div>

            <div className='description-section'>
              Các thông tin hồ sơ ứng viên được đăng tải phải là thông tin chính
              chủ và chủ tài khoản phải hoàn toàn chịu trách nhiệm về tính xác
              thực và tự nguyện của các thông tin cá nhân được chia sẻ.
            </div>

            <div className='description-section'>
              Mọi hoạt động cung cấp dịch vụ trên nền tảng Fetchunt được thực
              hiện công khai, minh bạch, đảm bảo quyền lợi của người dùng.
            </div>
          </div>

          <div className='service-agreement-content-section'>
            <div className='h3 heading-section'>
              III. TRÁCH NHIỆM CỦA FETCHUNT
            </div>

            <div className='description-section'>
              Bảo mật thông tin tuyệt đối cho các bên trong quá trình tuyển
              dụng.
            </div>

            <div className='description-section'>
              Fetchunt tham gia trực tiếp vào quá trình tuyển dụng ứng viên và
              chịu trách nhiệm trong quá trình tuyển dụng ứng viên, loại bỏ
              những ứng viên không hợp lệ và thông báo kết quả cho Bạn trên nền
              tảng.
            </div>

            <div className='description-section'>
              Fetchunt được phép thực hiện bất kỳ hành động nào liên quan đến
              Nội dung của Bạn khi tự xét thấy cần thiết hoặc thích hợp, nếu
              Fetchunt tin rằng Nội dung của Bạn có thể tạo ra trách nhiệm pháp
              lý cho Fetchunt, gây thiệt hại đến thương hiệu Fetchunt.
            </div>
          </div>

          <div className='service-agreement-content-section'>
            <div className='h3 heading-section'>
              IV. QUYỀN VÀ TRÁCH NHIỆM THÀNH VIÊN
            </div>

            <div className='sub-section'>
              <div className='sub-section-title'>
                1. Quyền của bạn khi tham gia trên nền tảng của Fetchunt
              </div>

              <div className='sub-section-description description-section'>
                Khi đăng kí tài khoản trên nền tảng Fetchunt thành công bạn sẽ
                trở thành Thành viên của Fetchunt. Sau khi đăng nhập bạn có thể
                sử dụng các tính năng và dịch vụ của nền tảng như:
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
                    Tạo và đăng tải hồ sơ của các ứng viên phù hợp với yêu cầu
                    từ phía tuyển dụng.
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
                    Được quyền cập nhật chỉnh sửa thông tin giới thiệu của doanh
                    nghiệp trên nền tảng bất cứ lúc nào.
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
                    Bạn sẽ được sử dụng được các công cụ, các tính năng phục vụ
                    cho việc cập nhật các các thông tin đăng tuyển của các ứng
                    viên mà mình có.
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
                    Bạn sẽ có thể được hưởng các chính sách ưu đãi do Fetchunt.
                    Các chính sách ưu đãi này sẽ được chúng tôi giải quyết (nếu
                    có) và sẽ được đăng tải trực tiếp trên nền tảng Fetchunt
                    hoặc được gửi trực tiếp đến bạn.
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
                    Bạn có quyền đóng góp ý kiến cho nền tảng Fetchunt trong quá
                    trình hoạt động. Các kiến nghị được gửi trực tiếp bằng tin
                    nhắn hoặc email đến cho Fetchunt.
                  </div>
                </div>
              </div>
            </div>

            <div className='sub-section'>
              <div className='sub-section-title'>
                2. Nghĩa vụ và trách nhiệm của bạn khi tham gia trên Fetchunt
              </div>

              <div className='sub-section-description description-section'>
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
                    Bạn sẽ tự chịu trách nhiệm về bảo mật, lưu giữ và mọi hoạt
                    động sử dụng dịch vụ dưới tên đăng ký, mật khẩu và hộp thư
                    điện tử của mình. Bạn có trách nhiệm thông báo kịp thời cho
                    nền tảng Fetchunt về những hành vi sử dụng trái phép, lạm
                    dụng, vi phạm bảo mật, lưu giữ tên đăng ký và mật khẩu của
                    mình để hai bên cùng hợp tác xử lý.
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
                    Bạn cam kết những thông tin ứng viên cung cấp và những thông
                    tin đăng tải lên nền tảng Fetchunt là chính xác và hoàn
                    chỉnh.
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
                    Là người sử dụng, Bạn cần chịu trách nhiệm với kết quả của
                    việc đăng tải. Bạn không được phép đăng những thông tin
                    không chính xác, thông tin của những ứng viên không có nhu
                    cầu tìm việc, làm mất thời gian của các bên.
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
                    Bạn tự chịu trách nhiệm về nội dung, hình ảnh của thông tin
                    Doanh nghiệp và các thông tin khác cũng như toàn bộ quá
                    trình giao dịch với ứng viên trên nền tảng Fetchunt. Thông
                    tin nào ứng viên không muốn tiết lộ thành viên cũng phải
                    tuân thủ và làm theo.
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
                    Bạn phải tuân thủ quy định của pháp luật về thanh toán, bảo
                    vệ quyền sở hữu trí tuệ, và các quy định của pháp luật có
                    liên quan khác khi tham gia Fetchunt.
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
                    Bạn cam kết không được thay đổi, chỉnh sửa, sao chép, truyền
                    bá, phân phối, cung cấp và tạo những công cụ tương tự của
                    dịch vụ do nền tảng Fetchunt cung cấp cho một bên thứ ba nếu
                    không được sự đồng ý của Fetchunt.
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
                    Bạn không được hành động gây mất uy tín của nền tảng
                    Fetchunt dưới mọi hình thức như gây mất đoàn kết giữa các
                    thành viên bằng cách sử dụng tên đăng ký thứ hai, thông qua
                    một bên thứ ba hoặc tuyên truyền, phổ biến những thông tin
                    không có lợi cho uy tín của nền tảng Fetchunt.
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className='service-agreement-content-section'>
            <div className='h3 heading-section'>V. ĐIỀU KHOẢN ÁP DỤNG</div>

            <div className='description-section'>
              Mọi tranh chấp phát sinh giữa nền tảng Fetchunt và Bạn sẽ được
              giải quyết trên cơ sở thương lượng. Trường hợp không đạt được thỏa
              thuận như mong muốn, một trong hai bên có quyền đưa vụ việc ra Tòa
              án có thẩm quyền để giải quyết.
            </div>

            <div className='description-section'>
              Fetchunt có quyền điều chỉnh, thay đổi Quy chế này cho phù hợp với
              thực tiễn hoạt động. Các thay đổi có hiệu lực ngay khi được đăng
              trên nền tảng mà không cần thông báo trước. Thành viên vui lòng
              kiểm tra các điều kiện này để cập nhật các thay đổi.
            </div>
          </div>

          <div className='service-agreement-content-section'>
            <div className='h3 heading-section'>VI. ĐIỀU KHOẢN CAM KẾT</div>

            <div className='description-section'>
              Cam kết tuân thủ các điều khoản nêu trên.
            </div>

            <div className='description-section'>
              Công ty TNHH FETCH TECHNOLOGY VIỆT NAM
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
