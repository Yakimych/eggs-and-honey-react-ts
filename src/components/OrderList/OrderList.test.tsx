import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { DisplayOrder } from '../../types/OrderTypes';
import OrderList from './OrderList';

it('renders without crashing', () => {
  const div = document.createElement('div');
  const fakeOrders: DisplayOrder[] = [];
  ReactDOM.render(<OrderList displayOrders={fakeOrders} action={() => { }} columns={[]} />, div);
});
