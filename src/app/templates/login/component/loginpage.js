import React from 'react';
import {ControlLabel,FormControl,Button,Grid, Row, Col}  from "react-bootstrap"
class LoginPage extends React.Component {
    render () {
        return (
            <div className="postion-center">
                <form>
                    <Grid>
                        <Row className="vertical-center">
                            <Col xs={4} md={4}>
                            </Col>
                            <Col xs={4} md={4} className="form-style">
                            <label className="postion-left"> 
                                <ControlLabel>User Name:</ControlLabel>
                                <FormControl type="text" placeholder="User name"/>
                            </label>
                            <br/><br/>
                            <label className="postion-left"> 
                                <ControlLabel>Password:</ControlLabel>
                                <FormControl type="Password" placeholder="Password"/>
                            </label>
                            <br/><br/>
                            <button onClick={this.props.validateLogin}>Sonna kekanum</button>
                            <Button bsStyle="success" block onClick = {this.props.validateLogin}> 
                                Login
                            </Button>
                            </Col>
                        </Row>
                    </Grid>
                </form>
            </div>
        );
    }
}



export default LoginPage;