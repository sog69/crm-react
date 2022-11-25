import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './Navbar';
import Home from './Home';
import Create from './Create';
import Requests from './Requests';
import Edit from './Edit';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/create' element={<Create />} />
        <Route path='/requests' element={<Requests />} />
        <Route path='/edit' element={<Edit />} />
      </Routes>
    </Router>
  );
}

export default App;
