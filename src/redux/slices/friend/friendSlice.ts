import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../../axios";

export const postFindUser = createAsyncThunk("friend/findUser", async(param:string) => {
  const dataParam = {
    name: param,
  };
  const { data } = await axios.post("user/findUser", dataParam);
  return data;
});

const initialState:any = {
  data: {},
  friendList: [], 
  chosenFriend: {
    data: {},
    status: false,
  },
  status: "loading",
}; 
const friendSlice = createSlice({
  name: "friend",
  initialState,
  reducers: {
    clearStateFriend: (state) => {
      state.data = {};
      state.status = "loading";
    },
    addFriend: (state, action) => {
      state.friendList = [action.payload, ...state.friendList];
    },
    choiseFriend: (state, action) => {
      state.chosenFriend.data = action.payload;
      state.chosenFriend.status = true;
    },
    closeFriendMsg: (state) => {
      state.chosenFriend.data = {};
      state.chosenFriend.status = false;
    },
  },
  extraReducers: (builder) => {
    builder
    //// GET_ME
      .addCase(postFindUser.pending, (state) => {
        state.status = "loading";
      })
      .addCase(postFindUser.fulfilled, (state, action) => {
        state.data = action.payload;
        state.status = "success"; 
      })
      .addCase(postFindUser.rejected, (state) => {
        state.data = [];
      }); 
  },
});
export const { clearStateFriend, addFriend, choiseFriend, closeFriendMsg } = friendSlice.actions;
export const friendReducer = friendSlice.reducer;
