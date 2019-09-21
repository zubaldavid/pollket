import * as React from "react"
import { render } from "react-dom"
import { Provider } from "react-redux"
import configureStore from "./store"
import { createStore } from "redux"
import App from "./App"

const rootElement = document.getElementById("root")

export const { store, history } = configureStore()
render(
  <Provider store={store}>
    <App history={history} />
  </Provider>,
  rootElement
)
