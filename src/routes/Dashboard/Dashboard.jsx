import React, {Component} from 'react'
import Products from '../../Components/Products/Products'
import './Dashboard.css'

class Dashboard extends Component  {
  render() {
    const { items } = this.props
    return (
      <section className="section-1">
        {
          items && items.length
            ? <Products products={items} deleteHandler={(id) => this.props.deleteHandler(id)} updateHandler={(product) => this.props.updateHandler(product)} />
            : <h6>There are no products.</h6>
        }
      </section>
    )
  }
}

export default Dashboard