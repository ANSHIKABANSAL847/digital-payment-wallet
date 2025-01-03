import React from "react";
import { ArrowRight, Wallet, Shield, Zap, Award } from "lucide-react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import image from "../assets/a.jpg";
import { Link } from "react-router-dom";

const LandingPage = () => {
  const Features = [
    {
      icon: <Zap className="w-8 h-8 text-primary" />,
      title: "Instant Transfers",
      desc: "Send money instantly to anyone, anywhere. Zero waiting time.",
    },
    {
      icon: <Shield className="w-8 h-8 text-primary" />,
      title: "Secure Payments",
      desc: "Bank-grade security with end-to-end encryption.",
    },
    {
      icon: <Award className="w-8 h-8 text-primary" />,
      title: "Cashback Rewards",
      desc: "Earn rewards on every transaction. More spend, more rewards.",
    },
    {
      icon: <Wallet className="w-8 h-8 text-primary" />,
      title: "Budget Tracking",
      desc: "Keep track of your spending and save smarter.",
    },
    {
      icon: <Zap className="w-8 h-8 text-primary" />,
      title: "Lightning Speed",
      desc: "Enjoy fast and seamless payment experiences.",
    },
    {
      icon: <Award className="w-8 h-8 text-primary" />,
      title: "Exclusive Offers",
      desc: "Get access to exclusive deals and discounts.",
    },
  ];

  return (
    <div className="min-vh-100 bg-light">
      {/* Hero Section */}
      <Container fluid className="bg-gradient-to-b from-[#00baf2] to-[#002970] text-white py-5">
        <Row className="align-items-center">
          <Col md={6} className="text-center text-md-start">
            <h1 className="display-4 fw-bold">
              <span>Your Money,</span> <br />
              <span className="text-light">Simplified</span>
            </h1>
            <p className="lead mt-3">
              Experience lightning-fast payments, seamless transfers, and exclusive rewards all in one place.
            </p>
            <div className="d-flex justify-content-center justify-content-md-start gap-3 mt-4">
              <Link to="/login">
                <Button variant="light" size="lg" className="px-4 py-3 rounded-3">
                  Get Started <ArrowRight className="ms-2" />
                </Button>
              </Link>
              <Button variant="outline-light" size="lg" className="px-4 py-3 rounded-3">
                Learn More
              </Button>
            </div>
          </Col>
          <Col md={6} className="mt-4 mt-md-0 text-center">
            <Card className="shadow-lg border-0 rounded-3 overflow-hidden">
              <Card.Img
                src={image}
                alt="Hero Image"
                className="img-fluid rounded-3" // Use img-fluid for responsiveness
                style={{ objectFit: "cover" }} // Ensure the image covers the area
              />
            </Card>
          </Col>
        </Row>
      </Container>

      {/* Features Section */}
      <Container className="py-5">
        <h2 className="text-center mb-4">Why Choose Us?</h2>
        <Row className="g-4">
          {Features.map((feature, index) => (
            <Col md={4} key={index}>
              <Card className="h-100 shadow-sm border-0 rounded-3 p-4 text-center">
                <div className="mb-3">{feature.icon}</div>
                <Card.Title>{feature.title}</Card.Title>
                <Card.Text className="text-muted">{feature.desc}</Card.Text>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      {/* Call to Action Section */}
      <Container fluid className="bg-gradient-to-r from-[#002970] to-[#00baf2] text-white py-5">
        <Row>
          <Col className="text-center">
            <h2 className="fw-bold mb-3">Ready to Get Started?</h2>
            <p className="lead mb-4">Sign up and start your journey towards smarter payments.</p>
            <Link to="/login">
              <Button variant="light" size="lg" className="px-4">
                Sign Up Now
              </Button>
            </Link>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default LandingPage;
