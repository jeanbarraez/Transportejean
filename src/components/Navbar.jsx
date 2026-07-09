import { Navbar as BootstrapNavbar, Container, Nav, Button } from "react-bootstrap";
import { FaTruck, FaWhatsapp } from "react-icons/fa";

const Navbar = () => {
  return (
    <BootstrapNavbar 
      bg="light" 
      variant="light" 
      expand="lg" 
      sticky="top" 
      className="shadow-sm"
    >
      <Container>
        <BootstrapNavbar.Brand href="#home" className="fw-bold fs-3" style={{ color: "#2d3748" }}>
          <FaTruck className="me-2" style={{ color: "#667eea" }} />
          TRANSPORTEJEAN
        </BootstrapNavbar.Brand>
        <BootstrapNavbar.Toggle aria-controls="basic-navbar-nav" />
        <BootstrapNavbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto align-items-center gap-2">
            <Nav.Link href="#home" className="fs-5 fw-semibold">Inicio</Nav.Link>
            <Nav.Link href="#services" className="fs-5 fw-semibold">Servicios</Nav.Link>
            <Nav.Link href="#gallery" className="fs-5 fw-semibold">Galería</Nav.Link>
            <Nav.Link href="#quote" className="fs-5 fw-semibold">Cotizar</Nav.Link>
            <Nav.Link href="#contact" className="fs-5 fw-semibold">Contacto</Nav.Link>
            <Button 
              href="https://wa.me/56986813898" 
              target="_blank"
              rel="noopener noreferrer"
              style={{ background: "linear-gradient(135deg, #25d366 0%, #128c7e 100%)", border: "none" }}
            >
              <FaWhatsapp className="me-2" />
              WhatsApp
            </Button>
          </Nav>
        </BootstrapNavbar.Collapse>
      </Container>
    </BootstrapNavbar>
  );
};

export default Navbar;
