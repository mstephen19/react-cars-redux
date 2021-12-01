import { createStore } from 'redux';
import reducer from './reducers';

const randomNum = () => Math.floor(Math.random() * 20000);

export default createStore(reducer, {
  cars: [
    {
      id: randomNum(),
      make: 'Honda',
      model: 'Civic',
      year: '2008',
      isRunning: false,
    },
    {
      id: randomNum(),
      make: 'Tesla',
      model: 'Y',
      year: '2021',
      isRunning: false,
    },
  ],
});
