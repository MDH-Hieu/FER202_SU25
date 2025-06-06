import {Nav, Navbar, Form, FormControl, Button} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const NavbarComponent = () => {
    return (
        <Navbar className="container text-white">
            <Navbar.Brand href="#"className="text-white" >Pizza House</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarSupportedContent"/>
            <Navbar.Collapse id="navbarSupportedContent">
                <Nav className="me-auto">
                    <Nav.Link href="#" className="text-white" active>Home</Nav.Link>
                    <Nav.Link href="#" className="text-secondary">About us</Nav.Link>
                    <Nav.Link href="#"className="text-secondary" >Contact</Nav.Link>
                </Nav>
                <Form className="d-flex" role="search">
                    <FormControl type="search" placeholder="Search" aria-label="Search"/>
                    <Button variant="danger" type="submit" className="mx-2">
                        <i className="bi bi-search"></i>
                    </Button>
                </Form>
            </Navbar.Collapse>
        </Navbar>
    );
}
export default NavbarComponent;