const initialState = {
  good: 0,
  neutral: 0,
  bad: 0
}

const counterReducer = (state = initialState, action) => {
  console.log(action)
  let newState
  switch (action.type) {
    case 'GOOD':
      newState = { ...state }
      newState.good += 1
      return newState
    case 'NEUTRAL':
      newState = { ...state }
      newState.neutral += 1
      return newState
    case 'BAD':
      newState = { ...state }
      newState.bad += 1
      return newState
    case 'ZERO':
      return initialState
  }
  return state
}

export default counterReducer