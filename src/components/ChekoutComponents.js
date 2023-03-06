import axios from 'axios';

const CheckoutComponents = () => {

    const [checkoutInput, setCheckoutInput] = useState({
      firstname: '',
      lastname: '',
      username: '',
      email: '',
      address: '',
      country: '',
      state: '',
      zipcode: '',
      setError: '',
    });

    const [error, setError] = useState({})

    const handleInput = (e) => {
      e.persist();
      setCheckoutInput({...checkoutInput, [e.target.name]: e.target.value});
    }

    const submitOrder = (e) => {
      e.preventDefault();
      const data = {
        firstname: checkoutInput.firstname,
        lastname: checkoutInput.lastname,
        username: checkoutInput.username,
        email: checkoutInput.email,
        address: checkoutInput.address,
        country: checkoutInput.country,
        state: checkoutInput.state,
        zipcode: checkoutInput.zipcode,
      }

      axios.post('/api/checkout', data).then(res =>{
        if(res.data.status === 200) {
          swal("Order Success",res.data.message,"success");
          setError([]);
          history('/')
        } else if (res.data.status === 422){
          swal("All firlds are mandatory","","error");
          setError(res.data.errors);
        }
    });
  }

    return (
        <div classNameName="maincontainer">
        <div className="container">
          <div className="py-5 text-center">
            
            <h2>Checkout form</h2>
          </div>
          <div className="row">
            <div className="col-md-4 order-md-2 mb-4">
              <h4 className="d-flex justify-content-between align-items-center mb-3">
                <span className="text-muted">Your cart</span>
                <span className="badge badge-secondary badge-pill">3</span>
              </h4>
              <ul className="list-group mb-3">
                <li className="list-group-item d-flex justify-content-between lh-condensed">
                  <div>
                    <h6 className="my-0">Product name</h6>
                    <small className="text-muted">Brief description</small>
                  </div>
                  <span className="text-muted">$12</span>
                </li>
                <li className="list-group-item d-flex justify-content-between lh-condensed">
                  <div>
                    <h6 className="my-0">Second product</h6>
                    <small className="text-muted">Brief description</small>
                  </div>
                  <span className="text-muted">$8</span>
                </li>
                <li className="list-group-item d-flex justify-content-between lh-condensed">
                  <div>
                    <h6 className="my-0">Third item</h6>
                    <small className="text-muted">Brief description</small>
                  </div>
                  <span className="text-muted">$5</span>
                </li>
                <li className="list-group-item d-flex justify-content-between bg-light">
                  <div className="text-success">
                    <h6 className="my-0">Promo code</h6>
                    <small>EXAMPLECODE</small>
                  </div>
                  <span className="text-success">-$5</span>
                </li>
                <li className="list-group-item d-flex justify-content-between">
                  <span>Total (USD)</span>
                  <strong>$20</strong>
                </li>
              </ul>
              <form className="card p-2">
                <div className="input-group">
                  <input type="text" className="form-control" placeholder="Promo code"/>
                  <div className="input-group-append">
                    <button type="button" className="btn btn-secondary">Redeem</button>
                  </div>
                </div>
              </form>
            </div>
            <div className="col-md-8 order-md-1">
              <h4 className="mb-3">Billing address</h4>
              <form className="needs-validation" novalidate>
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label for="firstName">First name</label>
                    <input type="text" onChange={handleInput} value={checkoutInput.firstname} className="form-control" id="firstName" placeholder="enter your first name" required />
                    <small className="text-danger">{error.firstname}</small>
                  </div>
                  <div className="col-md-6 mb-3">
                    <label for="lastName">Last name</label>
                    <input type="text" onChange={handleInput} value={checkoutInput.lastname} className="form-control" id="lastName" placeholder="" required />
                    <small className="text-danger">{error.lastname}</small>                    
                  </div>
                </div>
                <div className="mb-3">
                  <label for="username">Username</label>
                  <div className="input-group">
                    <div className="input-group-prepend">
                      <span className="input-group-text">@</span>
                    </div>
                    <input type="text" onChange={handleInput} value={checkoutInput.username} className="form-control" id="username" placeholder="Username" required />
                    <small className="text-danger">{error.username}</small>                    
                  </div>
                </div>
                <div className="mb-3">
                  <label for="email">Email <span className="text-muted">(Optional)</span></label>
                  <input type="email" onChange={handleInput} value={checkoutInput.email} className="form-control" id="email" placeholder="you@example.com" />
                  <small className="text-danger">{error.email}</small>                  
                </div>
                <div className="mb-3">
                  <label for="address">Address</label>
                  <input type="text" onChange={handleInput} value={checkoutInput.address} className="form-control" id="address" placeholder="1234 Main St" required />
                  <small className="text-danger">{error.address}</small>                  
                </div>
                
                <div className="row">
                  <div className="col-md-5 mb-3">
                    <label for="country">Country</label>
                    <input onChange={handleInput} value={checkoutInput.country} className="custom-select d-block w-100" id="country" required />
                    <small className="text-danger">{error.country}</small>                      
                  </div>
                  <div className="col-md-4 mb-3">
                    <label for="state">State</label>
                    <input onChange={handleInput} value={checkoutInput.state} className="custom-select d-block w-100" id="state" required />
                    <small className="text-danger">{error.state}</small>                      
                  </div>
                  <div className="col-md-3 mb-3">
                    <label for="zip">Zip</label>
                    <input type="text" onChange={handleInput} value={checkoutInput.zipcode} className="form-control" id="zip" placeholder="" required />
                    <small className="text-danger">{error.zipcode}</small>                    
                  </div>
                </div>
                <hr className="mb-4" />
                <div className="custom-control custom-checkbox">
                  <input type="checkbox" className="custom-control-input" id="same-address" />
                  <label className="custom-control-label" for="same-address">Shipping address is the same as my billing address</label>
                </div>
                <div className="custom-control custom-checkbox">
                  <input type="checkbox" className="custom-control-input" id="save-info" />
                  <label className="custom-control-label" for="save-info">Save this information for next time</label>
                </div>
                <hr className="mb-4" />
                <h4 className="mb-3">Payment</h4>
                <div className="d-block my-3">
                  <div className="custom-control custom-radio">
                    <input id="credit" name="paymentMethod" type="radio" className="custom-control-input" checked required />
                    <label className="custom-control-label" for="credit">Credit card</label>
                  </div>
                  <div className="custom-control custom-radio">
                    <input id="debit" name="paymentMethod" type="radio" className="custom-control-input" required />
                    <label className="custom-control-label" for="debit">Debit card</label>
                  </div>
                  <div className="custom-control custom-radio">
                    <input id="paypal" name="paymentMethod" type="radio" className="custom-control-input" required />
                    <label className="custom-control-label" for="paypal">Paypal</label>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label for="cc-name">Name on card</label>
                    <input type="text" className="form-control" id="cc-name" placeholder="" required />
                    <small className="text-muted">Full name as displayed on card</small>
                    <div className="invalid-feedback">
                      Name on card is required
                    </div>
                  </div>
                  <div className="col-md-6 mb-3">
                    <label for="cc-number">Credit card number</label>
                    <input type="text" className="form-control" id="cc-number" placeholder="" required />
                    <div className="invalid-feedback">
                      Credit card number is required
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-3 mb-3">
                    <label for="cc-expiration">Expiration</label>
                    <input type="text" className="form-control" id="cc-expiration" placeholder="" required />
                    <div className="invalid-feedback">
                      Expiration date required
                    </div>
                  </div>
                  <div className="col-md-3 mb-3">
                    <label for="cc-expiration">CVV</label>
                    <input type="text" className="form-control" id="cc-cvv" placeholder="" required />
                    <div className="invalid-feedback">
                      Security code required
                    </div>
                  </div>
                </div>
                <hr className="mb-4" />
                <button className="btn btn-primary btn-lg btn-block" type="button" onClick={submitOrder}>Continue to checkout</button>
              </form>
            </div>
          </div>
          </div>
          <footer className="my-5 pt-5 text-muted text-center text-small">
            <p className="mb-1">&copy; 2020-2021 therichpost.com</p>
            <ul className="list-inline">
              <li className="list-inline-item"><a href="#">Privacy</a></li>
              <li className="list-inline-item"><a href="#">Terms</a></li>
              <li className="list-inline-item"><a href="#">Support</a></li>
            </ul>
          </footer>
        </div>
    )
}

export default CheckoutComponents