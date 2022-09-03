function loginReducer(state = "", action) {
  switch (action.type) {
    case "TOKEN":
      return action.payload;
    default:
      return state;
  }
}

export default loginReducer;
