import React, { Component } from "react";
import PropTypes from "prop-types";
import { Pagination, PaginationItem, PaginationLink } from "reactstrap";

class PaginationBuilder extends Component {
  constructor(props) {
    super(props);
    /**function bindings */
    this.previousPage = this.previousPage.bind(this);
    this.nextPage = this.nextPage.bind(this);
    this.clickedPage = this.clickedPage.bind(this);
    /** */
    this.state = {
      paginationNumbers: props.size
        ? this.buildPaginationArray(props.size)
        : [1],
      activePage: 1
    };
  }

  componentWillReceiveProps(props) {
    /**SIFIR SIKINTI OLMALI */
    this.setState({
      paginationNumbers: props.size
        ? this.buildPaginationArray(props.size)
        : [1],
      activePage: 1
    });
  }

  buildPaginationArray(size) {
    if (size <= 10) return [1];
    let calculatedSize = size % 10 === 0 ? size / 10 : size / 10 + 1;
    let array = [];
    let index = 1;
    while (index <= calculatedSize) {
      array.push(index);
      index++;
    }
    return array;
  }

  nextPage() {
    const lastElementOfArray = this.state.paginationNumbers[
      this.state.paginationNumbers.length - 1
    ];
    const { activePage } = { ...this.state };
    if (activePage + 1 <= lastElementOfArray) {
      this.setState({
        activePage: activePage + 1
      });
    }
  }

  previousPage() {
    const firstElementOfArray = this.state.paginationNumbers[0];
    const { activePage } = { ...this.state };
    if (activePage - 1 >= firstElementOfArray) {
      this.setState({
        activePage: activePage - 1
      });
    }
  }

  clickedPage(page) {
    this.setState({
      activePage: page
    });
  }

  render() {
    return (
      <Pagination>
        <PaginationItem>
          <PaginationLink previous onClick={this.previousPage} />
        </PaginationItem>
        {this.state.paginationNumbers.map(function(item, index) {
          return (
            <PaginationItem
              key={index}
              active={item === this.state.activePage ? true : false}
            >
              <PaginationLink onClick={() => this.clickedPage(item)}>
                {item}
              </PaginationLink>
            </PaginationItem>
          );
        }, this)}
        <PaginationItem>
          <PaginationLink next onClick={this.nextPage} />
        </PaginationItem>
      </Pagination>
    );
  }
}

PaginationBuilder.propTypes = {
  size: PropTypes.number
};

export default PaginationBuilder;
