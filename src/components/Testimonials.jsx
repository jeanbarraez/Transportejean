import { Container, Row, Col, Card } from "react-bootstrap";
import { FaStar, FaQuoteLeft } from "react-icons/fa";
import Sebastian from "../image/Sebastian.jpeg";
import Eva from "../image/Eva.jpeg";
import Angelica from "../image/Angelica.jpeg";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sebastian",
      role: "Cliente Residencial",
      image: Sebastian,
      rating: 5,
    },
    {
      name: "Eva",
      role: "Empresa Varidores spa",
      image: Eva,
      rating: 5,
    },
    {
      name: "Angelica",
      role: "Cliente Residencial",
      image: Angelica,
      rating: 5,
    },
  ];

  return (
    <section id="testimonials" className="py-5 bg-light">
      <Container className="py-5">
        <h2
          className="text-center display-4 fw-bold mb-3"
          style={{ color: "#2d3748" }}
        >
          Lo que dicen nuestros clientes
        </h2>
        <p className="text-center text-muted mb-5 fs-5">
          Testimonios reales de quienes ya confiaron en nosotros
        </p>
        <Row className="g-4">
          {testimonials.map((testimonial, index) => (
            <Col md={4} key={index}>
              <Card className="h-100 shadow border-0">
                <Card.Img
                  variant="top"
                  src={testimonial.image}
                  alt={testimonial.name}
                  style={{
                    width: "100%",
                    height: "auto",
                    objectFit: "contain",
                  }}
                />
                <Card.Body className="text-center p-4">
                  <div className="mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <FaStar key={i} className="text-warning fs-5" />
                    ))}
                  </div>
                  <Card.Title
                    className="fw-bold mb-1"
                    style={{ color: "#2d3748" }}
                  >
                    {testimonial.name}
                  </Card.Title>
                  <Card.Subtitle className="text-muted">
                    {testimonial.role}
                  </Card.Subtitle>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Testimonials;
