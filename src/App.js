import {Component} from 'react'

import Welcome from './components/Welcome'

import './App.css'

class App extends Component {
  state = {
    isLoggedIn: true,
  }
  // conditional rendering, method1
  //   renderAuthButton = () => {
  //     const {isLoggedIn} = this.state
  //     if (isLoggedIn === true) {
  //       return <button type="button">Logout</button>
  //     }
  //     return <button type="button">Login</button>
  //   }

  render() {
    // conditional rendering, method2
    const {isLoggedIn} = this.state
    // let authButton
    // if (isLoggedIn === true) {
    //   authButton = <button type="button">Login</button>
    // } else {
    //   authButton = <button type="button">Logout</button>
    // }
    //
    return (
      <div className="container">
        <Welcome greeting="Hi" name="Dixit" />
        {
          // method1 using if-else in function
          /* {this.renderAuthButton()} */
          // method2 using if-else (element variables)
          /* authButton  */
          // method3 using && operator
          /*   {isLoggedIn && <button type="button">Logout</button>}
               {!isLoggedIn && <button type="button">Login</button>}
           */
          // method4 using ternary operator
          isLoggedIn ? (
            <button type="button">Logout</button>
          ) : (
            <button type="button">Login</button>
          )
        }
      </div>
    )
  }
}

export default App
