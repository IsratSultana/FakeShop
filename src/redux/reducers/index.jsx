import {combineReducers} from "redux";
import { productReducer, selectedProductsReducer } from "./productReducers";


export const reducers = combineReducers({
    allProducts:productReducer,
    product:selectedProductsReducer,
})


