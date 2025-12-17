import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    step: 1,
    formData: {
        name: "",
        email: "",
        address: "",
        city: "",
        cardNumber: "",
    }
}

const MultiStepSlice = createSlice({
    name: "form",
    initialState,
    reducers: {
        updateFormData: (state, action) => {
            state.formData = {
                ...state.formData,
                ...action.payload,
            }
        },
        nextStep: (state) => {
            state.step = state.step + 1;
        },
        prevStep: (state) => {
            state.step = state.step - 1;
        },
        resetForm: (state) => {
            state.step = 1,
            state.formData = initialState.formData
        },
    },
});

export const {
    updateFormData,
    nextStep,
    prevStep,
    resetForm
} = MultiStepSlice.actions;

export default MultiStepSlice.reducer;