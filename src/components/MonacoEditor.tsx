import React, { memo, FC, useEffect, useRef } from 'react'

interface Props {
  value: string
  height?: string | number
  theme?: string
  language?: string
  readonly?: boolean
  onChange?: (value: string) => void
}

const MonacoEditor: FC<Props> = (props) => {
  const { value, language, onChange, height, theme, readonly } = props
  const editorRef = useRef<HTMLDivElement>(null)

  const monacoEditorDecorator = () => {
    const model = window.monaco?.editor.createModel(value, language)
    const editorInstance = window.monaco?.editor.create(editorRef.current!, {
      model,
      theme,
      tabSize: 2,
      fontSize: 14,
      formatOnType: true,
      formatOnPaste: true,
      automaticLayout: true,
      emptySelectionClipboard: true,
      scrollBeyondLastLine: true,
      readOnly: readonly,
      minimap: {
        enabled: false
      },
      scrollbar: {
        vertical: 'hidden',
        horizontal: 'hidden',
        verticalScrollbarSize: 0,
        horizontalScrollbarSize: 0,
        alwaysConsumeMouseWheel: false
      }
    })

    editorInstance?.onDidChangeModelContent(() => onChange?.(editorInstance.getValue()))
  }

  useEffect(monacoEditorDecorator, [])
  return <div ref={editorRef} style={{ height, border: '1px solid lightgrey' }} />
}

MonacoEditor.defaultProps = {
  height: '100%',
  theme: 'vs',
  language: undefined,
  onChange: undefined,
  readonly: false
}

export default memo(MonacoEditor)
