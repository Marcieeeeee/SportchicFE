import React, { useEffect, useState } from 'react'
import { Card, Container, Nav, Navbar, Row, Col, Image, Button } from "react-bootstrap"
import { useNavigate } from "react-router-dom"
import axios from 'axios'

const   SpecsComponents = () => {
    const navigate = useNavigate()
    const [loading, setLoading] = useState(true)
    const [viewProduct, setProduct] = useState([])

    useEffect(() => {
        axios.get(`/api/view-specs`).then(res =>{
            if(res.data.status === 200) {
                setProduct(res.data.product);
                setLoading(false);
            }
        })
    }, [])

    var display_Productdata = "";

    if (loading) {
        return <h4>Loading View Product Loading...</h4>
    } else {
        display_Productdata = viewProduct.map( (item) => {
            return (
                <Col md={3} className="produkWrapper mt-3" key={item.id}>
                    <Card className="text-dark produkImg">
                        <Image src={`http://localhost:8000/${item.image}`} alt="Card image" className="img" />
                        <div>
                            <div className="p-2 m-1">
                                <Card.Title>{item.name}</Card.Title>
                                <Card.Text>Rp. {item.price}</Card.Text>
                                <div>
                                    <Button variant="success" onClick={() => navigate('/chekout', { state: { product: item } })} className="width: 100%">BUY</Button>
                                </div>
                            </div>
                        </div>  
                    </Card>
                </Col>
            )
        } )
    }
    return (
        <div className="bgProduk">
            <Navbar collapseOnSelect expand="lg" variant="light" >
                <Container>
                    <Navbar.Brand href="/">SportChic</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="#brand">Categories</Nav.Link>
                        <Nav.Link href="#populer">Populer</Nav.Link>
                        <Nav.Link href="#about">About Us</Nav.Link>
                        <Nav.Link href="#contact">Contact</Nav.Link>
                    </Nav>
                    <Nav>
                    <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text>
                        <Button variant="outline-dark">SIGN IN</Button>{' '}
                    </Navbar.Text>
                    </Navbar.Collapse>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
                </Navbar>
            <Container>
                <br />
                <br />
                <h1 id="populer" className="title text-center text-white">Specs</h1>
                <br />
                <Row>
                    {display_Productdata}
                </Row>
            </Container>
            
        </div>
        
    )
}

export default SpecsComponents