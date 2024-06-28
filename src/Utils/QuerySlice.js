import { createSlice } from "@reduxjs/toolkit"


const  QuerySlice=createSlice({

    name:"query",
    initialState:{
        queryData:""
    },
    reducers:{
        QueryResults:(state,action)=>{
         state.queryData=action.payload
        },

         

    }
}


)
export const {QueryResults }=QuerySlice.actions
export default  QuerySlice.reducer 