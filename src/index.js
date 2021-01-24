import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import App from './App'
import './index.css'
import notificationReducer from './reducers/notificationReducer'

const store = createStore(notificationReducer)

store.subscribe(() => {
  const storeNow = store.getState()
  console.log(storeNow)
})

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)