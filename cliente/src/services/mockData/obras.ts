import { Obra } from '@/types';

export const mockObras: Obra[] = [
  {
    id: '1',
    titulo: 'Nuevo Vestuario Principal',
    descripcion: 'Construcción de un nuevo vestuario con todas las comodidades para el plantel de Primera División.',
    imagen: '/WhatsApp Image 2026-01-17 at 13.08.52.jpeg',
    imagenes: ['/WhatsApp Image 2026-01-17 at 13.08.52.jpeg', '/WhatsApp Image 2026-01-17 at 13.08.52 (2).jpeg'],
    estado: 'enCurso',
    fechaInicio: '2023-11-01',
    fechaFin: '2024-03-31',
    presupuesto: 5000000,
    avance: 60,
  },
  {
    id: '2',
    titulo: 'Mejora de Iluminación del Estadio',
    descripcion: 'Instalación de nuevas luminarias LED para mejorar la iluminación del campo de juego.',
    imagen: '/cancha-matienzo-goya4-640x360.jpg',
    imagenes: ['/cancha-matienzo-goya4-640x360.jpg'],
    estado: 'finalizada',
    fechaInicio: '2023-09-01',
    fechaFin: '2023-12-15',
    presupuesto: 2000000,
    avance: 100,
  },
  {
    id: '3',
    titulo: 'Ampliación de Tribunas',
    descripcion: 'Ampliación de la tribuna principal para aumentar la capacidad del estadio.',
    imagen: '/WhatsApp Image 2026-01-17 at 13.08.52 (2).jpeg',
    imagenes: ['/WhatsApp Image 2026-01-17 at 13.08.52.jpeg', '/WhatsApp Image 2026-01-17 at 13.08.52 (2).jpeg'],
    estado: 'planificada',
    presupuesto: 8000000,
  },
];
