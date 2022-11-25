import { Link } from 'react-router-dom';

const Requests = ({ requests }) => {
  document.body.classList.remove('radial-bg', 'flex-center');
  document.body.classList.add('body--dashboard');

  const markup = (
    <div>
      {/* Left panel */}
      <div className='left-panel blue-skin'>
        <div className='left-panel__logo'>
          <div className='left-panel__logo-title'>CRM заявки</div>
          <div className='left-panel__logo-subtitle'>учебный проект webcademy</div>
        </div>
        <div className='left-panel__user clearfix'>
          <div className='left-panel__user-photo'>
            <img src='img/avatars/avatar-128.jpg' alt='Avatar' />
          </div>
          <div className='left-panel__user-name'>
            Олег <br />
            Сапрыкин
          </div>
        </div>
        <div className='left-panel__navigation'>
          <div className='left-panel__navigation-title'>Заявки</div>
          <ul>
            <li>
              <a data-value='all' data-role='left-status' href='#' className='active'>
                Все вместе
              </a>
            </li>
            <li>
              <a data-value='new' data-role='left-status' href='#'>
                Новые
                <div className='badge' id='badge-new'>
                  12
                </div>
              </a>
            </li>
            <li>
              <a data-value='inwork' data-role='left-status' href='#'>
                В работе
              </a>
            </li>
            <li>
              <a data-value='complete' data-role='left-status' href='#'>
                Завершенные
              </a>
            </li>
          </ul>
        </div>
      </div>
      {/* Table */}
      <div className='main-wrapper'>
        <div className='container-fluid'>
          <div className='admin-heading-1'>Все заявки</div>
          <form action=''>
            <div className='row mb-3 justify-content-start'>
              <div className='col'>
                <div id='topStatusBar' className='btn-group' role='group' aria-label='...'>
                  <a href='#' className='btn btn-light' data-value='all'>
                    Все
                  </a>
                  <a href='#' className='btn btn-light' data-value='new'>
                    Новые
                  </a>
                  <a href='#' className='btn btn-light' data-value='inwork'>
                    В работе
                  </a>
                  <a href='#' className='btn btn-light' data-value='complete'>
                    Завершенные
                  </a>
                </div>
              </div>
              <div className='col'>
                <select className='custom-select' id='productSelect'>
                  <option value='all' defaultValue>
                    Все продукты
                  </option>
                  <option value='course-html'>Курс по верстке</option>
                  <option value='course-js'>Курс по JavaScript</option>
                  <option value='course-vue'>Курс по VUE JS</option>
                  <option value='course-php'>Курс по PHP</option>
                  <option value='course-wordpress'>Курс по WordPress</option>
                </select>
              </div>
            </div>
          </form>

          <table className='table fs-14'>
            <thead>
              <tr>
                <th>ID</th>
                <th>дата</th>
                <th>продукт</th>
                <th>имя</th>
                <th>email</th>
                <th>телефон</th>
                <th>статус</th>
                <th></th>
              </tr>
            </thead>
            <tbody id='tbody'>
              {requests.map((request) => {
                console.log(request);
                <tr key={request.id}>
                  <th scope='row'>{request.id + 1}</th>
                  <td>01.04.2020</td>
                  <td>Курс по верстке</td>
                  <td>{request.name}</td>
                  <td>{request.email}</td>
                  <td>{request.phone}</td>
                  <td>
                    <div className='badge badge-pill badge-danger'>Новый</div>
                  </td>
                  <td>
                    {/* <a href='/'>Редактировать</a> */}
                    <Link to='/edit'>Редактировать</Link>
                  </td>
                </tr>;
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );

  return <div>{markup}</div>;
};

export default Requests;
