import React from 'react';

import { withFirebase } from '../Firebase';

import { Button } from 'semantic-ui-react'

const SignOutButton = ({ firebase }) => (
    <Button type="button" onClick={firebase.doSignOut}>
    </Button>
);

export default withFirebase(SignOutButton);