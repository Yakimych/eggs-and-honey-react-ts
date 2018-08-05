import * as React from 'react';
import * as ReactDOM from 'react-dom';
import OrderList from './OrderList';

it('renders without crashing', () => {
  const div = document.createElement('div');
  const fakeOrders = [];
  ReactDOM.render(<OrderList displayOrders={fakeOrders} action={() => {}} columns={[]} />, div);
});
