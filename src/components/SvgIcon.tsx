import React, { FC, CSSProperties, MouseEvent } from 'react'

interface Props {
  name: string
  prefix?: string
  color?: string
  className?: string
  style?: CSSProperties
  onClick?: (event: MouseEvent<SVGSVGElement>) => void
}

const SvgIcon: FC<Props> = (props) => {
  const { name, prefix, color, className, style, onClick } = props
  const symbolId = `#${prefix}-${name}`

  return (
    <span style={{ display: 'inline-flex', alignItems: 'center' }}>
      <svg aria-hidden="true" className={`svg-icon ${className}`} style={style} onClick={onClick}>
        <use xlinkHref={symbolId} fill={color} />
      </svg>
    </span>
  )
}

SvgIcon.defaultProps = {
  prefix: 'svg-icon',
  color: 'currentColor',
  className: '',
  style: {},
  onClick: () => {}
}

export default SvgIcon
