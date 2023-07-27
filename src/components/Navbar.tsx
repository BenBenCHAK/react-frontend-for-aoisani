import { Container, Nav, Navbar as NavbarBs } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

export function Navbar() {
    const twitterLink = 'https://twitter.com/AoiSani'

    return <NavbarBs sticky='top' className='d-flex bg-white shadow-sm mb-3'>
        <Container className='justify-content-start'>
            <Nav>
                <Nav.Link to="/" as={NavLink}>Home</Nav.Link>
            </Nav>
            <Nav>
                <Nav.Link to="/art" as={NavLink}>Art</Nav.Link>
            </Nav>
            <Nav>
                <Nav.Link to="/about" as={NavLink}>About</Nav.Link>
            </Nav>
            <a href={twitterLink} target='_blank' className='ms-auto' style={{color: 'black'}}><i className="bi bi-twitter"></i></a>
        </Container>
    </NavbarBs>
}