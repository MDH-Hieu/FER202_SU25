import { Row, Col, Form, Button } from "react-bootstrap";

function ReservationForm() {
    return (
        <div className="container p-5 text-white">
            <h2 className="text-center mt-3 mb-4">Book your table</h2>
            <Form>
                <Row className="mb-3">
                    <Col>
                        <Form.Group controlId="formName">

                            <Form.Control type="text" placeholder="Your Name" />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group controlId="formEmail">

                            <Form.Control type="email" placeholder="Your Email" />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group controlId="formServer">

                            <Form.Control as="select" defaultValue="Select a Server">
                                <option>Choose...</option>
                                <option>Server 1</option>
                                <option>Server 2</option>
                                <option>Server 3</option>
                            </Form.Control>
                        </Form.Group>
                    </Col>
                </Row>
                <Row className="mb-3">
                    <Col>
                        <Form.Group controlId="formTextArea">

                            <Form.Control
                                as="textarea"
                                rows={6}
                                placeholder="Please write your comment"
                            ></Form.Control>
                        </Form.Group>
                    </Col>
                </Row>
                <Button variant="warning" type="submit" className="text-white">
                    Send Message
                </Button>
            </Form>
        </div>
    );
}
export default ReservationForm;
