import zhCN from 'antd/lib/locale/zh_CN'

import type { ConfigProviderProps } from 'antd/lib/config-provider'
import type { FormProps } from 'antd/lib/form'
import type { Component } from '@/config'

export const initState: State = {
  selectWidgetItem: undefined,
  widgetFormList: [],
  iconSrc: undefined,
  globalConfig: {
    componentSize: 'middle',
    direction: 'ltr',
    locale: zhCN
  },
  formConfig: {
    colon: true,
    labelAlign: 'right',
    layout: 'horizontal',
    labelWrap: false,
    labelCol: {},
    wrapperCol: {}
  }
}

export interface State {
  selectWidgetItem?: Component
  widgetFormList: Component[]
  iconSrc?: string
  globalConfig: ConfigProviderProps
  formConfig: FormProps
  [key: string]: any
}
