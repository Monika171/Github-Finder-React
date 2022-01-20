import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import User from './components/users/User';
import Search from './components/users/Search';
import Alert from './components/layout/Alert';
import About from './components/pages/About';

import axios from 'axios';


// import UserItem from './components/users/UserItem';
import './App.css';
import { Fragment } from 'react/cjs/react.production.min';


class App extends Component {

  state = {
    users: [],
    user: {},
    loading: false,
    alert: null
  }
  // one of lifecycle methods as render
  // async componentDidMount() {
  //   // console.log(process.env.REACT_APP_GITHUB_CLIENT_SECRET);

  //   this.setState({ loading: true });

  //   const res = await axios
  //     .get(`https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
    
  //   this.setState({ users: res.data, loading: false });
  //     // console.log(res.data);

  //   // console.log(123);
  //   // this is where we can make a http request to github   
  // }

  // Search Github users
  searchUsers = async text => {
    this.setState({ loading: true })
    const res = await axios
      .get(`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
    
    this.setState({ users: res.data.items, loading: false });
  }

  //Get single Github user
  getUser = async (username) => {
    this.setState({ loading: true })
    const res = await axios
      .get(`https://api.github.com/users?q=${username}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
    
    this.setState({ user: res.data, loading: false });
  }

  // Clear users from state
  clearUsers = () => this.setState({ users: [], loading: false});

  // Set Alert
  setAlert = (msg, type) => {
    this.setState({ alert: {msg, type}});

    setTimeout(() => this.setState({ alert: null}), 5000)
  }

  render() {

    const {users, user, loading } = this.state;

    // const numbers = [1,9,3,4];
    return (
      <Router>
      <div className='App'>
        <Navbar />
        <div className='container'>
          <Alert alert={this.state.alert} />
          <Switch>
            <Route 
            exact path='/' 
            render={props => (
              <Fragment>
                <Search 
              searchUsers={this.searchUsers} 
              clearUsers={this.clearUsers} 
              showClear={users.length > 0 ? true : false}
              setAlert={this.setAlert}/>
              <Users loading={loading} users={users}/>
              </Fragment>
            )}/>
            <Route exact path='/about'component={About}/>
            <Route exact path='user/:login' render={props => (
              <User {...props} getUser={this.getUser} user={user} loading={loading}/>
            )}></Route>             
          </Switch>
        </div>
        
        {/* <UserItem /> */}
        {/* <Navbar title='Hello' /> */}

      </div>
      </Router>
    );    
  }

}

export default App;

    // method that is part of the class
    // foo2 = () => 'Bars';
    // const name = 'John Doe';
    // const foo = () => 'Bar';
    // const loading = false;
    // const showName = true;
    // if() --> (should be) above the 'return'

    // if(loading) {
    //   return <h4>Loading...</h4>
    // } // or use a ternery operator

    // return (
    //   <div className="App">
    //     {/* <h1>My App</h1> */}
    //     {/* {loading ? <h4>Loading...</h4> : <h1>Hello {showName ? name: null}</h1> */}
    //     <h1>Hello {showName && name}</h1>

    //     {/* <h3>There are {1+1} people.</h3>
    //     <h3>Uppercase will be {name.toUpperCase()}</h3>
    //     <h3>Hello {foo()}</h3>
    //     <h3>Hello {this.foo2()}</h3>  */}
        
    //   </div>
    // );
  

  // If not using JSX ---->
  // render(){
  //   return React.createElement('div', {className: 'App'},
  //   React.createElement('h1', null, 'Hello from React2'));
  // }
  // null-> for no attributes
  

