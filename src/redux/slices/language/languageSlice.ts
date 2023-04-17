import { createSlice } from "@reduxjs/toolkit";
import { RU_LANGUAGE, ENG_LANGUAGE } from "@/constants/LanguageBandle";

const initialState:any = {
  language: RU_LANGUAGE, 
};
const languageSlice = createSlice({
  name: "thema",
  initialState,
  reducers: {
    appLanguage: (state?:any, action?:any) => {
      switch(action.payload) {
      case "RU":  
        state.language = RU_LANGUAGE;
        break;
      case "ENG":  
        state.language = ENG_LANGUAGE;
        break;
      }
    },   
  },
});
export const languageReducer = languageSlice.reducer;
export const { appLanguage } = languageSlice.actions;