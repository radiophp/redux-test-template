// slices/dataSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    settingData: {}
};

const settingSlice = createSlice({
    name: 'setting',
    initialState,
    reducers: {
        setSettingProps: (state, action) => {
            return action.payload;
        }
    }
});

export const { setSettingProps } = settingSlice.actions;
export default settingSlice.reducer;