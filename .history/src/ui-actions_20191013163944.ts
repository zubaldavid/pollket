import { push } from "connected-react-router"
import { useDispatch } from "react-redux"
 
export mapDispatchToProps = (dispath, ownProps) => {(
  navigate:(location)
)}
 navigate(page: string) => {
  const dispatch = useDispatch()
  return dispatch(push(page))
}
