import { Col, Container, Card, Row, Button, Image,  } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Home from '../pages/Home';
import iklanImage from "../assets/images/iklan.png"
import brandImage from "../assets/images/nike.png"
import brandImage2 from "../assets/images/adidas.png"
import brandImage3 from "../assets/images/ortuseight.png"
import brandImage4 from "../assets/images/specs.png"
import produkImage from "../assets/images/shoes/shoes1.png"
import produkImage2 from "../assets/images/shoes/shoes2.png"
import produkImage3 from "../assets/images/shoes/shoes3.png"
import produkImage4 from "../assets/images/shoes #2/sptu4 -nike-.png"
import aboutImage from "../assets/images/shoes #2/sptu5 -nike-.png"
import { useNavigate } from "react-router-dom"


const HomeComponents = () => {
    const navigate = useNavigate()
    return (
        <div>
            <div className='myBG'>
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
                        <Button variant="outline-dark" onClick={() => navigate('/login')}>SIGN IN</Button>{' '}
                    </Navbar.Text>
                    </Navbar.Collapse>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
                </Navbar>
                <div className="intro">
                    <Container className="text-white text-left d-flex justify-content-left align-items-left">
                    <Row>
                        <Col>
                        <div className="title">The Best Store Ever Of</div>
                        <div className="title">Shoes In The World!</div>
                        <div className="introButton mt-4 text-left">
                            <Button variant="success">Get Started</Button>
                        </div>
                        </Col>
                    </Row>
                    </Container>
                </div>
            </div>
            <div>
            <Container>
                <br/>
                <h1 className="text-dark text-center" id="brand">Choose By Brand</h1>
                <br/>
                <Row>
                    <Col md={3} className="produkWrapper produkImage" id="brand">
                    <Image src={brandImage} alt="Produk 1" className="images" width="auto" height="auto" onClick={() => navigate('/nike')}></Image>
                    </Col>

                    <Col md={3} className="produkWrapper produkImage" id="brand">
                    <Image src={brandImage2} alt="Produk 1" className="images" width="auto" height="auto" onClick={() => navigate('/adidas')}></Image>
                    </Col>

                    <Col md={3} className="produkWrapper produkImage" id="brand">
                    <Image src={brandImage3} alt="Produk 1" className="images" width="auto" height="auto" onClick={() => navigate('/ortuseght')}></Image>
                    </Col>

                    <Col md={3} className="produkWrapper produkImage" id="brand">
                    <Image src={brandImage4} alt="Produk 1" className="images" width="auto" height="auto" onClick={() => navigate('/specs')}></Image>
                    </Col>

                    <Image src={iklanImage} className="mt-4"></Image>
                </Row>
            </Container>
            </div>
            <div>
                <Container>
                    <br />
                    <br />
                    <h1 id="populer">Populer Product</h1>
                    <br />
                    <Row>
                        <Col md={3} className="produkWrapper mt-3">
                        <Card className="text-dark produkImg">
                            <Image src={produkImage} alt="Card image" className="img" />
                            <div>
                                <div className="p-2 m-1">
                                <Card.Title>Product Name</Card.Title>
                                <Card.Text>
                                Rp. XXX.XXX
                                </Card.Text>
                                <div>
                                <Button variant="success">--- BUY ---</Button>
                                
                                </div>
                                </div>
                            </div>
                                
                        </Card>
                        </Col>
                        <Col md={3} className="produkWrapper mt-3">
                        <Card className="text-dark produkImg">
                            <Image src={produkImage2} alt="Card image" className="img"/>
                            <div>
                                <div className="p-2 m-1">
                                <Card.Title>Product Name</Card.Title>
                                <Card.Text>
                                Rp. XXX.XXX
                                </Card.Text>
                                <Button variant="success">--- BUY ---</Button>
                                </div>
                            </div>
                                
                        </Card>
                        </Col>
                        <Col md={3} className="produkWrapper mt-3">
                        <Card className="text-dark produkImg">
                            <Image src={produkImage3} alt="Card image" className="img"/>
                            <div>
                                <div className="p-2 m-1">
                                <Card.Title>Product Name</Card.Title>
                                <Card.Text>
                                Rp. XXX.XXX
                                </Card.Text>
                                <Button variant="success">--- BUY ---</Button>
                                </div>
                            </div>
                                
                        </Card>
                        </Col>
                        <Col md={3} className="produkWrapper mt-3">
                        <Card className="text-dark produkImg">
                            <Image src={produkImage4} alt="Card image" className="img"/>
                            <div>
                                <div className="p-2 m-1">
                                <Card.Title>Product Name</Card.Title>
                                <Card.Text>
                                Rp. XXX.XXX
                                </Card.Text>
                                <Button variant="success">--- BUY ---</Button>
                                </div>
                            </div>
                                
                        </Card>
                        </Col>
                    </Row>
                </Container>  
            </div>
            <div>
                <Container>
                    <br />
                    <br />
                    <h1 className="text-center" id="about">About Us</h1>
                    <Row>
                        <Col md={6} className="produkWrapper">
                            <Image src={aboutImage} alt="Card image" className="aboutImg" />
                        </Col>
                        <Col md={6} className="produkWrapper">
                            <div className="aboutText">
                                <div className="p-2 m-1">
                                <p>
                                At SportChic we offer a curated selection of the latest and greates sport shoe styles from the world’s most innovative brands. 
                                </p>
                                <p>
                                Our tea, of experienced byerd buyers scours the globe to find the best design and technologies, so that you can be sure that you’re getting the very best.
                                </p>
                                <p>
                                We’ve commited to bringing you the most stylish and unique sport shoe designs, so that you can show off your individuality and make statement on and off the field.
                                </p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className="footer">
                <Container>
                    <br/>
                    <h1 className="footer text-dark mt-5" id="contact">SportChic</h1>
                    <br/>
                    <Row className="">
                        <Col md={4} className="produkWrapper produkImage" id="brand">
                        <h3>Page</h3>
                        <p>Home</p>
                        <p>Brand</p>
                        <p>About Us</p>
                        <p>Populer Product</p>
                        </Col>

                        <Col md={4} className="produkWrapper produkImage" id="brand">
                        <h3>Contact</h3>
                        <p>GMAIL        : sportchic@gmail.com</p>
                        <p>TWITTER      : @sportchicc</p>
                        <p>INSTAGRAM    : @sportchicc</p>
                        </Col>

                        <Col md={4} className="produkWrapper produkImage" id="brand">
                        <h3>Payment Method</h3>
                        <p>Pay Pal</p>
                        <p>Visa</p>
                        <p>Link</p>
                        <p>GPay</p>
                        </Col>

                        <h6 className="text-center">Copyright @2023 SportChic</h6>
                    </Row>
                    
                </Container>
            </div>
        </div>
    )
}

export default HomeComponents