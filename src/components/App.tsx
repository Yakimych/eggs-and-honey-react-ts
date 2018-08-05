import * as React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';

import AdminPage from './Pages/AdminPage';
import UserPage from './Pages/UserPage';

// TODO: Fix this and Route props type (any)
class App extends React.Component<any> {
  public render() {
    const columns = [
      { name: 'name', label: 'Name' },
      { name: 'order', label: 'Order' }
    ];

    const userPageComponent = (props: any) => (<UserPage columns={columns} {...props} />);
    const adminPageComponent = (props: any) => (<AdminPage {...props} />);

    return (
      <div className="App bg-light">
        <div className="App-header">
          <h2>Eggs and Honey</h2>
        </div>
        <BrowserRouter>
          <div className="main-content container">
            <Route path="/" exact={true} component={userPageComponent} />
            <Route path="/admin" component={adminPageComponent} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
