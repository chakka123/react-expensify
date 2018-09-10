import { createStore } from 'redux';

const incrementCount = ({ incrementBy = 1 } = {}) => {
    return {
        type: 'INCREMENT',
        incrementBy
    }
};

const decrementCount = ({ decrementBy = 1 } = {}) => (
    {
        type: 'DECREMENT',
        decrementBy
    }
);

const setCount = ({ count = 0 } = {}) => {
    return {
        type: 'SET',
        count
    }
};

const resetCount = () => {
    return {
        type: 'RESET'
    }
}

const countReducer = (state = { count: 0 }, action)=>{
    switch(action.type){
        case 'INCREMENT':
            return {
                count: state.count + action.incrementBy
            };
        case 'DECREMENT':
            return {
                count: state.count - action.decrementBy
            };
        case 'SET':
            return {
                count: action.count
            }
        case 'RESET':
            return {
                count: 0
            }
        default:
            return state;
    }
}

const store = createStore(countReducer);



const unsubscribe = store.subscribe(()=>{
    console.log(store.getState());
});



store.dispatch(
    {
        type: 'INCREMENT',
        incrementBy: 5
    }
);

store.dispatch(incrementCount({ incrementBy : 2 }));

store.dispatch(resetCount())

store.dispatch(decrementCount({ decrementBy: 2 }));

store.dispatch(decrementCount());

store.dispatch(setCount({ count: 20 }));
