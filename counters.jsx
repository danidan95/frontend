import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {
    render() { 
        console.log('Counters - Rendered');
        
        return (
        <div>
            <button 
                onClick={this.props.onReset}
                className="btn btn-warning btn-lg m-2"
                >
                Reset
            </button>

            <button 
                onClick={this.props.onAddProduct}
                className="btn btn-primary btn-lg bg-success m-2"
                >
                Add Product
            </button>

            {this.props.counters.map(counter => 
            <Counter 
                key={counter.id}  
                onDelete={this.props.onDelete}
                onAddProduct={this.props.onAddProduct}
                onIncrement={this.props.onIncrement}
                counter={counter}
            />    
            )
        }  
        </div>
        );
    }
}
 
export default Counters;