import { store } from './app/store';

//response listener
store.subscribe(() => console.log("Current State", store.getState()))

//action 
const increment = {
    type: 'counter/increment',
    payload: undefined
}

//dispatch action : send request.

store.dispatch(increment)
store.dispatch({
    type: 'counter/increment',
    payload: undefined
})
for (let i = 0; i < 10; i++) {
    store.dispatch({
        type: 'counter/increment',
        payload: undefined
    })
}