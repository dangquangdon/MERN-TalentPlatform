import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { uploadAvatar } from "../../actions/profileAction";

class FileUpload extends React.Component {
  state = {
    upload_avatar: null
  };
  fileFieldChange = e => {
    this.setState({ upload_avatar: e.target.files[0] });
  };
  uploadFile = () => {
    const id = this.props.auth.user.id;
    const dataForm = new FormData();
    dataForm.append(
      "avatar",
      this.state.upload_avatar,
      this.state.upload_avatar.name
    );
    this.props.uploadAvatar(id, dataForm, this.props.history);
  };

  render() {
    return (
      <div>
        <div className="form-group">
          <label htmlFor="avatar">Choose from your computer</label>
          <input
            type="file"
            className="form-control-file"
            id="avatar"
            onChange={this.fileFieldChange}
          />
        </div>
        <button
          type="submit"
          className="btn btn-light btn-lg"
          onClick={this.uploadFile}
        >
          Upload
        </button>
      </div>
    );
  }
}

FileUpload.propTypes = {
  uploadAvatar: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { uploadAvatar }
)(FileUpload);
