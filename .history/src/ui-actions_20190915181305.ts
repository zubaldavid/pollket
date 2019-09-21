import { push } from "connected-react-router"

export function navigate(page: string) {
  return async dispatch => {
    dispatch(push(page))
  }
}
