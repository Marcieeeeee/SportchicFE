import { Card, Container, Nav, Navbar, Row, Col, Image, Button } from "react-bootstrap"
import brandImage from "../assets/images/shoes/shoes1.png"
import brandImage2 from "../assets/images/shoes/shoes2.png"
import brandImage3 from "../assets/images/shoes/shoes3.png"
import brandImage4 from "../assets/images/shoes #2/sptu4 -nike-.png"
import { useNavigate } from "react-router-dom"

const   SpecsComponents = () => {
    const navigate = useNavigate()
    return (
        <div className="bgProduk">
            <Navbar collapseOnSelect expand="lg" variant="light">
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
                    <Col md={3} className="produkWrapper mt-3">
                    <Card className="text-dark produkImg">
                        <Image src={brandImage} alt="Card image" className="img" />
                        <div>
                            <div className="p-2 m-1">
                            <Card.Title>Product Name</Card.Title>
                            <Card.Text>
                            Rp. XXX.XXX
                            </Card.Text>
                            <div>
                            <Button variant="success" onClick={() => navigate('/chekout')}>--- BUY ---</Button>
                            
                            </div>
                            </div>
                        </div>  
                    </Card>
                    </Col>
                    <Col md={3} className="produkWrapper mt-3">
                    <Card className="text-dark produkImg">
                        <Image src={brandImage2} alt="Card image" className="img"/>
                        <div>
                            <div className="p-2 m-1">
                            <Card.Title>Product Name</Card.Title>
                            <Card.Text>
                            Rp. XXX.XXX
                            </Card.Text>
                            <Button variant="success" onClick={() => navigate('/chekout')}>--- BUY ---</Button>
                            </div>
                        </div>
                            
                    </Card>
                    </Col>
                    <Col md={3} className="produkWrapper mt-3">
                    <Card className="text-dark produkImg">
                        <Image src={brandImage3} alt="Card image" className="img"/>
                        <div>
                            <div className="p-2 m-1">
                            <Card.Title>Product Name</Card.Title>
                            <Card.Text>
                            Rp. XXX.XXX
                            </Card.Text>
                            <Button variant="success" onClick={() => navigate('/chekout')}>--- BUY ---</Button>
                            </div>
                        </div>
                            
                    </Card>
                    </Col>
                    <Col md={3} className="produkWrapper mt-3">
                    <Card className="text-dark produkImg">
                        <Image src={brandImage4} alt="Card image" className="img"/>
                        <div>
                            <div className="p-2 m-1">
                            <Card.Title>Product Name</Card.Title>
                            <Card.Text>
                            Rp. XXX.XXX
                            </Card.Text>
                            <Button variant="success" onClick={() => navigate('/chekout')}>--- BUY ---</Button>
                            </div>
                        </div>
                            
                    </Card>
                    </Col>
                    <Col md={3} className="produkWrapper mt-3">
                    <Card className="text-dark produkImg">
                        <Image src={brandImage4} alt="Card image" className="img" />
                        <div>
                            <div className="p-2 m-1">
                            <Card.Title>Product Name</Card.Title>
                            <Card.Text>
                            Rp. XXX.XXX
                            </Card.Text>
                            <div>
                            <Button variant="success" onClick={() => navigate('/chekout')}>--- BUY ---</Button>
                            
                            </div>
                            </div>
                        </div>  
                    </Card>
                    </Col>
                    <Col md={3} className="produkWrapper mt-3">
                    <Card className="text-dark produkImg">
                        <Image src={brandImage4} alt="Card image" className="img" />
                        <div>
                            <div className="p-2 m-1">
                            <Card.Title>Product Name</Card.Title>
                            <Card.Text>
                            Rp. XXX.XXX
                            </Card.Text>
                            <div>
                            <Button variant="success" onClick={() => navigate('/chekout')}>--- BUY ---</Button>
                            
                            </div>
                            </div>
                        </div>  
                    </Card>
                    </Col>
                    <Col md={3} className="produkWrapper mt-3">
                    <Card className="text-dark produkImg">
                        <Image src={brandImage4} alt="Card image" className="img" />
                        <div>
                            <div className="p-2 m-1">
                            <Card.Title>Product Name</Card.Title>
                            <Card.Text>
                            Rp. XXX.XXX
                            </Card.Text>
                            <div>
                            <Button variant="success" onClick={() => navigate('/chekout')}>--- BUY ---</Button>
                            
                            </div>
                            </div>
                        </div>  
                    </Card>
                    </Col>
                    <Col md={3} className="produkWrapper mt-3">
                    <Card className="text-dark produkImg">
                        <Image src={brandImage4} alt="Card image" className="img" />
                        <div>
                            <div className="p-2 m-1">
                            <Card.Title>Product Name</Card.Title>
                            <Card.Text>
                            Rp. XXX.XXX
                            </Card.Text>
                            <div>
                            <Button variant="success" onClick={() => navigate('/chekout')}>--- BUY ---</Button>
                            
                            </div>
                            </div>
                        </div>  
                    </Card>
                    </Col>
                    <Col md={3} className="produkWrapper mt-3">
                    <Card className="text-dark produkImg">
                        <Image src={brandImage4} alt="Card image" className="img" />
                        <div>
                            <div className="p-2 m-1">
                            <Card.Title>Product Name</Card.Title>
                            <Card.Text>
                            Rp. XXX.XXX
                            </Card.Text>
                            <div>
                            <Button variant="success" onClick={() => navigate('/chekout')}>--- BUY ---</Button>
                            
                            </div>
                            </div>
                        </div>  
                    </Card>
                    </Col>
                    <Col md={3} className="produkWrapper mt-3">
                    <Card className="text-dark produkImg">
                        <Image src={brandImage4} alt="Card image" className="img" />
                        <div>
                            <div className="p-2 m-1">
                            <Card.Title>Product Name</Card.Title>
                            <Card.Text>
                            Rp. XXX.XXX
                            </Card.Text>
                            <div>
                            <Button variant="success" onClick={() => navigate('/chekout')}>--- BUY ---</Button>
                            
                            </div>
                            </div>
                        </div>  
                    </Card>
                    </Col>
                    <Col md={3} className="produkWrapper mt-3">
                    <Card className="text-dark produkImg">
                        <Image src={brandImage4} alt="Card image" className="img" />
                        <div>
                            <div className="p-2 m-1">
                            <Card.Title>Product Name</Card.Title>
                            <Card.Text>
                            Rp. XXX.XXX
                            </Card.Text>
                            <div>
                            <Button variant="success" onClick={() => navigate('/chekout')}>--- BUY ---</Button>
                            
                            </div>
                            </div>
                        </div>  
                    </Card>
                    </Col>
                    <Col md={3} className="produkWrapper mt-3">
                    <Card className="text-dark produkImg">
                        <Image src={brandImage4} alt="Card image" className="img" />
                        <div>
                            <div className="p-2 m-1">
                            <Card.Title>Product Name</Card.Title>
                            <Card.Text>
                            Rp. XXX.XXX
                            </Card.Text>
                            <div>
                            <Button variant="success" onClick={() => navigate('/chekout')}>--- BUY ---</Button>
                            
                            </div>
                            </div>
                        </div>  
                    </Card>
                    </Col>
                </Row>
            </Container>
            
        </div>
        
    )
}

export default SpecsComponents