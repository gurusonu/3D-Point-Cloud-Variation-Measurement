import React, {Component} from 'react';
import axios from 'axios';

export default class LoginUser extends Component {
    
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            email: '',
            // type_of_user: ''
        }

        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        // this.onChangeType = this.onChangeType.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    
    onChangeUsername(event) {
        this.setState({ username: event.target.value });
    }

    onChangeEmail(event) {
        this.setState({ email: event.target.value });
    }

    // onChangeType(event) {
    //     this.setState({ type_of_user: event.target.value });
    // }

    onSubmit(e) {
        e.preventDefault();
        // console.log("submit")
        const newUser = {
            username: this.state.username,
            email: this.state.email,
            // type_of_user: this.state.type_of_user
        }
        localStorage.setItem("user_profile",newUser.username)
        // console.log("final1")
        axios.post('http://localhost:4000/login', newUser)
             .then(function(res){
                //  console.log("final")
             if(res.data===1 || res.data===2)
             {
                //  console.log("inin")
                 window.location = "/login_page"
             }
             else if(res.data===4)
             {
                // console.log("ninin")
                 window.location = "/vendor_page" 
             }
             else
             {
                 window.location = "/customer_page"
             }
            });
        this.setState({
            username: '',
            email: '',
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
                        <label>Password: </label>
                        <input type="password" 
                               className="form-control" 
                               value={this.state.email}
                               onChange={this.onChangeEmail}
                               />  
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Login" className="btn btn-primary"/>
                    </div>
                </form>
            </div>
        )
    }
}