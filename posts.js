const { createStore } = require("redux");

// Initial State
const initialState = {
  posts: [],
};

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

// Reducer
const postReducer = (state = initialState, action) => {
  if (action.type === "ADD_POST") {
    return {
      ...state,
      posts: [...state.posts, action.payload],
    };
  } else if (action.type === "REMOVE_POST") {
    return {
      ...state,
      posts: state.posts.filter((post) => post.id !== action.id),
    };
  } else {
    return state;
  }
};

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
