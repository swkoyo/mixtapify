import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Container, Menu, Segment, Button } from 'semantic-ui-react';

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
                        Mixtapify
                    </Menu.Item>
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
                </Container>
            </Menu>
        </Segment>
    </Fragment>
    )
}

export default Navbar;
