import React, { Component } from "react";
import { Link, Route } from 'react-router-dom';

class Menus extends React.Component {
    render() {
        return <React.Fragment>
            <li className="nav-item" data-toggle="tooltip" data-placement="right" title="Dashboard">
                <Link className="nav-link" to="/musteriler">
                    <i className="fa fa-fw fa-dashboard"></i>
                    <span className="nav-link-text">&nbsp;Müşteriler</span>
                </Link>
                <Link className="nav-link" to="/yeniduyuru">
                    <i className="fa fa-fw fa-dashboard"></i>
                    <span className="nav-link-text">&nbsp;Yeni Duyuru</span>
                </Link>
            </li>
        </React.Fragment>
    }
}

export default Menus;