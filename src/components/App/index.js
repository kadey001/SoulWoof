import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Navigation from '../Navigation';
import Home from '../Home'
import SignIn from '../SignIn'
import SignUp from '../SignUp'

import * as ROUTES from '../../constants/routes'
import { withFirebase } from '../Firebase';
//import { withAuthentication } from '../Session';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            authUser: null,
        };
    }

    componentDidMount() {
        this.listener = this.props.firebase.auth.onAuthStateChanged(authUser => {
            authUser 
            ? this.setState({ authUser })
            : this.setState({ authUser: null })
        },);
    }

    componentWillUnmount() {
        this.listener();
    }

    render() {
        return (
            <Router>
                <div>
                    <Navigation authUser={this.state.authUser} />

                    <hr />

                    <Route path={ROUTES.HOME} component={Home} exact/>
                    <Route path={ROUTES.SIGN_UP} component={SignUp} />
                    <Route path={ROUTES.SIGN_IN} component={SignIn} />
                </div>
            </Router>
        );
    }
}

export default withFirebase(App);