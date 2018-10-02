import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import classnames from "classnames";
import { Link } from "react-router-dom";
import { deletePost, addLike, removeLike } from "../../actions/postAction";
import { importAll } from "../../actions/importImage";

class PostItem extends Component {
  onDeleteClick = id => {
    this.props.deletePost(id);
  };

  onLikeClick = id => {
    this.props.addLike(id);
  };

  onUnlikeClick = id => {
    this.props.removeLike(id);
  };

  findUserLike = likes => {
    const { auth } = this.props;
    if (likes.filter(like => like.user === auth.user.id).length > 0) {
      return true;
    } else {
      return false;
    }
  };

  render() {
    const images = importAll(
      require.context("../../img/uploads", false, /\.(png|jpe?g|svg)$/)
    );
    const { auth, post, showAction } = this.props;
    return (
      <div className="card card-body mb-3">
        <div className="row">
          <div className="col-md-2">
            <Link to={`/user/${post.user}`}>
              <img
                src={images[post.avatar]}
                alt="avatar"
                className="rounded-circle d-none d-md-block"
              />
            </Link>
            <br />
            <p className="text-center">{post.name}</p>
          </div>
          <div className="col-md-10">
            <p className="lead">{post.text}</p>
            {showAction ? (
              <span>
                <button
                  onClick={this.onLikeClick.bind(this, post._id)}
                  className="btn btn-light mr-1"
                  type="button"
                >
                  <i
                    className={classnames(`fas fa-thumbs-up`, {
                      "text-info": this.findUserLike(post.likes)
                    })}
                  />
                  <span className="badge badge-light">{post.likes.length}</span>
                </button>
                <button
                  onClick={this.onUnlikeClick.bind(this, post._id)}
                  className="btn btn-light mr-1"
                  type="button"
                >
                  <i className="text-secondary fas fa-thumbs-down" />
                  <span className="badge badge-light" />
                </button>
                <Link className="btn btn-info mr-1" to={`/post/${post._id}`}>
                  {" "}
                  Comments
                </Link>
                {post.user === auth.user.id ? (
                  <button
                    type="button"
                    className="btn btn-danger mr-1"
                    onClick={this.onDeleteClick.bind(this, post._id)}
                  >
                    <i className="fas fa-times" />
                  </button>
                ) : null}
              </span>
            ) : null}
          </div>
        </div>
      </div>
    );
  }
}

PostItem.defaultProps = {
  showAction: true
};

PostItem.propTypes = {
  deletePost: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  post: PropTypes.object.isRequired,
  addLike: PropTypes.func.isRequired,
  removeLike: PropTypes.func.isRequired
};

const mapStateTopProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateTopProps,
  { deletePost, addLike, removeLike }
)(PostItem);
