import React from 'react';
import LoginPage from './component/loginpage';

class Login extends React.Component{
    
        constructor(props){
            super(props);
            console.log("Inside cons")
            
            this.state={
                login:{
                    response:''
                }
            };
            this.validateLogin = this.validateLogin.bind(this);   
        }
        validateLogin (e) {  
            var dataToSave = this.state.data;
            //this.setState({data:dataToSave});  
            console.log("Inside validateLogin")
           var that = this;
            var url = 'http://localhost:5000/validateLogin?username=test&password=podadai'

            fetch(url)
            .then(function(response) {
                if (response.status > 200) {
                    console.log("bad response")
                throw new Error("Bad response from server");
                }
                return response.json();
            })
            .then(function(data) {
                if(data){
                    console.log(data);
                    //var loginResponse = data;
                    //var savingData = {};
                   // savingData.
                    that.setState({ login: "sucess" });
                }
                
                
            });
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