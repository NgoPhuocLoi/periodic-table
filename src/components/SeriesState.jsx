import React from 'react';
const seriesList = [
  {
    title: 'Metalloids',
    verticalWriting: true,
    name: 'metalloid',
    colStart: 7,
    colSpan: 1,
    rowStart: 1,
    rowSpan: 6,
  },
  {
    title: 'Alkali metal',
    verticalWriting: true,
    name: 'alkali metal',
    colStart: 1,
    colSpan: 1,
    rowStart: 2,
    rowSpan: 4,
  },
  {
    title: 'Alkaline earth metal',
    verticalWriting: true,
    name: 'alkaline earth metal',
    colStart: 2,
    colSpan: 1,
    rowStart: 2,
    rowSpan: 4,
  },
  {
    title: 'Lanthanoids',
    verticalWriting: false,
    name: 'lanthanoid',
    colStart: 3,
    colSpan: 2,
    rowStart: 2,
    rowSpan: 2,
  },
  {
    title: 'Actinoids',
    verticalWriting: false,
    name: 'actinoid',
    colStart: 3,
    colSpan: 2,
    rowStart: 4,
    rowSpan: 2,
  },
  {
    title: 'Transition metal',
    verticalWriting: true,
    name: 'transition metal',
    colStart: 5,
    colSpan: 1,
    rowStart: 2,
    rowSpan: 4,
  },
  {
    title: 'Post-transition metals',
    verticalWriting: true,
    name: 'post-transition metals',
    colStart: 6,
    colSpan: 1,
    rowStart: 2,
    rowSpan: 4,
  },
  {
    title: 'Reactive nonmetals',
    verticalWriting: true,
    name: 'nonmetal',
    colStart: 8,
    colSpan: 1,
    rowStart: 2,
    rowSpan: 4,
  },
  {
    title: 'Noble gases',
    verticalWriting: true,
    name: 'noble gas',
    colStart: 9,
    colSpan: 1,
    rowStart: 2,
    rowSpan: 4,
  },
];

const SeriesState = ({
  setActiveSeries,
  activeSeries,
  setActiveState,
  activeState,
}) => {
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
  const handleChangeSeries = (e) => {
    setActiveSeries(e.target.dataset.series);
  };

  const handleChangeState = (e) => {
    setActiveState(e.target.innerText);
  };

  return (
    <div className="col-start-3  col-end-13 row-start-1 row-end-4 flex px-[24px] mt-3 justify-between">
      <ul className="state-of-matter text-[#fff] cursor-pointer">
        <li
          onMouseEnter={handleChangeState}
          onMouseLeave={() => setActiveState(null)}
          className={'bg-solid cursor-pointer'}
        >
          Solid
        </li>
        <li
          onMouseEnter={handleChangeState}
          onMouseLeave={() => setActiveState(null)}
          className={'bg-liquid cursor-pointer'}
        >
          Liquid
        </li>
        <li
          onMouseEnter={handleChangeState}
          onMouseLeave={() => setActiveState(null)}
          className={'bg-gas cursor-pointer'}
        >
          Gas
        </li>
        <li
          onMouseEnter={handleChangeState}
          onMouseLeave={() => setActiveState(null)}
          className={'bg-unknown cursor-pointer'}
        >
          Unknown
        </li>
      </ul>

      <ul className="grid grid-cols-9 grid-rows-5 series gap-[2px]">
        <li className="col-start-1 col-span-6 py-2 bg-[#ccc] title flex items-center font-semibold justify-center px-[10px] leading-none text-center">
          Metals
        </li>

        <li className="col-start-8 col-span-2  row-start-1 title bg-[#ccc] px-[8px] py-[2px] font-semibold flex items-center justify-center leading-none text-center">
          Nonmetals
        </li>

        {seriesList.map((element, index) => (
          <li
            key={index}
            data-series={element.name}
            onClick={() => console.log(123)}
            onMouseEnter={handleChangeSeries}
            onMouseLeave={() => setActiveSeries(null)}
            style={{
              gridRow: `${element.rowStart} / ${
                element.rowSpan + element.rowStart
              }`,
            }}
            className={`duration-300 col-start-${element.colStart} col-span-${
              element.colSpan
            } title font-semibold ${
              element.verticalWriting && 'vertical-writing'
            }
            bg-${getColor(element.name)}
            ${
              (element.title === 'Lanthanoids' ||
                element.title === 'Actinoids') &&
              'flex items-center justify-center'
            }
            `}
          >
            {element.title}
          </li>
        ))}
        {/* <li
          data-series="metalloid"
          onMouseEnter={handleChangeSeries}
          onMouseLeave={() => setActiveSeries(null)}
          className={`col-start-7 row-start-1 row-end-4 title font-semibold vertical-writing bg-metalloid`}
        >
          Metalloids
        </li>
        <li
          data-series="alkali metal"
          onMouseEnter={handleChangeSeries}
          onMouseLeave={() => setActiveSeries(null)}
          className="vertical-writing row-start-2 row-span-2 bg-alkali"
        >
          Alkali metal
        </li>
        <li
          data-series="alkaline earth metal"
          onMouseEnter={handleChangeSeries}
          onMouseLeave={() => setActiveSeries(null)}
          className=" vertical-writing row-start-2 row-span-2 bg-alkaline"
        >
          Alkaline earth metal
        </li>
        <li
          data-series="lanthanoid"
          onMouseEnter={handleChangeSeries}
          onMouseLeave={() => setActiveSeries(null)}
          className="col-span-2 row-start-2 text-center flex items-center justify-center bg-lanthanoid"
        >
          Lanthanoids
        </li>
        <li
          data-series="actinoid"
          onMouseEnter={handleChangeSeries}
          onMouseLeave={() => setActiveSeries(null)}
          className="col-span-2 col-start-3 text-center flex items-center justify-center bg-actinoid"
        >
          Actinoids
        </li>
        <li
          data-series="transition metal"
          onMouseEnter={handleChangeSeries}
          onMouseLeave={() => setActiveSeries(null)}
          className="row-start-2 col-start-5 row-span-2 vertical-writing bg-transition"
        >
          Transition metal
        </li>
        <li
          data-series="post-transition metals"
          onMouseEnter={handleChangeSeries}
          onMouseLeave={() => setActiveSeries(null)}
          className="col-start-6 row-start-2 row-span-2 vertical-writing bg-poor"
        >
          Post-transition metals
        </li>

        <li
          data-series="nonmetal"
          onMouseEnter={handleChangeSeries}
          onMouseLeave={() => setActiveSeries(null)}
          className="col-start-8 row-start-2 vertical-writing row-span-2 bg-nonmetal"
        >
          Reactive nonmetals
        </li>
        <li
          data-series="noble gas"
          onMouseEnter={handleChangeSeries}
          onMouseLeave={() => setActiveSeries(null)}
          className="col-start-9 row-start-2 vertical-writing row-span-2 bg-noble"
        >
          Noble gases
        </li> */}
      </ul>
    </div>
  );
};

export default SeriesState;
