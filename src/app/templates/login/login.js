import React from 'react';
import LoginPage from './component/loginpage';

class Login extends React.Component{
    
        constructor(props){
            super(props);
            console.log("Inside cons")
            
            this.state={
                data:{
                    test:'tested'
                }
            };
            this.validateLogin = this.validateLogin.bind(this);   
        }
        validateLogin (e) {  
            var dataToSave = this.state.data;
            this.setState({data:dataToSave});  
            console.log("Inside validateLogin")
           /* var that = this;
            var url = 'http://localhost:5000/validateLogin?username=test&password=test'

            fetch(url)
            .then(function(response) {
                if (response.status >= 400) {
                throw new Error("Bad response from server");
                }
                return response.json();
            })
            .then(function(data) {
                console.log(data);
                //that.setState({ person: data.person });
            });*/
        }
        render(){
            return(
                <div>
                   <LoginPage validateLoginProp = {this.validateLogin}/>

                </div>
            );
        }
    }


export default Login;