const modules = import.meta.globEager('./*.svg')

const Icons: Record<string, any> = {}

Object.keys(modules).forEach((key) => {
  Icons[key.replace('./', '').replace('.svg', '')] = key.replace('./', '').replace('.svg', '')
})

export default Icons
