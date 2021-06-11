import React, { Component } from 'react';
import Navbar from './components/layout/Navbar';
import './App.css';


class App extends Component {

  render() {

    // const numbers = [1,9,3,4];
    return (
      <div className='App'>
        <Navbar />

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
  

