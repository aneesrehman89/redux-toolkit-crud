import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';


export const createUser = createAsyncThunk(
  'createUser',
  async (data, { rejectWithValue }) => {
    const response = await fetch(
      'https://671a45c5acf9aa94f6a9f663.mockapi.io/crud',
      {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify(data),
      }
    );
    try {
      const result = await response.json();
      return result;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

// Show user
export const showUser = createAsyncThunk('showUser', async (_, { rejectWithValue })=>{
   const response = await fetch("https://671a45c5acf9aa94f6a9f663.mockapi.io/crud")
   try {
         const result  = await response.json();
         return result;
   } 
   catch (error) {
     return rejectWithValue(error)
   }
})
// delete user
export const deleteUser = createAsyncThunk('deleteUser', async (id, { rejectWithValue })=>{
   const response = await fetch(`https://671a45c5acf9aa94f6a9f663.mockapi.io/crud/${id}`,  { method: "DELETE" })
   try { 
         const result  = await response.json();
         return result;
   } 
   catch (error) { 
     return rejectWithValue(error)
   }
})
// update user
export const Update = createAsyncThunk(
  'Update',
  async (data, { rejectWithValue }) => {
    console.log(data)
    const response = await fetch(
      `https://671a45c5acf9aa94f6a9f663.mockapi.io/crud/${data.id}`,
      {
        method: 'PUT',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify(data),
      }
    );
    try {
      const result = await response.json();
      return result;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const userDetail = createSlice({
  name: 'userDetail',
  initialState: {
    user: [],
    loading: false,
    error: null,
    searchData:[],
  },
  
reducers : {
  searchUser: (state,action) =>{
        state.searchData = action.payload
  }
},
  extraReducers:  (builder) => {     //promise
    builder.addCase(createUser.pending, (state) =>{
      state.loading = true;
    })
    .addCase(createUser.fulfilled, (state, action) =>{
      state.loading = false;
      state.user.push(action.payload) // data received/push in mockapi server
    })
    .addCase(createUser.rejected, (state, action) =>{
      state.loading = false;
      state.error = action.payload
    })
    .addCase(showUser.pending, (state) =>{
      state.loading = true;
    })
    .addCase(showUser.fulfilled, (state, action) =>{
      state.loading = false;
      state.user = action.payload 
    })
    .addCase(showUser.rejected, (state, action) =>{
      state.loading = false;
      state.error = action.payload
    })
    .addCase(deleteUser.pending, (state) =>{
      state.loading = true;
    })
    .addCase(deleteUser.fulfilled, (state, action) =>{
      state.loading = false;
      const {id} = action.payload
      if(id){
               state.user = state.user.filter((ele)=> ele.id != id);
               console.log(state.user)
      }
    })
    .addCase(deleteUser.rejected, (state, action) =>{
      state.loading = false;
      state.error = action.payload
    })
   .addCase(Update.pending, (state) =>{
      state.loading = true;
    })
    .addCase(Update.fulfilled, (state, action) =>{
      state.loading = false;
      state.user = state.user.map((ele)=> ele.id === action.payload.id ? action.payload : ele )
    })
    .addCase(Update.rejected, (state, action) =>{
      state.loading = false;
      state.error = action.payload
    })
  },
});

export default userDetail.reducer;

export const {searchUser} = userDetail.actions
