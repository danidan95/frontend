import React, { Component } from 'react';


class Counter extends Component { 
    
    componentDidUpdate(prevProps, prevState){
        console.log('prevProps', prevProps);
        console.log('prevState', prevState);
        if (prevProps.counter.value !== this.props.counter.value) {
            //Ajax call and get NEW data from the server!!
        }
    }

    componentWillUnmount(){
        console.log('Counter - Unmount');
    }

    render() { 
        console.log('Counter - Rendered');

        return (
            <div>  
                <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
                <button 
                    onClick={ () => this.props.onIncrement(this.props.counter)} 
                    className="btn btn-secondary btn-lg"
                > 
                    +
                </button> 
                <button 
                    onClick={ () => this.props.onDelete(this.props.counter.id)}
                    className="btn btn-danger btn-lg m-2"
                >Delete
                </button> <br/>
            </div>
        );
    }

    getBadgeClasses() {
        let classes = "badge m-2 btn-lg badge-";
        classes += (this.props.counter.value === 0) ? "warning" : "info";
        return classes;
    }

    formatCount(){
        const {value: count} = this.props.counter;
        return count === 0 ? "Zero" :  count;
    }
}
 
export default Counter;