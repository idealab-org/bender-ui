import React, { Component } from 'react';
import './Box.css';
import ColorMap from './colormap.js'

class Box extends Component {
    render() {
        var style = {
            backgroundColor: ColorMap[this.props.color]
        }
        return (
            <button className="box" style={style} onClick={() => this.props.onClickHandler(this.props.loc, this.props.clickable)}>
                {this.props.text}
            </button>
        ) 
    }
}

export default Box;