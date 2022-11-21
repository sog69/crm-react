import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from '../Navigate';
import Form from '../Form';
import Table from '../Table';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <main>
          <Routes>
            <Route
              path='/'
              element={Form}
            />
            <Route
              path='/table'
              element={Table}
            />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
