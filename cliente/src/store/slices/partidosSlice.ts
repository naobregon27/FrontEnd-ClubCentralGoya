import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Partido, CategoriaFutbol } from '@/types';

interface PartidosState {
  partidos: Partido[];
  categoriaActiva: CategoriaFutbol | 'todos';
  proximosPartidos: Partido[];
  partidosEnVivo: Partido[];
  loading: boolean;
}

const initialState: PartidosState = {
  partidos: [],
  categoriaActiva: 'todos',
  proximosPartidos: [],
  partidosEnVivo: [],
  loading: false,
};

const partidosSlice = createSlice({
  name: 'partidos',
  initialState,
  reducers: {
    setPartidos: (state, action: PayloadAction<Partido[]>) => {
      state.partidos = action.payload;
    },
    setCategoriaActiva: (state, action: PayloadAction<CategoriaFutbol | 'todos'>) => {
      state.categoriaActiva = action.payload;
    },
    setProximosPartidos: (state, action: PayloadAction<Partido[]>) => {
      state.proximosPartidos = action.payload;
    },
    setPartidosEnVivo: (state, action: PayloadAction<Partido[]>) => {
      state.partidosEnVivo = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
  },
});

export const { 
  setPartidos, 
  setCategoriaActiva, 
  setProximosPartidos, 
  setPartidosEnVivo,
  setLoading 
} = partidosSlice.actions;
export default partidosSlice.reducer;
