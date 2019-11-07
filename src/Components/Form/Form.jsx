import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import './Form.css'
import logo from '../../assets/images/image_preview_icon.jpg'

class Form extends Component {
  constructor() {
    super()
      this.state = {
        image_url: '',
        product_name: '',
        price: 0
      }
  }

  onChangeHandler = ({name, value}) => {
    this.setState({ [name]: value })
  }

  cancelHandler = () => {
    this.setState({
      image_url: '',
      product_name: '',
      price: 0
    })
  }

  render(){
    return(
      <div className="product-form">
        <div className="img-viewer">
          <img src={ logo } alt="logo" />
        </div>
        <form>
          <label>Image URL:</label>
          <input type="text" name="image_url" onChange={event => this.onChangeHandler(event.target)} />
          <label>Product Name:</label>
          <input type="text" name="product_name" onChange={event => this.onChangeHandler(event.target)} />
          <label>Price:</label>
          <input type="number" min="0.00" step="0.01" name="price" onChange={event => this.onChangeHandler(event.target)} />         
          <div className="form-controls">
            <Link className="btn" to="/" onClick={() => this.cancelHandler()}>Cancel</Link>
            <Link className="btn" to="/" onClick={() => this.props.onSubmitHandler(this.state)}>Add to Inventory</Link>
          </div>
        </form>
      </div>
    )
  }
}

export default Form
