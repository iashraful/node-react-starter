import React from 'react';
import './App.css';
import ProductList from './components/ProductList'

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      products: [
        {name: 'A'},
        {name: 'B'},
      ]
    }
  }

  render() {
    return (
      <div>
        <ProductList products={this.state.products}/>
      </div>
        
    )
  }
}
