import React, { Component } from "react";
import fetch from "node-fetch";
import Alert from "./theme/Alert";

class MusteriTablosu extends React.Component {
  constructor() {
    super();
    this.state = {
      musteriler: []
    };
  }

  componentDidMount() {
    fetch("http://www.mocky.io/v2/5b1c6a6f3200006c00c36cce")
      .then(res => res.json())
      .then(res => {
        this.setState({
          musteriler: res
        });
      });
  }

  sil(index) {
    this.state.musteriler.splice(index, 1);
    this.setState({
      musteriler: this.state.musteriler
    });
  }

  render() {
    return (
      <React.Fragment>
        {this.state.musteriler.length == 0 ? (
          <Alert mode="info" text="Listelenecek veri bulunamadı." />
        ) : (
          <table className="table table-striped table-sm">
            <thead>
              <tr>
                <th scope="col">ID</th>
                <th scope="col">AD SOYAD</th>
                <th scope="col">İŞLEM</th>
              </tr>
            </thead>
            <tbody>
              {this.state.musteriler.map(function(item, index) {
                return (
                  <tr key={index}>
                    <td>{item.id}</td>
                    <td>{item.adSoyad}</td>
                    <td>
                      <button
                        type="button"
                        className="btn btn-outline-danger"
                        onClick={() => this.sil(index)}
                      >
                        Sil
                      </button>
                    </td>
                  </tr>
                );
              }, this)}
            </tbody>
          </table>
        )}
      </React.Fragment>
    );
  }
}

export default MusteriTablosu;
