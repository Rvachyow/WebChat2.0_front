import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../../axios";


export const getMe = createAsyncThunk("user/getMe", async() => {
  const { data } = await axios.get("auth/me");
  return data;
});

export const postRegistration = createAsyncThunk("user/postRegistration", async(params:{}) => {
  const { data } = await axios.post("auth/register", params);
  return data;
});

export const postLogin = createAsyncThunk("user/postLogin", async(params:{}) => {
  const { data } = await axios.post("auth/login", params);
  return data;
});

const initialState:any = {
  data: {}, 
  status: "loading",
};
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    
  },
  extraReducers: (builder) => {
    builder

    //// GET_ME
      .addCase(getMe.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getMe.fulfilled, (state, action) => {
        state.data = action.payload;
        state.status = "success";
        console.log(state.data);
        
      })
      .addCase(getMe.rejected, (state) => {
        state.data = [];
      })

    //// Registration
      .addCase(postRegistration.pending, (state) => {
        state.status = "loading";
      })
      .addCase(postRegistration.fulfilled, (state, action) => {
        state.data = action.payload;
        state.status = "success";
      })
      .addCase(postRegistration.rejected, (state) => {
        state.data = [];
      })

    //// Login
      .addCase(postLogin.pending, (state) => {
        state.status = "loading";
      })
      .addCase(postLogin.fulfilled, (state, action) => {
        state.data = action.payload;
        state.status = "success";
        console.log(state.data);
        
      })
      .addCase(postLogin.rejected, (state) => {
        state.data = [];
      });
  },
});
export const selectIsAuth = (state:any) =>  state.user.status === "success";
  
export const userReducer = userSlice.reducer;
