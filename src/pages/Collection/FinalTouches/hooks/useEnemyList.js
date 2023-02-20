import { useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { getEnemies } from '@/domains';
import { QUERY_KEY } from '../data';
import useLocalStorage from '@/hooks/useLocalStorage';

export const useEnemyList = (sort = 'id') => {
  const [enemies, setEnemies] = useLocalStorage('enemies', []);
  const { data, isFetching } = useQuery([QUERY_KEY], getEnemies, {
    enabled: enemies.length === 0,
    staleTime: Infinity,
  });
  const onChange = (e) => {
    const [id, checked] = [e.target.id, e.target.checked];
    setEnemies((d) =>
      d.map((enemy) =>
        enemy.id === id ? { ...enemy, isChecked: checked } : enemy
      )
    );
  };

  useEffect(() => {
    if (data) setEnemies(data);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  return { data: enemies, isFetching, onChange };
};

export default useEnemyList;
