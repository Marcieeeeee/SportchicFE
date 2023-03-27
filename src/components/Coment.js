import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom"
import axios from "axios";
import swal from "sweetalert";

function Coment () 
{
    const history = useNavigate();

    const [coment, setComent] = useState({
        email: '',
        username: '',
        comment: '',
        error_list: [],
    });

    const handleInput = (e) => {
        e.persist();
        setComent({...coment, [e.target.name]: e.target.value });
    }

    const commentSubmit = (e) => {
        e.preventDefault();
        const data = {
            email: coment.email,
            username: coment.username,
            comment: coment.comment,
        }

        axios.post('/api/comment', data).then(res =>{
            if(res.data.status === 200) {
              swal("Comment Added Successfully",res.data.message,"success");
              history('/coment')
            } else if (res.data.status === 422){
              swal("Please Fill All the Data","","error");
            } 
        });
    }

    return (
        <div className="container py-5">
            <div className="row justify-content-start">
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-header">
                            <h4>Comment Section</h4>
                        </div>
                        <div className="card-body">
                            <form onSubmit={commentSubmit}>
                                <div className="form-group mb-3">
                                    <label>Username</label>
                                    <input type="text" name="username" onChange={handleInput} value={coment.username} className="form-control"/>
                                    <span>{coment.error_list.username}</span>
                                </div>
                                <div className="form-group mb-3">
                                    <label>Email</label>
                                    <input type="email" name="email" onChange={handleInput} value={coment.email} className="form-control" />
                                    <span>{coment.error_list.email}</span>
                                </div>
                                <div className="form-group mb-3">
                                    <label>Password</label>
                                    <input type="textArea" name="comment" onChange={handleInput} value={coment.comment} className="form-control"/>
                                    <span>{coment.error_list.comment}</span>
                                </div>
                                <div className="form-group mb-3">
                                    <button type="submit" className="btn btn-success">Send</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Coment