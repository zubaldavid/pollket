import * as React from "react"
import { render } from "react-dom"
import { Provider } from "react-redux"
import configureStore from "./store"
import GlobalStyles from "./styled-app/global-styles"
import App from "./App"
const rootElement = document.getElementById("root")

export const { store, history } = configureStore()
render(
  <Provider store={store}>
    <GlobalStyles />
    <App history={history} />
  </Provider>,
  rootElement
)
