import React from 'react'
import {Navbar, Container, Nav, Carousel, Row, Col, Card, ListGroup, ListGroupItem, Grid} from 'react-bootstrap'
import viewLogo from '../images/Cover.png';
import content from '../images/content.jpg';
import content2 from '../images/content2.jpg';
import content3 from '../images/content3.jpg';

// import cssModules from './Login.module.css';

const Home = () => {
  return (
    <div className='body'>

        {/* START BAVBAR */}
        <Navbar fixed="top" bg="dark" variant="dark">
            <Container>
            <Navbar.Brand href="#home">
                <img
                alt=""
                src={viewLogo}
                width="40"
                height="50"
                className="d-inline-block align-top mt-1"
                />{' '}
                <p className="d-inline-block me-2 mt-3 ps-3">Dumb <strong>Merch</strong></p>

            </Navbar.Brand>

            <Nav className="ms-auto">
                    <Nav.Link href="#home">Complain</Nav.Link>
                    <Nav.Link href="#features">Profile</Nav.Link>
                    <Nav.Link href="#pricing">Logout</Nav.Link>
                </Nav>      
            </Container>
        </Navbar>
        {/* END NAVBAR */}

        {/* HEADER */}
        <Container className='header'>
            <Carousel>
                <Carousel.Item>
                    <img
                    className="d-block"
                    src={content}
                    alt="First slide"
                    />
                    <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block"
                    src={content2}
                    alt="Second slide"
                    />

                    <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block"
                    src={content3}
                    alt="Third slide"
                    />

                    <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>      
        </Container>
        {/* End Header */}

        {/* list produk */}
        <Container className='container-fluid py-5'>

                <Container className='Product mt-3 mb-5'>
                    <h2 className='text-center mb-4'>Product</h2>
                <Row>
                    <Col lg={3} md={4} sm={6}>                
                        <Card className='mb-3'>
                        <Card.Img variant="top" src={content} />
                        <Card.Body>
                            <Card.Title className='text-center fw-bold'>Mouse</Card.Title>
                            <Card.Text className='text-center'>
                            Rasakan mouse ini dengan switch yang sangat lembut.
                            </Card.Text>
                        </Card.Body>
                        <ListGroup className="list-group-flush">
                            <ListGroupItem className='text-center'>Harga: 400.000 </ListGroupItem>
                            <ListGroupItem className='text-center'>Stock Tersedia: 45</ListGroupItem>
                        </ListGroup>
                        <Card.Body className='text-center'>
                            <Card.Link href="#" className='btn btn-dark'>Buy</Card.Link>
                            <Card.Link href="#" className='btn btn-dark'>Add To Cart</Card.Link>
                        </Card.Body>
                        </Card>
                    </Col>

                    <Col lg={3} md={4} sm={6}>                
                    <Card className='mb-3'>
                        <Card.Img variant="top" src={content} />
                        <Card.Body>
                            <Card.Title className='text-center fw-bold'>Mouse</Card.Title>
                            <Card.Text className='text-center'>
                            Rasakan mouse ini dengan switch yang sangat lembut.
                            </Card.Text>
                        </Card.Body>
                        <ListGroup className="list-group-flush">
                            <ListGroupItem className='text-center'>Harga: 400.000 </ListGroupItem>
                            <ListGroupItem className='text-center'>Stock Tersedia: 45</ListGroupItem>
                        </ListGroup>
                        <Card.Body className='text-center'>
                            <Card.Link href="#" className='btn btn-dark'>Buy</Card.Link>
                            <Card.Link href="#" className='btn btn-dark'>Add To Cart</Card.Link>
                        </Card.Body>
                        </Card>
                    </Col>

                    <Col lg={3} md={4} sm={6}>                
                    <Card className='mb-3'>
                        <Card.Img variant="top" src={content} />
                        <Card.Body>
                            <Card.Title className='text-center fw-bold'>Mouse</Card.Title>
                            <Card.Text className='text-center'>
                            Rasakan mouse ini dengan switch yang sangat lembut.
                            </Card.Text>
                        </Card.Body>
                        <ListGroup className="list-group-flush">
                            <ListGroupItem className='text-center'>Harga: 400.000 </ListGroupItem>
                            <ListGroupItem className='text-center'>Stock Tersedia: 45</ListGroupItem>
                        </ListGroup>
                        <Card.Body className='text-center'>
                            <Card.Link href="#" className='btn btn-dark'>Buy</Card.Link>
                            <Card.Link href="#" className='btn btn-dark'>Add To Cart</Card.Link>
                        </Card.Body>
                        </Card>
                    </Col>

                    <Col lg={3} md={4} sm={6}>                
                    <Card className='mb-3'>
                        <Card.Img variant="top" src={content} />
                        <Card.Body>
                            <Card.Title className='text-center fw-bold'>Mouse</Card.Title>
                            <Card.Text className='text-center'>
                            Rasakan mouse ini dengan switch yang sangat lembut.
                            </Card.Text>
                        </Card.Body>
                        <ListGroup className="list-group-flush">
                            <ListGroupItem className='text-center'>Harga: 400.000 </ListGroupItem>
                            <ListGroupItem className='text-center'>Stock Tersedia: 45</ListGroupItem>
                        </ListGroup>
                        <Card.Body className='text-center'>
                            <Card.Link href="#" className='btn btn-dark'>Buy</Card.Link>
                            <Card.Link href="#" className='btn btn-dark'>Add To Cart</Card.Link>
                        </Card.Body>
                        </Card>
                    </Col>
                </Row>
                
            </Container>

        </Container>
            



    </div>
  )
}
export default Home;
