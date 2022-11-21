import { useState } from 'react';
// тестовые данные для формы
class TestData {
  constructor(name, phone, email, product) {
    this.name = name;
    this.phone = phone;
    this.email = email;
    this.product = product;
  }
}
const testData = [
  new TestData('Иван Ложкин', '84953557821', 'lozhkin@mail.ru', 'course-html'),
  new TestData(
    'Александр Щукин',
    '89163222332',
    'schukin@yandex.ru',
    'course-php'
  ),
  new TestData(
    'Максим Соколов',
    '84995896375',
    'sokolov@rambler.ru',
    'course-js'
  ),
  new TestData(
    'Петр Сидоров',
    '84957896521',
    'psidorov@google.com',
    'course-vue'
  ),
  new TestData(
    'Василий Скороходов',
    '84999587136',
    'vskor@yahoo.com',
    'course-wordpress'
  ),
  new TestData('Петр Симонов', '84957895412', 'simonov@gmail.com', 'course-js'),
  new TestData('Кирилл Птицын', '89165897415', 'kp@ya.ru', 'course-html'),
  new TestData('Степан Васечкин', '84995687921', 'sv@google.com', 'course-php'),
];

// выбор случайной тестовой записи
function getRandomData(obj) {
  const index = Math.floor(Math.random() * obj.length);
  return obj[index];
}

// -----------------------------------------------------------
function Form() {
  // начальное заполнение формы
  // const init = getRandomData(testData);
  // состояние полей формы
  // const [request, setRequest] = useState(() => {
  //   return {
  //     name: init.name,
  //     phone: init.phone,
  //     email: init.email,
  //     product: init.product,
  //   };
  // });
  const [request, setRequest] = useState(() => {
    return getRandomData(testData);
  });

  console.log('🚀 ~ request', request);

  const changeName = (e) => {
    setRequest((prev) => {
      return {
        ...prev,
        name: e.target.value,
      };
    });
  };
  const changePhone = (e) => {
    setRequest((prev) => {
      return {
        ...prev,
        phone: e.target.value,
      };
    });
  };
  const changeEmail = (e) => {
    setRequest((prev) => {
      return {
        ...prev,
        email: e.target.value,
      };
    });
  };
  const changeProduct = (e) => {
    setRequest((prev) => {
      return {
        ...prev,
        product: e.target.value,
      };
    });
  };

  // отправка формы
  const handleSubmit = (evt) => {
    evt.preventDefault();
    const request = getRandomData(testData);
    setRequest(request);
    // fillTestData();
    // сохранение данных формы
  };

  // разметка формы ввода заявки
  const formMarkup = (
    <div className='white-plate white-plate--payment'>
      <div className='container-fluid'>
        <div className='white-plate__header text-center'>
          <p className='white-plate__logo'>
            <span>Форма</span> заявок
          </p>
        </div>
        <div className='white-plate__line-between white-plate__line-between--main'></div>
        <form
          onSubmit={handleSubmit}
          id='form'
          method='POST'
          action=''
        >
          <label>Ваши данные:</label>
          <div className='form-group'>
            <input
              id='name'
              type='text'
              name='name'
              autoComplete='on'
              className='form-control'
              placeholder='Имя и Фамилия'
              value={request.name}
              onChange={changeName}
              required
            />
          </div>
          <div className='form-group'>
            <input
              id='phone'
              type='text'
              name='phone'
              autoComplete='on'
              className='form-control'
              placeholder='Телефон'
              value={request.phone}
              onChange={changePhone}
            />
          </div>
          <div className='form-group'>
            <input
              id='email'
              type='email'
              name='email'
              autoComplete='on'
              className='form-control'
              placeholder='Email'
              value={request.email}
              onChange={changeEmail}
              required
            />
          </div>
          <div className='form-group'>
            <label htmlFor='exampleFormControlSelect1'>Продукт:</label>
            <select
              id='product'
              name='product'
              className='form-control'
              value={request.product}
              onChange={changeProduct}
              // id='exampleFormControlSelect1'
            >
              <option value='course-html'>Курс по верстке</option>
              <option value='course-js'>Курс по JavaScript</option>
              <option value='course-vue'>Курс по VUE JS</option>
              <option value='course-php'>Курс по PHP</option>
              <option value='course-wordpress'>Курс по WordPress</option>
            </select>
          </div>
          <div className='form-group'>
            <button
              type='submit'
              className='btn btn-lg btn-primary btn-block'
            >
              Оформить заявку
            </button>
          </div>
        </form>
      </div>
    </div>
  );

  // рендер формы
  return <div>{formMarkup}</div>;
}

export default Form;
