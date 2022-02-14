import React, { FC } from 'react'

interface Props {
  iconName?: string
  fontSize?: number
  color?: string
  className?: string
  onClick?: () => void
}

const Icon: FC<Props> = (props) => {
  const { iconName, fontSize, color, className, onClick } = props

  return (
    <svg className={`icon ${className}`} aria-hidden="true" style={{ fontSize: `${fontSize}px`, color }} onClick={onClick}>
      <use xlinkHref={`#${iconName}`} />
    </svg>
  )
}

Icon.defaultProps = {
  iconName: undefined,
  fontSize: 40,
  color: '',
  className: '',
  onClick: () => {}
}

export default Icon
