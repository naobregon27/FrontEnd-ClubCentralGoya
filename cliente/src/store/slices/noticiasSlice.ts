import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Noticia } from '@/types';

interface NoticiasState {
  noticias: Noticia[];
  noticiaSeleccionada: Noticia | null;
  filtroCategoria: string | null;
  filtroTag: string | null;
  loading: boolean;
}

const initialState: NoticiasState = {
  noticias: [],
  noticiaSeleccionada: null,
  filtroCategoria: null,
  filtroTag: null,
  loading: false,
};

const noticiasSlice = createSlice({
  name: 'noticias',
  initialState,
  reducers: {
    setNoticias: (state, action: PayloadAction<Noticia[]>) => {
      state.noticias = action.payload;
    },
    setNoticiaSeleccionada: (state, action: PayloadAction<Noticia | null>) => {
      state.noticiaSeleccionada = action.payload;
    },
    setFiltroCategoria: (state, action: PayloadAction<string | null>) => {
      state.filtroCategoria = action.payload;
    },
    setFiltroTag: (state, action: PayloadAction<string | null>) => {
      state.filtroTag = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
  },
});

export const { 
  setNoticias, 
  setNoticiaSeleccionada, 
  setFiltroCategoria, 
  setFiltroTag,
  setLoading 
} = noticiasSlice.actions;
export default noticiasSlice.reducer;
