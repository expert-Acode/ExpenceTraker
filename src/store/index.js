import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import { combineReducers } from "@reduxjs/toolkit";

const persistConfig={
    key:"root",
    version:1,
    storage
}

 const reducer=combineReducers({
    userData:userSlice,
 })

 const persReducer=persistReducer(persistConfig,reducer)
 
export default configureStore({

    reducer : {
        users : persReducer
    }  
})
