import React from 'react'

import Image from 'next/image'
import Link from 'next/link'

import clsx from 'clsx'

import styles from './MainContent.module.scss'

const dataTypes = [
  'Tên',
  'Địa chỉ email',
  'Số điện thoại',
  'Địa chỉ thường trú',
  'Ngày sinh',
  'Kinh nghiệm làm việc (nếu có)',
]

const informationForBusinessPurposes = [
  'Xác thực danh tính của bạn và ngăn chặn gian lận bằng dữ liệu sinh trắc học của bạn;',
  'Phân tích hành vi của bạn để đo lường, tùy chỉnh và cải thiện Trang web của chúng tôi, bao gồm nhưng không giới hạn để cung cấp cho bạn những trải nghiệm phong phú, tương tác; phát triển các sản phẩm và dịch vụ mới hoặc thêm các tính năng hoặc khả năng mới và điều chỉnh dựa trên trải nghiệm sản phẩm của bạn',
  'Cung cấp hỗ trợ, khắc phục sự cố, quản lý đăng ký và trả lời các yêu cầu, câu hỏi và nhận xét;',
  'Thông báo về và quản lý việc tham gia vào các sự kiện, chương trình đặc biệt, khảo sát, giới thiệu, rút thăm trúng thưởng, cũng như các ưu đãi và khuyến mãi khác;',
  'Thực hiện nghiên cứu thị trường và người tiêu dùng và phân tích xu hướng;',
  'Cho phép đăng trên các blog, diễn đàn và các phương tiện truyền thông công cộng khác của chúng tôi;',
  'Thực hiện các hoạt động kế toán, kiểm toán, thanh toán, đối chiếu và thu tiền;',
  'Ngăn ngừa, phát hiện, xác định, điều tra và phản hồi các yêu cầu, trách nhiệm pháp lý, hành vi bị cấm và hoạt động tội phạm tiềm ẩn hoặc thực tế;',
  'Tuân thủ và thực thi các quyền, yêu cầu, thỏa thuận và chính sách hợp pháp.',
]

const abideByTheLaw = [
  'Tuân thủ luật hiện hành hoặc đáp ứng quy trình pháp lý hợp lệ, bao gồm từ cơ quan thực thi pháp luật hoặc các cơ quan chính phủ khác.',
  'Bảo vệ quyền hoặc tài sản của Fetch, nếu chúng tôi nhận được thông tin chỉ ra rằng ai đó đang sử dụng Trang web của chúng tôi để truy cập tài sản trí tuệ hoặc vật chất bị đánh cắp của Fetch trong một số trường hợp, chúng tôi sẽ không tự mình kiểm tra nội dung riêng tư, nhưng chúng tôi có thể tham khảo vấn đề thực thi pháp luật.',
]

const MainContent = (): React.ReactElement => {
  return (
    <div className={clsx(styles['content-container'])}>
      <div className='ft-container row div-center ft-main-content-container'>
        <div className='h2 heading-title'>CHÍNH SÁCH BẢO MẬT THÔNG TIN</div>

        <div className='privacy-policy-content'>
          <div className='privacy-policy-content-section'>
            <div className='description-section'>
              Chúng tôi tại Công ty TNHH Fetch Technology Việt Nam bao gồm các
              chi nhánh của chúng tôi (“Fetch”, “chúng tôi”, “của chúng tôi”),
              quan tâm sâu sắc đến quyền riêng tư, bảo mật và an toàn trực
              tuyến, tất cả đều là một phần quan trọng trong hoạt động thiết yếu
              của chúng tôi sứ mệnh: bảo vệ người dùng (“bạn” và “của bạn”) khỏi
              nguy cơ bị đánh cắp, gián đoạn và truy cập trái phép vào thông tin
              và hoạt động trực tuyến. Chính sách Bảo mật này (“Chính sách”)
              được thiết kế để thông báo cho bạn về cách chúng tôi thu thập, sử
              dụng và chia sẻ dữ liệu cá nhân của bạn thông qua trang website
              của chúng tôi (“Site” của chúng tôi) hoặc khi bạn tương tác với
              chúng tôi và cam kết sử dụng dữ liệu cá nhân mà chúng tôi thu thập
              một cách tôn trọng với người khác.
            </div>

            <div className='description-section'>
              <strong>
                XIN VUI LÒNG ĐỌC CHÍNH SÁCH NÀY MỘT CÁCH CẨN THẬN. BẰNG CÁCH
                KÍCH HOẠT, CHẤP NHẬN, ĐĂNG KÝ, TRUY CẬP HOẶC SỬ DỤNG TRANG WEB,
                BẠN XÁC NHẬN RẰNG BẠN ĐÃ ĐỌC, HIỂU VÀ ĐỒNG Ý BỊ TRẢ LỜI BỞI
                CHÍNH SÁCH.
              </strong>
            </div>

            <div className='description-section'>
              Bất kỳ tranh chấp nào về quyền riêng tư đều phải tuân theo Chính
              sách này. Bạn đồng ý rằng đôi khi chúng tôi có thể sửa đổi Chính
              sách. Chúng tôi sẽ đăng Chính sách sửa đổi vào bất kỳ thời điểm
              nào trên trang web của Fetch và / hoặc thông báo cho bạn qua
              email, thông báo trong sản phẩm hoặc chúng tôi có thể thông báo
              cho bạn về các sửa đổi đó bằng cách sử dụng bất kỳ phương pháp nào
              khác được luật hiện hành cho phép. Điều quan trọng là bạn phải
              kiểm tra lại và đảm bảo rằng bạn đã xem lại phiên bản mới nhất của
              Chính sách này.
            </div>
          </div>

          <div className='privacy-policy-content-section'>
            <div className='h3 heading-section'>
              CHÚNG TÔI THU THẬP NHỮNG LOẠI THÔNG TIN NÀO?
            </div>

            <div className='description-section'>
              Nói chung, chúng tôi thu thập các loại dữ liệu sau:
              <div className='list-sub-description'>
                {dataTypes.map((item, index) => (
                  <div className='sub-description-item' key={index}>
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
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className='description-section'>
              Một số thông tin bạn cung cấp trực tiếp cho chúng tôi, một số
              thông tin chúng tôi thu thập tự động thông qua các dịch vụ của
              mình và một số thông tin được thu thập từ các bên thứ ba. Trong
              Chính sách này, dữ liệu cá nhân đề cập đến dữ liệu có thể được sử
              dụng, một mình hoặc kết hợp với dữ liệu khác, để xác định bạn là
              một cá nhân.
            </div>

            <div className='description-section'>
              Chúng tôi thu thập thông tin bạn cung cấp cho chúng tôi. Ví dụ:
              chúng tôi thu thập thông tin khi bạn tạo tài khoản, điền vào biểu
              mẫu, tham gia giới thiệu ứng viên hoặc chương trình khuyến mãi,
              hoặc giao tiếp với chúng tôi theo cách khác.
            </div>

            <div className='description-section'>
              Chúng tôi tự động thu thập thông tin về các tương tác của bạn với
              Trang web cũng như các thiết bị mà bạn truy cập Trang web. Trong
              một số trường hợp, chúng tôi tự động thu thập thông tin về các
              thiết bị khác được kết nối với cùng một mạng với thiết bị mà bạn
              truy cập Trang web.
            </div>

            <div className='description-section'>
              Thông tin chúng tôi thu thập từ các bên thứ ba. Chúng tôi có thể
              nhận thông tin về bạn từ các nguồn khác và kết hợp thông tin đó
              với thông tin chúng tôi thu thập trực tiếp.
            </div>
          </div>

          <div className='privacy-policy-content-section'>
            <div className='h3 heading-section'>
              CHÚNG TÔI SỬ DỤNG THÔNG TIN CHÚNG TÔI THU THẬP NHƯ THẾ NÀO?
            </div>

            <div className='description-section'>
              Fetch sử dụng dữ liệu chúng tôi thu thập để cung cấp cho bạn những
              trải nghiệm phong phú, mang tính tương tác và cũng để vận hành
              doanh nghiệp của chúng tôi, sự cạnh tranh của chúng tôi và các
              chương trình khác, bao gồm phân tích hiệu suất của chúng tôi, đáp
              ứng các nghĩa vụ pháp lý của chúng tôi, phát triển lực lượng lao
              động của chúng tôi và thực hiện nghiên cứu.
            </div>

            <div className='description-section'>
              Cụ thể, chúng tôi sử dụng dữ liệu để:
              <br />
              <strong>Để xác minh đăng ký của bạn. </strong>Chúng tôi sử dụng
              thông tin để xác minh xem bạn có đủ điều kiện để sử dụng các dịch
              vụ và công năng trên nền tảng Fetch hay không. Nếu không, bạn sẽ
              không thể sử dụng hoặc bị giới hạn quyền sử dụng.
              <br />
              <strong>Để điều hành công việc kinh doanh của chúng tôi. </strong>
              Chúng tôi cũng sử dụng thông tin thu thập được cho các mục đích
              kinh doanh khác, bao gồm:
              <div className='list-sub-description'>
                {informationForBusinessPurposes.map((item, index) => (
                  <div className='sub-description-item' key={index}>
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
                    {item}
                  </div>
                ))}
              </div>
              <div className='mt-3'>
                <strong>Sử dụng khác. </strong>Chúng tôi có thể sử dụng dữ liệu
                cá nhân mà chúng tôi có lợi ích hợp pháp, chẳng hạn như nghiên
                cứu cá nhân hoặc thị trường, bảo vệ chống gian lận hoặc bất kỳ
                mục đích nào khác được tiết lộ cho bạn tại thời điểm bạn cung
                cấp dữ liệu cá nhân hoặc với sự đồng ý của bạn.
              </div>
            </div>
          </div>

          <div className='privacy-policy-content-section'>
            <div className='h3 heading-section'>
              CHÚNG TÔI CHIA SẺ DỮ LIỆU CÁ NHÂN VỚI AI?
            </div>

            <div className='description-section'>
              <strong>Bên thứ ba. </strong>Chúng tôi chia sẻ dữ liệu cá nhân của
              bạn với sự đồng ý của bạn hoặc khi cần thiết để hoàn thành bất kỳ
              giao dịch nào hoặc cung cấp bất kỳ sản phẩm nào bạn yêu cầu hoặc
              ủy quyền. Ví dụ: chúng tôi chia sẻ nội dung của bạn với các bên
              thứ ba khi bạn yêu cầu chúng tôi làm như vậy.
            </div>

            <div className='description-section'>
              <strong>Chi nhánh hoặc Nhà cung cấp. </strong>Ngoài ra, chúng tôi
              chia sẻ dữ liệu cá nhân giữa các chi nhánh và công ty con do Fetch
              kiểm soát. Chúng tôi cũng chia sẻ dữ liệu cá nhân với các nhà cung
              cấp hoặc đại lý làm việc thay mặt chúng tôi cho các mục đích được
              mô tả trong Chính sách này. Trong những trường hợp như vậy, các
              công ty này phải tuân thủ các yêu cầu về quyền riêng tư và bảo mật
              dữ liệu của chúng tôi và không được phép sử dụng dữ liệu cá nhân
              mà họ nhận được từ chúng tôi cho bất kỳ mục đích nào khác. Chúng
              tôi cũng có thể tiết lộ dữ liệu cá nhân như một phần của giao dịch
              công ty như sáp nhập hoặc bán tài sản.
            </div>

            <div className='description-section'>
              <strong>Cơ quan chính phủ. </strong>Cuối cùng, chúng tôi sẽ lưu
              giữ, truy cập, chuyển giao, tiết lộ và bảo quản dữ liệu cá nhân,
              bao gồm cả nội dung của bạn, khi chúng tôi thực sự tin rằng làm
              như vậy là cần thiết để thực hiện bất kỳ điều nào sau đây:
              <div className='list-sub-description'>
                {abideByTheLaw.map((item, index) => (
                  <div className='sub-description-item' key={index}>
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
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className='privacy-policy-content-section'>
            <div className='h3 heading-section'>
              LÀM THẾ NÀO ĐỂ CHÚNG TÔI BẢO VỆ DỮ LIỆU CỦA BẠN?
            </div>

            <div className='description-section'>
              Chúng tôi sử dụng các biện pháp bảo vệ hành chính, tổ chức, kỹ
              thuật và vật lý để bảo vệ dữ liệu cá nhân mà chúng tôi thu thập và
              xử lý. Các biện pháp kiểm soát bảo mật của chúng tôi được thiết kế
              để duy trì tính bảo mật, tính toàn vẹn của dữ liệu và mức độ sẵn
              sàng thích hợp.
            </div>

            <div className='description-section'>
              Trang web này sử dụng mã hóa SSL hoặc TLS vì lý do bảo mật và để
              bảo vệ việc truyền tải nội dung bí mật, chẳng hạn như các câu hỏi
              mà bạn gửi cho chúng tôi với tư cách là nhà điều hành trang web.
              Bạn có thể nhận ra một kết nối được mã hóa trong dòng địa chỉ của
              trình duyệt khi nó thay đổi từ &quot;http: //&quot; thành
              &quot;https: //&quot; và biểu tượng ổ khóa được hiển thị trên
              thanh địa chỉ của trình duyệt. Nếu mã hóa SSL hoặc TLS được kích
              hoạt, các bên thứ ba không thể đọc được dữ liệu bạn chuyển cho
              chúng tôi.
            </div>

            <div className='description-section'>
              Việc bảo mật dữ liệu của bạn rất quan trọng đối với chúng tôi,
              nhưng hãy nhớ rằng không có phương thức truyền tải nào qua
              Internet hoặc phương pháp lưu trữ điện tử là an toàn 100%. Mặc dù
              chúng tôi cố gắng sử dụng các phương tiện được chấp nhận về mặt
              thương mại để bảo vệ dữ liệu cá nhân của bạn, nhưng chúng tôi
              không thể đảm bảo tính bảo mật tuyệt đối của dữ liệu đó.
            </div>
          </div>

          <div className='privacy-policy-content-section'>
            <div className='h3 heading-section'>
              CHÚNG TÔI SẼ GIỮ DỮ LIỆU CỦA BẢN TRONG BAO LÂU?
            </div>

            <div className='description-section'>
              Fetch sẽ giữ dữ liệu cá nhân của bạn trong khoảng thời gian tối
              thiểu cần thiết cho các mục đích được nêu trong Chính sách này, cụ
              thể là (i) miễn là bạn là người đăng ký hoặc người dùng đã đăng ký
              Trang web của chúng tôi hoặc (ii) miễn là dữ liệu cá nhân của bạn
              cần thiết liên quan đến các mục đích hợp pháp được nêu trong Chính
              sách này, mà chúng tôi có cơ sở pháp lý hợp lệ hoặc (iii) miễn là
              cần thiết một cách hợp lý cho các mục đích kinh doanh liên quan
              đến việc cung cấp Trang web, chẳng hạn như báo cáo nội bộ và mục
              đích hòa giải hoặc để cung cấp cho bạn phản hồi hoặc thông tin bạn
              có thể yêu cầu. Khi luật pháp yêu cầu, chúng tôi sẽ xóa dữ liệu
              sinh trắc học của bạn trong vòng ba (03) năm kể từ lần tương tác
              cuối cùng của bạn với Trang web
            </div>

            <div className='description-section'>
              Ngoài ra, nếu có bất kỳ khiếu nại pháp lý liên quan nào được đưa
              ra, chúng tôi có thể tiếp tục xử lý dữ liệu cá nhân của bạn trong
              những khoảng thời gian bổ sung cần thiết liên quan đến khiếu nại
              đó.
            </div>

            <div className='description-section'>
              Khi các khoảng thời gian nêu trên, mỗi giai đoạn trong phạm vi áp
              dụng, đã kết thúc, chúng tôi sẽ xóa vĩnh viễn, hủy hoặc hủy nhận
              dạng dữ liệu cá nhân có liên quan để dữ liệu đó không còn bị ràng
              buộc hợp lý với bạn nữa.
            </div>
          </div>

          <div className='privacy-policy-content-section'>
            <div className='h3 heading-section'>
              LIÊN KẾT VỚI CÁC TRANG WEB KHÁC
            </div>

            <div className='description-section'>
              Trang web của chúng tôi có thể chứa các liên kết đến các trang web
              khác để thuận tiện cho bạn và cung cấp thêm thông tin về các ứng
              viên và tuyển dụng viên. Các trang web này có thể được vận hành
              bởi các công ty không liên kết với Fetch. Các trang web được liên
              kết có thể có các chính sách hoặc thông báo về quyền riêng tư của
              riêng họ, mà chúng tôi thực sự khuyên bạn nên xem lại nếu bạn truy
              cập các trang web đó. Chúng tôi không chịu trách nhiệm về nội
              dung, thực tiễn bảo mật hoặc việc sử dụng bất kỳ trang web nào
              không được liên kết với Fetch.
            </div>
          </div>

          <div className='privacy-policy-content-section'>
            <div className='h3 heading-section'>LIÊN HỆ CHÚNG TÔI</div>

            <div className='description-section'>
              Vui lòng liên hệ với chúng tôi về Chính sách Bảo mật này hoặc các
              vấn đề về Quyền riêng tư có liên quan khác. Bạn có thể tìm thấy
              thông tin liên hệ của chúng tôi được liệt kê trên{' '}
              <Link href='https://www.fetch.tech/'>
                <a
                  target='_blank'
                  rel='noopener noreferrer'
                  className='send-mail-link'
                >
                  https://www.fetch.tech/
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
