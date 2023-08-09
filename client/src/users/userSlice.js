import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { API } from '../api/_api';

const initialState = {
  modalAdd: true,
  modalEdit: true,
  modalDelete: true,
  allUsers: [],
  activeId: null,
  render: null,
};

export const fetchUsers = createAsyncThunk('user/fetchusers', async () => {
  try {
    const res = API.get('get-all-contact');
    return res;
  } catch (error) {
    console.log(error);
    throw error;
  }
});

export const addContact = createAsyncThunk('user/addContact', async userData => {
  try {
    const res = await API.post('add-contact', userData);
    return res;
  } catch (error) {
    console.log(error);
    throw error;
  }
});
export const updateContact = createAsyncThunk('user/updateContact', async ({ userData, id }) => {
  try {
    const res = await API.patch(`update-contact/${id}`, userData);
    return res;
  } catch (error) {
    console.log(error);
    throw error;
  }
});
export const deleteContact = createAsyncThunk('user/deleteContact', async id => {
  try {
    const res = await API.delete(`delete-contact/${id}`);
    return res;
  } catch (error) {
    console.log(error);
    throw error;
  }
});

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    toggleModalAdd: state => {
      state.modalAdd = !state.modalAdd;
    },
    activeId: (state, action) => {
      state.activeId = action.payload;
    },
    toggleModalEdit: (state, action) => {
      state.modalEdit = !state.modalEdit;
      state.activeId = action.payload;
    },
    toggleModalDelete: (state, action) => {
      state.modalDelete = !state.modalDelete;
      state.activeId = action.payload;
    },
  },
  extraReducers: builder => {
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.allUsers = action.payload.data.data;
    });
    builder.addCase(addContact.fulfilled, (state, action) => {
      state.allUsers.push(action.payload.data.data);
      state.modalAdd = !state.modalAdd;
    });
    builder.addCase(updateContact.fulfilled, state => {
      state.modalEdit = !state.modalEdit;
    });
    builder.addCase(deleteContact.fulfilled, state => {
      state.modalDelete = !state.modalDelete;
    });
  },
});

export const { toggleModalAdd, toggleModalEdit, toggleModalDelete, allUsers, activeId } =
  userSlice.actions;

export default userSlice.reducer;
