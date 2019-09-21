import * as React from "react"
import { render } from "react-dom"
import { Provider } from "react-redux"
import * as Sentry from "@sentry/browser"
import configureStore from "./store"
import GlobalStyles from "./styles/global-styles"
import config from "./config"
import App from "./components/app/app"
const rootElement = document.getElementById("root")

export const { store, history } = configureStore()
render(
  <Provider store={store}>
    <GlobalStyles />
    <App history={history} />
  </Provider>,
  rootElement
)
