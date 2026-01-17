import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Torneo, CategoriaFutbol } from '@/types';

interface TorneosState {
  torneos: Torneo[];
  categoriaActiva: CategoriaFutbol | 'todos';
  torneoSeleccionado: Torneo | null;
  loading: boolean;
}

const initialState: TorneosState = {
  torneos: [],
  categoriaActiva: 'todos',
  torneoSeleccionado: null,
  loading: false,
};

const torneosSlice = createSlice({
  name: 'torneos',
  initialState,
  reducers: {
    setTorneos: (state, action: PayloadAction<Torneo[]>) => {
      state.torneos = action.payload;
    },
    setCategoriaActiva: (state, action: PayloadAction<CategoriaFutbol | 'todos'>) => {
      state.categoriaActiva = action.payload;
    },
    setTorneoSeleccionado: (state, action: PayloadAction<Torneo | null>) => {
      state.torneoSeleccionado = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
  },
});

export const { 
  setTorneos, 
  setCategoriaActiva, 
  setTorneoSeleccionado,
  setLoading 
} = torneosSlice.actions;
export default torneosSlice.reducer;
