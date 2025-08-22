import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import "../css/Home.css";

const Home = () => {
  return (
    <>
      <Container className="text-center mt-5 home-container">
        <h1 className="mb-4">Welcome To Home Page</h1>
        <p className="lead mb-5">
          This is a simple CRUD operation app built with React and Bootstrap. 
          You can register, log in, and manage your data easily.
        </p>

        <Row>
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
    </>
  );
};

export default Home;
