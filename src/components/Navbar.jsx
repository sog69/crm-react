import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className='project-nav'>
      <div className='project-nav__links-wrapper'>
        <Link to='/create'>Форма добавления заявок</Link>
        <Link to='/requests'>Таблица с заявками</Link>
        {/* <Link to='/edit'>Edit</Link> */}
      </div>
    </nav>
  );
};

export default Navbar;
