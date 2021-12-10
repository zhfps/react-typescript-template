const _state = {
  count: 0
}

export default (state = _state, action:any) => {
  switch (action.type) {
    case 'INCREMENT': {
      state.count = state.count + 1
      return { ...state }
    }
    case 'DECREMENT':
      state.count = state.count - 1
      return { ...state }
    default:
      return state
  }
}
