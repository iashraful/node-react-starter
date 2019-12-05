import React from 'react';

export default class ProductList extends  React.Component {
    render() {
        return (
            <div>
                <ul>
                {this.props.products.map((p) => {
                    return <li>{p.name}</li>
                })}
                </ul>
            </div>
        )
    }
}