import React, { Component } from 'react';
import auth from "../../services/authService";

const initialState = { user: null };

export const AuthContext = React.createContext(initialState);

export class AuthContextProvaider extends Component {
  state = initialState;

  componentDidMount() {
    const user = auth.getCurrentUser();
    this.setState({ user });
  }

  render() { 
    return ( 
      <AuthContext.Provider value={this.state}>
        {this.props.children}
      </AuthContext.Provider>
     );
  }
}

export default AuthContext.Consumer;