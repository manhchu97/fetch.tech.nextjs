import Image from 'next/image'

import Modal from '@/components/modal/Modal'

import styles from './NotificationPopup.module.scss'

const NotificationPopup = ({
  isOpen = false,
  onClose = () => {},
}): React.ReactElement => {
  return (
    <div className={styles['notification-popup-container']}>
      <Modal
        className='custom-modal modal-sm modal-dialog-centered'
        isOpen={isOpen}
        onClose={onClose}
        header={
          <div className='notification-popup-header'>
            <span className='notification-popup-close-icon' onClick={onClose}>
              <i className='bi bi-x-lg'></i>
            </span>
          </div>
        }
      >
        <div className='icon'>
          <Image
            src='/images/hiring-freelancers/check_icon.png'
            alt='notification icon'
            width={60}
            height={60}
          />
        </div>

        <div className='h5 title'>Thank You!</div>

        <div className='h6 subtitle'>
          Your inquiry was successfully submitted
        </div>

        <div className='subtitle2 message'>
          We will contact you within 24 hours
        </div>
      </Modal>
    </div>
  )
}

export default NotificationPopup
