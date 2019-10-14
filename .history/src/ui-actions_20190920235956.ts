import { push } from "connected-react-router"
import { useDispatch } from "react-redux"

export function navigate(page: string) {
  const dispatch = useDispatch()
  return dispatch(push(page))
}
