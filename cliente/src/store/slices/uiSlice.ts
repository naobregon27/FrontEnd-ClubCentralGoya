import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UiState {
  theme: 'dark' | 'light';
  sidebarOpen: boolean;
  modalAbierto: string | null;
  loading: boolean;
  menuMobileOpen: boolean;
}

const initialState: UiState = {
  theme: 'dark',
  sidebarOpen: false,
  modalAbierto: null,
  loading: false,
  menuMobileOpen: false,
};

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.theme = state.theme === 'dark' ? 'light' : 'dark';
    },
    setTheme: (state, action: PayloadAction<'dark' | 'light'>) => {
      state.theme = action.payload;
    },
    toggleSidebar: (state) => {
      state.sidebarOpen = !state.sidebarOpen;
    },
    setSidebarOpen: (state, action: PayloadAction<boolean>) => {
      state.sidebarOpen = action.payload;
    },
    abrirModal: (state, action: PayloadAction<string>) => {
      state.modalAbierto = action.payload;
    },
    cerrarModal: (state) => {
      state.modalAbierto = null;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    toggleMenuMobile: (state) => {
      state.menuMobileOpen = !state.menuMobileOpen;
    },
    setMenuMobileOpen: (state, action: PayloadAction<boolean>) => {
      state.menuMobileOpen = action.payload;
    },
  },
});

export const { 
  toggleTheme, 
  setTheme, 
  toggleSidebar, 
  setSidebarOpen,
  abrirModal,
  cerrarModal,
  setLoading,
  toggleMenuMobile,
  setMenuMobileOpen
} = uiSlice.actions;
export default uiSlice.reducer;
