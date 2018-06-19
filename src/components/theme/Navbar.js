import React, { Component } from "react";

class Navbar extends React.Component {
    render() {
        return <React.Fragment>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top" id="mainNav">
                <a className="navbar-brand" href="index.html">Basın Duyuruları</a>
                <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive"
                    aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    {this.props.children}
                </div>
            </nav>
        </React.Fragment>
    }
}

export default Navbar;