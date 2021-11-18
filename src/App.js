import React, { Component } from 'react';
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import axios from 'axios';


// import UserItem from './components/users/UserItem';
import './App.css';


class App extends Component {

  state = {
    users: [],
    loading: false
  }
  // one of lifecycle methods as render
  async componentDidMount() {
    this.setState({ loading: true });

    const res = await axios
      .get('https://api.github.com/users');
    
    this.setState({ users: res.data, loading: false });
      // console.log(res.data);

    // console.log(123);
    // this is where we can make a http request to github   
  }

  render() {

    // const numbers = [1,9,3,4];
    return (
      <div className='App'>
        <Navbar />
        <div className='container'>
          <Users loading={this.state.loading} users={this.state.users}/>
        </div>
        
        {/* <UserItem /> */}
        {/* <Navbar title='Hello' /> */}

      </div>
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
  

