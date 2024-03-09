import { createSlice } from "@reduxjs/toolkit";
import { LIVE_CHAT_COUNT } from "./constants";

const chatSlice = createSlice({
  name: "chat",
  initialState: {
    massages: [],
  },
  reducers: {
    addMassge: (state, action) => {
      state.massages.splice(LIVE_CHAT_COUNT, 1);
      state.massages.push(action.payload);
    },
  },
});
export const { addMassge } = chatSlice.actions;
export default chatSlice.reducer;
