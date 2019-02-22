import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Visibility, Container, Menu, Segment, Button } from 'semantic-ui-react';

const Navbar = () => {
    return (
    <Fragment>
        <Segment
        textAlign='center'
        style={{ minHeight: 700, padding: '1em 0em' }}
        vertical
        >
            <Menu
                fixed='top'
                size='large'
                inverted
            >
                <Container>
                    <Menu.Item>
                        <Button as={Link} to='/' inverted>
                            Home
                        </Button>
                    </Menu.Item>
                    <Menu.Item>
                        <Button as={Link} to='/library' inverted>
                            Library
                        </Button>
                    </Menu.Item>
                    {/* <Menu.Item as='a'>Company</Menu.Item>
                    <Menu.Item as='a'>Careers</Menu.Item>
                    <Menu.Item position='right'>
                        <Button as='a'>
                            Log in
                        </Button>
                        <Button as='a' style={{ marginLeft: '0.5em' }}>
                            Sign Up
                        </Button>
                    </Menu.Item> */}
                </Container>
            </Menu>
        </Segment>
    </Fragment>
    )
}

export default Navbar;
