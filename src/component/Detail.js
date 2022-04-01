import React from 'react'
import {Navbar, Container, Nav, Breadcrumb, Row, Figure, Col} from 'react-bootstrap'
import viewLogo from '../images/Cover.png';
import content from '../images/content.jpg';


// import cssModules from './Login.module.css';

const Deatil = () => {
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

        {/* breadcump  */}
        <Container className='header'>
            <Breadcrumb>
                <Breadcrumb.Item><a href="#">Home</a></Breadcrumb.Item>
                    <Breadcrumb.Item><a href="https://getbootstrap.com/docs/4.0/components/breadcrumb/"></a>
                    Product
                </Breadcrumb.Item>
                <Breadcrumb.Item active>Detail Product</Breadcrumb.Item>
            </Breadcrumb>
        </Container>
        {/* end breadcump */}

        {/* single product */}
        <Container>
            <Row>
                <Col lg={5}>
                <Figure>
                    <Figure.Image
                    width={800}
                    height={850}
                    alt="aaa"
                    src={content}
                    />
                    <Figure.Caption className='d-flex justify-content-evenly'>
                    <img className='mx-1' src={content} width={120} height={100}></img>
                    <img className='mx-1' src={content} width={120} height={100}></img>
                    <img className='mx-1' src={content} width={120} height={100}></img>
                    <img className='mx-1' src={content} width={120} height={100}></img>
                    </Figure.Caption>
                </Figure>
                </Col>

                <Col lg={5}>
                <Figure.Caption className='title'>Logitech Mouse.</Figure.Caption>
                      <div className='garisTitle'></div>

                    <h4 className='mt-3'>Stock: 400</h4>
                    <ul className='list'>
                        <li>Wireless Mouse</li>
                        <li>Switch lebih baik</li>
                        <li>Garansi 3 tahun</li>
                        <li>Baterai tahan lama</li>
                    </ul>
                    <p>Kompatibel dengan POWERPLAY, Teknologi wireless LIGHTSPEED, Onboard memory 1 Fitur yang canggih memerlukan Software Logitech G HUB Gaming, tersedia untuk didownload di logitechg.com/ghub, Sistem pengencangan klik, Alas PFE tanpa aditif, 5 tombol</p>
                </Col>
            
            </Row>
        </Container>
        {/* end single product */}

    </div>
  )
}
export default Deatil;
