import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import "../css/Home.css";

const Home = () => {
  const [cookieData, setCookieData] = useState(null);

  // Set cookies
  const handleSetCookies = async () => {
    try {
      const res = await fetch("http://localhost:8000/cookie", {
        credentials: "include", // important for cookies
      });
      const text = await res.text();
      alert(text);
    } catch (err) {
      console.error(err);
    }
  };

  // Display cookies
  const handleDisplayCookies = async () => {
    try {
      const res = await fetch("http://localhost:8000/display", {
        credentials: "include",
      });
      const data = await res.json();
      setCookieData(data);
    } catch (err) {
      console.error(err);
    }
  };

  // Clear cookies
  const handleClearCookies = async () => {
    try {
      const res = await fetch("http://localhost:8000/clear", {
        credentials: "include",
      });
      const text = await res.text();
      alert(text);
      setCookieData(null);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Container className="text-center mt-5 home-container">
      <h1 className="mb-4">Welcome To Home Page</h1>
      <p className="lead mb-5">
        This is a simple CRUD operation app built with React and Bootstrap.
        You can register, log in, and manage your data easily.
      </p>

      <Row className="mb-4">
        <Col>
          <Button variant="success" onClick={handleSetCookies} className="me-3">
            Set Cookies
          </Button>
          <Button variant="primary" onClick={handleDisplayCookies} className="me-3">
            Display Cookies
          </Button>
          <Button variant="danger" onClick={handleClearCookies}>
            Clear Cookies
          </Button>
        </Col>
      </Row>

      {cookieData && (
        <Card className="p-3 mt-3">
          <h5>Cookies Data:</h5>
          <p>Name: {cookieData.nm || "Not Found"}</p>
          <p>Course: {cookieData.crs || "Not Found"}</p>
        </Card>
      )}

      <Row className="mt-5">
        <Col md={4}>
          <Card className="feature-card">
            <Card.Body>
              <Card.Title>🚀 Fast Registration</Card.Title>
              <Card.Text>
                Create your account quickly and start exploring our app.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4}>
          <Card className="feature-card">
            <Card.Body>
              <Card.Title>🔐 Secure Login</Card.Title>
              <Card.Text>
                Login safely and keep your information protected.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4}>
          <Card className="feature-card">
            <Card.Body>
              <Card.Title>⚡ Manage Data</Card.Title>
              <Card.Text>
                Perform login operation easily on your profile and records.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
