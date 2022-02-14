import React, { useEffect, useImperativeHandle, forwardRef } from 'react'
import { ConfigProvider, Form } from 'antd'
import { cloneDeep } from 'lodash-es'
import { State } from '@/store/state'
import { loadJsLink } from '@/utils'
import { GenerateProvider } from '@/store'
import GenerateFormItem from '@/core/GenerateFormItem'

export interface GenerateFormProps {
  widgetInfoJson: string
  formValue?: Record<string, any>
}

export interface GenerateFormRef {
  getData: () => Promise<Record<string, any>>
  reset: () => void
}

const GenerateForm = forwardRef<GenerateFormRef, GenerateFormProps>((props, ref) => {
  const { widgetInfoJson, formValue } = props
  const [formInstance] = Form.useForm()

  useImperativeHandle(ref, () => ({
    getData: async () => {
      const validateResult = await formInstance.validateFields()
      return validateResult
    },
    reset: () => formInstance.resetFields()
  }))

  const widgetInfo: State = JSON.parse(widgetInfoJson)

  useEffect(() => {
    formInstance.setFieldsValue(cloneDeep(formValue))
    loadJsLink(widgetInfo.iconSrc)
  }, [])

  return (
    <div className="fc-style">
      <ConfigProvider {...widgetInfo.globalConfig}>
        <Form {...widgetInfo.formConfig} form={formInstance}>
          {widgetInfo.widgetFormList.map((widgetFormItem) => (
            <GenerateFormItem key={widgetFormItem.key} item={widgetFormItem} formInstance={formInstance} />
          ))}
        </Form>
      </ConfigProvider>
    </div>
  )
})

GenerateForm.defaultProps = {
  formValue: {}
}

export default forwardRef<GenerateFormRef, GenerateFormProps>((props, ref) => {
  return (
    <GenerateProvider>
      <GenerateForm {...props} ref={ref} />
    </GenerateProvider>
  )
})
