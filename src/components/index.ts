import { App, Component } from 'vue'
import * as layout from './layout'
import * as publicComponents from './public'

const components: { [key: string]: Component } = {
  ...layout,
  ...publicComponents
}

const install = (app: App) => {
  Object.keys(components).forEach((key: string) => {
    const { name } = components[key]
    if (name) app.component(name, components[key])
  })
}

export default { install }
