import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Tooltip } from "@material-ui/core";
import "../../css/bootstrap.min.css";
import "../../css/style.css";
import userIcon from "../../image/user-icon.png";
import logo from "../../image/logo.svg";
import "./Nav-Bar.styles.css";

export default class NavBar extends Component {
  constructor() {
    super();
    this.state = {
      activeLink: false,
    };
  }
  handleClick = () => {
    this.setState({ activeLink: true });
  };

  render() {
    const navBarValues = [
      {
        title: "Dashboard",
        linkUrl: "dashboard",
        subtabs: {},
      },
      {
        title: "Master Data",
        linkUrl: "masterdata",
        subtabs: {
          "County Holding": "countyholding",
          Owners: "Owners",
          Units: "units",
          "All Unit Tracts": "unittracts",
          "All Mineral Tracts": "mineraltracts",
          Wells: "Wells",
          Contacts: "Contacts",
          Grantees: "Grantees",
        },
      },
      {
        title: "Offers",
        linkUrl: "offers",
        subtabs: {
          "Offer Details": "offerdetails",
          "owner Datils": "ownerdetails",
          "Mineral Tracts": "mineraltracts",
          "Unit Tracts": "unittracts",
          "IC Preparation": "icprep",
        },
      },
      {
        title: "IC Meeting",
        linkUrl: "icmeeting",
        subtabs: {},
      },

      {
        title: "Contracts",
        linkUrl: "contract",
        subtabs: {
          "Contract Summary": "contract",
          "Contract Offer": "contractoffers",
          Grantors: "grantors",
          Grantee: "grantees",
          "Grantee Authority": "granteeauthority",
          Title: "title",
          Closing: "closing",
          Transfers: "transfers",
        },
      },
      {
        title: "Land Administartion",
        linkUrl: "landadministatrion",
        subtabs: {
          "Do Deatils": "dodetails",
          Contract: "contract",
          Wells: "wells",
        },
      },
      {
        title: "Accounting",
        linkUrl: "accounting",
        subtabs: {
          Summary: "accountingsummary",
          "Do Summary": "dosummary",
        },
      },
      {
        title: "Reports",
        linkUrl: "repots",
        subtabs: {},
      },
    ];

    return (
      <div className="Wrapper">
        <header>
          <div class="loginBar">
            <div class="container-fluid">
              <div class="row">
                <div class="col-12">
                  <div class="logo-login-details">
                    <div class="logo">
                      <img
                        src={logo}
                        width="105"
                        height="40"
                        alt="oneMap"
                      ></img>
                    </div>
                    <div class="login">
                      <div class="dropdown">
                        <button
                          class="btn btn-secondary"
                          type="button"
                          id="dropdownMenuButton"
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          <figure class="userfigure">
                            <img
                              src={userIcon}
                              width="30"
                              height="30"
                              alt="user-icon"
                            />
                          </figure>
                          <span class="name">James Smith</span>
                          <i class="downarrow"></i>
                        </button>
                        <div
                          class="dropdown-menu"
                          aria-labelledby="dropdownMenuButton"
                        >
                          <a class="dropdown-item" href="#">
                            Profile
                          </a>
                          <a class="dropdown-item" href="#">
                            LogOut
                          </a>
                        </div>
                      </div>
                      <button
                        class="navbar-toggler"
                        id="nav-icon3"
                        type="button"
                        data-toggle="collapse"
                        data-target="#navbarNavDropdown"
                        aria-controls="navbarNavDropdown"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                      >
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="menuBar">
            <div class="container-fluid">
              <div class="row">
                <div class="col-12">
                  <nav class="navbar navbar-expand-md navbar-light">
                    <div
                      class="collapse navbar-collapse"
                      id="navbarNavDropdown"
                    >
                      <ul class="navbar-nav">
                        {navBarValues.map(({ title, linkUrl, subtabs }) => (
                          <li class="nav-item dropdown">
                            <Link
                              className={
                                Object.entries(subtabs).length === 0
                                  ? "nav-link"
                                  : "nav-link dropdown-toggle"
                              }
                              to={linkUrl}
                              id="navbarDropdownMenuLink_2"
                              data-toggle="dropdown"
                              aria-haspopup="true"
                              aria-expanded="false"
                            >
                              {title}
                            </Link>
                            {Object.entries(subtabs).length !== 0 ? (
                              <ul
                                class="dropdown-menu"
                                aria-labelledby="navbarDropdownMenuLink_2"
                              >
                                {Object.keys(subtabs).map((tabs) => (
                                  <li>
                                    <Link
                                      class="dropdown-item"
                                      to={subtabs[tabs]}
                                    >
                                     
                                      {tabs}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            ) : null}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </header>
      </div>
    );
  }
}
