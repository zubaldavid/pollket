import React from "react"
import ReactDOM from "react-dom"
import "semantic-ui-css/semantic.min.css"
import "./index.css"
import App from "./App"

export const { store, history } = configureStore()
render(
  <Provider store={store}>
    <GlobalStyles />
    <App history={history} />
  </Provider>,
  rootElement
)
