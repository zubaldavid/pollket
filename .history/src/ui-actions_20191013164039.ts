import { push } from "connected-react-router"
import { useDispatch } from "react-redux"
 
export mapDispatchToProps = (dispath, ownProps) => {(
  navigate:(location) => {
    return dispatch(push(page))  
  }
)}

