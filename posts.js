const { createStore, combineReducers } = require("redux");

// Initial State
const initialState = {
  posts: [],
};

const userInitialState = {
  users: [],
}
const ADD_POST = "ADD_POST";
const REMOVE_POST = "REMOVE_POST";
const ADD_USER = "ADD_POST";
// Actions
const addPostAction = (post) => {
  return {
    type: ADD_POST,
    payload: post,
  };
};

const removePostAction = (id) => {
  return {
    type: REMOVE_POST,
    id,
  };
};

const addUserAction = (user) => {
  return {
    type: ADD_USER,
    payload: user,
  };
};

// Reducer

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

const userReducer = (state = userInitialState,action)=>{
  switch(action.type){
    case ADD_USER:
      return{
        posts: [state.users,action.payload],
      };
      default:
        return state;
  }
}

const rootReducer = combineReducers({
  posts: postReducer,
  user: userReducer,
});
  
// Store
const store = createStore(rootReducer);

store.subscribe(() => {
  const data = store.getState();
  console.log("posts", data.posts);
  console.log("posts", data.user);

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

store.dispatch(addUserAction({
  name: 'john',
  email: 'john@gmail.com',
}));
