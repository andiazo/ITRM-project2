import React, { Component } from 'react'
import ItemCard from './itemCard'

class ItemList extends Component {
  render() {
      console.log(this.props.children)
    return (
        <div>{this.props.children?.map((item) => {
            return (
                <ItemCard key={item.key} item={item}/>
            )
        })}</div>
    )
  }
}


export default ItemList