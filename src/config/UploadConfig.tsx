import React from 'react'
import { Form, Input, InputNumber, Radio, Switch } from 'antd'
import { useConfig } from '@/hooks'
import { uploadListTypeOptions, uploadRequestMethodOptions } from '@/utils/options'

const UploadConfig = () => {
  const { selectWidgetItem, handleChange } = useConfig()

  return (
    <>
      <Form.Item label="标题">
        <Input value={selectWidgetItem?.label} onChange={(event) => handleChange(event.target.value, 'label')} />
      </Form.Item>

      <Form.Item label="接受上传的文件类型（accept）">
        <Input value={selectWidgetItem?.config?.accept} onChange={(event) => handleChange(event.target.value || undefined, 'config.accept')} />
      </Form.Item>

      <Form.Item label="上传的地址">
        <Input value={selectWidgetItem?.config?.action} onChange={(event) => handleChange(event.target.value, 'config.action')} />
      </Form.Item>

      <Form.Item label="发到后台的文件参数名">
        <Input value={selectWidgetItem?.config?.name} onChange={(event) => handleChange(event.target.value, 'config.name')} />
      </Form.Item>

      <Form.Item label="限制上传数量">
        <InputNumber min={0} value={selectWidgetItem?.config?.maxCount} onChange={(value) => handleChange(value || undefined, 'config.maxCount')} />
      </Form.Item>

      <Form.Item label="上传请求的 http method">
        <Radio.Group
          optionType="button"
          buttonStyle="solid"
          options={uploadRequestMethodOptions}
          value={selectWidgetItem?.config?.method}
          onChange={(event) => handleChange(event.target.value, 'config.method')}
        />
      </Form.Item>

      <Form.Item label="上传列表样式">
        <Radio.Group
          optionType="button"
          buttonStyle="solid"
          options={uploadListTypeOptions}
          value={selectWidgetItem?.config?.listType}
          onChange={(event) => handleChange(event.target.value, 'config.listType')}
        />
      </Form.Item>

      <Form.Item label="是否隐藏">
        <Switch defaultChecked={selectWidgetItem?.config?.hidden} onChange={(checked) => handleChange(checked, 'config.hidden')} />
      </Form.Item>

      <Form.Item label="是否支持拖拽">
        <Switch defaultChecked={selectWidgetItem?.config?.drop} onChange={(checked) => handleChange(checked, 'config.drop')} />
      </Form.Item>

      <Form.Item label="是否支持上传文件夹">
        <Switch defaultChecked={selectWidgetItem?.config?.directory} onChange={(checked) => handleChange(checked, 'config.directory')} />
      </Form.Item>

      <Form.Item label="是否支持多选文件">
        <Switch defaultChecked={selectWidgetItem?.config?.multiple} onChange={(checked) => handleChange(checked, 'config.multiple')} />
      </Form.Item>

      <Form.Item label="点击打开文件对话框">
        <Switch defaultChecked={selectWidgetItem?.config?.openFileDialogOnClick} onChange={(checked) => handleChange(checked, 'config.openFileDialogOnClick')} />
      </Form.Item>

      <Form.Item label="是否展示文件列表">
        <Switch defaultChecked={selectWidgetItem?.config?.showUploadList} onChange={(checked) => handleChange(checked, 'config.showUploadList')} />
      </Form.Item>

      <Form.Item label="上传请求时是否携带 cookie">
        <Switch defaultChecked={selectWidgetItem?.config?.withCredentials} onChange={(checked) => handleChange(checked, 'config.withCredentials')} />
      </Form.Item>

      <Form.Item label="是否禁用">
        <Switch defaultChecked={selectWidgetItem?.config?.disabled} onChange={(checked) => handleChange(checked, 'config.disabled')} />
      </Form.Item>
    </>
  )
}

export default UploadConfig
