// import { createSlice } from '@reduxjs/toolkit';

// export const dashboardSlice = createSlice({
//   name: 'dashboard',
//   initialState: {
//     userData: null,
//   },
//   reducers: {
//     setUserData: (state, action) => {
//       state.userData = action.payload;
//     },
//   },
// });

// export const { setUserData } = dashboardSlice.actions;

// export const selectUserData = (state) => state.dashboard.userData;

// export default dashboardSlice.reducer;


// dashboardSlice.js

import { createSlice } from '@reduxjs/toolkit';

export const dashboardSlice = createSlice({
  name: 'dashboard',
  initialState: {
    userData: null,
  },
  reducers: {
    setUserData: (state, action) => {
      state.userData = action.payload;
    },
  },
});

export const { setUserData } = dashboardSlice.actions;

export const selectUserData = (state) => state.dashboard.userData;

export default dashboardSlice.reducer;
