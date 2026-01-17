import { useEffect } from 'react';
import { useAppDispatch } from '@/store/hooks';
import { setCategoriaActiva } from '@/store/slices/partidosSlice';

const FutbolInfantil = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setCategoriaActiva('infantil'));
  }, [dispatch]);

  return (
    <div className="min-h-screen bg-club-black py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="section-title">Fútbol Infantil</h1>
          <p className="section-subtitle">Formando valores desde pequeños</p>
        </div>
      </div>
    </div>
  );
};

export default FutbolInfantil;
