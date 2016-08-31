function issues(state = [], action) {
  switch(action.type) {
    case 'UPDATE_ISSUES' :
      return action.issues;
  }
  return state;
}

export default issues;