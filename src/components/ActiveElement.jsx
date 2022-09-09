import React from 'react';

const ActiveElement = ({ element }) => {
  const renderValue = (value) => {
    if (value == 'unknown') return 'N/A';
    if (typeof value == 'object') return value[0];
    if (typeof value == 'string')
      return value
        .replace('(', '')
        .replace(')', '')
        .slice(0, value.indexOf('.') + 3);
    return value;
  };

  const getBorderColor = (series) => {
    const colors = {
      'alkali metal': 'border-alkali',
      'alkaline earth metal': 'border-alkaline',
      lanthanoid: 'border-lanthanoid',
      actinoid: 'border-actinoid',
      'transition metal': 'border-transition',
      metalloid: 'border-metalloid',
      nonmetal: 'border-nonmetal',
      halogen: 'border-nonmetal',
      'noble gas': 'border-noble',
      'post-transition metals': 'border-poor',
      'N/A': 'border-[#eee]',
    };

    return colors[series];
  };

  const getColor = (series) => {
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

    return colors[series];
  };

  return (
    <div className="w-[300px] p-4 mt-4 ">
      <div
        className={`max-w-[140px] ${getBorderColor(
          element.groupBlock,
        )} mx-auto max-h-[160px] p-[6px] flex flex-col elementShadow bg-${getColor(
          element.groupBlock,
        )} border-[6px] `}
      >
        <div className="flex justify-between items-center">
          <span className="text-[30px] leading-none">
            {element.atomicNumber}
          </span>
          <span className="text-[20px] leading-none">
            {renderValue(element.atomicMass)}
          </span>
        </div>
        <b className="text-[36px] leading-[1.1]">{element.symbol}</b>
        <span className="text-[20px] leading-[1.1]">{element.name}</span>
        <p className="text-[14px]">{element.electronicConfiguration}</p>
      </div>

      <ul className="infoList p-2 shadow-lg mt-4 border-2 rounded-lg border-gray-100">
        <li>
          <span>Series</span>
          <span>{element.groupBlock}</span>
        </li>
        <li>
          <span>Write-up</span>
          <span>{element.name}</span>
        </li>

        <li>
          <span>Weight</span>
          <span>{renderValue(element.atomicMass)}</span>
        </li>
        <li>
          <span>Electronegativity</span>
          <span>{renderValue(element.electronegativity)}</span>
        </li>
        <li>
          <span>Melting point</span>
          <span>{renderValue(element.meltingPoint)}</span>
        </li>
        <li>
          <span>Boiling point</span>
          <span>{renderValue(element.boilingPoint)}</span>
        </li>
        <li>
          <span>Radius</span>
          <span>{renderValue(element.vanDerWaalsRadius)}</span>
        </li>
        <li>
          <span>Atomic radius</span>
          <span>{renderValue(element.atomicRadius)}</span>
        </li>
        <li>
          <span>Ionization energy</span>
          <span>{renderValue(element.ionizationEnergy)}</span>
        </li>
        <li>
          <span>Oxidation states</span>
          <span>{renderValue(element.oxidationStates)}</span>
        </li>
        <li>
          <span>Density</span>
          <span>{renderValue(element.density)}</span>
        </li>
      </ul>
    </div>
  );
};

export default ActiveElement;
