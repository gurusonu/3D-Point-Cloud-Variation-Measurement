import React, {Component} from 'react';
import axios from 'axios';

export default class CreateUser extends Component {
    
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            email: '',
            mobile: ''
            // type_of_user: ''
        }

        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangeMobile = this.onChangeMobile.bind(this);
        // this.onChangeType = this.onChangeType.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    
    onChangeUsername(event) {
        this.setState({ username: event.target.value });
    }

    onChangeEmail(event) {
        this.setState({ email: event.target.value });
    }

    onChangeMobile(event) {
        this.setState({ mobile: event.target.value });
    }

    // onChangeType(event) {
    //     this.setState({ type_of_user: event.target.value });
    // }

    onSubmit(e) {
        e.preventDefault();

        const newUser = {
            username: this.state.username,
            email: this.state.email,
            mobile: this.state.mobile,
            // type_of_user: this.state.type_of_user
        }

        axios.post('http://localhost:4000/add', newUser)
             .then(res => console.log(res.data));

        this.setState({
            username: '',
            email: '',
            mobile: ''
            // type_of_user: ''
        });
    }

    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Email: </label>
                        <input type="text" 
                               className="form-control" 
                               value={this.state.username}
                               onChange={this.onChangeUsername}
                               />
                    </div>
                    <div className="form-group">
                        <label>Mobile Number: </label>
                        <input type="text" 
                               className="form-control" 
                               value={this.state.mobile}
                               onChange={this.onChangeMobile}
                               />  
                    </div>
                    <div className="form-group">
                        <label>Password: </label>
                        <input type="password" 
                               className="form-control" 
                               value={this.state.email}
                               onChange={this.onChangeEmail}
                               />  
                    </div>
                    {/* <div className="form-group">
                        <label>Confirm Password: </label>
                        <input type="text" 
                               className="form-control" 
                               value={this.state.email}
                               onChange={this.onChangeEmail}
                               />  
                    </div> */}
                    
                    {/* <div className="form-group">
                        <label>User Type: </label>
                        <select id="opt" 
                               className="form-control" 
                               value={this.state.type_of_user}
                               onChange={this.onChangeType}
                               >
                                       <option value="select">Select</option>
                                       <option value="vendor">Vendor</option>
                                       <option value="customer">Customer</option>

                        </select>
                    </div> */}
                    <div className="form-group">
                        <input type="submit" value="submit" className="btn btn-primary"/>
                    </div>
                </form>
            </div>
        )
    }
}