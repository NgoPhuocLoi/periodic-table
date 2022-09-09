<ul>
  <li
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
  </li>
</ul>;
