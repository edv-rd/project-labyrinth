import React from 'react'
import { Provider } from 'react-redux'
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { game } from 'reducers/game'
import { ui } from 'reducers/ui'
import Main from './pages/Main'

const reducer = combineReducers({
  game: game.reducer,
  ui: ui.reducer
})

const store = configureStore({ reducer })

export const App = () => {
  return (
    <Provider store={store}>
      <Main />
    </Provider>
  )
}
