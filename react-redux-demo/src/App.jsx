import React from 'react'
import { Provider } from 'react-redux'
import store from './redux/store'
import './App.css'
import CakeContainer from './Components/CakeContainer'
import IceCreamContainer from './Components/IceCreamContainer'
import HooksCakeContainer from './Components/HooksCakeContainer'

function App() {
  return (
    <Provider store={store}>
      <HooksCakeContainer />
      <CakeContainer />
      <IceCreamContainer />
    </Provider>
  )
}

export default App
