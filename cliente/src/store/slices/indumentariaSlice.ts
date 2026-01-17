import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Producto } from '@/types';

interface CarritoItem extends Producto {
  cantidad: number;
  talleSeleccionado: string;
}

interface IndumentariaState {
  productos: Producto[];
  productosDestacados: Producto[];
  carrito: CarritoItem[];
  categoriaFiltro: string | null;
  loading: boolean;
}

const initialState: IndumentariaState = {
  productos: [],
  productosDestacados: [],
  carrito: [],
  categoriaFiltro: null,
  loading: false,
};

const indumentariaSlice = createSlice({
  name: 'indumentaria',
  initialState,
  reducers: {
    setProductos: (state, action: PayloadAction<Producto[]>) => {
      state.productos = action.payload;
      state.productosDestacados = action.payload.filter(p => p.destacado);
    },
    agregarAlCarrito: (state, action: PayloadAction<CarritoItem>) => {
      const itemExistente = state.carrito.find(
        item => item.id === action.payload.id && item.talleSeleccionado === action.payload.talleSeleccionado
      );
      if (itemExistente) {
        itemExistente.cantidad += action.payload.cantidad;
      } else {
        state.carrito.push(action.payload);
      }
    },
    removerDelCarrito: (state, action: PayloadAction<{ id: string; talle: string }>) => {
      state.carrito = state.carrito.filter(
        item => !(item.id === action.payload.id && item.talleSeleccionado === action.payload.talle)
      );
    },
    actualizarCantidad: (state, action: PayloadAction<{ id: string; talle: string; cantidad: number }>) => {
      const item = state.carrito.find(
        item => item.id === action.payload.id && item.talleSeleccionado === action.payload.talle
      );
      if (item) {
        item.cantidad = action.payload.cantidad;
      }
    },
    limpiarCarrito: (state) => {
      state.carrito = [];
    },
    setCategoriaFiltro: (state, action: PayloadAction<string | null>) => {
      state.categoriaFiltro = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
  },
});

export const { 
  setProductos, 
  agregarAlCarrito, 
  removerDelCarrito, 
  actualizarCantidad,
  limpiarCarrito,
  setCategoriaFiltro,
  setLoading 
} = indumentariaSlice.actions;
export default indumentariaSlice.reducer;
