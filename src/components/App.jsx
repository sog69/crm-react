import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './Navbar';
import Form from './Form';
import Table from './Table';
import Edit from './Edit';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path='/' element={<Form />} />
          <Route path='/table' element={<Table />} />
          <Route path='/edit' element={<Edit />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
