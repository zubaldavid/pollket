e
xport function navigate(page: string): ThunkResult<void> {
    return async dispatch => {
      dispatch(push(page))
    }
  }