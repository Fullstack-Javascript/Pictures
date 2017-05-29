import React from 'react';
import {Thumbnail, Grid, Col, Row, Button}  from "react-bootstrap"

class ManagePictures extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div>
                <form>
                    <h1>Your pictures...</h1>
                    <Row>
                        <Col xs={4} md={4}>
                            <Thumbnail src = "./images/picturesLogo.png" alt="img1">
                            </Thumbnail>
                        </Col>
                        <Col xs={4} md={4}>
                            <Thumbnail src = "./images/picturesLogo.png" alt="img1">
                            </Thumbnail>
                        </Col>
                        <Col xs={4} md={4}>
                            <Thumbnail src = "./images/picturesLogo.png" alt="img1">
                            </Thumbnail>
                        </Col>
                    </Row>
                    {/*<Row>
                        <Col xs={10} md={10}>
                        </Col>
                        <Col xs={2} md={2}>
                                <Button block>
                                    Next...
                                </Button>
                        </Col>
                    </Row> */}                   
                </form>
            </div>
        )

    }
}

export default ManagePictures;