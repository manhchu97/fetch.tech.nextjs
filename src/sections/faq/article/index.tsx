import React from 'react'

import Image from 'next/image'

import styles from './FAQArticle.module.scss'

const FAQArticle = () => (
  <div className={styles['help-article-container']}>
    <div className='article-wrap'>
      <div className='article-header'>
        <div className='h3'>What is Fetch?</div>

        <p className='subtitle1'>
          Being one of the first in the industry has allowed us to gain a strong
          grasp of the Vietnamese market.
        </p>
      </div>

      <div className='article-body'>
        <p className='subtitle1'>
          {`Whether you're a business, a contractor, or a client, Deel can help you:`}
        </p>

        <br />

        <ul className='subtitle1'>
          <li>
            Comply with international hiring laws (tax forms, localized
            contracts)
          </li>

          <li>Handle multiple payment methods in one platform</li>

          <li>Manage payment cycles and timesheets</li>

          <li>Automatically generate invoices</li>
        </ul>

        <br />

        <p className='subtitle1'>
          When you hire an employee in another country, Deel acts as an employer
          of record (EOR), saving you the cost of creating a foreign entity.
        </p>

        <br />

        <p className='subtitle1'>
          Deel helps companies with international payroll, benefits, taxes, and
          compliance in 150 countries - all through one powerful dashboard.
        </p>

        <br />

        <p className='subtitle1'>
          You can read all about our story here or request a demo from our
          amazing team.
        </p>
      </div>
    </div>

    <div className='evaluate'>
      <div className='evaluate-inner'>
        <p className='subtitle1 text-center'>Did this answer your question?</p>

        <div className='icon-wrap'>
          <div className='mx-2' role='button'>
            <Image
              src='/images/faq/smile-solid.svg'
              alt=''
              width={30}
              height={30}
            />
          </div>

          <div className='mx-2' role='button'>
            <Image
              src='/images/faq/meh-solid.svg'
              alt=''
              width={30}
              height={30}
            />
          </div>

          <div className='mx-2' role='button'>
            <Image
              src='/images/faq/frown-solid.svg'
              alt=''
              width={30}
              height={30}
            />
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default FAQArticle
