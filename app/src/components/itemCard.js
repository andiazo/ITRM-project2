import React from 'react';
import './items.css';

class ItemCard extends React.Component {
    render() {
        return (
            <div className='card item-card'>
                {/* <img src={this.props.item.image}/> */}
                <h3>{this.props.item.title}</h3>
                <p>{this.props.item.description}</p>
                <p className='price'>{this.props.item.price}</p>
                <button>Buy</button>
            </div>
        )
    }
}

export default ItemCard;
