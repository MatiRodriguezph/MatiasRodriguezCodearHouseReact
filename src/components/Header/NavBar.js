import CartWidget from "./CartWidget"
import Navbar from "react-bootstrap/Navbar"
import Container from "react-bootstrap/Container"
import Nav from "react-bootstrap/Nav"
import { Link } from "react-router-dom"

const NavBar = () => {

    return (

        <Navbar bg="dark" variant="dark">
            <Container className="align-items-center">
            <Container>
                    <Link to="/">
                        <h1>Servicio tecnico</h1>
                        <h3 className="fs-5">Tienda de Notebooks</h3>
                    </Link>
                </Container>
                <Nav className="me-auto ms-5">
                    <Link className="nav-link" to={"/categoria/1"}>Notebooks</Link>
                    <Link className="nav-link" to={"/categoria/2"}>Perifericos</Link>
                    <Link className="nav-link" to={"/categoria/3"}>Sillas gamer</Link>
                </Nav>
                <CartWidget/>
            </Container>
        </Navbar>
    )
}

export default NavBar