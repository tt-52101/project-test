
    import LanguageSelect from "./languageSelect";
import React from "react";

import { makeStyles, withStyles } from "@material-ui/core/styles";
import {Link} from 'react-router-dom'
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

import InputBase from "@material-ui/core/InputBase";
import IconButton from "@material-ui/core/IconButton";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { useState,useEffect } from "react";

function Residents (){
  const options = [
    <div>View Room</div>,
    <div>Change Resident</div>,
    <div>Delete Room</div>,
  ];
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const BootstrapInput = withStyles((theme) => ({
    root: {
      "label + &": {
        marginTop: theme.spacing(3),
      },
    },
    input: {
      borderRadius: 4,
      position: "relative",
      backgroundColor: theme.palette.background.paper,
      border: "1px solid #ced4da",
      fontSize: 16,
      padding: "10px 26px 10px 12px",
      transition: theme.transitions.create(["border-color", "box-shadow"]),
      // Use the system font instead of the default Roboto font.
      fontFamily: [
        "-apple-system",
        "BlinkMacSystemFont",
        '"Segoe UI"',
        "Roboto",
        '"Helvetica Neue"',
        "Arial",
        "sans-serif",
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(","),
      "&:focus": {
        borderRadius: 4,
        borderColor: "#80bdff",
        boxShadow: "0 0 0 0.2rem rgba(0,123,255,.25)",
      },
    },
  }))(InputBase);

  const useStyles = makeStyles((theme) => ({
    margin: {
      margin: theme.spacing(1),
    },
  }));
  const classes = useStyles();
  const [age, setAge] = React.useState("10");
  const handleChange = (event) => {
    setAge(event.target.value);
  };
  const [data, setData] = useState([
    {
      id: 308,
      title: "123",
      body: "Test",
    },
    {
      id: 304,
      title: "0711553543",
      body: "TEST",
    },
  ]);

  const [sort, setSort] = useState("");

  const handleSearch = (event) => {
    let value = Number(event.target.value);
    let result = [];
    console.log("value",value);
    result = data.filter((data) => 
     data.id === value
    )
    if (result.length===0){
        setData([
            {
              id: 308,
              title: "123",
              body: "Test",
            },
            {
              id: 304,
              title: "0711553543",
              body: "TEST",
            },
          ])}
    if (result.length>=1){
        setData(result)}
    
    console.log("result", result);
    console.log('dataaaaaa',data)
  };


console.log('data',data)
//   useEffect(() => {
//   setData([
//     {
//       id: 308,
//       title: "123",
//       body: "Test",
//     },
//     {
//       id: 304,
//       title: "0711553543",
//       body: "TEST",
//     },
//   ])
//     }, []);

  if (sort === "location") {
    data.sort((a, b) => (a.id < b.id ? -1 : a.id > b.id ? 1 : 0));
  }

  if (sort === "resident") {
    data.sort((a, b) =>
      a.created_at > b.created_at ? -1 : a.created_at > b.created_at ? 1 : 0
    );
  }

  //   if (search.length>0){

  //  newData.push(data.filter(words=>words.id===Number(search)))
  //   }

    return (
        <div>
        <div id="huro-app" className="app-wrapper">
          <div className="app-overlay" />
          {/* Pageloader */}
          <div className="pageloader" />
          <div className="infraloader" />
          <nav
            className="navbar mobile-navbar no-shadow is-hidden-desktop is-hidden-tablet"
            aria-label="main navigation"
          >
            <div className="container">
              {/* Brand */}
              <div className="navbar-brand">
                {/* Mobile menu toggler icon */}
                <div className="brand-start">
                  <div className="navbar-burger">
                    <span />
                    <span />
                    <span />
                  </div>
                </div>
                <a className="navbar-item is-brand" href="index.html">
                  <img
                    className="light-image"
                    src="assets/img/logos/logo/logo.svg"
                    alt
                  />
                  <img
                    className="dark-image"
                    src="assets/img/logos/logo/logo-light.svg"
                    alt
                  />
                </a>
                <div className="brand-end">
                  <div className="navbar-item has-dropdown is-notification is-hidden-tablet is-hidden-desktop">
                    <a
                      className="navbar-link is-arrowless"
                      href="javascript:void(0);"
                    >
                      <i data-feather="bell" />
                      <span className="new-indicator pulsate" />
                    </a>
                    <div className="navbar-dropdown is-boxed is-right">
                      <div className="heading">
                        <div className="heading-left">
                          <h6 className="heading-title">Notifications</h6>
                        </div>
                        <div className="heading-right">
                          <a className="notification-link" href="#">
                            See all
                          </a>
                        </div>
                      </div>
                      <div className="inner has-slimscroll">
                        <ul className="notification-list">
                          <li>
                            <a className="notification-item">
                              <div className="img-left">
                                <img
                                  className="user-photo"
                                  alt
                                  src="https://via.placeholder.com/150x150"
                                  data-demo-src="assets/img/avatars/photos/7.jpg"
                                />
                              </div>
                              <div className="user-content">
                                <p className="user-info">
                                  <span className="name">Alice C.</span> left a
                                  comment.
                                </p>
                                <p className="time">1 hour ago</p>
                              </div>
                            </a>
                          </li>
                          <li>
                            <a className="notification-item">
                              <div className="img-left">
                                <img
                                  className="user-photo"
                                  alt
                                  src="https://via.placeholder.com/150x150"
                                  data-demo-src="assets/img/avatars/photos/12.jpg"
                                />
                              </div>
                              <div className="user-content">
                                <p className="user-info">
                                  <span className="name">Joshua S.</span> uploaded
                                  a file.
                                </p>
                                <p className="time">2 hours ago</p>
                              </div>
                            </a>
                          </li>
                          <li>
                            <a className="notification-item">
                              <div className="img-left">
                                <img
                                  className="user-photo"
                                  alt
                                  src="https://via.placeholder.com/150x150"
                                  data-demo-src="assets/img/avatars/photos/13.jpg"
                                />
                              </div>
                              <div className="user-content">
                                <p className="user-info">
                                  <span className="name">Tara S.</span> sent you a
                                  message.
                                </p>
                                <p className="time">2 hours ago</p>
                              </div>
                            </a>
                          </li>
                          <li>
                            <a className="notification-item">
                              <div className="img-left">
                                <img
                                  className="user-photo"
                                  alt
                                  src="https://via.placeholder.com/150x150"
                                  data-demo-src="assets/img/avatars/photos/25.jpg"
                                />
                              </div>
                              <div className="user-content">
                                <p className="user-info">
                                  <span className="name">Melany W.</span> left a
                                  comment.
                                </p>
                                <p className="time">3 hours ago</p>
                              </div>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="dropdown is-right is-spaced dropdown-trigger user-dropdown">
                    <div className="is-trigger" aria-haspopup="true">
                      <div className="profile-avatar">
                        <img
                          className="avatar"
                          src="https://via.placeholder.com/150x150"
                          data-demo-src="assets/img/avatars/photos/8.jpg"
                          alt
                        />
                      </div>
                    </div>
                    <div className="dropdown-menu" role="menu">
                      <div className="dropdown-content">
                        <div className="dropdown-head">
                          <div className="h-avatar is-large">
                            <img
                              className="avatar"
                              src="https://via.placeholder.com/150x150"
                              data-demo-src="assets/img/avatars/photos/8.jpg"
                              alt
                            />
                          </div>
                          <div className="meta">
                            <span>Erik Kovalsky</span>
                            <span>Product Manager</span>
                          </div>
                        </div>
                        <a href="#" className="dropdown-item is-media">
                          <div className="icon">
                            <i className="lnil lnil-user-alt" />
                          </div>
                          <div className="meta">
                            <span>Profile</span>
                            <span>View your profile</span>
                          </div>
                        </a>
                        <a className="dropdown-item is-media layout-switcher">
                          <div className="icon">
                            <i className="lnil lnil-layout" />
                          </div>
                          <div className="meta">
                            <span>Layout</span>
                            <span>Switch to admin/webapp</span>
                          </div>
                        </a>
                        <hr className="dropdown-divider" />
                        <a href="#" className="dropdown-item is-media">
                          <div className="icon">
                            <i className="lnil lnil-briefcase" />
                          </div>
                          <div className="meta">
                            <span>Projects</span>
                            <span>All my projects</span>
                          </div>
                        </a>
                        <a href="#" className="dropdown-item is-media">
                          <div className="icon">
                            <i className="lnil lnil-users-alt" />
                          </div>
                          <div className="meta">
                            <span>Team</span>
                            <span>Manage your team</span>
                          </div>
                        </a>
                        <hr className="dropdown-divider" />
                        <a href="#" className="dropdown-item is-media">
                          <div className="icon">
                            <i className="lnil lnil-cog" />
                          </div>
                          <div className="meta">
                            <span>Settings</span>
                            <span>Account settings</span>
                          </div>
                        </a>
                        <hr className="dropdown-divider" />
                        <div className="dropdown-item is-button">
                          <button className="button h-button is-primary is-raised is-fullwidth logout-button">
                            <span className="icon is-small">
                              <i data-feather="log-out" />
                            </span>
                            <span>Logout</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </nav>{" "}
          <div className="mobile-main-sidebar">
            <div className="inner">
              <ul className="icon-side-menu">
                <li>
                  <a
                    href="/admin-dashboards-personal-1.html"
                    id="home-sidebar-menu-mobile"
                  >
                    <i data-feather="activity" />
                  </a>
                </li>
                <li>
               
                  <a
                    href="/admin-grid-users-1.html"
                    id="layouts-sidebar-menu-mobile"
                  > 
                    <i data-feather="grid" />
                  </a>
                </li>
                <li>
                  <a href="/elements-hub.html" id="elements-sidebar-menu-mobile">
                    <i data-feather="box" />
                  </a>
                </li>
                <li>
                  <a
                    href="/components-hub.html"
                    id="components-sidebar-menu-mobile"
                  >
                    <i data-feather="cpu" />
                  </a>
                </li>
                <li>
                  <a href="/messaging-chat.html" id="open-messages-mobile">
                    <i data-feather="message-circle" />
                  </a>
                </li>
              </ul>
              <ul className="bottom-icon-side-menu">
                <li>
                  <a
                    href="javascript:"
                    className="right-panel-trigger"
                    data-panel="search-panel"
                  >
                    <i data-feather="search" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i data-feather="settings" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div id="circular-menu" className="circular-menu">
            <a
              className="floating-btn"
              onclick="document.getElementById('circular-menu').classList.toggle('active');"
            >
              <i className="fas fa-bars" />
              <i className="fas fa-times" />
            </a>
            <div className="items-wrapper">
              <div className="menu-item is-flex">
                <label className="dark-mode">
                  <input type="checkbox" defaultChecked />
                  <span />
                </label>
              </div>
              <a
                className="menu-item is-flex right-panel-trigger"
                data-panel="languages-panel"
              >
                <img
                  src="assets/img/icons/flags/united-states-of-america.svg"
                  alt
                />
              </a>
              <a className="menu-item is-flex">
                <i data-feather="bell" />
              </a>
              <a className="menu-item is-flex">
                <i data-feather="grid" />
              </a>
            </div>
          </div>
          <div className="main-sidebar has-labels">
            <div className="sidebar-brand">
              <a href="/">
                <img
                  className="light-image"
                  src="assets/img/logos/logo/logo.svg"
                  alt
                />
                <img
                  className="dark-image"
                  src="assets/img/logos/logo/logo-light.svg"
                  alt
                />
              </a>
            </div>
            <div className="sidebar-inner">
              <div className="naver" />
              <ul className="icon-menu">
                {/* Activity */}
                <li>
                  <a
                    href="/admin-dashboards-personal-1.html"
                    id="home-sidebar-menu"
                    data-content="Dashboards"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="feather feather-activity sidebar-svg"
                    >
                      <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
                    </svg>
                  </a>
                </li>{" "}
                {/* Layouts */}
                <li>
                 <Link to="/rooms"   id="layouts-sidebar-menu"
                  data-content="Rooms">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="feather feather-grid sidebar-svg"
                    >
                      <rect x="3" y="3" width="7" height="7"></rect>
                      <rect x="14" y="3" width="7" height="7"></rect>
                      <rect x="14" y="14" width="7" height="7"></rect>
                      <rect x="3" y="14" width="7" height="7"></rect>
                    </svg>
                    </Link>
                </li>{" "}
                {/* Bounties */}
                <li>
                <Link to="/residents"   id="layouts-sidebar-menu"
                  data-content="Elements">
                 
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="feather feather-box sidebar-svg"
                    >
                      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                      <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
                      <line x1="12" y1="22.08" x2="12" y2="12"></line>
                    </svg>
                 </Link>
                </li>{" "}
                {/* Bugs */}
                <li>
                  <a
                    href="components-hub.html"
                    id="components-sidebar-menu"
                    data-content="Components"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="feather feather-cpu sidebar-svg"
                    >
                      <rect
                        x="4"
                        y="4"
                        width="16"
                        height="16"
                        rx="2"
                        ry="2"
                      ></rect>
                      <rect x="9" y="9" width="6" height="6"></rect>
                      <line x1="9" y1="1" x2="9" y2="4"></line>
                      <line x1="15" y1="1" x2="15" y2="4"></line>
                      <line x1="9" y1="20" x2="9" y2="23"></line>
                      <line x1="15" y1="20" x2="15" y2="23"></line>
                      <line x1="20" y1="9" x2="23" y2="9"></line>
                      <line x1="20" y1="14" x2="23" y2="14"></line>
                      <line x1="1" y1="9" x2="4" y2="9"></line>
                      <line x1="1" y1="14" x2="4" y2="14"></line>
                    </svg>
                  </a>
                </li>{" "}
                {/* Messaging */}
                <li id="messages-menu">
                  <a
                    href="admin-messaging-chat.html"
                    id="open-messages"
                    data-content="Messaging"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="feather feather-message-circle sidebar-svg"
                    >
                      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                    </svg>
                  </a>
                </li>
              </ul>
              {/* User account */}
              <ul className="bottom-menu">
                {/* Wallet */}
                <li>
                  <a
                    href="/admin-profile-settings.html"
                    id="open-settings"
                    data-content="Settings"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="feather feather-settings sidebar-svg"
                    >
                      <circle cx="12" cy="12" r="3"></circle>
                      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
                    </svg>
                  </a>
                </li>{" "}
                {/* Profile */}
                <li id="user-menu">
                  <div
                    id="profile-menu"
                    className="dropdown profile-dropdown dropdown-trigger is-spaced is-up"
                  >
                    <img
                      src="https://via.placeholder.com/150x150"
                      data-demo-src="assets/img/avatars/photos/8.jpg"
                      alt
                    />
                    <span className="status-indicator" />
                    <div className="dropdown-menu" role="menu">
                      <div className="dropdown-content">
                        <div className="dropdown-head">
                          <div className="h-avatar is-large">
                            <img
                              className="avatar"
                              src="https://via.placeholder.com/150x150"
                              data-demo-src="assets/img/avatars/photos/8.jpg"
                              alt
                            />
                          </div>
                          <div className="meta">
                            <span>Erik Kovalsky</span>
                            <span>Product Manager</span>
                          </div>
                        </div>
                        <a
                          href="/admin-profile-view.html"
                          className="dropdown-item is-media"
                        >
                          <div className="icon">
                            <i className="lnil lnil-user-alt" />
                          </div>
                          <div className="meta">
                            <span>Profile</span>
                            <span>View your profile</span>
                          </div>
                        </a>
                        <a className="dropdown-item is-media layout-switcher">
                          <div className="icon">
                            <i className="lnil lnil-layout" />
                          </div>
                          <div className="meta">
                            <span>Layout</span>
                            <span>Switch to admin/webapp</span>
                          </div>
                        </a>
                        <hr className="dropdown-divider" />
                        <a href="#" className="dropdown-item is-media">
                          <div className="icon">
                            <i className="lnil lnil-briefcase" />
                          </div>
                          <div className="meta">
                            <span>Projects</span>
                            <span>All my projects</span>
                          </div>
                        </a>
                        <a href="#" className="dropdown-item is-media">
                          <div className="icon">
                            <i className="lnil lnil-users-alt" />
                          </div>
                          <div className="meta">
                            <span>Team</span>
                            <span>Manage your team</span>
                          </div>
                        </a>
                        <hr className="dropdown-divider" />
                        <a href="#" className="dropdown-item is-media">
                          <div className="icon">
                            <i className="lnil lnil-cog" />
                          </div>
                          <div className="meta">
                            <span>Settings</span>
                            <span>Account settings</span>
                          </div>
                        </a>
                        <hr className="dropdown-divider" />
                        <div className="dropdown-item is-button">
                          <button className="button h-button is-primary is-raised is-fullwidth logout-button">
                            <span className="icon is-small">
                              <i data-feather="log-out" />
                            </span>
                            <span>Logout</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>{" "}
          <div id="languages-panel" className="right-panel-wrapper is-languages">
            <div className="panel-overlay" />
            <div className="right-panel">
              <div className="right-panel-head">
                <h3>Select Language</h3>
                <a className="close-panel">
                  <i data-feather="chevron-right" />
                </a>
              </div>
              <div className="right-panel-body has-slimscroll">
                <div className="languages-boxes">
                  <div className="language-box">
                    <div className="language-option">
                      <input
                        type="radio"
                        name="language_selection"
                        defaultChecked
                      />
                      <div className="language-option-inner">
                        <img
                          src="assets/img/icons/flags/united-states-of-america.svg"
                          alt
                        />
                        <div className="indicator">
                          <i data-feather="check" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="language-box">
                    <div className="language-option">
                      <input type="radio" name="language_selection" />
                      <div className="language-option-inner">
                        <img src="assets/img/icons/flags/france.svg" alt />
                        <div className="indicator">
                          <i data-feather="check" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="language-box">
                    <div className="language-option">
                      <input type="radio" name="language_selection" />
                      <div className="language-option-inner">
                        <img src="assets/img/icons/flags/spain.svg" alt />
                        <div className="indicator">
                          <i data-feather="check" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="language-box">
                    <div className="language-option">
                      <input type="radio" name="language_selection" />
                      <div className="language-option-inner">
                        <img src="assets/img/icons/flags/germany.svg" alt />
                        <div className="indicator">
                          <i data-feather="check" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="language-box">
                    <div className="language-option">
                      <input type="radio" name="language_selection" />
                      <div className="language-option-inner">
                        <img src="assets/img/icons/flags/mexico.svg" alt />
                        <div className="indicator">
                          <i data-feather="check" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="language-box">
                    <div className="language-option">
                      <input type="radio" name="language_selection" />
                      <div className="language-option-inner">
                        <img src="assets/img/icons/flags/china.svg" alt />
                        <div className="indicator">
                          <i data-feather="check" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="img-wrap has-text-centered">
                  <img
                    className="light-image"
                    src="assets/img/illustrations/right-panel/languages.svg"
                    alt
                  />
                  <img
                    className="dark-image"
                    src="assets/img/illustrations/right-panel/languages-dark.svg"
                    alt
                  />
                </div>
              </div>
            </div>
          </div>{" "}
          <div id="activity-panel" className="right-panel-wrapper is-activity">
            <div className="panel-overlay" />
            <div className="right-panel">
              <div className="right-panel-head">
                <h3>Activity</h3>
                <a className="close-panel">
                  <i data-feather="chevron-right" />
                </a>
              </div>
              <div className="tabs-wrapper is-triple-slider is-squared">
                <div className="tabs-inner">
                  <div className="tabs">
                    <ul>
                      <li data-tab="team-side-tab">
                        <a>
                          <span>Team</span>
                        </a>
                      </li>
                      <li data-tab="projects-side-tab">
                        <a>
                          <span>Projects</span>
                        </a>
                      </li>
                      <li data-tab="schedule-side-tab">
                        <a>
                          <span>Schedule</span>
                        </a>
                      </li>
                      <li className="tab-naver" />
                    </ul>
                  </div>
                </div>
                <div className="right-panel-body">
                  <div id="team-side-tab" className="tab-content is-active">
                    {/*Team Member*/}
                    <div className="team-card">
                      <div className="h-avatar">
                        <img
                          className="avatar"
                          src="https://via.placeholder.com/150x150"
                          data-demo-src="assets/img/avatars/photos/12.jpg"
                          alt
                        />
                        <img
                          className="badge"
                          src="https://via.placeholder.com/150x150"
                          data-demo-src="assets/img/icons/flags/united-states-of-america.svg"
                          alt
                        />
                      </div>
                      <div className="meta">
                        <span>Joshua S.</span>
                        <span>
                          <i data-feather="map-pin" />
                          Las Vegas, NV
                        </span>
                      </div>
                      <a className="link">
                        <i data-feather="arrow-right" />
                      </a>
                    </div>
                    {/*Team Member*/}
                    <div className="team-card">
                      <div className="h-avatar">
                        <img
                          className="avatar"
                          src="https://via.placeholder.com/150x150"
                          data-demo-src="assets/img/avatars/photos/25.jpg"
                          alt
                        />
                        <img
                          className="badge"
                          src="https://via.placeholder.com/150x150"
                          data-demo-src="assets/img/icons/flags/united-states-of-america.svg"
                          alt
                        />
                      </div>
                      <div className="meta">
                        <span>Melany W.</span>
                        <span>
                          <i data-feather="map-pin" />
                          San Jose, CA
                        </span>
                      </div>
                      <a className="link">
                        <i data-feather="arrow-right" />
                      </a>
                    </div>
                    {/*Team Member*/}
                    <div className="team-card">
                      <div className="h-avatar">
                        <img
                          className="avatar"
                          src="https://via.placeholder.com/150x150"
                          data-demo-src="assets/img/avatars/photos/18.jpg"
                          alt
                        />
                        <img
                          className="badge"
                          src="https://via.placeholder.com/150x150"
                          data-demo-src="assets/img/icons/flags/united-states-of-america.svg"
                          alt
                        />
                      </div>
                      <div className="meta">
                        <span>Esteban C.</span>
                        <span>
                          <i data-feather="map-pin" />
                          Miami, FL
                        </span>
                      </div>
                      <a className="link">
                        <i data-feather="arrow-right" />
                      </a>
                    </div>
                    {/*Team Member*/}
                    <div className="team-card">
                      <div className="h-avatar">
                        <img
                          className="avatar"
                          src="https://via.placeholder.com/150x150"
                          data-demo-src="assets/img/avatars/photos/13.jpg"
                          alt
                        />
                        <img
                          className="badge"
                          src="https://via.placeholder.com/150x150"
                          data-demo-src="assets/img/icons/flags/united-states-of-america.svg"
                          alt
                        />
                      </div>
                      <div className="meta">
                        <span>Tara S.</span>
                        <span>
                          <i data-feather="map-pin" />
                          New York, NY
                        </span>
                      </div>
                      <a className="link">
                        <i data-feather="arrow-right" />
                      </a>
                    </div>
                  </div>
                  <div id="projects-side-tab" className="tab-content">
                    {/*Project*/}
                    <div className="project-card">
                      <div className="project-inner">
                        <img
                          className="project-avatar"
                          src="https://via.placeholder.com/150x150"
                          data-demo-src="assets/img/icons/logos/slicer.svg"
                          alt
                        />
                        <div className="meta">
                          <span>The slicer project</span>
                          <span>getslicer.io</span>
                        </div>
                        <a className="link">
                          <i data-feather="arrow-right" />
                        </a>
                      </div>
                      <div className="project-foot">
                        <progress
                          className="progress is-primary is-tiny"
                          value={31}
                          max={100}
                        >
                          31%
                        </progress>
                        <div className="foot-stats">
                          <span>5 / 24</span>
                          <div className="avatar-stack">
                            <div className="h-avatar is-small">
                              <img
                                className="avatar"
                                src="https://via.placeholder.com/150x150"
                                data-demo-src="assets/img/avatars/photos/7.jpg"
                                alt
                              />
                            </div>
                            <div className="h-avatar is-small">
                              <img
                                className="avatar"
                                src="https://via.placeholder.com/150x150"
                                data-demo-src="assets/img/avatars/photos/5.jpg"
                                alt
                              />
                            </div>
                            <div className="h-avatar is-small">
                              <img
                                className="avatar"
                                src="https://via.placeholder.com/150x150"
                                data-demo-src="assets/img/avatars/photos/8.jpg"
                                alt
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/*Project*/}
                    <div className="project-card">
                      <div className="project-inner">
                        <img
                          className="project-avatar"
                          src="https://via.placeholder.com/150x150"
                          data-demo-src="assets/img/icons/logos/metamovies.svg"
                          alt
                        />
                        <div className="meta">
                          <span>Metamovies reworked</span>
                          <span>metamovies.co</span>
                        </div>
                        <a className="link">
                          <i data-feather="arrow-right" />
                        </a>
                      </div>
                      <div className="project-foot">
                        <progress
                          className="progress is-primary is-tiny"
                          value={84}
                          max={100}
                        >
                          84%
                        </progress>
                        <div className="foot-stats">
                          <span>28 / 31</span>
                          <div className="avatar-stack">
                            <div className="h-avatar is-small">
                              <img
                                className="avatar"
                                src="https://via.placeholder.com/150x150"
                                data-demo-src="assets/img/avatars/photos/13.jpg"
                                alt
                              />
                            </div>
                            <div className="h-avatar is-small">
                              <img
                                className="avatar"
                                src="https://via.placeholder.com/150x150"
                                data-demo-src="assets/img/avatars/photos/18.jpg"
                                alt
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/*Project*/}
                    <div className="project-card">
                      <div className="project-inner">
                        <img
                          className="project-avatar"
                          src="https://via.placeholder.com/150x150"
                          data-demo-src="assets/img/icons/logos/fastpizza.svg"
                          alt
                        />
                        <div className="meta">
                          <span>Fast Pizza redesign</span>
                          <span>fastpizza.com</span>
                        </div>
                        <a className="link">
                          <i data-feather="arrow-right" />
                        </a>
                      </div>
                      <div className="project-foot">
                        <progress
                          className="progress is-primary is-tiny"
                          value={60}
                          max={100}
                        >
                          60%
                        </progress>
                        <div className="foot-stats">
                          <span>25 / 39</span>
                          <div className="avatar-stack">
                            <div className="h-avatar is-small">
                              <img
                                className="avatar"
                                src="https://via.placeholder.com/150x150"
                                data-demo-src="assets/img/avatars/photos/7.jpg"
                                alt
                              />
                            </div>
                            <div className="h-avatar is-small">
                              <img
                                className="avatar"
                                src="https://via.placeholder.com/150x150"
                                data-demo-src="assets/img/avatars/photos/25.jpg"
                                alt
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div id="schedule-side-tab" className="tab-content">
                    {/*Timeline*/}
                    <div className="icon-timeline">
                      {/*Timeline item*/}
                      <div className="timeline-item">
                        <div className="timeline-icon">
                          <i data-feather="phone-call" />
                        </div>
                        <div className="timeline-content">
                          <p>Call Danny at Colby's</p>
                          <span>Today - 11:30am</span>
                        </div>
                      </div>
                      {/*Timeline item*/}
                      <div className="timeline-item">
                        <div className="timeline-icon">
                          <img
                            className="avatar"
                            src="https://via.placeholder.com/150x150"
                            data-demo-src="assets/img/avatars/photos/7.jpg"
                            alt
                          />
                        </div>
                        <div className="timeline-content">
                          <p>Meeting with Alice</p>
                          <span>Today - 01:00pm</span>
                        </div>
                      </div>
                      {/*Timeline item*/}
                      <div className="timeline-item">
                        <div className="timeline-icon">
                          <i data-feather="message-circle" />
                        </div>
                        <div className="timeline-content">
                          <p>Answer Annie's message</p>
                          <span>Today - 01:45pm</span>
                        </div>
                      </div>
                      {/*Timeline item*/}
                      <div className="timeline-item">
                        <div className="timeline-icon">
                          <i data-feather="mail" />
                        </div>
                        <div className="timeline-content">
                          <p>Send new campaign</p>
                          <span>Today - 02:30pm</span>
                        </div>
                      </div>
                      {/*Timeline item*/}
                      <div className="timeline-item">
                        <div className="timeline-icon">
                          <i data-feather="smile" />
                        </div>
                        <div className="timeline-content">
                          <p>Project review</p>
                          <span>Today - 03:30pm</span>
                        </div>
                      </div>
                      {/*Timeline item*/}
                      <div className="timeline-item">
                        <div className="timeline-icon">
                          <i data-feather="phone-call" />
                        </div>
                        <div className="timeline-content">
                          <p>Call Trisha Jackson</p>
                          <span>Today - 05:00pm</span>
                        </div>
                      </div>
                      {/*Timeline item*/}
                      <div className="timeline-item">
                        <div className="timeline-icon">
                          <i data-feather="feather" />
                        </div>
                        <div className="timeline-content">
                          <p>Write proposal for Don</p>
                          <span>Today - 06:00pm</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>{" "}
          <div
            id="search-panel"
            className="right-panel-wrapper is-search is-left"
          >
            <div className="panel-overlay" />
            <div className="right-panel">
              <div className="right-panel-head">
                <img
                  className="light-image"
                  src="assets/img/logos/logo/logo.svg"
                  alt
                />
                <img
                  className="dark-image"
                  src="assets/img/logos/logo/logo-light.svg"
                  alt
                />
                <a className="close-panel">
                  <i data-feather="chevron-left" />
                </a>
              </div>
              <div className="right-panel-body has-slimscroll">
                <div className="field">
                  <div className="control has-icon">
                    <input
                      type="text"
                      className="input is-rounded search-input"
                      placeholder="Search..."
                    />
                    <div className="form-icon">
                      <i data-feather="search" />
                    </div>
                    <div className="search-results has-slimscroll" />
                  </div>
                </div>
                <div className="recent">
                  <h4>Recently viewed</h4>
                  <div className="recent-block">
                    <a className="media-flex-center">
                      <div className="h-icon is-info is-rounded is-small">
                        <i data-feather="chrome" />
                      </div>
                      <div className="flex-meta">
                        <span>Browser Support</span>
                        <span>Blog post</span>
                      </div>
                    </a>
                    <a className="media-flex-center">
                      <div className="h-icon is-orange is-rounded is-small">
                        <i data-feather="tv" />
                      </div>
                      <div className="flex-meta">
                        <span>Twitch API</span>
                        <span>Blog post</span>
                      </div>
                    </a>
                    <a className="media-flex-center">
                      <div className="h-icon is-green is-rounded is-small">
                        <i data-feather="twitter" />
                      </div>
                      <div className="flex-meta">
                        <span>Twitter Auth</span>
                        <span>Blog post</span>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="recent">
                  <h4>Recent Members</h4>
                  <div className="recent-block">
                    <a className="media-flex-center">
                      <div className="h-avatar is-small">
                        <img
                          className="avatar"
                          src="https://via.placeholder.com/150x150"
                          data-demo-src="assets/img/avatars/photos/7.jpg"
                          alt
                          data-user-popover={0}
                        />
                      </div>
                      <div className="flex-meta">
                        <span>Alice C.</span>
                        <span>Software Engineer</span>
                      </div>
                    </a>
                    <a className="media-flex-center">
                      <div className="h-avatar is-small">
                        <img
                          className="avatar"
                          src="https://via.placeholder.com/150x150"
                          data-demo-src="assets/img/avatars/photos/13.jpg"
                          alt
                          data-user-popover={6}
                        />
                      </div>
                      <div className="flex-meta">
                        <span>Tara S.</span>
                        <span>UI/UX Designer</span>
                      </div>
                    </a>
                    <a className="media-flex-center">
                      <div className="h-avatar is-small">
                        <img
                          className="avatar"
                          src="https://via.placeholder.com/150x150"
                          data-demo-src="assets/img/avatars/photos/22.jpg"
                          alt
                          data-user-popover={5}
                        />
                      </div>
                      <div className="flex-meta">
                        <span>Jimmy H.</span>
                        <span>Project Manager</span>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div id="components-sidebar" className="sidebar-panel is-generic">
            <div className="subpanel-header">
              <h3 className="no-mb">Components</h3>
              <div className="panel-close">
                <i data-feather="x" />
              </div>
            </div>
            <div className="inner" data-simplebar>
              <ul>
                <li>
                  <a href="/components-hub.html">Components Hub</a>
                </li>
                <li>
                  <a href="/components-avatars.html">Avatars</a>
                </li>
                <li className="has-children">
                  <div className="collapse-wrap">
                    <a href="javascript:void(0);" className="parent-link">
                      Accordions <i data-feather="chevron-right" />
                    </a>
                  </div>
                  <ul>
                    <li>
                      <a
                        className="is-submenu"
                        href="/components-accordion-basic.html"
                      >
                        <i data-feather="circle" />
                        Accordion
                      </a>
                    </li>
                    <li>
                      <a
                        className="is-submenu"
                        href="/components-accordion-collapse.html"
                      >
                        <i data-feather="circle" />
                        Collapse
                      </a>
                    </li>
                    <li>
                      <a
                        className="is-submenu"
                        href="/components-accordion-images.html"
                      >
                        <i data-feather="circle" />
                        Image Accordion
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="/components-breadcrumb.html">Breadcrumb</a>
                </li>
                <li>
                  <a href="/components-dropdown.html">Dropdown</a>
                </li>
                <li>
                  <a href="/components-icon-box.html">Icon Box</a>
                </li>
                <li>
                  <a href="/components-loader.html">Loader</a>
                </li>
                <li>
                  <a href="/components-messages.html">Message</a>
                </li>
                <li>
                  <a href="/components-modal.html">Modal</a>
                </li>
                <li>
                  <a href="/components-progress.html">Progress</a>
                </li>
                <li className="has-children">
                  <div className="collapse-wrap">
                    <a href="javascript:void(0);" className="parent-link">
                      Tabs <i data-feather="chevron-right" />
                    </a>
                  </div>
                  <ul>
                    <li>
                      <a
                        className="is-submenu"
                        href="/components-tabs-regular.html"
                      >
                        <i data-feather="circle" />
                        Regular Tabs
                      </a>
                    </li>
                    <li>
                      <a
                        className="is-submenu"
                        href="/components-tabs-slider.html"
                      >
                        <i data-feather="circle" />
                        Slider Tabs
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="has-children">
                  <div className="collapse-wrap">
                    <a href="javascript:void(0);" className="parent-link">
                      Flex Table <i data-feather="chevron-right" />
                    </a>
                  </div>
                  <ul>
                    <li>
                      <a
                        className="is-submenu"
                        href="/components-table-flex.html"
                      >
                        <i data-feather="circle" />
                        Base Table
                      </a>
                    </li>
                    <li>
                      <a
                        className="is-submenu"
                        href="/components-table-flex-compact.html"
                      >
                        <i data-feather="circle" />
                        Compact Table
                      </a>
                    </li>
                    <li>
                      <a
                        className="is-submenu"
                        href="/components-table-flex-media.html"
                      >
                        <i data-feather="circle" />
                        Media Table
                      </a>
                    </li>
                    <li>
                      <a
                        className="is-submenu"
                        href="/components-table-flex-advanced.html"
                      >
                        <i data-feather="circle" />
                        Advanced Table
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="/components-snacks.html">Snacks</a>
                </li>
                <li className="divider" />
                <li className="has-children">
                  <div className="collapse-wrap">
                    <a href="javascript:void(0);" className="parent-link">
                      Plugins <i data-feather="chevron-right" />
                    </a>
                  </div>
                  <ul>
                    <li>
                      <a
                        className="is-submenu"
                        href="/components-plugins-alertify.html"
                      >
                        <i data-feather="circle" />
                        Alertify
                      </a>
                    </li>
                    <li>
                      <a
                        className="is-submenu"
                        href="/components-plugins-autocomplete.html"
                      >
                        <i data-feather="circle" />
                        Autocomplete
                      </a>
                    </li>
                    <li>
                      <a
                        className="is-submenu"
                        href="/components-plugins-datepicker.html"
                      >
                        <i data-feather="circle" />
                        Datepicker
                      </a>
                    </li>
                    <li>
                      <a
                        className="is-submenu"
                        href="/components-plugins-choices.html"
                      >
                        <i data-feather="circle" />
                        ChoicesJs
                      </a>
                    </li>
                    <li>
                      <a
                        className="is-submenu"
                        href="/components-plugins-nouislider.html"
                      >
                        <i data-feather="circle" />
                        NoUI Slider
                      </a>
                    </li>
                    <li>
                      <a
                        className="is-submenu"
                        href="/components-plugins-filepond.html"
                      >
                        <i data-feather="circle" />
                        Filepond
                      </a>
                    </li>
                    <li>
                      <a
                        className="is-submenu"
                        href="/components-plugins-lightgallery.html"
                      >
                        <i data-feather="circle" />
                        Light Gallery
                      </a>
                    </li>
                    <li>
                      <a
                        className="is-submenu"
                        href="/components-plugins-videogallery.html"
                      >
                        <i data-feather="circle" />
                        Video Gallery
                      </a>
                    </li>
                    <li>
                      <a
                        className="is-submenu"
                        href="/components-plugins-video-player.html"
                      >
                        <i data-feather="circle" />
                        Video Player
                      </a>
                    </li>
                    <li>
                      <a
                        className="is-submenu"
                        href="/components-plugins-toasts.html"
                      >
                        <i data-feather="circle" />
                        Toasts
                      </a>
                    </li>
                    <li>
                      <a
                        className="is-submenu"
                        href="/components-plugins-webuipopover.html"
                      >
                        <i data-feather="circle" />
                        WebUI Popover
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="has-children">
                  <div className="collapse-wrap">
                    <a href="javascript:void(0);" className="parent-link">
                      Rich Text <i data-feather="chevron-right" />
                    </a>
                  </div>
                  <ul>
                    <li>
                      <a
                        className="is-submenu"
                        href="/components-plugins-editor-summernote.html"
                      >
                        <i data-feather="circle" />
                        Summernote
                      </a>
                    </li>
                    <li>
                      <a
                        className="is-submenu"
                        href="/components-plugins-editor-sun.html"
                      >
                        <i data-feather="circle" />
                        Sun Editor
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
          <div className="mobile-subsidebar is-activity">
            <div className="inner">
              <div className="sidebar-title">
                <h3>Components</h3>
              </div>
              <ul className="submenu">
                <li>
                  <a href="/components-hub.html">Components Hub</a>
                </li>
                <li>
                  <a href="/components-avatars.html">Avatars</a>
                </li>
                <li className="has-children">
                  <div className="collapse-wrap">
                    <a href="javascript:void(0);" className="parent-link">
                      Accordions <i data-feather="chevron-right" />
                    </a>
                  </div>
                  <ul>
                    <li>
                      <a
                        className="is-submenu"
                        href="/components-accordion-basic.html"
                      >
                        <i data-feather="circle" />
                        Accordion
                      </a>
                    </li>
                    <li>
                      <a
                        className="is-submenu"
                        href="/components-accordion-collapse.html"
                      >
                        <i data-feather="circle" />
                        Collapse
                      </a>
                    </li>
                    <li>
                      <a
                        className="is-submenu"
                        href="/components-accordion-images.html"
                      >
                        <i data-feather="circle" />
                        Image Accordion
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="/components-breadcrumb.html">Breadcrumb</a>
                </li>
                <li>
                  <a href="/components-dropdown.html">Dropdown</a>
                </li>
                <li>
                  <a href="/components-icon-box.html">Icon Box</a>
                </li>
                <li>
                  <a href="/components-loader.html">Loader</a>
                </li>
                <li>
                  <a href="/components-messages.html">Message</a>
                </li>
                <li>
                  <a href="/components-modal.html">Modal</a>
                </li>
                <li>
                  <a href="/components-progress.html">Progress</a>
                </li>
                <li className="has-children">
                  <div className="collapse-wrap">
                    <a href="javascript:void(0);" className="parent-link">
                      Tabs <i data-feather="chevron-right" />
                    </a>
                  </div>
                  <ul>
                    <li>
                      <a
                        className="is-submenu"
                        href="/components-tabs-regular.html"
                      >
                        <i data-feather="circle" />
                        Regular Tabs
                      </a>
                    </li>
                    <li>
                      <a
                        className="is-submenu"
                        href="/components-tabs-slider.html"
                      >
                        <i data-feather="circle" />
                        Slider Tabs
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="has-children">
                  <div className="collapse-wrap">
                    <a href="javascript:void(0);" className="parent-link">
                      Flex Table <i data-feather="chevron-right" />
                    </a>
                  </div>
                  <ul>
                    <li>
                      <a
                        className="is-submenu"
                        href="/components-table-flex.html"
                      >
                        <i data-feather="circle" />
                        Base Table
                      </a>
                    </li>
                    <li>
                      <a
                        className="is-submenu"
                        href="/components-table-flex-compact.html"
                      >
                        <i data-feather="circle" />
                        Compact Table
                      </a>
                    </li>
                    <li>
                      <a
                        className="is-submenu"
                        href="/components-table-flex-media.html"
                      >
                        <i data-feather="circle" />
                        Media Table
                      </a>
                    </li>
                    <li>
                      <a
                        className="is-submenu"
                        href="/components-table-flex-advanced.html"
                      >
                        <i data-feather="circle" />
                        Advanced Table
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="/components-snacks.html">Snacks</a>
                </li>
                <li className="divider" />
                <li className="has-children">
                  <div className="collapse-wrap">
                    <a href="javascript:void(0);" className="parent-link">
                      Plugins <i data-feather="chevron-right" />
                    </a>
                  </div>
                  <ul>
                    <li>
                      <a
                        className="is-submenu"
                        href="/components-plugins-alertify.html"
                      >
                        <i data-feather="circle" />
                        Alertify
                      </a>
                    </li>
                    <li>
                      <a
                        className="is-submenu"
                        href="/components-plugins-autocomplete.html"
                      >
                        <i data-feather="circle" />
                        Autocomplete
                      </a>
                    </li>
                    <li>
                      <a
                        className="is-submenu"
                        href="/components-plugins-pickaday.html"
                      >
                        <i data-feather="circle" />
                        Datepicker
                      </a>
                    </li>
                    <li>
                      <a
                        className="is-submenu"
                        href="/components-plugins-choices.html"
                      >
                        <i data-feather="circle" />
                        ChoicesJs
                      </a>
                    </li>
                    <li>
                      <a
                        className="is-submenu"
                        href="/components-plugins-nouislider.html"
                      >
                        <i data-feather="circle" />
                        NoUI Slider
                      </a>
                    </li>
                    <li>
                      <a
                        className="is-submenu"
                        href="/components-plugins-filepond.html"
                      >
                        <i data-feather="circle" />
                        Filepond
                      </a>
                    </li>
                    <li>
                      <a
                        className="is-submenu"
                        href="/components-plugins-lightgallery.html"
                      >
                        <i data-feather="circle" />
                        Light Gallery
                      </a>
                    </li>
                    <li>
                      <a
                        className="is-submenu"
                        href="/components-plugins-videogallery.html"
                      >
                        <i data-feather="circle" />
                        Video Gallery
                      </a>
                    </li>
                    <li>
                      <a
                        className="is-submenu"
                        href="/components-plugins-video-player.html"
                      >
                        <i data-feather="circle" />
                        Video Player
                      </a>
                    </li>
                    <li>
                      <a
                        className="is-submenu"
                        href="/components-plugins-toasts.html"
                      >
                        <i data-feather="circle" />
                        Toasts
                      </a>
                    </li>
                    <li>
                      <a
                        className="is-submenu"
                        href="/components-plugins-webuipopover.html"
                      >
                        <i data-feather="circle" />
                        WebUI Popover
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="has-children">
                  <div className="collapse-wrap">
                    <a href="javascript:void(0);" className="parent-link">
                      Rich Text <i data-feather="chevron-right" />
                    </a>
                  </div>
                  <ul>
                    <li>
                      <a
                        className="is-submenu"
                        href="/components-plugins-editor-summernote.html"
                      >
                        <i data-feather="circle" />
                        Summernote
                      </a>
                    </li>
                    <li>
                      <a
                        className="is-submenu"
                        href="/components-plugins-editor-sun.html"
                      >
                        <i data-feather="circle" />
                        Sun Editor
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
          {/* Content Wrapper */}
          <div
            id="huro-demo"
            className="view-wrapper"
            data-sidebar-open
            data-naver-offset={342}
            data-menu-item="#components-sidebar-menu"
            data-mobile-item="#components-sidebar-menu-mobile"
          >
            <div className="page-content-wrapper">
              <div className="page-content is-relative">
                <div className="page-title has-text-centered">
                  {/* Sidebar Trigger */}
                  <div
                    className="huro-hamburger nav-trigger push-resize"
                    data-sidebar="components-sidebar"
                  >
                    <span className="menu-toggle has-chevron">
                      <span className="icon-box-toggle">
                        <span className="rotate">
                          <i className="icon-line-top" />
                          <i className="icon-line-center" />
                          <i className="icon-line-bottom" />
                        </span>
                      </span>
                    </span>
                  </div>
                  <div className="title-wrap">
                    <h1 className="title is-4">Residents</h1>
                  </div>
                  <div className="toolbar ml-auto">
                    <div>
                      <FormControl className={classes.margin}>
                        <Select
                          labelId="demo-customized-select-label"
                          id="demo-customized-select"
                          value={age}
                          onChange={handleChange}
                          input={<BootstrapInput />}
                        >
                          <MenuItem
                            value={10}
                            onClick={() => console.log("site 1")}
                          >
                            Site 1
                          </MenuItem>
                          <MenuItem
                            value={20}
                            onClick={() => console.log("site 2")}
                          >
                            Site 2
                          </MenuItem>
                          <MenuItem
                            value={30}
                            onClick={() => console.log("site 3")}
                          >
                            Site 3
                          </MenuItem>
                        </Select>
                      </FormControl>
                    </div>
  
                    <div className="toolbar-link">
                      <label className="dark-mode ml-auto">
                        <input type="checkbox" defaultChecked />
                        <span />
                      </label>
                    </div>
                    <a
                      className="toolbar-link right-panel-trigger"
                      data-panel="languages-panel"
                    >
                      <LanguageSelect />
                    </a>
                  </div>{" "}
                </div>
                <div className="page-content-inner">
                  <div className="columns">
                    <div className="column is-12">
                      {/*Flex Table*/}
                      {/* <div className="demo-card has-more-margin">
                  <div className="demo-title">
                    <h3 className="title is-thin is-5">Media Table </h3>
                    <p>
                      Huro provides a custom table component called flex table. It
                      looks like a table but is not a Html5 table. Instead, it
                      uses the flexbox technology and is fully responsive. Check
                      the markup for more details.
                    </p>
                  </div>
                </div> */}
  
                      <div className="search">
                        <div class="field">
                          <div class="control has-icon">
                            <input
                              type="text"
                              class="input"
                              placeholder="Search"
                              onChange={(event) => handleSearch(event)}
                            />
                            <div class="form-icon">
                              <i class="lnil lnil-search"></i>
                            </div>
                          </div>
                        </div>
                        <a class="button h-button is-success">+Add</a>
                      </div>
                      <div className="flex-table">
                        {/*Table header*/}
  
                        <div className="flex-table-header">
                          <span onClick={() => setSort("location")}>
                            Location
                          </span>
                          <span onClick={() => setSort("resident")}>
                            Resident
                          </span>
                          <span>Number</span>
                          <span> </span>
                        </div>
                        {/*Table item*/}
                        {data.map((items) => (
                          <div className="flex-table-item">
                            <div className="flex-table-cell" data-th="Location">
                              <span className="light-text">{items.id}</span>
                            </div>
                            <div className="flex-table-cell" data-th="Industry">
                              <span className="light-text">{items.body}</span>
                            </div>
                            <div className="flex-table-cell" data-th="Status">
                              <span>{items.title}</span>
                            </div>
                            <div className="flex-table-cell" data-th="Relations">
                              <span>
                                <IconButton
                                  aria-label="more"
                                  aria-controls="long-menu"
                                  aria-haspopup="true"
                                  onClick={handleClick}
                                >
                                  <MoreVertIcon />
                                </IconButton>
                                <Menu
                                  id="long-menu"
                                  anchorEl={anchorEl}
                                  keepMounted
                                  open={open}
                                  onClose={handleClose}
                                  PaperProps={{
                                    style: {
                                      width: "20ch",
                                    },
                                  }}
                                >
                                  {options.map((option, index) => (
                                    <MenuItem
                                      key={option + index}
                                      onClick={handleClose}
                                    >
                                      {option}
                                    </MenuItem>
                                  ))}
                                </Menu>
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>
                      {/*Table Pagination*/}
                      <nav
                        className="flex-pagination pagination is-rounded"
                        aria-label="pagination"
                      >
                        <a className="pagination-previous">Previous</a>
                        <a className="pagination-next">Next</a>
                        <ul className="pagination-list">
                          <li>
                            <a
                              className="pagination-link"
                              aria-label="Goto page 1"
                            >
                              1
                            </a>
                          </li>
                          <li>
                            <span className="pagination-ellipsis">…</span>
                          </li>
                          <li>
                            <a
                              className="pagination-link"
                              aria-label="Goto page 45"
                            >
                              45
                            </a>
                          </li>
                          <li>
                            <a
                              className="pagination-link is-current"
                              aria-label="Page 46"
                              aria-current="page"
                            >
                              46
                            </a>
                          </li>
                          <li>
                            <a
                              className="pagination-link"
                              aria-label="Goto page 47"
                            >
                              47
                            </a>
                          </li>
                          <li>
                            <span className="pagination-ellipsis">…</span>
                          </li>
                          <li>
                            <a
                              className="pagination-link"
                              aria-label="Goto page 86"
                            >
                              86
                            </a>
                          </li>
                        </ul>
                      </nav>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}
export default Residents