import { createSlice } from "@reduxjs/toolkit";

interface RecordState {
  newAudioUrl: string;
}

const initialState: RecordState = {
  newAudioUrl: "",
};

const recordSlice = createSlice({
  name: "record",
  initialState,
  reducers: {
    displayModal: (state, action) => {
      state.newAudioUrl = action.payload;
    },
    hideModal: (state) => {
      state.newAudioUrl = "";
    },
  },
});

export const { displayModal, hideModal } = recordSlice.actions;
export default recordSlice.reducer;
