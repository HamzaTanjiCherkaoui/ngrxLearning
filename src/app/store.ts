/// reducers 
export const GET_TODOS  = "GET_TODOS";
export const GET_TODOS_SUCCESS = "GET_TODOS_SUCCESS";
export const GET_TODOS_ERROR = "GET_TODOS_ERROR";

export const ADD_TODO = "ADD_TODO";
export const ADD_TODO_SUCCESS = "ADD_TODO_SUCCESS";
export const ADD_TODO_ERROR = "ADD_TODO_ERROR";

export const SET_VISIBILITY_FILTER = "SET_VISIBILITY_FILTER";

export const TOGGLE_TODO_STATE = "TOGGLE_TODO_STATE";
export const TOGGLE_TODO_STATE_SUCCESS = "TOGGLE_TODO_STATE_SUCCESS";

export function getTodos() { 
  return {
    type : GET_TODOS
  }
}
const initialState = {
  data : [], 
  pending : false,
  error : null
}

export function todos (state = initialState , {type , payload}) {

  switch (type) {

    case GET_TODOS:
    return Object.assign({} ,state , {pending:true,error:null})

    case GET_TODOS_SUCCESS:
    return Object.assign({} ,state , {data:payload,pending:false,error:false})

    case GET_TODOS_ERROR:
    return Object.assign({} ,state , {pending:true,error:"Error"})

    case ADD_TODO:
    return Object.assign({} ,state , {pending:true,error:null})

    case ADD_TODO_SUCCESS:

    return Object.assign({}, state, {
      data: [...state.data,payload  ],
      pending : false
      });

    case TOGGLE_TODO_STATE:
    return Object.assign({} ,state , {pending:true,error:null})

    case TOGGLE_TODO_STATE_SUCCESS:
    return Object.assign({} ,state , {
      data : state.data
      .map(todo =>{
        if(todo.id == payload.id)
          return Object.assign ( {} , todo , { completed : !todo.completed});
        return todo;
      })
       , pending:false,error:null})


    default:
    return state; 

  }
}

export function addTodo( title ) {

  return { type: ADD_TODO,  payload : title }
}

export function toggleTodo( changedTodo ) {

  return { type: TOGGLE_TODO_STATE,  payload : changedTodo }
}

export function setVisibilityFilter( filter ) {
  return {
    type: SET_VISIBILITY_FILTER,
    payload: filter
  }
}

export const visibilityFilter =( state = "SHOW_ALL", action ) => {
  switch( action.type ) {
    case SET_VISIBILITY_FILTER:
    return action.payload;
    default:
    return state;
  }
}