import React from 'react';
import Navbar from '../admin/Navbar';
import Sidebar from '../admin/Sidebar';
import Footer from '../admin/Footer';
import '../../assets/admin/css/styles.css';
import '../../assets/admin/js/scripts';
import { Link } from 'react-router-dom';

function AddProduct() {
    return (
        <div classNameName="sb-nav-fixed">
            <Navbar />
            <div id="layoutSidenav">
                <div id="layoutSidenav_nav">
                    <Sidebar />
                </div>

                <div id="layoutSidenav_content">
                    <main>
                        <div className="container-fluid px-4">
                            <div className="card mt-4">
                                <div className="card-header">
                                    <h4>Add Produk
                                        <Link to="/admin/view-product" className="btn btn-success btn-sm float-end">View Product</Link>
                                    </h4>
                                </div>
                                <div className="card-body">
                                    <ul class="nav nav-tabs" id="myTab" role="tablist">
                                        <li class="nav-item">
                                            <Link class="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Home</Link>
                                        </li>
                                        <li class="nav-item">
                                            <Link class="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Profile</Link>
                                        </li>
                                        <li class="nav-item">
                                            <Link class="nav-link" id="contact-tab" data-toggle="tab" href="#contact" role="tab" aria-controls="contact" aria-selected="false">Contact</Link>
                                        </li>
                                    </ul>
                                    <div class="tab-content" id="myTabContent">
                                        <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                            A
                                        </div>
                                        <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                                            B
                                        </div>
                                        <div class="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">
                                            C
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </main>
                    <Footer />
                </div>
            </div>
        </div>
    )
}

export default AddProduct;