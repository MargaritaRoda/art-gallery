import { useEffect, useState } from 'react';
import { useParams } from 'react-router';

export const useIdPictureInNumber = () => {
  const [idNumber, setIdNumber] = useState(1);
  const { id } = useParams();

  useEffect(() => {
    if (!id) {
      setIdNumber(1);
    }
    if (typeof id === 'string') {
      setIdNumber(parseInt(id, 10));
    }
  }, []);
  return idNumber;
};
