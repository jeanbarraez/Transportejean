import { Container, Row, Col, Card } from "react-bootstrap";
import { FaStar } from "react-icons/fa";
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
        <h2 className="text-center display-4 fw-bold mb-5">
          Lo que dicen nuestros clientes
        </h2>
        <Row className="g-4">
          {testimonials.map((testimonial, index) => (
            <Col md={4} key={index}>
              <Card className="h-100 shadow-lg border-0">
                <Card.Body className="text-center p-5">
                  <Card.Img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="mx-auto mb-3 shadow-sm"
                    style={{
                      width: "100%",
                      height: "400px",
                      objectFit: "contain",
                    }}
                  />
                  <div className="mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <FaStar key={i} className="text-warning fs-5" />
                    ))}
                  </div>
                  <Card.Title className="fw-bold mb-1 fs-4">
                    {testimonial.name}
                  </Card.Title>
                  <Card.Subtitle className="text-muted fs-6">
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
