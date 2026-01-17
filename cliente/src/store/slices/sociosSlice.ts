import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Socio, CuotaSocial } from '@/types';

interface SociosState {
  currentSocio: Socio | null;
  isAuthenticated: boolean;
  cuotas: CuotaSocial[];
  loading: boolean;
}

const initialState: SociosState = {
  currentSocio: null,
  isAuthenticated: false,
  cuotas: [],
  loading: false,
};

const sociosSlice = createSlice({
  name: 'socios',
  initialState,
  reducers: {
    login: (state, action: PayloadAction<Socio>) => {
      state.currentSocio = action.payload;
      state.isAuthenticated = true;
    },
    logout: (state) => {
      state.currentSocio = null;
      state.isAuthenticated = false;
      state.cuotas = [];
    },
    setCuotas: (state, action: PayloadAction<CuotaSocial[]>) => {
      state.cuotas = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
  },
});

export const { login, logout, setCuotas, setLoading } = sociosSlice.actions;
export default sociosSlice.reducer;
