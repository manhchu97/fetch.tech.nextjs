import React from 'react'

import Image from 'next/image'

import styles from './FAQSearch.module.scss'

const FAQSearch = (): React.ReactElement => (
  <section className={styles['faq-search-container']}>
    <Image
      className='img-container'
      src='/images/faq/bgHeaderFaq.png'
      alt='faq example'
      layout='fill'
      objectFit='cover'
      objectPosition='center'
      priority
    />

    <div className='ft-container'>
      <div className='row justify-content-center'>
        <div className='col-xs-12 col-sm-12 col-lg-10 '>
          <div className='h2'>Fetch Help Center</div>

          <div className='par'>
            Be part of our growing network of satisfied partners
          </div>

          <div className='input-group col-6 mx-auto search-input-container'>
            <input
              className='form-control rounded search-input'
              placeholder='Search for articles and questions'
              autoComplete='off'
            />

            <div className='search-icon'>
              <Image
                alt='Icon search option'
                src='/images/contact/IconSearchAutocomplete.svg'
                width={24}
                height={24}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
)

export default FAQSearch
