// Initial state for user reducer
const createInitialState = {
  authUser: {},
  loader: false,
  loginStatus: null,
};

//Handle reducers
export const authReducer = (state = createInitialState, action) => {
  switch (action.type) {
    case 'USER_LOGIN':
      return {
        ...state,
        loginStatus: null,
        loader: true,
      };
    case 'USER_LOGIN_SUCCESS':
      return {
        ...state,
        authUser: action.payload,
        loginStatus: true,
        loader: false,
      };
    case 'USER_LOGIN_FAIL':
      return {
        ...state,
        authUser: {},
        loginStatus: false,
        loader: false,
      };
    case 'USER_LOGOUT':
      return {
        ...state,
        authUser: {},
        loginStatus: null,
      };
    default:
      return {
        ...state,
      };
  }
};
