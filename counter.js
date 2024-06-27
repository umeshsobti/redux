//steps

const { createStore } = require("redux");

//initial state
const initialState= {
    count:0,
}
//actions (action and action creator)
//increment
//decrement
//reset
//increaseByAmount
//action
{
    type: "INCREMENT";
}
const incrementAction=()=>{
    return{
        type: "INCREMENT",
    };
}

const decrementAction=()=>{
    return{
        type: "DECREMENT",
    };
}

const resetAction=()=>{
    return{
        type: "RESET",
    };
}

const increaseByAmtAction=()=>{
    return{
        type: "INCREMENT",
    };
}

//reducer
const counterReducer = (state=initialState,action)=>{
    if(action.type == "INCREMENT"){
        return {
            count: state.count+1,
        }
    }
    if(action.type == "DECREMENT"){
        return{
            count: state.count-1,
        }
    }
    if (action.type == "RESET"){
        return{
            count: 0
        }
    }
}
//store

const store = createStore(counterReducer);

store.subscribe(()=>{
    const data = store.getState();
    console.log(data)
})
store.dispatch(incrementAction());
store.dispatch(incrementAction());

store.dispatch(incrementAction());

store.dispatch(incrementAction());
store.dispatch(decrementAction());
store.dispatch(resetAction());


  