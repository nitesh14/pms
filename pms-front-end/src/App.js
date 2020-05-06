import React from 'react';
import './App.css';
import Dashboard from "./components/Dashboard";
import Header from "./components/layout/Header";
import Addproject from  "./components/projects/Addproject";
import {BrowserRouter as Router,Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import{Provider} from 'react-redux';
import store from './store';


class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Provider store={store}>
          <Router>
            <Header />
            <Route path="/dashboard" component={Dashboard} />
            <Route exact path="/addtask" component={Addproject} />
          </Router>
        </Provider>
      </div>
    );
  }
}

export default App;