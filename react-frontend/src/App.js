import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';


import Login from './Login/Login'
import Register from './Login/Register'
import NavBar from './component/Navbar';
import * as routes from './constants/routes';


class App extends Component  {
  state={
    logged: false
  }

  checkedLogged= ()=>{
    this.setState({
      logged:true
    })
  }
  
  render(){
    return (
      <div className="App">
        <NavBar logStat={this.state.logged} logOut={() => this.setState({logged: !this.state.logged})}/>
        <Switch>
          <Route exact path={routes.ROOT} render={()  =><div>ROOT</div>} />
          <Route exact path={routes.HOME} render={()  =><div>HOME</div>} />
          <Route exact path={routes.USERS} render={()  =><div>USERS</div>} />
          <Route exact path={routes.POST} render={()  =><div>POST</div>} />
          <Route exact path={routes.LOGIN} render={()  =><Login loggedIn={this.checkedLogged} logged={this.state.logged}/>} />
          <Route exact path={routes.REGISTER} render={()  =><Register/>} />
          <Route render={()=><div>NOT FOUND</div>} />
        </Switch>
      </div>
    );
  }
}

export default App;
