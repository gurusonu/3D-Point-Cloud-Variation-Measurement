import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"

import UsersList from './users-list.component'
// import Search from './search.component';
// import ShowProduct from './product-detail.component'
// import Dispatch from './dispatch.component'

export default class cus_opt extends Component {
    // console.log("dcbs")
    render() {
        return (
            <Router>
            <div className="container">
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    {/* <Link to="/vendor_page" className="navbar-brand">Vendor</Link> */}
                    <div className="collapse navbar-collapse">
                        <ul className="navbar-nav mr-auto">
                            {/* <li className="navbar-item">
                                <Link to="/addproduct_to" className="nav-link">Add product</Link>
                            </li> */}
                     <li className="navbar-item">
                         <Link to="/" className="nav-link">show product</Link>
                     </li>
                     <li className="navbar-item">
                         <Link to="/" className="nav-link">search</Link>
                     </li>
                     {/* <li className="navbar-item">
                         <Link to="/dispatch" className="nav-link">In stock</Link>
                     </li> */}
                         </ul>
                     </div>
                 </nav>
                 {/* <h1>Customer</h1> */}
                 <br/>
        {/* <Route path="/" exact component={UsersList}/>
        <Route path="/addproduct_to" component={CreateProduct}/> */}
        <Route path="/" component={UsersList}/>
        <Route path="/" component={UsersList}/> 
        {/* <Route path="/dispatch" component={Dispatch}/>  */}
        {/* <Route path="/vendor_page" component={opt}/>  */}
       </div>
          </Router>
        );
    }
}