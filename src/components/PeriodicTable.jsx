import React, { useState } from 'react';
import elements from '../elements.json';
import Element from './Element';
import SeriesState from './SeriesState';

const PeriodicTable = ({ handleChangeActiveElm, activeId }) => {
  const [click, setClick] = useState(false);
  const [activeSeries, setActiveSeries] = useState(null);
  const [activeState, setActiveState] = useState(null);
  return (
    <>
      <ul className="grid flex-1 p-[5px]  grid-cols-18 w-[800px] auto-rows-50 gap-[2px] mt-2">
        <div className="row-start-1 col-start-1 col-span-full"></div>
        {elements.map((e) => (
          <Element
            activeSeries={activeSeries}
            activeState={activeState}
            active={activeId === e.atomicNumber}
            click={click}
            setClick={setClick}
            key={e.atomicNumber}
            element={e}
            handleChangeActiveElm={handleChangeActiveElm}
          />
        ))}

        <SeriesState
          setActiveSeries={setActiveSeries}
          activeSeries={activeSeries}
          setActiveState={setActiveState}
          activeState={activeState}
        />
      </ul>
    </>
  );
};

export default PeriodicTable;
