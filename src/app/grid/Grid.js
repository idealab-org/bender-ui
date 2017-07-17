import React, { Component } from 'react';
import './Grid.css'
import Box from './box/Box.js'

class Grid extends Component {
    renderRow(row_idx, row_def) {
        var row = []
        for (var r = 0; r < row_def.length; r++) {
            var color = null;
            var clickable = false;
            if (row_def[r].color  && row_def[r].text) {
                clickable = true;
            }
            if (row_def[r].color == null) {
                color = 'white';
            } else {
                color = row_def[r].color;
            }
            var text = null;
            if (row_def[r].text == null) {
                text = '\u00A0';
            } else {
                text = row_def[r].text 
            }
            row.push(this.renderBox([row_idx, r], color, text, clickable))
        }
        return (
            <div className="row">
                {row}
            </div>
        );
    }

    renderBox(loc, c, t, cl) {
        return <Box loc={loc} color={c} text={t} clickable={cl} onClickHandler={this.props.handler}/>
    }

    render() {
        var rows = []
        console.log(this.props.grid)
        for (var r = 0; r < this.props.grid.length; r++) {
            rows.push(this.renderRow(r, this.props.grid[r]));
        }

        return (
            <div className="grid">
                {rows}
            </div>
        );
    }
}

export default Grid;