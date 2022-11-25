import { useEffect, useState } from 'react';

import Requests from './Requests';
import useFetch from './useFetch';

const Home = () => {
  const [updateFlag, setUpdateFlag] = useState(false);
  const { data, isLoading, error } = useFetch('http://localhost:8000/requests', updateFlag);

  return (
    <div>
      {error && <div>{error}</div>}
      {isLoading && <h3>Loading...</h3>}
      {data && <Requests requests={data} />}
    </div>
  );
};

export default Home;
