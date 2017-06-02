import React from 'react';
import {Thumbnail, Grid, Col, Row, Button}  from "react-bootstrap";
import ManagePicturesPage from './component/managePicturePage';

class ManagePictures extends React.Component{
    constructor(props){
        super(props)
        this.state={
                userName:"test",
            };
            this.getImages = this.getImages.bind(this); 
            this.imageArray=this.getImages('test');
    }
    getImages (userName) {
        var that = this;
            var url = 'http://localhost:5000/getImages?userName='+this.state.userName

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
                    console.log("data from getImages service: " + data);
                } 
            });
    }
    

    render(){
        return(
            <div>
                <ManagePicturesPage imagesProp={this.imageArray}/>
            </div>
        )

    }
}

export default ManagePictures;