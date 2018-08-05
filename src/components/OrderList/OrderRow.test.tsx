import { DisplayOrder } from '../../types/OrderTypes';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import OrderRow from './OrderRow';

it('renders without crashing', () => {
  const div = document.createElement('div');
  const displayOrder: DisplayOrder = { id: 1, name: 'TestName', productType: 'Eggs' };
  ReactDOM.render(<OrderRow displayOrder={displayOrder} />, div);
});
