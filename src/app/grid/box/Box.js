import React, { Component } from 'react';
import './Box.css';

class Box extends Component {
    constructor() {
        super();
        this.state = {
            loc: null,
            color: null,
            text: null,
        }
    }
    render() {
        return (
            <button className="box" onClick={() => this.props.onClick()}>
                {this.props.text}
            </button>
        ) 
    }
}

export default Box;