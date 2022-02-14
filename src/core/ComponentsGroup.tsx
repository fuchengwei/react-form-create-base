import React, { FC } from 'react'
import Sortable from 'sortablejs'
import SvgIcon from '@/components/SvgIcon'

import type { ComponentGroup } from '@/config'

interface Props {
  componentGroup: ComponentGroup
}

const ComponentsGroup: FC<Props> = (props) => {
  const {
    componentGroup: { title, components }
  } = props

  const sortableGroupDecorator = (instance: HTMLUListElement | null) => {
    if (instance) {
      const options: Sortable.Options = {
        sort: false,
        ghostClass: 'ghost',
        group: {
          name: 'people',
          pull: 'clone',
          put: false
        },
        setData: (dataTransfer, dragEl) => {
          dataTransfer.setData('SortableDataClone', JSON.stringify(components[parseInt(dragEl.dataset.index!, 10)]))
        }
      }

      Sortable.create(instance, options)
    }
  }

  return (
    <>
      <div className="widget-cate">{title}</div>
      <ul ref={sortableGroupDecorator}>
        {components.map((component, index) => (
          <li key={component.type} className="form-edit-widget-label" data-index={index}>
            <a href="/#">
              <SvgIcon name={component.icon} />
              <span>{component.label}</span>
            </a>
          </li>
        ))}
      </ul>
    </>
  )
}

export default ComponentsGroup
