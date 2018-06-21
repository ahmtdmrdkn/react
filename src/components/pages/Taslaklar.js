import React, { Component } from 'react';
import PaginationBuilder from '../shared/PaginationBuilder';

class Taslaklar extends Component {
    constructor() {
        super();
        this.changeNumber = this.changeNumber.bind(this);
        this.state = {
            number: 0
        };
    }
    changeNumber(e) {
        this.setState({
            number: Number(e.target.value)
        });
    }
    render() {
        return (
            <div>
                <input type="text" onChange={this.changeNumber} />
                <PaginationBuilder size={this.state.number} />
            </div>
        );
    }
}

export default Taslaklar;