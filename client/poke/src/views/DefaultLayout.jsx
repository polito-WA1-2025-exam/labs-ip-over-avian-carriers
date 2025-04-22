import Footer from "../components/Footer"
import NavHeader from "../components/NavHeader"
import { Outlet } from "react-router";
import Container from 'react-bootstrap/Container';

export default function DefaultLayout() {
    return (
        <div className="d-flex flex-column min-vh-100">
            <NavHeader />
            <Container fluid className="flex-grow-1">
                <Outlet />
            </Container>
            <Footer />
        </div>
    )
}