import { configureStore } from '@reduxjs/toolkit';
import appReducer from './slices/appSlice';
import sociosReducer from './slices/sociosSlice';
import noticiasReducer from './slices/noticiasSlice';
import partidosReducer from './slices/partidosSlice';
import torneosReducer from './slices/torneosSlice';
import indumentariaReducer from './slices/indumentariaSlice';
import uiReducer from './slices/uiSlice';

export const store = configureStore({
  reducer: {
    app: appReducer,
    socios: sociosReducer,
    noticias: noticiasReducer,
    partidos: partidosReducer,
    torneos: torneosReducer,
    indumentaria: indumentariaReducer,
    ui: uiReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
