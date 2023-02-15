import { createSlice } from "@reduxjs/toolkit";

// const deleteUser:(state,payload)=>{
//     // const newData = state?userData?.filter((item) =>( item.id != payload));
//     const newData = state?userData?.filter((val)=>{
//         if(val.id!=payload){
//             return val;
//         }
       
//     })
// }


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
        },
        // userDelete(state, action) {
        //     const newhistoryGenrate = state?.filter((item) => item.id != action.payload);
        //     console.log(newhistoryGenrate,"newhistoryGenrate")
        //     // state(newhistoryGenrate);
        // }
    }
})

export const {userAdded,removeOneData,removeAllData,showAllDetails}=UserSlice.actions;
export default UserSlice.reducer;