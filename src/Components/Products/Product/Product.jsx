import React, {Component} from 'react'
import './Product.css'

class Product extends Component {
  constructor(props){
    super(props)
    this.state = {
      toggle: false,
      product: {}
    }
  }

  componentDidMount() {
    this.setState({
      product: this.props.product
    });
  }

  updateToggle = () => {
    this.setState({
      toggle: !this.state.toggle
    })
  }

  cancelHandler = () => {
    this.setState({
      toggle: false
    })
  }

  changeHandler = ({name, value}) => {
    this.setState({
      product: {
        ...this.state.product,
        [name]: value
      }
    });
  }

  render() {
    return(
      <div className="product-item">
        <div className="product-item-section product-item-img">
          <img src={this.props.product.image_url} alt={this.props.product.image_url} />
        </div>
        <div className="product-item-section product-item-description">
          {
          this.state.toggle ? <input type="text" name="product_name" defaultValue={this.props.product.product_name} onChange={(event) => this.changeHandler(event.target)}/> : <span>{this.props.product.product_name}</span>
          }
          <span>${this.props.product.price}</span>

          {
            !this.state.toggle 
            ? <> <button onClick={() => this.updateToggle()}>Edit</button><button onClick={() => this.props.deleteHandler(this.props.product.id)}>Delete</button> </>
            : <> <button onClick={() => {
              this.setState({toggle: false});
              return this.props.updateHandler(this.state.product)
            }}>Submit</button><button onClick={() => this.cancelHandler()}>Cancel</button> </>
          }
        </div>
      </div>
    )
  }
}

export default Product;