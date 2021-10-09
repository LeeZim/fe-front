import { App, Component } from 'vue'
import { aside, header, footer, main, layout } from './layout'

const components: { [key: string]: Component } = {
  aside,
  header,
  footer,
  main,
  layout
}

const install = (app: App) => {
  Object.keys(components).forEach((key: string) => {
    const { name } = components[key]
    if (name) app.component(name, components[key])
  })
}

export default { install }
