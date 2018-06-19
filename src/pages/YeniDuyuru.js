import React, { Component } from "react";
import MusteriTablosu from "../components/MusteriTablosu";

class YeniDuyuru extends React.Component {
  render() {
    return (
      <React.Fragment>
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <a href="javascript:void(0);">Dashboard</a>
          </li>
          <li className="breadcrumb-item active">Yeni Duyuru</li>
        </ol>
        <div className="row">
          <div className="col">
            <MusteriTablosu />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default YeniDuyuru;
