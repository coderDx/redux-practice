import React from 'react'
import { Provider } from 'react-redux'
import store from './redux/store'
import './App.css'
import CakeContainer from './Components/CakeContainer'
import IceCreamContainer from './Components/IceCreamContainer'
import HooksCakeContainer from './Components/HooksCakeContainer'
import NewCakeContainer from './Components/NewCakeContainer'
import ItemContainer from './Components/ItemContainer'
import UserContainer from './Components/UserContainer'

function App() {
  return (
    <Provider store={store}>
      <UserContainer />
      {/* <ItemContainer cake />
      <ItemContainer />
      <HooksCakeContainer />
      <CakeContainer />
      <IceCreamContainer />
      <NewCakeContainer /> */}
    </Provider>

  )
}

export default App
