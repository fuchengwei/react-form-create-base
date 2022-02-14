import _React, { createElement } from 'react'
import * as _antd from 'antd'
import { cloneDeep } from 'lodash-es'
import { Component } from '@/config'

// 加载js链接
export const loadJsLink = (src?: string) => {
  if (!src) return
  const id = 'customScript'

  removeDomNode(`#${id}`)

  const script = document.createElement('script')
  script.id = id
  script.src = src
  document.getElementsByTagName('head')[0].appendChild(script)
}

// 复制文本
export const copy = (text: string) => {
  const input = document.createElement('textarea')
  input.value = text
  document.body.appendChild(input)
  input.select()
  document.execCommand('copy')
  document.body.removeChild(input)
}

// 创建newWidgetFormList
export const createNewWidgetFormList = (list: Component[], childNodes: Component[], key: string) => {
  const newList = cloneDeep(list)

  for (let index = 0; index < newList.length; index++) {
    if (newList[index].key === key) {
      newList[index].childNodes = childNodes
      break
    }

    if (newList[index].childNodes) {
      newList[index].childNodes = createNewWidgetFormList(newList[index].childNodes!, childNodes, key)
    }
  }

  return newList
}

// 创建MentionsOptions
export const createMentionsOptions = (item: Component) => {
  const { remoteConfig, config } = item
  const options = remoteConfig?.remote ? remoteConfig.remoteOptions : config?.options

  return options.map((option: { label: string; value: string }) => createElement(_antd.Mentions.Option, { key: option.value, value: option.value }, option.label))
}

// 处理响应数据
export const handleResponseData = (remoteData: any[], remoteConfig: Record<string, any>): Record<string, any>[] => {
  return remoteData?.map((data) => ({
    label: data[remoteConfig.remoteProps.label],
    value: data[remoteConfig.remoteProps.value],
    children: handleResponseData(data[remoteConfig.remoteProps.children], remoteConfig)
  }))
}

// 删除domNode
export const removeDomNode = (selectors: string) => document.querySelectorAll(selectors).forEach((node) => node.remove())
