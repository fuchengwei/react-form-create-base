import { Dispatch, SetStateAction, MouseEvent, useCallback, useContext, useState } from 'react'
import { update } from 'lodash-es'
import { DesignContext } from '@/store'
import { ActionType } from '@/store/action'

export const useConfig = () => {
  const {
    state: { selectWidgetItem },
    dispatch
  } = useContext(DesignContext)

  const handlerSetVisible = useCallback(
    (callback: Dispatch<SetStateAction<boolean>>, value: boolean) => (event?: MouseEvent) => {
      event?.preventDefault()
      callback(value)
    },
    []
  )

  const [eventName, setEventName] = useState('')
  const [sourceType, setSourceType] = useState('静态数据')
  const [classEditorVisible, setClassEditorVisible] = useState(false)
  const [propsEditorVisible, setPropsEditorVisible] = useState(false)
  const [formItemPropsEditorVisible, setFormItemPropsEditorVisible] = useState(false)
  const [functionEditorVisible, setFunctionEditorVisible] = useState(false)

  const handleChange = (value: any, fieldName: string) => {
    update(selectWidgetItem!, fieldName, () => value)

    const action = {
      type: ActionType.SET_SELECT_WIDGET_ITEM,
      payload: selectWidgetItem
    }

    dispatch(action)
  }

  return {
    selectWidgetItem,
    dispatch,
    handleChange,
    handlerSetVisible,
    eventName,
    setEventName,
    sourceType,
    setSourceType,
    classEditorVisible,
    setClassEditorVisible,
    propsEditorVisible,
    setPropsEditorVisible,
    formItemPropsEditorVisible,
    setFormItemPropsEditorVisible,
    functionEditorVisible,
    setFunctionEditorVisible
  }
}

export const useForceUpdate = () => {
  const [flag, setFlag] = useState(false)

  const forceUpdate = () => setFlag(!flag)

  return forceUpdate
}
