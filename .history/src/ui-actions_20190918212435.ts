import { push } from "connected-react-router"
const dispatch = useDispatch()
export function navigate(page: string) {
  return dispatch(push(page))
}
