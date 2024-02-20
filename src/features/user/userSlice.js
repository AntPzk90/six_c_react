import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {loginUser, checkLoginUser} from '../../api/api';

const initialState = {
  user: {},
  isAuth: false,
  status: 'loading',
  error: null,
};

export const getUsersAsync = createAsyncThunk(
  'user/fetchUser',
  async (postData) => {
    const response = await loginUser(postData.url, postData.data);
    console.log(response);
    return response;
  }
);

export const checkUsersAsync = createAsyncThunk(
  'user/checkUser',
  async (url) => {
    const response = await checkLoginUser(url);
    return response;
  }
);

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    getUserFromLocalStorage: (state, action) => {
      state.user = action.payload;
      state.isAuth = true;
    },
    changeUserAuth: (state, action) => {
      state.isAuth = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getUsersAsync.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(getUsersAsync.fulfilled, (state, action) => {
        state.user = action.payload;
        state.status = 'idle';
        state.isAuth = true;
        state.error = null;
      })
      .addCase(getUsersAsync.rejected, (state, action) => {
        state.status = 'idle';
        state.isAuth = false;
        state.error = action.error;
      })
      .addCase(checkUsersAsync.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(checkUsersAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.error = null;
      })
      .addCase(checkUsersAsync.rejected, (state, action) => {
        state.status = 'idle';
        state.error = action.error;
      });
  },
});

export const {getUserFromLocalStorage, changeUserAuth} = userSlice.actions;

export default userSlice.reducer;
