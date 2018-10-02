import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authAction";
import { clearCurrentProfile } from "../../actions/profileAction";
import { importAll } from "../../actions/importImage";

class Navbar extends React.Component {
  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
    this.props.clearCurrentProfile();
  };

  render() {
    const images = importAll(
      require.context("../../img/uploads", false, /\.(png|jpe?g|svg)$/)
    );

    const { isAuthenticated, user } = this.props.auth;

    const authLinks = (
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <Link className="nav-link" to="/dashboard">
            Dash Board
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/feed">
            Posts
          </Link>
        </li>
        <li className="nav-item">
          <a href="#!" className="nav-link" onClick={this.onLogoutClick}>
            <img
              src={images[user.avatar]}
              alt={user.name}
              style={{ width: "25px", marginRight: "5px" }}
              title="You must have a Gravatar connect to your email to display image"
              className="rounded-circle"
            />
            Log out
          </a>
        </li>
      </ul>
    );

    const guestLinks = (
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <Link to="/login" className="nav-link">
            Login
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/register" className="nav-link">
            Sign Up
          </Link>
        </li>
      </ul>
    );
    return (
      <nav className="navbar navbar-expand-sm navbar-dark bg-shortcut mb-4">
        <div className="container">
          <Link to="/" className="navbar-brand">
            Talent Platform
          </Link>
          <button
            className="navbar-toggler"
            data-toggle="collapse"
            data-target="#mainNav"
          >
            <i className="navbar-toggler-icon" />
          </button>
          <div id="mainNav" className="collapse navbar-collapse">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link to="/profiles" className="nav-link">
                  Our Talents
                </Link>
              </li>
            </ul>
            {isAuthenticated ? authLinks : guestLinks}
          </div>
        </div>
      </nav>
    );
  }
}
Navbar.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  clearCurrentProfile: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logoutUser, clearCurrentProfile }
)(Navbar);
