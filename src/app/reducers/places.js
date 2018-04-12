export const places = (state = [], action) => {
  switch (action.type) {
    case 'GET_PLACES':
      return action.places
    default:
      return state
  }
}

export const placeDetail = (state = [], action) => {
  switch (action.type) {
    case 'IS_LOADING':
      return action.url == state.url ? state : false
    case 'GET_PLACE_DETAIL':
      return action.data
    default:
      return state
  }
}

export const extraCurricular = (state = [], action) => {
  console.log(state, "ADASD")
  switch (action.type) {
    case 'IS_LOADING_EXTRA_CURR':
      return state && action.id == state.id? state.id : false
    case 'GET_EXTRA_CURR':
      return action.data
    default:
      return state
  }
}
 
export const placeImages = (state = [], action) => {
  console.log(state, "ADASD")
  switch (action.type) {
    case 'IS_LOADING_PLACE_IMAGES':
      return state && action.id == state.id? state.id : false
    case 'GET_PLACE_IMAGES':
      return action.data
    default:
      return state
  }
} 