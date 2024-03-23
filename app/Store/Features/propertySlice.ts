"use client";

import { PropertyInstance, PropertyPaymentDetails } from "@/app/functions/interface";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";


interface PropertyState {
  selectedProperty: PropertyInstance;
  propertyPaymentDetails:PropertyPaymentDetails
}

const initialState: PropertyState = {
    selectedProperty:{},
    propertyPaymentDetails:{
      noOfUnit: 0,
      totalAmountPayable: 0.00,
      estimateROI: 0.00,
      propertyId:'',
    }
};

const propertySlice = createSlice({
  name: "property",
  initialState,
  reducers: {
    updateSelectedProperty: (state, action: PayloadAction<PropertyInstance>) => {
      state.selectedProperty = action.payload;
    },
    updatePropertyPaymentDetails: (state, action: PayloadAction<PropertyPaymentDetails>) => {
      state.propertyPaymentDetails = action.payload;
    },
  },
});

export const { updateSelectedProperty, updatePropertyPaymentDetails } = propertySlice.actions;
export default propertySlice.reducer;
