import React from 'react'
import {Col, Container, Row, Button, Form} from 'react-bootstrap'
import viewLogo from '../images/Cover.png';

// import cssModules from './Login.module.css';

const Login = () => {
  return (
    <div className='body'>

        <Container className='container'>

            <Row className='card1'> 

                <Col lg={6} md={6} sm={12} className='mt-3 mb-5'>
                    <img className='logo' src={viewLogo} alt='' />
                    <h1>Easy, Fast and Realiable</h1>
                    <p>Go shopping for merchandise, just go to dumb merch
                        shooping the biggest merchandise in Indonesia
                    </p>
                    <Button className='Button1' variant="primary" size="lg" type="submit">
                        Login
                    </Button>

                    <a href='#'>Register</a>

                </Col>
                    
                <Col lg={4} md={5} sm={10} className='card'>
                    <Form className='valueCard'>
                        <label className='title'>Register</label>

                        <Form.Group className="name" controlId="formBasicName">
                        <Form.Control type="name" placeholder="Name" />
                        </Form.Group>

                        <Form.Group className="email" controlId="formBasicEmail">
                        <Form.Control type="email" placeholder="Email" />
                        </Form.Group>

                        <Form.Group className="password" controlId="formBasicPassword">
                        <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                        
                        <div className="d-grid gap-2">
                        <Button className='Button' variant="primary" size="lg" type="submit">
                        Submit
                        </Button>
                        </div>
                    </Form>
                </Col>
            </Row>
        </Container>
    </div>
  )
}
export default Login;
