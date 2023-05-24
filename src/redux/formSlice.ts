import {  createSlice } from "@reduxjs/toolkit";
import { formType } from "../components/DragBox/DragBox";



const initialState:formType[] = ([]);

const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    add(state, action) {
      return [...state,action.payload.data]
    },
    remove(state, action) {
      let form=[...state].filter((_,index)=>index!==action.payload.index);
      
      return form
    }
  },
});

export const { add,remove } = formSlice.actions;
export default formSlice.reducer;
