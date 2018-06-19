import React, { Component } from "react";
import axios from "axios";
import { Alert, Button } from "reactstrap";

class Tarihce extends Component {
  constructor() {
    super();
    this.state = {
      tarihce: []
    };
  }
  componentDidMount() {
    axios.get("http://www.mocky.io/v2/5b2943f42f00002c00f56110").then(res => {
      this.setState({
        tarihce: res
      });
    });
  }
  showId(val) {
    alert(val);
  }
  render() {
    return (
      <div>
        {this.state.tarihce.length === 0 ? (
          <Alert color="info">Listelenecek veri bulunamadı.</Alert>
        ) : (
          <table className="my-table">
            <thead>
              <tr>
                <th data-label="ID">ID</th>
                <th data-label="AD">AD</th>
                <th data-label="İŞLEM">İŞLEM</th>
              </tr>
            </thead>
            <tbody>
              {this.state.tarihce.map(function(item, index) {
                return (
                  <tr key={index}>
                    <td data-label="ID">{item.id}</td>
                    <td data-label="AD">{item.ad}</td>
                    <td data-label="İŞLEM">
                      <Button outline size="sm" color="success" onClick={() => this.showId(item.id)}>Detay</Button>
                    </td>
                  </tr>
                );
              }, this)}
            </tbody>
          </table>
        )}
      </div>
    );
  }
}

export default Tarihce;
