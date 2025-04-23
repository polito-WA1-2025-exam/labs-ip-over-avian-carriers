import Container from 'react-bootstrap/Container';

export default function Footer(){
    return (
        <footer className="bg-dark text-white py-4">
            <Container fluid>
                <div className="row">
                <div className="col-md-6">
                    <p>&copy; 2025 IP over avian carriers</p>
                </div>
                <div className="col-md-6 text-md-end">
                    <ul className="list-unstyled d-flex justify-content-md-end gap-3 mb-0">
                    <li><a href="https://en.wikipedia.org/wiki/IP_over_Avian_Carriers" className="text-white text-decoration-none">Privacy Policy</a></li>
                    <li><a href="https://en.wikipedia.org/wiki/IP_over_Avian_Carriers" className="text-white text-decoration-none">Terms of Service</a></li>
                    <li><a href="https://en.wikipedia.org/wiki/IP_over_Avian_Carriers" className="text-white text-decoration-none">Contact Us</a></li>
                    </ul>
                </div>
                </div>
            </Container>
    </footer>
    )
}