// modal.slice.js
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface InitialStateType {
  title: null | string;
  message: null | string;
  success: boolean;
  promptMessage: null | string;
  promptLink: null | string;
  isOpen: boolean;
}

const initialState: InitialStateType = {
  title: null,
  message: null,
  success: false,
  promptMessage: null,
  promptLink: null,
  isOpen: false,
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openModal: (state: InitialStateType, action: PayloadAction<any>) => {
      const modalObj = action.payload;

      // Check if it's a message modal
      if (modalObj.title || modalObj.message) {
        state.title = modalObj.title || null;
        state.message = modalObj.message || null;
        state.success = modalObj.success || false;
        state.promptMessage = modalObj.promptMessage || null;
        state.promptLink = modalObj.promptLink || null;
        state.isOpen = true;
      }
    },

    closeModal: (state: InitialStateType) => {
      let newState = { ...state };
      newState.title = null;
      newState.message = null;
      newState.success = false;
      newState.promptMessage = null;
      newState.promptLink = null;
      newState.isOpen = false;
      return newState;
    },
  },
});

// Export the slice actions and reducer
export const { openModal, closeModal } = modalSlice.actions;
export default modalSlice.reducer;
