import * as React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';

import AdminPage from './Pages/AdminPage';
import UserPage from './Pages/UserPage';

class App extends React.Component<any> {
  render() {
    let columns = [
      { name: 'name', label: 'Name' },
      { name: 'order', label: 'Order' }
    ];
    return (
      <div className="App bg-light">
        <div className="App-header">
          <h2>Eggs and Honey</h2>
        </div>
        <BrowserRouter>
          <div className="main-content container">
            <Route path="/" exact component={(props) => (<UserPage columns={columns} {...props} />)} />
            <Route path="/admin" component={(props) => (<AdminPage {...props} />)} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
