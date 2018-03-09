import React from 'react'
import { AppRegistry } from 'react-native'
import App from './src/App'

AppRegistry.registerComponent('FastlaneSampleWeb', () => App)
AppRegistry.runApplication('FastlaneSampleWeb', {
  initialProps: {},
  rootTag: document.getElementById('react-app')
})
