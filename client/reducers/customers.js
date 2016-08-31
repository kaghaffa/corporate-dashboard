function customers(state = [], action) {
  switch(action.type) {
    case 'UPDATE_CUSTOMERS' :
      return action.customers;
  }
  return state;
}

export default customers