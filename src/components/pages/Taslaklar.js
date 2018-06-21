import React, { Component } from 'react';
import PaginationBuilder from '../shared/PaginationBuilder';

class Taslaklar extends Component {
    constructor() {
        super();
        this.changeNumber = this.changeNumber.bind(this);
        this.handlePagination = this.handlePagination.bind(this);
        this.state = {
            number: 0,
            firstAndMax: {}
        };
    }
    changeNumber(e) {
        this.setState({
            number: Number(e.target.value)
        });
    }
    handlePagination(firstAndMax) {
        this.setState({
            selectedPagination: firstAndMax
        }, function() {
            console.log(this.state.selectedPagination);
        });
    }
    render() {
        return (
            <div>
                <input type="text" onChange={this.changeNumber} />
                <PaginationBuilder size={this.state.number} export={this.handlePagination} />
            </div>
        );
    }
}

export default Taslaklar;