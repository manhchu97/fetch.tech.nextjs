import React, {
  LegacyRef,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react'

import Image from 'next/image'
import Link from 'next/link'

import clsx from 'clsx'
import ldThrottle from 'lodash.throttle'

import Modal from '@/components/modal/Modal'

import useAutoScroll from '@/hooks/useAutoScroll'

import Accordion from '@/sections/fetchunt/accordion'

import styles from './MainContent.module.scss'

interface TabsRef {
  ref: HTMLDivElement
}

const MainContent = (): React.ReactElement => {
  const { isAutoScrolling, scrollElRef, autoScroll } = useAutoScroll()

  const tabNavRef = useRef<null | HTMLDivElement>(null)
  const menuTabsRef = useRef<null | HTMLDivElement>(null)
  const tabsRef = useRef<TabsRef[]>([])

  const [isOpen, setIsOpen] = useState(false)
  const [tabValue, setTabValue] = useState<number>(0)

  const handleClose = useCallback(() => {
    setIsOpen(false)
  }, [])

  const handleChangeTabValue = useCallback(
    (newTabValue: number) => {
      if (!scrollElRef?.current) return

      setTabValue(newTabValue)

      const currentRef = tabsRef.current?.[newTabValue]?.ref

      if (!currentRef) return

      // scroll to element in modal div
      autoScroll({
        // https://stackoverflow.com/questions/5598743/finding-elements-position-relative-to-the-document
        top:
          currentRef?.getBoundingClientRect().top +
          scrollElRef?.current?.scrollTop,
        behavior: 'smooth',
      })
    },
    [autoScroll, scrollElRef],
  )

  const scrollHandler = useMemo(
    () =>
      ldThrottle(() => {
        if (!scrollElRef?.current || !menuTabsRef?.current) return

        const documentScrollTop = scrollElRef?.current?.scrollTop
        const containerScrollTop =
          menuTabsRef?.current?.getBoundingClientRect().top + documentScrollTop

        if (isAutoScrolling() || documentScrollTop < containerScrollTop) return

        const listTabNavRect = (tabsRef?.current || [])
          .map(({ ref }) => Math.abs(ref?.getBoundingClientRect()?.top))
          .filter((x) => !isNaN(x))

        const minNavRect = Math.min(...listTabNavRect)
        const nextTabVal = listTabNavRect.findIndex((val) => val === minNavRect)

        if (tabValue === nextTabVal || nextTabVal === -1) return
        setTabValue(nextTabVal)
      }, 50),
    [scrollElRef, isAutoScrolling, tabValue],
  )

  const sidebar = [
    {
      render: () => <div className='h6'>Giới thiệu người tham gia</div>,
    },
    {
      render: () => <div className='h6'>Tại sao bạn nên chọn chúng tôi</div>,
    },
    {
      render: () => (
        <div className='h6'>Quy trình đăng ký giới thiệu ứng viên </div>
      ),
    },
    {
      render: () => <div className='h6'>Tiến trình tuyển dụng </div>,
    },
    {
      render: () => <div className='h6'>Mạng lưới kết nối ứng viên </div>,
    },
    {
      render: () => <div className='h6'>Cơ hội nhận thưởng </div>,
    },
  ]

  const sections = [
    {
      id: 'ft-refer-friends',
      render: (ref: LegacyRef<HTMLDivElement>) => (
        <div
          ref={ref}
          className='card-container refer-friends-container d-flex justify-content-xl-between align-items-center'
        >
          <div className='position-relative div-center refer-friends-img'>
            <Image
              src='/images/fetchunt/refer-friends.svg'
              alt='refer-friends'
              layout='fill'
              objectFit='cover'
              quality={100}
            />
          </div>

          <div className='content-container'>
            <h3 className='card-title'>Giới thiệu người tham gia</h3>

            <div className='list-items-container'>
              <div className='d-flex'>
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

                <div className='h6'>
                  Mỗi lượt giới thiệu thành công bạn sẽ nhận được 50 điểm (tương
                  đương 50.000 đồng).
                </div>
              </div>

              <div className='d-flex'>
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

                <div className='h6'>
                  Quy đổi giá trị tiền thưởng tương đương hoặc dùng cho các tiện
                  ích trong hệ thống như mở hồ sơ ứng viên.
                </div>
              </div>
            </div>

            <h3 className='card-title d-flex align-items-center'>
              Chính sách giới thiệu
              <i
                className='bi bi-info-circle info-icon'
                onClick={() => setIsOpen(true)}
              ></i>
            </h3>

            <div className='desc-container'>
              <div className='h6'>
                Giới thiệu càng nhiều, nhận thưởng càng lớn. Tham gia giới thiệu
                ngay nhé!
              </div>
            </div>

            <div className='div-center'>
              <Link href='https://portal.fetch.tech/auth/login?tab=signup'>
                <a target='_blank' rel='noopener noreferrer'>
                  <div role='button' className='card-button'>
                    Giới thiệu ngay
                  </div>
                </a>
              </Link>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 'ft-why-should-chose-we',
      render: (ref: LegacyRef<HTMLDivElement>) => (
        <div
          ref={ref}
          className='card-container why-should-chose-we-container d-flex justify-content-xl-between align-items-center'
        >
          <div className='content-container'>
            <h3 className='card-title'>Tại sao bạn nên chọn chúng tôi</h3>

            <div className='list-items-container'>
              <div className='d-flex'>
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

                <div className='h6'>
                  1000+ công việc đến từ các doanh nghiệp trên thế giới được cập
                  nhật liên tục.
                </div>
              </div>

              <div className='d-flex'>
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

                <div className='h6'>
                  500+ ngành nghề từ: phát triển phần mềm, lập trình viên, phân
                  tích dữ liệu, thiết kế, marketing, quản lý nhân sự, quản lý dự
                  án,…
                </div>
              </div>

              <div className='d-flex'>
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

                <div className='h6'>
                  24/7 thời gian Fetchunt trực tổng đài để hỗ trợ các bạn.
                </div>
              </div>
            </div>

            <div className='desc-container'>
              <div className='h6'>
                Cơ hội tuyệt vời để các bạn có gia tăng thu nhập khi tham gia
                giới thiệu cho Fetchunt.
              </div>
            </div>

            <div className='div-center'>
              <Link href='https://portal.fetch.tech/auth/login?tab=signup'>
                <a target='_blank' rel='noopener noreferrer'>
                  <div role='button' className='card-button'>
                    Tham gia ngay
                  </div>
                </a>
              </Link>
            </div>
          </div>

          <div className='position-relative div-center why-should-chose-we-img'>
            <Image
              src='/images/fetchunt/why-should-chose-we.svg'
              alt='why-should-chose-we'
              layout='fill'
              objectFit='cover'
              quality={100}
            />
          </div>
        </div>
      ),
    },
    {
      id: 'ft-register-member',
      render: (ref: LegacyRef<HTMLDivElement>) => (
        <div
          ref={ref}
          className='card-container register-member-container d-flex justify-content-xl-between align-items-center'
        >
          <div className='position-relative div-center register-member-img'>
            <Image
              src='/images/fetchunt/register-member.svg'
              alt='register-member'
              layout='fill'
              objectFit='cover'
              quality={100}
            />
          </div>

          <div className='content-container'>
            <h3 className='card-title'>
              Quy trình đăng ký giới thiệu ứng viên đơn giản
            </h3>

            <div className='list-items-container'>
              <Accordion
                title={
                  <>
                    <u>Bước 1</u>: Đăng ký thành viên của Fetchunt
                  </>
                }
                content={
                  <>
                    Đầu tiên, để tiến hành đăng ký, bạn truy cập&nbsp;
                    <Link href='https://portal.fetch.tech/auth/login?tab=signup'>
                      <a target='_blank' rel='noopener noreferrer'>
                        <u>tại đây</u>
                      </a>
                    </Link>
                    &nbsp;và điền đầy đủ thông tin của mình vào mẫu. Sau đó, bạn
                    chọn đăng ký.
                  </>
                }
              />

              <Accordion
                title={
                  <>
                    <u>Bước 2</u>: Tìm công việc đang tuyển dụng
                  </>
                }
                content={
                  <>
                    Bạn đăng nhập vào hệ thống. Tiếp theo, bạn chọn “Công việc”.
                    Sau đó, nhấn vào “Đang tuyển dụng”. Cuối cùng, bạn tìm các
                    vị trí có ứng viên phù hợp.
                  </>
                }
              />

              <Accordion
                title={
                  <>
                    <u>Bước 3</u>: Giới thiệu ứng viên
                  </>
                }
                content={
                  <>
                    Nhập đầy đủ thông tin ứng viên, tải hồ sơ ứng viên lên và
                    lưu lại. Cuối cùng, kiểm tra lại hồ sơ trong danh sách vị
                    trí ứng tuyển.
                  </>
                }
              />

              <Accordion
                title={
                  <>
                    <u>Bước 4</u>: Chờ xét duyệt và nhận thưởng
                  </>
                }
                content={
                  <>
                    Đội ngũ Fetch kiểm tra hồ sơ ứng viên hợp lệ và tùy vào từng
                    mốc đánh giá sẽ được nhận thưởng với các mức hoa hồng khác
                    nhau. Những cập nhật mới nhất về vị trí ứng tuyển này sẽ
                    được thông báo đến tài khoản và email của bạn.
                  </>
                }
              />

              <Accordion
                title={
                  <>
                    <u>Bước 5</u>: Rút tiền về tài khoản bạn
                  </>
                }
                content={
                  <>
                    Khi bạn muốn rút tiền, bạn cần vào “Hồ sơ”, chọn “Thông tin
                    thanh toán” và nhập “Thông tin tài khoản ngân hàng”, chọn
                    “Lưu”. Nếu đã nhập Thông tin ngân hàng trước đó, bạn có thể
                    bỏ qua bước này.
                    <br /> Sau đó, bạn chọn “Rút tiền” trong “Giao dịch” ở thanh
                    bên trái, chọn “Đổi điểm thưởng”, nhập số điểm bạn bạn muốn
                    đổi chọn “Xác nhận”.
                  </>
                }
              />
            </div>

            <div className='desc-container'>
              <div className='h6'>
                Nhanh tay đăng ký tham gia để cùng nhận thưởng bạn nhé!
              </div>
            </div>

            <div className='div-center'>
              <Link href='https://portal.fetch.tech/auth/login?tab=signup'>
                <a target='_blank' rel='noopener noreferrer'>
                  <div role='button' className='card-button'>
                    Đăng ký ngay
                  </div>
                </a>
              </Link>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 'ft-process-recruiter',
      render: (ref: LegacyRef<HTMLDivElement>) => (
        <div
          ref={ref}
          className='card-container process-recruiter-container d-flex justify-content-xl-between align-items-center'
        >
          <div className='content-container'>
            <h3 className='card-title'>
              Tiến trình tuyển dụng được cập nhật liên tục
            </h3>

            <div className='list-items-container'>
              <div className='d-flex'>
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

                <div className='h6'>
                  Tất cả hồ sơ ứng viên bạn giới thiệu được cập nhật liên tục
                  trên hệ thống của Fetchunt từ chưa giải quyết đến tuyển dụng
                  thành công.
                </div>
              </div>

              <div className='d-flex'>
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

                <div className='h6'>
                  Quản lý tiến trình tuyển dụng ứng viên trên hệ thống một cách
                  dễ dàng và thuận lợi.
                </div>
              </div>

              <div className='d-flex'>
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

                <div className='h6'>
                  Mọi quy trình thực hiện đều được xử lý bởi đội ngũ nhân sự
                  chuyên nghiệp của Fetchunt.
                </div>
              </div>
            </div>

            <div className='div-center'>
              <Link href='https://portal.fetch.tech/auth/login?tab=signup'>
                <a target='_blank' rel='noopener noreferrer'>
                  <div role='button' className='card-button'>
                    Tham gia ngay
                  </div>
                </a>
              </Link>
            </div>
          </div>

          <div className='position-relative div-center process-recruiter-img'>
            <Image
              src='/images/fetchunt/process-recruiter.svg'
              alt='process-recruiter'
              layout='fill'
              objectFit='cover'
              quality={100}
            />
          </div>
        </div>
      ),
    },
    {
      id: 'ft-network',
      render: (ref: LegacyRef<HTMLDivElement>) => (
        <div
          ref={ref}
          className='card-container network-container d-flex justify-content-xl-between align-items-center'
        >
          <div className='position-relative div-center network-img'>
            <Image
              src='/images/fetchunt/network.svg'
              alt='network'
              layout='fill'
              objectFit='cover'
              quality={100}
            />
          </div>

          <div className='content-container'>
            <h3 className='card-title'>
              Mạng lưới kết nối ứng viên trên toàn quốc
            </h3>

            <div className='desc-container'>
              <div className='h6'>
                Là nơi kết nối, trao đổi hồ sơ ứng viên giữa các nhà tuyển dụng
                với nhau. Tại đây:
              </div>
            </div>

            <div className='list-items-container'>
              <div className='d-flex'>
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

                <div className='h6'>
                  1000+ ứng viên, với nhiều ngành nghề khác nhau giúp bạn thoải
                  mái lựa chọn hồ sơ mà bạn đang tìm kiếm.
                </div>
              </div>

              <div className='d-flex'>
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

                <div className='h6'>
                  500+ hồ sơ độc quyền chỉ có tại Fetchunt.
                </div>
              </div>

              <div className='d-flex'>
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

                <div className='h6'>
                  Tích hợp bộ lọc thông minh, giúp bạn dễ dàng tìm được ứng viên
                  phù hợp, tiết kiệm thời gian, chi phí và loại bỏ sớm những hồ
                  sơ không đạt yêu cầu.
                </div>
              </div>

              <div className='d-flex'>
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

                <div className='h6'>
                  Tái sử dụng hồ sơ ứng viên của bạn để trao đổi với nhà tuyển
                  dụng khác trên hệ thống.
                </div>
              </div>
            </div>

            <div className='div-center'>
              <Link href='https://portal.fetch.tech/auth/login?tab=signup'>
                <a target='_blank' rel='noopener noreferrer'>
                  <div role='button' className='card-button'>
                    Đăng ký ngay
                  </div>
                </a>
              </Link>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 'ft-money',
      render: (ref: LegacyRef<HTMLDivElement>) => (
        <div
          ref={ref}
          className='card-container money-container d-flex justify-content-xl-between align-items-center'
        >
          <div className='content-container'>
            <h3 className='card-title'>Cơ hội nhận thưởng không giới hạn</h3>

            <div className='list-items-container'>
              <div className='d-flex'>
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

                <div className='h6'>
                  Rút tiền về ngân hàng đơn giản và nhanh chóng.
                </div>
              </div>

              <div className='d-flex'>
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

                <div className='h6'>
                  Hoàn toàn không mất bất kỳ chi phí rút tiền nào.
                </div>
              </div>

              <div className='d-flex'>
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

                <div className='h6'>
                  Hệ thống sẽ giúp bạn theo dõi chi tiết về điểm thưởng nhận
                  được từ mỗi hồ sơ ứng viên.
                </div>
              </div>
            </div>

            <div className='div-center'>
              <Link href='https://portal.fetch.tech/auth/login?tab=signup'>
                <a target='_blank' rel='noopener noreferrer'>
                  <div role='button' className='card-button'>
                    Nhận thưởng ngay
                  </div>
                </a>
              </Link>
            </div>
          </div>

          <div className='position-relative div-center money-img'>
            <Image
              src='/images/fetchunt/money.svg'
              alt='money'
              layout='fill'
              objectFit='cover'
              quality={100}
            />
          </div>
        </div>
      ),
    },
  ]

  useEffect(() => {
    scrollElRef.current = document.documentElement
  }, [scrollElRef])

  useEffect(() => {
    window.addEventListener('scroll', scrollHandler)
    return () => window.removeEventListener('scroll', scrollHandler)
  }, [scrollHandler])

  return (
    <div className={clsx(styles['content-container'])} ref={menuTabsRef}>
      <div className='d-flex justify-content-lg-between ft-main-content-container'>
        <div className='sidebar-container' ref={tabNavRef}>
          <div className='sidebar'>
            <div className='sidebar-header text-center'>
              <div className='h3'>Fetchunt</div>
            </div>

            <div className='sidebar-content-container'>
              {sidebar.map((value, index) => (
                <div
                  className={clsx({
                    'sidebar-content': true,
                    active: tabValue === index,
                  })}
                  key={index}
                  onClick={() => handleChangeTabValue(index)}
                >
                  {value.render()}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className='main-content'>
          {sections.map((section, index) => (
            <React.Fragment key={section.id}>
              {section.render((el) => {
                if (!el) return
                tabsRef.current[index] = { ref: el }
              })}
            </React.Fragment>
          ))}
        </div>
      </div>

      {isOpen && <ReferralPolicyModal handleClose={handleClose} />}
    </div>
  )
}

interface ReferralPolicyProps {
  handleClose: () => void
}

export const ReferralPolicyModal = ({ handleClose }: ReferralPolicyProps) => (
  <Modal
    className='modal-custom'
    isOpen
    header={
      <div className='modal-header-container'>
        <div className='text-center heading-title'>Chính sách giới thiệu</div>

        <span className='modal-header-close' onClick={handleClose}>
          <i className='bi bi-x-lg'></i>
        </span>
      </div>
    }
    onClose={handleClose}
  >
    <div className='referral-policy-container'>
      <div className='benifit-container'>
        <div className='h4 heading-content'>
          Phần thưởng cho Người giới thiệu và Người được giới thiệu:
        </div>

        <div className='d-flex align-items-center content-header'>
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

          <div className='content-desc'>Người giới thiệu:</div>
        </div>

        <div className='content-desc list-item-content'>
          Nhận 50 điểm thưởng tương đương 50.000đ khi giới thiệu bạn bè lần đầu
          tải Fetchunt và liên kết ngân hàng thành công từ đường liên kết (mã)
          giới thiệu.
        </div>

        <div className='d-flex align-items-center content-header'>
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

          <div className='content-desc'>Người được giới thiệu:</div>
        </div>

        <div className='content-desc list-item-content'>
          Nhận 100 điểm thưởng tương đương 100.000đ khi lần đầu đăng nhập
          Fetchunt và liên kết ngân hàng thành công từ đường liên kết (mã) giới
          thiệu.
        </div>

        <div className='note-container'>
          <i className='bi bi-exclamation-triangle-fill note-icon'></i>
          <strong>
            <u>Lưu ý:</u>
          </strong>
        </div>

        <div className='d-flex align-items-center content-header'>
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

          <div className='content-desc'>
            Mã chỉ dùng được đối với các tài khoản tạo trong vòng 2 ngày.
          </div>
        </div>

        <div className='d-flex align-items-center content-header'>
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

          <div className='content-desc'>
            Phần thưởng giới thiệu không cố định, sẽ thay đổi tùy từng giai
            đoạn.
          </div>
        </div>
      </div>

      <div className='step-conditional-container'>
        <div className='h4 heading-content'>
          Các bước và điều kiện nhận quà giới thiệu:
        </div>

        <div className='content-header content-desc'>
          <u>Bước 1:</u> Đăng ký tài khoản mới bằng đường liên kết (mã) giới
          thiệu.
        </div>

        <div className='content-header content-desc'>
          <u>Bước 2:</u> Liên kết ngân hàng với tài khoản.
        </div>

        <div className='content-header content-desc'>
          <u>Bước 3:</u> Nhận điểm thưởng cho cả Người giới thiệu và Người được
          giới thiệu.
        </div>

        <div className='content-desc list-item-content'>
          Điểm thưởng sẽ được cộng vào Tổng điểm thưởng của tài khoản mà không
          cần thực hiện bất kỳ thao tác nào ngay khi Người giới thiệu nhận được
          tiền thưởng đầu tiên.
        </div>

        <div className='content-desc list-item-content'>
          Trường hợp quá 24h làm việc vẫn chưa nhận được điểm thưởng. Bạn vui
          lòng liên hệ với Fetchunt để được hỗ trợ.
        </div>
      </div>
    </div>
  </Modal>
)

export default MainContent
