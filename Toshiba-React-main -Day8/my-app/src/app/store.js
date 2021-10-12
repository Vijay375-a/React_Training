import { createStore } from "redux";
import { counterReducer } from "../features/counter.reducer";

export const store = createStore(counterReducer);
