import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Nav-Bar.styles.css";

export default class NavBar extends Component {
  render() {
    return (
      <div class="wrapper">
        <div class="top_navbar">
          <div class="hamburger">
            <div class="one"></div>
            <div class="two"></div>
            <div class="three"></div>
          </div>
          <div class="top_menu">
            <div class="logo">Eagle</div>
            <ul>
              <li>
                <a href="#">
                  <i class="fa fa-user"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i class="fa fa-users"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i class="fa fa-sign-out"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div class="sidebar">
          <ul>
            <li>
              <Link to="/dashboard">
                <span class="icon">
                  <i class="fa fa-tachometer"></i>
                </span>
                <span class="title">DashBoard</span>
              </Link>
            </li>
            <li>
              <Link to="/masterdata">
                <span class="icon">
                  <i class="fa fa-database"></i>
                </span>
                <span class="title">Master Data</span>
              </Link>
            </li>
            <li>
              <Link to="/offers">
                <span class="icon">
                  <i class="fa fa-envelope-o"></i>
                </span>
                <span class="title">Offers</span>
              </Link>
            </li>
            <li>
              <Link to="/icmeeting" class="active">
                <span class="icon">
                  <i class="fa fa-calendar"></i>
                </span>
                <span class="title">IC Meeting</span>
              </Link>
            </li>
            <li>
              <Link to="/contract">
                <span class="icon">
                  <i class="fa fa-file"></i>
                </span>
                <span class="title">Contracts</span>
              </Link>
            </li>
            <li>
              <Link to="/landadministration">
                <span class="icon">
                  <i class="fa fa-industry"></i>
                </span>
                <span class="title">Land Administration</span>
              </Link>
            </li>
            <li>
              <Link to="/accounting">
                <span class="icon">
                  <i class="fa fa-university"></i>
                </span>
                <span class="title">Accounting</span>
              </Link>
            </li>
            <li>
              <Link to="/reports">
                <span class="icon">
                  <i class="fa fa-line-chart"></i>
                </span>
                <span class="title">Reports</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
