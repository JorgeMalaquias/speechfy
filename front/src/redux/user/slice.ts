import { createSlice } from "@reduxjs/toolkit";

interface UserState {
  id: string;
  name: string;
  photoUrl: string;
}

const initialState: UserState = {} as UserState;

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    update: (state, action) => {
      state = action.payload;
    },
  },
});

export const { update } = userSlice.actions;
export default userSlice.reducer;
