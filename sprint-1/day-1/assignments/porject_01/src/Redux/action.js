//action creator functions here
//action creator functions here
import * as action from "./actionTypes";
import axios from "axios";
const URL = "http://localhost:4500/todos";

const addTodo=(todo) => (dispatch) => {
  dispatch({ type: action.ADD_TODOS_REQUEST });
 return axios
    .post(URL, todo)
    .then((value) => {
      dispatch({ type: action.ADD_TODOS_SUCCESS, payload: value.data });
    })
    .catch((err) => {
      dispatch({ type: action.ADD_TODOS_ERROR });
    });
};

const getTodo=()=>(dispatch)=>{
  dispatch({ type: action.GET_TODOS_REQUEST });
  axios
    .get(URL)
    .then((value) => {
      dispatch({ type: action.GET_TODOS_SUCCESS, payload: value.data });
    })
    .catch((err) => {
      dispatch({ type: action.GET_TODOS_ERROR });
    });
};

export {addTodo,getTodo};