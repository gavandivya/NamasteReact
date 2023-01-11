import { createSlice } from "@reduxjs/toolkit";

let ssUserName = sessionStorage.getItem("ssUsername");
let ssFile = sessionStorage.getItem("ssFile");

const userLoginSlice = createSlice({
  name: "userLogin",
  initialState: {
    userName: ssUserName ? ssUserName : "",
    image: ssFile ? ssFile : "",
  },
  reducers: {
    getUser: (state, action) => {
      state.userName = action.payload.userName,
        state.image = action.payload.file;
    },
  },
});

export const { getUser } = userLoginSlice.actions;
export default userLoginSlice.reducer;
