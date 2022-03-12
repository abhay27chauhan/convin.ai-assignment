let initialState = {
  user: null,
  loading: false,
  error: null,
};

const userReducer = (state = initialState, action) => {
  if (action.type === "LOADING") {
    return {
      user: null,
      loading: true,
      error: null,
    };
  }

  if (action.type === "RESPONSE_COMPLETE") {
    return {
      user: action.payload.response,
      loading: false,
      error: null,
    };
  }

  if (action.type === "ERROR") {
    return {
      user: null,
      loading: false,
      error: action.payload.error,
    };
  }

  return state;
};

export default userReducer;
