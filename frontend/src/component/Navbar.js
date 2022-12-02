import React, { Component } from 'react'
import AuthService from "../controller/AuthenticationService";

export default class Navbar extends Component {
  constructor(props) {
    super(props);
    this.logOut = this.logOut.bind(this);

    this.state = {
      showModeratorBoard: false,
      showAdminBoard: false,
      currentUser: undefined,
    };
  }

  componentDidMount() {
    const user = AuthService.getCurrentUser();

    if (user) {
      this.setState({
        currentUser: user,
        showModeratorBoard: user.roles.includes("ROLE_MODERATOR"),
        showAdminBoard: user.roles.includes("ROLE_ADMIN"),
      });
    }
  }

  logOut() {
    AuthService.logout();
    this.setState({
      showModeratorBoard: false,
      showAdminBoard: false,
      currentUser: undefined,
    });
  }
  render() {
    return (
      <div>
     <div class="container text-center">
  <div class="row">
  <div class="col">
    <a type="button" class="btn btn-outline-secondary" href="/admin">Admin</a>
    </div>
    {/* <div class="col">
    <a type="button" class="btn btn-outline-secondary" href="/add">Add Book</a>
    </div>
    <div class="col">
    <a type="button" class="btn btn-outline-success" href="/book">Book List</a>
    </div> */}
    <div class="col">
    <a type="button" class="btn btn-outline-primary" href="/home">Profil</a>
    </div>
    <div class="col">
    <a type="button" class="btn btn-outline-danger  " href="/signin" onClick={this.logOut}>Logout</a>
    </div>
  </div>
</div>

              



  </div>
    )
  }
}
