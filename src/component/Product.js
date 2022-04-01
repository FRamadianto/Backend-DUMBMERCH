import React from 'react'
import {Navbar, Container, Nav,Table, Button} from 'react-bootstrap'
import viewLogo from '../images/Cover.png';


const Product = () => {
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
                    <Nav.Link href="#home">Category</Nav.Link>
                    <Nav.Link className='text-orange' href="#features">Product</Nav.Link>
                    <Nav.Link href="#pricing">Logout</Nav.Link>
                </Nav>      
            </Container>
        </Navbar>
        {/* END NAVBAR */}    

       {/* list category */}
       <Container className='header'>
        <Table striped bordered hover variant="dark">
            <thead>
                <tr>
                <th>No</th>
                <th>Photo</th>
                <th>Product Name</th>
                <th>Product Desc</th>
                <th>Price</th>
                <th>Qty</th>
                <th>Action</th>
                </tr>
            </thead>

            <tbody>
                <tr>
                    <td>1</td>
                    <td className='text-center'>Mark</td>
                    <td className='text-center'>Mark</td>
                    <td className='text-center'>Mark</td>
                    <td className='text-center'>Mark</td>
                    <td className='text-center'>Mark</td>
                    <td>
                    <Button className='button' variant="success">Edit</Button>{' '}
                    <Button className='button' variant="danger">Delete</Button>
                    </td>
                </tr>

                <tr>
                    <td>2</td>
                    <td className='text-center'>Jacob</td>
                    <td className='text-center'>Jacob</td>
                    <td className='text-center'>Jacob</td>
                    <td className='text-center'>Jacob</td>
                    <td className='text-center'>Jacob</td>
                    <td>
                    <Button className='button' variant="success">Edit</Button>{' '}
                    <Button className='button' variant="danger">Delete</Button>
                    </td>
                </tr>
                <tr>
                    <td>3</td>
                    <td className='text-center'>Fikri</td>
                    <td className='text-center'>Jacob</td>
                    <td className='text-center'>Jacob</td>
                    <td className='text-center'>Jacob</td>
                    <td className='text-center'>Jacob</td>
                    <td>
                    <Button className='button' variant="success">Edit</Button>{' '}
                    <Button className='button' variant="danger">Delete</Button>
                    </td>
                </tr>
            </tbody>
        </Table>
        </Container>
        
       {/* end list category */}

    </div>
  )
}
export default Product;
