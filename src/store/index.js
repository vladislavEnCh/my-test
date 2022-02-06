import { applyMiddleware, createStore } from "redux";
import roootReducer from "./reducer";
import thunk from 'redux-thunk'



const store = createStore(roootReducer, applyMiddleware(thunk))


export default store