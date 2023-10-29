import { createSlice } from "@reduxjs/toolkit";

export interface Record {
  id: number;
  userId: string;
  text: string;
  audioUrl: string;
  createdAt: Date;
}

interface RecordState {
  newAudioUrl: string;
  updateRecordsTrigger: boolean;
  records: Record[];
}

const initialState: RecordState = {
  newAudioUrl: "",
  updateRecordsTrigger: true,
  records: [],
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
      state.updateRecordsTrigger = !state.updateRecordsTrigger;
    },
    setRecords: (state, action) => {
      state.records = action.payload;
    },
  },
});

export const { displayModal, hideModal, setRecords } = recordSlice.actions;
export default recordSlice.reducer;
