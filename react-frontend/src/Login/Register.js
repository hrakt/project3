import React,{Component} from 'react';



class Register extends Component{
    state={
        username:'',
        password:'',
        firstName:'',
        lastName:'',
        logged:false
    };
    changeHandler = (e) =>{
        this.setState({
            [e.target.name]: e.target.value
        });
        console.log(this.state);
    };
    onSubmit = async (e)=>{
        console.log("hey")
        console.log(this.state,'this.state before sending it out')
        e.preventDefault();
        const registerResponse = await fetch ('/users/register',{
            method:"POST",
            credentials:"include",
            body: JSON.stringify(this.state),
            headers:{
                "Content-Type":'application/json'
            }
        });
        const parsedResponse = await registerResponse.json();
        if(parsedResponse.success){
            this.setState({
                logged:true
            })
    }   
    }
    render(){
        return(
        <form onSubmit={this.onSubmit}>
            Register Page <br/>
            <label>
                Email/Username:
                <input type="text" name="username" onChange={this.changeHandler}/>
            </label>
            <br/>
            <label>
                First Name:
                <input type="text" name="firstName" onChange={this.changeHandler}/>
            </label>
            <br/>
            <label>
                Last Name:
                <input type="text" name="lastName" onChange={this.changeHandler}/>
            </label>
            <br/>
            <label>
                Password:
                <input type="password" name="password" onChange={this.changeHandler}/>
            </label>
            <br/>
                <input type='Submit' value= "Register"/>
        </form>

        );
        }
}

export default Register;