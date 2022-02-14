import * as monaco from 'monaco-editor'

export {}

declare global {
  interface Window {
    MonacoEnvironment: any
    monaco: typeof monaco
  }
}
