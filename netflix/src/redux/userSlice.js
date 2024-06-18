import {createSlice} from "@reduxjs/toolkit";

const userSlice = createSlice({
    name:"user",
    initialState:{
        user:null,
        isLoading:false
    },
    
});

