import React from 'react';
import Navbar from '../admin/Navbar';
import Sidebar from '../admin/Sidebar';
import Footer from '../admin/Footer';
import '../../assets/admin/css/styles.css';
import '../../assets/admin/js/scripts';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import swal from "sweetalert";

function EditProduct() {

    const [errorList, setError] = useState([])

    const [categoryList, setCategoryList] = useState([])

    const [imagedata, setImagedata] = useState('')  

    useEffect(() => {
        axios.get(`/api/all-category`).then(res =>{
            if(res.data.status === 200) {
                setCategoryList(res.data.category);
            }
        })
    }, [])


    const [productInput, setProduct] = useState({
        category_id: '',
        name: '',
        price: '',
        description: '',
    });
    
    const submitProduct = (e) => {
        e.preventDefault();
    
        const fData = new FormData();
        fData.append('image', imagedata);
        fData.append('category_id', productInput.category_id);
        fData.append('name', productInput.name);
        fData.append('price', productInput.price);
        fData.append('description', productInput.description);
    
        axios.post(`/api/store-product`, fData).then(res => {
            if (res.data.status === 200) {
                swal('Success', res.data.message, 'success');
                setProduct({
                    category_id: '',
                    name: '',
                    price: '',
                    description: '',
                });
                setImagedata('');
                setError([]);
            } else if (res.data.status === 422) {
                swal('All fields are mandatory', '', 'error');
                setError(res.data.error);
            }
        });
    };
    
    const handleImage = file => {
        setImagedata(file[0]);
    }

    const handleInput = (e) => {
        e.persist();
        
        setProduct({
            ...productInput,
            [e.target.name]: e.target.value,
        });
    };
        return (
        <div className="sb-nav-fixed">
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
                                    <h4>Add Product
                                        <Link to="/admin/view-product" className="btn btn-success btn-sm float-end">View Product</Link>
                                    </h4>
                                </div>
                                <div className="card-body">
                                    <form onSubmit={submitProduct} encType="multipart/form-data" >
                                        <div className="tab-content" id="myTabContent">
                                            <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                                <div className="form-group mb-3">
                                                    <label>Select Category</label>
                                                    <select name="category_id" onChange={handleInput} value={productInput.category_id} className="form-control">
                                                        <option>Select option</option>
                                                        {
                                                            categoryList.map((item) => {
                                                                return (
                                                                    <option value={item.id} key={item.id}>{item.name}</option>
                                                                )
                                                            })
                                                        }
                                                    </select>
                                                    <small className="text-danger">{errorList.category_id}</small>
                                                </div>
                                                <div className="form-group mb-3">
                                                    <label>Product Name</label>
                                                    <input type="text" name="name" onChange={handleInput} value={productInput.name} className="form-control" />
                                                    <small className="text-danger">{errorList.name}</small>
                                                </div>
                                                <div className="form-group mb-3">
                                                    <label>Image</label>
                                                    <input type="file" name="image" onChange={e => handleImage (e.target.file)} className="form-control" />
                                                    <small className="text-danger">{errorList.image}</small>
                                                </div>
                                                <div className="form-group mb-3">
                                                    <label>Price</label>
                                                    <input type="text" name="price" onChange={handleInput} value={productInput.price} className="form-control" />
                                                    <small className="text-danger">{errorList.price}</small>
                                                </div>
                                                <div className="form-group mb-3">
                                                    <label>Description</label>
                                                    <textarea name="description" onChange={handleInput} value={productInput.description} className="form-control"></textarea>
                                                </div>
                                            </div>
                                        </div>
                                        <button type="submit" className="btn btn-success px-4 mt-2">Submit</button>
                                    </form>
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

export default EditProduct;