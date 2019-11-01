import React, {Component} from 'react';
import './App.css';

import Dashboard from '../src/Components/Dashboard/Dashboard'
import Form from '../src/Components/Form/Form'
import Header from '../src/Components/Header/Header'
import Product from '../src/Components/Product/Product'
import axios from 'axios';


class App extends Component {
  constructor(){
  super()
  this.state = {
    img: '',
    price: 0,
    name: ''
  }
}

// addToInentory = item => {
//   axios

// }

  render (){
    return (
      <div>
        <input />
        <input />
        <input />
        <div>
          <button>Cancel</button>
          <button>Add to Inventory</button>
      </div>
      </div>
    )
  }    
}
export default App;
