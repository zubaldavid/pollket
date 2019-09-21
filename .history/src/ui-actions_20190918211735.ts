import { push } from "connected-react-router"

export function navigate(page: string) {
  return dispatch(push(page))
}
