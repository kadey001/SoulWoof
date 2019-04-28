import React from 'react';
import { Link } from 'react-router-dom';

import SignOutButton from '../SignOut';
import * as ROUTES from '../../constants/routes';
import { AuthUserContext } from '../Session';

import { List, Container } from 'semantic-ui-react';
import { Button } from 'semantic-ui-react';
import { Icon } from 'semantic-ui-react';
import { Image } from 'semantic-ui-react';


const Navigation = () => (
    <div>
        <AuthUserContext.Consumer>
            {authUser => authUser ? <NavigationAuth /> : <NavigationNonAuth />}
        </AuthUserContext.Consumer>
    </div>
);

const NavigationAuth = () => (
    <ul>
        <List horizontal>
            <List.Item>
                <Image src= {require("./Pictures/title.png")} alt="Title" size= "small" centered/>
            </List.Item>
            <List.Item>
                <Button icon labelPosition= 'left' basic color='green'>
                    <Icon name='home icon'></Icon>
                    <Link to={ROUTES.HOME}>Home</Link>
                </Button>
            </List.Item>
            <List.Item>
                <Button icon labelPosition= 'left' basic color='purple'>
                    <Icon name='user icon'></Icon>
                    <Link to={ROUTES.ACCOUNT}>Account</Link>
                </Button>
            </List.Item>
            <List.Item>
                <SignOutButton />
            </List.Item>
        </List>
            <Image src= {require("./Pictures/Soulwoof.png")} alt="Title" size= "tiny" floated='right'/>


    </ul>
);

const NavigationNonAuth = () => (
    
    <List horizontal>
        <List.Item>
            <Image src= {require("./Pictures/title.png")} alt="Title" size= "small" centered/>
        </List.Item>
        <List.Item>
            <Button icon labelPosition= 'left' basic color='blue'>
                <Icon name='sign in icon'></Icon>
                <Link to={ROUTES.SIGN_IN}>Sign In</Link>
            </Button>
        </List.Item>
        <List.Item>
            <Button icon labelPosition= 'left' basic color='teal'>
                <Icon name='signup icon'></Icon>
                <Link to={ROUTES.SIGN_UP}>Sign Up</Link>
                </Button>
        </List.Item>
    </List>
);

export default Navigation;