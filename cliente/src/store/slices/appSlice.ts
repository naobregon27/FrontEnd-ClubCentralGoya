import { createSlice } from '@reduxjs/toolkit';

interface AppState {
  message: string;
  clubName: string;
}

const initialState: AppState = {
  message: 'Club Atlético Central Goya',
  clubName: 'Central Goya',
};

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    // Aquí puedes agregar tus acciones cuando las necesites
  },
});

export default appSlice.reducer;
