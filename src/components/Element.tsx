import React, { useState } from 'react';
import audio from '../assets/speech';

const Element = ({
  element,
  handleChangeActiveElm,
  click,
  setClick,
  active,
  activeSeries,
  activeState,
}) => {
  const renderValue = (value) => {
    if (value == 'unknown') return 'N/A';
    if (typeof value == 'string')
      return value
        .replace('(', '')
        .replace(')', '')
        .slice(0, value.indexOf('.') + 3);
    return value;
  };

  const getColor = (series) => {
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

  const getState = (id) => {
    if (id >= 104 && id <= 118) return 'Unknown';
    else if (id == 35 || id == 80) return 'Liquid';
    else if ([1, 2, 7, 8, 9, 10, 17, 18, 36, 54, 86].includes(id)) return 'Gas';
    else return 'Solid';
  };

  const handleClick = () => {
    handleChangeActiveElm(element.atomicNumber);
    const speech = new Audio(audio[element.name]);
    if (speech) speech.play();
    setClick(true);
  };
  const handleMouseEnter = () => {
    if (click) return;
    handleChangeActiveElm(element.atomicNumber);
  };

  const renderLanAc = (id) => {
    if (id >= 58 && id <= 71) return `col-start-${-53 + id} row-start-10`;
    else if (id >= 90 && id <= 103) return `col-start-${-85 + id} row-start-11`;
    else return '';
  };
  return (
    <div
      onMouseEnter={handleMouseEnter}
      onClick={handleClick}
      className={` p-[2px] cursor-pointer duration-300 flex flex-col border border-[#ccc] bg-${getColor(
        element.groupBlock,
      )} ${element.atomicNumber == 2 && 'col-start-18 '} 
        ${renderLanAc(element.atomicNumber)} 
        ${
          (element.atomicNumber == 5 || element.atomicNumber == 13) &&
          'col-start-13'
        }           
        ${active && 'activeElement'}  
        ${
          activeState === getState(element.atomicNumber) &&
          `active-state-${activeState}`
        }      
                `}
    >
      <span className="text-[9px] leading-none">{element.atomicNumber}</span>
      <h6 title="" className="text-[14px] leading-[1.2] font-semibold">
        {element.symbol}
      </h6>
      <span className="text-[8px] leading-[1.2]">{element.name}</span>
      <span className="text-[9px] leading-none">
        {renderValue(element.atomicMass)}
      </span>
    </div>
  );
};

export default Element;
