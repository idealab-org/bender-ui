import React, { Component } from 'react';
import './Grid.css'
import './Box/Box.js'

class Grid extends Component {
    renderBox(c, t) {
        return <Box color={c}, text={t}/>
    }

    render() {
        return (
            <div className="row">
                {this.renderBox()}
                {this.renderBox()}
                {this.renderBox()}
            </div>
            <div className="row">
                {this.renderBox()}
                {this.renderBox()}
                {this.renderBox()}
            </div>
            <div className="row">
                {this.renderBox()}
                {this.renderBox()}
                {this.renderBox()}
            </div>
        )
    }
}