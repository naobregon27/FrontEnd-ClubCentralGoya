import { Historia } from '@/types';

export const mockHistoria: Historia[] = [
  {
    id: '1',
    año: 1923,
    titulo: 'Fundación del Club',
    descripcion: 'El Club Atlético Central Goya fue fundado el 15 de marzo de 1923 por un grupo de jóvenes apasionados por el fútbol.',
    imagen: '/images/historia/fundacion.jpg',
    logros: ['Fundación del club'],
  },
  {
    id: '2',
    año: 1945,
    titulo: 'Primer Título Regional',
    descripcion: 'Central Goya obtuvo su primer título en el campeonato regional, marcando un hito en la historia del club.',
    imagen: '/images/historia/titulo-1945.jpg',
    logros: ['Campeón Regional 1945'],
  },
  {
    id: '3',
    año: 1978,
    titulo: 'Construcción del Estadio',
    descripcion: 'Se inauguró el estadio principal del club, que se convertiría en la casa de Central Goya.',
    imagen: '/images/historia/estadio.jpg',
    logros: ['Inauguración del estadio'],
  },
  {
    id: '4',
    año: 2000,
    titulo: 'Centenario del Fútbol Femenino',
    descripcion: 'Se creó la primera división femenina del club, abriendo nuevas oportunidades para las mujeres del fútbol local.',
    imagen: '/images/historia/femenino.jpg',
    logros: ['Creación del fútbol femenino'],
  },
  {
    id: '5',
    año: 2023,
    titulo: 'Centenario del Club',
    descripcion: 'El club celebró sus 100 años de historia con grandes festejos y reconocimientos.',
    imagen: '/images/historia/centenario.jpg',
    logros: ['Celebración del Centenario', 'Reconocimiento de la Liga'],
  },
];
