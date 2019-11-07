import React, {Component} from 'react';
import Header from './Components/Header/Header'
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { 
  AddInventory,
  Dashboard,
} from './routes'
import axios from 'axios'

class App extends Component  {
  constructor(){
    super()
    this.state = {
      products: []
    }
  }

  async componentDidMount() {
    const {data} = await axios.get('http://localhost:3000/api/inventory')
    this.setState({ products: data })
  }

  deleteHandler = async (id) => {
    const {data} = await axios.delete(`http://localhost:3000/api/inventory/${id}`)
    this.setState({ products: data })
  }

  submitHandler = async ({image_url, product_name, price}) => {
    const {data} = await axios.post('http://localhost:3000/api/inventory', {image_url, product_name, price})
    this.setState({ products: data })
  }

  updateHandler = async ({image_url, product_name, price, id}) => {
    const {data} = await axios.put(`http://localhost:3000/api/inventory/${id}`, {image_url, product_name, price})
    this.setState({ products: data })
  }

  render() {
    const { products } = this.state
    return(
      <main>
        <Router>
          <Header />
          <Switch>
            <Route path="/" exact>
              <Dashboard items={products} deleteHandler={(id) => this.deleteHandler(id)} updateHandler={(data) => this.updateHandler(data)}/>
            </Route>
            <Route path="/dashboard" exact>
              <Dashboard items={products} deleteHandler={(id) => this.deleteHandler(id)} updateHandler={(data) => this.updateHandler(data)}/>
            </Route>
            <Route path="/add-inventory" exact>
              <AddInventory submitHandler={(product) => this.submitHandler(product)}/>
            </Route>
          </Switch>
        </Router>
      </main>
    )
  }
}

export default App;