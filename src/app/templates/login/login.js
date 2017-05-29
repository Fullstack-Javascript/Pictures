import React from 'react';
import LoginPage from './component/loginpage';

class Login extends React.Component{
    
        constructor(props){
            super(props);
            
            this.state={
                userName:"",
                password:"",
                login:false
            };
            this.validateLogin = this.validateLogin.bind(this); 
            this.getUserName = this.getUserName.bind(this);  
            this.getPassword = this.getPassword.bind(this);
        }
        getUserName(e){
            this.setState({userName: e.target.value})
        }
        getPassword(e){
            this.setState({password: e.target.value})
        }
        validateLogin (e,usr,pwd) {  
            var dataToSave = this.state.data;
           var that = this;
            var url = 'http://localhost:5000/validateLogin?username='+this.state.userName+'&password='+this.state.password

            fetch(url)
            .then(function(response) {
                if (response.status > 200) {
                    that.setState({ login: true });
                    throw new Error("Bad response from server");
                }
                return response.json();
            })
            .then(function(data) {
                if(data){
                    that.setState({ login: false });
                    that.props.router.replace('/managePictures')
                } 
            });
        }
        
        render(){
            return(
                <div>
                   <LoginPage loginProp={this.state.login} getUserNameProp = {this.getUserName} getPasswordProp = {this.getPassword} validateLoginProp = {this.validateLogin}/>

                </div>
            );
        }
    }


export default Login;