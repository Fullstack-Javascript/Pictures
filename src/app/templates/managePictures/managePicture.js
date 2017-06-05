import React from 'react';
import {Thumbnail, Grid, Col, Row, Button}  from "react-bootstrap";
import ManagePicturesPage from './component/managePicturePage';

class ManagePictures extends React.Component{
    constructor(props){
        super(props)
        this.state={
                userName:"test",
                imageArray:null
            };
            this.getImages = this.getImages.bind(this); 
            //this.imageArray=null;
            this.getImages('test');
    }
    
    getImages (userName) {
        var that = this;
            var url = 'http://localhost:5000/getImages?userName='+this.state.userName
                       
            var xhr = new XMLHttpRequest();
            xhr.open('GET', url);
            xhr.onload = function() {
                if (xhr.status === 200) {
                    console.log(xhr.response)
                    that.state.imageArray = xhr.response;
                    //alert('User\'s name is ' + xhr.responseText);
                    this.render();
                }
                else {
                    alert('Request failed.  Returned status of ' + xhr.status);
                }
            };
            xhr.send();
            /*fetch(url)
            .then(function(response) {
                if (response.status > 200) {
                    throw new Error("Bad response from server");
                }
               // that.imageArray=response;
                //return that.imageArray;
                console.log(Promise.resolve(response))
                //return Promise.resolve(response) 
                return response.json();
               
            })*/
    }
    

    render(){
        console.log("po de--->"+this.state.imageArray)
        return(
            <div>
                <ManagePicturesPage imagesProp={this.state.imageArray}/>
            </div>
        )

    }
}

export default ManagePictures;