import React,{Component} from 'react'
import Form from '../../Components/Form/Form'
import './AddInventory.css'

class AddInventory extends Component { 
  constructor(){
    super()
    this.state = {}
  }

  render() {
    return(
      <section className="section-2">
        <Form onSubmitHandler={(form) => this.props.submitHandler(form)}/>
      </section>
    )
  }
}

export default AddInventory