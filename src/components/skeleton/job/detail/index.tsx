import React from 'react'

import styles from './DetailJobSkeleton.module.scss'

const DetailJobSkeleton = (): React.ReactElement => {
  return (
    <div className={styles['job-detail-skeleton']}>
      <div className='line-header my-4'>
        <section id='job' className='job-detail-skeleton-container mt-4'>
          <div className='container contain-job-detail-skeleton-content'>
            <div className='row'>
              <div className='col-md-9'>
                <div className='job-detail-skeleton-title'>
                  <p className='placeholder-glow'>
                    <span className='placeholder placeholder-lg col-12'></span>
                  </p>
                </div>

                <div className='job-detail-skeleton-type'>
                  <p className='placeholder-glow'>
                    <span className='placeholder col-2'></span>
                  </p>
                </div>

                <div className='job-detail-skeleton-info'>
                  <p className='placeholder-glow'>
                    {Array.from({ length: 3 }, (v, i) => (
                      <span key={i} className='placeholder col-3' />
                    ))}
                  </p>
                </div>
              </div>

              <div className='col-md-3'>
                <div className='container'>
                  <div className='row'>
                    <div className='col-md-4' />
                    <div className='col-md-8 placeholder-glow p-0'>
                      <div className='placeholder col-12 bg-warning apply-btn-skeleton' />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className='line-detail' />

          <div className='container job-description-skeleton-container'>
            <div className='row pt-5 g-5'>
              <div className='col-md-8 job-description-skeleton'>
                <div className='markdown-skeleton-container'>
                  {Array.from({ length: 5 }, (v, i) => (
                    <div key={i} className='placeholder-glow mb-3'>
                      {Array.from({ length: 10 }, (v, i) => (
                        <span key={i} className='placeholder col-12' />
                      ))}
                    </div>
                  ))}
                </div>
              </div>

              <div className='col-md-4 pl-4 job-description-sub-info-skeleton'>
                <div className='job-description-sub-info-skeleton-wrapper'>
                  <label className='job-description-sub-info-title'>
                    Skills required
                  </label>
                  <div className='job-content-skeleton-container'>
                    <div className='placeholder-glow'>
                      {Array.from({ length: 5 }, (v, i) => (
                        <span
                          key={i}
                          className='placeholder placeholder-lg col-3 bg-warning'
                        ></span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className='job-description-sub-info-skeleton-wrapper'>
                  <label className='job-description-sub-info-title'>
                    Skills
                  </label>
                  <div className='job-content-skeleton-container'>
                    <div className='placeholder-glow'>
                      {Array.from({ length: 5 }, (v, i) => (
                        <span
                          key={i}
                          className='placeholder placeholder-lg col-3 bg-warning'
                        ></span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className='job-description-sub-info-skeleton-wrapper'>
                  <label className='job-description-sub-info-title mb-3'>
                    Locations
                  </label>

                  <div className='row mb-3'>
                    <div className='col-md'>
                      <div className='placeholder-glow'>
                        <span className='placeholder col-12 job-description-skeleton-map'></span>
                      </div>
                    </div>
                  </div>

                  <div className='job-content-container'>
                    <div className='placeholder-glow'>
                      {Array.from({ length: 3 }, (v, i) => (
                        <span key={i} className='placeholder col-12'></span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default DetailJobSkeleton
