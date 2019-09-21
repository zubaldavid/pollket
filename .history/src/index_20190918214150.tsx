import * as React from "react"
import { render } from "react-dom"
import { Provider } from "react-redux"
import configureStore from "./store"
import { createStore } from "redux"
import App from "./App"
import { createStore } from "redux"
import counterReducer from "./reducers/counterReducer"

const store = createStore(counterReducer)
const rootElement = document.getElementById("root")

export const { store, history } = configureStore()
render(
  <Provider store={store}>
    <App history={history} />
  </Provider>,
  rootElement
)
