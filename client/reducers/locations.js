function locations(state = [], action) {
  switch(action.type) {
    case 'UPDATE_LOCATIONS' :
      return action.locations;
  }
  return state;
}

export default locations;