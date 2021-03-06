import React, { Component } from "react";
import PropTypes from "prop-types";

class ProfileGit extends Component {
  state = {
    clientId: "fcf3d60f91b0aa204798",
    clientSecret: "587f88d1bec1e8117fe4fe46c0920850b6aed496",
    count: 5,
    sort: "created: asc",
    repos: []
  };
  componentDidMount() {
    const { username } = this.props;
    const { count, sort, clientId, clientSecret } = this.state;

    fetch(
      `https://api.github.com/users/${username}/repos?per_page=${count}&sort=${sort}&client_id=${clientId}&client_secret=${clientSecret}`
    )
      .then(res => res.json())
      .then(data => {
        if (this.refs.myRef) {
          this.setState({ repos: data });
        }
      });
  }
  render() {
    const { repos } = this.state;
    const repoItem = repos.map(repo => (
      <div key={repo.id} className="card card-body mb-2">
        <div className="row">
          <div className="col-md-6">
            <h4>
              <a href={repo.html_url} className="text-info" target="_blank">
                {repo.name}
              </a>
            </h4>
            <p>{repo.description}</p>
          </div>
          <div className="col-md-6">
            <span className="badge badge-info mr-1">
              Stars: {repo.stargazers_count}
            </span>
            <span className="badge badge-secondary mr-1">
              Watchers: {repo.watchers_count}
            </span>
            <span className="badge badge-success mr-1">
              Forks: {repo.forks_count}
            </span>
          </div>
        </div>
      </div>
    ));
    return (
      <div ref="myRef">
        <hr />
        <h3 className="mb-3">Latest Github Repos</h3>
        {repoItem}
      </div>
    );
  }
}

ProfileGit.propTypes = {
  username: PropTypes.string.isRequired
};

export default ProfileGit;
