import React, { FC, useContext } from 'react'
import { Modal, ModalProps, message } from 'antd'
import MonacoEditor from '@/components/MonacoEditor'
import { DesignContext } from '@/store'
import { copy } from '@/utils'

const GenerateJsonModal: FC<ModalProps> = (props) => {
  const { state } = useContext(DesignContext)
  const monacoValue = JSON.stringify(state, null, 2)

  const handleCopy = () => {
    copy(monacoValue)
    message.success('Copy成功')
  }

  return (
    <>
      <Modal {...props} destroyOnClose okText="Copy" onOk={handleCopy}>
        <MonacoEditor readonly language="json" height={document.body.clientHeight / 1.5} value={JSON.stringify(state, null, 2)} />
      </Modal>
    </>
  )
}

export default GenerateJsonModal
