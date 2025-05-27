import { createStore } from "redux";
import { countReducer } from "./counter/countReducer";

const store = createStore(countReducer);

export default store;
