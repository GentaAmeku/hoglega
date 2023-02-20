export const getEnemies = async () => {
  const data = await import('@/data/enemies');
  return data?.enemies || [];
};
