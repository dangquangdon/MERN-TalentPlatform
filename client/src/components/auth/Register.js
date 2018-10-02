import React from "react";
import classnames from "classnames";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { registerUser } from "../../actions/authAction";
import { withRouter } from "react-router-dom";
import TextFieldGroup from "../common/TextFieldGroup";

class Register extends React.Component {
  state = {
    name: "",
    email: "",
    password: "",
    password2: "",
    errors: {}
  };

  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  onChangefunc = e => {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();
    const newUser = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2
    };
    this.props.registerUser(newUser, this.props.history);
  };

  render() {
    const { errors } = this.state;
    return (
      <div className="register">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Sign Up</h1>
              <p className="lead text-center">Join our Talent Platform</p>
              <form onSubmit={this.onSubmit}>
                <TextFieldGroup
                  type="text"
                  className={classnames("form-control form-control-lg", {
                    "is-invalid": errors.name
                  })}
                  name="name"
                  value={this.state.name}
                  placeholder="Insert your full name"
                  onChange={this.onChangefunc}
                  error={errors.name}
                />

                <TextFieldGroup
                  type="email"
                  className={classnames("form-control form-control-lg", {
                    "is-invalid": errors.email
                  })}
                  name="email"
                  value={this.state.email}
                  placeholder="Your Email Adress"
                  onChange={this.onChangefunc}
                  error={errors.name}
                  info="This site uses Gravatar email image as default, but you can change once you login"
                />
                <TextFieldGroup
                  type="password"
                  className={classnames("form-control form-control-lg", {
                    "is-invalid": errors.password
                  })}
                  name="password"
                  value={this.state.password}
                  placeholder="Your Password"
                  onChange={this.onChangefunc}
                  error={errors.password}
                />

                <TextFieldGroup
                  type="password"
                  className={classnames("form-control form-control-lg", {
                    "is-invalid": errors.password2
                  })}
                  name="password2"
                  value={this.state.password2}
                  placeholder="Confirm your password"
                  onChange={this.onChangefunc}
                  error={errors.password2}
                />

                <input
                  type="submit"
                  className="btn btn-info btn-block mt-4"
                  value="Sign up"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Register.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { registerUser }
)(withRouter(Register));
