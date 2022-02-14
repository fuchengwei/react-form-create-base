import React, { FC, useContext, useRef, useState } from 'react'
import { Modal, ModalProps, message } from 'antd'
import GenerateForm, { GenerateFormRef } from '@/core/GenerateForm'
import MonacoEditor from '@/components/MonacoEditor'
import { DesignContext } from '@/store'
import { copy } from '@/utils'

const PreviewModal: FC<ModalProps> = (props) => {
  const [dataModal, setDataModal] = useState(false)
  const [monacoValue, setMonacoValue] = useState('')
  const ref = useRef<GenerateFormRef>(null)

  const { state } = useContext(DesignContext)

  const handleGetData = async () => {
    const formValue = await ref.current?.getData()
    setMonacoValue(JSON.stringify(formValue, null, 2))
    setDataModal(true)
  }

  const handleCopy = () => {
    copy(monacoValue)
    message.success('Copy成功')
  }

  return (
    <>
      <Modal {...props} destroyOnClose okText="获取数据" onOk={handleGetData}>
        <GenerateForm widgetInfoJson={JSON.stringify(state)} ref={ref} />
      </Modal>
      <Modal title="获取数据" width="50%" destroyOnClose visible={dataModal} onCancel={() => setDataModal(false)} okText="Copy" onOk={handleCopy}>
        <MonacoEditor readonly language="json" height={document.body.clientHeight / 1.5} value={monacoValue} />
      </Modal>
    </>
  )
}

export default PreviewModal
