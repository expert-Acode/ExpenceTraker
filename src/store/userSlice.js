import { createSlice } from "@reduxjs/toolkit";

const initialState={
    userData:[],
    showDetails:{id:"" , details:"none"}
}

const UserSlice=createSlice({
    name : "users",
    initialState ,
    reducers : {
        userAdded:(state, action)=> {
            const {payload}=action;
            payload && state.userData.unshift(payload)
        },
        removeAllData:(state, action)=> {
            state.userData=[]
        },
        removeOneData:(state, action)=> {
            const {payload}=action;
            const newData = state?.userData?.filter((item) =>( item.id != payload));
            state.userData=newData
        },
        showAllDetails:(state, action)=> {
            const {payload}=action;
            console.log(payload,"payload")
            state.showDetails=payload
        }
    }
})

export const {userAdded,removeOneData,removeAllData,showAllDetails}=UserSlice.actions;
export default UserSlice.reducer;