import React, { Component } from "react";
import { Navigate } from "react-router-dom";
import AuthService from "../controller/AuthenticationService";
import Navbar from "./Navbar";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: null,
      userReady: false,
      currentUser: { username: "" }
    };
  }

  componentDidMount() {
    const currentUser = AuthService.getCurrentUser();

    if (!currentUser) this.setState({ redirect: "/home" });
    this.setState({ currentUser: currentUser, userReady: true })
  }

  render() {
    if (this.state.redirect) {
      return <Navigate to={this.state.redirect} />
    }

    const { currentUser } = this.state;

    return (
      <div className="container">
        <Navbar/>
        {(this.state.userReady) ?
        <div>
           <br/>
            <br/>
            <br/>
          <h1>Profile</h1>
        <br/>
            <br/>
            <br/> <br/>
            <br/>
            
        <p>
          <strong>Username:</strong>{" "}
          {currentUser.username}
        </p>
        
        <p>
          <strong>Email:</strong>{" "}
          {currentUser.email}
        </p>
        
      </div>: null}
      </div>
    );
  }
}