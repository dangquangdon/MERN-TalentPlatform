import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import isEmpty from "../../validation/isEmpty";
import { importAll } from "../../actions/importImage";

class ProfileItem extends React.Component {
  render() {
    const images = importAll(
      require.context("../../img/uploads", false, /\.(png|jpe?g|svg)$/)
    );
    const { profile } = this.props;
    return (
      <div className="card card-body bg-light mb-3">
        <div className="row">
          <div className="col-2">
            <img
              src={images[profile.user.avatar]}
              alt="avatar"
              className="rounded-circle"
            />
          </div>
          <div className="col-lg-6 col-md-5 col-8">
            <h3>{profile.user.name}</h3>
            <p>
              {profile.status}{" "}
              {isEmpty(profile.company) ? null : (
                <span>at {profile.company}</span>
              )}
            </p>
            <p>
              {isEmpty(profile.location) ? null : (
                <span>{profile.location}</span>
              )}
            </p>
            <Link to={`/profile/${profile.handle}`} className="btn btn-info">
              View Info
            </Link>
          </div>
          <div className="col-md-4 d-none d-md-block">
            <h4>Skill Set</h4>
            <ul className="list-group">
              {profile.skills.slice(0, 4).map((skill, index) => (
                <li key={index} className="list-group-item">
                  <i className="fa fa-check pr-1" /> {skill}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
ProfileItem.propTypes = {
  profile: PropTypes.object.isRequired
};

export default ProfileItem;
