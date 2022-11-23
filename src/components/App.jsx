import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './Navbar';
import Form from './Form';
import Table from './Table';
import Edit from './Edit';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Form />} />
        <Route path='/table' element={<Table />} />
        <Route path='/edit' element={<Edit />} />
      </Routes>
    </Router>
  );
}

export default App;
