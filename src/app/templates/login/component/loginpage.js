import React from 'react';
import {ControlLabel,FormControl,Button,Grid, Row, Col}  from "react-bootstrap"
class LoginPage extends React.Component {
    render () {
        return (
            <div className="postion-center">
                <form>
                    <Grid>
                        <Row>
                            <Col xs={12} md={12}>
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
                            <Button bsStyle="success" class="btn btn-primary btn-lg"> 
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