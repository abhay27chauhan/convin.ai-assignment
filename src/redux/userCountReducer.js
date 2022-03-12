let initialState = {
  total: 0,
  loading: true,
  error: null,
};

const userCountReducer = (state = initialState, action) => {
  if (action.type === "USER_COUNT_LOADING") {
    return {
      total: 0,
      loading: true,
      error: null,
    };
  }

  if (action.type === "USER_COUNT_COMPLETE") {
    return {
      total: action.payload.response.total,
      loading: false,
      error: null,
    };
  }

  if (action.type === "USER_COUNT_ERROR") {
    return {
      total: 0,
      loading: false,
      error: action.payload.error,
    };
  }

  return state;
};

export default userCountReducer;
