import { useEffect, useState } from 'react';
import ActiveElement from './components/ActiveElement';
import PeriodicTable from './components/PeriodicTable';
import elements from './elements.json';

function App() {
  const [activeId, setActiveId] = useState(1);

  return (
    <div className="App flex">
      <ActiveElement
        element={elements.find((e) => e.atomicNumber === activeId)}
      />
      <PeriodicTable handleChangeActiveElm={setActiveId} activeId={activeId} />
    </div>
  );
}

export default App;
