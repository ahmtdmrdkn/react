import React, { Component } from "react";
import { FormGroup, Label, CustomInput, Alert, Button } from "reactstrap";

class DuyuruEklentileri extends Component {
  constructor() {
    super();
    this.state = {
      files: []
    };
    this.handleFile = this.handleFile.bind(this);
  }

  handleFile(e) {
    this.setState(
      {
        files: Array.from(e.target.files)
      },
      function() {
        this.props.selectedFiles(this.state.files);
      }
    );
  }

  deleteFile(index) {
    const array = [...this.state.files];
    array.splice(index, 1);
    this.setState({
      files: array
    });
  }

  render() {
    return (
      <FormGroup>
        <Label for="fileUpload">Ekler:</Label>
        <CustomInput
          multiple="true"
          onChange={this.handleFile}
          type="file"
          id="fileUpload"
          name="fileUpload"
          label="Seçiniz..."
        />
        {this.state.files.length > 0 ? (
          this.state.files.map(function(item, index) {
            return (
              <div key={index}>
                <Alert color="info">
                  <div>
                    <span>
                      <strong>{item.name}</strong>
                    </span>
                    <Button
                      color="danger"
                      onClick={() => this.deleteFile(index)}
                    >
                      <i className="fa fa-close" />
                    </Button>
                    <Button color="warning">
                      <i className="fa fa-arrow-circle-down" />
                    </Button>
                  </div>
                </Alert>
              </div>
            );
          }, this)
        ) : (
          <Alert color="info">
            <strong>Herhangi bir dosya seçmediniz.</strong>
          </Alert>
        )}
      </FormGroup>
    );
  }
}

export default DuyuruEklentileri;
