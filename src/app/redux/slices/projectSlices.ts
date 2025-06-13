import { createSlice } from "@reduxjs/toolkit";

const projectSlice = createSlice({
  name: "project",
  initialState: {
    value: "",
  },
  reducers: {
    setProjectId: (state, action) => {
      const projectId = action.payload;
      state.value = projectId;
    },
  },
});

export const { setProjectId } = projectSlice.actions;
export default projectSlice.reducer;
