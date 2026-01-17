import { useEffect } from 'react';
import { useAppDispatch } from '@/store/hooks';
import { setCategoriaActiva } from '@/store/slices/partidosSlice';

const FutbolVeterano = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setCategoriaActiva('veterano'));
  }, [dispatch]);

  return (
    <div className="min-h-screen bg-club-black py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="section-title">Fútbol Veterano</h1>
          <p className="section-subtitle">La pasión nunca se apaga</p>
        </div>
      </div>
    </div>
  );
};

export default FutbolVeterano;
