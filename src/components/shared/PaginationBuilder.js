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
      activePage: 1,
      firstAndMaxResults: {
        first: 0,
        max: 10
      }
    };
  }

  componentWillReceiveProps(props) {
    const buildedPaginationArray = props.size
      ? this.buildPaginationArray(props.size)
      : [1];
    const lastElementOfBuildedPaginationArray =
      buildedPaginationArray[buildedPaginationArray.length - 1];
    this.setState(
      {
        paginationNumbers: buildedPaginationArray,
        activePage:
          this.state.activePage <= lastElementOfBuildedPaginationArray
            ? this.state.activePage
            : 1
      },
      function() {
        this.setState(
          {
            firstAndMaxResults: {
              first:
                this.state.activePage === 1
                  ? 0
                  : (this.state.activePage - 1) * 10,
              max: 0
            }
          },
          function() {
            this.setState(
              {
                firstAndMaxResults: {
                  first: this.state.firstAndMaxResults.first,
                  max: this.state.firstAndMaxResults.first + 10
                }
              },
              function() {
                console.log(this.state.firstAndMaxResults);
              }
            );
          }
        );
      }
    );
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
      this.setState(
        {
          activePage: activePage + 1
        },
        function() {
          this.setState(
            {
              firstAndMaxResults: {
                first:
                  this.state.activePage === 1
                    ? 0
                    : (this.state.activePage - 1) * 10,
                max: 0
              }
            },
            function() {
              this.setState(
                {
                  firstAndMaxResults: {
                    first: this.state.firstAndMaxResults.first,
                    max: this.state.firstAndMaxResults.first + 10
                  }
                },
                function() {
                  console.log(this.state.firstAndMaxResults);
                }
              );
            }
          );
        }
      );
    }
  }

  previousPage() {
    const firstElementOfArray = this.state.paginationNumbers[0];
    const { activePage } = { ...this.state };
    if (activePage - 1 >= firstElementOfArray) {
      this.setState(
        {
          activePage: activePage - 1
        },
        function() {
          this.setState(
            {
              firstAndMaxResults: {
                first:
                  this.state.activePage === 1
                    ? 0
                    : (this.state.activePage - 1) * 10,
                max: 0
              }
            },
            function() {
              this.setState(
                {
                  firstAndMaxResults: {
                    first: this.state.firstAndMaxResults.first,
                    max: this.state.firstAndMaxResults.first + 10
                  }
                },
                function() {
                  console.log(this.state.firstAndMaxResults);
                }
              );
            }
          );
        }
      );
    }
  }

  clickedPage(page) {
    this.setState(
      {
        activePage: page
      },
      function() {
        this.setState(
          {
            firstAndMaxResults: {
              first:
                this.state.activePage === 1
                  ? 0
                  : (this.state.activePage - 1) * 10,
              max: 0
            }
          },
          function() {
            this.setState(
              {
                firstAndMaxResults: {
                  first: this.state.firstAndMaxResults.first,
                  max: this.state.firstAndMaxResults.first + 10
                }
              },
              function() {
                console.log(this.state.firstAndMaxResults);
              }
            );
          }
        );
      }
    );
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
