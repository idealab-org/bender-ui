import React, { Component } from 'react';
import './Query.css';

class Query extends Component {
    render() {
        return (
            <div className="query">
                <h2>{this.props.query}</h2>
            </div>
        );
    }
}

export default Query;