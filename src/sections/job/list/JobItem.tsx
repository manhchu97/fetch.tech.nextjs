import React, { useMemo } from 'react'
import ReactMarkdown from 'react-markdown'

import Link from 'next/link'

import rehypeRaw from 'rehype-raw'

import { PATH_CONFIG } from '@/routes/paths'

import { IJobItem } from '@/types/job'

interface JobItemProps {
  job: IJobItem
  handleShowPopup: (job: IJobItem) => void
}

const JobItem = ({
  job,
  handleShowPopup,
}: JobItemProps): React.ReactElement => {
  const { Location, Tags, salary, title, type, description, id, slug } = job
  const { office } = Location

  const jobSlug = useMemo(() => {
    const slugArray = slug.split('-')
    slugArray[slugArray.length - 1] = id

    return slugArray.join('-')
  }, [slug, id])

  return (
    <li className={'job-item-container'}>
      <div className='row'>
        <div className='col-md-9'>
          <Link href={PATH_CONFIG.job.view(jobSlug)}>
            <a>
              <div className='row'>
                <div className='col-md-9'>
                  <div className='job-item-title'>
                    <h3>
                      {`${title} (${salary})`}
                      <div className='job-item-tag'>
                        {Tags.map(({ id, title, background }, index) => (
                          <div
                            key={id || index}
                            className='tag-item'
                            style={{ background }}
                          >
                            {title}
                          </div>
                        ))}
                      </div>
                    </h3>
                  </div>

                  <div className='job-item-related-content '>
                    <ReactMarkdown rehypePlugins={[rehypeRaw]}>
                      {description}
                    </ReactMarkdown>
                  </div>
                </div>

                <div className='col-md-3'>
                  <div className='row'>
                    <div className='col-md-12'>
                      <div className='job-item-location'>{office}</div>

                      <div className='job-item-salary'>{salary}</div>

                      <div className='job-item-type'>{type}</div>
                    </div>
                  </div>
                </div>

                <div className='job-item-see-more'>See more</div>
              </div>
            </a>
          </Link>
        </div>

        <div className='col-md-3 apply-btn-container'>
          <div className='apply-btn'>
            <button
              className='btn btn-warning'
              type='button'
              onClick={() => handleShowPopup(job)}
            >
              Apply Now
            </button>
          </div>
        </div>
      </div>

      <hr />
    </li>
  )
}

export default JobItem
