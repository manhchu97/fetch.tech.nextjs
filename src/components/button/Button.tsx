import clsx from 'clsx'

import styles from './Button.module.scss'

interface IButtonProps {
  title: string
  className?: string
  edgeClassName?: string
  frontClassName?: string
  onClick?:
    | ((event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void)
    | undefined
  type?: 'button' | 'submit' | 'reset' | undefined
  size?: 'small' | 'large' | 'default'
  fullWidth?: boolean
  variant?: 'filled' | 'outlined'
}

const Button = ({
  title = '',
  type = 'button',
  size = 'large',
  variant = 'filled',
  fullWidth = false,
  className,
  edgeClassName,
  frontClassName,
  onClick,
}: IButtonProps) => {
  return (
    <button
      className={clsx(
        styles['button-pushable'],
        { [styles['fullWidth']]: fullWidth },
        className,
      )}
      type={type}
      onClick={onClick}
    >
      <span
        className={clsx(
          styles['button-edge'],
          styles[variant],
          styles[size],
          edgeClassName,
        )}
      ></span>
      <span
        className={clsx(
          styles['button-front'],
          styles[size],
          styles[variant],
          frontClassName,
        )}
      >
        {title}
      </span>
    </button>
  )
}

export default Button
