function loginReducer(state = "", action) {
  switch (action.type) {
    case "TOKEN":
      return action.payload;
    case "CREAR_TWEET":
      return [...state, action.payload];
    default:
      return state;
  }
}

export default loginReducer;
