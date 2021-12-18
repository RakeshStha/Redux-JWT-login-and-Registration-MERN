import React, { Component } from 'react';
import './Auth.css';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { contactUser } from '../../redux/actions/contactAction';
import classnames from 'classnames';

class Contact extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      message: '',
      errors: {}
    };
  }

  onChangeContact = e => {
    this.setState({ [e.target.id]: e.target.value });
  };
  
  contactSubmit = e => {
    e.preventDefault();
    const userData = {
      email: this.state.email,
      message: this.state.message
    };
    this.props.contactUser(userData, this.props.history); // since we handle the redirect within our component, we don't need to pass in this.props.history as a parameter
  };

  render() {
    const { email, message, errors } = this.state;
    return (
      <section className="login">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="login-left">
                <h4 className="text-capitalize">
                  Message us
                </h4>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="login-right">
                <h1>Contact Us</h1>
                <form noValidate onSubmit={this.contactSubmit}>
                  <div class="form-row">
                    <div class="form-group col-md-12">
                      <label htmlFor="Email"> Your Email</label> <br />
                      <input
                        type="email"
                        className="input-control"
                        placeholder="Enter your email"
                        id="email"
                        value={email}
                        onChange={this.onChangeContact}
                        error={errors.email}
                        className={classnames('', {
                          invalid: errors.email || errors.emailNotFound
                        })}
                      />{' '}
                      <br />
                      <span className="text-danger">
                        {errors.email}
                        {errors.emailNotFound}
                      </span>
                    </div>
                  </div>
                  <div class="form-row">
                    <div class="form-group col-md-12">
                      <label htmlFor="Message">Message</label> <br />
                      <input
                        type="text"
                        className="input-control"
                        placeholder="Enter your message"
                        id="message"
                        value={message}
                        onChange={this.onChangeContact}
                        error={errors.message}
                        className={classnames('', {
                          invalid: errors.message || errors.messageIncorrect
                        })}
                      />{' '}
                      <br />
                      <span className="text-danger">
                        {errors.message}
                        {errors.messageIncorrect}
                      </span>
                    </div>
                  </div>
                  <div class="form-row">
                    <div class="form-group col-md-12">
                      <button type="submit" className="btn btn-md btn-register">
                        Send Message
                      </button>
                    </div>
                  </div>
                  <div class="form-row">
                    <div class="form-group col-md-12">
                      <p>
                        Don't have an account ?
                        <Link to="/register" className="text-success">
                          Create one
                        </Link>
                      </p>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

Contact.propTypes = {
  contactUser: PropTypes.func.isRequired,
  contact: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  contact: state.contact,
  errors: state.errors
});
export default connect(mapStateToProps, { contactUser })(Contact);
