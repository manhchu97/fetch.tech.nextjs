import React from 'react'

import Image from 'next/image'
import Link from 'next/link'

import clsx from 'clsx'

import Accordion from '@/sections/hunt/accordion'

import styles from './MainContent.module.scss'

const frequentlyQuestions = [
  {
    heading: 'I. Đăng nhập và tài khoản',
    questions: [
      {
        title:
          'Câu 1: Tôi quên mật khẩu của mình, làm thế nào để lấy lại mật khẩu?',
        content:
          'Nếu bạn quên mật khẩu của mình, bạn có thể sử dụng tính năng "Quên mật khẩu" để lấy lại mật khẩu. Nhấp vào liên kết "Quên mật khẩu" trên trang đăng nhập và làm theo hướng dẫn trên màn hình để lấy lại mật khẩu.',
      },
      {
        title: 'Câu 2: Tôi có thể đăng nhập bằng tài khoản mạng xã hội không?',
        content:
          'Có, chúng tôi hỗ trợ đăng nhập bằng tài khoản mạng xã hội như LinkedIn hoặc Google. Bạn chỉ cần nhấp vào biểu tượng tương ứng để đăng nhập.',
      },
      {
        title: 'Câu 3: Tôi đã bị khóa tài khoản, tôi phải làm sao để mở khóa?',
        content: (
          <>
            Nếu tài khoản của bạn bị khóa, bạn nên liên hệ với bộ phận hỗ trợ
            của chúng tôi hoặc gửi email qua hòm thư:{' '}
            <Link href='mailto:recruitment@fetch.tech' passHref>
              <a
                target='_blank'
                rel='noopener noreferrer'
                className='send-mail-link'
              >
                recruitment@fetch.tech
              </a>
            </Link>{' '}
            để được giải quyết vấn đề. Chúng tôi sẽ kiểm tra và giải quyết vấn
            đề trong thời gian sớm nhất có thể.
          </>
        ),
      },
      {
        title:
          'Câu 4: Tôi muốn đổi mật khẩu của mình, làm thế nào để làm điều này?',
        content:
          'Để đổi mật khẩu của mình, bạn cần đăng nhập vào tài khoản và truy cập vào phần Cài đặt hoặc Thông tin cá nhân. Tại đó, bạn có thể thay đổi mật khẩu của mình theo yêu cầu.',
      },
    ],
  },
  {
    heading: 'II. Chương trình giới thiệu ứng viên',
    questions: [
      {
        title: 'Câu 1: Chương trình giới thiệu của Fetch là gì?',
        content:
          'Fetch là một nền tảng giới thiệu ứng viên trực tuyến. Chúng tôi kết nối các nhà tuyển dụng, chuyên gia công nghệ… tham gia mạng lưới giới thiệu ứng viên với các job công nghệ toàn cầu, tạo ra cơ hội gia tăng thu nhập và đem lại các giá trị mới cho cộng đồng.',
      },
      {
        title: 'Câu 2: Làm thế nào để đăng ký tài khoản Fetch?',
        content:
          'Để đăng ký tài khoản Fetch, bạn chỉ cần truy cập trang web (link) của chúng tôi và làm theo hướng dẫn đơn giản trên màn hình. Bạn cần cung cấp thông tin cơ bản về cá nhân và thông tin liên lạc để hoàn tất quá trình đăng ký.',
      },
      {
        title: 'Câu 3: Tôi có thể sử dụng Fetch để tìm kiếm việc làm không?',
        content: (
          <>
            <div className='mb-2'>
              Trên thực tế, Fetch là một nền tảng giới thiệu ứng viên cho nhà
              tuyển dụng bằng cách cung cấp các thông tin liên quan đến ứng viên
              như kinh nghiệm việc làm, kỹ năng, giáo dục…
            </div>

            <div>
              Fetch không hoạt động như các trang tìm kiếm việc làm thông
              thường. Tuy nhiên Fetch mở cơ hội giới thiệu ứng viên công bằng
              cho tất cả các đối tượng như HR freelancer, chuyên gia công nghệ…
              Do đó nếu bạn cảm thấy bản thân phù hợp với công việc có thể tự
              đăng tải CV và các thông tin liên quan qua mục Nộp hồ sơ ứng viên
              như thông thường. Nếu thành công thì bạn sẽ được thưởng như quy
              định.
            </div>
          </>
        ),
      },
      {
        title:
          'Câu 4: Fetch có tính phí không? Nếu có, thì giá cả như thế nào?',
        content: (
          <>
            <div className='mb-2'>
              Hiện tại, với tính năng giới thiệu ứng viên, Fetch hoàn toàn không
              tính phí với bên giới thiệu ứng viên. Nếu có bất kỳ trường hợp yêu
              cầu bên giới thiệu ứng viên tính phí, hãy xem xét kỹ lại nền tảng
              bởi vì rất có thể Fetch bị bên thứ 3 mạo danh tên tuổi và sử dụng
              với mục đích xấu.
            </div>

            <div>
              Trong tương lai, Fetch sẽ mở tính năng kết nối với các công ty, tổ
              chức,... Khi tính năng được mở, chúng tôi sẽ nhanh chóng có thông
              báo chính xác đến tất cả các đối tượng.
            </div>
          </>
        ),
      },
      {
        title:
          'Câu 5: Tôi có thể mời đối tượng nào tham gia chương trình giới thiệu ứng viên của Fetch?',
        content:
          'Fetch tập trung tìm kiếm các ứng viên cho các Job trong lĩnh vực công nghệ trên quy mô toàn cầu. Vậy nên, nếu bạn là người giới thiệu ứng viên, có ứng viên tiềm năng, phù hợp với các yêu cầu tuyển dụng của vị trí đăng tải, và được phép sử dụng thông tin của ứng viên, bạn hoàn toàn có thể giới thiệu ứng viên đó cho Fetch.',
      },
      {
        title: 'Câu 6: Tôi có thể đăng tuyển dụng công việc trên Fetch không?',
        content: (
          <>
            <div className='mb-2'>
              Hiện tại, bạn <strong>KHÔNG</strong> thể đăng tải các thông tin
              tuyển dụng lên nền tảng Fetch vì chúng tôi đang chỉ mở duy nhất
              tính năng giới thiệu ứng viên dành cho các đối tượng có ứng viên
              tiềm năng và muốn gia tăng thu nhập.
            </div>

            <div>
              Trong thời gian tới, chúng tôi sẽ mở tính năng đăng tin tuyển dụng
              và sẽ thông báo đến các bạn sau.
            </div>
          </>
        ),
      },
      {
        title: 'Câu 7: Quy trình giới thiệu ứng viên của Fetch như thế nào?',
        content:
          'Quy trình giới thiệu ứng viên và nhận thưởng của Fetch khá đơn giản và mở cơ hội công bằng cho tất cả mọi người. Bạn có thể xem hướng dẫn chi tiết tại link:... để tạo tài khoản và bắt đầu giới thiệu ứng viên cùng Fetch ngay hôm nay.',
      },
      {
        title: 'Câu 8: Chương trình “Affiliate Member” của Fetch như thế nào?',
        content: (
          <>
            <div className='mb-2'>
              Giống với tên gọi “Affiliate Member”, chương trình này của Fetch
              cho phép người dùng giới thiệu nền tảng Fetch với những người khác
              và nhận được hoa hồng khi người đó đăng ký và sử dụng dịch vụ của
              Fetch, cụ thể ở đây là “Giới thiệu ứng viên”. Khi một người dùng
              được giới thiệu đăng ký và sử dụng Fetch, người giới thiệu sẽ nhận
              được một khoản hoa hồng tùy thuộc vào số lượng người dùng mới và
              mức độ sử dụng dịch vụ của họ.
            </div>

            <div>
              Mỗi người dùng sau khi đăng ký thành công tài khoản trên Fetch và
              sẽ có một mã Affiliate riêng. Bạn truy cập … để lấy mã và gửi cho
              bạn bè của bạn. Khi người được mời tạo tài khoản và giới thiệu
              thành 1 công 1 ứng viên đầu tiên, lượt mời của bạn được chấp nhận
              và sẽ được tích điểm vào tài khoản. Bạn cần chờ ít nhất 7 ngày để
              có thể rút tiền về tài khoản ngân hàng của mình.
            </div>
          </>
        ),
      },
    ],
  },
  {
    heading: 'III. Phần thưởng khi giới thiệu ứng viên',
    questions: [
      {
        title:
          'Câu 1: Làm thế nào để tôi rút được tiền thưởng khi giới thiệu ứng viên thành công?',
        content: (
          <>
            <div className='mb-2'>
              Liên kết tài khoản quyết toán với Fetch là bước bắt buộc để
              có thể thực hiện thao tác rút tiền về tài khoản ngân hàng. Các
              bước liên kết như sau:
            </div>

            <div className='list-steps mb-2'>
              <span className='step'>Bước 1:</span> Click vào “Tài khoản của
              tôi”. Ở “Transaction” chọn “Withdraw”
              <br />
              <span className='step'>Bước 2:</span> Click vào “Liên kết tài
              khoản quyết toán”. Chọn “Đặt mật khẩu”. Nhấn vào “Nhập mã xác
              minh” và sau đó mã xác minh sẽ được gửi về điện thoại
              <br />
              <span className='step'>Bước 3:</span> Chọn “Thêm phương thức rút
              tiền”. Sau đó nhập đầy đủ thông tin tài khoản ngân hàng và nhấn
              “Hoàn tất”.
            </div>

            <div className='mb-2'>
              Hoàn tất xong các bước trên là bạn có thể liên kết tài khoản quyết
              toán trên Fetch thành công và có thể tiến hành cách rút tiền
              từ Fetch về tài khoản.
            </div>

            <div className='mb-2'>
              <strong>
                <u>Lưu ý:</u>
              </strong>
            </div>

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
                Sau 7 ngày kể từ lần đăng tải CV đầu tiên thì bạn mới bắt đầu
                được rút tiền
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
                Fetch không giới hạn số lần rút
              </div>
            </div>
          </>
        ),
      },
      {
        title:
          'Câu 2: Các cách tôi có thể nhận thưởng ở trên nền tảng Fetch?',
        content: (
          <>
            <div className='mb-2'>
              Để nhận thưởng trên nền tảng Fetch, bạn có thể thực hiện các
              bước dưới đây:
            </div>

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
                Để nhận điểm thưởng/CV, bạn cần upload CV của ứng viên được giới
                thiệu thành công. Sau khi upload thành công, hệ thống sẽ tự động
                cộng điểm thưởng/CV cho tài khoản của bạn.
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
                Để tìm kiếm và khai thác data từ hệ thống Fetch, bạn có thể sử
                dụng các công cụ tìm kiếm và lọc dữ liệu trên nền tảng. Sau khi
                tìm kiếm được thông tin ứng viên cần thiết, bạn có thể xem tình
                trạng ứng viên trong lần approach gần nhất trong vòng 2-3 tháng.
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
                Để nhận tiền thưởng khi giới thiệu ứng viên thành công cho các
                Jobs trên portal, bạn cần đăng ký và tham gia chương trình giới
                thiệu ứng viên của Fetch. Mỗi một Job sẽ có một mức tiền
                thưởng và quy trình nhận thưởng khác nhau do yêu cầu từ phía nhà
                tuyển dụng. Bạn có thể xem chi tiết về các mức tiền thưởng và
                quy trình nhận thưởng trên portal của Fetch.
              </div>
            </div>
          </>
        ),
      },
    ],
  },
]

const MainContent = (): React.ReactElement => {
  return (
    <div className={clsx(styles['content-container'])}>
      <div className='ft-container row div-center ft-main-content-container'>
        <div className='h2 heading-title'>CÂU HỎI THƯỜNG GẶP</div>

        <div className='privacy-policy-content'>
          {frequentlyQuestions.map((item, index) => (
            <div className='privacy-policy-content-section' key={index}>
              <div className='h3 heading-section'>{item.heading}</div>

              <div className='description-section'>
                <div className='list-items-container'>
                  {item.questions.map((subItem, subIndex) => (
                    <Accordion
                      key={subIndex}
                      title={<>{subItem.title}</>}
                      content={<>{subItem.content}</>}
                    />
                  ))}
                </div>
              </div>
            </div>
          ))}

          <div className='div-center'>
            <Link href='https://m.me/fetchvietnam'>
              <a target='_blank' rel='noopener noreferrer'>
                <button type='button'>Liên hệ hỗ trợ người dùng</button>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MainContent
