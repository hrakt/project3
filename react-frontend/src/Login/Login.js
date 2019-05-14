import React,{Component} from 'react';
import {Redirect, Link} from "react-router-dom";


class Login extends Component{
    state={
        username:'',
        password:''
    };

    changeHandler= e =>{
        this.setState({
            [e.target.name]: e.target.value
        });
        console.log(this.state);
    }
    
    onSubmit = async (e)=>{
        e.preventDefault();
        const loginResponse = await fetch ('/users/login ',{
            method:"POST",
            credentials:"include",
            body: JSON.stringify(this.state),
            headers:{
                "Content-Type":'application/json'
            }
        });
        const parsedLogin = await loginResponse.json()
        if (parsedLogin.success){
            this.props.loggedIn()
        }
    }
    render(){
        return(
            this.props.logged
            ?    <Redirect to='/'/>
            :   <form onSubmit={this.onSubmit}>
                    <input type="text" name="username" value={this.state.username} onChange={this.changeHandler}/>
                    <input type="password" name ="password" value={this.state.password} onChange=   {this.changeHandler}/>
                    <button type="submit">LOGIN</button>
                    <p>Not registered? <Link to='/register'>Register Here!</Link></p>
                </form>
        )
    }
}

export default Login;