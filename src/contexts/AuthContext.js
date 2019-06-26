import React, { Component, createContext } from 'react';

export const AuthContext = createContext();

class AuthContextProvider extends Component {
    state = {
        isAuthenticate: false
    }
    toggleAuth = () => {
        this.setState({ isAuthenticate: !this.state.isAuthenticate });
    }
    render() {
        return (
            <AuthContext.Provider value={{ ...this.state, toggleTheme: this.toggleTheme }}>
                {this.props.children}
            </AuthContext.Provider>
        );
    }
}

export default AuthContextProvider;