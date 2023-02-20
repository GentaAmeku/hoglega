import { useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { sortBy } from 'lodash';
import { getEnemies } from '@/domains';
import { QUERY_KEY, SORT_STATUS } from '../data';
import useLocalStorage from '@/hooks/useLocalStorage';

const getSortFunc = (status) => {
  if (status === SORT_STATUS.acquired)
    return [
      function (o) {
        return !o.isChecked;
      },
    ];
  if (status === SORT_STATUS.unacquired)
    return [
      function (o) {
        return o.isChecked;
      },
    ];
  if (status === SORT_STATUS.default)
    return [
      function (o) {
        return +o.id;
      },
    ];
};

export const useEnemyList = () => {
  const [enemies, setEnemies] = useLocalStorage('enemies', []);
  const [status, setSortStatus] = useState(SORT_STATUS.default);
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
  const onChangeSort = (status) => {
    const sorted = sortBy(enemies, getSortFunc(status));
    setSortStatus(status);
    setEnemies(sorted);
  };

  useEffect(() => {
    if (data) setEnemies(data);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  return { data: enemies, isFetching, onChange, status, onChangeSort };
};

export default useEnemyList;
