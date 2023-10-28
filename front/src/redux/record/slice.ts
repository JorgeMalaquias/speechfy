import { createSlice } from "@reduxjs/toolkit";

interface RecordState {
  newAudioUrl: string;
  updateRecords: boolean;
}

const initialState: RecordState = {
  newAudioUrl: "",
  updateRecords: true,
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
      state.updateRecords = !state.updateRecords;
    },
  },
});

export const { displayModal, hideModal } = recordSlice.actions;
export default recordSlice.reducer;
