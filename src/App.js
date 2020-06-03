import React, { Component } from 'react';
import List from './StockList';
import Hoc from './HOC';

const StocksData = [
  {
    id: 1,
    name: 'TCS'
  },
  {
    id: 2,
    name: 'Infosys'
  },
  {
    id: 3,
    name: 'Reliance'
  }
];

const UsersData = [
  {
    id: 1,
    name: 'Krunal'

  },
  {
    id: 2,
    name: 'Ankit'
  },
  {
    id: 3,
    name: 'Rushabh'
  }
];

const Stocks = Hoc(
  List,
  StocksData
);

const Users = Hoc(
  List,
  UsersData
);


class App extends Component {

  render() {
    return (
      <div>
        <Users></Users>
        <br />
        <Stocks></Stocks>
      </div>
    )
  }
}

export default App;