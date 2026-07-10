import { Container, Row, Col, Button } from "react-bootstrap";
import { FaWhatsapp, FaTruck, FaBox, FaShieldAlt } from "react-icons/fa";

const Hero = () => {
  return (
    <section id="home" className=" text-white py-5">
      <Container className="py-5">
        <Row className="align-items-center">
          <Col md={6} className="text-center text-md-start mb-5 mb-md-0">
            <h1 className="display-4 fw-bold mb-4">
              Fletes y Mudanzas en Santiago y Todo Chile
            </h1>
            <p className="fs-5 mb-5 text-white opacity-90">
              Servicio profesional, rápido y seguro. Transportamos tu carga con
              la confianza que necesitas.
            </p>

            {/* Beneficios rápidos */}
            <div className="row mb-5 text-center text-md-start">
              <div className="col-4 mb-3">
                <FaTruck className="fs-1 mb-2 opacity-75" />
                <p className="fw-semibold mb-0">Entrega Rápida</p>
              </div>
              <div className="col-4 mb-3">
                <FaShieldAlt className="fs-1 mb-2 opacity-75" />
                <p className="fw-semibold mb-0">Seguro Total</p>
              </div>
              <div className="col-4 mb-3">
                <FaBox className="fs-1 mb-2 opacity-75" />
                <p className="fw-semibold mb-0">Cuidamos tu carga</p>
              </div>
            </div>

            <div className="d-flex flex-wrap justify-content-center justify-content-md-start gap-3">
              <Button
                variant="light"
                size="lg"
                href="#quote"
                className="fw-bold px-5 py-3"
              >
                Cotizar Ahora
              </Button>
              <a
                href="https://wa.me/56986813898"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-success btn-lg fw-bold px-5 py-3"
              >
                <FaWhatsapp className="me-2" />
                WhatsApp
              </a>
            </div>
          </Col>
          <Col md={6} className="mt-5 mt-md-0">
            <img
              src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&h=400&fit=crop"
              alt="Fletes y Mudanzas"
              className="img-fluid rounded shadow-lg"
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hero;
