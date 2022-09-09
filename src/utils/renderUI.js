export const getColor = (series) => {
  if (series === 'halogen') series = 'nonmetal';
  const colors = {
    'alkali metal': 'alkali',
    'alkaline earth metal': 'alkaline',
    lanthanoid: 'lanthanoid',
    actinoid: 'actinoid',
    'transition metal': 'transition',
    metalloid: 'metalloid',
    nonmetal: 'nonmetal',
    halogen: 'nonmetal',
    'noble gas': 'noble',
    'post-transition metals': 'poor',
    'N/A': '[#eee]',
  };

  return !activeSeries || activeSeries === series
    ? colors[series]
    : 'transparent';
};
