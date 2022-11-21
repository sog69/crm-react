import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './Navbar';
import Form from './Form';
import Table from './Table';
import Edit from './Edit';

function App() {
  return (
    <Router>
      <div className='app'>
        <Navbar />
        <main className='main'>
          <Routes>
            <Route
              path='/'
              element={<Form />}
            />
            <Route
              path='/table'
              element={<Table />}
            />
            {/* <Route
              path='/edit'
              element={<Edit />}
            /> */}
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
