import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { helpSent } from '../../redux/sendHelp/sendHelp.actions';
import { logoutUser } from '../../redux/user/user.actions';
import { showUserProfile } from '../../redux/modal/modal.actions';
import CustomButton from '../custom-button/CustomButton';
import './navbar.css';

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showMenu: false
    };
  }

  showMenu = () => {
    this.setState((prevState, prevProps) => ({
      showMenu: !this.state.showMenu
    }));
  };

  render() {
    // console.log('currentUser--->', this.props)
    const { login, currentUser } = this.props.user;
    return (
      <header>
        <Link to="/">
          <img
            src="images/logo.svg"
            alt="help logo"
            id="logo"
            onClick={() => {
              return this.props.helpSent(false);
            }}
          />
        </Link>
        <nav className={`nav ${this.state.showMenu ? 'show-menu' : ''}`}>
          {login === 200 ? (
            <>
              <p className="nav-link" onClick={this.props.showUserProfile}>
                {`Welcome, ${currentUser ? currentUser.userId.name : null}`}{' '}
              </p>
              <Link className="nav-link" to="/ers-sign-up">
                ERS
              </Link>
              <Link className="nav-link last-link" to="/faq">
                FAQ
              </Link>
              <Link className="no-padding" to="/login" onClick={this.props.logoutUser}>
                <CustomButton className="custom-square-button">Logout</CustomButton>
              </Link>
            </>
          ) : (
            <>
              <Link className="nav-link" to="/login">
                Login
              </Link>
              <Link className="nav-link" to="/sign-up">
                Sign Up
              </Link>
              <Link className="nav-link" to="/ers-sign-up">
                ERS
              </Link>
              <Link className="nav-link" to="/faq">
                FAQ
              </Link>
            </>
          )}
        </nav>
        <img src="images/bars.svg" alt="hamburger icon" id="hamburger-icon" onClick={this.showMenu} />
      </header>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  helpSent: (value) => dispatch(helpSent(value)),
  logoutUser: () => dispatch(logoutUser()),
  showUserProfile: () => dispatch(showUserProfile())
});

const mapStateToProps = (state) => ({
  user: state.user
});

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
