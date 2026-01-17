// Tipos principales del Club Central Goya

export interface Socio {
  id: string;
  nombre: string;
  apellido: string;
  email: string;
  numeroSocio: string;
  fechaIngreso: string;
  estadoCuota: 'alDia' | 'vencida' | 'pendiente';
  beneficios: string[];
  qrCode?: string;
}

export interface Noticia {
  id: string;
  titulo: string;
  resumen: string;
  contenido: string;
  imagen: string;
  categoria: 'Primera' | 'Inferiores' | 'Femenino' | 'General' | 'Obras' | 'Social';
  fecha: string;
  autor: string;
  destacada: boolean;
  tags: string[];
}

export interface Partido {
  id: string;
  categoria: CategoriaFutbol;
  fecha: string;
  hora: string;
  local: string;
  visitante: string;
  resultado?: {
    golesLocal: number;
    golesVisitante: number;
  };
  estado: 'programado' | 'enVivo' | 'finalizado' | 'suspendido';
  cancha: string;
  torneo: string;
  jornada: number;
}

export type CategoriaFutbol = 
  | 'masculino' 
  | 'femenino' 
  | 'juvenil' 
  | 'infantil' 
  | 'veterano';

export interface Torneo {
  id: string;
  nombre: string;
  categoria: CategoriaFutbol;
  temporada: string;
  formato: string;
  equipos: number;
  fechaInicio: string;
  fechaFin: string;
  estado: 'inscripcion' | 'enCurso' | 'finalizado';
  tabla?: TablaPosiciones;
  calendario?: Partido[];
}

export interface TablaPosiciones {
  posicion: number;
  equipo: string;
  puntos: number;
  partidosJugados: number;
  ganados: number;
  empatados: number;
  perdidos: number;
  golesFavor: number;
  golesContra: number;
  diferenciaGol: number;
}

export interface Producto {
  id: string;
  nombre: string;
  descripcion: string;
  precio: number;
  imagen: string;
  categoria: 'camiseta' | 'short' | 'medias' | 'accesorios' | 'indumentaria';
  talles: string[];
  stock: number;
  destacado: boolean;
}

export interface Obra {
  id: string;
  titulo: string;
  descripcion: string;
  imagen: string;
  imagenes: string[];
  estado: 'planificada' | 'enCurso' | 'finalizada';
  fechaInicio?: string;
  fechaFin?: string;
  presupuesto?: number;
  avance?: number;
}

export interface EventoBarra {
  id: string;
  titulo: string;
  descripcion: string;
  fecha: string;
  hora: string;
  imagen?: string;
  capacidad?: number;
  requiereReserva: boolean;
}

export interface CuotaSocial {
  id: string;
  mes: string;
  año: number;
  monto: number;
  fechaVencimiento: string;
  estado: 'pagada' | 'vencida' | 'pendiente';
  metodoPago?: string;
  fechaPago?: string;
}

export interface Historia {
  id: string;
  año: number;
  titulo: string;
  descripcion: string;
  imagen?: string;
  logros?: string[];
}
