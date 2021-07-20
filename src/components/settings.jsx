import React, { useContext } from "react";
import Popover from "@material-ui/core/Popover";
import Button from "@material-ui/core/Button";
import MenuItem from "@material-ui/core/MenuItem";
import LanguageSelect from "./languageSelect";
import { Token } from "./token";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useHistory, Redirect } from "react-router-dom";
function Settings() {
  let tok = useContext(Token);
  const { t } = useTranslation();
  const useStyles = makeStyles({
    but: {
      width: "auto",
      display: "inline-block",
      minWidth: 0,
      padding: 0,
      border: 0,
      outline: 0,
    },
  });

  const [data, setData] = useState("");
  const classes = useStyles();
  const [user, setUser] = useState("");
  useEffect(() => {
    fetch("https://reqres.in/api/users/1")
      .then((data) => data.json())
      .then((user) => setUser(user.data.avatar) || setData(user));
  }, []);

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
if (localStorage.getItem('token')===null){
return <Redirect push to="/login" />
}
  let cookie = document.cookie;
  
   if(cookie!=`token=${tok[0]}`||`token=${localStorage.getItem('token')}`!=cookie){
     return   <Redirect push to="/login" />
   }
  let x = document.cookie;
 
  
  return (
    <>
      <div id="huro-app" className="app-wrapper">
        {/* Pageloader */}

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
                                // src={user}
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
              </div>
            </div>
          </div>
        </nav>
      </div>
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
            </li>
            {/* Layouts */}
            <li>
              <a
                href="/admin-grid-users-1.html"
                id="layouts-sidebar-menu"
                data-content="Layouts"
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
                  className="feather feather-grid sidebar-svg"
                >
                  <rect x="3" y="3" width="7" height="7"></rect>
                  <rect x="14" y="3" width="7" height="7"></rect>
                  <rect x="14" y="14" width="7" height="7"></rect>
                  <rect x="3" y="14" width="7" height="7"></rect>
                </svg>
              </a>
            </li>
            {/* Bounties */}
            <li>
              <a
                href="elements-hub.html"
                id="elements-sidebar-menu"
                data-content="Elements"
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
                  className="feather feather-box sidebar-svg"
                >
                  <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                  <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
                  <line x1="12" y1="22.08" x2="12" y2="12"></line>
                </svg>
              </a>
            </li>
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
                  <rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect>
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
            </li>
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
            {/* Notifications */}
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
            </li>
            {/* Profile */}
            {/* <li id="user-menu">
              <div id="profile-menu" class="dropdown profile-dropdown dropdown-trigger is-spaced is-up">
                  <img src="https://via.placeholder.com/150x150" data-demo-src="assets/img/avatars/photos/8.jpg" alt="">
                  <span class="status-indicator"></span>

                  <div class="dropdown-menu" role="menu">
                      <div class="dropdown-content">
                          <div class="dropdown-head">
                              <div class="h-avatar is-large">
                                  <img class="avatar" src="https://via.placeholder.com/150x150" data-demo-src="assets/img/avatars/photos/8.jpg" alt="">
                              </div>
                              <div class="meta">
                                  <span>Erik Kovalsky</span>
                                  <span>Product Manager</span>
                              </div>
                          </div>
                          <a href="/admin-profile-view.html" class="dropdown-item is-media">
                              <div class="icon">
                                  <i class="lnil lnil-user-alt"></i>
                              </div>
                              <div class="meta">
                                  <span>Profile</span>
                                  <span>View your profile</span>
                              </div>
                          </a>
                          <a class="dropdown-item is-media layout-switcher">
                              <div class="icon">
                                  <i class="lnil lnil-layout"></i>
                              </div>
                              <div class="meta">
                                  <span>Layout</span>
                                  <span>Switch to admin/webapp</span>
                              </div>
                          </a>
                          <hr class="dropdown-divider">
                          <a href="#" class="dropdown-item is-media">
                              <div class="icon">
                                  <i class="lnil lnil-briefcase"></i>
                              </div>
                              <div class="meta">
                                  <span>Projects</span>
                                  <span>All my projects</span>
                              </div>
                          </a>
                          <a href="#" class="dropdown-item is-media">
                              <div class="icon">
                                  <i class="lnil lnil-users-alt"></i>
                              </div>
                              <div class="meta">
                                  <span>Team</span>
                                  <span>Manage your team</span>
                              </div>
                          </a>
                          <hr class="dropdown-divider">
                          <a href="#" class="dropdown-item is-media">
                              <div class="icon">
                                  <i class="lnil lnil-cog"></i>
                              </div>
                              <div class="meta">
                                  <span>Settings</span>
                                  <span>Account settings</span>
                              </div>
                          </a>
                          <hr class="dropdown-divider">
                          <div class="dropdown-item is-button">
                              <button class="button h-button is-primary is-raised is-fullwidth logout-button">
                                          <span class="icon is-small">
                                              <i data-feather="log-out"></i>
                                          </span>
                                          <span>Logout</span>
                                      </button>
                          </div>
                      </div>
                  </div>
              </div>
          </li> */}
          </ul>
        </div>
      </div>
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
                    <img src="assets/img/icons/flags/canada.svg" alt />
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
      </div>
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
                  <li data-tab="team-side-tab" className="is-active">
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
      </div>
      <div id="search-panel" className="right-panel-wrapper is-search is-left">
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
      <div id="layouts-sidebar" className="sidebar-panel is-generic">
        <div className="subpanel-header">
          <div className="dropdown project-dropdown dropdown-trigger is-spaced">
            <div className="h-avatar is-small">
              <span className="avatar is-fake is-h-green">
                <span>H</span>
              </span>
            </div>
            <span className="status-indicator" />
            <div className="dropdown-menu" role="menu">
              <div className="dropdown-content">
                <div className="dropdown-block">
                  <div className="h-avatar is-small">
                    <span className="avatar is-fake is-warning">
                      <span>D</span>
                    </span>
                  </div>
                  <div className="meta">
                    <span className="dark-inverted">Delivery App Project</span>
                    <span>Food For Good</span>
                  </div>
                </div>
                <div className="dropdown-block">
                  <div className="h-avatar is-small">
                    <span className="avatar is-fake is-h-green">
                      <span>H</span>
                    </span>
                  </div>
                  <div className="meta">
                    <span className="dark-inverted">
                      Health and Fitness Dashboard
                    </span>
                    <span>Fit'n'Dance</span>
                  </div>
                </div>
                <div className="dropdown-block">
                  <div className="h-avatar is-small">
                    <span className="avatar is-fake is-info">
                      <span>L</span>
                    </span>
                  </div>
                  <div className="meta">
                    <span className="dark-inverted">
                      Learning Tracker Dashboard
                    </span>
                    <span>Fit'n'Dance</span>
                  </div>
                </div>
                <div className="dropdown-block">
                  <div className="h-avatar is-small">
                    <span className="avatar is-fake is-h-purple">
                      <span>B</span>
                    </span>
                  </div>
                  <div className="meta">
                    <span className="dark-inverted">
                      Banking and Finance Dashboard
                    </span>
                    <span>H Bank</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <h3 className="no-mb">Layouts</h3>
          <div className="panel-close">
            <i data-feather="x" />
          </div>
        </div>
        <div className="inner" data-simplebar>
          <ul>
            <li className="has-children">
              <div className="collapse-wrap">
                <a href="javascript:void(0);" className="parent-link">
                  Lists <i data-feather="chevron-right" />
                </a>
              </div>
              <ul>
                <li>
                  <a className="is-submenu" href="/admin-list-view-1.html">
                    <i className="lnil lnil-list-alt" />
                    <span>List View V1</span>
                  </a>
                </li>
                <li>
                  <a className="is-submenu" href="/admin-list-view-2.html">
                    <i className="lnil lnil-list-alt" />
                    <span>List View V2</span>
                  </a>
                </li>
                <li>
                  <a className="is-submenu" href="/admin-list-view-3.html">
                    <i className="lnil lnil-list-alt" />
                    <span>List View V3</span>
                  </a>
                </li>
                <li>
                  <a className="is-submenu" href="/admin-list-view-4.html">
                    <i className="lnil lnil-list-alt" />
                    <span>List View V4</span>
                  </a>
                </li>
              </ul>
            </li>
            <li className="has-children">
              <div className="collapse-wrap">
                <a href="javascript:void(0);" className="parent-link">
                  Flex Lists <i data-feather="chevron-right" />
                </a>
              </div>
              <ul>
                <li>
                  <a className="is-submenu" href="/admin-list-flex-1.html">
                    <i className="lnil lnil-list-alt-1" />
                    <span>Flex List V1</span>
                  </a>
                </li>
                <li>
                  <a className="is-submenu" href="/admin-list-flex-2.html">
                    <i className="lnil lnil-list-alt-1" />
                    <span>Flex List V2</span>
                  </a>
                </li>
                <li>
                  <a className="is-submenu" href="/admin-list-flex-3.html">
                    <i className="lnil lnil-list-alt-1" />
                    <span>Flex List V3</span>
                  </a>
                </li>
              </ul>
            </li>
            <li className="has-children">
              <div className="collapse-wrap">
                <a href="javascript:void(0);" className="parent-link">
                  Datatable <i data-feather="chevron-right" />
                </a>
              </div>
              <ul>
                <li>
                  <a className="is-submenu" href="/admin-list-datatable-1.html">
                    <i className="lnil lnil-layout-alt" />
                    <span>Datatable V1</span>
                  </a>
                </li>
                <li>
                  <a className="is-submenu" href="/admin-list-datatable-2.html">
                    <i className="lnil lnil-layout-alt" />
                    <span>Datatable V2</span>
                  </a>
                </li>
                <li>
                  <a className="is-submenu" href="/admin-list-datatable-3.html">
                    <i className="lnil lnil-layout-alt" />
                    <span>Datatable V3</span>
                  </a>
                </li>
                <li>
                  <a className="is-submenu" href="/admin-list-datatable-4.html">
                    <i className="lnil lnil-layout-alt" />
                    <span>Datatable V4</span>
                  </a>
                </li>
              </ul>
            </li>
            <li className="divider" />
            <li className="has-children">
              <div className="collapse-wrap">
                <a href="javascript:void(0);" className="parent-link">
                  Card Grid <i data-feather="chevron-right" />
                </a>
              </div>
              <ul>
                <li>
                  <a className="is-submenu" href="/admin-grid-cards-1.html">
                    <i className="lnil lnil-grid-alt" />
                    <span>Card Grid V1</span>
                  </a>
                </li>
                <li>
                  <a className="is-submenu" href="/admin-grid-cards-2.html">
                    <i className="lnil lnil-grid-alt" />
                    <span>Card Grid V2</span>
                  </a>
                </li>
                <li>
                  <a className="is-submenu" href="/admin-grid-cards-3.html">
                    <i className="lnil lnil-grid-alt" />
                    <span>Card Grid V3</span>
                  </a>
                </li>
                <li>
                  <a className="is-submenu" href="/admin-grid-cards-4.html">
                    <i className="lnil lnil-grid-alt" />
                    <span>Card Grid V4</span>
                  </a>
                </li>
              </ul>
            </li>
            <li className="has-children">
              <div className="collapse-wrap">
                <a href="javascript:void(0);" className="parent-link">
                  Tile Grid <i data-feather="chevron-right" />
                </a>
              </div>
              <ul>
                <li>
                  <a className="is-submenu" href="/admin-grid-tiles-1.html">
                    <i className="lnil lnil-layout-alt-2" />
                    <span>Tile Grid V1</span>
                  </a>
                </li>
                <li>
                  <a className="is-submenu" href="/admin-grid-tiles-2.html">
                    <i className="lnil lnil-layout-alt-2" />
                    <span>Tile Grid V2</span>
                  </a>
                </li>
                <li>
                  <a className="is-submenu" href="/admin-grid-tiles-3.html">
                    <i className="lnil lnil-layout-alt-2" />
                    <span>Tile Grid V3</span>
                  </a>
                </li>
              </ul>
            </li>
            <li className="has-children">
              <div className="collapse-wrap">
                <a href="javascript:void(0);" className="parent-link">
                  User Grid <i data-feather="chevron-right" />
                </a>
              </div>
              <ul>
                <li>
                  <a className="is-submenu" href="/admin-grid-users-1.html">
                    <i className="lnil lnil-users-alt" />
                    <span>User Grid V1</span>
                  </a>
                </li>
                <li>
                  <a className="is-submenu" href="/admin-grid-users-2.html">
                    <i className="lnil lnil-users-alt" />
                    <span>User Grid V2</span>
                  </a>
                </li>
                <li>
                  <a className="is-submenu" href="/admin-grid-users-3.html">
                    <i className="lnil lnil-users-alt" />
                    <span>User Grid V3</span>
                  </a>
                </li>
                <li>
                  <a className="is-submenu" href="/admin-grid-users-4.html">
                    <i className="lnil lnil-users-alt" />
                    <span>User Grid V4</span>
                  </a>
                </li>
              </ul>
            </li>
            <li className="divider" />
            <li className="has-children">
              <div className="collapse-wrap">
                <a href="javascript:void(0);" className="parent-link">
                  Personal <i data-feather="chevron-right" />
                </a>
              </div>
              <ul>
                <li>
                  <a className="is-submenu" href="/admin-profile-view.html">
                    <i className="lnil lnil-user-alt" />
                    <span>Profile</span>
                  </a>
                </li>
                <li>
                  <a className="is-submenu" href="/admin-profile-edit-1.html">
                    <i className="lnil lnil-pencil" />
                    <span>Edit Profile</span>
                  </a>
                </li>
                <li>
                  <a
                    className="is-submenu"
                    href="/admin-profile-notifications.html"
                  >
                    <i className="lnil lnil-notification" />
                    <span>Notifications</span>
                  </a>
                </li>
                <li>
                  <a className="is-submenu" href="/admin-profile-settings.html">
                    <i className="lnil lnil-cog" />
                    <span>Settings</span>
                  </a>
                </li>
              </ul>
            </li>
            <li className="has-children">
              <div className="collapse-wrap">
                <a href="javascript:void(0);" className="parent-link">
                  Pages <i data-feather="chevron-right" />
                </a>
              </div>
              <ul>
                <li>
                  <a className="is-submenu" href="/auth-login-1.html">
                    <i className="lnil lnil-pointer-right" />
                    <span>Login v1</span>
                  </a>
                </li>
                <li>
                  <a className="is-submenu" href="/auth-login-2.html">
                    <i className="lnil lnil-pointer-right" />
                    <span>Login v2</span>
                  </a>
                </li>
                <li>
                  <a className="is-submenu" href="/auth-login-3.html">
                    <i className="lnil lnil-pointer-right" />
                    <span>Login v3</span>
                  </a>
                </li>
                <li>
                  <a className="is-submenu" href="/auth-signup-2.html">
                    <i className="lnil lnil-crown" />
                    <span>Signup v1</span>
                  </a>
                </li>
                <li>
                  <a className="is-submenu" href="/auth-signup-3.html">
                    <i className="lnil lnil-crown" />
                    <span>Signup v2</span>
                  </a>
                </li>
                <li>
                  <a className="is-submenu" href="/auth-signup-1.html">
                    <i className="lnil lnil-crown" />
                    <span>Signup Flow</span>
                  </a>
                </li>
                <li>
                  <a className="is-submenu" href="/admin-search-results.html">
                    <i className="lnil lnil-search-alt" />
                    <span>Search Results</span>
                  </a>
                </li>
                <li>
                  <a className="is-submenu" href="/admin-search-empty.html">
                    <i className="lnil lnil-search-alt" />
                    <span>Empty Search</span>
                  </a>
                </li>
              </ul>
            </li>
            <li className="has-children">
              <div className="collapse-wrap">
                <a href="javascript:void(0);" className="parent-link">
                  Subpages <i data-feather="chevron-right" />
                </a>
              </div>
              <ul>
                <li>
                  <a className="is-submenu" href="/admin-saas-billing.html">
                    <i className="lnil lnil-credit-card" />
                    <span>SaaS Billing</span>
                  </a>
                </li>
                <li>
                  <a className="is-submenu" href="/admin-welcome.html">
                    <i className="lnil lnil-door-alt" />
                    <span>Welcome</span>
                  </a>
                </li>
                <li>
                  <a className="is-submenu" href="/admin-action-page-1.html">
                    <i className="lnil lnil-thunderbolt" />
                    <span>Action Page V1</span>
                  </a>
                </li>
                <li>
                  <a className="is-submenu" href="/admin-action-page-2.html">
                    <i className="lnil lnil-thunderbolt" />
                    <span>Action Page V2</span>
                  </a>
                </li>
              </ul>
            </li>
            <li className="has-children">
              <div className="collapse-wrap">
                <a href="javascript:void(0);" className="parent-link">
                  Projects <i data-feather="chevron-right" />
                </a>
              </div>
              <ul>
                <li>
                  <a
                    className="is-submenu"
                    href="/admin-projects-projects.html"
                  >
                    <i className="lnil lnil-grid-alt" />
                    <span>Projects V1</span>
                  </a>
                </li>
                <li>
                  <a
                    className="is-submenu"
                    href="/admin-projects-projects-2.html"
                  >
                    <i className="lnil lnil-grid-alt" />
                    <span>Projects V2</span>
                  </a>
                </li>
                <li>
                  <a
                    className="is-submenu"
                    href="/admin-projects-projects-3.html"
                  >
                    <i className="lnil lnil-grid-alt" />
                    <span>Projects V3</span>
                  </a>
                </li>
                <li>
                  <a className="is-submenu" href="/admin-projects-project.html">
                    <i className="lnil lnil-layout" />
                    <span>Project Details</span>
                  </a>
                </li>
                <li>
                  <a className="is-submenu" href="/admin-kanban-board.html">
                    <i className="lnil lnil-layout-alt-1" />
                    <span>Kanban Board</span>
                  </a>
                </li>
              </ul>
            </li>
            <li className="divider" />
            <li className="has-children">
              <div className="collapse-wrap">
                <a href="javascript:void(0);" className="parent-link">
                  Utility <i data-feather="chevron-right" />
                </a>
              </div>
              <ul>
                <li>
                  <a
                    className="is-submenu"
                    href="/admin-utility-account-confirm.html"
                  >
                    <i className="lnil lnil-thunderbolt" />
                    <span>Confirm Account</span>
                  </a>
                </li>
                <li>
                  <a
                    className="is-submenu"
                    href="/admin-utility-promotion.html"
                  >
                    <i className="lnil lnil-magnet" />
                    <span>Promotion Page</span>
                  </a>
                </li>
                <li>
                  <a className="is-submenu" href="/admin-utility-invoice.html">
                    <i className="lnil lnil-calculator-alt" />
                    <span>Invoice</span>
                  </a>
                </li>
                <li>
                  <a className="is-submenu" href="/admin-utility-status.html">
                    <i className="lnil lnil-checkmark-circle" />
                    <span>App Status</span>
                  </a>
                </li>
              </ul>
            </li>
            <li className="has-children">
              <div className="collapse-wrap">
                <a href="javascript:void(0);" className="parent-link">
                  Onboarding <i data-feather="chevron-right" />
                </a>
              </div>
              <ul>
                <li>
                  <a
                    className="is-submenu"
                    href="/admin-onboarding-page-1.html"
                  >
                    <i className="lnil lnil-train" />
                    <span>Onboarding V1</span>
                  </a>
                </li>
                <li>
                  <a
                    className="is-submenu"
                    href="/admin-onboarding-page-2.html"
                  >
                    <i className="lnil lnil-train-alt" />
                    <span>Onboarding V2</span>
                  </a>
                </li>
                <li>
                  <a
                    className="is-submenu"
                    href="/admin-onboarding-page-3.html"
                  >
                    <i className="lnil lnil-car" />
                    <span>Onboarding V3</span>
                  </a>
                </li>
                <li>
                  <a
                    className="is-submenu"
                    href="/admin-onboarding-page-4.html"
                  >
                    <i className="lnil lnil-car-alt" />
                    <span>Onboarding V4</span>
                  </a>
                </li>
                <li>
                  <a
                    className="is-submenu"
                    href="/admin-onboarding-page-5.html"
                  >
                    <i className="lnil lnil-train" />
                    <span>Onboarding V5</span>
                  </a>
                </li>
              </ul>
            </li>
            <li className="has-children">
              <div className="collapse-wrap">
                <a href="javascript:void(0);" className="parent-link">
                  Error Pages <i data-feather="chevron-right" />
                </a>
              </div>
              <ul>
                <li>
                  <a className="is-submenu" href="/error-page-1.html">
                    <i className="lnil lnil-cross-circle" />
                    <span>Error 404 V1</span>
                  </a>
                </li>
                <li>
                  <a className="is-submenu" href="/error-page-2.html">
                    <i className="lnil lnil-cross-circle" />
                    <span>Error 404 V2</span>
                  </a>
                </li>
                <li>
                  <a className="is-submenu" href="/error-page-3.html">
                    <i className="lnil lnil-cross-circle" />
                    <span>Error 404 V3</span>
                  </a>
                </li>
                <li>
                  <a className="is-submenu" href="/error-page-4.html">
                    <i className="lnil lnil-cross-circle" />
                    <span>Error 404 V4</span>
                  </a>
                </li>
                <li>
                  <a className="is-submenu" href="/error-page-5.html">
                    <i className="lnil lnil-cross-circle" />
                    <span>Error 500 V1</span>
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
      <div className="mobile-subsidebar">
        <div className="inner">
          <div className="sidebar-title">
            <h3>Layouts</h3>
          </div>
          <ul className="submenu">
            <li className="has-children">
              <div className="collapse-wrap">
                <a href="javascript:void(0);" className="parent-link">
                  Lists <i data-feather="chevron-right" />
                </a>
              </div>
              <ul>
                <li>
                  <a className="is-submenu" href="/admin-list-view-1.html">
                    <i className="lnil lnil-list-alt" />
                    <span>List View V1</span>
                  </a>
                </li>
                <li>
                  <a className="is-submenu" href="/admin-list-view-2.html">
                    <i className="lnil lnil-list-alt" />
                    <span>List View V2</span>
                  </a>
                </li>
                <li>
                  <a className="is-submenu" href="/admin-list-view-3.html">
                    <i className="lnil lnil-list-alt" />
                    <span>List View V3</span>
                  </a>
                </li>
                <li>
                  <a className="is-submenu" href="/admin-list-view-4.html">
                    <i className="lnil lnil-list-alt" />
                    <span>List View V4</span>
                  </a>
                </li>
              </ul>
            </li>
            <li className="has-children">
              <div className="collapse-wrap">
                <a href="javascript:void(0);" className="parent-link">
                  Flex Lists <i data-feather="chevron-right" />
                </a>
              </div>
              <ul>
                <li>
                  <a className="is-submenu" href="/admin-list-flex-1.html">
                    <i className="lnil lnil-list-alt-1" />
                    <span>Flex List V1</span>
                  </a>
                </li>
                <li>
                  <a className="is-submenu" href="/admin-list-flex-2.html">
                    <i className="lnil lnil-list-alt-1" />
                    <span>Flex List V2</span>
                  </a>
                </li>
                <li>
                  <a className="is-submenu" href="/admin-list-flex-3.html">
                    <i className="lnil lnil-list-alt-1" />
                    <span>Flex List V3</span>
                  </a>
                </li>
              </ul>
            </li>
            <li className="has-children">
              <div className="collapse-wrap">
                <a href="javascript:void(0);" className="parent-link">
                  Datatable <i data-feather="chevron-right" />
                </a>
              </div>
              <ul>
                <li>
                  <a className="is-submenu" href="/admin-list-datatable-1.html">
                    <i className="lnil lnil-layout-alt" />
                    <span>Datatable V1</span>
                  </a>
                </li>
                <li>
                  <a className="is-submenu" href="/admin-list-datatable-2.html">
                    <i className="lnil lnil-layout-alt" />
                    <span>Datatable V2</span>
                  </a>
                </li>
                <li>
                  <a className="is-submenu" href="/admin-list-datatable-3.html">
                    <i className="lnil lnil-layout-alt" />
                    <span>Datatable V3</span>
                  </a>
                </li>
                <li>
                  <a className="is-submenu" href="/admin-list-datatable-4.html">
                    <i className="lnil lnil-layout-alt" />
                    <span>Datatable V4</span>
                  </a>
                </li>
              </ul>
            </li>
            <li className="divider" />
            <li className="has-children">
              <div className="collapse-wrap">
                <a href="javascript:void(0);" className="parent-link">
                  Card Grid <i data-feather="chevron-right" />
                </a>
              </div>
              <ul>
                <li>
                  <a className="is-submenu" href="/admin-grid-cards-1.html">
                    <i className="lnil lnil-grid-alt" />
                    <span>Card Grid V1</span>
                  </a>
                </li>
                <li>
                  <a className="is-submenu" href="/admin-grid-cards-2.html">
                    <i className="lnil lnil-grid-alt" />
                    <span>Card Grid V2</span>
                  </a>
                </li>
                <li>
                  <a className="is-submenu" href="/admin-grid-cards-3.html">
                    <i className="lnil lnil-grid-alt" />
                    <span>Card Grid V3</span>
                  </a>
                </li>
                <li>
                  <a className="is-submenu" href="/admin-grid-cards-4.html">
                    <i className="lnil lnil-grid-alt" />
                    <span>Card Grid V4</span>
                  </a>
                </li>
              </ul>
            </li>
            <li className="has-children">
              <div className="collapse-wrap">
                <a href="javascript:void(0);" className="parent-link">
                  Tile Grid <i data-feather="chevron-right" />
                </a>
              </div>
              <ul>
                <li>
                  <a className="is-submenu" href="/admin-grid-tiles-1.html">
                    <i className="lnil lnil-layout-alt-2" />
                    <span>Tile Grid V1</span>
                  </a>
                </li>
                <li>
                  <a className="is-submenu" href="/admin-grid-tiles-2.html">
                    <i className="lnil lnil-layout-alt-2" />
                    <span>Tile Grid V2</span>
                  </a>
                </li>
                <li>
                  <a className="is-submenu" href="/admin-grid-tiles-3.html">
                    <i className="lnil lnil-layout-alt-2" />
                    <span>Tile Grid V3</span>
                  </a>
                </li>
              </ul>
            </li>
            <li className="has-children">
              <div className="collapse-wrap">
                <a href="javascript:void(0);" className="parent-link">
                  User Grid <i data-feather="chevron-right" />
                </a>
              </div>
              <ul>
                <li>
                  <a className="is-submenu" href="/admin-grid-users-1.html">
                    <i className="lnil lnil-users-alt" />
                    <span>User Grid V1</span>
                  </a>
                </li>
                <li>
                  <a className="is-submenu" href="/admin-grid-users-2.html">
                    <i className="lnil lnil-users-alt" />
                    <span>User Grid V2</span>
                  </a>
                </li>
                <li>
                  <a className="is-submenu" href="/admin-grid-users-3.html">
                    <i className="lnil lnil-users-alt" />
                    <span>User Grid V3</span>
                  </a>
                </li>
                <li>
                  <a className="is-submenu" href="/admin-grid-users-4.html">
                    <i className="lnil lnil-users-alt" />
                    <span>User Grid V4</span>
                  </a>
                </li>
              </ul>
            </li>
            <li className="divider" />
            <li className="has-children">
              <div className="collapse-wrap">
                <a href="javascript:void(0);" className="parent-link">
                  Personal <i data-feather="chevron-right" />
                </a>
              </div>
              <ul>
                <li>
                  <a className="is-submenu" href="/admin-profile-view.html">
                    <i className="lnil lnil-user-alt" />
                    <span>Profile</span>
                  </a>
                </li>
                <li>
                  <a className="is-submenu" href="/admin-profile-edit-1.html">
                    <i className="lnil lnil-pencil" />
                    <span>Edit Profile</span>
                  </a>
                </li>
                <li>
                  <a
                    className="is-submenu"
                    href="/admin-profile-notifications.html"
                  >
                    <i className="lnil lnil-notification" />
                    <span>Notifications</span>
                  </a>
                </li>
                <li>
                  <a className="is-submenu" href="/admin-profile-settings.html">
                    <i className="lnil lnil-cog" />
                    <span>Settings</span>
                  </a>
                </li>
              </ul>
            </li>
            <li className="has-children">
              <div className="collapse-wrap">
                <a href="javascript:void(0);" className="parent-link">
                  Pages <i data-feather="chevron-right" />
                </a>
              </div>
              <ul>
                <li>
                  <a className="is-submenu" href="/auth-login-1.html">
                    <i className="lnil lnil-pointer-right" />
                    <span>Login v1</span>
                  </a>
                </li>
                <li>
                  <a className="is-submenu" href="/auth-login-2.html">
                    <i className="lnil lnil-pointer-right" />
                    <span>Login v2</span>
                  </a>
                </li>
                <li>
                  <a className="is-submenu" href="/auth-login-3.html">
                    <i className="lnil lnil-pointer-right" />
                    <span>Login v3</span>
                  </a>
                </li>
                <li>
                  <a className="is-submenu" href="/auth-signup-2.html">
                    <i className="lnil lnil-crown" />
                    <span>Signup v1</span>
                  </a>
                </li>
                <li>
                  <a className="is-submenu" href="/auth-signup-3.html">
                    <i className="lnil lnil-crown" />
                    <span>Signup v2</span>
                  </a>
                </li>
                <li>
                  <a className="is-submenu" href="/auth-signup-1.html">
                    <i className="lnil lnil-crown" />
                    <span>Signup Flow</span>
                  </a>
                </li>
                <li>
                  <a className="is-submenu" href="/admin-search-results.html">
                    <i className="lnil lnil-search-alt" />
                    <span>Search Results</span>
                  </a>
                </li>
                <li>
                  <a className="is-submenu" href="/admin-search-empty.html">
                    <i className="lnil lnil-search-alt" />
                    <span>Empty Search</span>
                  </a>
                </li>
              </ul>
            </li>
            <li className="has-children">
              <div className="collapse-wrap">
                <a href="javascript:void(0);" className="parent-link">
                  Subpages <i data-feather="chevron-right" />
                </a>
              </div>
              <ul>
                <li>
                  <a className="is-submenu" href="/admin-saas-billing.html">
                    <i className="lnil lnil-credit-card" />
                    <span>SaaS Billing</span>
                  </a>
                </li>
                <li>
                  <a className="is-submenu" href="/admin-welcome.html">
                    <i className="lnil lnil-door-alt" />
                    <span>Welcome</span>
                  </a>
                </li>
                <li>
                  <a className="is-submenu" href="/admin-action-page-1.html">
                    <i className="lnil lnil-thunderbolt" />
                    <span>Action Page V1</span>
                  </a>
                </li>
                <li>
                  <a className="is-submenu" href="/admin-action-page-2.html">
                    <i className="lnil lnil-thunderbolt" />
                    <span>Action Page V2</span>
                  </a>
                </li>
              </ul>
            </li>
            <li className="has-children">
              <div className="collapse-wrap">
                <a href="javascript:void(0);" className="parent-link">
                  Projects <i data-feather="chevron-right" />
                </a>
              </div>
              <ul>
                <li>
                  <a
                    className="is-submenu"
                    href="/admin-projects-projects.html"
                  >
                    <i className="lnil lnil-grid-alt" />
                    <span>Projects V1</span>
                    <i className="is-auto" data-feather="map-pin" />
                  </a>
                </li>
                <li>
                  <a
                    className="is-submenu"
                    href="/admin-projects-projects-2.html"
                  >
                    <i className="lnil lnil-grid-alt" />
                    <span>Projects V2</span>
                    <i className="is-auto" data-feather="map-pin" />
                  </a>
                </li>
                <li>
                  <a
                    className="is-submenu"
                    href="/admin-projects-projects-3.html"
                  >
                    <i className="lnil lnil-grid-alt" />
                    <span>Projects V3</span>
                    <i className="is-auto" data-feather="map-pin" />
                  </a>
                </li>
                <li>
                  <a className="is-submenu" href="/admin-projects-project.html">
                    <i className="lnil lnil-layout" />
                    <span>Project Details</span>
                    <i className="is-auto" data-feather="map-pin" />
                  </a>
                </li>
                <li>
                  <a className="is-submenu" href="/admin-kanban-board.html">
                    <i className="lnil lnil-layout-alt-1" />
                    <span>Kanban Board</span>
                    <i className="is-auto" data-feather="map-pin" />
                  </a>
                </li>
              </ul>
            </li>
            <li className="divider" />
            <li className="has-children">
              <div className="collapse-wrap">
                <a href="javascript:void(0);" className="parent-link">
                  Utility <i data-feather="chevron-right" />
                </a>
              </div>
              <ul>
                <li>
                  <a
                    className="is-submenu"
                    href="/admin-utility-account-confirm.html"
                  >
                    <i className="lnil lnil-thunderbolt" />
                    <span>Confirm Account</span>
                  </a>
                </li>
                <li>
                  <a
                    className="is-submenu"
                    href="/admin-utility-promotion.html"
                  >
                    <i className="lnil lnil-magnet" />
                    <span>Promotion Page</span>
                  </a>
                </li>
                <li>
                  <a className="is-submenu" href="/admin-utility-invoice.html">
                    <i className="lnil lnil-calculator-alt" />
                    <span>Invoice</span>
                  </a>
                </li>
                <li>
                  <a className="is-submenu" href="/admin-utility-status.html">
                    <i className="lnil lnil-checkmark-circle" />
                    <span>App Status</span>
                  </a>
                </li>
              </ul>
            </li>
            <li className="has-children">
              <div className="collapse-wrap">
                <a href="javascript:void(0);" className="parent-link">
                  Onboarding <i data-feather="chevron-right" />
                </a>
              </div>
              <ul>
                <li>
                  <a
                    className="is-submenu"
                    href="/admin-onboarding-page-1.html"
                  >
                    <i className="lnil lnil-train" />
                    <span>Onboarding V1</span>
                  </a>
                </li>
                <li>
                  <a
                    className="is-submenu"
                    href="/admin-onboarding-page-2.html"
                  >
                    <i className="lnil lnil-train-alt" />
                    <span>Onboarding V2</span>
                  </a>
                </li>
                <li>
                  <a
                    className="is-submenu"
                    href="/admin-onboarding-page-3.html"
                  >
                    <i className="lnil lnil-car" />
                    <span>Onboarding V3</span>
                  </a>
                </li>
                <li>
                  <a
                    className="is-submenu"
                    href="/admin-onboarding-page-4.html"
                  >
                    <i className="lnil lnil-car-alt" />
                    <span>Onboarding V4</span>
                  </a>
                </li>
                <li>
                  <a
                    className="is-submenu"
                    href="/admin-onboarding-page-5.html"
                  >
                    <i className="lnil lnil-train" />
                    <span>Onboarding V5</span>
                  </a>
                </li>
              </ul>
            </li>
            <li className="has-children">
              <div className="collapse-wrap">
                <a href="javascript:void(0);" className="parent-link">
                  Error Pages <i data-feather="chevron-right" />
                </a>
              </div>
              <ul>
                <li>
                  <a className="is-submenu" href="/error-page-1.html">
                    <i className="lnil lnil-cross-circle" />
                    <span>Error 404 V1</span>
                  </a>
                </li>
                <li>
                  <a className="is-submenu" href="/error-page-2.html">
                    <i className="lnil lnil-cross-circle" />
                    <span>Error 404 V2</span>
                  </a>
                </li>
                <li>
                  <a className="is-submenu" href="/error-page-3.html">
                    <i className="lnil lnil-cross-circle" />
                    <span>Error 404 V3</span>
                  </a>
                </li>
                <li>
                  <a className="is-submenu" href="/error-page-4.html">
                    <i className="lnil lnil-cross-circle" />
                    <span>Error 404 V4</span>
                  </a>
                </li>
                <li>
                  <a className="is-submenu" href="/error-page-5.html">
                    <i className="lnil lnil-cross-circle" />
                    <span>Error 500 V1</span>
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
      {/* Content Wrapper */}
      <div
        id="user-profile"
        className="view-wrapper"
        data-naver-offset={214}
        data-menu-item="#layouts-sidebar-menu"
        data-mobile-item="#home-sidebar-menu-mobile"
      >
        <div className="page-content-wrapper">
          <div className="page-content is-relative">
            <div className="page-title has-text-centered">
              {/* Sidebar Trigger */}
              <div
                className="huro-hamburger nav-trigger push-resize"
                data-sidebar="layouts-sidebar"
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
                <h1 className="title is-4">{t("profile settings")}</h1>
              </div>
              <div className="toolbar ml-auto">
                <div className="toolbar-link">
                  <label className="dark-mode ml-auto">
                    <input type="checkbox" defaultChecked />
                    <span />
                  </label>
                </div>

                <label
                  className="toolbar-link right-panel-trigger"
                  data-panel="languages-panel"
                >
                  <LanguageSelect />
                  <span />
                </label>

                <div>


   


                  
                  <Button className={classes.but} onClick={handleClick}>
                    <div id="profile-menu" className="toolbar-link">
                      {" "}
                      <img src={user} alt="Avatar" />
                    </div>
                  </Button>
                  <Popover
                    id="simple-menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                    anchorOrigin={{
                      vertical: "bottom",
                      horizontal: "right",
                    }}
                    transformOrigin={{
                      vertical: "top",
                      horizontal: "right",
                    }}
                  >
                    {/* <MenuItem onClick={handleClose}>
                      Profile <img src={user} alt="Avatar" width="50px" />
                    </MenuItem>
                    <MenuItem onClick={handleClose}>Logout</MenuItem> */}

<div
  id="profile-menu"
  className="dropdown profile-dropdown dropdown-trigger is-spaced is-up"
>
  <div className="dropdown-content">
    <div className="dropdown-head">
      <div className="h-avatar is-large">
        <img
          className="avatar"
          src={user}
          data-demo-src="assets/img/avatars/photos/8.jpg"
          alt
        />
      </div>
      <div className="meta">
        <div>Erik Kovalsky</div>
        <div>Product Manager</div>
      </div>
    </div>
    <a href="/admin-profile-view.html" className="dropdown-item is-media">
      <div className="icon">
        <i className="lnil lnil-user-alt" />
      </div>
      <div className="meta">
        <span>Profile</span>
        <span>View your profile</span>
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
      <button
        className="button h-button is-primary is-raised is-fullwidth logout-button"
        onClick={()=> document.location.reload(document.cookie ="token=John; max-age=0") 
       }>
        <span className="icon is-small">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-log-out"
          >
            <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
            <polyline points="16 17 21 12 16 7" />
            <line x1={21} y1={12} x2={9} y2={12} />
          </svg>
        </span>
        <span> Logout </span>
      </button>
    </div>
  </div>
</div>
                   
                   
                  </Popover>
                  {/* <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      > */}
                  {/* <MenuItem onClick={handleClose}>Profile     <img
                    src={user}
                    alt='Avatar' width='50px'
                  /></MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu> */}

                  <span className="status-indicator" />
                </div>
              </div>
            </div>
            <div className="page-content-inner">
              {/*Profile Settings*/}
              <div className="profile-wrapper">
                <div className="profile-body">
                  <div className="settings-section">
                    <a className="settings-box">
                      <div className="edit-icon">
                        <i className="lnil lnil-pencil" />
                      </div>
                      <div className="icon-wrap">
                        <i className="lnil lnil-apartment" />
                      </div>
                      <h3>Manage</h3>
                    </a>
                    <a className="settings-box">
                      <div className="edit-icon">
                        <i className="lnil lnil-pencil" />
                      </div>
                      <div className="icon-wrap">
                        <i className="lnil lnil-users" />
                      </div>
                      <h3>Manage Team</h3>
                    </a>
                    <a className="settings-box">
                      <div className="edit-icon">
                        <i className="lnil lnil-pencil" />
                      </div>
                      <div className="icon-wrap">
                        <i className="lnil lnil-briefcase-alt" />
                      </div>
                      <h3>Project Settings</h3>
                    </a>
                    <a className="settings-box">
                      <div className="edit-icon">
                        <i className="lnil lnil-pencil" />
                      </div>
                      <div className="icon-wrap">
                        <i className="lnil lnil-lock-alt-1" />
                      </div>
                      <h3>Manage Permissions</h3>
                    </a>
                    <a className="settings-box">
                      <div className="edit-icon">
                        <i className="lnil lnil-pencil" />
                      </div>
                      <div className="icon-wrap">
                        <i className="lnil lnil-file-name" />
                      </div>
                      <h3>Document Policies</h3>
                    </a>
                    <a className="settings-box">
                      <div className="edit-icon">
                        <i className="lnil lnil-pencil" />
                      </div>
                      <div className="icon-wrap">
                        <i className="lnil lnil-file-upload" />
                      </div>
                      <h3>Upload Policies</h3>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Settings;
