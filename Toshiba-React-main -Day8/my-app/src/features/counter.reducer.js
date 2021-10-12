
//reducer
const initalState = {
    value: 0
}
const counterReducer = (state = initalState, action) => {
    //logic
    switch (action.type) {
        case 'counter/increment':
            console.log("Old state", state, "action", action)
            return { ...state, value: state.value + 1 };
        default:
            return state;
    }
}

export { counterReducer };