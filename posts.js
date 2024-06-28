const { createStore } = require("redux");

// Initial State
const initialState = {
  posts: [],
};

const userInitialState = {
  users: [],
}

// Actions
const addPostAction = (post) => {
  return {
    type: "ADD_POST",
    payload: post,
  };
};

const removePostAction = (id) => {
  return {
    type: "REMOVE_POST",
    id,
  };
};

const addUser = (post) => {
  return {
    type: "ADD_POST",
    payload: post,
  };
};

// Reducer
const ADD_POST = "ADD_POST";
const REMOVE_POST = "REMOVE_POST";
const postReducer = (state = initialState, action) => {
  switch(action.type){
    case ADD_POST:
      return{
        ...state,
        posts: [...state.posts, action.payload],
      }

      case REMOVE_POST:
        return{
          ...state,
          posts: state.posts.filter((post) => post.id !== action.id),
        }

        default:
          return state;
  }
}
  
// Store
const store = createStore(postReducer);

store.subscribe(() => {
  const data = store.getState();
  console.log(data);
});

// Dispatch Actions
store.dispatch(addPostAction({
  id: 1,
  title: "Best"
}));

store.dispatch(addPostAction({
  id: 2,
  title: "Course"
}));

store.dispatch(removePostAction(1));
