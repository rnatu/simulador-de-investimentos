import { useContext } from 'react';
import { ResultContext } from '../contexts/ResultContext';

export function useResult() {
  const value = useContext(ResultContext);

  return value;
}
