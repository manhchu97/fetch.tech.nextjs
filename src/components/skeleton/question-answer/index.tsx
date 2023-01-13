import styles from './QuestionSkeleton.module.scss'

const QuestionSkeleton = ({ ...other }): React.ReactElement => {
  return (
    <section className={styles['question-skeleton']}>
      <div className='placeholder-glow question-skeleton-container'>
        <span className='placeholder question-skeleton-item' {...other}></span>
      </div>
    </section>
  )
}

export default QuestionSkeleton
