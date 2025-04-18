import { Routes, Route } from 'react-router-dom';
import HelloWorld from './comp/HelloWorld';
import Sidenav from './comp/sidenav';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={
          <>
            <Sidenav />
            <HelloWorld />
          </>
        } />
      </Routes>
    </div>
  );
}

export default App;
