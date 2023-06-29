import * as action from "./actionTypes";

const initialState = {
  todos: [],
  isLoading: false,
  isError: false,
};

const reducer = (state = initialState,{ type, payload }) => {
  switch (type) {
    // case action.GET_TODOS_REQUEST:
    //   return { ...state, isLoading: true };
    // case action.GET_TODOS_SUCCESS:
    //   return { ...state, isLoading: false, todos: payload };
    // case action.GET_TODOS_ERROR:
    //   return { ...state, isLoading: false, isError: true };

      case action.ADD_TODOS_REQUEST:
        return { ...state, isLoading: true };
      case action.ADD_TODOS_SUCCESS:
        return { ...state, isLoading: false, todos: [...state.todos,payload] };
      case action.ADD_TODOS_ERROR:
        return { ...state, isLoading: false, isError: true };
  }
  return state;
};

export { reducer };