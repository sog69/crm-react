import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className='navBar'>
      <div className='links'>
        <Link to='/'>Form</Link>
        <Link to='/table'>Table</Link>
        {/* <Link to='/edit'>Edit</Link> */}
      </div>
    </nav>
  );
};

export default Navbar;
