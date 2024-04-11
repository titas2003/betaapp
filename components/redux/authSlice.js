// authSlice.js
import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isAuthenticated: false,
    user: null,
    loading: false,
    error: null,
  },
  reducers: {
    registrationStart(state) {
      state.loading = true;
      state.error = null;
    },
    registrationSuccess(state, action) {
      state.isAuthenticated = true;
      state.user = action.payload;
      state.loading = false;
      state.error = null;
    },
    registrationFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { registrationStart, registrationSuccess, registrationFailure } = authSlice.actions;

export default authSlice.reducer;

export const registerUser = (userData) => async (dispatch) => {
  dispatch(registrationStart());
  try {
    const response = await fetch('http://34.140.42.95:3000/api/users/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });

    if (!response.ok) {
      throw new Error('Registration failed');
    }

    const data = await response.json();
    dispatch(registrationSuccess(data));
  } catch (error) {
    dispatch(registrationFailure(error.message));
  }
};
