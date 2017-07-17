import React, { Component } from 'react';
import './Grid.css'
import './Box/Box.js'
import './colormap.js'

class Grid extends Component {
    constructor() {
        super();
        this.state = {
            grid: null,
        };
    }

    renderRow(row_idx, row_def) {
        var row = []
        for (var r = 0; r < row_def.length; r++) {
            if (row_def[r].color == null) {
                color = 'white';
            } else {
                color = row_def[r].color;
            }
            row.push(renderBox({row_idx, r}, color, row_def[r].text))
        }
        return (
            <div className="row">
                {row}
            </div>
        );
    }

    renderBox(loc, c, t) {
        return <Box loc={loc} color={c} text={t} onClick={() => this.prop.handleSelect()}/>
    }

    render() {
        var rows = []
        for (var r = 0; r < this.state.grid.length; r++) {
            rows.push(renderRow(r, this.state.grid[r]));
        }

        return (
            <div className="grid">
                {rows}
            </div>
        );
    }
}

export default Grid;